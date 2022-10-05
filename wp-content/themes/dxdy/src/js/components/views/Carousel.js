import {
  ARIA, SELECTORS, CLASS_NAMES, EVENTS, MISC,
} from '../../Constants';
import { getyoutubeidfromurl, MessageBus } from '../../Utils';

/**
 * A class that creates the functionality for a carousel
 */
export default class Carousel extends MessageBus {
  /**
     * Constructor for Carousel
     *
     * @param {HTMLElement} element - REQUIRED - the module's container
     */
  constructor(element) {
    /**
         * DOM node that is passed into the constructor
         *
         * @property {Object} element DOM node that is passed into the constructor
         */
    super();

    this.element = element;

    // Initialize the view
    this.init();
  }

  /**
     * Initializes the view by calling the functions to
     * create DOM references, setup event handlers and
     * then create the event listeners
     *
     * @return {Object} Header A reference to the current instance of the class
     * @chainable
     */
  init() {
    this.cacheDomReferences()
      .setupIndex()
      .createControls()
      .setupHandlers()
      .enable();

    return this;
  }

  /**
     * Cache DOM References
     *
     * Find all necessary DOM elements used in the view and cache them
     *
     * @return {Object} Header A reference to the current instance of the class
     * @chainable
     */
  cacheDomReferences() {
    this.carousel = this.element.querySelector(`.${CLASS_NAMES.CAROUSEL}${MISC.__}${CLASS_NAMES.SLIDES}`);
    console.log(`${CLASS_NAMES.CAROUSEL}${MISC.__}${CLASS_NAMES.SLIDES}${MISC.dash}${CLASS_NAMES.ITEM}`);
    this.carouselitems = this.carousel.querySelectorAll(`.${CLASS_NAMES.CAROUSEL}${MISC.__}${CLASS_NAMES.SLIDES}${MISC.dash}${CLASS_NAMES.ITEM}`);

    return this;
  }

  /**
   * Creates and attaches carousel controls to the DOM
   *
   * @return {Object} From A reference to the current instance of the class
   * @chainable
   */
  createControls() {
    // create elements
    this.controls = document.createElement(SELECTORS.DIV);
    this.prev = document.createElement(SELECTORS.BUTTON);
    this.next = document.createElement(SELECTORS.BUTTON);
    this.counter = document.createElement(SELECTORS.SPAN);

    // add classes
    this.controls.classList.add(`${CLASS_NAMES.CAROUSEL}${MISC.__}${CLASS_NAMES.CONTROLS}`);
    this.prev.classList.add(`${CLASS_NAMES.CAROUSEL}${MISC.__}${CLASS_NAMES.PREVIOUS}`);
    this.next.classList.add(`${CLASS_NAMES.CAROUSEL}${MISC.__}${CLASS_NAMES.NEXT}`);
    this.counter.classList.add(`${CLASS_NAMES.CAROUSEL}${MISC.__}${CLASS_NAMES.COUNTER}`);

    // create content
    const prevcontent = document.createTextNode(`${CLASS_NAMES.PREVIOUS.charAt(0).toUpperCase() + CLASS_NAMES.PREVIOUS.slice(1)}`);
    const nextcontent = document.createTextNode(`${CLASS_NAMES.NEXT.charAt(0).toUpperCase() + CLASS_NAMES.NEXT.slice(1)}`);
    const countercontent = document.createTextNode(`${this.currentindex + 1} of ${this.carouselitems.length}`);

    // put it all together
    this.prev.appendChild(prevcontent);
    this.next.appendChild(nextcontent);
    this.counter.appendChild(countercontent);
    this.controls.appendChild(this.prev);
    this.controls.appendChild(this.next);
    this.controls.appendChild(this.counter);

    // attach to DOM
    this.element.appendChild(this.controls);

    return this;
  }

  /**
     * Bind event handlers with the proper context of `this`.
     *
     * @return {Object} A reference to the current instance of the class
     * @chainable
     */
  setupHandlers() {
    this.onPrevHandler = this.prevSlide.bind(this);
    this.onNextHandler = this.nextSlide.bind(this);
    this.onKeyDownHandler = this.onKeyDown.bind(this);

    return this;
  }

  /**
   * Determine if we are starting at the first slide in the list or some other slide
   *
   * @return {Object} A reference to the current instance of the class
   * @chainable
   */
  setupIndex() {
    // some variables to hold our carousel state
    this.currentindex = 0;
    this.previtemindex = this.carouselitems.length - 1;
    this.nextitemindex = 1;
    let hasactive = false;

    for (let i = 0; i < this.carouselitems.length; i++) {
      if (this.carouselitems[i].classList.contains(CLASS_NAMES.ACTIVE)) {
        hasactive = true;
        this.currentindex = i;
        if (i + 1 === this.carouselitems.length) {
          this.nextitemindex = 0;
        }
        this.nextitemindex = i + 1;
        if (i !== 0) {
          this.previtemindex = i - 1;
        }
        break;
      }
    }

    if (!hasactive) {
      this.carouselitems[0].classList.add(CLASS_NAMES.ACTIVE);
      this.currentindex = 0;
      this.nextitemindex = 1;
      this.previtemindex = this.carouselitems.length - 1;
    }

    return this;
  }

  /**
     * Create event handlers to enable interaction with view
     *
     * @return {Object} From A reference to the current instance of the class
     * @chainable
     */
  enable() {
    this.prev.addEventListener(EVENTS.CLICK, this.onPrevHandler, false);
    this.next.addEventListener(EVENTS.CLICK, this.onNextHandler, false);
    this.carousel.addEventListener(EVENTS.KEY_DOWN, this.onKeyDownHandler);
    window.addEventListener(EVENTS.KEY_DOWN, this.onKeyDownHandler);

    return this;
  }

  /**
     * navigates through carousel on key down
     *
     * @param {Event} event - the event object
     * @return {Object} Dropdown A reference to the current instance of the class
     * @chainable
     */
  onKeyDown(event) {
    if (this.element.dataset.visible === MISC.TRUE) {
      if (event.keyCode === 37) {
        this.prevSlide(event);
      }
      else if (event.keyCode === 39) {
        this.nextSlide(event);
      }
    }

    return this;
  }

  /**
   * goes to previous slide
   *
   * @param {Event} event - the event object
   * @return {Object} Dropdown A reference to the current instance of the class
   * @chainable
   */
  prevSlide(event) {
    this.controls.classList.add(CLASS_NAMES.TRANSITIONING);
    const oldindex = this.currentindex;
    if (this.currentindex !== 0) {
      this.currentindex--;
      this.nextitemindex++;
      this.previtemindex = oldindex;
    } else {
      this.currentindex = (this.carouselitems.length - 1);
      this.previtemindex = oldindex;
      this.nextitemindex = 0;
    }

    setTimeout( () => this.updateCarousel(), 100);

    return this;
  }

  /**
   * goes to next slide
   *
   * @param {Event} event - the event object
   * @return {Object} Dropdown A reference to the current instance of the class
   * @chainable
   */
  nextSlide(event) {
    this.controls.classList.add(CLASS_NAMES.TRANSITIONING);
    const oldindex = this.currentindex;
    if (this.currentindex !== (this.carouselitems.length - 1)) {
      this.currentindex++;
      this.previtemindex = oldindex;
      this.nextitemindex = this.currentindex === (this.carouselitems.length - 1) ? 0 : this.nextitemindex + 1;
    } else {
      this.currentindex = 0;
      this.previtemindex = oldindex;
      this.nextitemindex = 1;
    }

    setTimeout( () => this.updateCarousel(), 100 );

    return this;
  }

  /**
     * updates DOM with slide changes
     *
     * @param {Event} event - the event object
     * @return {Object} Dropdown A reference to the current instance of the class
     * @chainable
     */
  updateCarousel() {
    // pause video in current slide, if playing
    const oldvideoslide = this.carouselitems[this.previtemindex].querySelector(`.${CLASS_NAMES.ACTIVE} .${CLASS_NAMES.VIDEO}`);
    if (!!oldvideoslide) {
      this.sendEvent(EVENTS.PAUSE_VIDEO, getyoutubeidfromurl(oldvideoslide.dataset.url), document);
    }
    // switch!
    this.carousel.querySelector(`.${CLASS_NAMES.ACTIVE}`).classList.remove(CLASS_NAMES.ACTIVE);
    this.carouselitems[this.currentindex].classList.add(CLASS_NAMES.ACTIVE);
    this.counter.innerHTML = `${this.currentindex + 1} of ${this.carouselitems.length}`;
    setTimeout( () => this.controls.classList.remove(CLASS_NAMES.TRANSITIONING), 2000);

    return this;
  }
}

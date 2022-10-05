import {
  SELECTORS, CLASS_NAMES, EVENTS, MISC,
} from '../../Constants';
import { MessageBus } from '../../Utils';

/**
 * A class that creates the functionality for a wordwall
 */
export default class WordWall extends MessageBus {
  /**
     * Constructor for word wall
     *
     * @param {HTMLElement} element - REQUIRED - the module's container
     */
  constructor(element, Services) {
    /**
         * DOM node that is passed into the constructor
         *
         * @property {Object} element DOM node that is passed into the constructor
         */
    super();

    this.element = element;
    // The word card animation direction options
    this.directions = [MISC.RIGHT, MISC.LEFT];
    // The word card length options
    this.sizes = [MISC.LONG, MISC.SHORT, MISC.MEDIUM];

    /**
         * Reference to the ResizeService singleton
         * @property {Object}
         */
    this.ResizeService = Services.ResizeService;

    // Initialize the view
    this.init();
  }

  /**
     * Initializes the view by calling the functions to
     * create DOM references, setup event handlers and
     * then create the event listeners
     *
     * @return {Object} WordWall A reference to the current instance of the class
     * @chainable
     */
  init() {
    this.cacheDomReferences()
      .setupHandlers()
      .enable();

    return this;
  }

  /**
     * Cache DOM References
     *
     * Find all necessary DOM elements used in the view and cache them
     *
     * @return {Object} WordWall A reference to the current instance of the class
     * @chainable
     */
  cacheDomReferences() {
    /**
       * The `<button>` that a user interacts to pause or play the wordcard animation
       * @type {Object}
       */
    this.animationController = this.element.querySelector(`.${CLASS_NAMES.WORDWALL}__${SELECTORS.BUTTON}`);
    /**
       * An array of word cards for animation
       * @type {Object}
       */
    this.wordCards = Array.prototype.slice.call(this.element.querySelectorAll(`.${CLASS_NAMES.WORDCARD}`));
    /**
       * The entire word wall dom element
       * @type {Object}
       */
    this.wordWall = this.element.querySelector(`.${CLASS_NAMES.WORDWALL}__stackcards`);

    return this;
  }

  /**
     * Bind event handlers with the proper context of `this`.
     *
     * @return {Object} A reference to the current instance of the class
     * @chainable
     */
  setupHandlers() {
    this.onResizeHandler = this.onResize.bind(this);
    this.initializeAnimationHandler = this.initializeAnimation.bind(this);
    this.controlAnimationHandler = this.controlAnimation.bind(this);
    this.continueAnimationHandler = this.continueAnimation.bind(this);

    return this;
  }

  enable() {
    // Click handler for the button to pause/play the button
    this.animationController.addEventListener(EVENTS.CLICK, this.controlAnimation.bind(this));

    // Listener for when a card animation ends, triggering the next card to animate
    this.wordCards.forEach((card) => {
      card.addEventListener(EVENTS.ANIMATIONEND, this.continueAnimation.bind(this));
    });

    // Initialize animation on load
    window.setTimeout(this.initializeAnimationHandler, 300);

    // Add to ResizeService
    this.ResizeService.addCallback(this.onResizeHandler);

    return this;
  }

  /**
     * Control animation play state on click
     *
     * @return {Object} A reference to the current instance of the class
     * @chainable
     */
  controlAnimation() {
    this.animationController.classList.toggle(CLASS_NAMES.PAUSED);
    this.wordWall.classList.toggle(CLASS_NAMES.PAUSED);

    if (this.animationController.classList.contains(CLASS_NAMES.PAUSED)) {
      const playText = this.animationController.getAttribute('data-playtext');
      this.animationController.innerHTML = playText;
    } else {
      const pauseText = this.animationController.getAttribute('data-pausetext');
      this.animationController.innerHTML = pauseText;
    }

    return this;
  }

  /**
     * Trigger the animation to re-initialize on screen resize
     *
     * @return {Object} A reference to the current instance of the class
     * @chainable
     */
  onResize() {
    this.initializeAnimation('resize');

    return this;
  }

  /**
     * Initializes a single card's animation on first load or screen resize
     * @param {String} selector - a string of a DOM selector for the cards who 
     *   need their animation started via appending the class '.active'
     *
     * @return {Object} A reference to the current instance of the class
     * @chainable
     */
  initializeCardAnimation = (selector) => {
    const animationCardGroup = Array.prototype.slice.call(document.querySelectorAll(selector));
    const activeCard = animationCardGroup[0];
    const random = Math.floor(Math.random() * this.directions.length);
    const direction = this.directions[random];
    activeCard.classList.add(CLASS_NAMES.ACTIVE);
    activeCard.setAttribute(SELECTORS.DATA_DIRECTION, direction);
    activeCard.setAttribute(SELECTORS.DATA_DELAY, 'true');

    return this;
  }

  /**
     * Initializes all card animation on first load or screen resize
     * @param {String} select - specifies whether this is a resize event, 
     *   as this requires cards that were animating to be stopped.
     *
     * @return {Object} A reference to the current instance of the class
     * @chainable
     */
  initializeAnimation(eventType) {
    this.wordCards.forEach((card) => {
      if (eventType === 'resize') {
        card.classList.remove('active');
      }
      // Selector for a single of cards
      if (window.matchMedia('(max-width: 767px)').matches) {
        const selector = `.${CLASS_NAMES.WORDCARD}`;
        this.initializeCardAnimation(selector);
      }
      // Selector for two columns of cards
      else if (window.matchMedia('(max-width: 1179px)').matches) {
        const selectors = [];
        this.sizes.forEach((size) => {
          selectors.push(`.${CLASS_NAMES.WORDCARD}[${SELECTORS.DATA_SIZE}="${size}"][${SELECTORS.DATA_TWOCOLUMN}="1"]`);
          selectors.push(`.${CLASS_NAMES.WORDCARD}[${SELECTORS.DATA_SIZE}="${size}"][${SELECTORS.DATA_TWOCOLUMN}="2"]`);
        });
        selectors.forEach((selector) => {
          this.initializeCardAnimation(selector);
        });
      }
      // Selector for three columns of cards
      else if (window.matchMedia('(max-width: 1439px)').matches) {
        const selectors = [];
        this.sizes.forEach((size) => {
          selectors.push(`.${CLASS_NAMES.WORDCARD}[${SELECTORS.DATA_SIZE}="${size}"][${SELECTORS.DATA_THREECOLUMN}="1"]`);
          selectors.push(`.${CLASS_NAMES.WORDCARD}[${SELECTORS.DATA_SIZE}="${size}"][${SELECTORS.DATA_THREECOLUMN}="2"]`);
          selectors.push(`.${CLASS_NAMES.WORDCARD}[${SELECTORS.DATA_SIZE}="${size}"][${SELECTORS.DATA_THREECOLUMN}="3"]`);
        });
        selectors.forEach((selector) => {
          this.initializeCardAnimation(selector);
        });
      }
      // Selector for four columns of cards 
      else {
        const selectors = [];
        this.sizes.forEach((size) => {
          selectors.push(`.${CLASS_NAMES.WORDCARD}[${SELECTORS.DATA_SIZE}="${size}"][${SELECTORS.DATA_COLUMN}="1"]`);
          selectors.push(`.${CLASS_NAMES.WORDCARD}[${SELECTORS.DATA_SIZE}="${size}"][${SELECTORS.DATA_COLUMN}="2"]`);
          selectors.push(`.${CLASS_NAMES.WORDCARD}[${SELECTORS.DATA_SIZE}="${size}"][${SELECTORS.DATA_COLUMN}="3"]`);
          selectors.push(`.${CLASS_NAMES.WORDCARD}[${SELECTORS.DATA_SIZE}="${size}"][${SELECTORS.DATA_COLUMN}="4"]`);
        });
        selectors.forEach((selector) => {
          this.initializeCardAnimation(selector);
        });
      }
    });

    return this;
  }

  /**
     * Starts the animation of the next card in the stack by toggling the 'active' class
     * @param {String} selector - a string of a DOM selector for the card group containing 
     *   the card that should animation next.
     *
     * @return {Object} A reference to the current instance of the class
     * @chainable
     */
  startNextCardAnimation(selector) {
    const animationCardGroup = Array.prototype.slice.call(this.element.querySelectorAll(selector));
    const activeCardIndex = animationCardGroup.findIndex(card => card.classList.contains(CLASS_NAMES.ACTIVE));
    const nextCardIndex = (activeCardIndex + 1) === animationCardGroup.length ? 0 : activeCardIndex + 1;
    const activeCard = animationCardGroup[activeCardIndex];
    
    const prevDirection = activeCard.getAttribute(SELECTORS.DATA_DIRECTION);
    const useDirections = this.directions.filter(item => item !== prevDirection);
    const random = Math.floor(Math.random() * useDirections.length);
    const direction = useDirections[random];

    activeCard.classList.remove(CLASS_NAMES.ACTIVE);
    animationCardGroup[nextCardIndex].classList.add(CLASS_NAMES.ACTIVE);
    animationCardGroup[nextCardIndex].setAttribute(SELECTORS.DATA_DIRECTION, direction);
    animationCardGroup[nextCardIndex].setAttribute(SELECTORS.DATA_DELAY, 'false');
  }

  /**
     * Continues the card animations for a specific card stack.
     * @param {Event} event - the animation end event.
     *
     * @return {Object} A reference to the current instance of the class
     * @chainable
     */
  continueAnimation(event) {
    const { target } = event;
    // Selector for single stack of cards
    if (window.matchMedia('(max-width: 767px)').matches) {
      const selector = `.${CLASS_NAMES.WORDCARD}`;
      this.startNextCardAnimation(selector);
    } 
    // Selector for a two column stack of cards
    else if (window.matchMedia('(max-width: 1179px)').matches) {
      const twoColumnGroup = target.getAttribute(SELECTORS.DATA_TWOCOLUMN);
      const size = target.getAttribute(SELECTORS.DATA_SIZE);
      const selector = `.${CLASS_NAMES.WORDCARD}[${SELECTORS.DATA_SIZE}="${size}"][${SELECTORS.DATA_TWOCOLUMN}="${twoColumnGroup}"]`;
      this.startNextCardAnimation(selector);
    }
    // Selector for a three column stack of cards
    else if (window.matchMedia('(max-width: 1439px)').matches) {
      const threeColumnGroup = target.getAttribute(SELECTORS.DATA_THREECOLUMN);
      const size = target.getAttribute(SELECTORS.DATA_SIZE);
      const selector = `.${CLASS_NAMES.WORDCARD}[${SELECTORS.DATA_SIZE}="${size}"][${SELECTORS.DATA_THREECOLUMN}="${threeColumnGroup}"]`;
      this.startNextCardAnimation(selector);
    } 
    // Selector for a four column stack of cards
    else {
      const row = target.getAttribute(SELECTORS.DATA_ROW);
      const column = target.getAttribute(SELECTORS.DATA_COLUMN);
      const selector = `.${CLASS_NAMES.WORDCARD}[${SELECTORS.DATA_ROW}="${row}"][${SELECTORS.DATA_COLUMN}="${column}"]`;
      this.startNextCardAnimation(selector);
    }

    return this;
  }
}

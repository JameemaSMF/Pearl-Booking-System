import { MISC, SELECTORS } from '../../Constants';

/**
 * StatCounter
 */
export default class StatCounter {
  /**
     * Constructor for StatCounter which simply assigns the ScrollService
     * to a property on the contructor for reference.
     *
     * @param {HTMLElement} element - REQUIRED - the module's container
     * @param {Object} Services various services, passed in as param
     */
  constructor(element, Services) {
    /**
         * Reference to the DOM element that is the root of the component
         * @property {Object}
         */
    this.element = element;

    /**
         * Reference to the ScrollService singleton
         * @property {Object}
         */
    this.ScrollService = Services.ScrollService;

    /**
         * Some flags
         */
    this.animating = false;
    this.animated = false;
    this.prepend = '';

    // Initialize the view
    this.init();
  }

  /**
     * Initializes the view by calling the functions to
     * create DOM references, setup event handlers and
     * then create the event listeners
     *
     * @return {Object} A reference to the current instance of this class
     * @chainable
     */
  init() {
    this.cacheDomReferences()
      .setupHandlers()
      .enable();

    return this;
  }

  /**
     * Find all necessary DOM elements used in the view and cache them
     *
     * @return {Object} A reference to the current instance of this class
     * @chainable
     */
  cacheDomReferences() {
    /**
         * All DOM elements with the `data-visible` attribute
         * @property {NodeList}
         */
    this.ticker = this.element.querySelector(SELECTORS.STATISTIC_VALUE);

    return this;
  }

  /**
     * Bind event handlers with the proper context of `this`.
     *
     * @return {Object} A reference to the current instance of this class
     * @chainable
     */
  setupHandlers() {
    /**
         * A reference to the `onScroll` function with the proper
         * context bound to the SVGScrollAnimations class.
         *
         * @property {Function}
         */
    this.onScrollHandler = this.onScroll.bind(this);

    return this;
  }

  /**
     * Create event handlers to enable interaction with view
     *
     * @return {Object} A reference to the current instance of this class
     * @chainable
     */
  enable() {
    // Call scroll handler on load to get initial viewable elements
    window.setTimeout(this.onScrollHandler, 300);

    // Add to ScrollSerive callbacks
    this.ScrollService.addCallback(this.onScrollHandler);

    return this;
  }

  /**
     * A function which triggers the stat counter once the statistic is in the viewport
     *
     * @return {Object} A reference to the current instance of this class
     * @chainable
     */
  onScroll() {
    if (this.element.dataset.visible === MISC.TRUE && !this.animating && !this.animated) {
      this.countUp();
    }

    return this;
  }

  /**
     * A function which finds the first numbers in a string, converts them to floating point numbers,
     * and animates them counting up from 0
     *
     * @return {Object} A reference to the current instance of this class
     * @chainable
     */
  countUp() {
    const animateprops = this.getNumberFromString();
    this.animateNumber(animateprops.target, 250, animateprops.unit);

    return this;
  }

  /**
     * A function which finds the first numbers in a string, converts them to floating point numbers,
     * and animates them counting up from 0
     *
     * @return {Object} Am object containing a floating point number to animate and text to append, if any
     * @chainable
     */
  getNumberFromString() {
    const statChars = this.ticker.textContent.split('');
    let animatable = '';
    let unit = '';
    const regex = /^[0-9.,]+$/;
    let endOfNum = false;
    Array.prototype.forEach.call(statChars, (char, index) => {
      if (regex.test(char) && !endOfNum) {
        if (!isNaN(parseInt(char)) || char === '.') {
          animatable += char;
        }
        unit = this.ticker.textContent.substring(index + 1);
      } else if (!regex.test(char) && index === 0) {
        this.prepend = char;
      } else {
        endOfNum = true;
      }
    });

    // don't animate if we have no numbers
    if (animatable === '') {
      animatable = null;
    }

    return { target: parseFloat(animatable), unit };
  }

  /**
     * A function which animates the counting of a number up from 0
     *
     * @param {Number} target - the number to animate to
     * @param {Number} duration - how long to take to animate, in milliseconds
     * @param {String} unit - the non-numeric content, if any
     *
     * @return {Object} Am object containing a floating point number to animate and text to append, if any
     * @chainable
     */
  animateNumber(target, duration, unit = '') {
    if (!!target) {
      this.animating = true;
      const start = 0;
      let current = start;
      let end = target;
      let decimal = false;
      let large = 1;
      let remainder = 0;
      let single = false;
      if (target % 1 !== 0) {
        end = target * 100;
        decimal = true;
      } else if (target.toString().length === 1) {
        end = target * 100;
        decimal = true;
        single = true;
      } else {
        for (let i = target; i > 100; i /= 10) {
          end = Math.floor(end / 10);
          large *= 10;
        }
        remainder = Math.abs((end * large) - target);
      }
      const increment = end > start ? 1 : -1;
      const moveBy = !!single ? Math.floor(target / 10) : 50;
      const stepTime = moveBy * Math.abs(Math.ceil(end / duration));
      const timer = setInterval(() => {
        current += increment;
        this.ticker.innerHTML = decimal ? this.prepend + (current / 100).toLocaleString() + unit : this.prepend + (current * large).toLocaleString() + unit;
        if (current === end) {
          clearInterval(timer);
          if (!!remainder) {
            this.ticker.innerHTML = this.prepend + ((current * large) + remainder).toLocaleString() + unit;
          }
          this.animating = false;
          this.animated = true;
        }
      }, stepTime);
    }

    return this;
  }
}

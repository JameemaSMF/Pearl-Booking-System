import {
  CLASS_NAMES, EVENTS, SELECTORS, MISC,
} from '../../Constants';
import { closest, MessageBus } from '../../Utils';

/**
 * A class for the Card module
 */
export default class Cards extends MessageBus {
  /**
     * Constructor function of the CardFunc class. Must receive one arguments, a DOM
     * node representing a delivery ticket.
     *
     * @param {HTMLElement} element - REQUIRED - the module's container
     */
  constructor(element) {
    super();
    /**
         * DOM node that is passed into the constructor
         *
         * @property {Object} element DOM node that is passed into the constructor
         */
    this.element = element;

    // Initialize the view
    this.init();
  }

  /**
     * Initializes the view by calling the functions to
     * create DOM references, setup event handlers and
     * then create the event listeners
     *
     * @return {Object} CardFunc A reference to the current instance of the class
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
     * @return {Object} CardFunc A reference to the current instance of the class
     * @chainable
     */
  cacheDomReferences() {
    this.cards = this.element.querySelectorAll(`.${CLASS_NAMES.CARDLINK}`);

    return this;
  }

  /**
     * Create event handlers to enable interaction with view
     *
     * @return {Object} Search A reference to the current instance of the class
     * @chainable
     */
  enable() {
    this.cards.forEach((card) => {
      card.addEventListener(EVENTS.CLICK, this.currentcardevent);
    });
    return this;
  }

  /**
     * Bind event handlers with the proper context of `this`.
     *
     * @return {Object} A reference to the current instance of the class
     * @chainable
     */
  setupHandlers() {
    this.currentcardevent = this.cardclickevent.bind(this);

    return this;
  }

  /**
   *  This is events trigger for toggle menu child items & changing parent icons appropriately for smaller screen.
   *
   * @param {Event} event - the event object
   *
   */
  cardclickevent(event) {
    event.preventDefault();
    window.location.href = event.target.getAttribute('data-url');
  }
}

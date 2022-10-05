import {
  ARIA, CLASS_NAMES, EVENTS, SELECTORS,
} from '../../Constants';
import { closest, hashover, MessageBus } from '../../Utils';

/**
 * A class for the Dropdown module
 */
export default class Dropdown extends MessageBus {
  /**
     * Constructor function of the Dropdown class. Must receive one arguments, a DOM
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
     * @return {Object} Dropdown A reference to the current instance of the class
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
     * @return {Object} Header A reference to the current instance of the class
     * @chainable
     */
  cacheDomReferences() {
    this.clickable = this.element.classList.contains(CLASS_NAMES.CLICK) ? this.element.querySelector(SELECTORS.DROPDOWN_TOGGLE) : null;
    this.close = this.element.querySelector(SELECTORS.CLOSE);
    this.dropdowns = this.element.parentElement.querySelectorAll(SELECTORS.DROPDOWN);
    this.hoverable = this.element.classList.contains(CLASS_NAMES.HOVER) ? this.element : null;
    this.parent = this.element.parentElement;

    // check whether the hover event is possible using the hover media query
    this.hasHoverState = hashover();

    return this;
  }

  /**
     * Bind event handlers with the proper context of `this`.
     *
     * @return {Object} Dropdown A reference to the current instance of the class
     * @chainable
     */
  setupHandlers() {
    this.openDropdownHandler = this.openDropdown.bind(this);
    this.closeDropdownHandler = this.closeDropdown.bind(this);
    this.closeDropdownFromOutsideHandler = this.closeDropdownFromOutside.bind(this);
    this.toggleDropdownHandler = this.toggleDropdown.bind(this);

    return this;
  }

  /**
     * Create event handlers to enable interaction with view
     *
     * @return {Object} Dropdown A reference to the current instance of the class
     * @chainable
     */
  enable() {
    if (this.clickable !== null) {
      this.clickable.addEventListener(EVENTS.CLICK, this.toggleDropdownHandler);
    }
    if (this.hoverable !== null) {
      if (this.hasHoverState) {
        this.hoverable.addEventListener(EVENTS.MOUSEOVER, this.openDropdownHandler);
        this.hoverable.addEventListener(EVENTS.MOUSEOUT, this.closeDropdownHandler);
      } else {
        this.hoverable.addEventListener(EVENTS.CLICK, this.toggleDropdownHandler);
      }
    }

    if (this.close !== null) {
      this.close.addEventListener(EVENTS.CLICK, this.closeDropdownHandler);
    }

    return this;
  }

  /**
     * closes from click not in dropdown
     * @param {Event} event - the event object
     * @return {Object} Dropdown A reference to the current instance of the class
     * @chainable
     */
  closeDropdownFromOutside(event) {
    if (closest(event.target, SELECTORS.DROPDOWN) !== this.element) {
      this.closeDropdown();
    }

    return this;
  }

  /**
     * closes dropdown
     *
     * @return {Object} Dropdown A reference to the current instance of the class
     * @chainable
     */
  closeDropdown() {
    for (let i = 0; i < this.dropdowns.length; i++) {
      const buttonTarget = this.dropdowns[i].querySelector(SELECTORS.DROPDOWN_TOGGLE);
      buttonTarget.classList.remove(CLASS_NAMES.OPEN);
      buttonTarget.parentNode.classList.remove(CLASS_NAMES.OPEN);
      const panelTarget = buttonTarget.parentElement.querySelector(SELECTORS.DROPDOWN_CONTENT);
      if (panelTarget.querySelectorAll(SELECTORS.NESTED).length > 0) {
        const panelTargets = buttonTarget.parentElement.querySelectorAll(SELECTORS.DROPDOWN_CONTENT + SELECTORS.NESTED);
        for (let j = 0; j < panelTargets.length; j++) {
          panelTargets[j].classList.remove(CLASS_NAMES.OPENED);
          panelTargets[j].setAttribute(ARIA.HIDDEN, 'true');
        }
      }
      this.element.classList.remove(CLASS_NAMES.OPEN);
      panelTarget.classList.remove(CLASS_NAMES.OPENED);
      panelTarget.classList.remove(CLASS_NAMES.FADE);
      panelTarget.setAttribute(ARIA.HIDDEN, 'true');
      buttonTarget.setAttribute(ARIA.EXPANDED, 'false');
    }
    document.body.removeEventListener(EVENTS.CLICK, this.closeDropdownFromOutsideHandler, true);

    return this;
  }

  /**
     * opens dropdown
     *
     * @param {Event} event - the event object
     * @return {Object} Dropdown A reference to the current instance of the class
     * @chainable
     */
  openDropdown(event) {
    const buttonTarget = this.element.querySelector(SELECTORS.DROPDOWN_TOGGLE);
    const target = event.type === EVENTS.CLICK ? buttonTarget : this.element;
    if (target !== null && buttonTarget !== null && this.element.contains(buttonTarget)) {
      if (this.hasHoverState && event.type !== EVENTS.CLICK) {
        this.closeDropdown();
      }
      target.classList.add(CLASS_NAMES.OPEN);
      const panelTarget = buttonTarget.parentElement.querySelector(SELECTORS.DROPDOWN_CONTENT);
      if (panelTarget.querySelectorAll(SELECTORS.NESTED).length > 0) {
        const panelTargets = buttonTarget.parentElement.querySelectorAll(SELECTORS.DROPDOWN_CONTENT + SELECTORS.NESTED);
        for (let i = 0; i < panelTargets.length; i++) {
          panelTargets[i].classList.add(CLASS_NAMES.OPENED);
          panelTargets[i].setAttribute(ARIA.HIDDEN, 'false');
        }
      }
      this.element.classList.add(CLASS_NAMES.OPEN);
      panelTarget.classList.add(CLASS_NAMES.OPENED);
      panelTarget.setAttribute(ARIA.HIDDEN, 'false');
      if (panelTarget.classList.contains(CLASS_NAMES.SUB_MENU)) {
        setTimeout( () => {
          panelTarget.classList.add(CLASS_NAMES.FADE);
        }, 5);
      }

      buttonTarget.setAttribute(ARIA.EXPANDED, 'true');
      if (this.close === null && this.hasHoverState) {
        document.body.addEventListener(EVENTS.CLICK, this.closeDropdownFromOutsideHandler, true);
      }

      return this;
    }
  }

  /**
     * toggles dropdown
     *
     * @param {Event} event - the event object
     * @return {Object} Dropdown A reference to the current instance of the class
     * @chainable
     */
  toggleDropdown(event) {
    const selected = this.element.querySelector(SELECTORS.DROPDOWN_TOGGLE);
    if (!this.hasHoverState && selected === event.target) {
      event.preventDefault();
    }
    if (!selected.classList.contains(CLASS_NAMES.OPEN)) {
      this.openDropdown(event);
      this.sendEvent(EVENTS.DROPDOWN_CHANGED, CLASS_NAMES.OPENED, this.parent);
    } else {
      this.closeDropdown();
      this.sendEvent(EVENTS.DROPDOWN_CHANGED, CLASS_NAMES.CLOSED, this.parent);
    }

    return this;
  }
}

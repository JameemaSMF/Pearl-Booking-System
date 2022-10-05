import {
  ARIA, CLASS_NAMES, EVENTS, SELECTORS,
} from '../../Constants';

/**
 * Header Class (Navigation and header behavior)
 */
export default class Header {
  /**
   * Constructor of Header Class
   * @param {HTMLElement} element - REQUIRED - the module's container
   */
  constructor(element) {
    this.element = element;
    this.header = this.element.querySelector(SELECTORS.HEADER);
    this.menuButton = this.element.querySelector(SELECTORS.HAMBUGER);
    this.menuButtonIcon = this.element.querySelector(SELECTORS.HAMBUGER_ICON);
    this.mobileMenu = this.element.querySelector(SELECTORS.HAMBUGER_MENU);
    this.toggleMobileMenu();
    window.addEventListener(EVENTS.RESIZE, (e) => {
      if (window.innerWidth > 768) {
        if (this.menuButton.classList.contains(CLASS_NAMES.ACTIVE)) {
          this.menuButton.classList.remove(CLASS_NAMES.ACTIVE);
        }
      }
    });
  }
  
  /**
   * Function for Toggle menu on mobile view
   */
  toggleMobileMenu() {
    this.menuButton.addEventListener(EVENTS.CLICK, (e) => {
      e.preventDefault();

      if (this.menuButton.classList.contains(CLASS_NAMES.ACTIVE)) {
        this.menuButton.classList.remove(CLASS_NAMES.ACTIVE);
        this.menuButtonIcon.classList.remove(CLASS_NAMES.ACTIVE);
        this.mobileMenu.classList.remove(CLASS_NAMES.ACTIVE);
        this.menuButton.setAttribute(ARIA.EXPANDED, 'true');
        this.mobileMenu.setAttribute(ARIA.HIDDEN, 'true');
      }
      else {
        this.menuButton.classList.add(CLASS_NAMES.ACTIVE);
        this.menuButtonIcon.classList.add(CLASS_NAMES.ACTIVE);
        this.mobileMenu.classList.add(CLASS_NAMES.ACTIVE);
        this.menuButton.setAttribute(ARIA.EXPANDED, 'false');
        this.mobileMenu.setAttribute(ARIA.HIDDEN, 'false');
      }
    });
  }
}

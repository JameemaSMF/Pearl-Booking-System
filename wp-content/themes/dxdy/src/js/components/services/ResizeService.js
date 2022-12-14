import { debounce } from '../../Utils';
import { EVENTS } from '../../Constants';

/**
 * ID
 *
 * @type {Number}
 * @ignore
 */
let id = 0;

/**
 * Get ID
 *
 * Because file is loaded only once, this function
 * can be used to generate a unique id every time
 * it is called.
 *
 * @return {Number} Unique ID value
 * @ignore
 */
function getId() {
  return id++;
}

/**
 * Resize Service
 */
export default class ResizeService {
  /**
     * ResizeService constructor in which the `callbacks` array is created
     * as a property of the class.
     */
  constructor() {
    /**
         * An array to be populated with callback functions that will be triggered on resize
         *
         * @property {Array} callbacks
         */
    this.callbacks = [];

    this.init();
  }

  /**
     * @desc Initialize the singleton by attaching the event listener to the window
     * @listens {Event} listens to the window resize event
     */
  init() {
    window.addEventListener(EVENTS.RESIZE, debounce(this.onResize.bind(this), 10));
  }

  /**
     * @desc The resize event handler. Itertates through the `callback` array and invokes each callback in the Array
     */
  onResize() {
    this.callbacks.forEach((callback) => {
      callback.callback();
    });
  }

  /**
     * @desc A hook for pushing a callback function
     * into the `callbacks` array. A unique
     * ID value for the callback is generated
     * and a function is returned for removing
     * the callback if need be.
     *
     * @param {Function} callback A function to invoke by the ResizeService
     * @return {Function} `removeCallback` A function which will remove an entry from the `callbacks` array
     */
  addCallback(callback) {
    // Generate an id for the callback
    const newid = getId();

    // Push function into array with a unique id
    this.callbacks.push({
      id,
      callback,
    });

    // Return the remove function
    return this.removeCallback.bind(this, newid);
  }

  /**
     * Filters through the `callback` array and removes
     * the entry that corresponds to the id passed
     * in as an argument
     *
     * @param  {Number} callback A callback value to filter by
     */
  removeCallback(callback) {
    this.callbacks = this.callbacks.filter((item) => {
      return item.id !== callback;
    });
  }
}

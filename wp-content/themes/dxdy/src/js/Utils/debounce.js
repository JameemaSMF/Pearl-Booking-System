/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing.
 *
 * @param  {Function} func A function to call after N milliseconds
 * @param  {number} wait The number of milliseconds to wait
 * @param  {boolean} immediate Trigger the function on the leading edge instead of the trailing
 * @return {Function} A function, that, as long as it continues to be invoked, will not be triggered
 */
export function debounce(func, wait, immediate) {
  let timeout;
  return function () {
    let context = this;
    let args = arguments;
    let later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

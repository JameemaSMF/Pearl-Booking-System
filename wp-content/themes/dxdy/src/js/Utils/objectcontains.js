/**
 * Checks if object contains value
 *
 * @param {Object} obj the object to test
 * @param {String} value the value to test for
 *
 * @return {Boolean} true if value exists in obj, false if not
 */
export function objectcontains(obj, value) {
  for (let val in obj) {
    if (obj[val] === value) {
      return true;
    }
  }

  return false;
}

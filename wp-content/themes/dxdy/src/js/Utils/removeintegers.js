/**
 * Remove integers from a string
 *
 * @param {String} string the string with the integer in need of conversion
 *
 * @return {Boolean} the converted string
 */
export function removeintegers(string) {
  return string.replace(/[0-9]/g, '');
}

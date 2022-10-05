/**
 * Converts spaces in a string to a hyphen
 *
 * @param {String} string the string with spaces in need of conversion
 *
 * @return {Boolean} the converted string
 */
export function spacetohyphen(string) {
  return string.replace(/\s+/g, '-');
}

/**
 * Checks if user is running Internet Explorer
 *
 * @return {Boolean} true is IE, false if not
 */
export function isie() {
  if (!!navigator.userAgent.match(/Trident\/7\./)) {
    return true;
  }
  return false;
}

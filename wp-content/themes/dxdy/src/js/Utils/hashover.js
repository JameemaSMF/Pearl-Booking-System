/**
 * Returns a Boolean corrsponding to whether or not the device/browser
 * in use is capable of hover events
 *
 * @return {Boolean} true if device is hover event-capable; false if not
 */
export function hashover() {
  let hoverQuery = window.matchMedia('(hover: hover)');
  let anyQuery = window.matchMedia('(any-hover: none), (any-pointer: coarse)');
  return !!((hoverQuery.matches || !anyQuery.matches));
}

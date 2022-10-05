/**
 * Removes query string from URI via history.pushState
 *
 */
export function removequerystring() {
  let uri = window.location.toString();
  if (uri.indexOf('?') > 0) {
    let cleanuri = uri.substring(0, uri.indexOf('?'));
    window.history.replaceState({}, document.title, cleanuri);
  }
}

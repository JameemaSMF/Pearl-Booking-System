/**
 * Returns a URL encoded string for use in submission to Tools API
 *
 * @param  {Object} requestdata JSON to return as URL Encoded string
 * @return {String} A URLEncoded string
 */
export function urlencoder(requestdata) {
  const encoded = Object.keys(requestdata).map((key) => {
    return `${encodeURIComponent(key) }=${ encodeURIComponent(requestdata[key])}`;
  }).join('&');

  return encoded;
}

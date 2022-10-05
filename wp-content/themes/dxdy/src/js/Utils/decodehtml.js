/**
 * Parse to HTML
 *
 * @param {String} data data to parse into HTML
 * @return {HTMLElement} HTML
 */
export function decodehtml(data) {
  const parser = new DOMParser();
  const dom = parser.parseFromString(
    `<!doctype html><body>${data}`,
    'text/html',
  );
  return dom.body.textContent;
}

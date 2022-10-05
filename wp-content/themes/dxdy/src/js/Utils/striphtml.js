/**
 * Given an HTML string, eturns a string of plain text
 *
 * @param  {Object} html - string of html to strip
 * @param  {String} exceptions - comma-delimted list of tags to allow
 * @return {String} A plain text string (with allowed tags)
 */
export function striphtml(html, exceptions = false) {
  if (!exceptions) {
    const parsed = new DOMParser().parseFromString(html, 'text/html');
    return parsed.body.textContent || '';
  } 
  const reg = new RegExp(`(<\/?(?![${exceptions}])[a-z]+(?=[\s>])(?:[^>=]|=(?:'[^']*'|"[^"]*"|[^'"\s]*))*\s?\/?>)`, 'gi');
  return html.replace(reg, '');
}

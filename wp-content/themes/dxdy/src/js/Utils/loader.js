/**
 * Add DOM element for loading graphic to passed-in element
 *
 * @param {HTMLElement} element the element to which to add the loader
 */
export function createloader(element) {
  const LOADING = 'loading';
  let loader = document.createElement('div');
  loader.appendChild(document.createTextNode(LOADING));
  loader.classList.add(LOADING);
  element.appendChild(loader);
}

/**
 * Remove DOM element for loading graphic from passed-in element
 *
 * @param {HTMLElement} element the element from which to remove the loader
 */
export function removeloader(element) {
  let loader = element.querySelector('.loading');
  element.removeChild(loader);
}

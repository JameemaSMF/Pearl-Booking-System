/**
 * Given an image, returns its natural dimensions
 *
 * @param {String} src - the path to the image
 * @return {Object} the image width and height
 */
export function imagenaturalsize(src) {
  let img = new Image();
  img.src = src;

  return { height: img.height, width: img.width };
}

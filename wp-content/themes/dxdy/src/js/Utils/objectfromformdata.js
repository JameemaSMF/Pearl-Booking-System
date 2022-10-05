/**
 * Converts FormData object to regular object
 *
 * @param {Object} formdata a FormData object
 *
 * @return {Boolean} a regualar old object
 */
export function objectfromformdata(formdata) {
  let object = {};
  formdata.forEach((value, key) => {
    if (!object.hasOwnProperty(key)) {
      object[key] = value;
      return;
    }
    if (!Array.isArray(object[key])) {
      object[key] = [object[key]];
    }
    object[key].push(value);
  });

  return object;
}

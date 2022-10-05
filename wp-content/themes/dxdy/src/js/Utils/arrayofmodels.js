/**
 * Loops through array of objects to model data via model Class passed in via param
 * and returns a new array of the modelled data
 *
 * @param {Array} items the array of objects to model
 * @param {Class} Model the Class containing the model
 * @param {...Object} args any params needed to pass into the model Class
 * @return {Array} the modelled array
 */
export function arrayofmodels(items, Model, ...args) {
  const params = !!args ? args : null;
  let arr = [];

  if (!!items && items.length > 0) {
    items.forEach((item) => {
      arr.push(new Model(item, params));
    });
  } else {
    arr = null;
  }

  return arr;
}

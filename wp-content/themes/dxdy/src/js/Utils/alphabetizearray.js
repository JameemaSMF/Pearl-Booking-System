/**
 * Alphabetizes array by value
 *
 * @param {Array} array the array to sort
 * @return {Array} the sorted array
 */
export function alphabetizearray(array) {
  return array.sort((a, b) => {
    return a.localeCompare(b);
  });
}

/**
 * Given two numbers, returns the percentage the first is of the second
 *
 * @param {Number} partialValue - the partial value
 * @param {Number} totalValue - the total value
 * @return {Number} the percentage as an integer
 */
export function percentage(partialValue, totalValue) {
  return (100 * partialValue) / totalValue;
}

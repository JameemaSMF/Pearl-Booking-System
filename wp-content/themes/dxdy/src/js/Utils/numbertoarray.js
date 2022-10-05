/**
 * Given a number, creates an aray and populates the array
 * with numbers from 0 to given number
 *
 * @param {Number} number the number
 * @return {Array} the array of numbers
 */
export function numbertoarray(number) {
  let numbers = [];
  for (let i = 0; i <= number; i++) {
    numbers.push(i);
  }
  return numbers;
}

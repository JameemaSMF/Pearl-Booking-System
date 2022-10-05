const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

/**
 * Convert date to human readable
 *
 * @param {String} ISO an ISO date string
 * @return {String} human readable date
 */
export function convertdate(ISO) {
  let thisDate = new Date(ISO);
  let year = thisDate.getFullYear();
  let month = monthNames[thisDate.getMonth()];
  let day = thisDate.getDate();

  return `${month } ${ day }, ${ year}`;
}

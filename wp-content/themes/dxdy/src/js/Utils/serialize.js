/**
 * A function which serializes data
 *
 * @param  {Object} object the object to be serialized
 * @return {String} the serialized string
 */
export function serialize(object) {
  const serialized = [];
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      serialized.push(`${encodeURIComponent(key)}=${encodeURIComponent(object[key])}`);
    }
  }
  return serialized.join('&');
}

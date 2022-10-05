/**
 * Given a cookie name, returns value of that cookie
 *
 * @param {String} name the name of the cookie
 * @return {String} the value of the cookie
 */
export function getcookie(name) {
  const cookiestring = `${name}=`;
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookies = decodedCookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i];
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(cookiestring) === 0) {
      return cookie.substring(cookiestring.length, cookie.length);
    }
  }
  return '';
}

/**
 * Create and set a cookie
 *
 * @param {String} name the name of the cookie
 * @param {String} value the value of the cookie
 * @param {Number} expire the number of days after which the cookie will expire
 */
export function setcookie(name, value, expire) {
  const date = new Date();
  date.setTime(date.getTime() + (expire * 24 * 60 * 60 * 1000));
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value};${expires};path=/`;
}

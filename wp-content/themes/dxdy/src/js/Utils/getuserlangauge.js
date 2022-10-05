/**
 * Returns user's first langauge preference in the browser
 *
 * @param {Boolean} uniform - true if a given langauge isn't localized per country (e.g. en-US va en-GB), false if it is
 */
export function getuserlangauge(uniform = true) {
  const lang = navigator.languages ? navigator.languages[0] : navigator.language || navigator.userLanguage;
  return uniform ? lang.substring(0, 2) : lang;
}

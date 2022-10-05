/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./patternlab/source/js/App.js":
/*!*************************************!*\
  !*** ./patternlab/source/js/App.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var _components_views_InViewport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/views/InViewport */ "./patternlab/source/js/components/views/InViewport.js");
/* harmony import */ var _ComponentMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ComponentMap */ "./patternlab/source/js/ComponentMap.js");
/* harmony import */ var _components_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/services */ "./patternlab/source/js/components/services/index.js");
 // now, on with the show!

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }




/**
 * The top-level controller for the whole page. This component is responsible
 * for loading other controllers and views.
 */

var App = /*#__PURE__*/function () {
  /**
   * Initialize all global JS components and call `loadcomponents`
   * to initialize all unique JS components
   */
  function App() {
    _classCallCheck(this, App);

    /**
     * Services is the object which holds references to all services
     * created for pages. Services should be instantiated there and
     * then will be injected into each component for optional use via the
     * `loadcomponents` function
     *
     * @type {Services}
     * @property {Services}
     */
    this.Services = new _components_services__WEBPACK_IMPORTED_MODULE_2__["default"]();
    /**
     * The InViewport view component which needs to run globally for all components.
     * @type {InViewport}
     * @property {InViewport}
     */

    this.inViewport = new _components_views_InViewport__WEBPACK_IMPORTED_MODULE_0__["default"](this.Services); // Load each component

    this.loadPagecomponents();
  }
  /**
   * This function loops over all elements in the DOM with the
   * `data-loadcomponent` attribute and loads the specified view
   * or controller.
   *
   * To attach a JS component to an HTML element, in your markup you'd
   * do something like: <section class="example-component" data-loadcomponent='Examplecomponent'>
   * where 'Examplecomponent' is your JS class name. You'd need to add that component to the ./componentMap.js
   * and make sure the component exists and is a proper ES6 class, and then you'll end up with
   * an ES6 class that is passed a reference to section.example-component on init.
   */


  _createClass(App, [{
    key: "loadPagecomponents",
    value: function loadPagecomponents() {
      var _this = this;

      var attribute = 'data-loadcomponent';
      Array.prototype.forEach.call(document.querySelectorAll('[' + attribute + ']'), function (element) {
        console.log('loading component ', element.getAttribute(attribute));
        new _ComponentMap__WEBPACK_IMPORTED_MODULE_1__["default"][element.getAttribute(attribute)](element, _this.Services);
      });
    }
  }]);

  return App;
}();



/***/ }),

/***/ "./patternlab/source/js/ComponentMap.js":
/*!**********************************************!*\
  !*** ./patternlab/source/js/ComponentMap.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_views_APIResults__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/views/APIResults */ "./patternlab/source/js/components/views/APIResults.js");
/* harmony import */ var _components_views_Dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/views/Dropdown */ "./patternlab/source/js/components/views/Dropdown.js");
/* harmony import */ var _components_views_InViewport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/views/InViewport */ "./patternlab/source/js/components/views/InViewport.js");
/* harmony import */ var _components_views_LoadMore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/views/LoadMore */ "./patternlab/source/js/components/views/LoadMore.js");
/* harmony import */ var _components_views_SocialShare__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/views/SocialShare */ "./patternlab/source/js/components/views/SocialShare.js");
 // Import all required modules





 // Export reference to all modules in an object

/* harmony default export */ __webpack_exports__["default"] = ({
  APIResults: _components_views_APIResults__WEBPACK_IMPORTED_MODULE_0__["default"],
  Dropdown: _components_views_Dropdown__WEBPACK_IMPORTED_MODULE_1__["default"],
  InViewport: _components_views_InViewport__WEBPACK_IMPORTED_MODULE_2__["default"],
  LoadMore: _components_views_LoadMore__WEBPACK_IMPORTED_MODULE_3__["default"],
  SocialShare: _components_views_SocialShare__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./patternlab/source/js/Constants/aria.js":
/*!************************************************!*\
  !*** ./patternlab/source/js/Constants/aria.js ***!
  \************************************************/
/*! exports provided: ARIA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARIA", function() { return ARIA; });
//* ------------------------------------*\
//    $ARIA STRINGS
//* ------------------------------------*/
var ARIA = {
  EXPANDED: 'aria-expanded',
  HIDDEN: 'aria-hidden',
  SELECTED: 'aria-selected'
};

/***/ }),

/***/ "./patternlab/source/js/Constants/class-names.js":
/*!*******************************************************!*\
  !*** ./patternlab/source/js/Constants/class-names.js ***!
  \*******************************************************/
/*! exports provided: CLASS_NAMES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLASS_NAMES", function() { return CLASS_NAMES; });
//* ------------------------------------*\
//    $CLASS NAMES - for class names
//      not CSS selectors
//* ------------------------------------*/
var CLASS_NAMES = {
  ABOVE_BOTTOM: 'above-bottom',
  ABOVE_HALFWAY: 'above-halfway',
  ABOVE_VIEWPORT: 'above-viewport',
  ACTIVE: 'active',
  BELOW_BOTTOM: 'below-bottom',
  BELOW_HALFWAY: 'below-halfway',
  BELOW_VIEWPORT: 'below-viewport',
  BLINK: 'blink',
  ERROR: 'error',
  CLICK: 'click',
  CLOSED: 'closed',
  FADE: 'fade',
  FILTER_SELECTED: 'filter-selected',
  FIRST_BATCH: 'first-batch',
  FIXED: 'fixed',
  FILTERED: 'filtered',
  HIDING: 'hiding',
  HIDDEN: 'hidden',
  HOVER: 'hover',
  IN_VIEWPORT: 'in-viewport',
  LISTING_FILTERS: 'listing-filters',
  LOADING: 'loading',
  MINI: 'mini',
  OPEN: 'open',
  OPENED: 'opened',
  SCROLLED: 'scrolled',
  SEARCHING: 'searching',
  SELECTED: 'selected',
  SHOW: 'show',
  SUB_MENU: 'sub-menu',
  SUCCESS: 'success',
  VISUALLY_HIDDEN: 'visually-hidden'
};

/***/ }),

/***/ "./patternlab/source/js/Constants/endpoints.js":
/*!*****************************************************!*\
  !*** ./patternlab/source/js/Constants/endpoints.js ***!
  \*****************************************************/
/*! exports provided: ENDPOINTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENDPOINTS", function() { return ENDPOINTS; });
//* ------------------------------------*\
//    $MISC STRINGS
//* -----------------------------------*/
var ENDPOINTS = {
  SEARCH: '/wp-json/relevanssi/v1/search?',
  WPAPI: '/wp-json/wp/v2/',
  WPAPITOTAL: 'X-WP-Total'
};

/***/ }),

/***/ "./patternlab/source/js/Constants/errors.js":
/*!**************************************************!*\
  !*** ./patternlab/source/js/Constants/errors.js ***!
  \**************************************************/
/*! exports provided: ERRORS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERRORS", function() { return ERRORS; });
//* ------------------------------------*\
//    $ERROR Messages
//* ------------------------------------*/
var ERRORS = {
  FEATURED_IMAGE: 'A featured image is required'
};

/***/ }),

/***/ "./patternlab/source/js/Constants/events.js":
/*!**************************************************!*\
  !*** ./patternlab/source/js/Constants/events.js ***!
  \**************************************************/
/*! exports provided: EVENTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENTS", function() { return EVENTS; });
//* ------------------------------------*\
//    $EVENTS
//* ------------------------------------*/
var EVENTS = {
  ANIMATIONEND: 'animationend',
  BEFOREUNLOAD: 'beforeunload',
  BLUR: 'blur',
  CHANGE: 'change',
  CLEAR_FILTERS: 'clearfilters',
  CLICK: 'click',
  CUSTOM_EVENT: 'customevent',
  DISPLAY_SUBHEADING: 'displaysubheading',
  DROPDOWN_CHANGED: 'dropdownchanged',
  FORM_ERROR: 'formerror',
  FORM_SUCCESS: 'formsuccess',
  FOCUS: 'focus',
  HEADER_HIDING: 'header-hiding',
  INPUT: 'input',
  KEY_DOWN: 'keydown',
  MOUSEMOVE: 'mousemove',
  MOUSEOUT: 'mouseout',
  MOUSEOVER: 'mouseover',
  PAGESHOW: 'pageshow',
  REQUEST_MADE: 'requestmade',
  RESIZE: 'resize',
  RESULTS_RETURNED: 'resultsreturnd',
  SCROLL: 'scroll',
  SIMULATED_CLICK: 'simulated-click',
  SHOW_HIDE: 'showhide',
  SUBMIT: 'submit',
  TOUCH_END: 'touchend',
  TOUCH_START: 'touchstart',
  TRANSITIONEND: 'transitionend',
  UPDATE_POST_COUNT: 'updatepostcount',
  UPDATE_IN_VIEWPORT_MODULES: 'updateinviewportmodules',
  UPDATE_SEARCH_WITH_NEW_ITEMS: 'updatesearchwithnewitems',
  UPDATE_SETTINGS: 'updatesettings',
  WHEEL: 'wheel'
};

/***/ }),

/***/ "./patternlab/source/js/Constants/index.js":
/*!*************************************************!*\
  !*** ./patternlab/source/js/Constants/index.js ***!
  \*************************************************/
/*! exports provided: ARIA, CLASS_NAMES, ENDPOINTS, ERRORS, EVENTS, MISC, KEY_CODES, SELECTORS, TEMPLATES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _aria__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aria */ "./patternlab/source/js/Constants/aria.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ARIA", function() { return _aria__WEBPACK_IMPORTED_MODULE_0__["ARIA"]; });

/* harmony import */ var _class_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./class-names */ "./patternlab/source/js/Constants/class-names.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CLASS_NAMES", function() { return _class_names__WEBPACK_IMPORTED_MODULE_1__["CLASS_NAMES"]; });

/* harmony import */ var _endpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./endpoints */ "./patternlab/source/js/Constants/endpoints.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ENDPOINTS", function() { return _endpoints__WEBPACK_IMPORTED_MODULE_2__["ENDPOINTS"]; });

/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./errors */ "./patternlab/source/js/Constants/errors.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ERRORS", function() { return _errors__WEBPACK_IMPORTED_MODULE_3__["ERRORS"]; });

/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./events */ "./patternlab/source/js/Constants/events.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EVENTS", function() { return _events__WEBPACK_IMPORTED_MODULE_4__["EVENTS"]; });

/* harmony import */ var _misc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./misc */ "./patternlab/source/js/Constants/misc.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MISC", function() { return _misc__WEBPACK_IMPORTED_MODULE_5__["MISC"]; });

/* harmony import */ var _key_codes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./key-codes */ "./patternlab/source/js/Constants/key-codes.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY_CODES", function() { return _key_codes__WEBPACK_IMPORTED_MODULE_6__["KEY_CODES"]; });

/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./selectors */ "./patternlab/source/js/Constants/selectors.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SELECTORS", function() { return _selectors__WEBPACK_IMPORTED_MODULE_7__["SELECTORS"]; });

/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./templates */ "./patternlab/source/js/Constants/templates.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TEMPLATES", function() { return _templates__WEBPACK_IMPORTED_MODULE_8__["TEMPLATES"]; });











/***/ }),

/***/ "./patternlab/source/js/Constants/key-codes.js":
/*!*****************************************************!*\
  !*** ./patternlab/source/js/Constants/key-codes.js ***!
  \*****************************************************/
/*! exports provided: KEY_CODES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_CODES", function() { return KEY_CODES; });
//* ------------------------------------*\
//    $KEY CODES
//* ------------------------------------*/
var KEY_CODES = {
  ESCAPE: 27,
  SPACEBAR: 32
};

/***/ }),

/***/ "./patternlab/source/js/Constants/misc.js":
/*!************************************************!*\
  !*** ./patternlab/source/js/Constants/misc.js ***!
  \************************************************/
/*! exports provided: MISC */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MISC", function() { return MISC; });
//* ------------------------------------*\
//    $MISC STRINGS
//* -----------------------------------*/
var MISC = {
  ALL: 'all',
  BEFOREEND: 'beforeend',
  CHANGE: 'Change ',
  CLEAR_FILTER: 'Clear Filter',
  CLOSE: 'Close',
  CLOSE_FILTERS: 'Close Filters',
  DATA_VISIBLE: 'data-visible',
  EYE_BLINK: 'EyeBlink',
  FALSE: 'false',
  FILTERS: 'Filters',
  fURL1: '//www.facebook.com/sharer.php?u=',
  HEIGHT: 'height',
  IN_VIEWPORT: 'in-viewport',
  MENU: 'Menu',
  MQ_HOVER: '(hover: hover)',
  MQ_NO_ANY: '(any-hover: none), (any-pointer: coarse)',
  lURL1: '//www.linkedin.com/shareArticle?mini=true&url=',
  lURL2: '&title=',
  lURL3: '&summary=',
  lURL4: '&source=',
  mURL1: 'mailto:',
  mURL2: '?subject=',
  mURL3: '&body=',
  NAME: 'name',
  NO: 'no',
  NO_RESULTS: 'There are no posts that match that filter combination.',
  POST: 'post',
  POSTS: 'posts',
  PUBLISH: 'publish',
  SQUERY: '&s=',
  TABINDEX: 'tabindex',
  TRUE: 'true',
  tURL1: 'https://twitter.com/share?url=',
  tURLText: '&text=',
  tURLVia: '&via=BSD',
  VALUE: 'value',
  WIDTH: 'width'
};

/***/ }),

/***/ "./patternlab/source/js/Constants/selectors.js":
/*!*****************************************************!*\
  !*** ./patternlab/source/js/Constants/selectors.js ***!
  \*****************************************************/
/*! exports provided: SELECTORS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECTORS", function() { return SELECTORS; });
//* --------------------------------------------------*\
//    $SELECTORS - CSS selectors ONLY
// -  tag names, #ids, .classnames, [attributes], etc
//* --------------------------------------------------*/
var SELECTORS = {
  ALL: '#all',
  ANCHOR: 'a',
  ANCHOR_WITH_HREF: 'a[href]',
  API_RESULTS: '[data-loadcomponent="APIResults"]',
  BACKGROUND: '.background',
  BUTTON: 'button',
  CHECKED: ':checked',
  CHECKED_LABEL: ':checked + label',
  CHECKBOX: 'checkbox',
  CLOSE: '.close',
  CLOSE_SEARCH: '.close-search',
  DATA_BOTTOM: 'data-bottomposition',
  DATA_HALFWAY: 'data-halfway',
  DATA_HAS_ANIMATED: 'data-has-animated',
  DATA_LAZY_LOAD: 'data-lazyload',
  DATA_MOUSEFOLLOW: '[data-mousefollow]',
  DATA_POSITION: 'data-position',
  DATA_VISIBLE: '[data-visible]',
  DIV: 'div',
  DROPDOWN: '.dropdown',
  DROPDOWN_CONTENT: '.dropdown__content',
  DROPDOWN_TOGGLE: '.dropdown__toggle',
  DROPDOWN_TOGGLE_CLICK: '.dropdown.click',
  DROPDOWN_TOGGLE_HOVER: '.dropdown.hover',
  EMAIL: '.share--email',
  EYE: '.eye',
  FACEBOOK: '.share--fb',
  FILE_INPUT: 'input[type=file]',
  FILTER: '.filter',
  FILTER_CHOICE: '.filter-choice',
  FILTER_FORM: '.filters-form',
  FILTER_OPTION: '.filter-option',
  FILTER_TRIGGER: '.filter-trigger',
  FORM: 'form',
  FORM_FIELDS: 'input, select, textarea',
  FUN_FACT_ITEM: '.fun-fact__item',
  HTML: 'html',
  INVALID: ':invalid',
  LINKEDIN: '.share--li',
  LOADING: '.loading',
  LOAD_MORE: '.load-more',
  MENU_TXT: '.menu-txt',
  MOUSEFOLLOW: '.mousefollow',
  NAV_TRIGGER: '.nav_trigger',
  NESTED: '.nested',
  NEXT_FACT: '.next-fact',
  OGDESC: 'meta[property="og:description"]',
  OGTITLE: 'meta[property="og:title"]',
  OGURL: 'meta[property="og:url"]',
  OPEN_SEARCH: '.open-search',
  OPTGROUP: 'optgroup',
  PARAGRAPH: 'p',
  POST_COUNT: '.post-count .count',
  POST_LISTING: '.post-listing',
  RADIO: '[type="radio"]',
  RESULTS_CONTAINER: '.results-container',
  SEARCH_INPUT: '.search-field__input',
  SELECTED: '.selected',
  SPAN: 'span',
  STATISTIC_VALUE: '.statistic__value',
  SUBMISSION_RESPONSE: '.submission-response',
  SUBMIT: '[type="submit"]',
  TAB: '[role="tab"]',
  TABPANEL: '[role="tabpanel"]',
  TWITTER: '.share--tw'
};

/***/ }),

/***/ "./patternlab/source/js/Constants/templates.js":
/*!*****************************************************!*\
  !*** ./patternlab/source/js/Constants/templates.js ***!
  \*****************************************************/
/*! exports provided: TEMPLATES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEMPLATES", function() { return TEMPLATES; });
//* --------------------------------------------------*\
//    $TEMPLATES - JS template literals
// -  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
//* --------------------------------------------------*/
var TEMPLATES = {
  BLOG_LISTING: function BLOG_LISTING(post) {
    return "\n      <li class=\"blog-listing-grid__item\">\n          <article class=\"post\" data-visible=\"false\">\n            <a href=\"".concat(post.link, "\" class=\"post__permalink\">\n              <h2 class=\"post__eyebrow\" role=\"presentation\">").concat(post.categories.terms[0].name, "</h2>\n              <h1 class=\"post__title\">").concat(post.title, "</h1>\n              ").concat(!!post.authors ? '<p class="post__author">' + post.authors.authorlist + '</p>' : '', "\n              <p class=\"post__subheading\">").concat(post.excerpt, "</p>\n              <figure class=\"post__illustration\">\n                <picture class=\"post__illustration__image\">\n                  <source media=\"(min-width: 1024px)\" srcset=\"").concat(post.featuredmedia.rawsrc, "\">\n                  <img src=\"").concat(post.featuredmedia.smallsrc, "\" alt=\"").concat(post.featuredmedia.alt, "\">\n                </picture>\n                <figcaption class=\"post__illustration__caption\"><span class=\"caption-copy\">").concat(post.category_cta, "</span></figcaption>\n              </figure>\n            </a>\n          </article>\n        </li>\n      ");
  },
  FILTER_CHOICE: function FILTER_CHOICE(filter) {
    return "<h3 class=\"filter-choice\"><span class=\"verb\">Viewing</span> <span class=\"noun\">".concat(filter, "</span></h3>");
  },
  PAGE_SUBHEADING: function PAGE_SUBHEADING(subheading) {
    return "<span class=\"landing-page-header__title--subheading\">".concat(subheading, "</span>");
  },
  NO_RESULTS: function NO_RESULTS(message) {
    return "<h2 class=\"no-results\">".concat(message, "</h2>");
  }
};

/***/ }),

/***/ "./patternlab/source/js/Utils/closest.js":
/*!***********************************************!*\
  !*** ./patternlab/source/js/Utils/closest.js ***!
  \***********************************************/
/*! exports provided: closest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closest", function() { return closest; });
/**
 * Looks for ancestor elemnt with given selector
 *
 * @param {HTMLElement} elem the elemnt to test
 * @param {String} selector the selector you're looking for
 * @return {HTMLElement} element The closest element
 */
function closest(elem, selector) {
  var element = elem;
  var matchesSelector = element.matches || element.webkitMatchesSelector || element.mozMatchesSelector || element.msMatchesSelector;

  while (element) {
    if (matchesSelector.call(element, selector)) {
      break;
    }

    element = element.parentElement;
  }

  return element;
}

/***/ }),

/***/ "./patternlab/source/js/Utils/convertdate.js":
/*!***************************************************!*\
  !*** ./patternlab/source/js/Utils/convertdate.js ***!
  \***************************************************/
/*! exports provided: convertdate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertdate", function() { return convertdate; });
var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
/**
 * Convert date to human readable
 *
 * @param {String} ISO an ISO date string
 * @return {String} human readable date
 */

function convertdate(ISO) {
  var thisDate = new Date(ISO);
  var year = thisDate.getFullYear();
  var month = monthNames[thisDate.getMonth()];
  var day = thisDate.getDate();
  return month + ' ' + day + ', ' + year;
}

/***/ }),

/***/ "./patternlab/source/js/Utils/cookie.js":
/*!**********************************************!*\
  !*** ./patternlab/source/js/Utils/cookie.js ***!
  \**********************************************/
/*! exports provided: getcookie, setcookie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getcookie", function() { return getcookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setcookie", function() { return setcookie; });
/**
 * Given a cookie name, returns value of that cookie
 *
 * @param {String} name the name of the cookie
 * @return {String} the value of the cookie
 */
function getcookie(name) {
  var cookiestring = "".concat(name, "=");
  var decodedCookie = decodeURIComponent(document.cookie);
  var cookies = decodedCookie.split(';');

  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];

    while (cookie.charAt(0) == ' ') {
      cookie = cookie.substring(1);
    }

    if (cookie.indexOf(cookiestring) == 0) {
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

function setcookie(name, value, expire) {
  var date = new Date();
  date.setTime(date.getTime() + expire * 24 * 60 * 60 * 1000);
  var expires = 'expires=' + date.toUTCString();
  document.cookie = "".concat(name, "=").concat(value, ";").concat(expires, ";path=/");
}

/***/ }),

/***/ "./patternlab/source/js/Utils/debounce.js":
/*!************************************************!*\
  !*** ./patternlab/source/js/Utils/debounce.js ***!
  \************************************************/
/*! exports provided: debounce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing.
 *
 * @param  {Function} func A function to call after N milliseconds
 * @param  {number} wait The number of milliseconds to wait
 * @param  {boolean} immediate Trigger the function on the leading edge instead of the trailing
 * @return {Function} A function, that, as long as it continues to be invoked, will not be triggered
 */
function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this;
    var args = arguments;

    var later = function later() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

/***/ }),

/***/ "./patternlab/source/js/Utils/decodehtml.js":
/*!**************************************************!*\
  !*** ./patternlab/source/js/Utils/decodehtml.js ***!
  \**************************************************/
/*! exports provided: decodehtml */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decodehtml", function() { return decodehtml; });
/**
 * Parse to HTML
 *
 * @param {String} data data to parse into HTML
 * @return {HTMLElement} HTML
 */
function decodehtml(data) {
  var parser = new DOMParser();
  var dom = parser.parseFromString('<!doctype html><body>' + data, 'text/html');
  return dom.body.textContent;
}

/***/ }),

/***/ "./patternlab/source/js/Utils/hashover.js":
/*!************************************************!*\
  !*** ./patternlab/source/js/Utils/hashover.js ***!
  \************************************************/
/*! exports provided: hashover */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hashover", function() { return hashover; });
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants */ "./patternlab/source/js/Constants/index.js");

/**
 * Returns a Boolean corrsponding to whether or not the device/browser
 * in use is capable of hover events
 *
 * @return {Boolean} true if device is hover event-capable; false if not
 */

function hashover() {
  var hoverQuery = window.matchMedia(_Constants__WEBPACK_IMPORTED_MODULE_0__["MISC"].MQ_HOVER);
  var anyQuery = window.matchMedia(_Constants__WEBPACK_IMPORTED_MODULE_0__["MISC"].MQ_NO_ANY);
  return hoverQuery.matches || !anyQuery.matches ? true : false;
}

/***/ }),

/***/ "./patternlab/source/js/Utils/hextorgb.js":
/*!************************************************!*\
  !*** ./patternlab/source/js/Utils/hextorgb.js ***!
  \************************************************/
/*! exports provided: hextorgb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hextorgb", function() { return hextorgb; });
/**
 * Convert HEX color to RGB
 *
 * @param {String} hex a hex color
 * @return {String} A CSS rgb color value
 */
function hextorgb(hex) {
  var rgb = hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (m, r, g, b) {
    return '#' + r + r + g + g + b + b;
  }).substring(1).match(/.{2}/g).map(function (x) {
    return parseInt(x, 16);
  });
  return "rgb(".concat(rgb[0], ",").concat(rgb[1], ",").concat(rgb[2], ")");
}

/***/ }),

/***/ "./patternlab/source/js/Utils/index.js":
/*!*********************************************!*\
  !*** ./patternlab/source/js/Utils/index.js ***!
  \*********************************************/
/*! exports provided: closest, createloader, convertdate, debounce, decodehtml, getcookie, hashover, hextorgb, interpolatenumbers, isie, isobjectempty, isscrolledintoview, MessageBus, openpopup, removeloader, setcookie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _closest_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./closest.js */ "./patternlab/source/js/Utils/closest.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "closest", function() { return _closest_js__WEBPACK_IMPORTED_MODULE_0__["closest"]; });

/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader */ "./patternlab/source/js/Utils/loader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createloader", function() { return _loader__WEBPACK_IMPORTED_MODULE_1__["createloader"]; });

/* harmony import */ var _convertdate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./convertdate.js */ "./patternlab/source/js/Utils/convertdate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "convertdate", function() { return _convertdate_js__WEBPACK_IMPORTED_MODULE_2__["convertdate"]; });

/* harmony import */ var _debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./debounce */ "./patternlab/source/js/Utils/debounce.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return _debounce__WEBPACK_IMPORTED_MODULE_3__["debounce"]; });

/* harmony import */ var _decodehtml__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./decodehtml */ "./patternlab/source/js/Utils/decodehtml.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "decodehtml", function() { return _decodehtml__WEBPACK_IMPORTED_MODULE_4__["decodehtml"]; });

/* harmony import */ var _cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cookie */ "./patternlab/source/js/Utils/cookie.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getcookie", function() { return _cookie__WEBPACK_IMPORTED_MODULE_5__["getcookie"]; });

/* harmony import */ var _hashover__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hashover */ "./patternlab/source/js/Utils/hashover.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hashover", function() { return _hashover__WEBPACK_IMPORTED_MODULE_6__["hashover"]; });

/* harmony import */ var _hextorgb__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hextorgb */ "./patternlab/source/js/Utils/hextorgb.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hextorgb", function() { return _hextorgb__WEBPACK_IMPORTED_MODULE_7__["hextorgb"]; });

/* harmony import */ var _interpolatenumbers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./interpolatenumbers */ "./patternlab/source/js/Utils/interpolatenumbers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolatenumbers", function() { return _interpolatenumbers__WEBPACK_IMPORTED_MODULE_8__["interpolatenumbers"]; });

/* harmony import */ var _isie__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./isie */ "./patternlab/source/js/Utils/isie.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isie", function() { return _isie__WEBPACK_IMPORTED_MODULE_9__["isie"]; });

/* harmony import */ var _isobjectempty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./isobjectempty */ "./patternlab/source/js/Utils/isobjectempty.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isobjectempty", function() { return _isobjectempty__WEBPACK_IMPORTED_MODULE_10__["isobjectempty"]; });

/* harmony import */ var _isscrolledintoview__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./isscrolledintoview */ "./patternlab/source/js/Utils/isscrolledintoview.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isscrolledintoview", function() { return _isscrolledintoview__WEBPACK_IMPORTED_MODULE_11__["isscrolledintoview"]; });

/* harmony import */ var _messagebus__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./messagebus */ "./patternlab/source/js/Utils/messagebus.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MessageBus", function() { return _messagebus__WEBPACK_IMPORTED_MODULE_12__["MessageBus"]; });

/* harmony import */ var _openpopup__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./openpopup */ "./patternlab/source/js/Utils/openpopup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openpopup", function() { return _openpopup__WEBPACK_IMPORTED_MODULE_13__["openpopup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeloader", function() { return _loader__WEBPACK_IMPORTED_MODULE_1__["removeloader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setcookie", function() { return _cookie__WEBPACK_IMPORTED_MODULE_5__["setcookie"]; });


















/***/ }),

/***/ "./patternlab/source/js/Utils/interpolatenumbers.js":
/*!**********************************************************!*\
  !*** ./patternlab/source/js/Utils/interpolatenumbers.js ***!
  \**********************************************************/
/*! exports provided: interpolatenumbers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpolatenumbers", function() { return interpolatenumbers; });
/**
 * A function which moves from one value to another by a certain percent
 *
 * @param {Integer} from the starting number
 * @param {Integer} to the destination number
 * @param {Float} by percentage by which to change
 * @return {Integer} the changed amount, rounded to the nearest integer
 */
function interpolatenumbers(from, to, by) {
  return Math.round((1 - by) * from + by * to);
}

/***/ }),

/***/ "./patternlab/source/js/Utils/isie.js":
/*!********************************************!*\
  !*** ./patternlab/source/js/Utils/isie.js ***!
  \********************************************/
/*! exports provided: isie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isie", function() { return isie; });
/**
 * Checks if user is running Internet Explorer
 *
 * @return {Boolean} true is IE, false if not
 */
function isie() {
  if (!!navigator.userAgent.match(/Trident\/7\./)) {
    return true;
  }

  return false;
}

/***/ }),

/***/ "./patternlab/source/js/Utils/isobjectempty.js":
/*!*****************************************************!*\
  !*** ./patternlab/source/js/Utils/isobjectempty.js ***!
  \*****************************************************/
/*! exports provided: isobjectempty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isobjectempty", function() { return isobjectempty; });
/**
 * Checks if object exists and is populated
 *
 * @param {Object} obj the object to test
 *
 * @return {Boolean} true is empty, false if not
 */
function isobjectempty(obj) {
  if (typeof obj !== 'undefined') {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  }

  return true;
}

/***/ }),

/***/ "./patternlab/source/js/Utils/isscrolledintoview.js":
/*!**********************************************************!*\
  !*** ./patternlab/source/js/Utils/isscrolledintoview.js ***!
  \**********************************************************/
/*! exports provided: isscrolledintoview */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isscrolledintoview", function() { return isscrolledintoview; });
/**
 * A function which measures the elements position on the page in
 * relation to the what the user can currently see on their screen
 * and returns a boolean value with `true` being that the element
 * is visible and `false` being that it is not visible.
 *
 * @param  {Object}  elem A DOM element
 * @return {Boolean} isVisible A boolean value with `true` representing that the element is visible
 */
function isscrolledintoview(elem) {
  var elementBounds = elem.getBoundingClientRect();
  return elementBounds.top < window.innerHeight && elementBounds.bottom >= 0;
}

/***/ }),

/***/ "./patternlab/source/js/Utils/loader.js":
/*!**********************************************!*\
  !*** ./patternlab/source/js/Utils/loader.js ***!
  \**********************************************/
/*! exports provided: createloader, removeloader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createloader", function() { return createloader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeloader", function() { return removeloader; });
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants */ "./patternlab/source/js/Constants/index.js");

/**
 * Add DOM element for loading graphic to passed-in element
 *
 * @param {HTMLElement} element the element to which to add the loader
 */

function createloader(element) {
  var loader = document.createElement(_Constants__WEBPACK_IMPORTED_MODULE_0__["SELECTORS"].DIV);
  loader.appendChild(document.createTextNode(_Constants__WEBPACK_IMPORTED_MODULE_0__["CLASS_NAMES"].LOADING));
  loader.classList.add(_Constants__WEBPACK_IMPORTED_MODULE_0__["CLASS_NAMES"].LOADING);
  element.appendChild(loader);
}
/**
 * Remove DOM element for loading graphic from passed-in element
 *
 * @param {HTMLElement} element the element from which to remove the loader
 */

function removeloader(element) {
  var loader = element.querySelector(_Constants__WEBPACK_IMPORTED_MODULE_0__["SELECTORS"].LOADING);
  element.removeChild(loader);
}

/***/ }),

/***/ "./patternlab/source/js/Utils/messagebus.js":
/*!**************************************************!*\
  !*** ./patternlab/source/js/Utils/messagebus.js ***!
  \**************************************************/
/*! exports provided: MessageBus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageBus", function() { return MessageBus; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * A class which helps sending messages accoss components via a DOM node
 */
var MessageBus = /*#__PURE__*/function () {
  function MessageBus() {
    _classCallCheck(this, MessageBus);
  }

  _createClass(MessageBus, [{
    key: "sendEvent",
    value:
    /**
     * sendEvent
     *
     * A function which lets you dispatch a custom event on
     * a Node. If the element is passed, it uses the element
     * available on the current `this` context.
     *
     * @param {String} eventName Name of the custom event that is being triggered
     * @param {Object=} options Object which should be passed in the message
     * @param {Object=} element DOM node which the event should be attached to
     */
    function sendEvent(eventName, options, element) {
      var evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(eventName, false, false, options);
      (element || this.element).dispatchEvent(evt);
    }
  }]);

  return MessageBus;
}();

/***/ }),

/***/ "./patternlab/source/js/Utils/openpopup.js":
/*!*************************************************!*\
  !*** ./patternlab/source/js/Utils/openpopup.js ***!
  \*************************************************/
/*! exports provided: openpopup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openpopup", function() { return openpopup; });
/**
 * A function which opens a popup window
 *
 * @param  {String} url the url to open in the popup
 * @param  {String} windowName a unique name for the popup
 * @param  {Integer} w the desired width of the popup
 * @param  {Integer} h the desired height of the popup
 * @return {Object} an object the popup function is bound to
 */
function openpopup(url, windowName, w, h) {
  return window.open(url, windowName, 'menubar=no,status=no,toolbar=no,location=yes,resizable=yes,scrollbars=yes,status=no,width=' + w + ',height=' + h + '');
}

/***/ }),

/***/ "./patternlab/source/js/components/controllers/Controller.js":
/*!*******************************************************************!*\
  !*** ./patternlab/source/js/components/controllers/Controller.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Controller; });
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utils */ "./patternlab/source/js/Utils/index.js");


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/**
 * The Controller base class
 *
 * @class Controller
 */

var Controller = /*#__PURE__*/function (_MessageBus) {
  _inherits(Controller, _MessageBus);

  var _super = _createSuper(Controller);

  /**
   * Constructor function of the Controller class.
   */
  function Controller() {
    _classCallCheck(this, Controller);

    return _super.call(this);
  }
  /**
   * Request
   *
   * Calls the request method in super class
   * @param {String} url - a url from which to fetch
   * @param {String} arg - arguments, if any
   * @return {Object} result of the request
   */


  _createClass(Controller, [{
    key: "request",
    value: function request(url, arg) {
      var args = typeof arg !== 'undefined' ? arg : {
        method: 'GET'
      };
      return fetch(url, args).then(function (response) {
        return response.json().then(function (data) {
          return {
            data: data,
            headers: response.headers,
            status: response.status
          };
        }).then(function (res) {
          return res;
        });
      });
    }
  }]);

  return Controller;
}(_Utils__WEBPACK_IMPORTED_MODULE_0__["MessageBus"]);



/***/ }),

/***/ "./patternlab/source/js/components/controllers/LoadPostsController.js":
/*!****************************************************************************!*\
  !*** ./patternlab/source/js/components/controllers/LoadPostsController.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoadPostsController; });
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Constants */ "./patternlab/source/js/Constants/index.js");
/* harmony import */ var _models_LoadPostsModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/LoadPostsModel */ "./patternlab/source/js/components/models/LoadPostsModel.js");
/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Controller */ "./patternlab/source/js/components/controllers/Controller.js");


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




/**
 * The LoadPostsController controller which handles the search filters
 *
 * @class LoadPostsController
 */

var LoadPostsController = /*#__PURE__*/function (_Controller) {
  _inherits(LoadPostsController, _Controller);

  var _super = _createSuper(LoadPostsController);

  /**
   * Constructor function of the LoadPostsController class.
   */
  function LoadPostsController() {
    var _this;

    _classCallCheck(this, LoadPostsController);

    _this = _super.call(this);
    _this.posts = null;
    return _this;
  }
  /**
   * LoadItems
   *
   * Event handler for LOAD_ITEMS
   * @param {String} path the endpoint path
   * @param {String} params string of query params
   * @param {TemplateLiteral} template the template literal to use
   * @param {Boolean} fromsearch are we loading posts from search?
   * @param {HTMLElement} resultscontainer the container into which we're loading
   * @param {String} posttype a string representing the post type we're asking for
   */


  _createClass(LoadPostsController, [{
    key: "loadItems",
    value: function loadItems(path, params, template, fromsearch, resultscontainer, posttype) {
      var _this2 = this;

      var querypath = fromsearch ? _Constants__WEBPACK_IMPORTED_MODULE_0__["ENDPOINTS"].SEARCH : _Constants__WEBPACK_IMPORTED_MODULE_0__["ENDPOINTS"].WPAPI + path + '/?';
      var query = params + '&_embed=1';
      var endpoint = querypath + query;
      this.request(endpoint).then(function (response) {
        _this2.sendEvent(_Constants__WEBPACK_IMPORTED_MODULE_0__["EVENTS"].RESULTS_RETURNED, {
          'response': new _models_LoadPostsModel__WEBPACK_IMPORTED_MODULE_1__["default"](response.data, posttype),
          'template': _Constants__WEBPACK_IMPORTED_MODULE_0__["TEMPLATES"][template],
          'headers': response.headers,
          'primary': 0,
          'secondary': 0
        }, resultscontainer);
      })["catch"](function () {});
    }
    /**
     * Request
     *
     * Calls the request method in super class
     * @param {String} endpoint the request endpoint
     * @return {Object} the request response
     */

  }, {
    key: "request",
    value: function request(endpoint) {
      return _get(_getPrototypeOf(LoadPostsController.prototype), "request", this).call(this, endpoint);
    }
  }]);

  return LoadPostsController;
}(_Controller__WEBPACK_IMPORTED_MODULE_2__["default"]);



/***/ }),

/***/ "./patternlab/source/js/components/models/LoadPostsModel.js":
/*!******************************************************************!*\
  !*** ./patternlab/source/js/components/models/LoadPostsModel.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoadPostsModel; });
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Constants */ "./patternlab/source/js/Constants/index.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Utils */ "./patternlab/source/js/Utils/index.js");


function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



/**
 * AuthorsModel
 *
 * Model for Authors returned as part of Posts returned from WP API
 */

var AuthorsModel = /*#__PURE__*/_createClass(
/**
 * Constructor for the AuthorsModel class
 *
 * @param  {Object} authors An object of data to transform and model
 */
function AuthorsModel(authors) {
  _classCallCheck(this, AuthorsModel);

  var authorsArray = [];
  authors.forEach(function (author) {
    authorsArray.push(author.post_title);
  });
  this.authorlist = authorsArray.join(', ');
});
/**
 * TermModel
 *
 * Model for a Term returned as part of Terms->Posts returned from WP API
 */


var TermModel = /*#__PURE__*/_createClass(
/**
 * Constructor for the TermModel class
 *
 * @param  {Object} term An object of data to transform and model
 */
function TermModel(term) {
  _classCallCheck(this, TermModel);

  this.name = term.name;
  this.link = term.link;
  this.slug = term.slug;
});
/**
 * TermsModel
 *
 * Model for Terms returned as part of Posts returned from WP API
 */


var TermsModel = /*#__PURE__*/_createClass(
/**
 * Constructor for the TermsModel class
 *
 * @param  {Object} terms An object of data to transform and model
 * @param  {String} type the type of taxonomy for this term
 */
function TermsModel(terms, type) {
  var _this = this;

  _classCallCheck(this, TermsModel);

  this.terms = [];
  terms.forEach(function (termset) {
    if (termset.length > 0 && !!termset[0].taxonomy && termset[0].taxonomy === type) {
      termset.forEach(function (term) {
        _this.terms.push(new TermModel(term));
      });
    }
  });
});
/**
 * Featured Media Model
 *
 * Model for Featured Media returned as part of Posts returned from WP API
 */


var FeaturedMediaModel = /*#__PURE__*/_createClass(
/**
 * Constructor for the FeaturedMediaModel class
 *
 * @param  {Object} media The post's featuredmedia object
 * @param  {Object} posttitle The post's title, as a fallback
 */
function FeaturedMediaModel(media, posttitle) {
  _classCallCheck(this, FeaturedMediaModel);

  if (!media) {
    this.rawsrc = _Constants__WEBPACK_IMPORTED_MODULE_0__["MISC"].PLACEHOLDER_IMG;
    this.smallsrc = _Constants__WEBPACK_IMPORTED_MODULE_0__["MISC"].PLACEHOLDER_IMG;
    this.alt = posttitle;
  } else {
    this.rawsrc = media[0].source_url;
    this.smallsrc = typeof media[0].media_details.sizes.medium_large !== 'undefined' ? media[0].media_details.sizes.medium_large.source_url : media[0].source_url;
    this.alt = !!media[0].alt_text ? media[0].alt_text : !!media[0].caption.rendered ? media[0].caption.rendered : !!media[0].title.rendered ? media[0].title.rendered : posttitle;
  }
});
/**
 * EyebrowModel
 *
 * Model for if and eyebrow value is returned  in Posts from WP API
 */


var EyebrowModel = /*#__PURE__*/_createClass(
/**
 * Constructor for the EyebrowModel class
 *
 * @param  {Object} eyebrow The post's eyebrow object
 * @param  {Object} term The post's first term, as a fallback
 */
function EyebrowModel(eyebrow, term) {
  _classCallCheck(this, EyebrowModel);

  if (eyebrow[0] !== '') {
    this.label = eyebrow[0];
  } else {
    var termset = new TermsModel(term, 'category');
    this.label = termset.terms[0].name;
  }
});
/**
 * PostModel
 *
 * Model for a Term returned as part of Terms->Posts returned from WP API
 */


var PostModel = /*#__PURE__*/_createClass(
/**
 * Constructor for the PostModel class
 *
 * @param  {Object} post An object of data to transform and model
 * @param  {String} posttype the type of post we're loading
 */
function PostModel(post, posttype) {
  _classCallCheck(this, PostModel);

  this.id = post.id;
  this.date = post.date;
  this.featuredmedia = post.featured_media > 0 ? new FeaturedMediaModel(post._embedded['wp:featuredmedia'], post.title.rendered) : new FeaturedMediaModel(false, post.title.rendered);
  this.meta = !Object(_Utils__WEBPACK_IMPORTED_MODULE_1__["isobjectempty"])(post.meta) ? post.meta : !!post.post_meta ? post.post_meta : null;
  this.slug = post.slug;
  this.link = !!post.post_meta && post.post_meta.hasOwnProperty('override_url') && post.post_meta.override_url[0].length > 0 ? post.post_meta.override_url[0] : post.link;
  this.formattedDate = !!post.date ? Object(_Utils__WEBPACK_IMPORTED_MODULE_1__["convertdate"])(post.date) : null;
  this.title = post.title.rendered;
  this.capabilities = new TermsModel(post._embedded['wp:term'], 'capabilities');
  this.categories = new TermsModel(post._embedded['wp:term'], 'category');
  this.tags = new TermsModel(post._embedded['wp:term'], 'post_tag');
  this.category_cta = !!post.category_cta ? post.category_cta : 'Read';
  this.authors = post.article_author !== '' && !!post.article_author ? new AuthorsModel(post.article_author) : null;
  this.excerpt = !!post.excerpt ? post.excerpt.rendered.replace(/<[^>]*>?/gm, '').substring(0, 150) : null;
  this.eyebrow = posttype === _Constants__WEBPACK_IMPORTED_MODULE_0__["MISC"].CASE_STUDY ? null : new EyebrowModel(post.post_meta.eyebrow_label, post._embedded['wp:term']);
});
/**
 * No Posts
 *
 * Model for a Term returned as part of Terms->Posts returned from WP API that has no results
 */


var NoPosts = /*#__PURE__*/_createClass(
/**
 * Constructor for the NoPosts class
 *
 */
function NoPosts() {
  _classCallCheck(this, NoPosts);

  this.message = _Constants__WEBPACK_IMPORTED_MODULE_0__["MISC"].NO_RESULTS;
});
/**
 * LoadPostsModel
 *
 * Model for API call results from WP Search filter
 */


var LoadPostsModel = /*#__PURE__*/_createClass(
/**
 * Constructor for the Model class which tests that data was
 * passed into the constructor and then calls the `fromJSON`
 * function to being translating the data
 *
 * @param  {Object} posts An object of data to transform and model
 * @param  {String} posttype the type of post we're loading
 */
function LoadPostsModel(posts, posttype) {
  var _this2 = this;

  _classCallCheck(this, LoadPostsModel);

  this.posts = [];

  if (posts.length > 0) {
    posts.forEach(function (post) {
      _this2.posts.push(new PostModel(post, posttype));
    });
  } else {
    this.posts = new NoPosts();
  }
});



/***/ }),

/***/ "./patternlab/source/js/components/services/ResizeService.js":
/*!*******************************************************************!*\
  !*** ./patternlab/source/js/components/services/ResizeService.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ResizeService; });
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utils */ "./patternlab/source/js/Utils/index.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Constants */ "./patternlab/source/js/Constants/index.js");


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



/**
 * ID
 *
 * @type {Number}
 * @ignore
 */

var id = 0;
/**
 * Get ID
 *
 * Because file is loaded only once, this function
 * can be used to generate a unique id every time
 * it is called.
 *
 * @return {Number} Unique ID value
 * @ignore
 */

function getId() {
  return id++;
}
/**
 * Resize Service
 */


var ResizeService = /*#__PURE__*/function () {
  /**
   * ResizeService constructor in which the `callbacks` array is created
   * as a property of the class.
   */
  function ResizeService() {
    _classCallCheck(this, ResizeService);

    /**
     * An array to be populated with callback functions that will be triggered on resize
     *
     * @property {Array} callbacks
     */
    this.callbacks = [];
    this.init();
  }
  /**
   * @desc Initialize the singleton by attaching the event listener to the window
   * @listens {Event} listens to the window resize event
   */


  _createClass(ResizeService, [{
    key: "init",
    value: function init() {
      window.addEventListener(_Constants__WEBPACK_IMPORTED_MODULE_1__["EVENTS"].RESIZE, Object(_Utils__WEBPACK_IMPORTED_MODULE_0__["debounce"])(this.onResize.bind(this), 10));
    }
    /**
     * @desc The resize event handler. Itertates through the `callback` array and invokes each callback in the Array
     */

  }, {
    key: "onResize",
    value: function onResize() {
      this.callbacks.forEach(function (callback) {
        callback.callback();
      });
    }
    /**
     * @desc A hook for pushing a callback function
     * into the `callbacks` array. A unique
     * ID value for the callback is generated
     * and a function is returned for removing
     * the callback if need be.
     *
     * @param {Function} callback A function to invoke by the ResizeService
     * @return {Function} `removeCallback` A function which will remove an entry from the `callbacks` array
     */

  }, {
    key: "addCallback",
    value: function addCallback(callback) {
      // Generate an id for the callback
      var id = getId(); // Push function into array with a unique id

      this.callbacks.push({
        id: id,
        callback: callback
      }); // Return the remove function

      return this.removeCallback.bind(this, id);
    }
    /**
     * Filters through the `callback` array and removes
     * the entry that corresponds to the id passed
     * in as an argument
     *
     * @param  {Number} id An id value to filter by
     */

  }, {
    key: "removeCallback",
    value: function removeCallback(id) {
      this.callbacks = this.callbacks.filter(function (item) {
        return item.id !== id;
      });
    }
  }]);

  return ResizeService;
}();



/***/ }),

/***/ "./patternlab/source/js/components/services/ScrollService.js":
/*!*******************************************************************!*\
  !*** ./patternlab/source/js/components/services/ScrollService.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ScrollService; });
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utils */ "./patternlab/source/js/Utils/index.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Constants */ "./patternlab/source/js/Constants/index.js");


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



/**
 * ID
 *
 * @type {Number}
 * @ignore
 */

var id = 0;
/**
 * Get ID
 *
 * Because file is loaded only once, this function
 * can be used to generate a unique id every time
 * it is called.
 *
 * @return {Number} Unique ID value
 * @ignore
 */

function getId() {
  return id++;
}
/**
 * Scroll Service
 */


var ScrollService = /*#__PURE__*/function () {
  /**
   * Scroll Service constructor in which the `callbacks` array is created
   * as a property of the class.
   */
  function ScrollService() {
    _classCallCheck(this, ScrollService);

    /**
     * An array to be populated with callback functions that will be triggered on scroll
     *
     * @property {Array} callbacks
     */
    this.callbacks = [];
    this.init();
  }
  /**
   * @desc Initialize the singleton by attaching the event listener to the window
   * @listens {Event} listens to the window scroll event
   */


  _createClass(ScrollService, [{
    key: "init",
    value: function init() {
      window.addEventListener(_Constants__WEBPACK_IMPORTED_MODULE_1__["EVENTS"].SCROLL, Object(_Utils__WEBPACK_IMPORTED_MODULE_0__["debounce"])(this.onScroll.bind(this), 10));
    }
    /**
     * @desc The scroll event handler. Iterates through the `callback` array and invokes each callback in the Array
     */

  }, {
    key: "onScroll",
    value: function onScroll() {
      this.callbacks.forEach(function (callback) {
        callback.callback();
      });
    }
    /**
     * @desc A hook for pushing a callback function into the `callbacks` array. A unique
     * ID value for the callback is generated and a function is returned for removing
     * the callback if need be.
     *
     * @param {Function} callback A function to invoke by the ScrollService
     * @return {Function} `removeCallback` A function which will remove an entry from the `callbacks` array
     */

  }, {
    key: "addCallback",
    value: function addCallback(callback) {
      // Generate an id for the callback
      var id = getId(); // Push function into array with a unique id

      this.callbacks.push({
        id: id,
        callback: callback
      }); // Return the remove function

      return this.removeCallback.bind(this, id);
    }
    /**
     * Filters through the `callback` array and removes
     * the entry that corresponds to the id passed
     * in as an argument
     *
     * @param  {Number} id An id value to filter by
     */

  }, {
    key: "removeCallback",
    value: function removeCallback(id) {
      this.callbacks = this.callbacks.filter(function (item) {
        return item.id !== id;
      });
    }
  }]);

  return ScrollService;
}();



/***/ }),

/***/ "./patternlab/source/js/components/services/index.js":
/*!***********************************************************!*\
  !*** ./patternlab/source/js/components/services/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Services; });
/* harmony import */ var _ResizeService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResizeService */ "./patternlab/source/js/components/services/ResizeService.js");
/* harmony import */ var _ScrollService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScrollService */ "./patternlab/source/js/components/services/ScrollService.js");
 // Import services

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



/**
 * A singleton whose properties are individual services.
 *
 * Any service singleton service that needs to be instantiated
 * should be done so in the Services class.
 *
 * Services should not interact with the DOM, that should be
 * left to the Views. Services can simply be used to consolidate
 * an expensive event listener ('scroll', 'resize', etc). or
 * track state (like which modal is open at which time).
 */

var Services = /*#__PURE__*/_createClass(
/**
 * Services constructor that instantiates each service individually.
 * To add another services instiate it here.
 */
function Services() {
  _classCallCheck(this, Services);

  /**
   * A service which listens to the `window` resize event and
   * invokes an array of callbacks
   *
   * @property {Object} ResizeService A singleton instance of the ResizeService class
   */
  this.ResizeService = new _ResizeService__WEBPACK_IMPORTED_MODULE_0__["default"]();
  /**
   * A service which listens to the `window` scroll event and
   * invokes an array of callbacks
   *
   * @property {Object} ScrollService A singleton instance of the ScrollService class
   */

  this.ScrollService = new _ScrollService__WEBPACK_IMPORTED_MODULE_1__["default"]();
});



/***/ }),

/***/ "./patternlab/source/js/components/views/APIResults.js":
/*!*************************************************************!*\
  !*** ./patternlab/source/js/components/views/APIResults.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return APIResults; });
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Constants */ "./patternlab/source/js/Constants/index.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Utils */ "./patternlab/source/js/Utils/index.js");


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



/**
 * The APIResults module which handles populating post listings via WP API
 *
 * @class APIResults
 */

var APIResults = /*#__PURE__*/function (_MessageBus) {
  _inherits(APIResults, _MessageBus);

  var _super = _createSuper(APIResults);

  /**
   * APIResults constructor which assigns the element passed into the constructor
   * to the `this.element` property for later reference
   *
   * @param {HTMLElement} element - REQUIRED - the module's container
   */
  function APIResults(element) {
    var _this;

    _classCallCheck(this, APIResults);

    _this = _super.call(this);
    /**
     * Reference to the DOM element that is the root of the component
     * @property {Object}
     */

    _this.element = element; // Initialize the view

    _this.init();

    return _this;
  }
  /**
   * Initializes the view by calling the functions to
   * create DOM references, setup event handlers and
   * then create the event listeners
   *
   * @return {Object} Header A reference to the current instance of the class
   * @chainable
   */


  _createClass(APIResults, [{
    key: "init",
    value: function init() {
      this.cacheDomReferences().setupHandlers().enable();
      return this;
    }
    /**
     * Find all necessary DOM elements used in the view and cache them
     *
     * @return {Object} APIResults A reference to the instance of the class
     * @chainable
     */

  }, {
    key: "cacheDomReferences",
    value: function cacheDomReferences() {
      this.resultscontainer = this.element.querySelector(_Constants__WEBPACK_IMPORTED_MODULE_0__["SELECTORS"].RESULTS_CONTAINER); // blog posts can be split into two batches

      this.split = this.element.dataset.split !== 'false';
      this.position = parseInt(this.element.dataset.position);
      this.append = this.element.dataset.append; // the logic of where to put results differs if the posts are in 1 continer or 2

      if (!this.split) {
        this.begin = 0;
        this.cutoff = parseInt(this.element.dataset.increment);
        this.loadmore = this.element.querySelector(_Constants__WEBPACK_IMPORTED_MODULE_0__["SELECTORS"].LOAD_MORE);
      }

      if (!!this.split && this.position > 1) {
        this.begin = parseInt(this.element.dataset.increment) / 2;
        this.cutoff = parseInt(this.element.dataset.increment) + 1;
        this.primary = this.element.parentElement.querySelectorAll(_Constants__WEBPACK_IMPORTED_MODULE_0__["SELECTORS"].API_RESULTS)[0];
        this.loadmore = this.element.querySelector(_Constants__WEBPACK_IMPORTED_MODULE_0__["SELECTORS"].LOAD_MORE);
      }

      if (!!this.split && this.position == 1) {
        this.begin = 0;
        this.cutoff = parseInt(this.element.dataset.increment) / 2;
        this.secondary = this.element.parentElement.querySelectorAll(_Constants__WEBPACK_IMPORTED_MODULE_0__["SELECTORS"].API_RESULTS)[1];
        this.loadmore = this.secondary.querySelector(_Constants__WEBPACK_IMPORTED_MODULE_0__["SELECTORS"].LOAD_MORE);
      }

      return this;
    }
    /**
     * Bind event handlers with the proper context of `this`.
     *
     * @return {Object} Header A reference to the current instance of the class
     * @chainable
     */

  }, {
    key: "setupHandlers",
    value: function setupHandlers() {
      this.onRequestMadeHandler = this.onRequestMade.bind(this);
      this.onUpdateResponseHandler = this.onUpdateResponse.bind(this);
      return this;
    }
    /**
     * Creates event listeners to enable interaction with view
     *
     * @return {Object} APIResults A reference to the instance of the class
     * @chainable
     */

  }, {
    key: "enable",
    value: function enable() {
      if (!this.split || !!this.split && this.position > 1) {
        document.body.addEventListener(_Constants__WEBPACK_IMPORTED_MODULE_0__["EVENTS"].REQUEST_MADE, this.onRequestMadeHandler);
      }

      this.element.addEventListener(_Constants__WEBPACK_IMPORTED_MODULE_0__["EVENTS"].RESULTS_RETURNED, this.onUpdateResponseHandler);
      return this;
    }
    /**
     * Does stuff once request for new items is made
     *
     * @param {Event} event - the event object
     * @return {Object} APIResults A reference to the instance of the class
     * @chainable
     */

  }, {
    key: "onRequestMade",
    value: function onRequestMade(event) {
      this.sendEvent(_Constants__WEBPACK_IMPORTED_MODULE_0__["EVENTS"].REQUEST_MADE, {}, this.loadmore);
      return this;
    }
    /**
     * Does stuff on update API request
     *
     * @param {Event} event - the event object
     * @return {Object} APIResults A reference to the instance of the class
     * @chainable
     */

  }, {
    key: "onUpdateResponse",
    value: function onUpdateResponse(event) {
      this.appendAPIResults(event.detail);

      if (!this.split || !!this.split && this.position > 1) {
        this.sendEvent(_Constants__WEBPACK_IMPORTED_MODULE_0__["EVENTS"].UPDATE_POST_COUNT, event.detail.headers.get(_Constants__WEBPACK_IMPORTED_MODULE_0__["ENDPOINTS"].WPAPITOTAL), this.loadmore);
      } // when the results are split between two containers, keep each other updated


      var detail = event.detail;

      if (!!this.split && this.position > 1 && event.detail.primary < 1) {
        this.primary.dataset.append = this.append;
        detail.secondary = event.detail.secondary + 1;
        this.sendEvent(_Constants__WEBPACK_IMPORTED_MODULE_0__["EVENTS"].RESULTS_RETURNED, detail, this.primary);
      }

      if (!!this.split && this.position == 1 && event.detail.secondary < 1) {
        this.secondary.dataset.append = event.detail.primary === 0 ? false : this.element.dataset.append;
        this.secondary.dataset.offset = event.detail.primary === 0 ? 0 : this.element.dataset.offset;
        this.secondary.dataset.term = this.element.dataset.term;
        this.secondary.dataset.search = this.element.dataset.search;
        this.secondary.dataset.exclude = this.element.dataset.exclude;
        detail.primary = event.detail.primary + 1;
        this.sendEvent(_Constants__WEBPACK_IMPORTED_MODULE_0__["EVENTS"].RESULTS_RETURNED, detail, this.secondary);
      }

      return this;
    }
    /**
     * Appends/Replaces HTML to results container
     *
     * @param {Object} detail - results from WP API
     * @return {Object} APIResults A reference to the instance of the class
     * @chainable
     */

  }, {
    key: "appendAPIResults",
    value: function appendAPIResults(detail) {
      var _this2 = this;

      var results = detail.response;
      var template = detail.template;
      var noresults = _Constants__WEBPACK_IMPORTED_MODULE_0__["TEMPLATES"].NO_RESULTS;
      var append = this.element.dataset.append === _Constants__WEBPACK_IMPORTED_MODULE_0__["MISC"].TRUE;
      var begin = append ? 0 : this.begin;
      var HTML = '';

      if (results.posts.message === undefined) {
        if (!append & this.element.classList.contains(_Constants__WEBPACK_IMPORTED_MODULE_0__["CLASS_NAMES"].FIRST_BATCH)) {
          this.element.classList.remove(_Constants__WEBPACK_IMPORTED_MODULE_0__["CLASS_NAMES"].FIRST_BATCH);
        }

        HTML = results.posts.slice(begin, this.cutoff).map(function (post, i) {
          return template(post, i, append);
        }).join('');

        if (!this.split && append || !!this.split && append && this.position > 1) {
          this.resultscontainer.innerHTML = this.resultscontainer.innerHTML + HTML;
        } else if (!append) {
          this.resultscontainer.innerHTML = HTML;
        }

        setTimeout(function () {
          return _this2.sendEvent(_Constants__WEBPACK_IMPORTED_MODULE_0__["EVENTS"].UPDATE_IN_VIEWPORT_MODULES, {}, document.body);
        }, 100);
        this.sendEvent(_Constants__WEBPACK_IMPORTED_MODULE_0__["EVENTS"].UPDATE_SETTINGS, true, this.element);
      } else {
        this.resultscontainer.innerHTML = noresults(results.posts.message);
        this.sendEvent(_Constants__WEBPACK_IMPORTED_MODULE_0__["EVENTS"].UPDATE_SETTINGS, false, this.element);
      }

      return this;
    }
  }]);

  return APIResults;
}(_Utils__WEBPACK_IMPORTED_MODULE_1__["MessageBus"]);



/***/ }),

/***/ "./patternlab/source/js/components/views/Dropdown.js":
/*!***********************************************************!*\
  !*** ./patternlab/source/js/components/views/Dropdown.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dropdown; });
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Constants */ "./patternlab/source/js/Constants/index.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Utils */ "./patternlab/source/js/Utils/index.js");


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



/**
 * A class for the Dropdown module
 */

var Dropdown = /*#__PURE__*/function (_MessageBus) {
  _inherits(Dropdown, _MessageBus);

  var _super = _createSuper(Dropdown);

  /**
   * Constructor function of the Dropdown class. Must receive one arguments, a DOM
   * node representing a delivery ticket.
   *
   * @param {HTMLElement} element - REQUIRED - the module's container
   */
  function Dropdown(element) {
    var _this;

    _classCallCheck(this, Dropdown);

    _this = _super.call(this);
    /**
     * DOM node that is passed into the constructor
     *
     * @property {Object} element DOM node that is passed into the constructor
     */

    _this.element = element; // Initialize the view

    _this.init();

    return _this;
  }
  /**
   * Initializes the view by calling the functions to
   * create DOM references, setup event handlers and
   * then create the event listeners
   *
   * @return {Object} Dropdown A reference to the current instance of the class
   * @chainable
   */


  _createClass(Dropdown, [{
    key: "init",
    value: function init() {
      this.cacheDomReferences().setupHandlers().enable();
      return this;
    }
    /**
     * Cache DOM References
     *
     * Find all necessary DOM elements used in the view and cache them
     *
     * @return {Object} Header A reference to the current instance of the class
     * @chainable
     */

  }, {
    key: "cacheDomReferences",
    value: function cacheDomReferences() {
      this.clickable = this.element.classList.contains(_Constants__WEBPACK_IMPORTED_MODULE_0__["CLASS_NAMES"].CLICK) ? this.element.querySelector(_Constants__WEBPACK_IMPORTED_MODULE_0__["SELECTORS"].DROPDOWN_TOGGLE) : null;
      this.close = this.element.querySelector(_Constants__WEBPACK_IMPORTED_MODULE_0__["SELECTORS"].CLOSE);
      this.dropdowns = this.element.parentElement.querySelectorAll(_Constants__WEBPACK_IMPORTED_MODULE_0__["SELECTORS"].DROPDOWN);
      this.hoverable = this.element.classList.contains(_Constants__WEBPACK_IMPORTED_MODULE_0__["CLASS_NAMES"].HOVER) ? this.element : null;
      this.parent = this.element.parentElement; // check whether the hover event is possible using the hover media query

      this.hasHoverState = Object(_Utils__WEBPACK_IMPORTED_MODULE_1__["hashover"])();
      return this;
    }
    /**
     * Bind event handlers with the proper context of `this`.
     *
     * @return {Object} Dropdown A reference to the current instance of the class
     * @chainable
     */

  }, {
    key: "setupHandlers",
    value: function setupHandlers() {
      this.openDropdownHandler = this.openDropdown.bind(this);
      this.closeDropdownHandler = this.closeDropdown.bind(this);
      this.closeDropdownFromOutsideHandler = this.closeDropdownFromOutside.bind(this);
      this.toggleDropdownHandler = this.toggleDropdown.bind(this);
      return this;
    }
    /**
     * Create event handlers to enable interaction with view
     *
     * @return {Object} Dropdown A reference to the current instance of the class
     * @chainable
     */

  }, {
    key: "enable",
    value: function enable() {
      if (this.clickable !== null) {
        this.clickable.addEventListener(_Constants__WEBPACK_IMPORTED_MODULE_0__["EVENTS"].CLICK, this.toggleDropdownHandler);
      }

      if (this.hoverable !== null) {
        if (this.hasHoverState) {
          this.hoverable.addEventListener(_Constants__WEBPACK_IMPORTED_MODULE_0__["EVENTS"].MOUSEOVER, this.openDropdownHandler);
          this.hoverable.addEventListener(_Constants__WEBPACK_IMPORTED_MODULE_0__["EVENTS"].MOUSEOUT, this.closeDropdownHandler);
        } else {
          this.hoverable.addEventListener(_Constants__WEBPACK_IMPORTED_MODULE_0__["EVENTS"].CLICK, this.toggleDropdownHandler);
        }
      }

      if (this.close !== null) {
        this.close.addEventListener(_Constants__WEBPACK_IMPORTED_MODULE_0__["EVENTS"].CLICK, this.closeDropdownHandler);
      }

      return this;
    }
    /**
     * closes from click not in dropdown
     * @param {Event} event - the event object
     * @return {Object} Dropdown A reference to the current instance of the class
     * @chainable
     */

  }, {
    key: "closeDropdownFromOutside",
    value: function closeDropdownFromOutside(event) {
      if (Object(_Utils__WEBPACK_IMPORTED_MODULE_1__["closest"])(event.target, _Constants__WEBPACK_IMPORTED_MODULE_0__["SELECTORS"].DROPDOWN) !== this.element) {
        this.closeDropdown();
      }

      return this;
    }
    /**
     * closes dropdown
     *
     * @return {Object} Dropdown A reference to the current instance of the class
     * @chainable
     */

  }, {
    key: "closeDropdown",
    value: function closeDropdown() {
      for (var i = 0; i < this.dropdowns.length; i++) {
        var buttonTarget = this.dropdowns[i].querySelector(_Constants__WEBPACK_IMPORTED_MODULE_0__["SELECTORS"].DROPDOWN_TOGGLE);
        buttonTarget.classList.remove(_Constants__WEBPACK_IMPORTED_MODULE_0__["CLASS_NAMES"].OPEN);
        buttonTarget.parentNode.classList.remove(_Constants__WEBPACK_IMPORTED_MODULE_0__["CLASS_NAMES"].OPEN);
        var panelTarget = buttonTarget.parentElement.querySelector(_Constants__WEBPACK_IMPORTED_MODULE_0__["SELECTORS"].DROPDOWN_CONTENT);

        if (panelTarget.querySelectorAll(_Constants__WEBPACK_IMPORTED_MODULE_0__["SELECTORS"].NESTED).length > 0) {
          var panelTargets = buttonTarget.parentElement.querySelectorAll(_Constants__WEBPACK_IMPORTED_MODULE_0__["SELECTORS"].DROPDOWN_CONTENT + _Constants__WEBPACK_IMPORTED_MODULE_0__["SELECTORS"].NESTED);

          for (var _i = 0; _i < panelTargets.length; _i++) {
            panelTargets[_i].classList.remove(_Constants__WEBPACK_IMPORTED_MODULE_0__["CLASS_NAMES"].OPENED);

            panelTargets[_i].setAttribute(_Constants__WEBPACK_IMPORTED_MODULE_0__["ARIA"].HIDDEN, 'true');
          }
        }

        this.element.classList.remove(_Constants__WEBPACK_IMPORTED_MODULE_0__["CLASS_NAMES"].OPEN);
        panelTarget.classList.remove(_Constants__WEBPACK_IMPORTED_MODULE_0__["CLASS_NAMES"].OPENED);
        panelTarget.classList.remove(_Constants__WEBPACK_IMPORTED_MODULE_0__["CLASS_NAMES"].FADE);
        panelTarget.setAttribute(_Constants__WEBPACK_IMPORTED_MODULE_0__["ARIA"].HIDDEN, 'true');
        buttonTarget.setAttribute(_Constants__WEBPACK_IMPORTED_MODULE_0__["ARIA"].EXPANDED, 'false');
      }

      document.body.removeEventListener(_Constants__WEBPACK_IMPORTED_MODULE_0__["EVENTS"].CLICK, this.closeDropdownFromOutsideHandler, true);
      return this;
    }
    /**
     * opens dropdown
     *
     * @param {Event} event - the event object
     * @return {Object} Dropdown A reference to the current instance of the class
     * @chainable
     */

  }, {
    key: "openDropdown",
    value: function openDropdown(event) {
      var buttonTarget = this.element.querySelector(_Constants__WEBPACK_IMPORTED_MODULE_0__["SELECTORS"].DROPDOWN_TOGGLE);
      var target = event.type === _Constants__WEBPACK_IMPORTED_MODULE_0__["EVENTS"].CLICK ? buttonTarget : this.element;

      if (target !== null && buttonTarget !== null && this.element.contains(buttonTarget)) {
        if (this.hasHoverState && event.type !== _Constants__WEBPACK_IMPORTED_MODULE_0__["EVENTS"].CLICK) {
          this.closeDropdown();
        }

        target.classList.add(_Constants__WEBPACK_IMPORTED_MODULE_0__["CLASS_NAMES"].OPEN);
        var panelTarget = buttonTarget.parentElement.querySelector(_Constants__WEBPACK_IMPORTED_MODULE_0__["SELECTORS"].DROPDOWN_CONTENT);

        if (panelTarget.querySelectorAll(_Constants__WEBPACK_IMPORTED_MODULE_0__["SELECTORS"].NESTED).length > 0) {
          var panelTargets = buttonTarget.parentElement.querySelectorAll(_Constants__WEBPACK_IMPORTED_MODULE_0__["SELECTORS"].DROPDOWN_CONTENT + _Constants__WEBPACK_IMPORTED_MODULE_0__["SELECTORS"].NESTED);

          for (var i = 0; i < panelTargets.length; i++) {
            panelTargets[i].classList.add(_Constants__WEBPACK_IMPORTED_MODULE_0__["CLASS_NAMES"].OPENED);
            panelTargets[i].setAttribute(_Constants__WEBPACK_IMPORTED_MODULE_0__["ARIA"].HIDDEN, 'false');
          }
        }

        this.element.classList.add(_Constants__WEBPACK_IMPORTED_MODULE_0__["CLASS_NAMES"].OPEN);
        panelTarget.classList.add(_Constants__WEBPACK_IMPORTED_MODULE_0__["CLASS_NAMES"].OPENED);
        panelTarget.setAttribute(_Constants__WEBPACK_IMPORTED_MODULE_0__["ARIA"].HIDDEN, 'false');

        if (panelTarget.classList.contains(_Constants__WEBPACK_IMPORTED_MODULE_0__["CLASS_NAMES"].SUB_MENU)) {
          setTimeout(function () {
            panelTarget.classList.add(_Constants__WEBPACK_IMPORTED_MODULE_0__["CLASS_NAMES"].FADE);
          }, 5);
        }

        buttonTarget.setAttribute(_Constants__WEBPACK_IMPORTED_MODULE_0__["ARIA"].EXPANDED, 'true');

        if (this.close === null && this.hasHoverState) {
          document.body.addEventListener(_Constants__WEBPACK_IMPORTED_MODULE_0__["EVENTS"].CLICK, this.closeDropdownFromOutsideHandler, true);
        }

        return this;
      }
    }
    /**
     * toggles dropdown
     *
     * @param {Event} event - the event object
     * @return {Object} Dropdown A reference to the current instance of the class
     * @chainable
     */

  }, {
    key: "toggleDropdown",
    value: function toggleDropdown(event) {
      var selected = this.element.querySelector(_Constants__WEBPACK_IMPORTED_MODULE_0__["SELECTORS"].DROPDOWN_TOGGLE);

      if (!this.hasHoverState && selected === event.target) {
        event.preventDefault();
      }

      if (!selected.classList.contains(_Constants__WEBPACK_IMPORTED_MODULE_0__["CLASS_NAMES"].OPEN)) {
        this.openDropdown(event);
        this.sendEvent(_Constants__WEBPACK_IMPORTED_MODULE_0__["EVENTS"].DROPDOWN_CHANGED, _Constants__WEBPACK_IMPORTED_MODULE_0__["CLASS_NAMES"].OPENED, this.parent);
      } else {
        this.closeDropdown();
        this.sendEvent(_Constants__WEBPACK_IMPORTED_MODULE_0__["EVENTS"].DROPDOWN_CHANGED, _Constants__WEBPACK_IMPORTED_MODULE_0__["CLASS_NAMES"].CLOSED, this.parent);
      }

      return this;
    }
  }]);

  return Dropdown;
}(_Utils__WEBPACK_IMPORTED_MODULE_1__["MessageBus"]);



/***/ }),

/***/ "./patternlab/source/js/components/views/InViewport.js":
/*!*************************************************************!*\
  !*** ./patternlab/source/js/components/views/InViewport.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InViewport; });
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utils */ "./patternlab/source/js/Utils/index.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Constants */ "./patternlab/source/js/Constants/index.js");


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



/**
 * In Viewport
 */

var InViewport = /*#__PURE__*/function () {
  /**
   * Constructor for inviewport which simply assigns the ScrollService
   * to a property on the contructor for reference.
   *
   * @param {Object} Services various services, passed in as param
   */
  function InViewport(Services) {
    _classCallCheck(this, InViewport);

    /**
     * Reference to the ScrollService singleton
     * @property {Object}
     */
    this.ScrollService = Services.ScrollService; // Initialize the view

    this.init();
  }
  /**
   * Initializes the view by calling the functions to
   * create DOM references, setup event handlers and
   * then create the event listeners
   *
   * @return {Object} A reference to the current instance of this class
   * @chainable
   */


  _createClass(InViewport, [{
    key: "init",
    value: function init() {
      this.cacheDomReferences().setupHandlers().enable();
      return this;
    }
    /**
     * Find all necessary DOM elements used in the view and cache them
     *
     * @return {Object} A reference to the current instance of this class
     * @chainable
     */

  }, {
    key: "cacheDomReferences",
    value: function cacheDomReferences() {
      /**
       * All DOM elements with the `data-visible` attribute
       * @property {NodeList}
       */
      this.modules = document.querySelectorAll(_Constants__WEBPACK_IMPORTED_MODULE_1__["SELECTORS"].DATA_VISIBLE);
      return this;
    }
    /**
     * Bind event handlers with the proper context of `this`.
     *
     * @return {Object} A reference to the current instance of this class
     * @chainable
     */

  }, {
    key: "setupHandlers",
    value: function setupHandlers() {
      /**
       * A reference to the `onScroll` function with the proper
       * context bound to the InViewport class.
       *
       * @property {Function}
       */
      this.onScrollHandler = this.onScroll.bind(this);
      /**
       * A reference to the `updateModules` function with the proper
       * context bound to the InViewport class.
       *
       * @property {Function}
       */

      this.onModuleUpdateHandler = this.updateModules.bind(this);
      return this;
    }
    /**
     * Create event handlers to enable interaction with view
     *
     * @return {Object} A reference to the current instance of this class
     * @chainable
     */

  }, {
    key: "enable",
    value: function enable() {
      // Call scroll handler on load to get initial viewable elements
      window.setTimeout(this.onScrollHandler, 300); // Add to ScrollSerive callbacks

      this.ScrollService.addCallback(this.onScrollHandler);
      document.body.addEventListener(_Constants__WEBPACK_IMPORTED_MODULE_1__["EVENTS"].UPDATE_IN_VIEWPORT_MODULES, this.onModuleUpdateHandler);
      return this;
    }
    /**
     * A function which loops over the current modules and determines
     * which are currently in the viewport. Depending on whether or
     * not they are visible a data attribute boolean is toggled
     *
     * @return {Object} A reference to the current instance of this class
     * @chainable
     */

  }, {
    key: "onScroll",
    value: function onScroll() {
      Array.prototype.forEach.call(this.modules, function (module) {
        if (Object(_Utils__WEBPACK_IMPORTED_MODULE_0__["isscrolledintoview"])(module)) {
          if (module.getAttribute(_Constants__WEBPACK_IMPORTED_MODULE_1__["MISC"].DATA_VISIBLE) === 'false') {
            module.setAttribute(_Constants__WEBPACK_IMPORTED_MODULE_1__["MISC"].DATA_VISIBLE, true);
          }

          if (!module.hasAttribute(_Constants__WEBPACK_IMPORTED_MODULE_1__["SELECTORS"].DATA_HAS_ANIMATED)) {
            module.setAttribute(_Constants__WEBPACK_IMPORTED_MODULE_1__["SELECTORS"].DATA_HAS_ANIMATED, true);
          }
        } else {
          if (module.getAttribute(_Constants__WEBPACK_IMPORTED_MODULE_1__["MISC"].DATA_VISIBLE) === 'true') {
            module.setAttribute(_Constants__WEBPACK_IMPORTED_MODULE_1__["MISC"].DATA_VISIBLE, false);
          }
        }

        var rect = module.getBoundingClientRect();
        var currentDataPosition = module.getAttribute(_Constants__WEBPACK_IMPORTED_MODULE_1__["SELECTORS"].DATA_POSITION);
        var calculatedDataPosition = rect.bottom < 0 ? _Constants__WEBPACK_IMPORTED_MODULE_1__["CLASS_NAMES"].ABOVE_VIEWPORT : rect.top >= window.innerHeight ? _Constants__WEBPACK_IMPORTED_MODULE_1__["CLASS_NAMES"].BELOW_VIEWPORT : _Constants__WEBPACK_IMPORTED_MODULE_1__["CLASS_NAMES"].IN_VIEWPORT;
        var calculatedBottomPosition = rect.bottom > window.innerHeight ? _Constants__WEBPACK_IMPORTED_MODULE_1__["CLASS_NAMES"].BELOW_BOTTOM : _Constants__WEBPACK_IMPORTED_MODULE_1__["CLASS_NAMES"].ABOVE_BOTTOM;
        var halfwayPosition = rect.bottom <= window.innerHeight / 1.25 ? _Constants__WEBPACK_IMPORTED_MODULE_1__["CLASS_NAMES"].ABOVE_HALFWAY : _Constants__WEBPACK_IMPORTED_MODULE_1__["CLASS_NAMES"].BELOW_HALFWAY;

        if (currentDataPosition !== calculatedDataPosition) {
          module.setAttribute(_Constants__WEBPACK_IMPORTED_MODULE_1__["SELECTORS"].DATA_POSITION, calculatedDataPosition);
        }

        module.setAttribute(_Constants__WEBPACK_IMPORTED_MODULE_1__["SELECTORS"].DATA_BOTTOM, calculatedBottomPosition);
        module.setAttribute(_Constants__WEBPACK_IMPORTED_MODULE_1__["SELECTORS"].DATA_HALFWAY, halfwayPosition);
      });
      return this;
    }
    /**
     * A function which updates the list of data-visible modules by calling `cacheDomReferences` and calls `onScroll`
     *
     * @return {Object} A reference to the current instance of this class
     * @chainable
     */

  }, {
    key: "updateModules",
    value: function updateModules() {
      // console.log('scroll');
      this.cacheDomReferences().onScroll();
      return this;
    }
  }]);

  return InViewport;
}();



/***/ }),

/***/ "./patternlab/source/js/components/views/LoadMore.js":
/*!***********************************************************!*\
  !*** ./patternlab/source/js/components/views/LoadMore.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoadMore; });
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Constants */ "./patternlab/source/js/Constants/index.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Utils */ "./patternlab/source/js/Utils/index.js");
/* harmony import */ var _controllers_LoadPostsController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/LoadPostsController */ "./patternlab/source/js/components/controllers/LoadPostsController.js");


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




/**
 * The LoadMore module which handles the search filters
 *
 * This includes code dependant on the Relevanssi and REST API for Relevanssi WordPress plugins.
 *
 * @class LoadMore
 */

var LoadMore = /*#__PURE__*/function (_MessageBus) {
  _inherits(LoadMore, _MessageBus);

  var _super = _createSuper(LoadMore);

  /**
   * LoadMore constructor which assigns the element passed into the constructor
   * to the `this.element` property for later reference
   *
   * @param {HTMLElement} element - REQUIRED - the module's container
   */
  function LoadMore(element) {
    var _this;

    _classCallCheck(this, LoadMore);

    _this = _super.call(this);
    /**
     * Reference to the DOM element that is the root of the component
     * @property {Object}
     */

    _this.element = element; // Initialize the view

    _this.init();

    return _this;
  }
  /**
   * Initializes the view by calling the functions to
   * create DOM references, setup event handlers and
   * then create the event listeners
   *
   * @return {Object} Header A reference to the current instance of the class
   * @chainable
   */


  _createClass(LoadMore, [{
    key: "init",
    value: function init() {
      this.cacheDomReferences().setupHandlers().enable();
      return this;
    }
    /**
     * Find all necessary DOM elements used in the view and cache them
     *
     * @return {Object} LoadMore A reference to the instance of the class
     * @chainable
     */

  }, {
    key: "cacheDomReferences",
    value: function cacheDomReferences() {
      this.loadmorebutton = this.element.querySelector(_Constants__WEBPACK_IMPORTED_MODULE_0__["SELECTORS"].BUTTON);
      this.postcount = this.element.querySelector(_Constants__WEBPACK_IMPORTED_MODULE_0__["SELECTORS"].POST_COUNT);
      this.resultscontainer = Object(_Utils__WEBPACK_IMPORTED_MODULE_1__["closest"])(this.element, _Constants__WEBPACK_IMPORTED_MODULE_0__["SELECTORS"].API_RESULTS);
      this.increment = this.resultscontainer.dataset.increment;
      this.template = this.resultscontainer.dataset.template;
      this.page = this.resultscontainer.dataset.page;
      this.posttype = this.resultscontainer.dataset.template.indexOf(_Constants__WEBPACK_IMPORTED_MODULE_0__["MISC"].CASE_STUDY) > -1 ? _Constants__WEBPACK_IMPORTED_MODULE_0__["MISC"].CASE_STUDY : _Constants__WEBPACK_IMPORTED_MODULE_0__["MISC"].POST;
      this.query = '';
      this.path = '';
      return this;
    }
    /**
     * Bind event handlers with the proper context of `this`.
     *
     * @return {Object} Header A reference to the current instance of the class
     * @chainable
     */

  }, {
    key: "setupHandlers",
    value: function setupHandlers() {
      this.LoadMoreHandler = this.loadMorePosts.bind(this);
      this.RequestMadeHandler = this.requestMade.bind(this);
      this.ResultsReturnedHandler = this.resultsReturned.bind(this);
      this.ShowHideHandler = this.showHide.bind(this);
      return this;
    }
    /**
     * Creates event listeners to enable interaction with view
     *
     * @return {Object} LoadMore A reference to the instance of the class
     * @chainable
     */

  }, {
    key: "enable",
    value: function enable() {
      this.loadmorebutton.addEventListener(_Constants__WEBPACK_IMPORTED_MODULE_0__["EVENTS"].CLICK, this.LoadMoreHandler);
      this.element.addEventListener(_Constants__WEBPACK_IMPORTED_MODULE_0__["EVENTS"].UPDATE_POST_COUNT, this.ResultsReturnedHandler);
      this.element.addEventListener(_Constants__WEBPACK_IMPORTED_MODULE_0__["EVENTS"].REQUEST_MADE, this.RequestMadeHandler);
      this.element.addEventListener(_Constants__WEBPACK_IMPORTED_MODULE_0__["EVENTS"].SHOW_HIDE, this.ShowHideHandler);
      return this;
    }
    /**
     * Loads more posts
     *
     * @param {Event} event - the click event object
     * @return {Object} LoadMore A reference to the instance of the class
     * @chainable
     */

  }, {
    key: "loadMorePosts",
    value: function loadMorePosts(event) {
      var thisButton = event.target;
      this.sendEvent(_Constants__WEBPACK_IMPORTED_MODULE_0__["EVENTS"].REQUEST_MADE, thisButton, document.body);
      this.offset = this.resultscontainer.dataset.offset;
      this.term = !!this.resultscontainer.dataset.term ? this.resultscontainer.dataset.term + '&' : '';
      this.page = this.resultscontainer.dataset.page;
      this.resultscontainer.dataset.append = true;
      var exclude = !!this.resultscontainer.dataset.exclude ? '&exclude=' + this.resultscontainer.dataset.exclude.substring(1, this.resultscontainer.dataset.exclude.length - 1) : '';
      var include = !!this.resultscontainer.dataset.include ? '&include=' + this.resultscontainer.dataset.include.substring(1, this.resultscontainer.dataset.include.length - 1) : '';
      var excludecat = !!this.resultscontainer.dataset.excludecat ? '&categories_exclude=' + this.resultscontainer.dataset.excludecat : '';
      var includecat = !!this.resultscontainer.dataset.includecat ? '&categories=' + this.resultscontainer.dataset.includecat : ''; // Relevanssi API plugin uses different query params than WPAPI so...

      this.fromsearch = this.resultscontainer.dataset.search;
      this.path = this.resultscontainer.dataset.endpoint === _Constants__WEBPACK_IMPORTED_MODULE_0__["MISC"].POSTS ? this.fromsearch !== _Constants__WEBPACK_IMPORTED_MODULE_0__["MISC"].FALSE ? _Constants__WEBPACK_IMPORTED_MODULE_0__["MISC"].POST : this.resultscontainer.dataset.endpoint : this.resultscontainer.dataset.endpoint;
      this.query = this.fromsearch !== _Constants__WEBPACK_IMPORTED_MODULE_0__["MISC"].FALSE ? 'keyword=' + this.fromsearch + '&type=' + this.path + '&posts_per_page=' + this.increment + '&paged=' + this.page : this.term + 'offset=' + this.offset + '&per_page=' + this.increment + include + exclude + excludecat + includecat;
      this.controller = new _controllers_LoadPostsController__WEBPACK_IMPORTED_MODULE_2__["default"]();
      this.controller.loadItems(this.path, this.query, this.template, this.fromsearch !== _Constants__WEBPACK_IMPORTED_MODULE_0__["MISC"].FALSE, this.resultscontainer, this.posttype);
      return this;
    }
    /**
     * Does stuff on Request Made
     *
     *
     * @param {Event} event - the event object
     * @return {Object} LoadMore A reference to the instance of the class
     * @chainable
     */

  }, {
    key: "requestMade",
    value: function requestMade(event) {
      this.element.classList.add(_Constants__WEBPACK_IMPORTED_MODULE_0__["CLASS_NAMES"].LOADING);
      return this;
    }
    /**
     * Does stuff on Results Returned
     * mostly decrements post counts
     *
     * @param {Event} event - the event object
     * @return {Object} LoadMore A reference to the instance of the class
     * @chainable
     */

  }, {
    key: "resultsReturned",
    value: function resultsReturned(event) {
      this.element.classList.remove(_Constants__WEBPACK_IMPORTED_MODULE_0__["CLASS_NAMES"].LOADING);
      var remainingPosts = parseInt(event.detail) - this.resultscontainer.dataset.offset - parseInt(this.increment);
      this.calculatePages(parseInt(event.detail));

      if (remainingPosts > 0) {
        this.postcount.innerHTML = remainingPosts;
        this.resultscontainer.dataset.offset = parseInt(this.resultscontainer.dataset.offset) + parseInt(this.increment);
        this.loadmorebutton.disabled = false;
      } else {
        this.postcount.innerHTML = _Constants__WEBPACK_IMPORTED_MODULE_0__["MISC"].NO;
        this.loadmorebutton.disabled = true;
      }

      return this;
    }
    /**
     * Calculates pages for Relevanssi search
     *
     * @param {Integer} posts - the number of posts in a search query result
     * @return {Object} LoadMore A reference to the instance of the class
     * @chainable
     */

  }, {
    key: "calculatePages",
    value: function calculatePages(posts) {
      var remainingPosts = posts - this.resultscontainer.dataset.offset - parseInt(this.increment);

      if (remainingPosts > 0) {
        this.resultscontainer.dataset.page = parseInt(this.resultscontainer.dataset.page) + 1;
      }

      return this;
    }
    /**
     * Add class based on boolean to show or hide
     *
     *
     * @param {Event} event - the event object
     * @return {Object} LoadMore A reference to the instance of the class
     * @chainable
     */

  }, {
    key: "showHide",
    value: function showHide(event) {
      if (!event.detail) {
        this.element.classList.add(_Constants__WEBPACK_IMPORTED_MODULE_0__["CLASS_NAMES"].HIDDEN);
      } else {
        this.element.classList.remove(_Constants__WEBPACK_IMPORTED_MODULE_0__["CLASS_NAMES"].HIDDEN);
      }

      return this;
    }
  }]);

  return LoadMore;
}(_Utils__WEBPACK_IMPORTED_MODULE_1__["MessageBus"]);



/***/ }),

/***/ "./patternlab/source/js/components/views/SocialShare.js":
/*!**************************************************************!*\
  !*** ./patternlab/source/js/components/views/SocialShare.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SocialShare; });
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utils */ "./patternlab/source/js/Utils/index.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Constants */ "./patternlab/source/js/Constants/index.js");


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



/**
 * OGINFO
 *
 * An object containing OG tag data pulled from og tags
 *
 * @type {Object}
 * @ignore
 */

var OGINFO = {
  DESC: '',
  URL: '',
  TITLE: ''
};
/**
 * The SocialShare module which handles the social share buttons
 *
 * @class SocialShare
 */

var SocialShare = /*#__PURE__*/function () {
  /**
   * SocialShare constructor which assigns the element passed into the constructor
   * to the `this.element` property for later reference
   *
   * @param {HTMLElement} element - REQUIRED - the module's container
   */
  function SocialShare(element) {
    _classCallCheck(this, SocialShare);

    /**
     * Reference to the DOM element that is the root of the component
     * @property {Object}
     */
    this.element = element; // Initialize the view

    this.init();
  }
  /**
   * Initializes the view by calling the functions to
   * create DOM references, setup event handlers and
   * then create the event listeners
   *
   * @return {Object} SocialShare A reference to the instance of the class
   * @chainable
   */


  _createClass(SocialShare, [{
    key: "init",
    value: function init() {
      this.cacheDomReferences().getOGData().enable();
      return this;
    }
    /**
     * Find all necessary DOM elements used in the view and cache them
     *
     * @return {Object} SocialShare A reference to the instance of the class
     * @chainable
     */

  }, {
    key: "cacheDomReferences",
    value: function cacheDomReferences() {
      /**
       * The `<button>` that a user interacts with to share to a social site
       * @type {Object}
       */
      this.share = {
        twitter: this.element.querySelector(_Constants__WEBPACK_IMPORTED_MODULE_1__["SELECTORS"].TWITTER),
        facebook: this.element.querySelector(_Constants__WEBPACK_IMPORTED_MODULE_1__["SELECTORS"].FACEBOOK),
        linkedin: this.element.querySelector(_Constants__WEBPACK_IMPORTED_MODULE_1__["SELECTORS"].LINKEDIN) // email: this.element.querySelector(SELECTORS.EMAIL)

      };
      return this;
    }
    /**
     * Get OG data from page's OG tags
     * Set defaults if no tags available
     *
     * @return {Object} SocialShare A reference to the instance of the class
     * @chainable
     */

  }, {
    key: "getOGData",
    value: function getOGData() {
      Object.keys(OGINFO).forEach(function (key) {
        var node = document.querySelector(_Constants__WEBPACK_IMPORTED_MODULE_1__["SELECTORS"]['OG' + key]);

        if (node) {
          OGINFO[key] = node.getAttribute('content');
        }
      });
      return this;
    }
    /**
     * Creates event listeners to enable interaction with view
     *
     * @return {Object} SocialShare A reference to the instance of the class
     * @chainable
     */

  }, {
    key: "enable",
    value: function enable() {
      var _this = this;

      Object.keys(this.share).forEach(function (shareType) {
        _this.share[shareType].addEventListener(_Constants__WEBPACK_IMPORTED_MODULE_1__["EVENTS"].CLICK, _this[shareType + 'Share']);
      });
      return this;
    }
    /**
     * Facebook share on click
     * @param {Event} event - the click event
     */

  }, {
    key: "facebookShare",
    value: function facebookShare(event) {
      event.preventDefault();
      var shareURL = _Constants__WEBPACK_IMPORTED_MODULE_1__["MISC"].fURL1 + OGINFO.URL;
      Object(_Utils__WEBPACK_IMPORTED_MODULE_0__["openpopup"])(shareURL, 'FacebookShare', 560, 600);
    }
    /**
     * Twitter share on click
     * @param {Event} event - the click event
     */

  }, {
    key: "twitterShare",
    value: function twitterShare(event) {
      event.preventDefault();
      var shareURL = _Constants__WEBPACK_IMPORTED_MODULE_1__["MISC"].tURL1 + OGINFO.URL + _Constants__WEBPACK_IMPORTED_MODULE_1__["MISC"].tURLText + encodeURIComponent(OGINFO.DESC) + _Constants__WEBPACK_IMPORTED_MODULE_1__["MISC"].tURLVia;
      Object(_Utils__WEBPACK_IMPORTED_MODULE_0__["openpopup"])(shareURL, 'TwitterShare', 560, 300);
    }
    /**
     * Linkedin share on click
     * @param {Event} event - the click event
     */

  }, {
    key: "linkedinShare",
    value: function linkedinShare(event) {
      event.preventDefault();
      var shareURL = _Constants__WEBPACK_IMPORTED_MODULE_1__["MISC"].lURL1 + OGINFO.URL + _Constants__WEBPACK_IMPORTED_MODULE_1__["MISC"].lURL2 + encodeURIComponent(OGINFO.TITLE) + _Constants__WEBPACK_IMPORTED_MODULE_1__["MISC"].lURL3 + encodeURIComponent(OGINFO.DESC) + _Constants__WEBPACK_IMPORTED_MODULE_1__["MISC"].lURL4;
      Object(_Utils__WEBPACK_IMPORTED_MODULE_0__["openpopup"])(shareURL, 'LinkedInShare', 560, 600);
    }
    /**
     * Send email thorough mailto on click
     *
     */

  }, {
    key: "emailShare",
    value: function emailShare() {
      var mSubject = this.querySelector(_Constants__WEBPACK_IMPORTED_MODULE_1__["SELECTORS"].EMAILSUB).innerHTML;
      var mBody = this.querySelector(_Constants__WEBPACK_IMPORTED_MODULE_1__["SELECTORS"].EMAILBODY).innerHTML;
      window.location.href = _Constants__WEBPACK_IMPORTED_MODULE_1__["MISC"].mURL1 + _Constants__WEBPACK_IMPORTED_MODULE_1__["MISC"].mURL2 + mSubject + _Constants__WEBPACK_IMPORTED_MODULE_1__["MISC"].mURL3 + mBody;
    }
  }]);

  return SocialShare;
}();



/***/ }),

/***/ "./patternlab/source/js/index.js":
/*!***************************************!*\
  !*** ./patternlab/source/js/index.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ "./patternlab/source/js/App.js");



/**
 * The only purpose of this file is to bootstrap the App component
 * to the `window` whenever the page has finished loading. All
 * work to be done with loading components and any logic to perform
 * requests or update the DOM should be done their or in a specific
 * component.
 */

(function () {
  // Attach App to the window
  window.App = new _App__WEBPACK_IMPORTED_MODULE_0__["default"]();
})();

/***/ }),

/***/ 0:
/*!*********************************************!*\
  !*** multi ./patternlab/source/js/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./patternlab/source/js/index.js */"./patternlab/source/js/index.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnRlcmtpdC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9wYXR0ZXJubGFiL3NvdXJjZS9qcy9BcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcGF0dGVybmxhYi9zb3VyY2UvanMvQ29tcG9uZW50TWFwLmpzIiwid2VicGFjazovLy8uL3BhdHRlcm5sYWIvc291cmNlL2pzL0NvbnN0YW50cy9hcmlhLmpzIiwid2VicGFjazovLy8uL3BhdHRlcm5sYWIvc291cmNlL2pzL0NvbnN0YW50cy9jbGFzcy1uYW1lcy5qcyIsIndlYnBhY2s6Ly8vLi9wYXR0ZXJubGFiL3NvdXJjZS9qcy9Db25zdGFudHMvZW5kcG9pbnRzLmpzIiwid2VicGFjazovLy8uL3BhdHRlcm5sYWIvc291cmNlL2pzL0NvbnN0YW50cy9lcnJvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vcGF0dGVybmxhYi9zb3VyY2UvanMvQ29uc3RhbnRzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9wYXR0ZXJubGFiL3NvdXJjZS9qcy9Db25zdGFudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGF0dGVybmxhYi9zb3VyY2UvanMvQ29uc3RhbnRzL2tleS1jb2Rlcy5qcyIsIndlYnBhY2s6Ly8vLi9wYXR0ZXJubGFiL3NvdXJjZS9qcy9Db25zdGFudHMvbWlzYy5qcyIsIndlYnBhY2s6Ly8vLi9wYXR0ZXJubGFiL3NvdXJjZS9qcy9Db25zdGFudHMvc2VsZWN0b3JzLmpzIiwid2VicGFjazovLy8uL3BhdHRlcm5sYWIvc291cmNlL2pzL0NvbnN0YW50cy90ZW1wbGF0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vcGF0dGVybmxhYi9zb3VyY2UvanMvVXRpbHMvY2xvc2VzdC5qcyIsIndlYnBhY2s6Ly8vLi9wYXR0ZXJubGFiL3NvdXJjZS9qcy9VdGlscy9jb252ZXJ0ZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9wYXR0ZXJubGFiL3NvdXJjZS9qcy9VdGlscy9jb29raWUuanMiLCJ3ZWJwYWNrOi8vLy4vcGF0dGVybmxhYi9zb3VyY2UvanMvVXRpbHMvZGVib3VuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vcGF0dGVybmxhYi9zb3VyY2UvanMvVXRpbHMvZGVjb2RlaHRtbC5qcyIsIndlYnBhY2s6Ly8vLi9wYXR0ZXJubGFiL3NvdXJjZS9qcy9VdGlscy9oYXNob3Zlci5qcyIsIndlYnBhY2s6Ly8vLi9wYXR0ZXJubGFiL3NvdXJjZS9qcy9VdGlscy9oZXh0b3JnYi5qcyIsIndlYnBhY2s6Ly8vLi9wYXR0ZXJubGFiL3NvdXJjZS9qcy9VdGlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYXR0ZXJubGFiL3NvdXJjZS9qcy9VdGlscy9pbnRlcnBvbGF0ZW51bWJlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vcGF0dGVybmxhYi9zb3VyY2UvanMvVXRpbHMvaXNpZS5qcyIsIndlYnBhY2s6Ly8vLi9wYXR0ZXJubGFiL3NvdXJjZS9qcy9VdGlscy9pc29iamVjdGVtcHR5LmpzIiwid2VicGFjazovLy8uL3BhdHRlcm5sYWIvc291cmNlL2pzL1V0aWxzL2lzc2Nyb2xsZWRpbnRvdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9wYXR0ZXJubGFiL3NvdXJjZS9qcy9VdGlscy9sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGF0dGVybmxhYi9zb3VyY2UvanMvVXRpbHMvbWVzc2FnZWJ1cy5qcyIsIndlYnBhY2s6Ly8vLi9wYXR0ZXJubGFiL3NvdXJjZS9qcy9VdGlscy9vcGVucG9wdXAuanMiLCJ3ZWJwYWNrOi8vLy4vcGF0dGVybmxhYi9zb3VyY2UvanMvY29tcG9uZW50cy9jb250cm9sbGVycy9Db250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3BhdHRlcm5sYWIvc291cmNlL2pzL2NvbXBvbmVudHMvY29udHJvbGxlcnMvTG9hZFBvc3RzQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9wYXR0ZXJubGFiL3NvdXJjZS9qcy9jb21wb25lbnRzL21vZGVscy9Mb2FkUG9zdHNNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9wYXR0ZXJubGFiL3NvdXJjZS9qcy9jb21wb25lbnRzL3NlcnZpY2VzL1Jlc2l6ZVNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vcGF0dGVybmxhYi9zb3VyY2UvanMvY29tcG9uZW50cy9zZXJ2aWNlcy9TY3JvbGxTZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3BhdHRlcm5sYWIvc291cmNlL2pzL2NvbXBvbmVudHMvc2VydmljZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGF0dGVybmxhYi9zb3VyY2UvanMvY29tcG9uZW50cy92aWV3cy9BUElSZXN1bHRzLmpzIiwid2VicGFjazovLy8uL3BhdHRlcm5sYWIvc291cmNlL2pzL2NvbXBvbmVudHMvdmlld3MvRHJvcGRvd24uanMiLCJ3ZWJwYWNrOi8vLy4vcGF0dGVybmxhYi9zb3VyY2UvanMvY29tcG9uZW50cy92aWV3cy9JblZpZXdwb3J0LmpzIiwid2VicGFjazovLy8uL3BhdHRlcm5sYWIvc291cmNlL2pzL2NvbXBvbmVudHMvdmlld3MvTG9hZE1vcmUuanMiLCJ3ZWJwYWNrOi8vLy4vcGF0dGVybmxhYi9zb3VyY2UvanMvY29tcG9uZW50cy92aWV3cy9Tb2NpYWxTaGFyZS5qcyIsIndlYnBhY2s6Ly8vLi9wYXR0ZXJubGFiL3NvdXJjZS9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIndXNlIHN0cmljdCc7IC8vIG5vdywgb24gd2l0aCB0aGUgc2hvdyFcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5pbXBvcnQgSW5WaWV3cG9ydCBmcm9tICcuL2NvbXBvbmVudHMvdmlld3MvSW5WaWV3cG9ydCc7XG5pbXBvcnQgQ29tcG9uZW50TWFwIGZyb20gJy4vQ29tcG9uZW50TWFwJztcbmltcG9ydCBTZXJ2aWNlcyBmcm9tICcuL2NvbXBvbmVudHMvc2VydmljZXMnO1xuLyoqXG4gKiBUaGUgdG9wLWxldmVsIGNvbnRyb2xsZXIgZm9yIHRoZSB3aG9sZSBwYWdlLiBUaGlzIGNvbXBvbmVudCBpcyByZXNwb25zaWJsZVxuICogZm9yIGxvYWRpbmcgb3RoZXIgY29udHJvbGxlcnMgYW5kIHZpZXdzLlxuICovXG5cbnZhciBBcHAgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAvKipcbiAgICogSW5pdGlhbGl6ZSBhbGwgZ2xvYmFsIEpTIGNvbXBvbmVudHMgYW5kIGNhbGwgYGxvYWRjb21wb25lbnRzYFxuICAgKiB0byBpbml0aWFsaXplIGFsbCB1bmlxdWUgSlMgY29tcG9uZW50c1xuICAgKi9cbiAgZnVuY3Rpb24gQXBwKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBcHApO1xuXG4gICAgLyoqXG4gICAgICogU2VydmljZXMgaXMgdGhlIG9iamVjdCB3aGljaCBob2xkcyByZWZlcmVuY2VzIHRvIGFsbCBzZXJ2aWNlc1xuICAgICAqIGNyZWF0ZWQgZm9yIHBhZ2VzLiBTZXJ2aWNlcyBzaG91bGQgYmUgaW5zdGFudGlhdGVkIHRoZXJlIGFuZFxuICAgICAqIHRoZW4gd2lsbCBiZSBpbmplY3RlZCBpbnRvIGVhY2ggY29tcG9uZW50IGZvciBvcHRpb25hbCB1c2UgdmlhIHRoZVxuICAgICAqIGBsb2FkY29tcG9uZW50c2AgZnVuY3Rpb25cbiAgICAgKlxuICAgICAqIEB0eXBlIHtTZXJ2aWNlc31cbiAgICAgKiBAcHJvcGVydHkge1NlcnZpY2VzfVxuICAgICAqL1xuICAgIHRoaXMuU2VydmljZXMgPSBuZXcgU2VydmljZXMoKTtcbiAgICAvKipcbiAgICAgKiBUaGUgSW5WaWV3cG9ydCB2aWV3IGNvbXBvbmVudCB3aGljaCBuZWVkcyB0byBydW4gZ2xvYmFsbHkgZm9yIGFsbCBjb21wb25lbnRzLlxuICAgICAqIEB0eXBlIHtJblZpZXdwb3J0fVxuICAgICAqIEBwcm9wZXJ0eSB7SW5WaWV3cG9ydH1cbiAgICAgKi9cblxuICAgIHRoaXMuaW5WaWV3cG9ydCA9IG5ldyBJblZpZXdwb3J0KHRoaXMuU2VydmljZXMpOyAvLyBMb2FkIGVhY2ggY29tcG9uZW50XG5cbiAgICB0aGlzLmxvYWRQYWdlY29tcG9uZW50cygpO1xuICB9XG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIGxvb3BzIG92ZXIgYWxsIGVsZW1lbnRzIGluIHRoZSBET00gd2l0aCB0aGVcbiAgICogYGRhdGEtbG9hZGNvbXBvbmVudGAgYXR0cmlidXRlIGFuZCBsb2FkcyB0aGUgc3BlY2lmaWVkIHZpZXdcbiAgICogb3IgY29udHJvbGxlci5cbiAgICpcbiAgICogVG8gYXR0YWNoIGEgSlMgY29tcG9uZW50IHRvIGFuIEhUTUwgZWxlbWVudCwgaW4geW91ciBtYXJrdXAgeW91J2RcbiAgICogZG8gc29tZXRoaW5nIGxpa2U6IDxzZWN0aW9uIGNsYXNzPVwiZXhhbXBsZS1jb21wb25lbnRcIiBkYXRhLWxvYWRjb21wb25lbnQ9J0V4YW1wbGVjb21wb25lbnQnPlxuICAgKiB3aGVyZSAnRXhhbXBsZWNvbXBvbmVudCcgaXMgeW91ciBKUyBjbGFzcyBuYW1lLiBZb3UnZCBuZWVkIHRvIGFkZCB0aGF0IGNvbXBvbmVudCB0byB0aGUgLi9jb21wb25lbnRNYXAuanNcbiAgICogYW5kIG1ha2Ugc3VyZSB0aGUgY29tcG9uZW50IGV4aXN0cyBhbmQgaXMgYSBwcm9wZXIgRVM2IGNsYXNzLCBhbmQgdGhlbiB5b3UnbGwgZW5kIHVwIHdpdGhcbiAgICogYW4gRVM2IGNsYXNzIHRoYXQgaXMgcGFzc2VkIGEgcmVmZXJlbmNlIHRvIHNlY3Rpb24uZXhhbXBsZS1jb21wb25lbnQgb24gaW5pdC5cbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoQXBwLCBbe1xuICAgIGtleTogXCJsb2FkUGFnZWNvbXBvbmVudHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbG9hZFBhZ2Vjb21wb25lbnRzKCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgdmFyIGF0dHJpYnV0ZSA9ICdkYXRhLWxvYWRjb21wb25lbnQnO1xuICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbJyArIGF0dHJpYnV0ZSArICddJyksIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdsb2FkaW5nIGNvbXBvbmVudCAnLCBlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyaWJ1dGUpKTtcbiAgICAgICAgbmV3IENvbXBvbmVudE1hcFtlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyaWJ1dGUpXShlbGVtZW50LCBfdGhpcy5TZXJ2aWNlcyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQXBwO1xufSgpO1xuXG5leHBvcnQgeyBBcHAgYXMgZGVmYXVsdCB9OyIsIid1c2Ugc3RyaWN0JzsgLy8gSW1wb3J0IGFsbCByZXF1aXJlZCBtb2R1bGVzXG5cbmltcG9ydCBBUElSZXN1bHRzIGZyb20gJy4vY29tcG9uZW50cy92aWV3cy9BUElSZXN1bHRzJztcbmltcG9ydCBEcm9wZG93biBmcm9tICcuL2NvbXBvbmVudHMvdmlld3MvRHJvcGRvd24nO1xuaW1wb3J0IEluVmlld3BvcnQgZnJvbSAnLi9jb21wb25lbnRzL3ZpZXdzL0luVmlld3BvcnQnO1xuaW1wb3J0IExvYWRNb3JlIGZyb20gJy4vY29tcG9uZW50cy92aWV3cy9Mb2FkTW9yZSc7XG5pbXBvcnQgU29jaWFsU2hhcmUgZnJvbSAnLi9jb21wb25lbnRzL3ZpZXdzL1NvY2lhbFNoYXJlJzsgLy8gRXhwb3J0IHJlZmVyZW5jZSB0byBhbGwgbW9kdWxlcyBpbiBhbiBvYmplY3RcblxuZXhwb3J0IGRlZmF1bHQge1xuICBBUElSZXN1bHRzOiBBUElSZXN1bHRzLFxuICBEcm9wZG93bjogRHJvcGRvd24sXG4gIEluVmlld3BvcnQ6IEluVmlld3BvcnQsXG4gIExvYWRNb3JlOiBMb2FkTW9yZSxcbiAgU29jaWFsU2hhcmU6IFNvY2lhbFNoYXJlXG59OyIsIi8vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qXFxcbi8vICAgICRBUklBIFNUUklOR1Ncbi8vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuZXhwb3J0IHZhciBBUklBID0ge1xuICBFWFBBTkRFRDogJ2FyaWEtZXhwYW5kZWQnLFxuICBISURERU46ICdhcmlhLWhpZGRlbicsXG4gIFNFTEVDVEVEOiAnYXJpYS1zZWxlY3RlZCdcbn07IiwiLy8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSpcXFxuLy8gICAgJENMQVNTIE5BTUVTIC0gZm9yIGNsYXNzIG5hbWVzXG4vLyAgICAgIG5vdCBDU1Mgc2VsZWN0b3JzXG4vLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmV4cG9ydCB2YXIgQ0xBU1NfTkFNRVMgPSB7XG4gIEFCT1ZFX0JPVFRPTTogJ2Fib3ZlLWJvdHRvbScsXG4gIEFCT1ZFX0hBTEZXQVk6ICdhYm92ZS1oYWxmd2F5JyxcbiAgQUJPVkVfVklFV1BPUlQ6ICdhYm92ZS12aWV3cG9ydCcsXG4gIEFDVElWRTogJ2FjdGl2ZScsXG4gIEJFTE9XX0JPVFRPTTogJ2JlbG93LWJvdHRvbScsXG4gIEJFTE9XX0hBTEZXQVk6ICdiZWxvdy1oYWxmd2F5JyxcbiAgQkVMT1dfVklFV1BPUlQ6ICdiZWxvdy12aWV3cG9ydCcsXG4gIEJMSU5LOiAnYmxpbmsnLFxuICBFUlJPUjogJ2Vycm9yJyxcbiAgQ0xJQ0s6ICdjbGljaycsXG4gIENMT1NFRDogJ2Nsb3NlZCcsXG4gIEZBREU6ICdmYWRlJyxcbiAgRklMVEVSX1NFTEVDVEVEOiAnZmlsdGVyLXNlbGVjdGVkJyxcbiAgRklSU1RfQkFUQ0g6ICdmaXJzdC1iYXRjaCcsXG4gIEZJWEVEOiAnZml4ZWQnLFxuICBGSUxURVJFRDogJ2ZpbHRlcmVkJyxcbiAgSElESU5HOiAnaGlkaW5nJyxcbiAgSElEREVOOiAnaGlkZGVuJyxcbiAgSE9WRVI6ICdob3ZlcicsXG4gIElOX1ZJRVdQT1JUOiAnaW4tdmlld3BvcnQnLFxuICBMSVNUSU5HX0ZJTFRFUlM6ICdsaXN0aW5nLWZpbHRlcnMnLFxuICBMT0FESU5HOiAnbG9hZGluZycsXG4gIE1JTkk6ICdtaW5pJyxcbiAgT1BFTjogJ29wZW4nLFxuICBPUEVORUQ6ICdvcGVuZWQnLFxuICBTQ1JPTExFRDogJ3Njcm9sbGVkJyxcbiAgU0VBUkNISU5HOiAnc2VhcmNoaW5nJyxcbiAgU0VMRUNURUQ6ICdzZWxlY3RlZCcsXG4gIFNIT1c6ICdzaG93JyxcbiAgU1VCX01FTlU6ICdzdWItbWVudScsXG4gIFNVQ0NFU1M6ICdzdWNjZXNzJyxcbiAgVklTVUFMTFlfSElEREVOOiAndmlzdWFsbHktaGlkZGVuJ1xufTsiLCIvLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKlxcXG4vLyAgICAkTUlTQyBTVFJJTkdTXG4vLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuZXhwb3J0IHZhciBFTkRQT0lOVFMgPSB7XG4gIFNFQVJDSDogJy93cC1qc29uL3JlbGV2YW5zc2kvdjEvc2VhcmNoPycsXG4gIFdQQVBJOiAnL3dwLWpzb24vd3AvdjIvJyxcbiAgV1BBUElUT1RBTDogJ1gtV1AtVG90YWwnXG59OyIsIi8vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qXFxcbi8vICAgICRFUlJPUiBNZXNzYWdlc1xuLy8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5leHBvcnQgdmFyIEVSUk9SUyA9IHtcbiAgRkVBVFVSRURfSU1BR0U6ICdBIGZlYXR1cmVkIGltYWdlIGlzIHJlcXVpcmVkJ1xufTsiLCIvLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKlxcXG4vLyAgICAkRVZFTlRTXG4vLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmV4cG9ydCB2YXIgRVZFTlRTID0ge1xuICBBTklNQVRJT05FTkQ6ICdhbmltYXRpb25lbmQnLFxuICBCRUZPUkVVTkxPQUQ6ICdiZWZvcmV1bmxvYWQnLFxuICBCTFVSOiAnYmx1cicsXG4gIENIQU5HRTogJ2NoYW5nZScsXG4gIENMRUFSX0ZJTFRFUlM6ICdjbGVhcmZpbHRlcnMnLFxuICBDTElDSzogJ2NsaWNrJyxcbiAgQ1VTVE9NX0VWRU5UOiAnY3VzdG9tZXZlbnQnLFxuICBESVNQTEFZX1NVQkhFQURJTkc6ICdkaXNwbGF5c3ViaGVhZGluZycsXG4gIERST1BET1dOX0NIQU5HRUQ6ICdkcm9wZG93bmNoYW5nZWQnLFxuICBGT1JNX0VSUk9SOiAnZm9ybWVycm9yJyxcbiAgRk9STV9TVUNDRVNTOiAnZm9ybXN1Y2Nlc3MnLFxuICBGT0NVUzogJ2ZvY3VzJyxcbiAgSEVBREVSX0hJRElORzogJ2hlYWRlci1oaWRpbmcnLFxuICBJTlBVVDogJ2lucHV0JyxcbiAgS0VZX0RPV046ICdrZXlkb3duJyxcbiAgTU9VU0VNT1ZFOiAnbW91c2Vtb3ZlJyxcbiAgTU9VU0VPVVQ6ICdtb3VzZW91dCcsXG4gIE1PVVNFT1ZFUjogJ21vdXNlb3ZlcicsXG4gIFBBR0VTSE9XOiAncGFnZXNob3cnLFxuICBSRVFVRVNUX01BREU6ICdyZXF1ZXN0bWFkZScsXG4gIFJFU0laRTogJ3Jlc2l6ZScsXG4gIFJFU1VMVFNfUkVUVVJORUQ6ICdyZXN1bHRzcmV0dXJuZCcsXG4gIFNDUk9MTDogJ3Njcm9sbCcsXG4gIFNJTVVMQVRFRF9DTElDSzogJ3NpbXVsYXRlZC1jbGljaycsXG4gIFNIT1dfSElERTogJ3Nob3doaWRlJyxcbiAgU1VCTUlUOiAnc3VibWl0JyxcbiAgVE9VQ0hfRU5EOiAndG91Y2hlbmQnLFxuICBUT1VDSF9TVEFSVDogJ3RvdWNoc3RhcnQnLFxuICBUUkFOU0lUSU9ORU5EOiAndHJhbnNpdGlvbmVuZCcsXG4gIFVQREFURV9QT1NUX0NPVU5UOiAndXBkYXRlcG9zdGNvdW50JyxcbiAgVVBEQVRFX0lOX1ZJRVdQT1JUX01PRFVMRVM6ICd1cGRhdGVpbnZpZXdwb3J0bW9kdWxlcycsXG4gIFVQREFURV9TRUFSQ0hfV0lUSF9ORVdfSVRFTVM6ICd1cGRhdGVzZWFyY2h3aXRobmV3aXRlbXMnLFxuICBVUERBVEVfU0VUVElOR1M6ICd1cGRhdGVzZXR0aW5ncycsXG4gIFdIRUVMOiAnd2hlZWwnXG59OyIsImV4cG9ydCB7IEFSSUEgfSBmcm9tICcuL2FyaWEnO1xuZXhwb3J0IHsgQ0xBU1NfTkFNRVMgfSBmcm9tICcuL2NsYXNzLW5hbWVzJztcbmV4cG9ydCB7IEVORFBPSU5UUyB9IGZyb20gJy4vZW5kcG9pbnRzJztcbmV4cG9ydCB7IEVSUk9SUyB9IGZyb20gJy4vZXJyb3JzJztcbmV4cG9ydCB7IEVWRU5UUyB9IGZyb20gJy4vZXZlbnRzJztcbmV4cG9ydCB7IE1JU0MgfSBmcm9tICcuL21pc2MnO1xuZXhwb3J0IHsgS0VZX0NPREVTIH0gZnJvbSAnLi9rZXktY29kZXMnO1xuZXhwb3J0IHsgU0VMRUNUT1JTIH0gZnJvbSAnLi9zZWxlY3RvcnMnO1xuZXhwb3J0IHsgVEVNUExBVEVTIH0gZnJvbSAnLi90ZW1wbGF0ZXMnOyIsIi8vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qXFxcbi8vICAgICRLRVkgQ09ERVNcbi8vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuZXhwb3J0IHZhciBLRVlfQ09ERVMgPSB7XG4gIEVTQ0FQRTogMjcsXG4gIFNQQUNFQkFSOiAzMlxufTsiLCIvLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKlxcXG4vLyAgICAkTUlTQyBTVFJJTkdTXG4vLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuZXhwb3J0IHZhciBNSVNDID0ge1xuICBBTEw6ICdhbGwnLFxuICBCRUZPUkVFTkQ6ICdiZWZvcmVlbmQnLFxuICBDSEFOR0U6ICdDaGFuZ2UgJyxcbiAgQ0xFQVJfRklMVEVSOiAnQ2xlYXIgRmlsdGVyJyxcbiAgQ0xPU0U6ICdDbG9zZScsXG4gIENMT1NFX0ZJTFRFUlM6ICdDbG9zZSBGaWx0ZXJzJyxcbiAgREFUQV9WSVNJQkxFOiAnZGF0YS12aXNpYmxlJyxcbiAgRVlFX0JMSU5LOiAnRXllQmxpbmsnLFxuICBGQUxTRTogJ2ZhbHNlJyxcbiAgRklMVEVSUzogJ0ZpbHRlcnMnLFxuICBmVVJMMTogJy8vd3d3LmZhY2Vib29rLmNvbS9zaGFyZXIucGhwP3U9JyxcbiAgSEVJR0hUOiAnaGVpZ2h0JyxcbiAgSU5fVklFV1BPUlQ6ICdpbi12aWV3cG9ydCcsXG4gIE1FTlU6ICdNZW51JyxcbiAgTVFfSE9WRVI6ICcoaG92ZXI6IGhvdmVyKScsXG4gIE1RX05PX0FOWTogJyhhbnktaG92ZXI6IG5vbmUpLCAoYW55LXBvaW50ZXI6IGNvYXJzZSknLFxuICBsVVJMMTogJy8vd3d3LmxpbmtlZGluLmNvbS9zaGFyZUFydGljbGU/bWluaT10cnVlJnVybD0nLFxuICBsVVJMMjogJyZ0aXRsZT0nLFxuICBsVVJMMzogJyZzdW1tYXJ5PScsXG4gIGxVUkw0OiAnJnNvdXJjZT0nLFxuICBtVVJMMTogJ21haWx0bzonLFxuICBtVVJMMjogJz9zdWJqZWN0PScsXG4gIG1VUkwzOiAnJmJvZHk9JyxcbiAgTkFNRTogJ25hbWUnLFxuICBOTzogJ25vJyxcbiAgTk9fUkVTVUxUUzogJ1RoZXJlIGFyZSBubyBwb3N0cyB0aGF0IG1hdGNoIHRoYXQgZmlsdGVyIGNvbWJpbmF0aW9uLicsXG4gIFBPU1Q6ICdwb3N0JyxcbiAgUE9TVFM6ICdwb3N0cycsXG4gIFBVQkxJU0g6ICdwdWJsaXNoJyxcbiAgU1FVRVJZOiAnJnM9JyxcbiAgVEFCSU5ERVg6ICd0YWJpbmRleCcsXG4gIFRSVUU6ICd0cnVlJyxcbiAgdFVSTDE6ICdodHRwczovL3R3aXR0ZXIuY29tL3NoYXJlP3VybD0nLFxuICB0VVJMVGV4dDogJyZ0ZXh0PScsXG4gIHRVUkxWaWE6ICcmdmlhPUJTRCcsXG4gIFZBTFVFOiAndmFsdWUnLFxuICBXSURUSDogJ3dpZHRoJ1xufTsiLCIvLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qXFxcbi8vICAgICRTRUxFQ1RPUlMgLSBDU1Mgc2VsZWN0b3JzIE9OTFlcbi8vIC0gIHRhZyBuYW1lcywgI2lkcywgLmNsYXNzbmFtZXMsIFthdHRyaWJ1dGVzXSwgZXRjXG4vLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuZXhwb3J0IHZhciBTRUxFQ1RPUlMgPSB7XG4gIEFMTDogJyNhbGwnLFxuICBBTkNIT1I6ICdhJyxcbiAgQU5DSE9SX1dJVEhfSFJFRjogJ2FbaHJlZl0nLFxuICBBUElfUkVTVUxUUzogJ1tkYXRhLWxvYWRjb21wb25lbnQ9XCJBUElSZXN1bHRzXCJdJyxcbiAgQkFDS0dST1VORDogJy5iYWNrZ3JvdW5kJyxcbiAgQlVUVE9OOiAnYnV0dG9uJyxcbiAgQ0hFQ0tFRDogJzpjaGVja2VkJyxcbiAgQ0hFQ0tFRF9MQUJFTDogJzpjaGVja2VkICsgbGFiZWwnLFxuICBDSEVDS0JPWDogJ2NoZWNrYm94JyxcbiAgQ0xPU0U6ICcuY2xvc2UnLFxuICBDTE9TRV9TRUFSQ0g6ICcuY2xvc2Utc2VhcmNoJyxcbiAgREFUQV9CT1RUT006ICdkYXRhLWJvdHRvbXBvc2l0aW9uJyxcbiAgREFUQV9IQUxGV0FZOiAnZGF0YS1oYWxmd2F5JyxcbiAgREFUQV9IQVNfQU5JTUFURUQ6ICdkYXRhLWhhcy1hbmltYXRlZCcsXG4gIERBVEFfTEFaWV9MT0FEOiAnZGF0YS1sYXp5bG9hZCcsXG4gIERBVEFfTU9VU0VGT0xMT1c6ICdbZGF0YS1tb3VzZWZvbGxvd10nLFxuICBEQVRBX1BPU0lUSU9OOiAnZGF0YS1wb3NpdGlvbicsXG4gIERBVEFfVklTSUJMRTogJ1tkYXRhLXZpc2libGVdJyxcbiAgRElWOiAnZGl2JyxcbiAgRFJPUERPV046ICcuZHJvcGRvd24nLFxuICBEUk9QRE9XTl9DT05URU5UOiAnLmRyb3Bkb3duX19jb250ZW50JyxcbiAgRFJPUERPV05fVE9HR0xFOiAnLmRyb3Bkb3duX190b2dnbGUnLFxuICBEUk9QRE9XTl9UT0dHTEVfQ0xJQ0s6ICcuZHJvcGRvd24uY2xpY2snLFxuICBEUk9QRE9XTl9UT0dHTEVfSE9WRVI6ICcuZHJvcGRvd24uaG92ZXInLFxuICBFTUFJTDogJy5zaGFyZS0tZW1haWwnLFxuICBFWUU6ICcuZXllJyxcbiAgRkFDRUJPT0s6ICcuc2hhcmUtLWZiJyxcbiAgRklMRV9JTlBVVDogJ2lucHV0W3R5cGU9ZmlsZV0nLFxuICBGSUxURVI6ICcuZmlsdGVyJyxcbiAgRklMVEVSX0NIT0lDRTogJy5maWx0ZXItY2hvaWNlJyxcbiAgRklMVEVSX0ZPUk06ICcuZmlsdGVycy1mb3JtJyxcbiAgRklMVEVSX09QVElPTjogJy5maWx0ZXItb3B0aW9uJyxcbiAgRklMVEVSX1RSSUdHRVI6ICcuZmlsdGVyLXRyaWdnZXInLFxuICBGT1JNOiAnZm9ybScsXG4gIEZPUk1fRklFTERTOiAnaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEnLFxuICBGVU5fRkFDVF9JVEVNOiAnLmZ1bi1mYWN0X19pdGVtJyxcbiAgSFRNTDogJ2h0bWwnLFxuICBJTlZBTElEOiAnOmludmFsaWQnLFxuICBMSU5LRURJTjogJy5zaGFyZS0tbGknLFxuICBMT0FESU5HOiAnLmxvYWRpbmcnLFxuICBMT0FEX01PUkU6ICcubG9hZC1tb3JlJyxcbiAgTUVOVV9UWFQ6ICcubWVudS10eHQnLFxuICBNT1VTRUZPTExPVzogJy5tb3VzZWZvbGxvdycsXG4gIE5BVl9UUklHR0VSOiAnLm5hdl90cmlnZ2VyJyxcbiAgTkVTVEVEOiAnLm5lc3RlZCcsXG4gIE5FWFRfRkFDVDogJy5uZXh0LWZhY3QnLFxuICBPR0RFU0M6ICdtZXRhW3Byb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIl0nLFxuICBPR1RJVExFOiAnbWV0YVtwcm9wZXJ0eT1cIm9nOnRpdGxlXCJdJyxcbiAgT0dVUkw6ICdtZXRhW3Byb3BlcnR5PVwib2c6dXJsXCJdJyxcbiAgT1BFTl9TRUFSQ0g6ICcub3Blbi1zZWFyY2gnLFxuICBPUFRHUk9VUDogJ29wdGdyb3VwJyxcbiAgUEFSQUdSQVBIOiAncCcsXG4gIFBPU1RfQ09VTlQ6ICcucG9zdC1jb3VudCAuY291bnQnLFxuICBQT1NUX0xJU1RJTkc6ICcucG9zdC1saXN0aW5nJyxcbiAgUkFESU86ICdbdHlwZT1cInJhZGlvXCJdJyxcbiAgUkVTVUxUU19DT05UQUlORVI6ICcucmVzdWx0cy1jb250YWluZXInLFxuICBTRUFSQ0hfSU5QVVQ6ICcuc2VhcmNoLWZpZWxkX19pbnB1dCcsXG4gIFNFTEVDVEVEOiAnLnNlbGVjdGVkJyxcbiAgU1BBTjogJ3NwYW4nLFxuICBTVEFUSVNUSUNfVkFMVUU6ICcuc3RhdGlzdGljX192YWx1ZScsXG4gIFNVQk1JU1NJT05fUkVTUE9OU0U6ICcuc3VibWlzc2lvbi1yZXNwb25zZScsXG4gIFNVQk1JVDogJ1t0eXBlPVwic3VibWl0XCJdJyxcbiAgVEFCOiAnW3JvbGU9XCJ0YWJcIl0nLFxuICBUQUJQQU5FTDogJ1tyb2xlPVwidGFicGFuZWxcIl0nLFxuICBUV0lUVEVSOiAnLnNoYXJlLS10dydcbn07IiwiLy8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKlxcXG4vLyAgICAkVEVNUExBVEVTIC0gSlMgdGVtcGxhdGUgbGl0ZXJhbHNcbi8vIC0gIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL1RlbXBsYXRlX2xpdGVyYWxzXG4vLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuZXhwb3J0IHZhciBURU1QTEFURVMgPSB7XG4gIEJMT0dfTElTVElORzogZnVuY3Rpb24gQkxPR19MSVNUSU5HKHBvc3QpIHtcbiAgICByZXR1cm4gXCJcXG4gICAgICA8bGkgY2xhc3M9XFxcImJsb2ctbGlzdGluZy1ncmlkX19pdGVtXFxcIj5cXG4gICAgICAgICAgPGFydGljbGUgY2xhc3M9XFxcInBvc3RcXFwiIGRhdGEtdmlzaWJsZT1cXFwiZmFsc2VcXFwiPlxcbiAgICAgICAgICAgIDxhIGhyZWY9XFxcIlwiLmNvbmNhdChwb3N0LmxpbmssIFwiXFxcIiBjbGFzcz1cXFwicG9zdF9fcGVybWFsaW5rXFxcIj5cXG4gICAgICAgICAgICAgIDxoMiBjbGFzcz1cXFwicG9zdF9fZXllYnJvd1xcXCIgcm9sZT1cXFwicHJlc2VudGF0aW9uXFxcIj5cIikuY29uY2F0KHBvc3QuY2F0ZWdvcmllcy50ZXJtc1swXS5uYW1lLCBcIjwvaDI+XFxuICAgICAgICAgICAgICA8aDEgY2xhc3M9XFxcInBvc3RfX3RpdGxlXFxcIj5cIikuY29uY2F0KHBvc3QudGl0bGUsIFwiPC9oMT5cXG4gICAgICAgICAgICAgIFwiKS5jb25jYXQoISFwb3N0LmF1dGhvcnMgPyAnPHAgY2xhc3M9XCJwb3N0X19hdXRob3JcIj4nICsgcG9zdC5hdXRob3JzLmF1dGhvcmxpc3QgKyAnPC9wPicgOiAnJywgXCJcXG4gICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJwb3N0X19zdWJoZWFkaW5nXFxcIj5cIikuY29uY2F0KHBvc3QuZXhjZXJwdCwgXCI8L3A+XFxuICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzPVxcXCJwb3N0X19pbGx1c3RyYXRpb25cXFwiPlxcbiAgICAgICAgICAgICAgICA8cGljdHVyZSBjbGFzcz1cXFwicG9zdF9faWxsdXN0cmF0aW9uX19pbWFnZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgPHNvdXJjZSBtZWRpYT1cXFwiKG1pbi13aWR0aDogMTAyNHB4KVxcXCIgc3Jjc2V0PVxcXCJcIikuY29uY2F0KHBvc3QuZmVhdHVyZWRtZWRpYS5yYXdzcmMsIFwiXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cXFwiXCIpLmNvbmNhdChwb3N0LmZlYXR1cmVkbWVkaWEuc21hbGxzcmMsIFwiXFxcIiBhbHQ9XFxcIlwiKS5jb25jYXQocG9zdC5mZWF0dXJlZG1lZGlhLmFsdCwgXCJcXFwiPlxcbiAgICAgICAgICAgICAgICA8L3BpY3R1cmU+XFxuICAgICAgICAgICAgICAgIDxmaWdjYXB0aW9uIGNsYXNzPVxcXCJwb3N0X19pbGx1c3RyYXRpb25fX2NhcHRpb25cXFwiPjxzcGFuIGNsYXNzPVxcXCJjYXB0aW9uLWNvcHlcXFwiPlwiKS5jb25jYXQocG9zdC5jYXRlZ29yeV9jdGEsIFwiPC9zcGFuPjwvZmlnY2FwdGlvbj5cXG4gICAgICAgICAgICAgIDwvZmlndXJlPlxcbiAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgPC9hcnRpY2xlPlxcbiAgICAgICAgPC9saT5cXG4gICAgICBcIik7XG4gIH0sXG4gIEZJTFRFUl9DSE9JQ0U6IGZ1bmN0aW9uIEZJTFRFUl9DSE9JQ0UoZmlsdGVyKSB7XG4gICAgcmV0dXJuIFwiPGgzIGNsYXNzPVxcXCJmaWx0ZXItY2hvaWNlXFxcIj48c3BhbiBjbGFzcz1cXFwidmVyYlxcXCI+Vmlld2luZzwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcIm5vdW5cXFwiPlwiLmNvbmNhdChmaWx0ZXIsIFwiPC9zcGFuPjwvaDM+XCIpO1xuICB9LFxuICBQQUdFX1NVQkhFQURJTkc6IGZ1bmN0aW9uIFBBR0VfU1VCSEVBRElORyhzdWJoZWFkaW5nKSB7XG4gICAgcmV0dXJuIFwiPHNwYW4gY2xhc3M9XFxcImxhbmRpbmctcGFnZS1oZWFkZXJfX3RpdGxlLS1zdWJoZWFkaW5nXFxcIj5cIi5jb25jYXQoc3ViaGVhZGluZywgXCI8L3NwYW4+XCIpO1xuICB9LFxuICBOT19SRVNVTFRTOiBmdW5jdGlvbiBOT19SRVNVTFRTKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gXCI8aDIgY2xhc3M9XFxcIm5vLXJlc3VsdHNcXFwiPlwiLmNvbmNhdChtZXNzYWdlLCBcIjwvaDI+XCIpO1xuICB9XG59OyIsIi8qKlxuICogTG9va3MgZm9yIGFuY2VzdG9yIGVsZW1udCB3aXRoIGdpdmVuIHNlbGVjdG9yXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbSB0aGUgZWxlbW50IHRvIHRlc3RcbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvciB0aGUgc2VsZWN0b3IgeW91J3JlIGxvb2tpbmcgZm9yXG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gZWxlbWVudCBUaGUgY2xvc2VzdCBlbGVtZW50XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbG9zZXN0KGVsZW0sIHNlbGVjdG9yKSB7XG4gIHZhciBlbGVtZW50ID0gZWxlbTtcbiAgdmFyIG1hdGNoZXNTZWxlY3RvciA9IGVsZW1lbnQubWF0Y2hlcyB8fCBlbGVtZW50LndlYmtpdE1hdGNoZXNTZWxlY3RvciB8fCBlbGVtZW50Lm1vek1hdGNoZXNTZWxlY3RvciB8fCBlbGVtZW50Lm1zTWF0Y2hlc1NlbGVjdG9yO1xuXG4gIHdoaWxlIChlbGVtZW50KSB7XG4gICAgaWYgKG1hdGNoZXNTZWxlY3Rvci5jYWxsKGVsZW1lbnQsIHNlbGVjdG9yKSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufSIsInZhciBtb250aE5hbWVzID0gWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ107XG4vKipcbiAqIENvbnZlcnQgZGF0ZSB0byBodW1hbiByZWFkYWJsZVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBJU08gYW4gSVNPIGRhdGUgc3RyaW5nXG4gKiBAcmV0dXJuIHtTdHJpbmd9IGh1bWFuIHJlYWRhYmxlIGRhdGVcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY29udmVydGRhdGUoSVNPKSB7XG4gIHZhciB0aGlzRGF0ZSA9IG5ldyBEYXRlKElTTyk7XG4gIHZhciB5ZWFyID0gdGhpc0RhdGUuZ2V0RnVsbFllYXIoKTtcbiAgdmFyIG1vbnRoID0gbW9udGhOYW1lc1t0aGlzRGF0ZS5nZXRNb250aCgpXTtcbiAgdmFyIGRheSA9IHRoaXNEYXRlLmdldERhdGUoKTtcbiAgcmV0dXJuIG1vbnRoICsgJyAnICsgZGF5ICsgJywgJyArIHllYXI7XG59IiwiLyoqXG4gKiBHaXZlbiBhIGNvb2tpZSBuYW1lLCByZXR1cm5zIHZhbHVlIG9mIHRoYXQgY29va2llXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgdGhlIG5hbWUgb2YgdGhlIGNvb2tpZVxuICogQHJldHVybiB7U3RyaW5nfSB0aGUgdmFsdWUgb2YgdGhlIGNvb2tpZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Y29va2llKG5hbWUpIHtcbiAgdmFyIGNvb2tpZXN0cmluZyA9IFwiXCIuY29uY2F0KG5hbWUsIFwiPVwiKTtcbiAgdmFyIGRlY29kZWRDb29raWUgPSBkZWNvZGVVUklDb21wb25lbnQoZG9jdW1lbnQuY29va2llKTtcbiAgdmFyIGNvb2tpZXMgPSBkZWNvZGVkQ29va2llLnNwbGl0KCc7Jyk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb29raWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGNvb2tpZSA9IGNvb2tpZXNbaV07XG5cbiAgICB3aGlsZSAoY29va2llLmNoYXJBdCgwKSA9PSAnICcpIHtcbiAgICAgIGNvb2tpZSA9IGNvb2tpZS5zdWJzdHJpbmcoMSk7XG4gICAgfVxuXG4gICAgaWYgKGNvb2tpZS5pbmRleE9mKGNvb2tpZXN0cmluZykgPT0gMCkge1xuICAgICAgcmV0dXJuIGNvb2tpZS5zdWJzdHJpbmcoY29va2llc3RyaW5nLmxlbmd0aCwgY29va2llLmxlbmd0aCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuLyoqXG4gKiBDcmVhdGUgYW5kIHNldCBhIGNvb2tpZVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIHRoZSBuYW1lIG9mIHRoZSBjb29raWVcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSB0aGUgdmFsdWUgb2YgdGhlIGNvb2tpZVxuICogQHBhcmFtIHtOdW1iZXJ9IGV4cGlyZSB0aGUgbnVtYmVyIG9mIGRheXMgYWZ0ZXIgd2hpY2ggdGhlIGNvb2tpZSB3aWxsIGV4cGlyZVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRjb29raWUobmFtZSwgdmFsdWUsIGV4cGlyZSkge1xuICB2YXIgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gIGRhdGUuc2V0VGltZShkYXRlLmdldFRpbWUoKSArIGV4cGlyZSAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xuICB2YXIgZXhwaXJlcyA9ICdleHBpcmVzPScgKyBkYXRlLnRvVVRDU3RyaW5nKCk7XG4gIGRvY3VtZW50LmNvb2tpZSA9IFwiXCIuY29uY2F0KG5hbWUsIFwiPVwiKS5jb25jYXQodmFsdWUsIFwiO1wiKS5jb25jYXQoZXhwaXJlcywgXCI7cGF0aD0vXCIpO1xufSIsIi8qKlxuICogUmV0dXJucyBhIGZ1bmN0aW9uLCB0aGF0LCBhcyBsb25nIGFzIGl0IGNvbnRpbnVlcyB0byBiZSBpbnZva2VkLCB3aWxsIG5vdFxuICogYmUgdHJpZ2dlcmVkLiBUaGUgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgYWZ0ZXIgaXQgc3RvcHMgYmVpbmcgY2FsbGVkIGZvclxuICogTiBtaWxsaXNlY29uZHMuIElmIGBpbW1lZGlhdGVgIGlzIHBhc3NlZCwgdHJpZ2dlciB0aGUgZnVuY3Rpb24gb24gdGhlXG4gKiBsZWFkaW5nIGVkZ2UsIGluc3RlYWQgb2YgdGhlIHRyYWlsaW5nLlxuICpcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBmdW5jIEEgZnVuY3Rpb24gdG8gY2FsbCBhZnRlciBOIG1pbGxpc2Vjb25kc1xuICogQHBhcmFtICB7bnVtYmVyfSB3YWl0IFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHdhaXRcbiAqIEBwYXJhbSAge2Jvb2xlYW59IGltbWVkaWF0ZSBUcmlnZ2VyIHRoZSBmdW5jdGlvbiBvbiB0aGUgbGVhZGluZyBlZGdlIGluc3RlYWQgb2YgdGhlIHRyYWlsaW5nXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gQSBmdW5jdGlvbiwgdGhhdCwgYXMgbG9uZyBhcyBpdCBjb250aW51ZXMgdG8gYmUgaW52b2tlZCwgd2lsbCBub3QgYmUgdHJpZ2dlcmVkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBpbW1lZGlhdGUpIHtcbiAgdmFyIHRpbWVvdXQ7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuXG4gICAgdmFyIGxhdGVyID0gZnVuY3Rpb24gbGF0ZXIoKSB7XG4gICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgIGlmICghaW1tZWRpYXRlKSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgIH07XG5cbiAgICB2YXIgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dDtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuICAgIGlmIChjYWxsTm93KSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICB9O1xufSIsIi8qKlxuICogUGFyc2UgdG8gSFRNTFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhIGRhdGEgdG8gcGFyc2UgaW50byBIVE1MXG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gSFRNTFxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVjb2RlaHRtbChkYXRhKSB7XG4gIHZhciBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG4gIHZhciBkb20gPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKCc8IWRvY3R5cGUgaHRtbD48Ym9keT4nICsgZGF0YSwgJ3RleHQvaHRtbCcpO1xuICByZXR1cm4gZG9tLmJvZHkudGV4dENvbnRlbnQ7XG59IiwiaW1wb3J0IHsgTUlTQyB9IGZyb20gJy4uL0NvbnN0YW50cyc7XG4vKipcbiAqIFJldHVybnMgYSBCb29sZWFuIGNvcnJzcG9uZGluZyB0byB3aGV0aGVyIG9yIG5vdCB0aGUgZGV2aWNlL2Jyb3dzZXJcbiAqIGluIHVzZSBpcyBjYXBhYmxlIG9mIGhvdmVyIGV2ZW50c1xuICpcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgZGV2aWNlIGlzIGhvdmVyIGV2ZW50LWNhcGFibGU7IGZhbHNlIGlmIG5vdFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNob3ZlcigpIHtcbiAgdmFyIGhvdmVyUXVlcnkgPSB3aW5kb3cubWF0Y2hNZWRpYShNSVNDLk1RX0hPVkVSKTtcbiAgdmFyIGFueVF1ZXJ5ID0gd2luZG93Lm1hdGNoTWVkaWEoTUlTQy5NUV9OT19BTlkpO1xuICByZXR1cm4gaG92ZXJRdWVyeS5tYXRjaGVzIHx8ICFhbnlRdWVyeS5tYXRjaGVzID8gdHJ1ZSA6IGZhbHNlO1xufSIsIi8qKlxuICogQ29udmVydCBIRVggY29sb3IgdG8gUkdCXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGhleCBhIGhleCBjb2xvclxuICogQHJldHVybiB7U3RyaW5nfSBBIENTUyByZ2IgY29sb3IgdmFsdWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhleHRvcmdiKGhleCkge1xuICB2YXIgcmdiID0gaGV4LnJlcGxhY2UoL14jPyhbYS1mXFxkXSkoW2EtZlxcZF0pKFthLWZcXGRdKSQvaSwgZnVuY3Rpb24gKG0sIHIsIGcsIGIpIHtcbiAgICByZXR1cm4gJyMnICsgciArIHIgKyBnICsgZyArIGIgKyBiO1xuICB9KS5zdWJzdHJpbmcoMSkubWF0Y2goLy57Mn0vZykubWFwKGZ1bmN0aW9uICh4KSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KHgsIDE2KTtcbiAgfSk7XG4gIHJldHVybiBcInJnYihcIi5jb25jYXQocmdiWzBdLCBcIixcIikuY29uY2F0KHJnYlsxXSwgXCIsXCIpLmNvbmNhdChyZ2JbMl0sIFwiKVwiKTtcbn0iLCJleHBvcnQgeyBjbG9zZXN0IH0gZnJvbSAnLi9jbG9zZXN0LmpzJztcbmV4cG9ydCB7IGNyZWF0ZWxvYWRlciB9IGZyb20gJy4vbG9hZGVyJztcbmV4cG9ydCB7IGNvbnZlcnRkYXRlIH0gZnJvbSAnLi9jb252ZXJ0ZGF0ZS5qcyc7XG5leHBvcnQgeyBkZWJvdW5jZSB9IGZyb20gJy4vZGVib3VuY2UnO1xuZXhwb3J0IHsgZGVjb2RlaHRtbCB9IGZyb20gJy4vZGVjb2RlaHRtbCc7XG5leHBvcnQgeyBnZXRjb29raWUgfSBmcm9tICcuL2Nvb2tpZSc7XG5leHBvcnQgeyBoYXNob3ZlciB9IGZyb20gJy4vaGFzaG92ZXInO1xuZXhwb3J0IHsgaGV4dG9yZ2IgfSBmcm9tICcuL2hleHRvcmdiJztcbmV4cG9ydCB7IGludGVycG9sYXRlbnVtYmVycyB9IGZyb20gJy4vaW50ZXJwb2xhdGVudW1iZXJzJztcbmV4cG9ydCB7IGlzaWUgfSBmcm9tICcuL2lzaWUnO1xuZXhwb3J0IHsgaXNvYmplY3RlbXB0eSB9IGZyb20gJy4vaXNvYmplY3RlbXB0eSc7XG5leHBvcnQgeyBpc3Njcm9sbGVkaW50b3ZpZXcgfSBmcm9tICcuL2lzc2Nyb2xsZWRpbnRvdmlldyc7XG5leHBvcnQgeyBNZXNzYWdlQnVzIH0gZnJvbSAnLi9tZXNzYWdlYnVzJztcbmV4cG9ydCB7IG9wZW5wb3B1cCB9IGZyb20gJy4vb3BlbnBvcHVwJztcbmV4cG9ydCB7IHJlbW92ZWxvYWRlciB9IGZyb20gJy4vbG9hZGVyJztcbmV4cG9ydCB7IHNldGNvb2tpZSB9IGZyb20gJy4vY29va2llJzsiLCIvKipcbiAqIEEgZnVuY3Rpb24gd2hpY2ggbW92ZXMgZnJvbSBvbmUgdmFsdWUgdG8gYW5vdGhlciBieSBhIGNlcnRhaW4gcGVyY2VudFxuICpcbiAqIEBwYXJhbSB7SW50ZWdlcn0gZnJvbSB0aGUgc3RhcnRpbmcgbnVtYmVyXG4gKiBAcGFyYW0ge0ludGVnZXJ9IHRvIHRoZSBkZXN0aW5hdGlvbiBudW1iZXJcbiAqIEBwYXJhbSB7RmxvYXR9IGJ5IHBlcmNlbnRhZ2UgYnkgd2hpY2ggdG8gY2hhbmdlXG4gKiBAcmV0dXJuIHtJbnRlZ2VyfSB0aGUgY2hhbmdlZCBhbW91bnQsIHJvdW5kZWQgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICovXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwb2xhdGVudW1iZXJzKGZyb20sIHRvLCBieSkge1xuICByZXR1cm4gTWF0aC5yb3VuZCgoMSAtIGJ5KSAqIGZyb20gKyBieSAqIHRvKTtcbn0iLCIvKipcbiAqIENoZWNrcyBpZiB1c2VyIGlzIHJ1bm5pbmcgSW50ZXJuZXQgRXhwbG9yZXJcbiAqXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlzIElFLCBmYWxzZSBpZiBub3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzaWUoKSB7XG4gIGlmICghIW5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL1RyaWRlbnRcXC83XFwuLykpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn0iLCIvKipcbiAqIENoZWNrcyBpZiBvYmplY3QgZXhpc3RzIGFuZCBpcyBwb3B1bGF0ZWRcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIHRoZSBvYmplY3QgdG8gdGVzdFxuICpcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaXMgZW1wdHksIGZhbHNlIGlmIG5vdFxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNvYmplY3RlbXB0eShvYmopIHtcbiAgaWYgKHR5cGVvZiBvYmogIT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikubGVuZ3RoID09PSAwICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0O1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59IiwiLyoqXG4gKiBBIGZ1bmN0aW9uIHdoaWNoIG1lYXN1cmVzIHRoZSBlbGVtZW50cyBwb3NpdGlvbiBvbiB0aGUgcGFnZSBpblxuICogcmVsYXRpb24gdG8gdGhlIHdoYXQgdGhlIHVzZXIgY2FuIGN1cnJlbnRseSBzZWUgb24gdGhlaXIgc2NyZWVuXG4gKiBhbmQgcmV0dXJucyBhIGJvb2xlYW4gdmFsdWUgd2l0aCBgdHJ1ZWAgYmVpbmcgdGhhdCB0aGUgZWxlbWVudFxuICogaXMgdmlzaWJsZSBhbmQgYGZhbHNlYCBiZWluZyB0aGF0IGl0IGlzIG5vdCB2aXNpYmxlLlxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gIGVsZW0gQSBET00gZWxlbWVudFxuICogQHJldHVybiB7Qm9vbGVhbn0gaXNWaXNpYmxlIEEgYm9vbGVhbiB2YWx1ZSB3aXRoIGB0cnVlYCByZXByZXNlbnRpbmcgdGhhdCB0aGUgZWxlbWVudCBpcyB2aXNpYmxlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc3Njcm9sbGVkaW50b3ZpZXcoZWxlbSkge1xuICB2YXIgZWxlbWVudEJvdW5kcyA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHJldHVybiBlbGVtZW50Qm91bmRzLnRvcCA8IHdpbmRvdy5pbm5lckhlaWdodCAmJiBlbGVtZW50Qm91bmRzLmJvdHRvbSA+PSAwO1xufSIsImltcG9ydCB7IENMQVNTX05BTUVTLCBTRUxFQ1RPUlMgfSBmcm9tICcuLi9Db25zdGFudHMnO1xuLyoqXG4gKiBBZGQgRE9NIGVsZW1lbnQgZm9yIGxvYWRpbmcgZ3JhcGhpYyB0byBwYXNzZWQtaW4gZWxlbWVudFxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgdGhlIGVsZW1lbnQgdG8gd2hpY2ggdG8gYWRkIHRoZSBsb2FkZXJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlbG9hZGVyKGVsZW1lbnQpIHtcbiAgdmFyIGxvYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoU0VMRUNUT1JTLkRJVik7XG4gIGxvYWRlci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShDTEFTU19OQU1FUy5MT0FESU5HKSk7XG4gIGxvYWRlci5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVTLkxPQURJTkcpO1xuICBlbGVtZW50LmFwcGVuZENoaWxkKGxvYWRlcik7XG59XG4vKipcbiAqIFJlbW92ZSBET00gZWxlbWVudCBmb3IgbG9hZGluZyBncmFwaGljIGZyb20gcGFzc2VkLWluIGVsZW1lbnRcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IHRoZSBlbGVtZW50IGZyb20gd2hpY2ggdG8gcmVtb3ZlIHRoZSBsb2FkZXJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlbG9hZGVyKGVsZW1lbnQpIHtcbiAgdmFyIGxvYWRlciA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihTRUxFQ1RPUlMuTE9BRElORyk7XG4gIGVsZW1lbnQucmVtb3ZlQ2hpbGQobG9hZGVyKTtcbn0iLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbi8qKlxuICogQSBjbGFzcyB3aGljaCBoZWxwcyBzZW5kaW5nIG1lc3NhZ2VzIGFjY29zcyBjb21wb25lbnRzIHZpYSBhIERPTSBub2RlXG4gKi9cbmV4cG9ydCB2YXIgTWVzc2FnZUJ1cyA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIE1lc3NhZ2VCdXMoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1lc3NhZ2VCdXMpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE1lc3NhZ2VCdXMsIFt7XG4gICAga2V5OiBcInNlbmRFdmVudFwiLFxuICAgIHZhbHVlOlxuICAgIC8qKlxuICAgICAqIHNlbmRFdmVudFxuICAgICAqXG4gICAgICogQSBmdW5jdGlvbiB3aGljaCBsZXRzIHlvdSBkaXNwYXRjaCBhIGN1c3RvbSBldmVudCBvblxuICAgICAqIGEgTm9kZS4gSWYgdGhlIGVsZW1lbnQgaXMgcGFzc2VkLCBpdCB1c2VzIHRoZSBlbGVtZW50XG4gICAgICogYXZhaWxhYmxlIG9uIHRoZSBjdXJyZW50IGB0aGlzYCBjb250ZXh0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50TmFtZSBOYW1lIG9mIHRoZSBjdXN0b20gZXZlbnQgdGhhdCBpcyBiZWluZyB0cmlnZ2VyZWRcbiAgICAgKiBAcGFyYW0ge09iamVjdD19IG9wdGlvbnMgT2JqZWN0IHdoaWNoIHNob3VsZCBiZSBwYXNzZWQgaW4gdGhlIG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0ge09iamVjdD19IGVsZW1lbnQgRE9NIG5vZGUgd2hpY2ggdGhlIGV2ZW50IHNob3VsZCBiZSBhdHRhY2hlZCB0b1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIHNlbmRFdmVudChldmVudE5hbWUsIG9wdGlvbnMsIGVsZW1lbnQpIHtcbiAgICAgIHZhciBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcbiAgICAgIGV2dC5pbml0Q3VzdG9tRXZlbnQoZXZlbnROYW1lLCBmYWxzZSwgZmFsc2UsIG9wdGlvbnMpO1xuICAgICAgKGVsZW1lbnQgfHwgdGhpcy5lbGVtZW50KS5kaXNwYXRjaEV2ZW50KGV2dCk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE1lc3NhZ2VCdXM7XG59KCk7IiwiLyoqXG4gKiBBIGZ1bmN0aW9uIHdoaWNoIG9wZW5zIGEgcG9wdXAgd2luZG93XG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSB1cmwgdGhlIHVybCB0byBvcGVuIGluIHRoZSBwb3B1cFxuICogQHBhcmFtICB7U3RyaW5nfSB3aW5kb3dOYW1lIGEgdW5pcXVlIG5hbWUgZm9yIHRoZSBwb3B1cFxuICogQHBhcmFtICB7SW50ZWdlcn0gdyB0aGUgZGVzaXJlZCB3aWR0aCBvZiB0aGUgcG9wdXBcbiAqIEBwYXJhbSAge0ludGVnZXJ9IGggdGhlIGRlc2lyZWQgaGVpZ2h0IG9mIHRoZSBwb3B1cFxuICogQHJldHVybiB7T2JqZWN0fSBhbiBvYmplY3QgdGhlIHBvcHVwIGZ1bmN0aW9uIGlzIGJvdW5kIHRvXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvcGVucG9wdXAodXJsLCB3aW5kb3dOYW1lLCB3LCBoKSB7XG4gIHJldHVybiB3aW5kb3cub3Blbih1cmwsIHdpbmRvd05hbWUsICdtZW51YmFyPW5vLHN0YXR1cz1ubyx0b29sYmFyPW5vLGxvY2F0aW9uPXllcyxyZXNpemFibGU9eWVzLHNjcm9sbGJhcnM9eWVzLHN0YXR1cz1ubyx3aWR0aD0nICsgdyArICcsaGVpZ2h0PScgKyBoICsgJycpO1xufSIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH0sIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHsgdmFsdWU6IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KSwgd3JpdGFibGU6IGZhbHNlIH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmltcG9ydCB7IE1lc3NhZ2VCdXMgfSBmcm9tICcuLi8uLi9VdGlscyc7XG4vKipcbiAqIFRoZSBDb250cm9sbGVyIGJhc2UgY2xhc3NcbiAqXG4gKiBAY2xhc3MgQ29udHJvbGxlclxuICovXG5cbnZhciBDb250cm9sbGVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfTWVzc2FnZUJ1cykge1xuICBfaW5oZXJpdHMoQ29udHJvbGxlciwgX01lc3NhZ2VCdXMpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoQ29udHJvbGxlcik7XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yIGZ1bmN0aW9uIG9mIHRoZSBDb250cm9sbGVyIGNsYXNzLlxuICAgKi9cbiAgZnVuY3Rpb24gQ29udHJvbGxlcigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29udHJvbGxlcik7XG5cbiAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcyk7XG4gIH1cbiAgLyoqXG4gICAqIFJlcXVlc3RcbiAgICpcbiAgICogQ2FsbHMgdGhlIHJlcXVlc3QgbWV0aG9kIGluIHN1cGVyIGNsYXNzXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB1cmwgLSBhIHVybCBmcm9tIHdoaWNoIHRvIGZldGNoXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBhcmcgLSBhcmd1bWVudHMsIGlmIGFueVxuICAgKiBAcmV0dXJuIHtPYmplY3R9IHJlc3VsdCBvZiB0aGUgcmVxdWVzdFxuICAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhDb250cm9sbGVyLCBbe1xuICAgIGtleTogXCJyZXF1ZXN0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlcXVlc3QodXJsLCBhcmcpIHtcbiAgICAgIHZhciBhcmdzID0gdHlwZW9mIGFyZyAhPT0gJ3VuZGVmaW5lZCcgPyBhcmcgOiB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCdcbiAgICAgIH07XG4gICAgICByZXR1cm4gZmV0Y2godXJsLCBhcmdzKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICAgICAgICBzdGF0dXM6IHJlc3BvbnNlLnN0YXR1c1xuICAgICAgICAgIH07XG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIENvbnRyb2xsZXI7XG59KE1lc3NhZ2VCdXMpO1xuXG5leHBvcnQgeyBDb250cm9sbGVyIGFzIGRlZmF1bHQgfTsiLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9LCBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfZ2V0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgIT09IFwidW5kZWZpbmVkXCIgJiYgUmVmbGVjdC5nZXQpIHsgX2dldCA9IFJlZmxlY3QuZ2V0OyB9IGVsc2UgeyBfZ2V0ID0gZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikgeyB2YXIgYmFzZSA9IF9zdXBlclByb3BCYXNlKHRhcmdldCwgcHJvcGVydHkpOyBpZiAoIWJhc2UpIHJldHVybjsgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGJhc2UsIHByb3BlcnR5KTsgaWYgKGRlc2MuZ2V0KSB7IHJldHVybiBkZXNjLmdldC5jYWxsKGFyZ3VtZW50cy5sZW5ndGggPCAzID8gdGFyZ2V0IDogcmVjZWl2ZXIpOyB9IHJldHVybiBkZXNjLnZhbHVlOyB9OyB9IHJldHVybiBfZ2V0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuZnVuY3Rpb24gX3N1cGVyUHJvcEJhc2Uob2JqZWN0LCBwcm9wZXJ0eSkgeyB3aGlsZSAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KSkgeyBvYmplY3QgPSBfZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTsgaWYgKG9iamVjdCA9PT0gbnVsbCkgYnJlYWs7IH0gcmV0dXJuIG9iamVjdDsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7IHZhbHVlOiBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSksIHdyaXRhYmxlOiBmYWxzZSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5pbXBvcnQgeyBFTkRQT0lOVFMsIEVWRU5UUywgVEVNUExBVEVTIH0gZnJvbSAnLi4vLi4vQ29uc3RhbnRzJztcbmltcG9ydCBMb2FkUG9zdHNNb2RlbCBmcm9tICcuLi9tb2RlbHMvTG9hZFBvc3RzTW9kZWwnO1xuaW1wb3J0IENvbnRyb2xsZXIgZnJvbSAnLi9Db250cm9sbGVyJztcbi8qKlxuICogVGhlIExvYWRQb3N0c0NvbnRyb2xsZXIgY29udHJvbGxlciB3aGljaCBoYW5kbGVzIHRoZSBzZWFyY2ggZmlsdGVyc1xuICpcbiAqIEBjbGFzcyBMb2FkUG9zdHNDb250cm9sbGVyXG4gKi9cblxudmFyIExvYWRQb3N0c0NvbnRyb2xsZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db250cm9sbGVyKSB7XG4gIF9pbmhlcml0cyhMb2FkUG9zdHNDb250cm9sbGVyLCBfQ29udHJvbGxlcik7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihMb2FkUG9zdHNDb250cm9sbGVyKTtcblxuICAvKipcbiAgICogQ29uc3RydWN0b3IgZnVuY3Rpb24gb2YgdGhlIExvYWRQb3N0c0NvbnRyb2xsZXIgY2xhc3MuXG4gICAqL1xuICBmdW5jdGlvbiBMb2FkUG9zdHNDb250cm9sbGVyKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBMb2FkUG9zdHNDb250cm9sbGVyKTtcblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcyk7XG4gICAgX3RoaXMucG9zdHMgPSBudWxsO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuICAvKipcbiAgICogTG9hZEl0ZW1zXG4gICAqXG4gICAqIEV2ZW50IGhhbmRsZXIgZm9yIExPQURfSVRFTVNcbiAgICogQHBhcmFtIHtTdHJpbmd9IHBhdGggdGhlIGVuZHBvaW50IHBhdGhcbiAgICogQHBhcmFtIHtTdHJpbmd9IHBhcmFtcyBzdHJpbmcgb2YgcXVlcnkgcGFyYW1zXG4gICAqIEBwYXJhbSB7VGVtcGxhdGVMaXRlcmFsfSB0ZW1wbGF0ZSB0aGUgdGVtcGxhdGUgbGl0ZXJhbCB0byB1c2VcbiAgICogQHBhcmFtIHtCb29sZWFufSBmcm9tc2VhcmNoIGFyZSB3ZSBsb2FkaW5nIHBvc3RzIGZyb20gc2VhcmNoP1xuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSByZXN1bHRzY29udGFpbmVyIHRoZSBjb250YWluZXIgaW50byB3aGljaCB3ZSdyZSBsb2FkaW5nXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwb3N0dHlwZSBhIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIHBvc3QgdHlwZSB3ZSdyZSBhc2tpbmcgZm9yXG4gICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKExvYWRQb3N0c0NvbnRyb2xsZXIsIFt7XG4gICAga2V5OiBcImxvYWRJdGVtc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsb2FkSXRlbXMocGF0aCwgcGFyYW1zLCB0ZW1wbGF0ZSwgZnJvbXNlYXJjaCwgcmVzdWx0c2NvbnRhaW5lciwgcG9zdHR5cGUpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgcXVlcnlwYXRoID0gZnJvbXNlYXJjaCA/IEVORFBPSU5UUy5TRUFSQ0ggOiBFTkRQT0lOVFMuV1BBUEkgKyBwYXRoICsgJy8/JztcbiAgICAgIHZhciBxdWVyeSA9IHBhcmFtcyArICcmX2VtYmVkPTEnO1xuICAgICAgdmFyIGVuZHBvaW50ID0gcXVlcnlwYXRoICsgcXVlcnk7XG4gICAgICB0aGlzLnJlcXVlc3QoZW5kcG9pbnQpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIF90aGlzMi5zZW5kRXZlbnQoRVZFTlRTLlJFU1VMVFNfUkVUVVJORUQsIHtcbiAgICAgICAgICAncmVzcG9uc2UnOiBuZXcgTG9hZFBvc3RzTW9kZWwocmVzcG9uc2UuZGF0YSwgcG9zdHR5cGUpLFxuICAgICAgICAgICd0ZW1wbGF0ZSc6IFRFTVBMQVRFU1t0ZW1wbGF0ZV0sXG4gICAgICAgICAgJ2hlYWRlcnMnOiByZXNwb25zZS5oZWFkZXJzLFxuICAgICAgICAgICdwcmltYXJ5JzogMCxcbiAgICAgICAgICAnc2Vjb25kYXJ5JzogMFxuICAgICAgICB9LCByZXN1bHRzY29udGFpbmVyKTtcbiAgICAgIH0pW1wiY2F0Y2hcIl0oZnVuY3Rpb24gKCkge30pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXF1ZXN0XG4gICAgICpcbiAgICAgKiBDYWxscyB0aGUgcmVxdWVzdCBtZXRob2QgaW4gc3VwZXIgY2xhc3NcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZW5kcG9pbnQgdGhlIHJlcXVlc3QgZW5kcG9pbnRcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IHRoZSByZXF1ZXN0IHJlc3BvbnNlXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJyZXF1ZXN0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlcXVlc3QoZW5kcG9pbnQpIHtcbiAgICAgIHJldHVybiBfZ2V0KF9nZXRQcm90b3R5cGVPZihMb2FkUG9zdHNDb250cm9sbGVyLnByb3RvdHlwZSksIFwicmVxdWVzdFwiLCB0aGlzKS5jYWxsKHRoaXMsIGVuZHBvaW50KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTG9hZFBvc3RzQ29udHJvbGxlcjtcbn0oQ29udHJvbGxlcik7XG5cbmV4cG9ydCB7IExvYWRQb3N0c0NvbnRyb2xsZXIgYXMgZGVmYXVsdCB9OyIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5pbXBvcnQgeyBNSVNDIH0gZnJvbSAnLi4vLi4vQ29uc3RhbnRzJztcbmltcG9ydCB7IGlzb2JqZWN0ZW1wdHksIGNvbnZlcnRkYXRlIH0gZnJvbSAnLi4vLi4vVXRpbHMnO1xuLyoqXG4gKiBBdXRob3JzTW9kZWxcbiAqXG4gKiBNb2RlbCBmb3IgQXV0aG9ycyByZXR1cm5lZCBhcyBwYXJ0IG9mIFBvc3RzIHJldHVybmVkIGZyb20gV1AgQVBJXG4gKi9cblxudmFyIEF1dGhvcnNNb2RlbCA9IC8qI19fUFVSRV9fKi9fY3JlYXRlQ2xhc3MoXG4vKipcbiAqIENvbnN0cnVjdG9yIGZvciB0aGUgQXV0aG9yc01vZGVsIGNsYXNzXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBhdXRob3JzIEFuIG9iamVjdCBvZiBkYXRhIHRvIHRyYW5zZm9ybSBhbmQgbW9kZWxcbiAqL1xuZnVuY3Rpb24gQXV0aG9yc01vZGVsKGF1dGhvcnMpIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEF1dGhvcnNNb2RlbCk7XG5cbiAgdmFyIGF1dGhvcnNBcnJheSA9IFtdO1xuICBhdXRob3JzLmZvckVhY2goZnVuY3Rpb24gKGF1dGhvcikge1xuICAgIGF1dGhvcnNBcnJheS5wdXNoKGF1dGhvci5wb3N0X3RpdGxlKTtcbiAgfSk7XG4gIHRoaXMuYXV0aG9ybGlzdCA9IGF1dGhvcnNBcnJheS5qb2luKCcsICcpO1xufSk7XG4vKipcbiAqIFRlcm1Nb2RlbFxuICpcbiAqIE1vZGVsIGZvciBhIFRlcm0gcmV0dXJuZWQgYXMgcGFydCBvZiBUZXJtcy0+UG9zdHMgcmV0dXJuZWQgZnJvbSBXUCBBUElcbiAqL1xuXG5cbnZhciBUZXJtTW9kZWwgPSAvKiNfX1BVUkVfXyovX2NyZWF0ZUNsYXNzKFxuLyoqXG4gKiBDb25zdHJ1Y3RvciBmb3IgdGhlIFRlcm1Nb2RlbCBjbGFzc1xuICpcbiAqIEBwYXJhbSAge09iamVjdH0gdGVybSBBbiBvYmplY3Qgb2YgZGF0YSB0byB0cmFuc2Zvcm0gYW5kIG1vZGVsXG4gKi9cbmZ1bmN0aW9uIFRlcm1Nb2RlbCh0ZXJtKSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUZXJtTW9kZWwpO1xuXG4gIHRoaXMubmFtZSA9IHRlcm0ubmFtZTtcbiAgdGhpcy5saW5rID0gdGVybS5saW5rO1xuICB0aGlzLnNsdWcgPSB0ZXJtLnNsdWc7XG59KTtcbi8qKlxuICogVGVybXNNb2RlbFxuICpcbiAqIE1vZGVsIGZvciBUZXJtcyByZXR1cm5lZCBhcyBwYXJ0IG9mIFBvc3RzIHJldHVybmVkIGZyb20gV1AgQVBJXG4gKi9cblxuXG52YXIgVGVybXNNb2RlbCA9IC8qI19fUFVSRV9fKi9fY3JlYXRlQ2xhc3MoXG4vKipcbiAqIENvbnN0cnVjdG9yIGZvciB0aGUgVGVybXNNb2RlbCBjbGFzc1xuICpcbiAqIEBwYXJhbSAge09iamVjdH0gdGVybXMgQW4gb2JqZWN0IG9mIGRhdGEgdG8gdHJhbnNmb3JtIGFuZCBtb2RlbFxuICogQHBhcmFtICB7U3RyaW5nfSB0eXBlIHRoZSB0eXBlIG9mIHRheG9ub215IGZvciB0aGlzIHRlcm1cbiAqL1xuZnVuY3Rpb24gVGVybXNNb2RlbCh0ZXJtcywgdHlwZSkge1xuICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUZXJtc01vZGVsKTtcblxuICB0aGlzLnRlcm1zID0gW107XG4gIHRlcm1zLmZvckVhY2goZnVuY3Rpb24gKHRlcm1zZXQpIHtcbiAgICBpZiAodGVybXNldC5sZW5ndGggPiAwICYmICEhdGVybXNldFswXS50YXhvbm9teSAmJiB0ZXJtc2V0WzBdLnRheG9ub215ID09PSB0eXBlKSB7XG4gICAgICB0ZXJtc2V0LmZvckVhY2goZnVuY3Rpb24gKHRlcm0pIHtcbiAgICAgICAgX3RoaXMudGVybXMucHVzaChuZXcgVGVybU1vZGVsKHRlcm0pKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG59KTtcbi8qKlxuICogRmVhdHVyZWQgTWVkaWEgTW9kZWxcbiAqXG4gKiBNb2RlbCBmb3IgRmVhdHVyZWQgTWVkaWEgcmV0dXJuZWQgYXMgcGFydCBvZiBQb3N0cyByZXR1cm5lZCBmcm9tIFdQIEFQSVxuICovXG5cblxudmFyIEZlYXR1cmVkTWVkaWFNb2RlbCA9IC8qI19fUFVSRV9fKi9fY3JlYXRlQ2xhc3MoXG4vKipcbiAqIENvbnN0cnVjdG9yIGZvciB0aGUgRmVhdHVyZWRNZWRpYU1vZGVsIGNsYXNzXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBtZWRpYSBUaGUgcG9zdCdzIGZlYXR1cmVkbWVkaWEgb2JqZWN0XG4gKiBAcGFyYW0gIHtPYmplY3R9IHBvc3R0aXRsZSBUaGUgcG9zdCdzIHRpdGxlLCBhcyBhIGZhbGxiYWNrXG4gKi9cbmZ1bmN0aW9uIEZlYXR1cmVkTWVkaWFNb2RlbChtZWRpYSwgcG9zdHRpdGxlKSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBGZWF0dXJlZE1lZGlhTW9kZWwpO1xuXG4gIGlmICghbWVkaWEpIHtcbiAgICB0aGlzLnJhd3NyYyA9IE1JU0MuUExBQ0VIT0xERVJfSU1HO1xuICAgIHRoaXMuc21hbGxzcmMgPSBNSVNDLlBMQUNFSE9MREVSX0lNRztcbiAgICB0aGlzLmFsdCA9IHBvc3R0aXRsZTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnJhd3NyYyA9IG1lZGlhWzBdLnNvdXJjZV91cmw7XG4gICAgdGhpcy5zbWFsbHNyYyA9IHR5cGVvZiBtZWRpYVswXS5tZWRpYV9kZXRhaWxzLnNpemVzLm1lZGl1bV9sYXJnZSAhPT0gJ3VuZGVmaW5lZCcgPyBtZWRpYVswXS5tZWRpYV9kZXRhaWxzLnNpemVzLm1lZGl1bV9sYXJnZS5zb3VyY2VfdXJsIDogbWVkaWFbMF0uc291cmNlX3VybDtcbiAgICB0aGlzLmFsdCA9ICEhbWVkaWFbMF0uYWx0X3RleHQgPyBtZWRpYVswXS5hbHRfdGV4dCA6ICEhbWVkaWFbMF0uY2FwdGlvbi5yZW5kZXJlZCA/IG1lZGlhWzBdLmNhcHRpb24ucmVuZGVyZWQgOiAhIW1lZGlhWzBdLnRpdGxlLnJlbmRlcmVkID8gbWVkaWFbMF0udGl0bGUucmVuZGVyZWQgOiBwb3N0dGl0bGU7XG4gIH1cbn0pO1xuLyoqXG4gKiBFeWVicm93TW9kZWxcbiAqXG4gKiBNb2RlbCBmb3IgaWYgYW5kIGV5ZWJyb3cgdmFsdWUgaXMgcmV0dXJuZWQgIGluIFBvc3RzIGZyb20gV1AgQVBJXG4gKi9cblxuXG52YXIgRXllYnJvd01vZGVsID0gLyojX19QVVJFX18qL19jcmVhdGVDbGFzcyhcbi8qKlxuICogQ29uc3RydWN0b3IgZm9yIHRoZSBFeWVicm93TW9kZWwgY2xhc3NcbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IGV5ZWJyb3cgVGhlIHBvc3QncyBleWVicm93IG9iamVjdFxuICogQHBhcmFtICB7T2JqZWN0fSB0ZXJtIFRoZSBwb3N0J3MgZmlyc3QgdGVybSwgYXMgYSBmYWxsYmFja1xuICovXG5mdW5jdGlvbiBFeWVicm93TW9kZWwoZXllYnJvdywgdGVybSkge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRXllYnJvd01vZGVsKTtcblxuICBpZiAoZXllYnJvd1swXSAhPT0gJycpIHtcbiAgICB0aGlzLmxhYmVsID0gZXllYnJvd1swXTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGVybXNldCA9IG5ldyBUZXJtc01vZGVsKHRlcm0sICdjYXRlZ29yeScpO1xuICAgIHRoaXMubGFiZWwgPSB0ZXJtc2V0LnRlcm1zWzBdLm5hbWU7XG4gIH1cbn0pO1xuLyoqXG4gKiBQb3N0TW9kZWxcbiAqXG4gKiBNb2RlbCBmb3IgYSBUZXJtIHJldHVybmVkIGFzIHBhcnQgb2YgVGVybXMtPlBvc3RzIHJldHVybmVkIGZyb20gV1AgQVBJXG4gKi9cblxuXG52YXIgUG9zdE1vZGVsID0gLyojX19QVVJFX18qL19jcmVhdGVDbGFzcyhcbi8qKlxuICogQ29uc3RydWN0b3IgZm9yIHRoZSBQb3N0TW9kZWwgY2xhc3NcbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IHBvc3QgQW4gb2JqZWN0IG9mIGRhdGEgdG8gdHJhbnNmb3JtIGFuZCBtb2RlbFxuICogQHBhcmFtICB7U3RyaW5nfSBwb3N0dHlwZSB0aGUgdHlwZSBvZiBwb3N0IHdlJ3JlIGxvYWRpbmdcbiAqL1xuZnVuY3Rpb24gUG9zdE1vZGVsKHBvc3QsIHBvc3R0eXBlKSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQb3N0TW9kZWwpO1xuXG4gIHRoaXMuaWQgPSBwb3N0LmlkO1xuICB0aGlzLmRhdGUgPSBwb3N0LmRhdGU7XG4gIHRoaXMuZmVhdHVyZWRtZWRpYSA9IHBvc3QuZmVhdHVyZWRfbWVkaWEgPiAwID8gbmV3IEZlYXR1cmVkTWVkaWFNb2RlbChwb3N0Ll9lbWJlZGRlZFsnd3A6ZmVhdHVyZWRtZWRpYSddLCBwb3N0LnRpdGxlLnJlbmRlcmVkKSA6IG5ldyBGZWF0dXJlZE1lZGlhTW9kZWwoZmFsc2UsIHBvc3QudGl0bGUucmVuZGVyZWQpO1xuICB0aGlzLm1ldGEgPSAhaXNvYmplY3RlbXB0eShwb3N0Lm1ldGEpID8gcG9zdC5tZXRhIDogISFwb3N0LnBvc3RfbWV0YSA/IHBvc3QucG9zdF9tZXRhIDogbnVsbDtcbiAgdGhpcy5zbHVnID0gcG9zdC5zbHVnO1xuICB0aGlzLmxpbmsgPSAhIXBvc3QucG9zdF9tZXRhICYmIHBvc3QucG9zdF9tZXRhLmhhc093blByb3BlcnR5KCdvdmVycmlkZV91cmwnKSAmJiBwb3N0LnBvc3RfbWV0YS5vdmVycmlkZV91cmxbMF0ubGVuZ3RoID4gMCA/IHBvc3QucG9zdF9tZXRhLm92ZXJyaWRlX3VybFswXSA6IHBvc3QubGluaztcbiAgdGhpcy5mb3JtYXR0ZWREYXRlID0gISFwb3N0LmRhdGUgPyBjb252ZXJ0ZGF0ZShwb3N0LmRhdGUpIDogbnVsbDtcbiAgdGhpcy50aXRsZSA9IHBvc3QudGl0bGUucmVuZGVyZWQ7XG4gIHRoaXMuY2FwYWJpbGl0aWVzID0gbmV3IFRlcm1zTW9kZWwocG9zdC5fZW1iZWRkZWRbJ3dwOnRlcm0nXSwgJ2NhcGFiaWxpdGllcycpO1xuICB0aGlzLmNhdGVnb3JpZXMgPSBuZXcgVGVybXNNb2RlbChwb3N0Ll9lbWJlZGRlZFsnd3A6dGVybSddLCAnY2F0ZWdvcnknKTtcbiAgdGhpcy50YWdzID0gbmV3IFRlcm1zTW9kZWwocG9zdC5fZW1iZWRkZWRbJ3dwOnRlcm0nXSwgJ3Bvc3RfdGFnJyk7XG4gIHRoaXMuY2F0ZWdvcnlfY3RhID0gISFwb3N0LmNhdGVnb3J5X2N0YSA/IHBvc3QuY2F0ZWdvcnlfY3RhIDogJ1JlYWQnO1xuICB0aGlzLmF1dGhvcnMgPSBwb3N0LmFydGljbGVfYXV0aG9yICE9PSAnJyAmJiAhIXBvc3QuYXJ0aWNsZV9hdXRob3IgPyBuZXcgQXV0aG9yc01vZGVsKHBvc3QuYXJ0aWNsZV9hdXRob3IpIDogbnVsbDtcbiAgdGhpcy5leGNlcnB0ID0gISFwb3N0LmV4Y2VycHQgPyBwb3N0LmV4Y2VycHQucmVuZGVyZWQucmVwbGFjZSgvPFtePl0qPj8vZ20sICcnKS5zdWJzdHJpbmcoMCwgMTUwKSA6IG51bGw7XG4gIHRoaXMuZXllYnJvdyA9IHBvc3R0eXBlID09PSBNSVNDLkNBU0VfU1RVRFkgPyBudWxsIDogbmV3IEV5ZWJyb3dNb2RlbChwb3N0LnBvc3RfbWV0YS5leWVicm93X2xhYmVsLCBwb3N0Ll9lbWJlZGRlZFsnd3A6dGVybSddKTtcbn0pO1xuLyoqXG4gKiBObyBQb3N0c1xuICpcbiAqIE1vZGVsIGZvciBhIFRlcm0gcmV0dXJuZWQgYXMgcGFydCBvZiBUZXJtcy0+UG9zdHMgcmV0dXJuZWQgZnJvbSBXUCBBUEkgdGhhdCBoYXMgbm8gcmVzdWx0c1xuICovXG5cblxudmFyIE5vUG9zdHMgPSAvKiNfX1BVUkVfXyovX2NyZWF0ZUNsYXNzKFxuLyoqXG4gKiBDb25zdHJ1Y3RvciBmb3IgdGhlIE5vUG9zdHMgY2xhc3NcbiAqXG4gKi9cbmZ1bmN0aW9uIE5vUG9zdHMoKSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBOb1Bvc3RzKTtcblxuICB0aGlzLm1lc3NhZ2UgPSBNSVNDLk5PX1JFU1VMVFM7XG59KTtcbi8qKlxuICogTG9hZFBvc3RzTW9kZWxcbiAqXG4gKiBNb2RlbCBmb3IgQVBJIGNhbGwgcmVzdWx0cyBmcm9tIFdQIFNlYXJjaCBmaWx0ZXJcbiAqL1xuXG5cbnZhciBMb2FkUG9zdHNNb2RlbCA9IC8qI19fUFVSRV9fKi9fY3JlYXRlQ2xhc3MoXG4vKipcbiAqIENvbnN0cnVjdG9yIGZvciB0aGUgTW9kZWwgY2xhc3Mgd2hpY2ggdGVzdHMgdGhhdCBkYXRhIHdhc1xuICogcGFzc2VkIGludG8gdGhlIGNvbnN0cnVjdG9yIGFuZCB0aGVuIGNhbGxzIHRoZSBgZnJvbUpTT05gXG4gKiBmdW5jdGlvbiB0byBiZWluZyB0cmFuc2xhdGluZyB0aGUgZGF0YVxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gcG9zdHMgQW4gb2JqZWN0IG9mIGRhdGEgdG8gdHJhbnNmb3JtIGFuZCBtb2RlbFxuICogQHBhcmFtICB7U3RyaW5nfSBwb3N0dHlwZSB0aGUgdHlwZSBvZiBwb3N0IHdlJ3JlIGxvYWRpbmdcbiAqL1xuZnVuY3Rpb24gTG9hZFBvc3RzTW9kZWwocG9zdHMsIHBvc3R0eXBlKSB7XG4gIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBMb2FkUG9zdHNNb2RlbCk7XG5cbiAgdGhpcy5wb3N0cyA9IFtdO1xuXG4gIGlmIChwb3N0cy5sZW5ndGggPiAwKSB7XG4gICAgcG9zdHMuZm9yRWFjaChmdW5jdGlvbiAocG9zdCkge1xuICAgICAgX3RoaXMyLnBvc3RzLnB1c2gobmV3IFBvc3RNb2RlbChwb3N0LCBwb3N0dHlwZSkpO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHRoaXMucG9zdHMgPSBuZXcgTm9Qb3N0cygpO1xuICB9XG59KTtcblxuZXhwb3J0IHsgTG9hZFBvc3RzTW9kZWwgYXMgZGVmYXVsdCB9OyIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gJy4uLy4uL1V0aWxzJztcbmltcG9ydCB7IEVWRU5UUyB9IGZyb20gJy4uLy4uL0NvbnN0YW50cyc7XG4vKipcbiAqIElEXG4gKlxuICogQHR5cGUge051bWJlcn1cbiAqIEBpZ25vcmVcbiAqL1xuXG52YXIgaWQgPSAwO1xuLyoqXG4gKiBHZXQgSURcbiAqXG4gKiBCZWNhdXNlIGZpbGUgaXMgbG9hZGVkIG9ubHkgb25jZSwgdGhpcyBmdW5jdGlvblxuICogY2FuIGJlIHVzZWQgdG8gZ2VuZXJhdGUgYSB1bmlxdWUgaWQgZXZlcnkgdGltZVxuICogaXQgaXMgY2FsbGVkLlxuICpcbiAqIEByZXR1cm4ge051bWJlcn0gVW5pcXVlIElEIHZhbHVlXG4gKiBAaWdub3JlXG4gKi9cblxuZnVuY3Rpb24gZ2V0SWQoKSB7XG4gIHJldHVybiBpZCsrO1xufVxuLyoqXG4gKiBSZXNpemUgU2VydmljZVxuICovXG5cblxudmFyIFJlc2l6ZVNlcnZpY2UgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAvKipcbiAgICogUmVzaXplU2VydmljZSBjb25zdHJ1Y3RvciBpbiB3aGljaCB0aGUgYGNhbGxiYWNrc2AgYXJyYXkgaXMgY3JlYXRlZFxuICAgKiBhcyBhIHByb3BlcnR5IG9mIHRoZSBjbGFzcy5cbiAgICovXG4gIGZ1bmN0aW9uIFJlc2l6ZVNlcnZpY2UoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJlc2l6ZVNlcnZpY2UpO1xuXG4gICAgLyoqXG4gICAgICogQW4gYXJyYXkgdG8gYmUgcG9wdWxhdGVkIHdpdGggY2FsbGJhY2sgZnVuY3Rpb25zIHRoYXQgd2lsbCBiZSB0cmlnZ2VyZWQgb24gcmVzaXplXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkge0FycmF5fSBjYWxsYmFja3NcbiAgICAgKi9cbiAgICB0aGlzLmNhbGxiYWNrcyA9IFtdO1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG4gIC8qKlxuICAgKiBAZGVzYyBJbml0aWFsaXplIHRoZSBzaW5nbGV0b24gYnkgYXR0YWNoaW5nIHRoZSBldmVudCBsaXN0ZW5lciB0byB0aGUgd2luZG93XG4gICAqIEBsaXN0ZW5zIHtFdmVudH0gbGlzdGVucyB0byB0aGUgd2luZG93IHJlc2l6ZSBldmVudFxuICAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhSZXNpemVTZXJ2aWNlLCBbe1xuICAgIGtleTogXCJpbml0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihFVkVOVFMuUkVTSVpFLCBkZWJvdW5jZSh0aGlzLm9uUmVzaXplLmJpbmQodGhpcyksIDEwKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBkZXNjIFRoZSByZXNpemUgZXZlbnQgaGFuZGxlci4gSXRlcnRhdGVzIHRocm91Z2ggdGhlIGBjYWxsYmFja2AgYXJyYXkgYW5kIGludm9rZXMgZWFjaCBjYWxsYmFjayBpbiB0aGUgQXJyYXlcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm9uUmVzaXplXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uUmVzaXplKCkge1xuICAgICAgdGhpcy5jYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2suY2FsbGJhY2soKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAZGVzYyBBIGhvb2sgZm9yIHB1c2hpbmcgYSBjYWxsYmFjayBmdW5jdGlvblxuICAgICAqIGludG8gdGhlIGBjYWxsYmFja3NgIGFycmF5LiBBIHVuaXF1ZVxuICAgICAqIElEIHZhbHVlIGZvciB0aGUgY2FsbGJhY2sgaXMgZ2VuZXJhdGVkXG4gICAgICogYW5kIGEgZnVuY3Rpb24gaXMgcmV0dXJuZWQgZm9yIHJlbW92aW5nXG4gICAgICogdGhlIGNhbGxiYWNrIGlmIG5lZWQgYmUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBBIGZ1bmN0aW9uIHRvIGludm9rZSBieSB0aGUgUmVzaXplU2VydmljZVxuICAgICAqIEByZXR1cm4ge0Z1bmN0aW9ufSBgcmVtb3ZlQ2FsbGJhY2tgIEEgZnVuY3Rpb24gd2hpY2ggd2lsbCByZW1vdmUgYW4gZW50cnkgZnJvbSB0aGUgYGNhbGxiYWNrc2AgYXJyYXlcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImFkZENhbGxiYWNrXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZENhbGxiYWNrKGNhbGxiYWNrKSB7XG4gICAgICAvLyBHZW5lcmF0ZSBhbiBpZCBmb3IgdGhlIGNhbGxiYWNrXG4gICAgICB2YXIgaWQgPSBnZXRJZCgpOyAvLyBQdXNoIGZ1bmN0aW9uIGludG8gYXJyYXkgd2l0aCBhIHVuaXF1ZSBpZFxuXG4gICAgICB0aGlzLmNhbGxiYWNrcy5wdXNoKHtcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgICBjYWxsYmFjazogY2FsbGJhY2tcbiAgICAgIH0pOyAvLyBSZXR1cm4gdGhlIHJlbW92ZSBmdW5jdGlvblxuXG4gICAgICByZXR1cm4gdGhpcy5yZW1vdmVDYWxsYmFjay5iaW5kKHRoaXMsIGlkKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRmlsdGVycyB0aHJvdWdoIHRoZSBgY2FsbGJhY2tgIGFycmF5IGFuZCByZW1vdmVzXG4gICAgICogdGhlIGVudHJ5IHRoYXQgY29ycmVzcG9uZHMgdG8gdGhlIGlkIHBhc3NlZFxuICAgICAqIGluIGFzIGFuIGFyZ3VtZW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IGlkIEFuIGlkIHZhbHVlIHRvIGZpbHRlciBieVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicmVtb3ZlQ2FsbGJhY2tcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlQ2FsbGJhY2soaWQpIHtcbiAgICAgIHRoaXMuY2FsbGJhY2tzID0gdGhpcy5jYWxsYmFja3MuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiBpdGVtLmlkICE9PSBpZDtcbiAgICAgIH0pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBSZXNpemVTZXJ2aWNlO1xufSgpO1xuXG5leHBvcnQgeyBSZXNpemVTZXJ2aWNlIGFzIGRlZmF1bHQgfTsiLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICcuLi8uLi9VdGlscyc7XG5pbXBvcnQgeyBFVkVOVFMgfSBmcm9tICcuLi8uLi9Db25zdGFudHMnO1xuLyoqXG4gKiBJRFxuICpcbiAqIEB0eXBlIHtOdW1iZXJ9XG4gKiBAaWdub3JlXG4gKi9cblxudmFyIGlkID0gMDtcbi8qKlxuICogR2V0IElEXG4gKlxuICogQmVjYXVzZSBmaWxlIGlzIGxvYWRlZCBvbmx5IG9uY2UsIHRoaXMgZnVuY3Rpb25cbiAqIGNhbiBiZSB1c2VkIHRvIGdlbmVyYXRlIGEgdW5pcXVlIGlkIGV2ZXJ5IHRpbWVcbiAqIGl0IGlzIGNhbGxlZC5cbiAqXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IFVuaXF1ZSBJRCB2YWx1ZVxuICogQGlnbm9yZVxuICovXG5cbmZ1bmN0aW9uIGdldElkKCkge1xuICByZXR1cm4gaWQrKztcbn1cbi8qKlxuICogU2Nyb2xsIFNlcnZpY2VcbiAqL1xuXG5cbnZhciBTY3JvbGxTZXJ2aWNlID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgLyoqXG4gICAqIFNjcm9sbCBTZXJ2aWNlIGNvbnN0cnVjdG9yIGluIHdoaWNoIHRoZSBgY2FsbGJhY2tzYCBhcnJheSBpcyBjcmVhdGVkXG4gICAqIGFzIGEgcHJvcGVydHkgb2YgdGhlIGNsYXNzLlxuICAgKi9cbiAgZnVuY3Rpb24gU2Nyb2xsU2VydmljZSgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU2Nyb2xsU2VydmljZSk7XG5cbiAgICAvKipcbiAgICAgKiBBbiBhcnJheSB0byBiZSBwb3B1bGF0ZWQgd2l0aCBjYWxsYmFjayBmdW5jdGlvbnMgdGhhdCB3aWxsIGJlIHRyaWdnZXJlZCBvbiBzY3JvbGxcbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSB7QXJyYXl9IGNhbGxiYWNrc1xuICAgICAqL1xuICAgIHRoaXMuY2FsbGJhY2tzID0gW107XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cbiAgLyoqXG4gICAqIEBkZXNjIEluaXRpYWxpemUgdGhlIHNpbmdsZXRvbiBieSBhdHRhY2hpbmcgdGhlIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSB3aW5kb3dcbiAgICogQGxpc3RlbnMge0V2ZW50fSBsaXN0ZW5zIHRvIHRoZSB3aW5kb3cgc2Nyb2xsIGV2ZW50XG4gICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKFNjcm9sbFNlcnZpY2UsIFt7XG4gICAga2V5OiBcImluaXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKEVWRU5UUy5TQ1JPTEwsIGRlYm91bmNlKHRoaXMub25TY3JvbGwuYmluZCh0aGlzKSwgMTApKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQGRlc2MgVGhlIHNjcm9sbCBldmVudCBoYW5kbGVyLiBJdGVyYXRlcyB0aHJvdWdoIHRoZSBgY2FsbGJhY2tgIGFycmF5IGFuZCBpbnZva2VzIGVhY2ggY2FsbGJhY2sgaW4gdGhlIEFycmF5XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJvblNjcm9sbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvblNjcm9sbCgpIHtcbiAgICAgIHRoaXMuY2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrLmNhbGxiYWNrKCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQGRlc2MgQSBob29rIGZvciBwdXNoaW5nIGEgY2FsbGJhY2sgZnVuY3Rpb24gaW50byB0aGUgYGNhbGxiYWNrc2AgYXJyYXkuIEEgdW5pcXVlXG4gICAgICogSUQgdmFsdWUgZm9yIHRoZSBjYWxsYmFjayBpcyBnZW5lcmF0ZWQgYW5kIGEgZnVuY3Rpb24gaXMgcmV0dXJuZWQgZm9yIHJlbW92aW5nXG4gICAgICogdGhlIGNhbGxiYWNrIGlmIG5lZWQgYmUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBBIGZ1bmN0aW9uIHRvIGludm9rZSBieSB0aGUgU2Nyb2xsU2VydmljZVxuICAgICAqIEByZXR1cm4ge0Z1bmN0aW9ufSBgcmVtb3ZlQ2FsbGJhY2tgIEEgZnVuY3Rpb24gd2hpY2ggd2lsbCByZW1vdmUgYW4gZW50cnkgZnJvbSB0aGUgYGNhbGxiYWNrc2AgYXJyYXlcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImFkZENhbGxiYWNrXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZENhbGxiYWNrKGNhbGxiYWNrKSB7XG4gICAgICAvLyBHZW5lcmF0ZSBhbiBpZCBmb3IgdGhlIGNhbGxiYWNrXG4gICAgICB2YXIgaWQgPSBnZXRJZCgpOyAvLyBQdXNoIGZ1bmN0aW9uIGludG8gYXJyYXkgd2l0aCBhIHVuaXF1ZSBpZFxuXG4gICAgICB0aGlzLmNhbGxiYWNrcy5wdXNoKHtcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgICBjYWxsYmFjazogY2FsbGJhY2tcbiAgICAgIH0pOyAvLyBSZXR1cm4gdGhlIHJlbW92ZSBmdW5jdGlvblxuXG4gICAgICByZXR1cm4gdGhpcy5yZW1vdmVDYWxsYmFjay5iaW5kKHRoaXMsIGlkKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRmlsdGVycyB0aHJvdWdoIHRoZSBgY2FsbGJhY2tgIGFycmF5IGFuZCByZW1vdmVzXG4gICAgICogdGhlIGVudHJ5IHRoYXQgY29ycmVzcG9uZHMgdG8gdGhlIGlkIHBhc3NlZFxuICAgICAqIGluIGFzIGFuIGFyZ3VtZW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IGlkIEFuIGlkIHZhbHVlIHRvIGZpbHRlciBieVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicmVtb3ZlQ2FsbGJhY2tcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlQ2FsbGJhY2soaWQpIHtcbiAgICAgIHRoaXMuY2FsbGJhY2tzID0gdGhpcy5jYWxsYmFja3MuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiBpdGVtLmlkICE9PSBpZDtcbiAgICAgIH0pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTY3JvbGxTZXJ2aWNlO1xufSgpO1xuXG5leHBvcnQgeyBTY3JvbGxTZXJ2aWNlIGFzIGRlZmF1bHQgfTsiLCIndXNlIHN0cmljdCc7IC8vIEltcG9ydCBzZXJ2aWNlc1xuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmltcG9ydCBSZXNpemVTZXJ2aWNlIGZyb20gJy4vUmVzaXplU2VydmljZSc7XG5pbXBvcnQgU2Nyb2xsU2VydmljZSBmcm9tICcuL1Njcm9sbFNlcnZpY2UnO1xuLyoqXG4gKiBBIHNpbmdsZXRvbiB3aG9zZSBwcm9wZXJ0aWVzIGFyZSBpbmRpdmlkdWFsIHNlcnZpY2VzLlxuICpcbiAqIEFueSBzZXJ2aWNlIHNpbmdsZXRvbiBzZXJ2aWNlIHRoYXQgbmVlZHMgdG8gYmUgaW5zdGFudGlhdGVkXG4gKiBzaG91bGQgYmUgZG9uZSBzbyBpbiB0aGUgU2VydmljZXMgY2xhc3MuXG4gKlxuICogU2VydmljZXMgc2hvdWxkIG5vdCBpbnRlcmFjdCB3aXRoIHRoZSBET00sIHRoYXQgc2hvdWxkIGJlXG4gKiBsZWZ0IHRvIHRoZSBWaWV3cy4gU2VydmljZXMgY2FuIHNpbXBseSBiZSB1c2VkIHRvIGNvbnNvbGlkYXRlXG4gKiBhbiBleHBlbnNpdmUgZXZlbnQgbGlzdGVuZXIgKCdzY3JvbGwnLCAncmVzaXplJywgZXRjKS4gb3JcbiAqIHRyYWNrIHN0YXRlIChsaWtlIHdoaWNoIG1vZGFsIGlzIG9wZW4gYXQgd2hpY2ggdGltZSkuXG4gKi9cblxudmFyIFNlcnZpY2VzID0gLyojX19QVVJFX18qL19jcmVhdGVDbGFzcyhcbi8qKlxuICogU2VydmljZXMgY29uc3RydWN0b3IgdGhhdCBpbnN0YW50aWF0ZXMgZWFjaCBzZXJ2aWNlIGluZGl2aWR1YWxseS5cbiAqIFRvIGFkZCBhbm90aGVyIHNlcnZpY2VzIGluc3RpYXRlIGl0IGhlcmUuXG4gKi9cbmZ1bmN0aW9uIFNlcnZpY2VzKCkge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU2VydmljZXMpO1xuXG4gIC8qKlxuICAgKiBBIHNlcnZpY2Ugd2hpY2ggbGlzdGVucyB0byB0aGUgYHdpbmRvd2AgcmVzaXplIGV2ZW50IGFuZFxuICAgKiBpbnZva2VzIGFuIGFycmF5IG9mIGNhbGxiYWNrc1xuICAgKlxuICAgKiBAcHJvcGVydHkge09iamVjdH0gUmVzaXplU2VydmljZSBBIHNpbmdsZXRvbiBpbnN0YW5jZSBvZiB0aGUgUmVzaXplU2VydmljZSBjbGFzc1xuICAgKi9cbiAgdGhpcy5SZXNpemVTZXJ2aWNlID0gbmV3IFJlc2l6ZVNlcnZpY2UoKTtcbiAgLyoqXG4gICAqIEEgc2VydmljZSB3aGljaCBsaXN0ZW5zIHRvIHRoZSBgd2luZG93YCBzY3JvbGwgZXZlbnQgYW5kXG4gICAqIGludm9rZXMgYW4gYXJyYXkgb2YgY2FsbGJhY2tzXG4gICAqXG4gICAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBTY3JvbGxTZXJ2aWNlIEEgc2luZ2xldG9uIGluc3RhbmNlIG9mIHRoZSBTY3JvbGxTZXJ2aWNlIGNsYXNzXG4gICAqL1xuXG4gIHRoaXMuU2Nyb2xsU2VydmljZSA9IG5ldyBTY3JvbGxTZXJ2aWNlKCk7XG59KTtcblxuZXhwb3J0IHsgU2VydmljZXMgYXMgZGVmYXVsdCB9OyIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH0sIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHsgdmFsdWU6IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KSwgd3JpdGFibGU6IGZhbHNlIH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmltcG9ydCB7IENMQVNTX05BTUVTLCBFTkRQT0lOVFMsIEVWRU5UUywgTUlTQywgU0VMRUNUT1JTLCBURU1QTEFURVMgfSBmcm9tICcuLi8uLi9Db25zdGFudHMnO1xuaW1wb3J0IHsgTWVzc2FnZUJ1cyB9IGZyb20gJy4uLy4uL1V0aWxzJztcbi8qKlxuICogVGhlIEFQSVJlc3VsdHMgbW9kdWxlIHdoaWNoIGhhbmRsZXMgcG9wdWxhdGluZyBwb3N0IGxpc3RpbmdzIHZpYSBXUCBBUElcbiAqXG4gKiBAY2xhc3MgQVBJUmVzdWx0c1xuICovXG5cbnZhciBBUElSZXN1bHRzID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfTWVzc2FnZUJ1cykge1xuICBfaW5oZXJpdHMoQVBJUmVzdWx0cywgX01lc3NhZ2VCdXMpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoQVBJUmVzdWx0cyk7XG5cbiAgLyoqXG4gICAqIEFQSVJlc3VsdHMgY29uc3RydWN0b3Igd2hpY2ggYXNzaWducyB0aGUgZWxlbWVudCBwYXNzZWQgaW50byB0aGUgY29uc3RydWN0b3JcbiAgICogdG8gdGhlIGB0aGlzLmVsZW1lbnRgIHByb3BlcnR5IGZvciBsYXRlciByZWZlcmVuY2VcbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCAtIFJFUVVJUkVEIC0gdGhlIG1vZHVsZSdzIGNvbnRhaW5lclxuICAgKi9cbiAgZnVuY3Rpb24gQVBJUmVzdWx0cyhlbGVtZW50KSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFQSVJlc3VsdHMpO1xuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKTtcbiAgICAvKipcbiAgICAgKiBSZWZlcmVuY2UgdG8gdGhlIERPTSBlbGVtZW50IHRoYXQgaXMgdGhlIHJvb3Qgb2YgdGhlIGNvbXBvbmVudFxuICAgICAqIEBwcm9wZXJ0eSB7T2JqZWN0fVxuICAgICAqL1xuXG4gICAgX3RoaXMuZWxlbWVudCA9IGVsZW1lbnQ7IC8vIEluaXRpYWxpemUgdGhlIHZpZXdcblxuICAgIF90aGlzLmluaXQoKTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIHZpZXcgYnkgY2FsbGluZyB0aGUgZnVuY3Rpb25zIHRvXG4gICAqIGNyZWF0ZSBET00gcmVmZXJlbmNlcywgc2V0dXAgZXZlbnQgaGFuZGxlcnMgYW5kXG4gICAqIHRoZW4gY3JlYXRlIHRoZSBldmVudCBsaXN0ZW5lcnNcbiAgICpcbiAgICogQHJldHVybiB7T2JqZWN0fSBIZWFkZXIgQSByZWZlcmVuY2UgdG8gdGhlIGN1cnJlbnQgaW5zdGFuY2Ugb2YgdGhlIGNsYXNzXG4gICAqIEBjaGFpbmFibGVcbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoQVBJUmVzdWx0cywgW3tcbiAgICBrZXk6IFwiaW5pdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgdGhpcy5jYWNoZURvbVJlZmVyZW5jZXMoKS5zZXR1cEhhbmRsZXJzKCkuZW5hYmxlKCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogRmluZCBhbGwgbmVjZXNzYXJ5IERPTSBlbGVtZW50cyB1c2VkIGluIHRoZSB2aWV3IGFuZCBjYWNoZSB0aGVtXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IEFQSVJlc3VsdHMgQSByZWZlcmVuY2UgdG8gdGhlIGluc3RhbmNlIG9mIHRoZSBjbGFzc1xuICAgICAqIEBjaGFpbmFibGVcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImNhY2hlRG9tUmVmZXJlbmNlc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjYWNoZURvbVJlZmVyZW5jZXMoKSB7XG4gICAgICB0aGlzLnJlc3VsdHNjb250YWluZXIgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihTRUxFQ1RPUlMuUkVTVUxUU19DT05UQUlORVIpOyAvLyBibG9nIHBvc3RzIGNhbiBiZSBzcGxpdCBpbnRvIHR3byBiYXRjaGVzXG5cbiAgICAgIHRoaXMuc3BsaXQgPSB0aGlzLmVsZW1lbnQuZGF0YXNldC5zcGxpdCAhPT0gJ2ZhbHNlJztcbiAgICAgIHRoaXMucG9zaXRpb24gPSBwYXJzZUludCh0aGlzLmVsZW1lbnQuZGF0YXNldC5wb3NpdGlvbik7XG4gICAgICB0aGlzLmFwcGVuZCA9IHRoaXMuZWxlbWVudC5kYXRhc2V0LmFwcGVuZDsgLy8gdGhlIGxvZ2ljIG9mIHdoZXJlIHRvIHB1dCByZXN1bHRzIGRpZmZlcnMgaWYgdGhlIHBvc3RzIGFyZSBpbiAxIGNvbnRpbmVyIG9yIDJcblxuICAgICAgaWYgKCF0aGlzLnNwbGl0KSB7XG4gICAgICAgIHRoaXMuYmVnaW4gPSAwO1xuICAgICAgICB0aGlzLmN1dG9mZiA9IHBhcnNlSW50KHRoaXMuZWxlbWVudC5kYXRhc2V0LmluY3JlbWVudCk7XG4gICAgICAgIHRoaXMubG9hZG1vcmUgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihTRUxFQ1RPUlMuTE9BRF9NT1JFKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCEhdGhpcy5zcGxpdCAmJiB0aGlzLnBvc2l0aW9uID4gMSkge1xuICAgICAgICB0aGlzLmJlZ2luID0gcGFyc2VJbnQodGhpcy5lbGVtZW50LmRhdGFzZXQuaW5jcmVtZW50KSAvIDI7XG4gICAgICAgIHRoaXMuY3V0b2ZmID0gcGFyc2VJbnQodGhpcy5lbGVtZW50LmRhdGFzZXQuaW5jcmVtZW50KSArIDE7XG4gICAgICAgIHRoaXMucHJpbWFyeSA9IHRoaXMuZWxlbWVudC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU0VMRUNUT1JTLkFQSV9SRVNVTFRTKVswXTtcbiAgICAgICAgdGhpcy5sb2FkbW9yZSA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFNFTEVDVE9SUy5MT0FEX01PUkUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoISF0aGlzLnNwbGl0ICYmIHRoaXMucG9zaXRpb24gPT0gMSkge1xuICAgICAgICB0aGlzLmJlZ2luID0gMDtcbiAgICAgICAgdGhpcy5jdXRvZmYgPSBwYXJzZUludCh0aGlzLmVsZW1lbnQuZGF0YXNldC5pbmNyZW1lbnQpIC8gMjtcbiAgICAgICAgdGhpcy5zZWNvbmRhcnkgPSB0aGlzLmVsZW1lbnQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFNFTEVDVE9SUy5BUElfUkVTVUxUUylbMV07XG4gICAgICAgIHRoaXMubG9hZG1vcmUgPSB0aGlzLnNlY29uZGFyeS5xdWVyeVNlbGVjdG9yKFNFTEVDVE9SUy5MT0FEX01PUkUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQmluZCBldmVudCBoYW5kbGVycyB3aXRoIHRoZSBwcm9wZXIgY29udGV4dCBvZiBgdGhpc2AuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IEhlYWRlciBBIHJlZmVyZW5jZSB0byB0aGUgY3VycmVudCBpbnN0YW5jZSBvZiB0aGUgY2xhc3NcbiAgICAgKiBAY2hhaW5hYmxlXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzZXR1cEhhbmRsZXJzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldHVwSGFuZGxlcnMoKSB7XG4gICAgICB0aGlzLm9uUmVxdWVzdE1hZGVIYW5kbGVyID0gdGhpcy5vblJlcXVlc3RNYWRlLmJpbmQodGhpcyk7XG4gICAgICB0aGlzLm9uVXBkYXRlUmVzcG9uc2VIYW5kbGVyID0gdGhpcy5vblVwZGF0ZVJlc3BvbnNlLmJpbmQodGhpcyk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBldmVudCBsaXN0ZW5lcnMgdG8gZW5hYmxlIGludGVyYWN0aW9uIHdpdGggdmlld1xuICAgICAqXG4gICAgICogQHJldHVybiB7T2JqZWN0fSBBUElSZXN1bHRzIEEgcmVmZXJlbmNlIHRvIHRoZSBpbnN0YW5jZSBvZiB0aGUgY2xhc3NcbiAgICAgKiBAY2hhaW5hYmxlXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJlbmFibGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZW5hYmxlKCkge1xuICAgICAgaWYgKCF0aGlzLnNwbGl0IHx8ICEhdGhpcy5zcGxpdCAmJiB0aGlzLnBvc2l0aW9uID4gMSkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoRVZFTlRTLlJFUVVFU1RfTUFERSwgdGhpcy5vblJlcXVlc3RNYWRlSGFuZGxlcik7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKEVWRU5UUy5SRVNVTFRTX1JFVFVSTkVELCB0aGlzLm9uVXBkYXRlUmVzcG9uc2VIYW5kbGVyKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEb2VzIHN0dWZmIG9uY2UgcmVxdWVzdCBmb3IgbmV3IGl0ZW1zIGlzIG1hZGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IC0gdGhlIGV2ZW50IG9iamVjdFxuICAgICAqIEByZXR1cm4ge09iamVjdH0gQVBJUmVzdWx0cyBBIHJlZmVyZW5jZSB0byB0aGUgaW5zdGFuY2Ugb2YgdGhlIGNsYXNzXG4gICAgICogQGNoYWluYWJsZVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwib25SZXF1ZXN0TWFkZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvblJlcXVlc3RNYWRlKGV2ZW50KSB7XG4gICAgICB0aGlzLnNlbmRFdmVudChFVkVOVFMuUkVRVUVTVF9NQURFLCB7fSwgdGhpcy5sb2FkbW9yZSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogRG9lcyBzdHVmZiBvbiB1cGRhdGUgQVBJIHJlcXVlc3RcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IC0gdGhlIGV2ZW50IG9iamVjdFxuICAgICAqIEByZXR1cm4ge09iamVjdH0gQVBJUmVzdWx0cyBBIHJlZmVyZW5jZSB0byB0aGUgaW5zdGFuY2Ugb2YgdGhlIGNsYXNzXG4gICAgICogQGNoYWluYWJsZVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwib25VcGRhdGVSZXNwb25zZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvblVwZGF0ZVJlc3BvbnNlKGV2ZW50KSB7XG4gICAgICB0aGlzLmFwcGVuZEFQSVJlc3VsdHMoZXZlbnQuZGV0YWlsKTtcblxuICAgICAgaWYgKCF0aGlzLnNwbGl0IHx8ICEhdGhpcy5zcGxpdCAmJiB0aGlzLnBvc2l0aW9uID4gMSkge1xuICAgICAgICB0aGlzLnNlbmRFdmVudChFVkVOVFMuVVBEQVRFX1BPU1RfQ09VTlQsIGV2ZW50LmRldGFpbC5oZWFkZXJzLmdldChFTkRQT0lOVFMuV1BBUElUT1RBTCksIHRoaXMubG9hZG1vcmUpO1xuICAgICAgfSAvLyB3aGVuIHRoZSByZXN1bHRzIGFyZSBzcGxpdCBiZXR3ZWVuIHR3byBjb250YWluZXJzLCBrZWVwIGVhY2ggb3RoZXIgdXBkYXRlZFxuXG5cbiAgICAgIHZhciBkZXRhaWwgPSBldmVudC5kZXRhaWw7XG5cbiAgICAgIGlmICghIXRoaXMuc3BsaXQgJiYgdGhpcy5wb3NpdGlvbiA+IDEgJiYgZXZlbnQuZGV0YWlsLnByaW1hcnkgPCAxKSB7XG4gICAgICAgIHRoaXMucHJpbWFyeS5kYXRhc2V0LmFwcGVuZCA9IHRoaXMuYXBwZW5kO1xuICAgICAgICBkZXRhaWwuc2Vjb25kYXJ5ID0gZXZlbnQuZGV0YWlsLnNlY29uZGFyeSArIDE7XG4gICAgICAgIHRoaXMuc2VuZEV2ZW50KEVWRU5UUy5SRVNVTFRTX1JFVFVSTkVELCBkZXRhaWwsIHRoaXMucHJpbWFyeSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghIXRoaXMuc3BsaXQgJiYgdGhpcy5wb3NpdGlvbiA9PSAxICYmIGV2ZW50LmRldGFpbC5zZWNvbmRhcnkgPCAxKSB7XG4gICAgICAgIHRoaXMuc2Vjb25kYXJ5LmRhdGFzZXQuYXBwZW5kID0gZXZlbnQuZGV0YWlsLnByaW1hcnkgPT09IDAgPyBmYWxzZSA6IHRoaXMuZWxlbWVudC5kYXRhc2V0LmFwcGVuZDtcbiAgICAgICAgdGhpcy5zZWNvbmRhcnkuZGF0YXNldC5vZmZzZXQgPSBldmVudC5kZXRhaWwucHJpbWFyeSA9PT0gMCA/IDAgOiB0aGlzLmVsZW1lbnQuZGF0YXNldC5vZmZzZXQ7XG4gICAgICAgIHRoaXMuc2Vjb25kYXJ5LmRhdGFzZXQudGVybSA9IHRoaXMuZWxlbWVudC5kYXRhc2V0LnRlcm07XG4gICAgICAgIHRoaXMuc2Vjb25kYXJ5LmRhdGFzZXQuc2VhcmNoID0gdGhpcy5lbGVtZW50LmRhdGFzZXQuc2VhcmNoO1xuICAgICAgICB0aGlzLnNlY29uZGFyeS5kYXRhc2V0LmV4Y2x1ZGUgPSB0aGlzLmVsZW1lbnQuZGF0YXNldC5leGNsdWRlO1xuICAgICAgICBkZXRhaWwucHJpbWFyeSA9IGV2ZW50LmRldGFpbC5wcmltYXJ5ICsgMTtcbiAgICAgICAgdGhpcy5zZW5kRXZlbnQoRVZFTlRTLlJFU1VMVFNfUkVUVVJORUQsIGRldGFpbCwgdGhpcy5zZWNvbmRhcnkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQXBwZW5kcy9SZXBsYWNlcyBIVE1MIHRvIHJlc3VsdHMgY29udGFpbmVyXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGV0YWlsIC0gcmVzdWx0cyBmcm9tIFdQIEFQSVxuICAgICAqIEByZXR1cm4ge09iamVjdH0gQVBJUmVzdWx0cyBBIHJlZmVyZW5jZSB0byB0aGUgaW5zdGFuY2Ugb2YgdGhlIGNsYXNzXG4gICAgICogQGNoYWluYWJsZVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiYXBwZW5kQVBJUmVzdWx0c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhcHBlbmRBUElSZXN1bHRzKGRldGFpbCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciByZXN1bHRzID0gZGV0YWlsLnJlc3BvbnNlO1xuICAgICAgdmFyIHRlbXBsYXRlID0gZGV0YWlsLnRlbXBsYXRlO1xuICAgICAgdmFyIG5vcmVzdWx0cyA9IFRFTVBMQVRFUy5OT19SRVNVTFRTO1xuICAgICAgdmFyIGFwcGVuZCA9IHRoaXMuZWxlbWVudC5kYXRhc2V0LmFwcGVuZCA9PT0gTUlTQy5UUlVFO1xuICAgICAgdmFyIGJlZ2luID0gYXBwZW5kID8gMCA6IHRoaXMuYmVnaW47XG4gICAgICB2YXIgSFRNTCA9ICcnO1xuXG4gICAgICBpZiAocmVzdWx0cy5wb3N0cy5tZXNzYWdlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKCFhcHBlbmQgJiB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVTLkZJUlNUX0JBVENIKSkge1xuICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVTLkZJUlNUX0JBVENIKTtcbiAgICAgICAgfVxuXG4gICAgICAgIEhUTUwgPSByZXN1bHRzLnBvc3RzLnNsaWNlKGJlZ2luLCB0aGlzLmN1dG9mZikubWFwKGZ1bmN0aW9uIChwb3N0LCBpKSB7XG4gICAgICAgICAgcmV0dXJuIHRlbXBsYXRlKHBvc3QsIGksIGFwcGVuZCk7XG4gICAgICAgIH0pLmpvaW4oJycpO1xuXG4gICAgICAgIGlmICghdGhpcy5zcGxpdCAmJiBhcHBlbmQgfHwgISF0aGlzLnNwbGl0ICYmIGFwcGVuZCAmJiB0aGlzLnBvc2l0aW9uID4gMSkge1xuICAgICAgICAgIHRoaXMucmVzdWx0c2NvbnRhaW5lci5pbm5lckhUTUwgPSB0aGlzLnJlc3VsdHNjb250YWluZXIuaW5uZXJIVE1MICsgSFRNTDtcbiAgICAgICAgfSBlbHNlIGlmICghYXBwZW5kKSB7XG4gICAgICAgICAgdGhpcy5yZXN1bHRzY29udGFpbmVyLmlubmVySFRNTCA9IEhUTUw7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMyLnNlbmRFdmVudChFVkVOVFMuVVBEQVRFX0lOX1ZJRVdQT1JUX01PRFVMRVMsIHt9LCBkb2N1bWVudC5ib2R5KTtcbiAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgdGhpcy5zZW5kRXZlbnQoRVZFTlRTLlVQREFURV9TRVRUSU5HUywgdHJ1ZSwgdGhpcy5lbGVtZW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVzdWx0c2NvbnRhaW5lci5pbm5lckhUTUwgPSBub3Jlc3VsdHMocmVzdWx0cy5wb3N0cy5tZXNzYWdlKTtcbiAgICAgICAgdGhpcy5zZW5kRXZlbnQoRVZFTlRTLlVQREFURV9TRVRUSU5HUywgZmFsc2UsIHRoaXMuZWxlbWVudCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBBUElSZXN1bHRzO1xufShNZXNzYWdlQnVzKTtcblxuZXhwb3J0IHsgQVBJUmVzdWx0cyBhcyBkZWZhdWx0IH07IiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfSwgX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwgeyB2YWx1ZTogT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pLCB3cml0YWJsZTogZmFsc2UgfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuaW1wb3J0IHsgQVJJQSwgQ0xBU1NfTkFNRVMsIEVWRU5UUywgU0VMRUNUT1JTIH0gZnJvbSAnLi4vLi4vQ29uc3RhbnRzJztcbmltcG9ydCB7IGNsb3Nlc3QsIGhhc2hvdmVyLCBNZXNzYWdlQnVzIH0gZnJvbSAnLi4vLi4vVXRpbHMnO1xuLyoqXG4gKiBBIGNsYXNzIGZvciB0aGUgRHJvcGRvd24gbW9kdWxlXG4gKi9cblxudmFyIERyb3Bkb3duID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfTWVzc2FnZUJ1cykge1xuICBfaW5oZXJpdHMoRHJvcGRvd24sIF9NZXNzYWdlQnVzKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKERyb3Bkb3duKTtcblxuICAvKipcbiAgICogQ29uc3RydWN0b3IgZnVuY3Rpb24gb2YgdGhlIERyb3Bkb3duIGNsYXNzLiBNdXN0IHJlY2VpdmUgb25lIGFyZ3VtZW50cywgYSBET01cbiAgICogbm9kZSByZXByZXNlbnRpbmcgYSBkZWxpdmVyeSB0aWNrZXQuXG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgLSBSRVFVSVJFRCAtIHRoZSBtb2R1bGUncyBjb250YWluZXJcbiAgICovXG4gIGZ1bmN0aW9uIERyb3Bkb3duKGVsZW1lbnQpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRHJvcGRvd24pO1xuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKTtcbiAgICAvKipcbiAgICAgKiBET00gbm9kZSB0aGF0IGlzIHBhc3NlZCBpbnRvIHRoZSBjb25zdHJ1Y3RvclxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHtPYmplY3R9IGVsZW1lbnQgRE9NIG5vZGUgdGhhdCBpcyBwYXNzZWQgaW50byB0aGUgY29uc3RydWN0b3JcbiAgICAgKi9cblxuICAgIF90aGlzLmVsZW1lbnQgPSBlbGVtZW50OyAvLyBJbml0aWFsaXplIHRoZSB2aWV3XG5cbiAgICBfdGhpcy5pbml0KCk7XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSB2aWV3IGJ5IGNhbGxpbmcgdGhlIGZ1bmN0aW9ucyB0b1xuICAgKiBjcmVhdGUgRE9NIHJlZmVyZW5jZXMsIHNldHVwIGV2ZW50IGhhbmRsZXJzIGFuZFxuICAgKiB0aGVuIGNyZWF0ZSB0aGUgZXZlbnQgbGlzdGVuZXJzXG4gICAqXG4gICAqIEByZXR1cm4ge09iamVjdH0gRHJvcGRvd24gQSByZWZlcmVuY2UgdG8gdGhlIGN1cnJlbnQgaW5zdGFuY2Ugb2YgdGhlIGNsYXNzXG4gICAqIEBjaGFpbmFibGVcbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoRHJvcGRvd24sIFt7XG4gICAga2V5OiBcImluaXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgIHRoaXMuY2FjaGVEb21SZWZlcmVuY2VzKCkuc2V0dXBIYW5kbGVycygpLmVuYWJsZSgpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhY2hlIERPTSBSZWZlcmVuY2VzXG4gICAgICpcbiAgICAgKiBGaW5kIGFsbCBuZWNlc3NhcnkgRE9NIGVsZW1lbnRzIHVzZWQgaW4gdGhlIHZpZXcgYW5kIGNhY2hlIHRoZW1cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge09iamVjdH0gSGVhZGVyIEEgcmVmZXJlbmNlIHRvIHRoZSBjdXJyZW50IGluc3RhbmNlIG9mIHRoZSBjbGFzc1xuICAgICAqIEBjaGFpbmFibGVcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImNhY2hlRG9tUmVmZXJlbmNlc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjYWNoZURvbVJlZmVyZW5jZXMoKSB7XG4gICAgICB0aGlzLmNsaWNrYWJsZSA9IHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRVMuQ0xJQ0spID8gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoU0VMRUNUT1JTLkRST1BET1dOX1RPR0dMRSkgOiBudWxsO1xuICAgICAgdGhpcy5jbG9zZSA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFNFTEVDVE9SUy5DTE9TRSk7XG4gICAgICB0aGlzLmRyb3Bkb3ducyA9IHRoaXMuZWxlbWVudC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU0VMRUNUT1JTLkRST1BET1dOKTtcbiAgICAgIHRoaXMuaG92ZXJhYmxlID0gdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FUy5IT1ZFUikgPyB0aGlzLmVsZW1lbnQgOiBudWxsO1xuICAgICAgdGhpcy5wYXJlbnQgPSB0aGlzLmVsZW1lbnQucGFyZW50RWxlbWVudDsgLy8gY2hlY2sgd2hldGhlciB0aGUgaG92ZXIgZXZlbnQgaXMgcG9zc2libGUgdXNpbmcgdGhlIGhvdmVyIG1lZGlhIHF1ZXJ5XG5cbiAgICAgIHRoaXMuaGFzSG92ZXJTdGF0ZSA9IGhhc2hvdmVyKCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQmluZCBldmVudCBoYW5kbGVycyB3aXRoIHRoZSBwcm9wZXIgY29udGV4dCBvZiBgdGhpc2AuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IERyb3Bkb3duIEEgcmVmZXJlbmNlIHRvIHRoZSBjdXJyZW50IGluc3RhbmNlIG9mIHRoZSBjbGFzc1xuICAgICAqIEBjaGFpbmFibGVcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInNldHVwSGFuZGxlcnNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0dXBIYW5kbGVycygpIHtcbiAgICAgIHRoaXMub3BlbkRyb3Bkb3duSGFuZGxlciA9IHRoaXMub3BlbkRyb3Bkb3duLmJpbmQodGhpcyk7XG4gICAgICB0aGlzLmNsb3NlRHJvcGRvd25IYW5kbGVyID0gdGhpcy5jbG9zZURyb3Bkb3duLmJpbmQodGhpcyk7XG4gICAgICB0aGlzLmNsb3NlRHJvcGRvd25Gcm9tT3V0c2lkZUhhbmRsZXIgPSB0aGlzLmNsb3NlRHJvcGRvd25Gcm9tT3V0c2lkZS5iaW5kKHRoaXMpO1xuICAgICAgdGhpcy50b2dnbGVEcm9wZG93bkhhbmRsZXIgPSB0aGlzLnRvZ2dsZURyb3Bkb3duLmJpbmQodGhpcyk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGV2ZW50IGhhbmRsZXJzIHRvIGVuYWJsZSBpbnRlcmFjdGlvbiB3aXRoIHZpZXdcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge09iamVjdH0gRHJvcGRvd24gQSByZWZlcmVuY2UgdG8gdGhlIGN1cnJlbnQgaW5zdGFuY2Ugb2YgdGhlIGNsYXNzXG4gICAgICogQGNoYWluYWJsZVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZW5hYmxlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGVuYWJsZSgpIHtcbiAgICAgIGlmICh0aGlzLmNsaWNrYWJsZSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLmNsaWNrYWJsZS5hZGRFdmVudExpc3RlbmVyKEVWRU5UUy5DTElDSywgdGhpcy50b2dnbGVEcm9wZG93bkhhbmRsZXIpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5ob3ZlcmFibGUgIT09IG51bGwpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFzSG92ZXJTdGF0ZSkge1xuICAgICAgICAgIHRoaXMuaG92ZXJhYmxlLmFkZEV2ZW50TGlzdGVuZXIoRVZFTlRTLk1PVVNFT1ZFUiwgdGhpcy5vcGVuRHJvcGRvd25IYW5kbGVyKTtcbiAgICAgICAgICB0aGlzLmhvdmVyYWJsZS5hZGRFdmVudExpc3RlbmVyKEVWRU5UUy5NT1VTRU9VVCwgdGhpcy5jbG9zZURyb3Bkb3duSGFuZGxlcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5ob3ZlcmFibGUuYWRkRXZlbnRMaXN0ZW5lcihFVkVOVFMuQ0xJQ0ssIHRoaXMudG9nZ2xlRHJvcGRvd25IYW5kbGVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5jbG9zZSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLmNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoRVZFTlRTLkNMSUNLLCB0aGlzLmNsb3NlRHJvcGRvd25IYW5kbGVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIGNsb3NlcyBmcm9tIGNsaWNrIG5vdCBpbiBkcm9wZG93blxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IC0gdGhlIGV2ZW50IG9iamVjdFxuICAgICAqIEByZXR1cm4ge09iamVjdH0gRHJvcGRvd24gQSByZWZlcmVuY2UgdG8gdGhlIGN1cnJlbnQgaW5zdGFuY2Ugb2YgdGhlIGNsYXNzXG4gICAgICogQGNoYWluYWJsZVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiY2xvc2VEcm9wZG93bkZyb21PdXRzaWRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNsb3NlRHJvcGRvd25Gcm9tT3V0c2lkZShldmVudCkge1xuICAgICAgaWYgKGNsb3Nlc3QoZXZlbnQudGFyZ2V0LCBTRUxFQ1RPUlMuRFJPUERPV04pICE9PSB0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5jbG9zZURyb3Bkb3duKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBjbG9zZXMgZHJvcGRvd25cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge09iamVjdH0gRHJvcGRvd24gQSByZWZlcmVuY2UgdG8gdGhlIGN1cnJlbnQgaW5zdGFuY2Ugb2YgdGhlIGNsYXNzXG4gICAgICogQGNoYWluYWJsZVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiY2xvc2VEcm9wZG93blwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjbG9zZURyb3Bkb3duKCkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmRyb3Bkb3ducy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgYnV0dG9uVGFyZ2V0ID0gdGhpcy5kcm9wZG93bnNbaV0ucXVlcnlTZWxlY3RvcihTRUxFQ1RPUlMuRFJPUERPV05fVE9HR0xFKTtcbiAgICAgICAgYnV0dG9uVGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRVMuT1BFTik7XG4gICAgICAgIGJ1dHRvblRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRVMuT1BFTik7XG4gICAgICAgIHZhciBwYW5lbFRhcmdldCA9IGJ1dHRvblRhcmdldC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoU0VMRUNUT1JTLkRST1BET1dOX0NPTlRFTlQpO1xuXG4gICAgICAgIGlmIChwYW5lbFRhcmdldC5xdWVyeVNlbGVjdG9yQWxsKFNFTEVDVE9SUy5ORVNURUQpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICB2YXIgcGFuZWxUYXJnZXRzID0gYnV0dG9uVGFyZ2V0LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChTRUxFQ1RPUlMuRFJPUERPV05fQ09OVEVOVCArIFNFTEVDVE9SUy5ORVNURUQpO1xuXG4gICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHBhbmVsVGFyZ2V0cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHBhbmVsVGFyZ2V0c1tfaV0uY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FUy5PUEVORUQpO1xuXG4gICAgICAgICAgICBwYW5lbFRhcmdldHNbX2ldLnNldEF0dHJpYnV0ZShBUklBLkhJRERFTiwgJ3RydWUnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FUy5PUEVOKTtcbiAgICAgICAgcGFuZWxUYXJnZXQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FUy5PUEVORUQpO1xuICAgICAgICBwYW5lbFRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVTLkZBREUpO1xuICAgICAgICBwYW5lbFRhcmdldC5zZXRBdHRyaWJ1dGUoQVJJQS5ISURERU4sICd0cnVlJyk7XG4gICAgICAgIGJ1dHRvblRhcmdldC5zZXRBdHRyaWJ1dGUoQVJJQS5FWFBBTkRFRCwgJ2ZhbHNlJyk7XG4gICAgICB9XG5cbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcihFVkVOVFMuQ0xJQ0ssIHRoaXMuY2xvc2VEcm9wZG93bkZyb21PdXRzaWRlSGFuZGxlciwgdHJ1ZSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogb3BlbnMgZHJvcGRvd25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IC0gdGhlIGV2ZW50IG9iamVjdFxuICAgICAqIEByZXR1cm4ge09iamVjdH0gRHJvcGRvd24gQSByZWZlcmVuY2UgdG8gdGhlIGN1cnJlbnQgaW5zdGFuY2Ugb2YgdGhlIGNsYXNzXG4gICAgICogQGNoYWluYWJsZVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwib3BlbkRyb3Bkb3duXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9wZW5Ecm9wZG93bihldmVudCkge1xuICAgICAgdmFyIGJ1dHRvblRhcmdldCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFNFTEVDVE9SUy5EUk9QRE9XTl9UT0dHTEUpO1xuICAgICAgdmFyIHRhcmdldCA9IGV2ZW50LnR5cGUgPT09IEVWRU5UUy5DTElDSyA/IGJ1dHRvblRhcmdldCA6IHRoaXMuZWxlbWVudDtcblxuICAgICAgaWYgKHRhcmdldCAhPT0gbnVsbCAmJiBidXR0b25UYXJnZXQgIT09IG51bGwgJiYgdGhpcy5lbGVtZW50LmNvbnRhaW5zKGJ1dHRvblRhcmdldCkpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFzSG92ZXJTdGF0ZSAmJiBldmVudC50eXBlICE9PSBFVkVOVFMuQ0xJQ0spIHtcbiAgICAgICAgICB0aGlzLmNsb3NlRHJvcGRvd24oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVTLk9QRU4pO1xuICAgICAgICB2YXIgcGFuZWxUYXJnZXQgPSBidXR0b25UYXJnZXQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKFNFTEVDVE9SUy5EUk9QRE9XTl9DT05URU5UKTtcblxuICAgICAgICBpZiAocGFuZWxUYXJnZXQucXVlcnlTZWxlY3RvckFsbChTRUxFQ1RPUlMuTkVTVEVEKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgdmFyIHBhbmVsVGFyZ2V0cyA9IGJ1dHRvblRhcmdldC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU0VMRUNUT1JTLkRST1BET1dOX0NPTlRFTlQgKyBTRUxFQ1RPUlMuTkVTVEVEKTtcblxuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFuZWxUYXJnZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwYW5lbFRhcmdldHNbaV0uY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FUy5PUEVORUQpO1xuICAgICAgICAgICAgcGFuZWxUYXJnZXRzW2ldLnNldEF0dHJpYnV0ZShBUklBLkhJRERFTiwgJ2ZhbHNlJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRVMuT1BFTik7XG4gICAgICAgIHBhbmVsVGFyZ2V0LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRVMuT1BFTkVEKTtcbiAgICAgICAgcGFuZWxUYXJnZXQuc2V0QXR0cmlidXRlKEFSSUEuSElEREVOLCAnZmFsc2UnKTtcblxuICAgICAgICBpZiAocGFuZWxUYXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVTLlNVQl9NRU5VKSkge1xuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcGFuZWxUYXJnZXQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FUy5GQURFKTtcbiAgICAgICAgICB9LCA1KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvblRhcmdldC5zZXRBdHRyaWJ1dGUoQVJJQS5FWFBBTkRFRCwgJ3RydWUnKTtcblxuICAgICAgICBpZiAodGhpcy5jbG9zZSA9PT0gbnVsbCAmJiB0aGlzLmhhc0hvdmVyU3RhdGUpIHtcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoRVZFTlRTLkNMSUNLLCB0aGlzLmNsb3NlRHJvcGRvd25Gcm9tT3V0c2lkZUhhbmRsZXIsIHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIHRvZ2dsZXMgZHJvcGRvd25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IC0gdGhlIGV2ZW50IG9iamVjdFxuICAgICAqIEByZXR1cm4ge09iamVjdH0gRHJvcGRvd24gQSByZWZlcmVuY2UgdG8gdGhlIGN1cnJlbnQgaW5zdGFuY2Ugb2YgdGhlIGNsYXNzXG4gICAgICogQGNoYWluYWJsZVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidG9nZ2xlRHJvcGRvd25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9nZ2xlRHJvcGRvd24oZXZlbnQpIHtcbiAgICAgIHZhciBzZWxlY3RlZCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFNFTEVDVE9SUy5EUk9QRE9XTl9UT0dHTEUpO1xuXG4gICAgICBpZiAoIXRoaXMuaGFzSG92ZXJTdGF0ZSAmJiBzZWxlY3RlZCA9PT0gZXZlbnQudGFyZ2V0KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGlmICghc2VsZWN0ZWQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVTLk9QRU4pKSB7XG4gICAgICAgIHRoaXMub3BlbkRyb3Bkb3duKGV2ZW50KTtcbiAgICAgICAgdGhpcy5zZW5kRXZlbnQoRVZFTlRTLkRST1BET1dOX0NIQU5HRUQsIENMQVNTX05BTUVTLk9QRU5FRCwgdGhpcy5wYXJlbnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jbG9zZURyb3Bkb3duKCk7XG4gICAgICAgIHRoaXMuc2VuZEV2ZW50KEVWRU5UUy5EUk9QRE9XTl9DSEFOR0VELCBDTEFTU19OQU1FUy5DTE9TRUQsIHRoaXMucGFyZW50KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIERyb3Bkb3duO1xufShNZXNzYWdlQnVzKTtcblxuZXhwb3J0IHsgRHJvcGRvd24gYXMgZGVmYXVsdCB9OyIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5pbXBvcnQgeyBpc3Njcm9sbGVkaW50b3ZpZXcgfSBmcm9tICcuLi8uLi9VdGlscyc7XG5pbXBvcnQgeyBDTEFTU19OQU1FUywgRVZFTlRTLCBNSVNDLCBTRUxFQ1RPUlMgfSBmcm9tICcuLi8uLi9Db25zdGFudHMnO1xuLyoqXG4gKiBJbiBWaWV3cG9ydFxuICovXG5cbnZhciBJblZpZXdwb3J0ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yIGZvciBpbnZpZXdwb3J0IHdoaWNoIHNpbXBseSBhc3NpZ25zIHRoZSBTY3JvbGxTZXJ2aWNlXG4gICAqIHRvIGEgcHJvcGVydHkgb24gdGhlIGNvbnRydWN0b3IgZm9yIHJlZmVyZW5jZS5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IFNlcnZpY2VzIHZhcmlvdXMgc2VydmljZXMsIHBhc3NlZCBpbiBhcyBwYXJhbVxuICAgKi9cbiAgZnVuY3Rpb24gSW5WaWV3cG9ydChTZXJ2aWNlcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJblZpZXdwb3J0KTtcblxuICAgIC8qKlxuICAgICAqIFJlZmVyZW5jZSB0byB0aGUgU2Nyb2xsU2VydmljZSBzaW5nbGV0b25cbiAgICAgKiBAcHJvcGVydHkge09iamVjdH1cbiAgICAgKi9cbiAgICB0aGlzLlNjcm9sbFNlcnZpY2UgPSBTZXJ2aWNlcy5TY3JvbGxTZXJ2aWNlOyAvLyBJbml0aWFsaXplIHRoZSB2aWV3XG5cbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIHZpZXcgYnkgY2FsbGluZyB0aGUgZnVuY3Rpb25zIHRvXG4gICAqIGNyZWF0ZSBET00gcmVmZXJlbmNlcywgc2V0dXAgZXZlbnQgaGFuZGxlcnMgYW5kXG4gICAqIHRoZW4gY3JlYXRlIHRoZSBldmVudCBsaXN0ZW5lcnNcbiAgICpcbiAgICogQHJldHVybiB7T2JqZWN0fSBBIHJlZmVyZW5jZSB0byB0aGUgY3VycmVudCBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzXG4gICAqIEBjaGFpbmFibGVcbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoSW5WaWV3cG9ydCwgW3tcbiAgICBrZXk6IFwiaW5pdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgdGhpcy5jYWNoZURvbVJlZmVyZW5jZXMoKS5zZXR1cEhhbmRsZXJzKCkuZW5hYmxlKCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogRmluZCBhbGwgbmVjZXNzYXJ5IERPTSBlbGVtZW50cyB1c2VkIGluIHRoZSB2aWV3IGFuZCBjYWNoZSB0aGVtXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IEEgcmVmZXJlbmNlIHRvIHRoZSBjdXJyZW50IGluc3RhbmNlIG9mIHRoaXMgY2xhc3NcbiAgICAgKiBAY2hhaW5hYmxlXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJjYWNoZURvbVJlZmVyZW5jZXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2FjaGVEb21SZWZlcmVuY2VzKCkge1xuICAgICAgLyoqXG4gICAgICAgKiBBbGwgRE9NIGVsZW1lbnRzIHdpdGggdGhlIGBkYXRhLXZpc2libGVgIGF0dHJpYnV0ZVxuICAgICAgICogQHByb3BlcnR5IHtOb2RlTGlzdH1cbiAgICAgICAqL1xuICAgICAgdGhpcy5tb2R1bGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChTRUxFQ1RPUlMuREFUQV9WSVNJQkxFKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBCaW5kIGV2ZW50IGhhbmRsZXJzIHdpdGggdGhlIHByb3BlciBjb250ZXh0IG9mIGB0aGlzYC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge09iamVjdH0gQSByZWZlcmVuY2UgdG8gdGhlIGN1cnJlbnQgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzc1xuICAgICAqIEBjaGFpbmFibGVcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInNldHVwSGFuZGxlcnNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0dXBIYW5kbGVycygpIHtcbiAgICAgIC8qKlxuICAgICAgICogQSByZWZlcmVuY2UgdG8gdGhlIGBvblNjcm9sbGAgZnVuY3Rpb24gd2l0aCB0aGUgcHJvcGVyXG4gICAgICAgKiBjb250ZXh0IGJvdW5kIHRvIHRoZSBJblZpZXdwb3J0IGNsYXNzLlxuICAgICAgICpcbiAgICAgICAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259XG4gICAgICAgKi9cbiAgICAgIHRoaXMub25TY3JvbGxIYW5kbGVyID0gdGhpcy5vblNjcm9sbC5iaW5kKHRoaXMpO1xuICAgICAgLyoqXG4gICAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgYHVwZGF0ZU1vZHVsZXNgIGZ1bmN0aW9uIHdpdGggdGhlIHByb3BlclxuICAgICAgICogY29udGV4dCBib3VuZCB0byB0aGUgSW5WaWV3cG9ydCBjbGFzcy5cbiAgICAgICAqXG4gICAgICAgKiBAcHJvcGVydHkge0Z1bmN0aW9ufVxuICAgICAgICovXG5cbiAgICAgIHRoaXMub25Nb2R1bGVVcGRhdGVIYW5kbGVyID0gdGhpcy51cGRhdGVNb2R1bGVzLmJpbmQodGhpcyk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGV2ZW50IGhhbmRsZXJzIHRvIGVuYWJsZSBpbnRlcmFjdGlvbiB3aXRoIHZpZXdcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge09iamVjdH0gQSByZWZlcmVuY2UgdG8gdGhlIGN1cnJlbnQgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzc1xuICAgICAqIEBjaGFpbmFibGVcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImVuYWJsZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBlbmFibGUoKSB7XG4gICAgICAvLyBDYWxsIHNjcm9sbCBoYW5kbGVyIG9uIGxvYWQgdG8gZ2V0IGluaXRpYWwgdmlld2FibGUgZWxlbWVudHNcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KHRoaXMub25TY3JvbGxIYW5kbGVyLCAzMDApOyAvLyBBZGQgdG8gU2Nyb2xsU2VyaXZlIGNhbGxiYWNrc1xuXG4gICAgICB0aGlzLlNjcm9sbFNlcnZpY2UuYWRkQ2FsbGJhY2sodGhpcy5vblNjcm9sbEhhbmRsZXIpO1xuICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKEVWRU5UUy5VUERBVEVfSU5fVklFV1BPUlRfTU9EVUxFUywgdGhpcy5vbk1vZHVsZVVwZGF0ZUhhbmRsZXIpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEEgZnVuY3Rpb24gd2hpY2ggbG9vcHMgb3ZlciB0aGUgY3VycmVudCBtb2R1bGVzIGFuZCBkZXRlcm1pbmVzXG4gICAgICogd2hpY2ggYXJlIGN1cnJlbnRseSBpbiB0aGUgdmlld3BvcnQuIERlcGVuZGluZyBvbiB3aGV0aGVyIG9yXG4gICAgICogbm90IHRoZXkgYXJlIHZpc2libGUgYSBkYXRhIGF0dHJpYnV0ZSBib29sZWFuIGlzIHRvZ2dsZWRcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge09iamVjdH0gQSByZWZlcmVuY2UgdG8gdGhlIGN1cnJlbnQgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzc1xuICAgICAqIEBjaGFpbmFibGVcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm9uU2Nyb2xsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uU2Nyb2xsKCkge1xuICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbCh0aGlzLm1vZHVsZXMsIGZ1bmN0aW9uIChtb2R1bGUpIHtcbiAgICAgICAgaWYgKGlzc2Nyb2xsZWRpbnRvdmlldyhtb2R1bGUpKSB7XG4gICAgICAgICAgaWYgKG1vZHVsZS5nZXRBdHRyaWJ1dGUoTUlTQy5EQVRBX1ZJU0lCTEUpID09PSAnZmFsc2UnKSB7XG4gICAgICAgICAgICBtb2R1bGUuc2V0QXR0cmlidXRlKE1JU0MuREFUQV9WSVNJQkxFLCB0cnVlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIW1vZHVsZS5oYXNBdHRyaWJ1dGUoU0VMRUNUT1JTLkRBVEFfSEFTX0FOSU1BVEVEKSkge1xuICAgICAgICAgICAgbW9kdWxlLnNldEF0dHJpYnV0ZShTRUxFQ1RPUlMuREFUQV9IQVNfQU5JTUFURUQsIHRydWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAobW9kdWxlLmdldEF0dHJpYnV0ZShNSVNDLkRBVEFfVklTSUJMRSkgPT09ICd0cnVlJykge1xuICAgICAgICAgICAgbW9kdWxlLnNldEF0dHJpYnV0ZShNSVNDLkRBVEFfVklTSUJMRSwgZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciByZWN0ID0gbW9kdWxlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICB2YXIgY3VycmVudERhdGFQb3NpdGlvbiA9IG1vZHVsZS5nZXRBdHRyaWJ1dGUoU0VMRUNUT1JTLkRBVEFfUE9TSVRJT04pO1xuICAgICAgICB2YXIgY2FsY3VsYXRlZERhdGFQb3NpdGlvbiA9IHJlY3QuYm90dG9tIDwgMCA/IENMQVNTX05BTUVTLkFCT1ZFX1ZJRVdQT1JUIDogcmVjdC50b3AgPj0gd2luZG93LmlubmVySGVpZ2h0ID8gQ0xBU1NfTkFNRVMuQkVMT1dfVklFV1BPUlQgOiBDTEFTU19OQU1FUy5JTl9WSUVXUE9SVDtcbiAgICAgICAgdmFyIGNhbGN1bGF0ZWRCb3R0b21Qb3NpdGlvbiA9IHJlY3QuYm90dG9tID4gd2luZG93LmlubmVySGVpZ2h0ID8gQ0xBU1NfTkFNRVMuQkVMT1dfQk9UVE9NIDogQ0xBU1NfTkFNRVMuQUJPVkVfQk9UVE9NO1xuICAgICAgICB2YXIgaGFsZndheVBvc2l0aW9uID0gcmVjdC5ib3R0b20gPD0gd2luZG93LmlubmVySGVpZ2h0IC8gMS4yNSA/IENMQVNTX05BTUVTLkFCT1ZFX0hBTEZXQVkgOiBDTEFTU19OQU1FUy5CRUxPV19IQUxGV0FZO1xuXG4gICAgICAgIGlmIChjdXJyZW50RGF0YVBvc2l0aW9uICE9PSBjYWxjdWxhdGVkRGF0YVBvc2l0aW9uKSB7XG4gICAgICAgICAgbW9kdWxlLnNldEF0dHJpYnV0ZShTRUxFQ1RPUlMuREFUQV9QT1NJVElPTiwgY2FsY3VsYXRlZERhdGFQb3NpdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICBtb2R1bGUuc2V0QXR0cmlidXRlKFNFTEVDVE9SUy5EQVRBX0JPVFRPTSwgY2FsY3VsYXRlZEJvdHRvbVBvc2l0aW9uKTtcbiAgICAgICAgbW9kdWxlLnNldEF0dHJpYnV0ZShTRUxFQ1RPUlMuREFUQV9IQUxGV0FZLCBoYWxmd2F5UG9zaXRpb24pO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQSBmdW5jdGlvbiB3aGljaCB1cGRhdGVzIHRoZSBsaXN0IG9mIGRhdGEtdmlzaWJsZSBtb2R1bGVzIGJ5IGNhbGxpbmcgYGNhY2hlRG9tUmVmZXJlbmNlc2AgYW5kIGNhbGxzIGBvblNjcm9sbGBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge09iamVjdH0gQSByZWZlcmVuY2UgdG8gdGhlIGN1cnJlbnQgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzc1xuICAgICAqIEBjaGFpbmFibGVcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInVwZGF0ZU1vZHVsZXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlTW9kdWxlcygpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdzY3JvbGwnKTtcbiAgICAgIHRoaXMuY2FjaGVEb21SZWZlcmVuY2VzKCkub25TY3JvbGwoKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBJblZpZXdwb3J0O1xufSgpO1xuXG5leHBvcnQgeyBJblZpZXdwb3J0IGFzIGRlZmF1bHQgfTsiLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9LCBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7IHZhbHVlOiBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSksIHdyaXRhYmxlOiBmYWxzZSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5pbXBvcnQgeyBDTEFTU19OQU1FUywgRVZFTlRTLCBNSVNDLCBTRUxFQ1RPUlMgfSBmcm9tICcuLi8uLi9Db25zdGFudHMnO1xuaW1wb3J0IHsgY2xvc2VzdCwgTWVzc2FnZUJ1cyB9IGZyb20gJy4uLy4uL1V0aWxzJztcbmltcG9ydCBMb2FkUG9zdHNDb250cm9sbGVyIGZyb20gJy4uL2NvbnRyb2xsZXJzL0xvYWRQb3N0c0NvbnRyb2xsZXInO1xuLyoqXG4gKiBUaGUgTG9hZE1vcmUgbW9kdWxlIHdoaWNoIGhhbmRsZXMgdGhlIHNlYXJjaCBmaWx0ZXJzXG4gKlxuICogVGhpcyBpbmNsdWRlcyBjb2RlIGRlcGVuZGFudCBvbiB0aGUgUmVsZXZhbnNzaSBhbmQgUkVTVCBBUEkgZm9yIFJlbGV2YW5zc2kgV29yZFByZXNzIHBsdWdpbnMuXG4gKlxuICogQGNsYXNzIExvYWRNb3JlXG4gKi9cblxudmFyIExvYWRNb3JlID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfTWVzc2FnZUJ1cykge1xuICBfaW5oZXJpdHMoTG9hZE1vcmUsIF9NZXNzYWdlQnVzKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKExvYWRNb3JlKTtcblxuICAvKipcbiAgICogTG9hZE1vcmUgY29uc3RydWN0b3Igd2hpY2ggYXNzaWducyB0aGUgZWxlbWVudCBwYXNzZWQgaW50byB0aGUgY29uc3RydWN0b3JcbiAgICogdG8gdGhlIGB0aGlzLmVsZW1lbnRgIHByb3BlcnR5IGZvciBsYXRlciByZWZlcmVuY2VcbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCAtIFJFUVVJUkVEIC0gdGhlIG1vZHVsZSdzIGNvbnRhaW5lclxuICAgKi9cbiAgZnVuY3Rpb24gTG9hZE1vcmUoZWxlbWVudCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBMb2FkTW9yZSk7XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpO1xuICAgIC8qKlxuICAgICAqIFJlZmVyZW5jZSB0byB0aGUgRE9NIGVsZW1lbnQgdGhhdCBpcyB0aGUgcm9vdCBvZiB0aGUgY29tcG9uZW50XG4gICAgICogQHByb3BlcnR5IHtPYmplY3R9XG4gICAgICovXG5cbiAgICBfdGhpcy5lbGVtZW50ID0gZWxlbWVudDsgLy8gSW5pdGlhbGl6ZSB0aGUgdmlld1xuXG4gICAgX3RoaXMuaW5pdCgpO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgdmlldyBieSBjYWxsaW5nIHRoZSBmdW5jdGlvbnMgdG9cbiAgICogY3JlYXRlIERPTSByZWZlcmVuY2VzLCBzZXR1cCBldmVudCBoYW5kbGVycyBhbmRcbiAgICogdGhlbiBjcmVhdGUgdGhlIGV2ZW50IGxpc3RlbmVyc1xuICAgKlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IEhlYWRlciBBIHJlZmVyZW5jZSB0byB0aGUgY3VycmVudCBpbnN0YW5jZSBvZiB0aGUgY2xhc3NcbiAgICogQGNoYWluYWJsZVxuICAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhMb2FkTW9yZSwgW3tcbiAgICBrZXk6IFwiaW5pdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgdGhpcy5jYWNoZURvbVJlZmVyZW5jZXMoKS5zZXR1cEhhbmRsZXJzKCkuZW5hYmxlKCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogRmluZCBhbGwgbmVjZXNzYXJ5IERPTSBlbGVtZW50cyB1c2VkIGluIHRoZSB2aWV3IGFuZCBjYWNoZSB0aGVtXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IExvYWRNb3JlIEEgcmVmZXJlbmNlIHRvIHRoZSBpbnN0YW5jZSBvZiB0aGUgY2xhc3NcbiAgICAgKiBAY2hhaW5hYmxlXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJjYWNoZURvbVJlZmVyZW5jZXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2FjaGVEb21SZWZlcmVuY2VzKCkge1xuICAgICAgdGhpcy5sb2FkbW9yZWJ1dHRvbiA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFNFTEVDVE9SUy5CVVRUT04pO1xuICAgICAgdGhpcy5wb3N0Y291bnQgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihTRUxFQ1RPUlMuUE9TVF9DT1VOVCk7XG4gICAgICB0aGlzLnJlc3VsdHNjb250YWluZXIgPSBjbG9zZXN0KHRoaXMuZWxlbWVudCwgU0VMRUNUT1JTLkFQSV9SRVNVTFRTKTtcbiAgICAgIHRoaXMuaW5jcmVtZW50ID0gdGhpcy5yZXN1bHRzY29udGFpbmVyLmRhdGFzZXQuaW5jcmVtZW50O1xuICAgICAgdGhpcy50ZW1wbGF0ZSA9IHRoaXMucmVzdWx0c2NvbnRhaW5lci5kYXRhc2V0LnRlbXBsYXRlO1xuICAgICAgdGhpcy5wYWdlID0gdGhpcy5yZXN1bHRzY29udGFpbmVyLmRhdGFzZXQucGFnZTtcbiAgICAgIHRoaXMucG9zdHR5cGUgPSB0aGlzLnJlc3VsdHNjb250YWluZXIuZGF0YXNldC50ZW1wbGF0ZS5pbmRleE9mKE1JU0MuQ0FTRV9TVFVEWSkgPiAtMSA/IE1JU0MuQ0FTRV9TVFVEWSA6IE1JU0MuUE9TVDtcbiAgICAgIHRoaXMucXVlcnkgPSAnJztcbiAgICAgIHRoaXMucGF0aCA9ICcnO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEJpbmQgZXZlbnQgaGFuZGxlcnMgd2l0aCB0aGUgcHJvcGVyIGNvbnRleHQgb2YgYHRoaXNgLlxuICAgICAqXG4gICAgICogQHJldHVybiB7T2JqZWN0fSBIZWFkZXIgQSByZWZlcmVuY2UgdG8gdGhlIGN1cnJlbnQgaW5zdGFuY2Ugb2YgdGhlIGNsYXNzXG4gICAgICogQGNoYWluYWJsZVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic2V0dXBIYW5kbGVyc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXR1cEhhbmRsZXJzKCkge1xuICAgICAgdGhpcy5Mb2FkTW9yZUhhbmRsZXIgPSB0aGlzLmxvYWRNb3JlUG9zdHMuYmluZCh0aGlzKTtcbiAgICAgIHRoaXMuUmVxdWVzdE1hZGVIYW5kbGVyID0gdGhpcy5yZXF1ZXN0TWFkZS5iaW5kKHRoaXMpO1xuICAgICAgdGhpcy5SZXN1bHRzUmV0dXJuZWRIYW5kbGVyID0gdGhpcy5yZXN1bHRzUmV0dXJuZWQuYmluZCh0aGlzKTtcbiAgICAgIHRoaXMuU2hvd0hpZGVIYW5kbGVyID0gdGhpcy5zaG93SGlkZS5iaW5kKHRoaXMpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgZXZlbnQgbGlzdGVuZXJzIHRvIGVuYWJsZSBpbnRlcmFjdGlvbiB3aXRoIHZpZXdcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge09iamVjdH0gTG9hZE1vcmUgQSByZWZlcmVuY2UgdG8gdGhlIGluc3RhbmNlIG9mIHRoZSBjbGFzc1xuICAgICAqIEBjaGFpbmFibGVcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImVuYWJsZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBlbmFibGUoKSB7XG4gICAgICB0aGlzLmxvYWRtb3JlYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoRVZFTlRTLkNMSUNLLCB0aGlzLkxvYWRNb3JlSGFuZGxlcik7XG4gICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihFVkVOVFMuVVBEQVRFX1BPU1RfQ09VTlQsIHRoaXMuUmVzdWx0c1JldHVybmVkSGFuZGxlcik7XG4gICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihFVkVOVFMuUkVRVUVTVF9NQURFLCB0aGlzLlJlcXVlc3RNYWRlSGFuZGxlcik7XG4gICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihFVkVOVFMuU0hPV19ISURFLCB0aGlzLlNob3dIaWRlSGFuZGxlcik7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogTG9hZHMgbW9yZSBwb3N0c1xuICAgICAqXG4gICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgLSB0aGUgY2xpY2sgZXZlbnQgb2JqZWN0XG4gICAgICogQHJldHVybiB7T2JqZWN0fSBMb2FkTW9yZSBBIHJlZmVyZW5jZSB0byB0aGUgaW5zdGFuY2Ugb2YgdGhlIGNsYXNzXG4gICAgICogQGNoYWluYWJsZVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibG9hZE1vcmVQb3N0c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsb2FkTW9yZVBvc3RzKGV2ZW50KSB7XG4gICAgICB2YXIgdGhpc0J1dHRvbiA9IGV2ZW50LnRhcmdldDtcbiAgICAgIHRoaXMuc2VuZEV2ZW50KEVWRU5UUy5SRVFVRVNUX01BREUsIHRoaXNCdXR0b24sIGRvY3VtZW50LmJvZHkpO1xuICAgICAgdGhpcy5vZmZzZXQgPSB0aGlzLnJlc3VsdHNjb250YWluZXIuZGF0YXNldC5vZmZzZXQ7XG4gICAgICB0aGlzLnRlcm0gPSAhIXRoaXMucmVzdWx0c2NvbnRhaW5lci5kYXRhc2V0LnRlcm0gPyB0aGlzLnJlc3VsdHNjb250YWluZXIuZGF0YXNldC50ZXJtICsgJyYnIDogJyc7XG4gICAgICB0aGlzLnBhZ2UgPSB0aGlzLnJlc3VsdHNjb250YWluZXIuZGF0YXNldC5wYWdlO1xuICAgICAgdGhpcy5yZXN1bHRzY29udGFpbmVyLmRhdGFzZXQuYXBwZW5kID0gdHJ1ZTtcbiAgICAgIHZhciBleGNsdWRlID0gISF0aGlzLnJlc3VsdHNjb250YWluZXIuZGF0YXNldC5leGNsdWRlID8gJyZleGNsdWRlPScgKyB0aGlzLnJlc3VsdHNjb250YWluZXIuZGF0YXNldC5leGNsdWRlLnN1YnN0cmluZygxLCB0aGlzLnJlc3VsdHNjb250YWluZXIuZGF0YXNldC5leGNsdWRlLmxlbmd0aCAtIDEpIDogJyc7XG4gICAgICB2YXIgaW5jbHVkZSA9ICEhdGhpcy5yZXN1bHRzY29udGFpbmVyLmRhdGFzZXQuaW5jbHVkZSA/ICcmaW5jbHVkZT0nICsgdGhpcy5yZXN1bHRzY29udGFpbmVyLmRhdGFzZXQuaW5jbHVkZS5zdWJzdHJpbmcoMSwgdGhpcy5yZXN1bHRzY29udGFpbmVyLmRhdGFzZXQuaW5jbHVkZS5sZW5ndGggLSAxKSA6ICcnO1xuICAgICAgdmFyIGV4Y2x1ZGVjYXQgPSAhIXRoaXMucmVzdWx0c2NvbnRhaW5lci5kYXRhc2V0LmV4Y2x1ZGVjYXQgPyAnJmNhdGVnb3JpZXNfZXhjbHVkZT0nICsgdGhpcy5yZXN1bHRzY29udGFpbmVyLmRhdGFzZXQuZXhjbHVkZWNhdCA6ICcnO1xuICAgICAgdmFyIGluY2x1ZGVjYXQgPSAhIXRoaXMucmVzdWx0c2NvbnRhaW5lci5kYXRhc2V0LmluY2x1ZGVjYXQgPyAnJmNhdGVnb3JpZXM9JyArIHRoaXMucmVzdWx0c2NvbnRhaW5lci5kYXRhc2V0LmluY2x1ZGVjYXQgOiAnJzsgLy8gUmVsZXZhbnNzaSBBUEkgcGx1Z2luIHVzZXMgZGlmZmVyZW50IHF1ZXJ5IHBhcmFtcyB0aGFuIFdQQVBJIHNvLi4uXG5cbiAgICAgIHRoaXMuZnJvbXNlYXJjaCA9IHRoaXMucmVzdWx0c2NvbnRhaW5lci5kYXRhc2V0LnNlYXJjaDtcbiAgICAgIHRoaXMucGF0aCA9IHRoaXMucmVzdWx0c2NvbnRhaW5lci5kYXRhc2V0LmVuZHBvaW50ID09PSBNSVNDLlBPU1RTID8gdGhpcy5mcm9tc2VhcmNoICE9PSBNSVNDLkZBTFNFID8gTUlTQy5QT1NUIDogdGhpcy5yZXN1bHRzY29udGFpbmVyLmRhdGFzZXQuZW5kcG9pbnQgOiB0aGlzLnJlc3VsdHNjb250YWluZXIuZGF0YXNldC5lbmRwb2ludDtcbiAgICAgIHRoaXMucXVlcnkgPSB0aGlzLmZyb21zZWFyY2ggIT09IE1JU0MuRkFMU0UgPyAna2V5d29yZD0nICsgdGhpcy5mcm9tc2VhcmNoICsgJyZ0eXBlPScgKyB0aGlzLnBhdGggKyAnJnBvc3RzX3Blcl9wYWdlPScgKyB0aGlzLmluY3JlbWVudCArICcmcGFnZWQ9JyArIHRoaXMucGFnZSA6IHRoaXMudGVybSArICdvZmZzZXQ9JyArIHRoaXMub2Zmc2V0ICsgJyZwZXJfcGFnZT0nICsgdGhpcy5pbmNyZW1lbnQgKyBpbmNsdWRlICsgZXhjbHVkZSArIGV4Y2x1ZGVjYXQgKyBpbmNsdWRlY2F0O1xuICAgICAgdGhpcy5jb250cm9sbGVyID0gbmV3IExvYWRQb3N0c0NvbnRyb2xsZXIoKTtcbiAgICAgIHRoaXMuY29udHJvbGxlci5sb2FkSXRlbXModGhpcy5wYXRoLCB0aGlzLnF1ZXJ5LCB0aGlzLnRlbXBsYXRlLCB0aGlzLmZyb21zZWFyY2ggIT09IE1JU0MuRkFMU0UsIHRoaXMucmVzdWx0c2NvbnRhaW5lciwgdGhpcy5wb3N0dHlwZSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogRG9lcyBzdHVmZiBvbiBSZXF1ZXN0IE1hZGVcbiAgICAgKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgLSB0aGUgZXZlbnQgb2JqZWN0XG4gICAgICogQHJldHVybiB7T2JqZWN0fSBMb2FkTW9yZSBBIHJlZmVyZW5jZSB0byB0aGUgaW5zdGFuY2Ugb2YgdGhlIGNsYXNzXG4gICAgICogQGNoYWluYWJsZVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicmVxdWVzdE1hZGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVxdWVzdE1hZGUoZXZlbnQpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVTLkxPQURJTkcpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERvZXMgc3R1ZmYgb24gUmVzdWx0cyBSZXR1cm5lZFxuICAgICAqIG1vc3RseSBkZWNyZW1lbnRzIHBvc3QgY291bnRzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCAtIHRoZSBldmVudCBvYmplY3RcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IExvYWRNb3JlIEEgcmVmZXJlbmNlIHRvIHRoZSBpbnN0YW5jZSBvZiB0aGUgY2xhc3NcbiAgICAgKiBAY2hhaW5hYmxlXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJyZXN1bHRzUmV0dXJuZWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVzdWx0c1JldHVybmVkKGV2ZW50KSB7XG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FUy5MT0FESU5HKTtcbiAgICAgIHZhciByZW1haW5pbmdQb3N0cyA9IHBhcnNlSW50KGV2ZW50LmRldGFpbCkgLSB0aGlzLnJlc3VsdHNjb250YWluZXIuZGF0YXNldC5vZmZzZXQgLSBwYXJzZUludCh0aGlzLmluY3JlbWVudCk7XG4gICAgICB0aGlzLmNhbGN1bGF0ZVBhZ2VzKHBhcnNlSW50KGV2ZW50LmRldGFpbCkpO1xuXG4gICAgICBpZiAocmVtYWluaW5nUG9zdHMgPiAwKSB7XG4gICAgICAgIHRoaXMucG9zdGNvdW50LmlubmVySFRNTCA9IHJlbWFpbmluZ1Bvc3RzO1xuICAgICAgICB0aGlzLnJlc3VsdHNjb250YWluZXIuZGF0YXNldC5vZmZzZXQgPSBwYXJzZUludCh0aGlzLnJlc3VsdHNjb250YWluZXIuZGF0YXNldC5vZmZzZXQpICsgcGFyc2VJbnQodGhpcy5pbmNyZW1lbnQpO1xuICAgICAgICB0aGlzLmxvYWRtb3JlYnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnBvc3Rjb3VudC5pbm5lckhUTUwgPSBNSVNDLk5PO1xuICAgICAgICB0aGlzLmxvYWRtb3JlYnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZXMgcGFnZXMgZm9yIFJlbGV2YW5zc2kgc2VhcmNoXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0ludGVnZXJ9IHBvc3RzIC0gdGhlIG51bWJlciBvZiBwb3N0cyBpbiBhIHNlYXJjaCBxdWVyeSByZXN1bHRcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IExvYWRNb3JlIEEgcmVmZXJlbmNlIHRvIHRoZSBpbnN0YW5jZSBvZiB0aGUgY2xhc3NcbiAgICAgKiBAY2hhaW5hYmxlXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJjYWxjdWxhdGVQYWdlc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjYWxjdWxhdGVQYWdlcyhwb3N0cykge1xuICAgICAgdmFyIHJlbWFpbmluZ1Bvc3RzID0gcG9zdHMgLSB0aGlzLnJlc3VsdHNjb250YWluZXIuZGF0YXNldC5vZmZzZXQgLSBwYXJzZUludCh0aGlzLmluY3JlbWVudCk7XG5cbiAgICAgIGlmIChyZW1haW5pbmdQb3N0cyA+IDApIHtcbiAgICAgICAgdGhpcy5yZXN1bHRzY29udGFpbmVyLmRhdGFzZXQucGFnZSA9IHBhcnNlSW50KHRoaXMucmVzdWx0c2NvbnRhaW5lci5kYXRhc2V0LnBhZ2UpICsgMTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZCBjbGFzcyBiYXNlZCBvbiBib29sZWFuIHRvIHNob3cgb3IgaGlkZVxuICAgICAqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCAtIHRoZSBldmVudCBvYmplY3RcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IExvYWRNb3JlIEEgcmVmZXJlbmNlIHRvIHRoZSBpbnN0YW5jZSBvZiB0aGUgY2xhc3NcbiAgICAgKiBAY2hhaW5hYmxlXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzaG93SGlkZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzaG93SGlkZShldmVudCkge1xuICAgICAgaWYgKCFldmVudC5kZXRhaWwpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRVMuSElEREVOKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVTLkhJRERFTik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBMb2FkTW9yZTtcbn0oTWVzc2FnZUJ1cyk7XG5cbmV4cG9ydCB7IExvYWRNb3JlIGFzIGRlZmF1bHQgfTsiLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuaW1wb3J0IHsgb3BlbnBvcHVwIH0gZnJvbSAnLi4vLi4vVXRpbHMnO1xuaW1wb3J0IHsgRVZFTlRTLCBNSVNDLCBTRUxFQ1RPUlMgfSBmcm9tICcuLi8uLi9Db25zdGFudHMnO1xuLyoqXG4gKiBPR0lORk9cbiAqXG4gKiBBbiBvYmplY3QgY29udGFpbmluZyBPRyB0YWcgZGF0YSBwdWxsZWQgZnJvbSBvZyB0YWdzXG4gKlxuICogQHR5cGUge09iamVjdH1cbiAqIEBpZ25vcmVcbiAqL1xuXG52YXIgT0dJTkZPID0ge1xuICBERVNDOiAnJyxcbiAgVVJMOiAnJyxcbiAgVElUTEU6ICcnXG59O1xuLyoqXG4gKiBUaGUgU29jaWFsU2hhcmUgbW9kdWxlIHdoaWNoIGhhbmRsZXMgdGhlIHNvY2lhbCBzaGFyZSBidXR0b25zXG4gKlxuICogQGNsYXNzIFNvY2lhbFNoYXJlXG4gKi9cblxudmFyIFNvY2lhbFNoYXJlID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgLyoqXG4gICAqIFNvY2lhbFNoYXJlIGNvbnN0cnVjdG9yIHdoaWNoIGFzc2lnbnMgdGhlIGVsZW1lbnQgcGFzc2VkIGludG8gdGhlIGNvbnN0cnVjdG9yXG4gICAqIHRvIHRoZSBgdGhpcy5lbGVtZW50YCBwcm9wZXJ0eSBmb3IgbGF0ZXIgcmVmZXJlbmNlXG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgLSBSRVFVSVJFRCAtIHRoZSBtb2R1bGUncyBjb250YWluZXJcbiAgICovXG4gIGZ1bmN0aW9uIFNvY2lhbFNoYXJlKGVsZW1lbnQpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU29jaWFsU2hhcmUpO1xuXG4gICAgLyoqXG4gICAgICogUmVmZXJlbmNlIHRvIHRoZSBET00gZWxlbWVudCB0aGF0IGlzIHRoZSByb290IG9mIHRoZSBjb21wb25lbnRcbiAgICAgKiBAcHJvcGVydHkge09iamVjdH1cbiAgICAgKi9cbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50OyAvLyBJbml0aWFsaXplIHRoZSB2aWV3XG5cbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIHZpZXcgYnkgY2FsbGluZyB0aGUgZnVuY3Rpb25zIHRvXG4gICAqIGNyZWF0ZSBET00gcmVmZXJlbmNlcywgc2V0dXAgZXZlbnQgaGFuZGxlcnMgYW5kXG4gICAqIHRoZW4gY3JlYXRlIHRoZSBldmVudCBsaXN0ZW5lcnNcbiAgICpcbiAgICogQHJldHVybiB7T2JqZWN0fSBTb2NpYWxTaGFyZSBBIHJlZmVyZW5jZSB0byB0aGUgaW5zdGFuY2Ugb2YgdGhlIGNsYXNzXG4gICAqIEBjaGFpbmFibGVcbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoU29jaWFsU2hhcmUsIFt7XG4gICAga2V5OiBcImluaXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgIHRoaXMuY2FjaGVEb21SZWZlcmVuY2VzKCkuZ2V0T0dEYXRhKCkuZW5hYmxlKCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogRmluZCBhbGwgbmVjZXNzYXJ5IERPTSBlbGVtZW50cyB1c2VkIGluIHRoZSB2aWV3IGFuZCBjYWNoZSB0aGVtXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IFNvY2lhbFNoYXJlIEEgcmVmZXJlbmNlIHRvIHRoZSBpbnN0YW5jZSBvZiB0aGUgY2xhc3NcbiAgICAgKiBAY2hhaW5hYmxlXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJjYWNoZURvbVJlZmVyZW5jZXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2FjaGVEb21SZWZlcmVuY2VzKCkge1xuICAgICAgLyoqXG4gICAgICAgKiBUaGUgYDxidXR0b24+YCB0aGF0IGEgdXNlciBpbnRlcmFjdHMgd2l0aCB0byBzaGFyZSB0byBhIHNvY2lhbCBzaXRlXG4gICAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAgICovXG4gICAgICB0aGlzLnNoYXJlID0ge1xuICAgICAgICB0d2l0dGVyOiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihTRUxFQ1RPUlMuVFdJVFRFUiksXG4gICAgICAgIGZhY2Vib29rOiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihTRUxFQ1RPUlMuRkFDRUJPT0spLFxuICAgICAgICBsaW5rZWRpbjogdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoU0VMRUNUT1JTLkxJTktFRElOKSAvLyBlbWFpbDogdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoU0VMRUNUT1JTLkVNQUlMKVxuXG4gICAgICB9O1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCBPRyBkYXRhIGZyb20gcGFnZSdzIE9HIHRhZ3NcbiAgICAgKiBTZXQgZGVmYXVsdHMgaWYgbm8gdGFncyBhdmFpbGFibGVcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge09iamVjdH0gU29jaWFsU2hhcmUgQSByZWZlcmVuY2UgdG8gdGhlIGluc3RhbmNlIG9mIHRoZSBjbGFzc1xuICAgICAqIEBjaGFpbmFibGVcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImdldE9HRGF0YVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRPR0RhdGEoKSB7XG4gICAgICBPYmplY3Qua2V5cyhPR0lORk8pLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgbm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoU0VMRUNUT1JTWydPRycgKyBrZXldKTtcblxuICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgIE9HSU5GT1trZXldID0gbm9kZS5nZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBldmVudCBsaXN0ZW5lcnMgdG8gZW5hYmxlIGludGVyYWN0aW9uIHdpdGggdmlld1xuICAgICAqXG4gICAgICogQHJldHVybiB7T2JqZWN0fSBTb2NpYWxTaGFyZSBBIHJlZmVyZW5jZSB0byB0aGUgaW5zdGFuY2Ugb2YgdGhlIGNsYXNzXG4gICAgICogQGNoYWluYWJsZVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZW5hYmxlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGVuYWJsZSgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIE9iamVjdC5rZXlzKHRoaXMuc2hhcmUpLmZvckVhY2goZnVuY3Rpb24gKHNoYXJlVHlwZSkge1xuICAgICAgICBfdGhpcy5zaGFyZVtzaGFyZVR5cGVdLmFkZEV2ZW50TGlzdGVuZXIoRVZFTlRTLkNMSUNLLCBfdGhpc1tzaGFyZVR5cGUgKyAnU2hhcmUnXSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBGYWNlYm9vayBzaGFyZSBvbiBjbGlja1xuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IC0gdGhlIGNsaWNrIGV2ZW50XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJmYWNlYm9va1NoYXJlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZhY2Vib29rU2hhcmUoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB2YXIgc2hhcmVVUkwgPSBNSVNDLmZVUkwxICsgT0dJTkZPLlVSTDtcbiAgICAgIG9wZW5wb3B1cChzaGFyZVVSTCwgJ0ZhY2Vib29rU2hhcmUnLCA1NjAsIDYwMCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFR3aXR0ZXIgc2hhcmUgb24gY2xpY2tcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCAtIHRoZSBjbGljayBldmVudFxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidHdpdHRlclNoYXJlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHR3aXR0ZXJTaGFyZShldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHZhciBzaGFyZVVSTCA9IE1JU0MudFVSTDEgKyBPR0lORk8uVVJMICsgTUlTQy50VVJMVGV4dCArIGVuY29kZVVSSUNvbXBvbmVudChPR0lORk8uREVTQykgKyBNSVNDLnRVUkxWaWE7XG4gICAgICBvcGVucG9wdXAoc2hhcmVVUkwsICdUd2l0dGVyU2hhcmUnLCA1NjAsIDMwMCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIExpbmtlZGluIHNoYXJlIG9uIGNsaWNrXG4gICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgLSB0aGUgY2xpY2sgZXZlbnRcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImxpbmtlZGluU2hhcmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbGlua2VkaW5TaGFyZShldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHZhciBzaGFyZVVSTCA9IE1JU0MubFVSTDEgKyBPR0lORk8uVVJMICsgTUlTQy5sVVJMMiArIGVuY29kZVVSSUNvbXBvbmVudChPR0lORk8uVElUTEUpICsgTUlTQy5sVVJMMyArIGVuY29kZVVSSUNvbXBvbmVudChPR0lORk8uREVTQykgKyBNSVNDLmxVUkw0O1xuICAgICAgb3BlbnBvcHVwKHNoYXJlVVJMLCAnTGlua2VkSW5TaGFyZScsIDU2MCwgNjAwKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2VuZCBlbWFpbCB0aG9yb3VnaCBtYWlsdG8gb24gY2xpY2tcbiAgICAgKlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZW1haWxTaGFyZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBlbWFpbFNoYXJlKCkge1xuICAgICAgdmFyIG1TdWJqZWN0ID0gdGhpcy5xdWVyeVNlbGVjdG9yKFNFTEVDVE9SUy5FTUFJTFNVQikuaW5uZXJIVE1MO1xuICAgICAgdmFyIG1Cb2R5ID0gdGhpcy5xdWVyeVNlbGVjdG9yKFNFTEVDVE9SUy5FTUFJTEJPRFkpLmlubmVySFRNTDtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gTUlTQy5tVVJMMSArIE1JU0MubVVSTDIgKyBtU3ViamVjdCArIE1JU0MubVVSTDMgKyBtQm9keTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU29jaWFsU2hhcmU7XG59KCk7XG5cbmV4cG9ydCB7IFNvY2lhbFNoYXJlIGFzIGRlZmF1bHQgfTsiLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnO1xuLyoqXG4gKiBUaGUgb25seSBwdXJwb3NlIG9mIHRoaXMgZmlsZSBpcyB0byBib290c3RyYXAgdGhlIEFwcCBjb21wb25lbnRcbiAqIHRvIHRoZSBgd2luZG93YCB3aGVuZXZlciB0aGUgcGFnZSBoYXMgZmluaXNoZWQgbG9hZGluZy4gQWxsXG4gKiB3b3JrIHRvIGJlIGRvbmUgd2l0aCBsb2FkaW5nIGNvbXBvbmVudHMgYW5kIGFueSBsb2dpYyB0byBwZXJmb3JtXG4gKiByZXF1ZXN0cyBvciB1cGRhdGUgdGhlIERPTSBzaG91bGQgYmUgZG9uZSB0aGVpciBvciBpbiBhIHNwZWNpZmljXG4gKiBjb21wb25lbnQuXG4gKi9cblxuKGZ1bmN0aW9uICgpIHtcbiAgLy8gQXR0YWNoIEFwcCB0byB0aGUgd2luZG93XG4gIHdpbmRvdy5BcHAgPSBuZXcgQXBwKCk7XG59KSgpOyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDeEVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDZEE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1BBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNyQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1BBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0xBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3RDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ05BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3pDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDdEVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNwQkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDZEE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN0Q0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMzQkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNaQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDYkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNWQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNYQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDYkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNaQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3BDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNYQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDNUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3RHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNuTkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdEhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDcEhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzlDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN2UEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbFJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3pLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0UEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDL0tBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
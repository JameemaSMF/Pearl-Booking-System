import App from './App';

/**
 * The only purpose of this file is to bootstrap the App component
 * to the `window` whenever the page has finished loading. All
 * work to be done with loading components and any logic to perform
 * requests or update the DOM should be done their or in a specific
 * component.
 */
(function () {
  // Attach App to the window
  window.App = new App();
}());

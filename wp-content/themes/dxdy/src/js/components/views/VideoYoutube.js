import {
  ARIA, SELECTORS, CLASS_NAMES, EVENTS, MISC,
} from '../../Constants';
import { getyoutubeidfromurl, randomsecurestring } from '../../Utils';

/**
 * A class that creates the functionality for Youtube video blocks. A clickable button that expands a player area using the YouTube iframe api
 */
export default class VideoYoutube {
  /**
     * Constructor for YT Video
     *
     * @param {HTMLElement} element - REQUIRED - the module's container
     */
  constructor(element) {
    /**
         * DOM node that is passed into the constructor
         *
         * @property {Object} element DOM node that is passed into the constructor
         */
    this.element = element;

    /**
         * ID of the YT video
         *
         * @property {String}
         */
    this.videoId = getyoutubeidfromurl(this.element.dataset.url);
    console.log('this.videoId', this.videoId);

    /**
         * Create ID for iframe
         *
         * @property {String}
         */
    this.iframeId = 'player-';

    // Initialize the view
    this.init();
  }

  /**
     * Initializes the view by calling the functions to
     * create DOM references, setup event handlers and
     * then create the event listeners
     *
     * @return {Object} Header A reference to the current instance of the class
     * @chainable
     */
  init() {
    this.cacheDomReferences()
      .setupHandlers()
      .enable()
      .scriptInject();

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
  cacheDomReferences() {
    this.playTriggerYT = this.element.querySelector(SELECTORS.VIDEO_YOUTUBE);
    this.playTriggerYTICON = this.element.querySelector(SELECTORS.PLAY_TRIGGER);
    this.featuredVideoEmbed = this.element.querySelector(SELECTORS.VIDEO_YOUTUBE);
    this.featuredVideoContainer = this.element.querySelector(SELECTORS.PLAYER_EMBED_CONTAINER);
    this.iframeId += randomsecurestring(16);
    this.featuredVideoContainer.setAttribute('id', this.iframeId);

    return this;
  }

  /**
     * scriptInject
     *
     * Pull the YT iframe API if the object doesn't exist
     *
     * @return {Object} A reference to the current instance of the class
     * @chainable
     */
  scriptInject() {
    const tag = document.createElement('script');

    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    return this;
  }

  /**
     * Bind event handlers with the proper context of `this`.
     *
     * @return {Object} A reference to the current instance of the class
     * @chainable
     */
  setupHandlers() {
    this.onClickPlayTriggerYTHandler = this.onClickPlayTriggerYT.bind(this);
    this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
    this.pauseHandler = this.pause.bind(this);

    return this;
  }

  /**
     * Create event handlers to enable interaction with view
     *
     * @return {Object} From A reference to the current instance of the class
     * @chainable
     */
  enable() {
    this.playTriggerYT.addEventListener(EVENTS.CLICK, this.onClickPlayTriggerYTHandler, false);
    this.playTriggerYTICON.addEventListener(EVENTS.CLICK, this.onClickPlayTriggerYTHandler, false);
    document.addEventListener(EVENTS.PAUSE_VIDEO, this.pauseHandler, false);

    return this;
  }

  /**
   * Serialize data
   *
   */
  onYouTubeIframeAPIReady() {
    this.player = new YT.Player(this.iframeId, {
      videoId: this.videoId,
      events: {
        onReady: this.onPlayerReady,
        onStateChange: this.onPlayerStateChange,
      },
      playerVars: { rel: 0, fs: 1, showinfo: 0 },
    });
  }

  /**
   * Detect if player is ready and play video
   *
   * @param {event} event - DOM event
   */
  onPlayerReady(event) {
    event.target.playVideo();
  }

  /**
   * Detect if player video has ended and fade back to preview image.
   *
   * @param {event} event - DOM event
   */
  onPlayerStateChange(event) {
    if (event.data === 0) {
      this.featuredVideoContainer = this.element.querySelector(SELECTORS.PLAYER_EMBED_CONTAINER);
      this.element.classList.toggle(CLASS_NAMES.PLAYING);
      this.playTriggerYT.classList.toggle(CLASS_NAMES.CLICK);
      this.playTriggerYT.setAttribute(ARIA.HIDDEN, false);
      this.replaceIframeElement = document.createElement(SELECTORS.DIV);
      this.replaceIframeElement.setAttribute('id', this.iframeId);
      this.featuredVideoEmbed.firstElementChild.classList.add(`${CLASS_NAMES.FADE}-out`);
      this.featuredVideoEmbed.setAttribute(MISC.TABINDEX, -1);

      setTimeout(() => {
        this.featuredVideoEmbed.firstElementChild.replaceWith(this.replaceIframeElement);
      }, 400);
    }
  }

  /**
     * Click the button
     *
     * @return {Object} A reference to the current instance of this class
     * @chainable
     * @param {event} event - DOM event
     */
  onClickPlayTriggerYT(event) {
    event.preventDefault();

    this.element.classList.toggle(CLASS_NAMES.PLAYING);
    this.playTriggerYT.classList.toggle(CLASS_NAMES.CLICK);
    this.playTriggerYT.setAttribute(ARIA.HIDDEN, true);
    this.featuredVideoEmbed.setAttribute(MISC.TABINDEX, 0);

    setTimeout(() => {
      this.onYouTubeIframeAPIReady();
    }, 600);

    return this;
  }

  /**
     * Pasue a given video
     *
     * @param {event} event - DOM event
     */
  pause(event) {
    console.log('video', event.detail);
    console.log('this.videoId', this.videoId);
    if (event.detail === this.videoId) {
      this.player.stopVideo();
    }
  }
}

import { MISC } from '../../Constants';
import { isobjectempty, convertdate } from '../../Utils';

/**
 * AuthorsModel
 *
 * Model for Authors returned as part of Posts returned from WP API
 */
class AuthorsModel {
  /**
     * Constructor for the AuthorsModel class
     *
     * @param  {Object} authors An object of data to transform and model
     * @param  {String} type the type of taxonomy for this term
     */
  constructor(authors) {
    const authorsArray = [];
    authors.forEach((author) => {
      authorsArray.push(author.post_title);
    });
    this.authorlist = authorsArray.join(', ');
  }
}

/**
 * TermModel
 *
 * Model for a Term returned as part of Terms->Posts returned from WP API
 */
class TermModel {
  /**
     * Constructor for the TermModel class
     *
     * @param  {Object} term An object of data to transform and model
     */
  constructor(term) {
    this.name = term.name;
    this.link = term.link;
    this.slug = term.slug;
  }
}

/**
 * TermsModel
 *
 * Model for Terms returned as part of Posts returned from WP API
 */
class TermsModel {
  /**
     * Constructor for the TermsModel class
     *
     * @param  {Object} terms An object of data to transform and model
     * @param  {String} type the type of taxonomy for this term
     */
  constructor(terms, type) {
    this.terms = [];
    terms.forEach((termset) => {
      if (termset.length > 0 && !!termset[0].taxonomy && termset[0].taxonomy === type) {
        termset.forEach((term) => {
          this.terms.push(new TermModel(term));
        });
      }
    });
  }
}

/**
 * Featured Media Model
 *
 * Model for Featured Media returned as part of Posts returned from WP API
 */
class FeaturedMediaModel {
  /**
     * Constructor for the FeaturedMediaModel class
     *
     * @param  {Object} media The post's featuredmedia object
     * @param  {Object} posttitle The post's title, as a fallback
     */
  constructor(media, posttitle) {
    if (!media) {
      this.rawsrc = MISC.PLACEHOLDER_IMG;
      this.smallsrc = MISC.PLACEHOLDER_IMG;
      this.alt = posttitle;
    } else {
      this.rawsrc = media[0].source_url;
      this.smallsrc = typeof media[0].media_details.sizes.medium_large !== 'undefined' ? media[0].media_details.sizes.medium_large.source_url : media[0].source_url;
      this.alt = !!media[0].alt_text ? media[0].alt_text : !!media[0].caption.rendered ? media[0].caption.rendered : !!media[0].title.rendered ? media[0].title.rendered : posttitle;
    }
  }
}

/**
 * EyebrowModel
 *
 * Model for if and eyebrow value is returned  in Posts from WP API
 */
class EyebrowModel {
  /**
     * Constructor for the EyebrowModel class
     *
     * @param  {Object} eyebrow The post's eyebrow object
     * @param  {Object} term The post's first term, as a fallback
     */
  constructor(eyebrow, term) {
    if (eyebrow[0] !== '') {
      this.label = eyebrow[0];
    } else {
      const termset = new TermsModel(term, 'category');
      this.label = termset.terms[0].name;
    }
  }
}

/**
 * PostModel
 *
 * Model for a Term returned as part of Terms->Posts returned from WP API
 */
class PostModel {
  /**
     * Constructor for the PostModel class
     *
     * @param  {Object} post An object of data to transform and model
     * @param  {String} posttype the type of post we're loading
     */
  constructor(post, posttype) {
    this.id = post.id;
    this.date = post.date;
    this.featuredmedia = post.featured_media > 0 ? new FeaturedMediaModel(post._embedded['wp:featuredmedia'], post.title.rendered) : new FeaturedMediaModel(false, post.title.rendered);
    this.meta = !isobjectempty(post.meta) ? post.meta : !!post.post_meta ? post.post_meta : null;
    this.slug = post.slug;
    this.link = !!post.post_meta && post.post_meta.hasOwnProperty('override_url') && post.post_meta.override_url[0].length > 0 ? post.post_meta.override_url[0] : post.link;
    this.formattedDate = !!post.date ? convertdate(post.date) : null;
    this.title = post.title.rendered;
    this.capabilities = new TermsModel(post._embedded['wp:term'], 'capabilities');
    this.categories = new TermsModel(post._embedded['wp:term'], 'category');
    this.tags = new TermsModel(post._embedded['wp:term'], 'post_tag');
    this.category_cta = !!post.category_cta ? post.category_cta : 'Read';
    this.authors = post.article_author !== '' && !!post.article_author ? new AuthorsModel(post.article_author) : null;
    this.excerpt = !!post.excerpt ? post.excerpt.rendered.replace(/<[^>]*>?/gm, '').substring(0, 150) : null;
    this.eyebrow = posttype === MISC.CASE_STUDY ? null : new EyebrowModel(post.post_meta.eyebrow_label, post._embedded['wp:term']);
  }
}

/**
 * No Posts
 *
 * Model for a Term returned as part of Terms->Posts returned from WP API that has no results
 */
class NoPosts {
  /**
     * Constructor for the NoPosts class
     *
     */
  constructor() {
    this.message = MISC.NO_RESULTS;
  }
}

/**
 * LoadPostsModel
 *
 * Model for API call results from WP Search filter
 */
export default class LoadPostsModel {
  /**
     * Constructor for the Model class which tests that data was
     * passed into the constructor and then calls the `fromJSON`
     * function to being translating the data
     *
     * @param  {Object} posts An object of data to transform and model
     * @param  {String} posttype the type of post we're loading
     */
  constructor(posts, posttype) {
    this.posts = [];

    if (posts.length > 0) {
      posts.forEach((post) => {
        this.posts.push(new PostModel(post, posttype));
      });
    } else {
      this.posts = new NoPosts();
    }
  }
}

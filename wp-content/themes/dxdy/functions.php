<?php
/**
 * Timber starter-theme
 * https://github.com/timber/starter-theme
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since   Timber 0.1
 */

/**
 * If you are installing Timber as a Composer dependency in your theme, you'll need this block
 * to load your dependencies and initialize Timber. If you are using Timber via the WordPress.org
 * plug-in, you can safely delete this block.
 */
$composer_autoload = __DIR__ . '/vendor/autoload.php';
if ( file_exists( $composer_autoload ) ) {
	require_once $composer_autoload;
	$timber = new Timber\Timber();
}

/**
 * This ensures that Timber is loaded and available as a PHP class.
 * If not, it gives an error message to help direct developers on where to activate
 */
if ( ! class_exists( 'Timber' ) ) {

	add_action(
		'admin_notices',
		function() {
			echo '<div class="error"><p>Timber not activated. Make sure you activate the plugin in <a href="' . esc_url( admin_url( 'plugins.php#timber' ) ) . '">' . esc_url( admin_url( 'plugins.php' ) ) . '</a></p></div>';
		}
	);

	add_filter(
		'template_include',
		function( $template ) {
			return get_stylesheet_directory() . '/static/no-timber.html';
		}
	);
	return;
}

/**
 * Sets the directories (inside your theme) to find .twig files
 */
Timber::$dirname = array( 'templates', 'views' );

/**
 * By default, Timber does NOT autoescape values. Want to enable Twig's autoescape?
 * No prob! Just set this value to true
 */
Timber::$autoescape = false;


/**
 * We're going to configure our theme inside of a subclass of Timber\Site
 * You can move this to its own file and include here via php's include("MySite.php")
 */
class StarterSite extends Timber\Site {
	/** Add timber support. */
	public function __construct() {
		add_action( 'after_setup_theme', array( $this, 'theme_supports' ) );
		add_filter( 'timber/context', array( $this, 'add_to_context' ) );
		add_filter( 'timber/twig', array( $this, 'add_to_twig' ) );
		add_action('init', [ $this, 'addMenus' ]);
		add_action( 'init', array( $this, 'register_post_types' ) );
		add_action( 'init', array( $this, 'register_taxonomies' ) );
    	add_action('wp_enqueue_scripts', array( $this, 'addStylesAndScripts' ), 999, true);
		parent::__construct();
	}

	/** This is where you can register custom post types. */
	public function register_post_types() {
	  register_post_type('Locations', [
    	    'labels' => [
      		'name' => __( 'Locations' ),
      		'singular_name' => __( 'Locations' ),
      		'all_items' => __( 'All Locations' ),
            'add_new' => __( 'Add Location' ),
      		'add_new_item' => __( 'Add New Location' ),
      		'edit' => __( 'Edit' ),
      		'edit_item' => __( 'Edit Location' ),
      		'new_item' => __( 'New Location' ),
      		'view_item' => __( 'View Location' ),
      		'search_items' =>  __( 'Search Locations' )
    	    ],
      	    'public' => true,
      	    'exclude_from_search' => false,
      	    'show_ui' => true,
	    	'hierarchical' => false, // This will allow URL's like "/labels/boston/cambridge/"
      	    'supports' => array('title','thumbnail'),
      	    'menu_icon' => 'dashicons-admin-location'
  	   ]);
	}
	/** This is where you can register custom taxonomies. */
	public function register_taxonomies() {

	}

	/** This is where you add some context
	 *
	 * @param string $context context['this'] Being the Twig's {{ this }}.
	 */
	public function add_to_context( $context ) {
		$context['custom_logo_url'] = wp_get_attachment_image_url(get_theme_mod('custom_logo'), 'full');
		$context['foo']   = 'bar';
		$context['stuff'] = 'I am a value set in your functions.php file';
		$context['notes'] = 'These values are available everytime you call Timber::context();';
		$context['menu']  = new Timber\Menu();
		$context['quick_links_menu'] = new Timber\Menu('quick-links-menu');
        $context['nav_menu'] = new Timber\Menu('nav-menu');
        $context['footer_menu_left'] = new Timber\Menu('footer-menu-left');
        $context['footer_menu_center'] = new Timber\Menu('footer-menu-center');
        $context['footer_menu_right'] = new Timber\Menu('footer-menu-right');
		$context['site']  = $this;
		$context['options'] = get_fields('options');
		return $context;
	}

	public function addMenus()
    {
        register_nav_menus([
          'nav-menu' => __('Header Navbar'),
          'quick-links-menu' => __('Header Quick Links'),
          'footer-menu-left' => __('Footer Left'),
          'footer-menu-center' => __('Footer Center'),
          'footer-menu-right' => __('Footer Right'),
        ]);
    }

	public function theme_supports() {
		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support(
			'html5',
			array(
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
			)
		);

		/*
		 * Enable support for Post Formats.
		 *
		 * See: https://codex.wordpress.org/Post_Formats
		 */
		add_theme_support(
			'post-formats',
			array(
				'aside',
				'image',
				'video',
				'quote',
				'link',
				'gallery',
				'audio',
			)
		);

		add_theme_support( 'menus' );

		$defaults = array(
			'height' 	  => 100, 
			'width' 	  => 250, 
			'flex-height' => false, 
			'flex-width'  => false, 
			'unlink-homepage-logo' => true,
		);
		add_theme_support( 'custom-logo' , $defaults );
	}

	/** This Would return 'foo bar!'.
	 *
	 * @param string $text being 'foo', then returned 'foo bar!'.
	 */
	public function myfoo( $text ) {
		$text .= ' bar!';
		return $text;
	}

	/** This is where you can add your own functions to twig.
	 *
	 * @param string $twig get extension.
	 */
	public function add_to_twig( $twig ) {
		$twig->addExtension( new Twig\Extension\StringLoaderExtension() );
		$twig->addFilter( new Twig\TwigFilter( 'myfoo', array( $this, 'myfoo' ) ) );
		return $twig;
	}

  public function addStylesAndScripts()
  {
      global $wp_styles;

      $theme = wp_get_theme();
      wp_register_style('themestyles', get_template_directory_uri() . '/style.css', array(), $theme['Version'], 'all');
      wp_enqueue_style('themestyles'); // Enqueue it

      if (!is_admin()) {
        //wp_deregister_script('jquery');
      }
      // use unuglified JS for localhost, minified JS for server
      if (substr($_SERVER['REMOTE_ADDR'], 0, 4) == '127.' || $_SERVER['REMOTE_ADDR'] == '::1' || strpos(substr($_SERVER['SERVER_NAME'], strrpos($_SERVER['SERVER_NAME'], ".")+1), "local") !== false) {
          wp_enqueue_script(
            'site-js',
            get_template_directory_uri() . '/js/scripts.js',
            [],
            $theme['Version'],
            true
        );
      } else {
        wp_enqueue_script(
            'site-js',
            get_template_directory_uri() . '/js/scripts.js',
            [],
            $theme['Version'],
            true
        );
      }
  }
}

new StarterSite();

define( 'MY_PLUGIN_DIR_PATH', untrailingslashit( plugin_dir_path( 'D:\xampp\htdocs\Group B\wp-content\themes\dxdy\acf-json') ) );add_filter('acf/settings/save_json', 'my_acf_json_save_point');
 
function my_acf_json_save_point( $path ) {
    
    // Update path
    $path = MY_PLUGIN_DIR_PATH . '/acf-json';
    // Return path
    return $path;
    
}
add_filter('acf/settings/load_json', 'my_acf_json_load_point');

/**
 * Register the path to load the ACF json files so that they are version controlled.
 * @param $paths The default relative path to the folder where ACF saves the files.
 * @return string The new relative path to the folder where we are saving the files.
 */
function my_acf_json_load_point( $paths ) {
   // Remove original path
   unset( $paths[0] );
// Append our new path
   $paths[] = MY_PLUGIN_DIR_PATH . '/acf-json';
   return $paths;
}

// option pages
if( function_exists('acf_add_options_page') ) {
  acf_add_options_page([
    'page_title'  => 'Global Settings',
    'menu_title'  => 'Global Settings',
    'menu_slug'   => 'global-settings',
    'capability'  => 'edit_posts',
    'redirect'    => false
  ]);

  acf_add_options_sub_page([
    'page_title'  => 'Header',
    'menu_title'  => 'Header',
    'menu_slug'   => 'nav-settings',
    'parent_slug' => 'global-settings',
  ]);

  acf_add_options_sub_page([
    'page_title'  => 'Footer',
    'menu_title'  => 'Footer',
    'menu_slug'   => 'footer-settings',
    'parent_slug' => 'global-settings',
  ]);

  acf_add_options_sub_page([
    'page_title'  => 'Popup',
    'menu_title'  => 'Popup',
    'menu_slug'   => 'popup-settings',
    'parent_slug' => 'global-settings',
  ]);

  acf_add_options_sub_page([
    'page_title'  => 'Maps',
    'menu_title'  => 'Maps',
    'menu_slug'   => 'map-settings',
    'parent_slug' => 'global-settings',
  ]);

  acf_add_options_sub_page([
    'page_title'  => 'Templates',
    'menu_title'  => 'Templates',
    'menu_slug'   => 'template-settings',
    'parent_slug' => 'global-settings',
  ]);

  acf_add_options_sub_page([
    'page_title'  => 'Vacancy Application',
    'menu_title'  => 'Vacancy Application',
    'menu_slug'   => 'vacancy-app-settings',
    'parent_slug' => 'global-settings',
  ]);

  acf_add_options_sub_page([
    'page_title'  => '404 Page',
    'menu_title'  => '404 Page',
    'menu_slug'   => '404-settings',
    'parent_slug' => 'global-settings',
  ]);
}


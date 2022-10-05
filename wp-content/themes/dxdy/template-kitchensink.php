<?php
/**
 * The kitchen sink template file
 * This is to be used during development to display and test components
 * locally and on DEV environments.
 *
 * Methods for TimberHelper can be found in the /lib sub-directory
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since   Timber 0.1
 */

$context          = Timber::context();
$context['posts'] = new Timber\PostQuery();
$context['foo']   = 'bar';
$templates        = array( 'kitchensink.twig' );


Timber::render( $templates, $context );

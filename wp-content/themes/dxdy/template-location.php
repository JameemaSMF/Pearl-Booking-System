<?php
/**
 * Template Name: Location Page
 */


$context = Timber::get_context();
$timber_post     = new Timber\Post();
$context['post'] = $timber_post;
$context['location-page']= get_field('location-page');
$templates = ['views/template/location.twig'];
// $context['post'] = $post;
Timber::render($templates, $context);

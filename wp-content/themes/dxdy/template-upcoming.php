<?php
/**
 * Template Name: upcoming Page
 */


$context = Timber::get_context();
$timber_post     = new Timber\Post();
$context['post'] = $timber_post;
$context['upcoming-page']= get_field('upcoming-page');
$templates = ['views/templates/upcoming.twig'];
// $context['post'] = $post;
Timber::render($templates, $context);

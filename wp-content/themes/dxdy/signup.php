<?php
/**
 * Template Name: Signup Page
 */


$context = Timber::get_context();
$timber_post     = new Timber\Post();
$context['post'] = $timber_post;
$context['signup-page']= get_field('signup-page');
$templates = ['views/template/signup-page.twig'];
// $context['post'] = $post;
Timber::render($templates, $context);
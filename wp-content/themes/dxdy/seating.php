<?php
/**
 * Template Name: Seating Page
 */


$context = Timber::get_context();
$timber_post     = new Timber\Post();
$context['post'] = $timber_post;
$context['seating-page']= get_field('seating-page');
$templates = ['views/template/seating-page.twig'];
// $context['post'] = $post;
Timber::render($templates, $context);
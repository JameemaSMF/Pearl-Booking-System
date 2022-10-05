<?php
/**
 * Template Name: BookNow3 Page
 */


$context = Timber::get_context();
$timber_post     = new Timber\Post();
$context['post'] = $timber_post;
$context['booknowpage3']= get_field('booknowpage3');
$templates = ['views/template/book3.twig'];
// $context['post'] = $post;
Timber::render($templates, $context);

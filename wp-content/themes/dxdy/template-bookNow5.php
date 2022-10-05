<?php
/**
 * Template Name: BookNow5 Page
 */


$context = Timber::get_context();
$timber_post     = new Timber\Post();
$context['post'] = $timber_post;
$context['booknowpage5']= get_field('booknowpage5');
$templates = ['views/template/book5.twig'];
// $context['post'] = $post;
Timber::render($templates, $context);

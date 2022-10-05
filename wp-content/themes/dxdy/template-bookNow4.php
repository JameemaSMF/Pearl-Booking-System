<?php
/**
 * Template Name: BookNow4 Page
 */


$context = Timber::get_context();
$timber_post     = new Timber\Post();
$context['post'] = $timber_post;
$context['booknowpage4']= get_field('booknowpage4');
$templates = ['views/template/book4.twig'];
// $context['post'] = $post;
Timber::render($templates, $context);

<?php
/**
 * Template Name: BookNow2 Page
 */


$context = Timber::get_context();
$timber_post     = new Timber\Post();
$context['post'] = $timber_post;
$context['booknowpage2']= get_field('booknowpage2');
$templates = ['views/template/book2.twig'];
// $context['post'] = $post;
Timber::render($templates, $context);

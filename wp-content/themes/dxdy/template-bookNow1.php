<?php
/**
 * Template Name: BookNow1 Page
 */


$context = Timber::get_context();
$timber_post     = new Timber\Post();
$context['post'] = $timber_post;
$context['booknowpage1']= get_field('booknowpage1');
$templates = ['views/template/book1.twig'];
// $context['post'] = $post;
Timber::render($templates, $context);

<?php
/**
 * Template Name: AiringNow Page
 */


$context = Timber::get_context();
$timber_post     = new Timber\Post();
$context['post'] = $timber_post;
$context['airingnow-page']= get_field('airingnow-page');
$templates = ['views/template/AiringNow.twig'];
// $context['post'] = $post;
Timber::render($templates, $context);

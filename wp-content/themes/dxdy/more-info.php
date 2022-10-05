<?php
/**
 * Template Name: More Info Page
 */
use Timber\Timber;

$context = Timber::get_context();
$timber_post = new \Timber\Post();
$context['post'] = $timber_post;
$templates = [ 'views/more-info-page.twig' ];

Timber::render($templates, $context);

<?php
/**
 * Template Name: Book Now Page
 */
use Timber\Timber;

$context = Timber::get_context();
$timber_post = new \Timber\Post();
$context['post'] = $timber_post;
$templates = [ 'views/book-now-page.twig' ];

Timber::render($templates, $context);

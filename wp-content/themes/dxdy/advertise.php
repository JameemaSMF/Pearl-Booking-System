<?php
/**
 * Template Name: Advertise Page
 */
use Timber\Timber;

$context = Timber::get_context();
$timber_post = new \Timber\Post();
$context['post'] = $timber_post;
$templates = [ 'views/advertise-page.twig' ];

Timber::render($templates, $context);

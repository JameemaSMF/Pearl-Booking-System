<?php
/**
 * Template Name: landingpage
 */
use Timber\Timber;

$context = Timber::get_context();
$timber_post = new \Timber\Post();
$context['post'] = $timber_post;
$context['landingpage']= get_field('landingpage');
$templates = ['views/template/landing.twig'];

Timber::render($templates, $context);
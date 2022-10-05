<?php
/**
 * Template Name: Landing Page Gallery
 */
$context = Timber::get_context();
$post = Timber::get_post();
$templates = ['views/landing-view-gallery.twig'];
$context['post'] = $post;
Timber::render($templates, $context);
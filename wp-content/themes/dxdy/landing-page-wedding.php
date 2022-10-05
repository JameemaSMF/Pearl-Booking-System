<?php
/**
 * Template Name: Landing Page Wedding
 */
$context = Timber::get_context();
$post = Timber::get_post();
$templates = ['views/landing-view-wedding.twig'];
$context['post'] = $post;
Timber::render($templates, $context);
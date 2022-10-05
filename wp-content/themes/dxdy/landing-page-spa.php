<?php
/**
 * Template Name: Landing Page Spa
 */
$context = Timber::get_context();
$post = Timber::get_post();
$templates = ['views/landing-view-spa.twig'];
$context['post'] = $post;
Timber::render($templates, $context);
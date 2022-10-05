<?php
/**
 * Template Name: Landing Page Dining
 */
$context = Timber::get_context();
$post = Timber::get_post();
$templates = ['views/landing-view-dining.twig'];
$context['post'] = $post;
Timber::render($templates, $context);
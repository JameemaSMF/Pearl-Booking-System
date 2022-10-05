<?php
/**
 * Template Name: Landing Page
 */
$context = Timber::get_context();
$post = Timber::get_post();
$templates = ['views/landing-view.twig'];
$context['post'] = $post;
Timber::render($templates, $context);
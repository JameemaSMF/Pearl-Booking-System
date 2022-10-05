<?php
/**
 * Template Name: Landing Page Experience
 */
$context = Timber::get_context();
$post = Timber::get_post();
$templates = ['views/landing-view-experience.twig'];
$context['post'] = $post;
Timber::render($templates, $context);
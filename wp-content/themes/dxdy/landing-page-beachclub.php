<?php
/**
 * Template Name: Landing Page Beach-Club
 */
$context = Timber::get_context();
$post = Timber::get_post();
$templates = ['views/landing-view-beachclub.twig'];
$context['post'] = $post;
Timber::render($templates, $context);
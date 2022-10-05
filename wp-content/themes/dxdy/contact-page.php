<?php
/**
 * Template Name: Contact Page Footer
 */
$context = Timber::get_context();
$post = Timber::get_post();
$templates = ['views/landing-view-contact.twig'];
$context['post'] = $post;
Timber::render($templates, $context);
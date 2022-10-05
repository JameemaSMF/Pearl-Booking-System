<?php
/**
 * Template Name: Landing Page Offers
 */
$context = Timber::get_context();
$post = Timber::get_post();
$templates = ['views/landing-view-offer.twig'];
$context['post'] = $post;
Timber::render($templates, $context);
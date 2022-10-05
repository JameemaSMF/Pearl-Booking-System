<?php
/**
 * Template Name: Landing Page Rooms
 */
$context = Timber::get_context();
$post = Timber::get_post();
$templates = ['views/landing-view-rooms.twig'];
$context['post'] = $post;
Timber::render($templates, $context);
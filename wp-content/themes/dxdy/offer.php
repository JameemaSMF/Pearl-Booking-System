<?php
/**
 * Template Name: Offer Page
 */


$context = Timber::get_context();
$timber_post     = new Timber\Post();
$context['post'] = $timber_post;
$context['offer-page']= get_field('offer-page');
$templates = ['views/template/offer-page.twig'];
// $context['post'] = $post;
Timber::render($templates, $context);
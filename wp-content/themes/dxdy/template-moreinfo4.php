<?php
/**
 * Template Name: MoreInfo4 Page
 */
use Timber\Timber;

$context = Timber::get_context();
$timber_post = new \Timber\Post();
$context['post'] = $timber_post;
$context['moreinfopage4']= get_field('moreinfopage4');
$templates = ['views/template/moreinfo4.twig'];

Timber::render($templates, $context);

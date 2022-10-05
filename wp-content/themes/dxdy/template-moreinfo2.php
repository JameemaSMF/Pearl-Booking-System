<?php
/**
 * Template Name: MoreInfo2 Page
 */
use Timber\Timber;

$context = Timber::get_context();
$timber_post = new \Timber\Post();
$context['post'] = $timber_post;
$context['moreinfopage2']= get_field('moreinfopage2');
$templates = ['views/template/moreinfo2.twig'];

Timber::render($templates, $context);

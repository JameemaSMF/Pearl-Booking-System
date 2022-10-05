<?php
/**
 * Template Name: MoreInfo5 Page
 */
use Timber\Timber;

$context = Timber::get_context();
$timber_post = new \Timber\Post();
$context['post'] = $timber_post;
$context['moreinfopage5']= get_field('moreinfopage5');
$templates = ['views/template/moreinfo5.twig'];

Timber::render($templates, $context);

<?php
/**
 * Template Name: MoreInfo6 Page
 */
use Timber\Timber;

$context = Timber::get_context();
$timber_post = new \Timber\Post();
$context['post'] = $timber_post;
$context['moreinfopage6']= get_field('moreinfopage6');
$templates = ['views/template/moreinfo6.twig'];

Timber::render($templates, $context);

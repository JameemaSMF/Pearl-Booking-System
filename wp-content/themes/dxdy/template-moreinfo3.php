<?php
/**
 * Template Name: MoreInfo3 Page
 */
use Timber\Timber;

$context = Timber::get_context();
$timber_post = new \Timber\Post();
$context['post'] = $timber_post;
$context['moreinfopage3']= get_field('moreinfopage3');
$templates = ['views/template/moreinfo3.twig'];

Timber::render($templates, $context);

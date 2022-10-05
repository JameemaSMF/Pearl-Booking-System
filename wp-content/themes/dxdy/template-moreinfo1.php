<?php
/**
 * Template Name: MoreInfo1 Page
 */
use Timber\Timber;

$context = Timber::get_context();
$timber_post = new \Timber\Post();
$context['post'] = $timber_post;
$context['moreinfopage1']= get_field('moreinfopage1');
$templates = ['views/template/moreinfo1.twig'];

Timber::render($templates, $context);

<?php
/**
 * Template Name: Login Page
 */


$context = Timber::get_context();
$timber_post     = new Timber\Post();
$context['post'] = $timber_post;
$context['login-page']= get_field('login-page');
$templates = ['views/template/login-page.twig'];
// $context['post'] = $post;
Timber::render($templates, $context);
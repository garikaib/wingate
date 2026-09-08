<?php
/**
 * The default template for displaying all WordPress pages that don't have
 * a more specific template (page-{slug}.php, or the opt-in "Wingate Styled
 * Page" template). Without this file, WordPress falls through to the
 * parent theme's block template, which never calls get_header() and skips
 * all of this theme's chrome — including dark mode.
 *
 * @package Wingate
 */

get_header();
?>

<?php
while ( have_posts() ) :
	the_post();
	get_template_part( 'template-parts/content', 'page' );
endwhile;
?>

<?php
get_footer();

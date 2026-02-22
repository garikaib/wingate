<?php
/**
 * Template Name: Club House Page (Legacy)
 */

get_header();
?>

<main class="wp-block-group" style="margin-top:0">
	<?php
	while ( have_posts() ) :
		the_post();
		the_content();
	endwhile;
	?>
</main>

<?php
get_footer();

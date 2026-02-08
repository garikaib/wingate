<?php
/**
 * Wingate child theme functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Wingate
 */

add_action( 'wp_enqueue_scripts', 'wingate_enqueue_assets' );
function wingate_enqueue_assets() {
	// Parent theme style
	wp_enqueue_style( 'twentytwentyfive-style', get_template_directory_uri() . '/style.css' );

	// Google Fonts
	wp_enqueue_style( 'wingate-fonts', 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Montserrat:wght@300;400;700&family=Merriweather:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600&display=swap', array(), null );

	// React Bundle (dist folder)
	if ( file_exists( get_stylesheet_directory() . '/dist/new-wingate.css' ) ) {
		wp_enqueue_style( 'wingate-react-style', get_stylesheet_directory_uri() . '/dist/new-wingate.css', array(), wp_get_theme()->get('Version') );
	}
	
	
	wp_enqueue_script( 'wingate-react-bundle', get_stylesheet_directory_uri() . '/dist/wingate-theme.es.js', array(), wp_get_theme()->get('Version'), true );
}

add_action( 'wp_body_open', 'wingate_inject_header_root' );
function wingate_inject_header_root() {
	echo '<div id="header-root"></div>';
}

// Hide the default theme header via CSS
add_action( 'wp_head', 'wingate_hide_default_header' );
function wingate_hide_default_header() {
	?>
	<style>
		.wp-block-template-part.site-header, 
		header.wp-block-template-part,
		.wp-block-template-part.site-footer,
		footer.wp-block-template-part { 
			display: none !important; 
		}
	</style>
	<?php
}

add_action( 'wp_footer', 'wingate_inject_footer_root', 0 );
function wingate_inject_footer_root() {
	echo '<div id="footer-root"></div>';
}

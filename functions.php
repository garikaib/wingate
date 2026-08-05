<?php
/**
 * Wingate child theme functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Wingate
 */

add_action( 'after_setup_theme', 'wingate_enable_script_modules_output', 1 );
function wingate_enable_script_modules_output() {
	/*
	 * Classic templates rendering block-based header/footer can enqueue
	 * script modules (e.g. core/navigation). Ensure import maps are printed.
	 */
	if ( function_exists( 'wp_default_script_modules' ) ) {
		wp_default_script_modules();
	}

	if ( function_exists( 'wp_script_modules' ) ) {
		wp_script_modules()->add_hooks();
	}
}

add_action( 'after_setup_theme', 'wingate_setup_theme_features', 5 );
function wingate_setup_theme_features() {
	add_theme_support( 'title-tag' );
}

function wingate_get_public_rest_nonce() {
	return wp_create_nonce( 'wingate_public_rest' );
}

function wingate_get_public_rest_request_nonce( WP_REST_Request $request ) {
	$header_nonce = $request->get_header( 'x-wingate-nonce' );
	if ( is_string( $header_nonce ) && '' !== trim( $header_nonce ) ) {
		return sanitize_text_field( $header_nonce );
	}

	$param_nonce = $request->get_param( 'wingate_nonce' );
	return is_string( $param_nonce ) ? sanitize_text_field( $param_nonce ) : '';
}

function wingate_get_request_header_host( $header_value ) {
	if ( ! is_string( $header_value ) || '' === trim( $header_value ) ) {
		return '';
	}

	$parts = wp_parse_url( trim( $header_value ) );
	if ( ! is_array( $parts ) || empty( $parts['host'] ) ) {
		return '';
	}

	return strtolower( (string) $parts['host'] );
}

function wingate_is_same_origin_public_rest_request( WP_REST_Request $request ) {
	$site_host = wp_parse_url( home_url(), PHP_URL_HOST );
	$site_host = is_string( $site_host ) ? strtolower( $site_host ) : '';
	if ( '' === $site_host ) {
		return false;
	}

	$origin_host  = wingate_get_request_header_host( $request->get_header( 'origin' ) );
	$referer_host = wingate_get_request_header_host( $request->get_header( 'referer' ) );

	return $site_host === $origin_host || $site_host === $referer_host;
}

function wingate_get_request_client_ip() {
	$candidates = array(
		isset( $_SERVER['HTTP_X_FORWARDED_FOR'] ) ? (string) $_SERVER['HTTP_X_FORWARDED_FOR'] : '',
		isset( $_SERVER['REMOTE_ADDR'] ) ? (string) $_SERVER['REMOTE_ADDR'] : '',
	);

	foreach ( $candidates as $candidate ) {
		if ( '' === $candidate ) {
			continue;
		}

		$parts = array_map( 'trim', explode( ',', $candidate ) );
		foreach ( $parts as $part ) {
			if ( filter_var( $part, FILTER_VALIDATE_IP ) ) {
				return $part;
			}
		}
	}

	return 'unknown';
}

function wingate_check_public_rest_rate_limit( $bucket, $limit, $window_seconds ) {
	$ip  = wingate_get_request_client_ip();
	$key = 'wingate_rl_' . md5( sanitize_key( (string) $bucket ) . '|' . $ip );
	$hit = get_transient( $key );
	$hit = is_array( $hit ) ? $hit : array( 'count' => 0 );

	if ( (int) $hit['count'] >= (int) $limit ) {
		return new WP_Error(
			'rate_limited',
			__( 'Too many requests. Please wait a few minutes and try again.', 'wingate' ),
			array( 'status' => 429 )
		);
	}

	$hit['count'] = (int) $hit['count'] + 1;
	set_transient( $key, $hit, max( 60, (int) $window_seconds ) );
	return true;
}

function wingate_verify_public_rest_request( WP_REST_Request $request, $bucket, $limit = 5, $window_seconds = 600 ) {
	$honeypot = $request->get_param( 'website' );
	if ( is_string( $honeypot ) && '' !== trim( $honeypot ) ) {
		return new WP_Error(
			'spam_detected',
			__( 'Spam protection triggered.', 'wingate' ),
			array( 'status' => 400 )
		);
	}

	$nonce = wingate_get_public_rest_request_nonce( $request );
	if ( '' !== $nonce && wp_verify_nonce( $nonce, 'wingate_public_rest' ) ) {
		return wingate_check_public_rest_rate_limit( $bucket, $limit, $window_seconds );
	}

	if ( ! wingate_is_same_origin_public_rest_request( $request ) ) {
		return new WP_Error(
			'invalid_nonce',
			__( 'Security check failed. Refresh the page and try again.', 'wingate' ),
			array( 'status' => 403 )
		);
	}

	return wingate_check_public_rest_rate_limit( $bucket, $limit, $window_seconds );
}

add_action( 'init', 'wingate_register_page_subtitle_meta' );
function wingate_register_page_subtitle_meta() {
	register_post_meta(
		'page',
		'_wingate_page_subtitle',
		array(
			'type'              => 'string',
			'single'            => true,
			'show_in_rest'      => true,
			'sanitize_callback' => 'sanitize_text_field',
			'auth_callback'     => function() {
				return current_user_can( 'edit_pages' );
			},
			'default'           => '',
		)
	);
}

/**
 * Ensure template-driven pages always have a sensible browser title.
 *
 * @param array<string,string> $parts Document title parts.
 * @return array<string,string>
 */
function wingate_document_title_fallbacks( $parts ) {
	$current_title = isset( $parts['title'] ) ? trim( (string) $parts['title'] ) : '';
	if ( '' !== $current_title ) {
		return $parts;
	}

	if ( is_front_page() ) {
		$parts['title'] = 'Home';
		return $parts;
	}

	if ( is_page_template( 'page-mens-handicap.php' ) ) {
		$parts['title'] = "Men's Handicap";
		return $parts;
	}

	if ( is_page_template( 'page-ladies-handicap.php' ) ) {
		$parts['title'] = "Ladies' Handicap";
		return $parts;
	}

	if ( is_page_template( 'page-handicaps.php' ) ) {
		$parts['title'] = 'Handicap Hub';
		return $parts;
	}

	if ( is_page_template( 'page-membership.php' ) ) {
		$parts['title'] = 'Membership';
		return $parts;
	}
	if ( is_page_template( 'page-the-kitchen.php' ) ) {
		$parts['title'] = 'The Kitchen';
		return $parts;
	}
	if ( is_page_template( 'page-loyal-ancient.php' ) ) {
		$parts['title'] = 'The Loyal & Ancient';
		return $parts;
	}

	if ( is_singular( 'wingate_handicap' ) ) {
		$post_id = get_queried_object_id();
		$post_title = $post_id ? trim( wp_strip_all_tags( (string) get_the_title( $post_id ) ) ) : '';
		$parts['title'] = '' !== $post_title ? html_entity_decode( $post_title, ENT_QUOTES | ENT_HTML5, 'UTF-8' ) : 'Handicap Board';
		return $parts;
	}

	if ( is_singular( 'wingate_event' ) ) {
		$post_id = get_queried_object_id();
		$post_title = $post_id ? trim( wp_strip_all_tags( (string) get_the_title( $post_id ) ) ) : '';
		$parts['title'] = '' !== $post_title ? html_entity_decode( $post_title, ENT_QUOTES | ENT_HTML5, 'UTF-8' ) : 'Event';
		return $parts;
	}

	if ( is_singular( 'wingate_gallery' ) ) {
		$post_id = get_queried_object_id();
		$post_title = $post_id ? trim( wp_strip_all_tags( (string) get_the_title( $post_id ) ) ) : '';
		$parts['title'] = '' !== $post_title ? html_entity_decode( $post_title, ENT_QUOTES | ENT_HTML5, 'UTF-8' ) : 'Gallery';
		return $parts;
	}

	$parts['title'] = 'Wingate Park Golf Club';
	return $parts;
}
add_filter( 'document_title_parts', 'wingate_document_title_fallbacks', 20 );

add_action( 'wp_enqueue_scripts', 'wingate_enqueue_assets' );
add_action( 'wp_enqueue_scripts', 'wingate_ensure_interactivity_import_map', 2 );
add_action( 'enqueue_block_editor_assets', 'wingate_enqueue_page_subtitle_editor_assets' );

function wingate_enqueue_page_subtitle_editor_assets() {
	$screen = function_exists( 'get_current_screen' ) ? get_current_screen() : null;
	if ( ! $screen || 'page' !== $screen->post_type || 'post' !== $screen->base ) {
		return;
	}

	wp_register_script(
		'wingate-page-subtitle-editor',
		'',
		array( 'wp-plugins', 'wp-edit-post', 'wp-element', 'wp-components', 'wp-data' ),
		(string) wp_get_theme()->get( 'Version' ),
		true
	);
	wp_enqueue_script( 'wingate-page-subtitle-editor' );

	$script = <<<'JS'
( function( wp ) {
	if ( ! wp || ! wp.plugins || ! wp.editPost || ! wp.element || ! wp.components || ! wp.data ) {
		return;
	}

	const { registerPlugin } = wp.plugins;
	const { PluginDocumentSettingPanel } = wp.editPost;
	const { createElement: el } = wp.element;
	const { TextareaControl } = wp.components;
	const { useSelect, useDispatch } = wp.data;

	function WingatePageSubtitlePanel() {
		const postType = useSelect( function( select ) {
			return select( 'core/editor' ).getCurrentPostType();
		}, [] );

		const meta = useSelect( function( select ) {
			return select( 'core/editor' ).getEditedPostAttribute( 'meta' ) || {};
		}, [] );

		const editPost = useDispatch( 'core/editor' ).editPost;

		if ( postType !== 'page' ) {
			return null;
		}

		return el(
			PluginDocumentSettingPanel,
			{
				name: 'wingate-page-subtitle-panel',
				title: 'Wingate Page Header',
				className: 'wingate-page-subtitle-panel',
			},
			el( TextareaControl, {
				label: 'Subtitle',
				help: 'Shown in the hero area of the Wingate Styled Page template.',
				rows: 3,
				value: meta._wingate_page_subtitle || '',
				onChange: function( value ) {
					editPost( {
						meta: Object.assign( {}, meta, {
							_wingate_page_subtitle: value,
						} ),
					} );
				},
			} )
		);
	}

	registerPlugin( 'wingate-page-subtitle-panel', {
		render: WingatePageSubtitlePanel,
		icon: null,
	} );
} )( window.wp );
JS;

	wp_add_inline_script( 'wingate-page-subtitle-editor', $script );
}

function wingate_ensure_interactivity_import_map() {
	if ( ! function_exists( 'wp_register_script_module' ) || ! function_exists( 'wp_enqueue_script_module' ) ) {
		return;
	}

	/*
	 * Force an import-map entry for @wordpress/interactivity in classic template
	 * rendering paths where core navigation can output module scripts first.
	 */
	wp_register_script_module(
		'wingate/interactivity-importmap-proxy',
		'',
		array( '@wordpress/interactivity' ),
		null
	);
	wp_enqueue_script_module( 'wingate/interactivity-importmap-proxy' );
}

function wingate_asset_version( $relative_path ) {
	$absolute_path = get_stylesheet_directory() . '/' . ltrim( $relative_path, '/' );
	if ( file_exists( $absolute_path ) ) {
		return (string) filemtime( $absolute_path );
	}

	return (string) wp_get_theme()->get( 'Version' );
}

function wingate_enqueue_assets() {
	$bundle_version = wingate_asset_version( 'dist/wingate-theme.es.js' );
	$style_version  = wingate_asset_version( 'dist/new-wingate.css' );

	// Parent theme style
	wp_enqueue_style( 'twentytwentyfive-style', get_template_directory_uri() . '/style.css' );

	// Google Fonts
	wp_enqueue_style( 'wingate-fonts', 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Montserrat:wght@300;400;700&family=Merriweather:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600&display=swap', array(), null );

	if ( file_exists( get_stylesheet_directory() . '/dist/new-wingate.css' ) ) {
		wp_enqueue_style( 'wingate-react-style', get_stylesheet_directory_uri() . '/dist/new-wingate.css', array(), $style_version );
	}

	if ( wingate_should_enqueue_react_bundle() ) {
		wp_enqueue_script( 'wingate-react-bundle', get_stylesheet_directory_uri() . '/dist/wingate-theme.es.js', array(), $bundle_version, true );
		wp_script_add_data( 'wingate-react-bundle', 'type', 'module' );
		wp_localize_script(
			'wingate-react-bundle',
			'wingateThemeData',
			array(
				'root'           => esc_url_raw( rest_url() ),
				'publicRestNonce'=> wingate_get_public_rest_nonce(),
				'contactDetails' => wingate_get_contact_details(),
			)
		);
	}
}

function wingate_should_enqueue_react_bundle() {
	if ( is_admin() ) {
		return false;
	}

	return is_front_page()
		|| is_404()
		|| is_page(
			array(
				'contact-us',
				'membership',
				'rates',
				'course',
				'green-fees',
				'the-kitchen',
				'loyal-ancient',
				'handicaps',
				'mens-handicap',
				'ladies-handicap',
				'hole-by-hole',
			)
		)
		|| is_page_template( 'page-contact-us.php' )
		|| is_page_template( 'page-membership.php' )
		|| is_page_template( 'page-rates.php' )
		|| is_page_template( 'page-course.php' )
		|| is_page_template( 'page-course-layout.php' )
		|| is_page_template( 'page-green-fees.php' )
		|| is_page_template( 'page-the-kitchen.php' )
		|| is_page_template( 'page-loyal-ancient.php' )
		|| is_page_template( 'page-handicaps.php' )
		|| is_page_template( 'page-mens-handicap.php' )
		|| is_page_template( 'page-ladies-handicap.php' )
		|| is_page_template( 'page-hole-by-hole.php' );
}

add_filter( 'script_loader_tag', 'wingate_force_module_script_tag', 10, 3 );
function wingate_force_module_script_tag( $tag, $handle, $src ) {
	// Check if this script should be a module
	$type = wp_scripts()->get_data( $handle, 'type' );
	$is_wingate_tools_admin = 0 === strpos( (string) $handle, 'wingate-tools-admin-' );
	
	if ( 'module' !== $type && 'wingate-react-bundle' !== $handle && ! $is_wingate_tools_admin ) {
		return $tag;
	}

	return sprintf(
		'<script type="module" src="%s" id="%s-js"></script>',
		esc_url( $src ),
		esc_attr( $handle )
	);
}




function wingate_get_theme_site_icon_uri( $filename = 'site-icon.png' ) {
	$path = get_stylesheet_directory() . '/assets/icons/' . $filename;
	if ( ! file_exists( $path ) ) {
		return '';
	}

	return get_stylesheet_directory_uri() . '/assets/icons/' . rawurlencode( $filename );
}

add_action( 'wp_head', 'wingate_add_favicon_fallback', 1 );
add_action( 'admin_head', 'wingate_add_favicon_fallback', 1 );
add_action( 'login_head', 'wingate_add_favicon_fallback', 1 );
function wingate_add_favicon_fallback() {
	if ( has_site_icon() ) {
		return;
	}

	$site_icon_uri  = wingate_get_theme_site_icon_uri( 'site-icon.png' );
	$favicon_32_uri = wingate_get_theme_site_icon_uri( 'favicon-32x32.png' );
	$apple_icon_uri = wingate_get_theme_site_icon_uri( 'apple-touch-icon.png' );

	if ( '' === $site_icon_uri && '' === $favicon_32_uri && '' === $apple_icon_uri ) {
		return;
	}

	if ( '' !== $site_icon_uri ) {
		echo '<link rel="icon" href="' . esc_url( $site_icon_uri ) . '" sizes="512x512" type="image/png">' . "\n";
		echo '<link rel="shortcut icon" href="' . esc_url( $site_icon_uri ) . '" type="image/png">' . "\n";
	}

	if ( '' !== $favicon_32_uri ) {
		echo '<link rel="icon" href="' . esc_url( $favicon_32_uri ) . '" sizes="32x32" type="image/png">' . "\n";
	}

	if ( '' !== $apple_icon_uri ) {
		echo '<link rel="apple-touch-icon" href="' . esc_url( $apple_icon_uri ) . '" sizes="180x180">' . "\n";
	}
}

add_action( 'wp_head', 'wingate_add_open_graph_meta', 2 );
function wingate_generate_meta_summary( $raw_text, $fallback = '', $max_words = 26 ) {
	$text = wp_strip_all_tags( html_entity_decode( (string) $raw_text, ENT_QUOTES | ENT_HTML5, 'UTF-8' ) );
	$text = preg_replace( '/\s+/', ' ', (string) $text );
	$text = trim( (string) $text );
	if ( '' === $text ) {
		$text = trim( (string) $fallback );
	}
	if ( '' === $text ) {
		return '';
	}
	return wp_trim_words( $text, $max_words );
}

function wingate_get_social_defaults_for_current_page() {
	$defaults = array(
		'summary' => 'Discover championship golf, events, and membership at Wingate Park Golf Club in Harare.',
		'image'   => home_url( '/wp-content/uploads/2026/02/20260131_124600-scaled.jpg' ),
	);

	if ( is_page_template( 'page-membership.php' ) ) {
		return array(
			'summary' => 'Explore Wingate membership options, subscription tiers, and application details.',
			'image'   => home_url( '/wp-content/uploads/2026/02/20260126_140911-scaled.jpg' ),
		);
	}
	if ( is_page_template( 'page-the-kitchen.php' ) || is_page( 'the-kitchen' ) ) {
		return array(
			'summary' => 'Explore The Kitchen at Wingate with breakfast, lunch, dinner, drinks, and kids menus.',
			'image'   => home_url( '/wp-content/uploads/2026/02/20260126_140911-1-scaled.jpg' ),
		);
	}
	if ( is_page_template( 'page-loyal-ancient.php' ) || is_page( 'loyal-ancient' ) ) {
		return array(
			'summary' => 'Discover The Loyal & Ancient pub and bar with whisky collections, cocktails, wines, and premium evening pours.',
			'image'   => home_url( '/wp-content/uploads/2026/02/20251219_185419-scaled.jpg' ),
		);
	}
	if ( is_page_template( 'page-mens-handicap.php' ) ) {
		return array(
			'summary' => "View the latest men's handicap boards, season trends, and event-level leaderboard updates.",
			'image'   => home_url( '/wp-content/uploads/2026/02/20260131_124600-scaled.jpg' ),
		);
	}
	if ( is_page_template( 'page-ladies-handicap.php' ) ) {
		return array(
			'summary' => 'View the latest ladies handicap boards, season trends, and event-level leaderboard updates.',
			'image'   => home_url( '/wp-content/uploads/2026/02/20260131_124600-scaled.jpg' ),
		);
	}
	if ( is_page_template( 'page-handicaps.php' ) ) {
		return array(
			'summary' => 'Compare Wingate handicap leaderboards across men and ladies divisions.',
			'image'   => home_url( '/wp-content/uploads/2026/02/20260131_124600-scaled.jpg' ),
		);
	}
	if ( is_page_template( 'page-course.php' ) || is_page_template( 'page-hole-by-hole.php' ) || is_page_template( 'page-course-layout.php' ) ) {
		return array(
			'summary' => 'Explore Wingate Park Golf Course hole-by-hole, including layout strategy and scorecard references.',
			'image'   => home_url( '/wp-content/uploads/2026/02/20260208_131606-scaled.jpg' ),
		);
	}
	if ( is_page_template( 'page-club-house.php' ) ) {
		return array(
			'summary' => 'Experience Wingate Club House dining, gatherings, and social spaces.',
			'image'   => home_url( '/wp-content/uploads/2026/02/20260126_140911-scaled.jpg' ),
		);
	}
	if ( is_post_type_archive( 'wingate_event' ) || is_singular( 'wingate_event' ) ) {
		return array(
			'summary' => 'Discover upcoming Wingate events, tournaments, weddings, banquets, and social experiences.',
			'image'   => home_url( '/wp-content/uploads/2026/02/wedding_example.jpg' ),
		);
	}

	return $defaults;
}

function wingate_get_current_public_url() {
	if ( is_singular() ) {
		return (string) get_permalink( get_queried_object_id() );
	}

	if ( is_home() || is_front_page() ) {
		return home_url( '/' );
	}

	global $wp;
	if ( isset( $wp->request ) && '' !== (string) $wp->request ) {
		return home_url( user_trailingslashit( (string) $wp->request ) );
	}

	return home_url( '/' );
}

function wingate_resolve_social_image( $post_id, $fallback_image ) {
	$image = '';

	if ( $post_id > 0 && has_post_thumbnail( $post_id ) ) {
		$image = (string) get_the_post_thumbnail_url( $post_id, 'full' );
	}

	if ( '' === $image && $post_id > 0 && is_singular( 'wingate_handicap' ) ) {
		$gallery_id = (int) get_post_meta( $post_id, 'gallery_id', true );
		if ( $gallery_id > 0 && function_exists( 'wingate_tools_get_gallery_items' ) ) {
			$items = wingate_tools_get_gallery_items( $gallery_id );
			if ( is_array( $items ) && ! empty( $items[0]['src'] ) ) {
				$image = (string) $items[0]['src'];
			}
		}
	}

	if ( '' === $image ) {
		$image = (string) $fallback_image;
	}

	return $image;
}

function wingate_add_open_graph_meta() {
	if ( is_admin() ) {
		return;
	}

	if ( class_exists( 'WPSEO_Frontend' ) ) {
		return;
	}

	$post_id  = (int) get_queried_object_id();
	$defaults = wingate_get_social_defaults_for_current_page();
	$url      = wingate_get_current_public_url();
	$title    = is_singular() ? (string) get_the_title( $post_id ) : wp_get_document_title();
	$title    = trim( html_entity_decode( wp_strip_all_tags( $title ), ENT_QUOTES | ENT_HTML5, 'UTF-8' ) );
	if ( '' === $title ) {
		$title = get_bloginfo( 'name' );
	}

	$raw_summary = '';
	if ( $post_id > 0 ) {
		$excerpt = (string) get_the_excerpt( $post_id );
		$content = (string) get_post_field( 'post_content', $post_id );
		$raw_summary = '' !== trim( $excerpt ) ? $excerpt : $content;
	}
	$description = wingate_generate_meta_summary( $raw_summary, $defaults['summary'] );
	$image       = wingate_resolve_social_image( $post_id, $defaults['image'] );
	$type        = is_singular( 'post' ) || is_singular( 'wingate_event' ) ? 'article' : 'website';
	$site_name   = get_bloginfo( 'name' );
	?>
	<meta property="og:type" content="<?php echo esc_attr( $type ); ?>">
	<meta property="og:title" content="<?php echo esc_attr( $title ); ?>">
	<meta property="og:description" content="<?php echo esc_attr( $description ); ?>">
	<meta property="og:url" content="<?php echo esc_url( $url ); ?>">
	<meta property="og:image" content="<?php echo esc_url( $image ); ?>">
	<meta property="og:site_name" content="<?php echo esc_attr( $site_name ); ?>">
	<meta name="twitter:card" content="summary_large_image">
	<meta name="twitter:title" content="<?php echo esc_attr( $title ); ?>">
	<meta name="twitter:description" content="<?php echo esc_attr( $description ); ?>">
	<meta name="twitter:image" content="<?php echo esc_url( $image ); ?>">
	<?php
}

add_action( 'wp_head', 'wingate_add_table_schemas', 3 );
function wingate_add_table_schemas() {
	if ( is_admin() ) {
		return;
	}

	$schemas = array();
	$site_name = get_bloginfo( 'name' );
	$current_url = wingate_get_current_public_url();

	if ( is_singular( 'wingate_handicap' ) ) {
		$post_id     = get_queried_object_id();
		$entries     = get_post_meta( $post_id, 'entries', true );
		$entries     = is_array( $entries ) ? $entries : array();
		$event_name  = (string) get_post_meta( $post_id, 'event_name', true );
		$season_name = (string) get_post_meta( $post_id, 'season_label', true );
		$description = wingate_generate_meta_summary(
			(string) get_post_field( 'post_content', $post_id ),
			'Leaderboard table for handicap entries and course handicap values.'
		);

		$item_list = array();
		$position  = 1;
		foreach ( array_slice( $entries, 0, 50 ) as $entry ) {
			if ( ! is_array( $entry ) ) {
				continue;
			}
			$item_list[] = array(
				'@type'    => 'ListItem',
				'position' => $position++,
				'item'     => array(
					'@type' => 'Person',
					'name'  => sanitize_text_field( (string) ( $entry['playerName'] ?? '' ) ),
				),
			);
		}

		$schemas[] = array(
			'@context'            => 'https://schema.org',
			'@type'               => 'Dataset',
			'name'                => wp_strip_all_tags( (string) get_the_title( $post_id ) ),
			'description'         => $description,
			'url'                 => $current_url,
			'inLanguage'          => 'en-ZW',
			'creator'             => array(
				'@type' => 'Organization',
				'name'  => $site_name,
			),
			'keywords'            => implode( ', ', array_filter( array( 'golf handicap', $season_name, $event_name, 'leaderboard' ) ) ),
			'variableMeasured'    => array(
				array( '@type' => 'PropertyValue', 'name' => 'Rank' ),
				array( '@type' => 'PropertyValue', 'name' => 'Player Name' ),
				array( '@type' => 'PropertyValue', 'name' => 'Handicap Index' ),
				array( '@type' => 'PropertyValue', 'name' => 'Course Handicap' ),
				array( '@type' => 'PropertyValue', 'name' => 'Member Number' ),
			),
			'measurementTechnique'=> 'Golf handicap leaderboard table',
		);

		if ( ! empty( $item_list ) ) {
			$schemas[] = array(
				'@context'         => 'https://schema.org',
				'@type'            => 'ItemList',
				'name'             => wp_strip_all_tags( (string) get_the_title( $post_id ) ) . ' Top Players',
				'url'              => $current_url,
				'numberOfItems'    => count( $item_list ),
				'itemListElement'  => $item_list,
			);
		}
	}

	if ( is_page_template( 'page-hole-by-hole.php' ) || is_page_template( 'page-course.php' ) ) {
		$scorecard = get_option( 'wingate_scorecard', array() );
		$out_rows  = isset( $scorecard['out'] ) && is_array( $scorecard['out'] ) ? $scorecard['out'] : array();
		$in_rows   = isset( $scorecard['in'] ) && is_array( $scorecard['in'] ) ? $scorecard['in'] : array();
		$total_rows = count( $out_rows ) + count( $in_rows );
		if ( $total_rows > 0 ) {
			$schemas[] = array(
				'@context'            => 'https://schema.org',
				'@type'               => 'Dataset',
				'name'                => 'Wingate Park Golf Course Scorecard',
				'description'         => 'Structured scorecard table including hole, par, distances, and stroke index.',
				'url'                 => $current_url,
				'inLanguage'          => 'en-ZW',
				'creator'             => array(
					'@type' => 'Organization',
					'name'  => $site_name,
				),
				'keywords'            => 'golf scorecard, hole by hole, par, stroke index',
				'variableMeasured'    => array(
					array( '@type' => 'PropertyValue', 'name' => 'Hole' ),
					array( '@type' => 'PropertyValue', 'name' => 'Par' ),
					array( '@type' => 'PropertyValue', 'name' => 'White Distance' ),
					array( '@type' => 'PropertyValue', 'name' => 'Blue Distance' ),
					array( '@type' => 'PropertyValue', 'name' => 'Red Distance' ),
					array( '@type' => 'PropertyValue', 'name' => 'Stroke Index' ),
				),
				'measurementTechnique'=> 'Golf course scorecard table',
			);
		}
	}

	foreach ( $schemas as $schema ) {
		echo '<script type="application/ld+json">' . wp_json_encode( $schema, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE ) . '</script>' . "\n";
	}
}

function wingate_global_animations() {
    ?>
    <style>
        .animate-on-scroll {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s ease-out, transform 0.8s ease-out;
            will-change: opacity, transform;
        }
        .animate-on-scroll.is-visible {
            opacity: 1;
            transform: translateY(0);
        }
        
        /* Staggered delays */
        .animate-on-scroll:nth-child(1) { transition-delay: 0.1s; }
        .animate-on-scroll:nth-child(2) { transition-delay: 0.2s; }
        .animate-on-scroll:nth-child(3) { transition-delay: 0.3s; }

        /* Scroll to top button */
        .scroll-to-top {
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            background-color: #ffcc00;
            color: #0e1b3d;
            padding: 0.75rem;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            transition: all 0.3s;
            z-index: 50;
            opacity: 0;
            transform: translateY(2.5rem);
            pointer-events: none;
            cursor: pointer;
            border: none;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .scroll-to-top.is-visible {
            opacity: 1;
            transform: translateY(0);
            pointer-events: auto;
        }
        .scroll-to-top:hover {
            background-color: #ffffff;
        }

        @media (min-width: 1024px) {
            #header-root.wingate-header-compact {
                position: fixed !important;
                top: 0;
                left: 0;
                right: 0;
                width: 100%;
                z-index: 120;
                background: #ffffff;
                border-bottom: 1px solid rgba(14, 27, 61, 0.08);
                box-shadow: 0 14px 28px -20px rgba(14, 27, 61, 0.55);
                animation: wingateHeaderSlideIn 0.32s ease;
            }

            #header-root.wingate-header-compact .wingate-top-bar {
                max-height: 0 !important;
                opacity: 0 !important;
                overflow: hidden !important;
                padding-top: 0 !important;
                padding-bottom: 0 !important;
                margin: 0 !important;
                border: 0 !important;
                transition: max-height 0.24s ease, opacity 0.2s ease, padding 0.2s ease;
            }

            #header-root.wingate-header-compact .wingate-absolute-logo {
                opacity: 0 !important;
                pointer-events: none !important;
                transform: translateY(-62%) scale(0.88) !important;
                transition: transform 0.22s ease, opacity 0.22s ease;
            }

            #header-root.wingate-header-compact .wingate-main-header {
                padding-top: 0.4rem !important;
                padding-bottom: 0.5rem !important;
                transition: padding 0.24s ease;
            }

            #header-root.wingate-header-compact nav.wp-block-navigation {
                padding-left: 1rem !important;
            }
        }

        @keyframes wingateHeaderSlideIn {
            from {
                transform: translateY(-16px);
                opacity: 0.94;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }
    </style>
    <button class="scroll-to-top" id="scroll-to-top" aria-label="Scroll to top">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>
    </button>
    <script>
    document.addEventListener('DOMContentLoaded', function() {
        const desktopMedia = window.matchMedia('(min-width: 1024px)');
        const headerRoot = document.getElementById('header-root');
        const mainHeader = headerRoot ? headerRoot.querySelector('.wingate-main-header') : null;
        let ticking = false;
        let compactMode = false;

        const setCompactMode = (enabled) => {
            if (!headerRoot || !desktopMedia.matches) {
                if (headerRoot) {
                    headerRoot.classList.remove('wingate-header-compact');
                }
                document.body.style.paddingTop = '';
                compactMode = false;
                return;
            }

            if (compactMode === enabled) {
                return;
            }

            compactMode = enabled;
            headerRoot.classList.toggle('wingate-header-compact', enabled);

            if (enabled) {
                const compactHeight = mainHeader ? Math.ceil(mainHeader.getBoundingClientRect().height) : 74;
                document.body.style.paddingTop = compactHeight + 'px';
            } else {
                document.body.style.paddingTop = '';
            }
        };

        const updateHeaderMode = () => {
            ticking = false;
            const y = Math.max(0, window.scrollY || 0);

            if (!desktopMedia.matches || !headerRoot) {
                setCompactMode(false);
                return;
            }

            if (y <= 8) {
                setCompactMode(false);
                return;
            }

            setCompactMode(true);
        };

        // Animation on scroll
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); // Only animate once
                }
            });
        }, observerOptions);

        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });

        // Scroll to top
        const scrollToTopBtn = document.getElementById('scroll-to-top');
        window.addEventListener('scroll', function() {
            if (!ticking) {
                window.requestAnimationFrame(updateHeaderMode);
                ticking = true;
            }

            if (window.scrollY > 400) {
                scrollToTopBtn.classList.add('is-visible');
            } else {
                scrollToTopBtn.classList.remove('is-visible');
            }
        });

        scrollToTopBtn.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        window.addEventListener('resize', function() {
            updateHeaderMode();
        });

        updateHeaderMode();
    });
    </script>
    <?php
}
add_action('wp_footer', 'wingate_global_animations');


function wingate_contact_details_defaults() {
	return array(
		'email'      => '#',
		'phone'      => '#',
		'phoneType'  => 'tel',
		'facebook'   => '#',
		'instagram'  => '#',
		'address'    => '73JG+RJ2, Alpes Rd, Harare, Zimbabwe',
		'hours'      => '7:00 AM - 7:00 PM',
	);
}

function wingate_get_contact_details() {
	$stored = get_option( 'wingate_contact_details', array() );
	if ( ! is_array( $stored ) ) {
		$stored = array();
	}

	$details = wp_parse_args( $stored, wingate_contact_details_defaults() );

	return array(
		'email'     => isset( $details['email'] ) ? strtolower( (string) $details['email'] ) : '#',
		'phone'     => isset( $details['phone'] ) ? (string) $details['phone'] : '#',
		'phoneType' => isset( $details['phoneType'] ) && 'whatsapp' === $details['phoneType'] ? 'whatsapp' : 'tel',
		'facebook'  => isset( $details['facebook'] ) ? (string) $details['facebook'] : '#',
		'instagram' => isset( $details['instagram'] ) ? (string) $details['instagram'] : '#',
		'address'   => isset( $details['address'] ) ? (string) $details['address'] : '',
		'hours'     => isset( $details['hours'] ) ? (string) $details['hours'] : '',
	);
}

function wingate_get_contact_phone_href( $details = null ) {
	$details = is_array( $details ) ? $details : wingate_get_contact_details();
	$phone   = isset( $details['phone'] ) ? trim( (string) $details['phone'] ) : '#';

	if ( '' === $phone || '#' === $phone ) {
		return '#';
	}

	$digits = preg_replace( '/[^\d+]/', '', $phone );

	if ( isset( $details['phoneType'] ) && 'whatsapp' === $details['phoneType'] ) {
		if ( 0 === strpos( $digits, '+' ) ) {
			$digits = substr( $digits, 1 );
		} elseif ( 0 === strpos( $digits, '0' ) ) {
			$digits = '263' . substr( $digits, 1 );
		}

		$digits = preg_replace( '/\D/', '', $digits );
		return '' !== $digits ? 'https://wa.me/' . $digits : '#';
	}

	return 'tel:' . $digits;
}

function wingate_filter_contact_phone_template_markup( $block_content, $block ) {
	if ( 'core/group' !== ( $block['blockName'] ?? '' ) ) {
		return $block_content;
	}

	$attrs      = isset( $block['attrs'] ) && is_array( $block['attrs'] ) ? $block['attrs'] : array();
	$anchor     = isset( $attrs['anchor'] ) ? (string) $attrs['anchor'] : '';
	$class_name = isset( $attrs['className'] ) ? (string) $attrs['className'] : '';
	$is_header  = 'header-root' === $anchor || false !== strpos( $block_content, 'wingate-top-phone' );
	$is_footer  = false !== strpos( $class_name, 'wingate-footer' ) || false !== strpos( $block_content, 'wingate-footer' );

	if ( ! $is_header && ! $is_footer ) {
		return $block_content;
	}

	$details      = wingate_get_contact_details();
	$phone_label  = isset( $details['phone'] ) ? (string) $details['phone'] : '';
	$phone_href   = wingate_get_contact_phone_href( $details );
	$is_whatsapp  = isset( $details['phoneType'] ) && 'whatsapp' === $details['phoneType'];
	$target_attrs = $is_whatsapp ? ' target="_blank" rel="noreferrer"' : '';

	if ( '' === $phone_label || '#' === $phone_label || '#' === $phone_href ) {
		return $block_content;
	}

	$block_content = preg_replace_callback(
		'/<p\b([^>]*\bclass=(["\'])(?=[^"\']*\bwingate-top-phone\b)([^"\']*)\2[^>]*)>\s*<a\b([^>]*)>.*?<\/a>\s*<\/p>/is',
		function ( $matches ) use ( $phone_href, $phone_label, $is_whatsapp, $target_attrs ) {
			$p_attrs = $matches[1];
			if ( $is_whatsapp && false === strpos( $p_attrs, 'wingate-phone-is-whatsapp' ) ) {
				$p_attrs = preg_replace( '/class=(["\'])([^"\']*)\1/i', 'class=$1$2 wingate-phone-is-whatsapp$1', $p_attrs, 1 );
			}

			$a_attrs = preg_replace( '/\s*href=(["\']).*?\1/i', '', $matches[4] );
			$a_attrs = preg_replace( '/\s*target=(["\']).*?\1/i', '', $a_attrs );
			$a_attrs = preg_replace( '/\s*rel=(["\']).*?\1/i', '', $a_attrs );

			return '<p' . $p_attrs . '><a href="' . esc_url( $phone_href ) . '"' . $target_attrs . $a_attrs . '>' . esc_html( $phone_label ) . '</a></p>';
		},
		$block_content
	);

	$block_content = preg_replace_callback(
		'/<a\b([^>]*\bclass=(["\'])(?=[^"\']*\bis-call\b)([^"\']*)\2[^>]*)>.*?<\/a>/is',
		function ( $matches ) use ( $phone_href, $is_whatsapp, $target_attrs ) {
			$a_attrs = preg_replace( '/\s*href=(["\']).*?\1/i', '', $matches[1] );
			$a_attrs = preg_replace( '/\s*target=(["\']).*?\1/i', '', $a_attrs );
			$a_attrs = preg_replace( '/\s*rel=(["\']).*?\1/i', '', $a_attrs );
			$label   = $is_whatsapp ? 'WhatsApp Pro Shop' : 'Call Pro Shop';

			return '<a href="' . esc_url( $phone_href ) . '"' . $target_attrs . $a_attrs . '>' . esc_html( $label ) . '</a>';
		},
		$block_content
	);

	if ( $is_footer ) {
		$block_content = preg_replace_callback(
			'/<a\b([^>]*href=(["\'])tel:[^"\']+\2[^>]*)>.*?<\/a>/is',
			function ( $matches ) use ( $phone_href, $phone_label, $target_attrs ) {
				$a_attrs = preg_replace( '/\s*href=(["\']).*?\1/i', '', $matches[1] );
				$a_attrs = preg_replace( '/\s*target=(["\']).*?\1/i', '', $a_attrs );
				$a_attrs = preg_replace( '/\s*rel=(["\']).*?\1/i', '', $a_attrs );

				return '<a href="' . esc_url( $phone_href ) . '"' . $target_attrs . $a_attrs . '>' . esc_html( $phone_label ) . '</a>';
			},
			$block_content
		);
	}

	return $block_content;
}
add_filter( 'render_block', 'wingate_filter_contact_phone_template_markup', 18, 2 );

function wingate_get_social_link( $service ) {
	$details = wingate_get_contact_details();
	$link    = isset( $details[ $service ] ) ? trim( (string) $details[ $service ] ) : '#';

	if ( '' === $link || '#' === $link ) {
		return '';
	}

	return $link;
}

function wingate_filter_social_link_block_urls( $block_content, $block ) {
	if ( 'core/social-link' !== ( $block['blockName'] ?? '' ) ) {
		return $block_content;
	}

	$service = isset( $block['attrs']['service'] ) ? (string) $block['attrs']['service'] : '';
	if ( '' === $service ) {
		return $block_content;
	}

	$link = wingate_get_social_link( $service );
	if ( '' === $link ) {
		return $block_content;
	}

	return preg_replace(
		'/href=(["\'])#\1/i',
		'href="' . esc_url( $link ) . '"',
		$block_content,
		1
	);
}
add_filter( 'render_block', 'wingate_filter_social_link_block_urls', 10, 2 );

function wingate_filter_mobile_social_markup( $block_content, $block ) {
	if ( 'core/group' !== ( $block['blockName'] ?? '' ) ) {
		return $block_content;
	}

	$anchor = isset( $block['attrs']['anchor'] ) ? (string) $block['attrs']['anchor'] : '';
	if ( 'header-root' !== $anchor ) {
		return $block_content;
	}

	$social_links = array(
		'Facebook'  => wingate_get_social_link( 'facebook' ),
		'Instagram' => wingate_get_social_link( 'instagram' ),
	);

	foreach ( $social_links as $label => $link ) {
		if ( '' === $link ) {
			continue;
		}

		$pattern = '/(<a\b[^>]*?)href=(["\'])#\2([^>]*\baria-label=(["\'])' . preg_quote( $label, '/' ) . '\4[^>]*>)/i';
		$replacement = '$1href="' . esc_url( $link ) . '"$3';
		$block_content = preg_replace( $pattern, $replacement, $block_content, 1 );
	}

	return $block_content;
}
add_filter( 'render_block', 'wingate_filter_mobile_social_markup', 20, 2 );

add_filter( 'render_block', 'wingate_dynamic_header_contact_details', 10, 2 );
function wingate_dynamic_header_contact_details( $block_content, $block ) {
	if ( 'core/paragraph' !== $block['blockName'] ) {
		return $block_content;
	}

	$classes = isset( $block['attrs']['className'] ) ? $block['attrs']['className'] : '';

	if ( strpos( $classes, 'wingate-top-email' ) !== false ) {
		$details = wingate_get_contact_details();
		$email   = ! empty( $details['email'] ) && '#' !== $details['email'] ? strtolower( $details['email'] ) : '';
		if ( ! empty( $email ) ) {
			$block_content = preg_replace(
				'/<a\b[^>]*>(.*?)<\/a>/is',
				'<a href="mailto:' . esc_attr( $email ) . '">' . esc_html( $email ) . '</a>',
				$block_content
			);
		}
	}

	if ( strpos( $classes, 'wingate-top-phone' ) !== false ) {
		$details = wingate_get_contact_details();
		$phone   = ! empty( $details['phone'] ) && '#' !== $details['phone'] ? trim( $details['phone'] ) : '';
		if ( ! empty( $phone ) ) {
			$href   = wingate_get_contact_phone_href( $details );
			$label  = esc_html( $phone );
			if ( 'whatsapp' === $details['phoneType'] ) {
				$label .= ' WhatsApp Only';
				$block_content = str_replace( 'class="wingate-top-phone', 'class="wingate-top-phone wingate-phone-is-whatsapp', $block_content );
			}
			$block_content = preg_replace(
				'/<a\b[^>]*>(.*?)<\/a>/is',
				'<a href="' . esc_url( $href ) . '"' . ( 'whatsapp' === $details['phoneType'] ? ' target="_blank" rel="noreferrer"' : '' ) . '>' . $label . '</a>',
				$block_content
			);
		}
	}

	return $block_content;
}

function wingate_sanitize_contact_details( $input ) {
	$defaults = wingate_contact_details_defaults();

	if ( ! is_array( $input ) ) {
		return $defaults;
	}

	$email = isset( $input['email'] ) ? trim( (string) $input['email'] ) : '#';
	if ( '#' !== $email && '' !== $email ) {
		$email = strtolower( sanitize_email( $email ) );
		if ( '' === $email ) {
			$email = '#';
		}
	}

	$phone = isset( $input['phone'] ) ? trim( (string) $input['phone'] ) : '#';
	if ( '' === $phone ) {
		$phone = '#';
	} else {
		$phone = sanitize_text_field( $phone );
	}

	$phone_type = isset( $input['phoneType'] ) && 'whatsapp' === $input['phoneType'] ? 'whatsapp' : 'tel';

	$facebook = isset( $input['facebook'] ) ? trim( (string) $input['facebook'] ) : '#';
	if ( '#' !== $facebook && '' !== $facebook ) {
		$facebook = esc_url_raw( $facebook );
		if ( '' === $facebook ) {
			$facebook = '#';
		}
	} else {
		$facebook = '#';
	}

	$instagram = isset( $input['instagram'] ) ? trim( (string) $input['instagram'] ) : '#';
	if ( '#' !== $instagram && '' !== $instagram ) {
		$instagram = esc_url_raw( $instagram );
		if ( '' === $instagram ) {
			$instagram = '#';
		}
	} else {
		$instagram = '#';
	}

	$address = isset( $input['address'] ) ? sanitize_text_field( $input['address'] ) : $defaults['address'];
	$hours   = isset( $input['hours'] ) ? sanitize_text_field( $input['hours'] ) : $defaults['hours'];

	return array(
		'email'     => $email,
		'phone'     => $phone,
		'phoneType' => $phone_type,
		'facebook'  => $facebook,
		'instagram' => $instagram,
		'address'   => $address,
		'hours'     => $hours,
	);
}

function wingate_comment_post_type_defaults() {
	return array(
		'post'             => false,
		'page'             => false,
		'wingate_event'    => false,
		'wingate_handicap' => false,
		'wingate_gallery'  => false,
	);
}

function wingate_get_comment_post_type_choices() {
	$defaults = wingate_comment_post_type_defaults();
	$choices  = array();

	foreach ( array_keys( $defaults ) as $post_type ) {
		$obj = get_post_type_object( $post_type );
		if ( ! $obj ) {
			continue;
		}

		$choices[ $post_type ] = array(
			'label'       => isset( $obj->labels->name ) ? (string) $obj->labels->name : $post_type,
			'description' => sprintf( 'Allow native WordPress comments on %s.', isset( $obj->labels->name ) ? (string) $obj->labels->name : $post_type ),
		);
	}

	return $choices;
}

function wingate_sanitize_comment_settings( $input ) {
	$defaults = wingate_comment_post_type_defaults();
	$choices  = wingate_get_comment_post_type_choices();

	if ( ! is_array( $input ) ) {
		return $defaults;
	}

	$sanitized = $defaults;
	foreach ( array_keys( $choices ) as $post_type ) {
		$sanitized[ $post_type ] = ! empty( $input[ $post_type ] );
	}

	return $sanitized;
}

function wingate_get_comment_settings() {
	$stored = get_option( 'wingate_comment_settings', array() );
	if ( ! is_array( $stored ) ) {
		$stored = array();
	}

	return wp_parse_args( $stored, wingate_comment_post_type_defaults() );
}

function wingate_comments_enabled_for_post_type( $post_type ) {
	$settings = wingate_get_comment_settings();
	return ! empty( $settings[ $post_type ] );
}

function wingate_comments_enabled_for_post( $post ) {
	$post = get_post( $post );
	if ( ! $post ) {
		return false;
	}

	return wingate_comments_enabled_for_post_type( $post->post_type );
}

function wingate_any_comments_enabled() {
	foreach ( wingate_get_comment_settings() as $enabled ) {
		if ( ! empty( $enabled ) ) {
			return true;
		}
	}

	return false;
}

add_action( 'init', 'wingate_apply_comment_settings', 100 );
function wingate_apply_comment_settings() {
	foreach ( wingate_comment_post_type_defaults() as $post_type => $default_enabled ) {
		if ( wingate_comments_enabled_for_post_type( $post_type ) ) {
			add_post_type_support( $post_type, 'comments' );
			continue;
		}

		remove_post_type_support( $post_type, 'comments' );
		remove_post_type_support( $post_type, 'trackbacks' );
	}
}

add_filter( 'comments_open', 'wingate_filter_comments_open', 20, 2 );
function wingate_filter_comments_open( $open, $post_id ) {
	return wingate_comments_enabled_for_post( $post_id ) ? $open : false;
}

add_filter( 'pings_open', 'wingate_filter_pings_open', 20, 2 );
function wingate_filter_pings_open( $open, $post_id ) {
	return wingate_comments_enabled_for_post( $post_id ) ? $open : false;
}

add_filter( 'preprocess_comment', 'wingate_block_disabled_comment_submissions' );
function wingate_block_disabled_comment_submissions( $commentdata ) {
	$post_id = isset( $commentdata['comment_post_ID'] ) ? (int) $commentdata['comment_post_ID'] : 0;
	if ( $post_id > 0 && ! wingate_comments_enabled_for_post( $post_id ) ) {
		wp_die(
			esc_html__( 'Comments are disabled for this content type.', 'wingate' ),
			esc_html__( 'Comments Disabled', 'wingate' ),
			array( 'response' => 403 )
		);
	}

	return $commentdata;
}

add_filter( 'rest_endpoints', 'wingate_filter_comment_rest_endpoints' );
function wingate_filter_comment_rest_endpoints( $endpoints ) {
	if ( wingate_any_comments_enabled() ) {
		return $endpoints;
	}

	unset( $endpoints['/wp/v2/comments'] );
	unset( $endpoints['/wp/v2/comments/(?P<id>[\\d]+)'] );

	return $endpoints;
}

add_action( 'admin_menu', 'wingate_maybe_hide_comments_menu', 999 );
function wingate_maybe_hide_comments_menu() {
	if ( wingate_any_comments_enabled() ) {
		return;
	}

	remove_menu_page( 'edit-comments.php' );
}

add_action( 'admin_bar_menu', 'wingate_maybe_hide_comments_admin_bar', 999 );
function wingate_maybe_hide_comments_admin_bar( $wp_admin_bar ) {
	if ( wingate_any_comments_enabled() ) {
		return;
	}

	$wp_admin_bar->remove_node( 'comments' );
}

add_action( 'admin_menu', 'wingate_register_admin_menu' );
function wingate_register_admin_menu() {
	add_menu_page(
		'Wingate Settings',
		'Wingate',
		'manage_options',
		'wingate-settings',
		'wingate_render_contact_settings_page',
		'dashicons-admin-generic',
		59
	);

	add_submenu_page(
		'wingate-settings',
		'Contact & Social',
		'Contact & Social',
		'manage_options',
		'wingate-settings',
		'wingate_render_contact_settings_page'
	);

	add_submenu_page(
		'wingate-settings',
		'Edit Pages',
		'Edit Pages',
		'manage_options',
		'wingate-edit-pages-hub',
		'wingate_render_edit_pages_hub_page'
	);

	add_submenu_page(
		'wingate-settings',
		'Menu Builder',
		'Menu Builder',
		'manage_options',
		'wingate-menu-builder',
		'wingate_render_menu_builder_page'
	);

	// Keep editor pages accessible via direct links, and hide them later from sidebar.
	add_submenu_page(
		'wingate-settings',
		'Maintenance Mode',
		'Maintenance Mode',
		'manage_options',
		'wingate-maintenance',
		'wingate_render_maintenance_page'
	);

	add_submenu_page(
		'wingate-settings',
		'Restore Theme',
		'Restore Theme',
		'manage_options',
		'wingate-safe-state',
		'wingate_render_safe_state_admin_page'
	);

	add_submenu_page(
		'wingate-settings',
		'Contact Us Page',
		'Contact Us Page',
		'manage_options',
		'wingate-contact-page-settings',
		'wingate_render_contact_page_settings_page'
	);

	add_submenu_page(
		'wingate-settings',
		'Home Page',
		'Home Page',
		'manage_options',
		'wingate-home-settings',
		'wingate_render_home_settings_page'
	);

	add_submenu_page(
		'wingate-settings',
		'The Course',
		'The Course',
		'manage_options',
		'wingate-course-settings',
		'wingate_render_course_settings_page'
	);

	add_submenu_page(
		'wingate-settings',
		'Hole By Hole',
		'Hole By Hole',
		'manage_options',
		'wingate-hole-by-hole',
		'wingate_render_hole_by_hole_page'
	);

	add_submenu_page(
		'wingate-settings',
		'Green Fees',
		'Green Fees',
		'manage_options',
		'wingate-green-fees-settings',
		'wingate_render_green_fees_settings_page'
	);

	add_submenu_page(
		'wingate-settings',
		'Booking',
		'Booking',
		'manage_options',
		'wingate-booking-settings',
		'wingate_render_booking_settings_page'
	);

	add_submenu_page(
		'wingate-settings',
		'Membership',
		'Membership',
		'manage_options',
		'wingate-membership-settings',
		'wingate_render_membership_settings_page'
	);

	add_submenu_page(
		'wingate-settings',
		'Rates',
		'Rates',
		'manage_options',
		'wingate-rates-settings',
		'wingate_render_rates_settings_page'
	);

	add_submenu_page(
		'wingate-settings',
		'News Layout',
		'News Layout',
		'manage_options',
		'wingate-news-layout-settings',
		'wingate_render_news_layout_settings_page'
	);
}

/**
 * Map specific WordPress pages to their custom SPA editor screens.
 */
function wingate_get_spa_editor_slug_for_page( $post ) {
	$post = get_post( $post );
	if ( ! $post || 'page' !== $post->post_type ) {
		return null;
	}

	$post_id = (int) $post->ID;
	$slug    = (string) $post->post_name;

	// Front page always routes to Home SPA editor.
	if ( $post_id === (int) get_option( 'page_on_front' ) ) {
		return 'wingate-home-settings';
	}

	// Posts page routes to News layout SPA editor.
	if ( $post_id === (int) get_option( 'page_for_posts' ) ) {
		return 'wingate-news-layout-settings';
	}

	$slug_map = array(
		'home'         => 'wingate-home-settings',
		'contact-us'   => 'wingate-contact-page-settings',
		'course'       => 'wingate-course-settings',
		'hole-by-hole' => 'wingate-hole-by-hole',
		'green-fees'   => 'wingate-green-fees-settings',
		'booking'      => 'wingate-booking-settings',
		'membership'   => 'wingate-membership-settings',
		'rates'        => 'wingate-rates-settings',
		'news'         => 'wingate-news-layout-settings',
	);

	if ( isset( $slug_map[ $slug ] ) ) {
		return $slug_map[ $slug ];
	}

	$template = (string) get_page_template_slug( $post_id );
	$template_map = array(
		'page-contact-us.php'  => 'wingate-contact-page-settings',
		'page-course.php'      => 'wingate-course-settings',
		'page-hole-by-hole.php'=> 'wingate-hole-by-hole',
		'page-green-fees.php'  => 'wingate-green-fees-settings',
		'page-booking.php'     => 'wingate-booking-settings',
		'page-membership.php'  => 'wingate-membership-settings',
		'page-rates.php'       => 'wingate-rates-settings',
	);

	return isset( $template_map[ $template ] ) ? $template_map[ $template ] : null;
}

function wingate_get_spa_editor_url_for_post( $post ) {
	$spa_slug = wingate_get_spa_editor_slug_for_page( $post );
	if ( ! $spa_slug ) {
		return null;
	}

	return admin_url( 'admin.php?page=' . rawurlencode( $spa_slug ) );
}

/**
 * Replace default edit links for SPA-managed pages.
 */
add_filter( 'get_edit_post_link', 'wingate_override_edit_post_link_for_spa_pages', 10, 3 );
function wingate_override_edit_post_link_for_spa_pages( $link, $post_id, $context ) {
	$spa_url = wingate_get_spa_editor_url_for_post( $post_id );
	if ( ! $spa_url ) {
		return $link;
	}

	return $spa_url;
}

/**
 * Redirect direct edit attempts away from Gutenberg/classic editor to SPA pages.
 */
add_action( 'load-post.php', 'wingate_redirect_spa_managed_page_edits' );
function wingate_redirect_spa_managed_page_edits() {
	if ( ! current_user_can( 'edit_pages' ) ) {
		return;
	}

	$post_id = isset( $_GET['post'] ) ? (int) $_GET['post'] : 0; // phpcs:ignore WordPress.Security.NonceVerification.Recommended
	if ( ! $post_id ) {
		return;
	}

	$spa_url = wingate_get_spa_editor_url_for_post( $post_id );
	if ( ! $spa_url ) {
		return;
	}

	wp_safe_redirect( $spa_url );
	exit;
}

/**
 * Disable Gutenberg for SPA-managed pages.
 */
add_filter( 'use_block_editor_for_post', 'wingate_disable_block_editor_for_spa_pages', 10, 2 );
function wingate_disable_block_editor_for_spa_pages( $use_block_editor, $post ) {
	return wingate_get_spa_editor_slug_for_page( $post ) ? false : $use_block_editor;
}

add_action( 'admin_head', 'wingate_hide_sidebar_submenus_css' );
function wingate_hide_sidebar_submenus_css() {
	if ( ! current_user_can( 'manage_options' ) ) {
		return;
	}
	?>
		<style id="wingate-hide-submenus">
			#toplevel_page_wingate-settings .wp-submenu a[href="admin.php?page=wingate-maintenance"],
			#toplevel_page_wingate-settings .wp-submenu a[href="admin.php?page=wingate-contact-page-settings"],
			#toplevel_page_wingate-settings .wp-submenu a[href="admin.php?page=wingate-home-settings"],
			#toplevel_page_wingate-settings .wp-submenu a[href="admin.php?page=wingate-course-settings"],
			#toplevel_page_wingate-settings .wp-submenu a[href="admin.php?page=wingate-hole-by-hole"],
		#toplevel_page_wingate-settings .wp-submenu a[href="admin.php?page=wingate-green-fees-settings"],
		#toplevel_page_wingate-settings .wp-submenu a[href="admin.php?page=wingate-booking-settings"],
		#toplevel_page_wingate-settings .wp-submenu a[href="admin.php?page=wingate-membership-settings"],
		#toplevel_page_wingate-settings .wp-submenu a[href="admin.php?page=wingate-rates-settings"],
		#toplevel_page_wingate-settings .wp-submenu a[href="admin.php?page=wingate-news-layout-settings"],
		#toplevel_page_wingate-settings .wp-submenu a[href="admin.php?page=wingate-scorecard-maker"],
		#toplevel_page_wingate-settings .wp-submenu a[href="admin.php?page=wingate-safe-state"] {
			display: none !important;
		}
	</style>
	<?php
}

add_action( 'admin_init', 'wingate_register_contact_settings' );
function wingate_register_contact_settings() {
	register_setting(
		'wingate_contact_settings_group',
		'wingate_contact_details',
		array(
			'type'              => 'array',
			'sanitize_callback' => 'wingate_sanitize_contact_details',
			'default'           => wingate_contact_details_defaults(),
		)
	);

	register_setting(
		'wingate_contact_settings_group',
		'wingate_comment_settings',
		array(
			'type'              => 'array',
			'sanitize_callback' => 'wingate_sanitize_comment_settings',
			'default'           => wingate_comment_post_type_defaults(),
		)
	);
}

add_action( 'admin_enqueue_scripts', 'wingate_enqueue_admin_assets' );
function wingate_enqueue_admin_assets( $hook ) {
		$valid_hooks = [
			'toplevel_page_wingate-settings',
			'wingate_page_wingate-edit-pages-hub',
			'admin_page_wingate-contact-page-settings',
			'admin_page_wingate-home-settings',
			'admin_page_wingate-course-settings',
			'admin_page_wingate-hole-by-hole',
		'admin_page_wingate-green-fees-settings',
		'admin_page_wingate-booking-settings',
		'admin_page_wingate-membership-settings',
			'admin_page_wingate-rates-settings',
			'admin_page_wingate-news-layout-settings',
			'admin_page_wingate-safe-state',
			'wingate_page_wingate-contact-page-settings',
			'wingate_page_wingate-home-settings',
			'wingate_page_wingate-course-settings',
			'wingate_page_wingate-hole-by-hole',
		'wingate_page_wingate-green-fees-settings',
		'wingate_page_wingate-booking-settings',
		'wingate_page_wingate-membership-settings',
		'wingate_page_wingate-rates-settings',
		'wingate_page_wingate-news-layout-settings',
		'wingate_page_wingate-safe-state'
	];

	if ( ! in_array( $hook, $valid_hooks ) ) {
		return;
	}

	$version = wp_get_theme()->get( 'Version' );

	// Settings requiring Media Manager
	if ( in_array( $hook, [ 'admin_page_wingate-contact-page-settings', 'admin_page_wingate-home-settings', 'admin_page_wingate-course-settings', 'admin_page_wingate-hole-by-hole', 'admin_page_wingate-green-fees-settings', 'admin_page_wingate-booking-settings', 'admin_page_wingate-membership-settings', 'admin_page_wingate-rates-settings', 'wingate_page_wingate-contact-page-settings', 'wingate_page_wingate-home-settings', 'wingate_page_wingate-course-settings', 'wingate_page_wingate-hole-by-hole', 'wingate_page_wingate-green-fees-settings', 'wingate_page_wingate-booking-settings', 'wingate_page_wingate-membership-settings', 'wingate_page_wingate-rates-settings' ] ) ) {
		wp_enqueue_media();
	}

	wp_enqueue_style(
		'wingate-admin-fonts',
		'https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700&family=Montserrat:wght@400;500;600;700&display=swap',
		array(),
		null
	);
	wp_enqueue_style(
		'wingate-admin-contact-details',
		get_stylesheet_directory_uri() . '/src/admin/contact-details-admin.css',
		array(),
		$version
	);
	wp_enqueue_script(
		'wingate-admin-contact-details',
		get_stylesheet_directory_uri() . '/src/admin/contact-details-admin.js',
		array(),
		$version,
		true
	);
}

function wingate_render_contact_input( $field, $label, $type, $value, $placeholder, $help_text ) {
	printf(
		'<label class="wingate-admin-field" for="wingate-contact-%2$s"><span class="wingate-admin-field-label">%1$s</span><input id="wingate-contact-%2$s" type="%3$s" name="wingate_contact_details[%2$s]" value="%4$s" placeholder="%5$s" class="wingate-admin-input" /><small class="wingate-admin-field-help">%6$s</small></label>',
		esc_html( $label ),
		esc_attr( $field ),
		esc_attr( $type ),
		esc_attr( $value ),
		esc_attr( $placeholder ),
		esc_html( $help_text )
	);
}

function wingate_render_contact_phone_type_input( $value ) {
	$value = 'whatsapp' === $value ? 'whatsapp' : 'tel';
	?>
	<label class="wingate-admin-field" for="wingate-contact-phoneType">
		<span class="wingate-admin-field-label">Phone Link Type</span>
		<select id="wingate-contact-phoneType" name="wingate_contact_details[phoneType]" class="wingate-admin-input">
			<option value="tel" <?php selected( $value, 'tel' ); ?>>Telephone call</option>
			<option value="whatsapp" <?php selected( $value, 'whatsapp' ); ?>>WhatsApp only</option>
		</select>
		<small class="wingate-admin-field-help">Controls the header icon and whether the number links to a call or WhatsApp chat.</small>
	</label>
	<?php
}

function wingate_render_comment_toggle_input( $post_type, $label, $checked, $help_text ) {
	printf(
		'<label class="wingate-admin-field" for="wingate-comments-%2$s"><span class="wingate-admin-field-label">%1$s</span><input id="wingate-comments-%2$s" type="checkbox" name="wingate_comment_settings[%2$s]" value="1" %3$s class="wingate-admin-checkbox" /><small class="wingate-admin-field-help">%4$s</small></label>',
		esc_html( $label ),
		esc_attr( $post_type ),
		checked( $checked, true, false ),
		esc_html( $help_text )
	);
}

function wingate_render_contact_settings_page() {
	$details = wingate_get_contact_details();
	$comment_settings = wingate_get_comment_settings();
	$comment_choices  = wingate_get_comment_post_type_choices();
	?>
	<div class="wrap wingate-admin-wrap">
		<div class="wingate-admin-shell">
			<section class="wingate-admin-hero wingate-anim-enter" data-wingate-delay="0">
				<p class="wingate-admin-kicker">Wingate Admin</p>
				<h1>Social &amp; Contact Settings</h1>
				<p>
					Manage the global social and contact links shown across the React SPA.
					Use <strong>#</strong> when a link is not ready yet.
				</p>
			</section>

			<div class="wingate-admin-grid">
				<section class="wingate-admin-card wingate-anim-enter" data-wingate-delay="120">
					<h2>Global Links</h2>
					<p class="wingate-admin-card-subtitle">Update once here and the header, footer, and contact strip stay in sync.</p>
					<form method="post" action="options.php">
						<?php settings_fields( 'wingate_contact_settings_group' ); ?>
						<div class="wingate-admin-fields">
							<?php
							wingate_render_contact_input(
								'email',
								'Email',
								'email',
								$details['email'],
								'hello@example.com or #',
								'Used in header, contact strip and contact page.'
							);
							wingate_render_contact_input(
								'phone',
								'Phone Number',
								'text',
								$details['phone'],
								'+1 555 123 4567 or #',
								'Used for telephone or WhatsApp links across the site.'
							);
							wingate_render_contact_phone_type_input( $details['phoneType'] );
							wingate_render_contact_input(
								'address',
								'Address',
								'text',
								$details['address'],
								'73JG+RJ2, Alpes Rd, Harare, Zimbabwe',
								'Physical location shown in footer.'
							);
							wingate_render_contact_input(
								'hours',
								'Opening Hours',
								'text',
								$details['hours'],
								'7:00 AM - 7:00 PM',
								'Club house hours shown in footer.'
							);
							wingate_render_contact_input(
								'facebook',
								'Facebook URL',
								'text',
								$details['facebook'],
								'https://facebook.com/yourpage or #',
								'Used wherever the Facebook icon appears.'
							);
							wingate_render_contact_input(
								'instagram',
								'Instagram URL',
								'text',
								$details['instagram'],
								'https://instagram.com/yourhandle or #',
								'Used wherever the Instagram icon appears.'
							);
							?>
						</div>
						<h2 style="margin-top:2rem;">Comments</h2>
						<p class="wingate-admin-card-subtitle">Comments are blocked everywhere by default. Only enable them for content types that truly need native WordPress comments.</p>
						<div class="wingate-admin-fields">
							<?php
							foreach ( $comment_choices as $post_type => $choice ) {
								wingate_render_comment_toggle_input(
									$post_type,
									$choice['label'],
									! empty( $comment_settings[ $post_type ] ),
									$choice['description']
								);
							}
							?>
						</div>
						<div class="wingate-admin-actions">
							<?php submit_button( 'Save Settings', 'primary wingate-admin-save', 'submit', false ); ?>
						</div>
					</form>
				</section>

				<aside class="wingate-admin-card wingate-admin-preview wingate-anim-enter" data-wingate-delay="220">
					<h2>Live Preview</h2>
					<p class="wingate-admin-card-subtitle">What your current values look like at a glance.</p>
					<ul>
						<li><span>Email</span><strong><?php echo esc_html( $details['email'] ); ?></strong></li>
						<li><span>Phone</span><strong><?php echo esc_html( $details['phone'] ); ?></strong></li>
						<li><span>Phone Link Type</span><strong><?php echo 'whatsapp' === $details['phoneType'] ? 'WhatsApp only' : 'Telephone call'; ?></strong></li>
						<li><span>Address</span><strong><?php echo esc_html( $details['address'] ); ?></strong></li>
						<li><span>Hours</span><strong><?php echo esc_html( $details['hours'] ); ?></strong></li>
						<li><span>Facebook</span><strong><?php echo esc_html( $details['facebook'] ); ?></strong></li>
						<li><span>Instagram</span><strong><?php echo esc_html( $details['instagram'] ); ?></strong></li>
						<li><span>Comments Enabled</span><strong><?php echo esc_html( implode( ', ', array_map( function ( $post_type ) use ( $comment_choices ) { return isset( $comment_choices[ $post_type ]['label'] ) ? $comment_choices[ $post_type ]['label'] : $post_type; }, array_keys( array_filter( $comment_settings ) ) ) ) ?: 'None' ); ?></strong></li>
					</ul>
				</aside>
			</div>
		</div>
	</div>
	<?php
}

/**
 * Helper to render React Admin SPA mount point and enqueue assets.
 */
function wingate_render_admin_spa( $title, $root_id ) {
	$bundle_version = wingate_asset_version( 'dist/wingate-theme.es.js' );
	$style_version  = wingate_asset_version( 'dist/new-wingate.css' );

	// Enqueue React bundle
	wp_enqueue_script( 'wingate-react-bundle', get_stylesheet_directory_uri() . '/dist/wingate-theme.es.js', array(), $bundle_version, true );
	wp_script_add_data( 'wingate-react-bundle', 'type', 'module' );

	// Enqueue styles
	if ( file_exists( get_stylesheet_directory() . '/dist/new-wingate.css' ) ) {
		wp_enqueue_style( 'wingate-react-style', get_stylesheet_directory_uri() . '/dist/new-wingate.css', array(), $style_version );
	}

	// Localize data for API
	wp_localize_script(
		'wingate-react-bundle',
		'wingateAdminData',
		array(
			'root'     => esc_url_raw( rest_url() ),
			'nonce'    => wp_create_nonce( 'wp_rest' ),
			'adminUrl' => esc_url_raw( admin_url( 'admin.php' ) ),
		)
	);

	printf( '<div class="wrap"><h1>%s</h1><div id="%s"></div></div>', esc_html( $title ), esc_attr( $root_id ) );
}

function wingate_render_home_settings_page() {
	wingate_render_admin_spa( 'Home Page Settings', 'home-settings-admin-root' );
}

function wingate_render_contact_page_settings_page() {
	wingate_render_admin_spa( 'Contact Us Page Settings', 'contact-page-settings-admin-root' );
}

function wingate_render_course_settings_page() {
	wingate_render_admin_spa( 'The Course Settings', 'course-settings-admin-root' );
}

function wingate_render_hole_by_hole_page() {
	wingate_render_admin_spa( 'Hole By Hole Settings', 'hole-by-hole-admin-root' );
}

function wingate_render_green_fees_settings_page() {
	wingate_render_admin_spa( 'Green Fees Settings', 'green-fees-settings-admin-root' );
}

function wingate_render_booking_settings_page() {
	wingate_render_admin_spa( 'Booking Settings', 'booking-settings-admin-root' );
}

function wingate_render_membership_settings_page() {
	wingate_render_admin_spa( 'Membership Settings', 'membership-admin-root' );
}

function wingate_render_rates_settings_page() {
	wingate_render_admin_spa( 'Rates Settings', 'rates-admin-root' );
}

function wingate_render_news_layout_settings_page() {
	wingate_render_admin_spa( 'News Layout Settings', 'news-layout-settings-admin-root' );
}

function wingate_render_edit_pages_hub_page() {
	wingate_render_admin_spa( 'Edit Pages', 'edit-pages-gateway-admin-root' );
}

function wingate_render_menu_builder_page() {
	wingate_render_admin_spa( 'Menu Builder', 'menu-builder-admin-root' );
}

function wingate_render_safe_state_admin_page() {
	wingate_render_admin_spa( 'Restore Safe State', 'safe-state-admin-root' );
}


/**
 * Maintenance Mode Logic
 */

add_action( 'admin_init', 'wingate_register_maintenance_settings' );
function wingate_register_maintenance_settings() {
	register_setting( 'wingate_maintenance_group', 'wingate_maintenance_mode' );
	register_setting( 'wingate_maintenance_group', 'wingate_maintenance_roles' );
}

add_action( 'admin_enqueue_scripts', 'wingate_enqueue_maintenance_assets' );
function wingate_enqueue_maintenance_assets( $hook ) {
	if ( ! in_array( $hook, [ 'wingate_page_wingate-maintenance', 'admin_page_wingate-maintenance' ], true ) ) {
		return;
	}

	$version = wp_get_theme()->get( 'Version' );

	wp_enqueue_style(
		'wingate-admin-maintenance',
		get_stylesheet_directory_uri() . '/src/admin/maintenance-admin.css',
		array(),
		$version
	);
	
	// Reuse contact details admin JS if generic, or create new if needed. 
	// For now, no specific JS needed for toggle unless we want fancy UI interactions not covered by CSS.
}

function wingate_render_maintenance_page() {
	$is_active = get_option( 'wingate_maintenance_mode' );
	$allowed_roles = get_option( 'wingate_maintenance_roles', array() );
	if ( ! is_array( $allowed_roles ) ) {
		$allowed_roles = array();
	}

	// Roles to choose from
	global $wp_roles;
	$all_roles = $wp_roles->roles;
	?>
	<div class="wrap wingate-admin-wrap">
		<div class="wingate-admin-shell">
			<section class="wingate-admin-hero wingate-anim-enter" data-wingate-delay="0">
				<p class="wingate-admin-kicker">Wingate Admin</p>
				<h1>Maintenance Mode</h1>
				<p>
					Control access to the website. When active, only logged-in users with specific roles can see the site.
					Everyone else will see a maintenance page.
				</p>
			</section>

			<div class="wingate-admin-grid">
				<section class="wingate-admin-card wingate-anim-enter" data-wingate-delay="120">
					<h2>Settings</h2>
					<form method="post" action="options.php">
						<?php settings_fields( 'wingate_maintenance_group' ); ?>
						
						<div class="wingate-admin-field">
							<span class="wingate-admin-field-label">Mode Status</span>
							<label class="wingate-switch">
								<input type="checkbox" name="wingate_maintenance_mode" value="1" <?php checked( 1, $is_active ); ?>>
								<span class="wingate-slider"></span>
							</label>
							<small class="wingate-admin-field-help">Toggle to enable or disable maintenance mode.</small>
						</div>

						<div class="wingate-admin-field">
							<span class="wingate-admin-field-label">Bypass for Roles</span>
							<div class="wingate-checkbox-list">
								<?php foreach ( $all_roles as $role_key => $role_details ) : ?>
									<label class="wingate-checkbox-item">
										<input type="checkbox" name="wingate_maintenance_roles[]" value="<?php echo esc_attr( $role_key ); ?>" <?php checked( in_array( $role_key, $allowed_roles ) ); ?>>
										<?php echo esc_html( $role_details['name'] ); ?>
									</label>
								<?php endforeach; ?>
							</div>
							<small class="wingate-admin-field-help">Users with these roles can access the site while in maintenance mode. "Administrator" is always allowed.</small>
						</div>

						<div class="wingate-admin-actions">
							<?php submit_button( 'Save Settings', 'primary wingate-admin-save', 'submit', false ); ?>
						</div>
					</form>
				</section>

				<aside class="wingate-admin-card wingate-admin-preview wingate-anim-enter" data-wingate-delay="220">
					<h2>Status</h2>
					<div class="wingate-status-indicator <?php echo $is_active ? 'wingate-status-inactive' : 'wingate-status-active'; // Logic inverted visually? No. Active mode = Inactive site access usually. Let's keep it simple. ?>">
						<span class="dashicons <?php echo $is_active ? 'dashicons-hidden' : 'dashicons-visibility'; ?>"></span>
						<?php echo $is_active ? 'Maintenance Active' : 'Site Live'; ?>
					</div>
					<p style="margin-top: 20px; font-size: 0.9rem; color: #666;">
						<a href="<?php echo esc_url( home_url( '/' ) ); ?>" target="_blank">Visit Site</a> to verify (use Incognito mode).
					</p>
				</aside>
			</div>
		</div>
	</div>
	<?php
}

add_action( 'template_redirect', 'wingate_maintenance_mode_redirect' );
function wingate_maintenance_mode_redirect() {
	// 1. Check if maintenance mode is enabled
	if ( ! get_option( 'wingate_maintenance_mode' ) ) {
		return;
	}

	// 2. Allow access to wp-login.php and admin area (handled by WP core, but good to be safe)
	// template_redirect only fires on the front-end, so admin is safe.

	// 3. Check if user is logged in
	if ( is_user_logged_in() ) {
		$user = wp_get_current_user();
		$allowed_roles = get_option( 'wingate_maintenance_roles', array() );
		
		// Always allow administrators
		if ( in_array( 'administrator', (array) $user->roles ) ) {
			return;
		}

		// Check configured roles
		if ( array_intersect( $allowed_roles, (array) $user->roles ) ) {
			return;
		}
	}

	// 4. Load maintenance template
	$maintenance_template = locate_template( 'maintenance.php' );
	if ( $maintenance_template ) {
		include $maintenance_template;
		exit;
	    } else {
        // Fallback if template missing
        wp_die( 'Maintenance Mode', 'Maintenance Mode', array( 'response' => 503 ) );
    }
}

/**
 * SEO-friendly event filter URLs
 */
add_action( 'init', 'wingate_register_event_type_rewrites' );
function wingate_register_event_type_rewrites() {
	add_rewrite_tag( '%wingate_event_type%', '([a-z0-9_-]+)' );
	add_rewrite_rule(
		'^events/([a-z0-9_-]+)/page/([0-9]{1,})/?$',
		'index.php?post_type=wingate_event&wingate_event_type=$matches[1]&paged=$matches[2]',
		'top'
	);
	add_rewrite_rule(
		'^events/([a-z0-9_-]+)/?$',
		'index.php?post_type=wingate_event&wingate_event_type=$matches[1]',
		'top'
	);
}

add_filter( 'query_vars', 'wingate_register_event_filter_query_var' );
function wingate_register_event_filter_query_var( $vars ) {
	$vars[] = 'wingate_event_type';
	return $vars;
}

add_action( 'init', 'wingate_maybe_flush_event_rewrite_rules', 20 );
function wingate_maybe_flush_event_rewrite_rules() {
	$rewrite_version = '3';
	if ( $rewrite_version === get_option( 'wingate_event_type_rewrite_flushed', '0' ) ) {
		return;
	}

	wingate_register_event_type_rewrites();
	flush_rewrite_rules( false );
	update_option( 'wingate_event_type_rewrite_flushed', $rewrite_version );
}

/**
 * Filter Events Archive by Type
 */
add_action('pre_get_posts', 'wingate_filter_events_by_type');
function wingate_filter_events_by_type($query) {
    if (!is_admin() && $query->is_main_query() && is_post_type_archive('wingate_event')) {
        $display_mode = isset( $_GET['event_display'] ) ? sanitize_key( wp_unslash( $_GET['event_display'] ) ) : 'active';
        if ( ! in_array( $display_mode, array( 'active', 'past' ), true ) ) {
            $display_mode = 'active';
        }

        // Order by event date (custom meta)
        $query->set('meta_key', 'event_date');
        $query->set('orderby', 'meta_value');
        $query->set('order', 'past' === $display_mode ? 'DESC' : 'ASC');

        // Filter by type from pretty permalink query var (with legacy query string fallback).
        $type = $query->get( 'wingate_event_type' );
        if ( empty( $type ) && isset( $_GET['type'] ) ) {
            $type = sanitize_text_field( wp_unslash( $_GET['type'] ) );
        }

        $allowed_types = array();
        if ( function_exists( 'wingate_tools_get_event_categories' ) ) {
            foreach ( wingate_tools_get_event_categories() as $category ) {
                if ( isset( $category['slug'] ) ) {
                    $allowed_types[] = sanitize_key( (string) $category['slug'] );
                }
            }
        }

        if ( ! empty( $type ) && in_array( $type, $allowed_types, true ) ) {
            $meta_query = array(
                array(
                    'key'     => 'event_type',
                    'value'   => $type,
                    'compare' => '=',
                ),
            );
            $query->set('meta_query', $meta_query);
        }

        if ( function_exists( 'wingate_tools_get_event_effective_visibility' ) && function_exists( 'wingate_tools_get_event_lifecycle' ) ) {
            $candidate_query = array(
                'post_type'              => 'wingate_event',
                'post_status'            => 'publish',
                'posts_per_page'         => -1,
                'fields'                 => 'ids',
                'orderby'                => 'meta_value',
                'order'                  => 'past' === $display_mode ? 'DESC' : 'ASC',
                'meta_key'               => 'event_date',
                'ignore_sticky_posts'    => true,
                'no_found_rows'          => true,
                'update_post_meta_cache' => false,
                'update_post_term_cache' => false,
            );

            if ( ! empty( $type ) && in_array( $type, $allowed_types, true ) ) {
                $candidate_query['meta_query'] = array(
                    array(
                        'key'     => 'event_type',
                        'value'   => $type,
                        'compare' => '=',
                    ),
                );
            }

            $candidate_ids = get_posts( $candidate_query );
            $matched_ids = array();

            foreach ( $candidate_ids as $event_id ) {
                $effective_visibility = wingate_tools_get_event_effective_visibility( $event_id );
                $lifecycle = wingate_tools_get_event_lifecycle( $event_id );

                if ( 'active' === $display_mode ) {
                    if ( 'public' === $effective_visibility && 'past' !== $lifecycle ) {
                        $matched_ids[] = (int) $event_id;
                    }
                    continue;
                }

                if ( 'hidden' === $effective_visibility ) {
                    continue;
                }

                if ( 'archived' === $effective_visibility || 'past' === $lifecycle ) {
                    $matched_ids[] = (int) $event_id;
                }
            }

            $query->set( 'post__in', ! empty( $matched_ids ) ? $matched_ids : array( 0 ) );
        }
    }
}

/**
 * Force classic PHP templates in block theme child.
 * Twenty Twenty-Five is a block theme, so it ignores home.php, archive-*, single-* by default.
 * This filter overrides the template for specific conditions.
 */
add_filter('template_include', 'wingate_force_classic_templates', 99);
function wingate_force_classic_templates($template) {
    // Club House page - force classic template so content renders once.
    if ( is_page( 'club-house' ) ) {
        $custom = locate_template( 'page-club-house.php' );
        if ( $custom ) {
            return $custom;
        }
    }

    // Front Page (Home)
    if (is_front_page()) {
        $custom = locate_template('front-page.php');
        if ($custom) return $custom;
    }

    // Blog posts page (News) - is_home() is true for the posts page
    if (is_home() && !is_front_page()) {
        $custom = locate_template('home.php');
        if ($custom) return $custom;
    }

    // Events archive
    if (is_post_type_archive('wingate_event')) {
        $custom = locate_template('archive-wingate_event.php');
        if ($custom) return $custom;
    }

    // Single event
    if (is_singular('wingate_event')) {
        $custom = locate_template('single-wingate_event.php');
        if ($custom) return $custom;
    }

    // Single blog post
    if (is_singular('post')) {
        $custom = locate_template('single.php');
        if ($custom) return $custom;
    }

    if ( is_page() && wingate_page_uses_styled_template( get_queried_object_id() ) ) {
        $custom = locate_template( 'page-styled-default.php' );
        if ( $custom ) {
            return $custom;
        }
    }

    return $template;
}

function wingate_page_uses_styled_template( $post_id ) {
	$post_id = (int) $post_id;
	if ( $post_id <= 0 ) {
		return false;
	}

	$template_slug = (string) get_page_template_slug( $post_id );
	if ( 'page-styled-default.php' === $template_slug ) {
		return true;
	}

	return '1' === (string) get_post_meta( $post_id, '_wingate_use_styled_page_template', true );
}

add_action( 'add_meta_boxes_page', 'wingate_add_styled_page_meta_box' );
function wingate_add_styled_page_meta_box() {
	add_meta_box(
		'wingate-styled-page-template',
		__( 'Wingate Page Layout', 'wingate' ),
		'wingate_render_styled_page_meta_box',
		'page',
		'side',
		'default'
	);
}

function wingate_render_styled_page_meta_box( $post ) {
	wp_nonce_field( 'wingate_save_styled_page_meta', 'wingate_styled_page_meta_nonce' );
	$enabled = '1' === (string) get_post_meta( $post->ID, '_wingate_use_styled_page_template', true );
	?>
	<p>
		<label for="wingate-use-styled-page-template" style="display:flex; gap:8px; align-items:flex-start;">
			<input
				type="checkbox"
				name="wingate_use_styled_page_template"
				id="wingate-use-styled-page-template"
				value="1"
				<?php checked( $enabled ); ?>
			/>
			<span><?php esc_html_e( 'Use the Wingate styled page template for this page.', 'wingate' ); ?></span>
		</label>
	</p>
	<p style="margin:0; color:#646970;">
		<?php esc_html_e( 'Opt-in only. Existing pages are unaffected unless this is enabled or the styled template is selected in Page Attributes.', 'wingate' ); ?>
	</p>
	<?php
}

add_action( 'save_post_page', 'wingate_save_styled_page_meta' );
function wingate_save_styled_page_meta( $post_id ) {
	if ( ! isset( $_POST['wingate_styled_page_meta_nonce'] ) || ! wp_verify_nonce( sanitize_text_field( wp_unslash( $_POST['wingate_styled_page_meta_nonce'] ) ), 'wingate_save_styled_page_meta' ) ) {
		return;
	}

	if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
		return;
	}

	if ( ! current_user_can( 'edit_page', $post_id ) ) {
		return;
	}

	$enabled = isset( $_POST['wingate_use_styled_page_template'] ) ? '1' : '0';
	update_post_meta( $post_id, '_wingate_use_styled_page_template', $enabled );
}

require_once __DIR__ . '/inc/events-cpt.php';
require_once __DIR__ . '/inc/api-routes.php';
require_once __DIR__ . '/inc/menu-builder.php';

/**
 * Wingate Events SPA Admin Page
 */
add_action('admin_menu', 'wingate_register_events_spa_page');
function wingate_register_events_spa_page() {
    add_submenu_page(
        'edit.php?post_type=wingate_event', // Parent slug: standard CPT menu
        'Event Manager',
        'SPA Editor',
        'manage_options',
        'wingate-events-spa',
        'wingate_render_events_spa_root'
    );
}

function wingate_render_events_spa_root() {
    $bundle_version = wingate_asset_version( 'dist/wingate-theme.es.js' );
    $style_version  = wingate_asset_version( 'dist/new-wingate.css' );
    
    // Enqueue React bundle
    wp_enqueue_script( 'wingate-react-bundle', get_stylesheet_directory_uri() . '/dist/wingate-theme.es.js', array(), $bundle_version, true );
    wp_script_add_data( 'wingate-react-bundle', 'type', 'module' );
    
    // Enqueue styles
    if ( file_exists( get_stylesheet_directory() . '/dist/new-wingate.css' ) ) {
        wp_enqueue_style( 'wingate-react-style', get_stylesheet_directory_uri() . '/dist/new-wingate.css', array(), $style_version );
    }

    // Localize data for API
    wp_localize_script(
        'wingate-react-bundle',
        'wingateEventsData',
        array(
            'root' => esc_url_raw( rest_url() ),
            'nonce' => wp_create_nonce( 'wp_rest' ),
            'assetsUrl' => get_stylesheet_directory_uri() . '/assets/', // optional
        )
    );

    echo '<div id="events-admin-root"></div>';
}

/**
 * Non-Admin/Editor Restrictions
 */

// 1. Redirect non-admins/editors to home page after login
add_filter( 'login_redirect', 'wingate_restricted_login_redirect', 10, 3 );
function wingate_restricted_login_redirect( $redirect_to, $request, $user ) {
	if ( isset( $user->roles ) && is_array( $user->roles ) ) {
		// Allow administrators and editors
		if ( in_array( 'administrator', $user->roles ) || in_array( 'editor', $user->roles ) ) {
			return $redirect_to;
		}
	}
	// Everyone else to home
	return home_url();
}

// 2. Restrict dashboard access for non-admins/editors
add_action( 'admin_init', 'wingate_restrict_admin_access' );
function wingate_restrict_admin_access() {
	if ( defined( 'DOING_AJAX' ) && DOING_AJAX ) {
		return;
	}

	// If not admin and not editor, redirect to home
	if ( ! current_user_can( 'manage_options' ) && ! current_user_can( 'edit_others_posts' ) ) {
		wp_redirect( home_url() );
		exit;
	}
}

// 3. Disable admin bar for non-admins/editors on front-end
add_action( 'init', 'wingate_disable_admin_bar_for_restricted' );
function wingate_disable_admin_bar_for_restricted() {
	// If not admin and not editor, hide admin bar
	if ( ! current_user_can( 'manage_options' ) && ! current_user_can( 'edit_others_posts' ) ) {
		show_admin_bar( false );
	}
}

add_action( 'wp_footer', 'wingate_mobile_menu_script', 30 );
function wingate_mobile_menu_script() {
	?>
	<script>
	document.addEventListener('DOMContentLoaded', function () {
		var drawer = document.querySelector('.wingate-mobile-menu-drawer');
		var overlay = document.querySelector('.wingate-mobile-menu-overlay');
		var openBtn = document.querySelector('.wingate-mobile-menu-toggle');
		var closeBtn = document.querySelector('.wingate-mobile-menu-close');

		if (!drawer || !overlay || !openBtn || !closeBtn) {
			return;
		}

		var lastFocused = null;

		function getFocusable() {
			return drawer.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])');
		}

		function openMenu() {
			lastFocused = document.activeElement;
			drawer.classList.add('is-open');
			overlay.classList.add('is-open');
			document.body.classList.add('wingate-mobile-menu-open');
			drawer.setAttribute('aria-hidden', 'false');
			openBtn.setAttribute('aria-expanded', 'true');
			var focusables = getFocusable();
			if (focusables.length) {
				focusables[0].focus();
			}
		}

		function closeMenu() {
			drawer.classList.remove('is-open');
			overlay.classList.remove('is-open');
			document.body.classList.remove('wingate-mobile-menu-open');
			drawer.setAttribute('aria-hidden', 'true');
			openBtn.setAttribute('aria-expanded', 'false');
			if (lastFocused && typeof lastFocused.focus === 'function') {
				lastFocused.focus();
			}
		}

		openBtn.addEventListener('click', openMenu);
		closeBtn.addEventListener('click', closeMenu);
		overlay.addEventListener('click', closeMenu);

		drawer.addEventListener('click', function (event) {
			if (event.target.matches('a[href]')) {
				closeMenu();
			}
		});

		document.addEventListener('keydown', function (event) {
			if (event.key === 'Escape' && drawer.classList.contains('is-open')) {
				closeMenu();
			}
		});

		var submenuToggles = drawer.querySelectorAll('.wingate-mobile-submenu-toggle');
		submenuToggles.forEach(function (toggle) {
			toggle.addEventListener('click', function () {
				var submenu = toggle.nextElementSibling;
				if (!submenu || !submenu.classList.contains('wingate-mobile-submenu')) {
					return;
				}

				var isOpen = toggle.getAttribute('aria-expanded') === 'true';
				toggle.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
				submenu.classList.toggle('is-open', !isOpen);
			});
		});
	});
	</script>
	<?php
}

/**
 * Clean and extract a parseable start time from freeform user input.
 * E.g., "08:00 - 12:00" -> "08:00", "8am" -> "08:00", "14h30" -> "14:30"
 */
function wingate_extract_start_time( $time_str ) {
    $time_str = trim( strtolower( $time_str ) );
    if ( empty( $time_str ) ) {
        return '';
    }
    
    // Normalise "h" separator to ":" (e.g., 14h30 -> 14:30)
    $time_str = preg_replace( '/(\d{1,2})h(\d{2})/', '$1:$2', $time_str );
    
    // Pattern 1: HH:MM or H:MM (with optional am/pm)
    if ( preg_match( '/\b(\d{1,2}:\d{2}\s*(?:am|pm)?)/', $time_str, $matches ) ) {
        return trim( $matches[1] );
    }
    
    // Pattern 2: Single hour digit followed by am/pm (e.g. 8am, 12pm, 8 am)
    if ( preg_match( '/\b(\d{1,2}\s*(?:am|pm))\b/', $time_str, $matches ) ) {
        return trim( $matches[1] );
    }
    
    return '';
}

/**
 * Format date & time into ISO 8601 or YYYY-MM-DD relative to Africa/Harare.
 */
function wingate_format_event_schema_date( $date_str, $time_str = '' ) {
    if ( empty( $date_str ) || ! preg_match( '/^\d{4}-\d{2}-\d{2}$/', $date_str ) ) {
        return '';
    }
    
    $timezone = new DateTimeZone( 'Africa/Harare' );
    
    try {
        $clean_time = wingate_extract_start_time( $time_str );
        if ( ! empty( $clean_time ) ) {
            $dt = new DateTime( $date_str . ' ' . $clean_time, $timezone );
            return $dt->format( 'c' ); // ISO 8601
        }
        
        $dt = new DateTime( $date_str, $timezone );
        return $dt->format( 'Y-m-d' );
    } catch ( Exception $e ) {
        return '';
    }
}

/**
 * Generate JSON-LD Schema array for a wingate_event.
 */
function wingate_get_event_schema( $post_id ) {
    $event_date     = get_post_meta( $post_id, 'event_date', true );
    $event_end_date = get_post_meta( $post_id, 'event_end_date', true );
    $tee_off_time   = get_post_meta( $post_id, 'tee_off_time', true );
    $event_type     = get_post_meta( $post_id, 'event_type', true ); // e.g. tournament, social
    
    if ( empty( $event_end_date ) ) {
        $event_end_date = $event_date;
    }
    
    $start_date_formatted = wingate_format_event_schema_date( $event_date, $tee_off_time );
    $end_date_formatted   = wingate_format_event_schema_date( $event_end_date );
    
    if ( empty( $start_date_formatted ) ) {
        return []; // Protect against generating invalid schemas
    }
    
    // Status Resolution
    $timezone = new DateTimeZone( 'Africa/Harare' );
    $now      = new DateTime( 'now', $timezone );
    $compare_date = ! empty( $event_end_date ) ? $event_end_date : $event_date;
    $event_dt = new DateTime( $compare_date . ' 23:59:59', $timezone );
    
    $status = ( $now > $event_dt ) 
        ? 'https://schema.org/EventCompleted' 
        : 'https://schema.org/EventScheduled';
        
    // Dynamic schema type mapping
    $schema_type = ( $event_type === 'tournament' ) ? 'SportsEvent' : 'Event';
    
    // Handle description cleanly
    $excerpt = has_excerpt( $post_id ) ? get_the_excerpt( $post_id ) : get_the_content( null, false, $post_id );
    $excerpt = wp_strip_all_tags( strip_shortcodes( $excerpt ) );
    $excerpt = mb_strimwidth( $excerpt, 0, 150, '...' );
    
    $schema = [
        '@context'            => 'https://schema.org',
        '@type'               => $schema_type,
        'name'                => get_the_title( $post_id ),
        'description'         => $excerpt,
        'startDate'           => $start_date_formatted,
        'endDate'             => $end_date_formatted,
        'eventStatus'         => $status,
        'eventAttendanceMode' => 'https://schema.org/OfflineEventAttendanceMode',
        'url'                 => get_permalink( $post_id ),
        'location'            => [
            '@type'   => 'Place',
            'name'    => 'Wingate Golf Club',
            'address' => [
                '@type'           => 'PostalAddress',
                'streetAddress'   => 'Alpes Rd',
                'addressLocality' => 'Harare',
                'addressCountry'  => 'ZW'
            ]
        ],
        'organizer'           => [
            '@type' => 'Organization',
            'name'  => 'Wingate Golf Club',
            'url'   => home_url( '/' )
        ]
    ];
    
    if ( has_post_thumbnail( $post_id ) ) {
        $schema['image'] = get_the_post_thumbnail_url( $post_id, 'full' );
    } else {
        $schema['image'] = home_url( '/wp-content/uploads/2026/08/wingate_ineverse.webp' );
    }
    
    return $schema;
}

/**
 * Output the JSON-LD script tag in the page header.
 */
function wingate_output_event_schema() {
    if ( is_singular( 'wingate_event' ) ) {
        $schema = wingate_get_event_schema( get_the_ID() );
        if ( ! empty( $schema ) ) {
            echo "\n<!-- Wingate Event Schema -->\n";
            echo '<script type="application/ld+json">';
            echo wp_json_encode( $schema, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_HEX_TAG | JSON_HEX_AMP | JSON_HEX_APOS | JSON_HEX_QUOT );
            echo "</script>\n";
        }
    }
}
add_action( 'wp_head', 'wingate_output_event_schema' );

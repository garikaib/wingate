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




add_action( 'wp_head', 'wingate_add_favicon_fallback', 1 );
function wingate_add_favicon_fallback() {
	if ( has_site_icon() ) {
		return;
	}

	$svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="8" fill="#0e1b3d"/><text x="50%" y="56%" text-anchor="middle" font-size="34" font-family="Arial, sans-serif" fill="#ffcc00">W</text></svg>';
	$data_uri = 'data:image/svg+xml,' . rawurlencode( $svg );

	echo '<link rel="icon" href="' . esc_url( $data_uri ) . '" type="image/svg+xml">';
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
		'email'     => isset( $details['email'] ) ? (string) $details['email'] : '#',
		'phone'     => isset( $details['phone'] ) ? (string) $details['phone'] : '#',
		'facebook'  => isset( $details['facebook'] ) ? (string) $details['facebook'] : '#',
		'instagram' => isset( $details['instagram'] ) ? (string) $details['instagram'] : '#',
		'address'   => isset( $details['address'] ) ? (string) $details['address'] : '',
		'hours'     => isset( $details['hours'] ) ? (string) $details['hours'] : '',
	);
}

function wingate_sanitize_contact_details( $input ) {
	$defaults = wingate_contact_details_defaults();

	if ( ! is_array( $input ) ) {
		return $defaults;
	}

	$email = isset( $input['email'] ) ? trim( (string) $input['email'] ) : '#';
	if ( '#' !== $email && '' !== $email ) {
		$email = sanitize_email( $email );
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
		'facebook'  => $facebook,
		'instagram' => $instagram,
		'address'   => $address,
		'hours'     => $hours,
	);
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

function wingate_render_contact_settings_page() {
	$details = wingate_get_contact_details();
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
								'Used for tap-to-call links across the site.'
							);
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
						<div class="wingate-admin-actions">
							<?php submit_button( 'Save Contact Details', 'primary wingate-admin-save', 'submit', false ); ?>
						</div>
					</form>
				</section>

				<aside class="wingate-admin-card wingate-admin-preview wingate-anim-enter" data-wingate-delay="220">
					<h2>Live Preview</h2>
					<p class="wingate-admin-card-subtitle">What your current values look like at a glance.</p>
					<ul>
						<li><span>Email</span><strong><?php echo esc_html( $details['email'] ); ?></strong></li>
						<li><span>Phone</span><strong><?php echo esc_html( $details['phone'] ); ?></strong></li>
						<li><span>Address</span><strong><?php echo esc_html( $details['address'] ); ?></strong></li>
						<li><span>Hours</span><strong><?php echo esc_html( $details['hours'] ); ?></strong></li>
						<li><span>Facebook</span><strong><?php echo esc_html( $details['facebook'] ); ?></strong></li>
						<li><span>Instagram</span><strong><?php echo esc_html( $details['instagram'] ); ?></strong></li>
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
        // Order by event date (custom meta)
        $query->set('meta_key', 'event_date');
        $query->set('orderby', 'meta_value');
        $query->set('order', 'ASC');

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

    // Default pages without a more specific page template.
    if ( is_page() ) {
        $custom = locate_template( 'page.php' );
        if ( $custom ) {
            return $custom;
        }
    }

    return $template;
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

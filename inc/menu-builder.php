<?php
/**
 * Menu Builder data, REST API, and theme rendering.
 *
 * @package Wingate
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Build a menu builder item record.
 *
 * @param string $id Item identifier.
 * @param string $label Item label.
 * @param string $type Item type.
 * @param string $url URL for custom links.
 * @param int    $page_id Linked page ID.
 * @param string $parent_id Parent item ID.
 * @param bool   $locked Whether the item is protected.
 * @param string $lock_key Stable lock key.
 * @return array<string,mixed>
 */
function wingate_menu_builder_make_item( $id, $label, $type = 'custom', $url = '', $page_id = 0, $parent_id = '', $locked = false, $lock_key = '' ) {
	return array(
		'id'       => (string) $id,
		'label'    => (string) $label,
		'type'     => 'page' === $type ? 'page' : 'custom',
		'url'      => (string) $url,
		'pageId'   => (int) $page_id,
		'parentId' => (string) $parent_id,
		'locked'   => (bool) $locked,
		'lockKey'  => (string) $lock_key,
	);
}

/**
 * Default menu definitions used to bootstrap and protect top-level items.
 *
 * @return array<string,array<int,array<string,mixed>>>
 */
function wingate_menu_builder_default_menus() {
	return array(
		'main'   => array(
			wingate_menu_builder_make_item( 'main-home', 'HOME', 'custom', '/', 0, '', true, 'main-home' ),
			wingate_menu_builder_make_item( 'main-course', 'THE COURSE', 'custom', '/course/', 0, '', true, 'main-course' ),
			wingate_menu_builder_make_item( 'main-course-details', 'COURSE DETAILS', 'custom', '/course/', 0, 'main-course' ),
			wingate_menu_builder_make_item( 'main-course-layout', 'COURSE LAYOUT', 'custom', '/course/course-layout/', 0, 'main-course' ),
			wingate_menu_builder_make_item( 'main-rates', 'RATES', 'custom', '/rates/', 0, 'main-course' ),
			wingate_menu_builder_make_item( 'main-hole-by-hole', 'HOLE BY HOLE', 'custom', '/hole-by-hole/', 0, 'main-course' ),
			wingate_menu_builder_make_item( 'main-green-fees', 'GREEN FEES', 'custom', '/green-fees/', 0, 'main-course' ),
			wingate_menu_builder_make_item( 'main-booking', 'BOOKING', 'custom', '/booking/', 0, '', true, 'main-booking' ),
			wingate_menu_builder_make_item( 'main-book-tee-time', 'BOOK A TEE TIME', 'custom', '/booking/', 0, 'main-booking' ),
			wingate_menu_builder_make_item( 'main-membership', 'MEMBERSHIP', 'custom', '/membership/', 0, '', true, 'main-membership' ),
			wingate_menu_builder_make_item( 'main-membership-options', 'MEMBERSHIP OPTIONS', 'custom', '/membership/', 0, 'main-membership' ),
			wingate_menu_builder_make_item( 'main-apply-now', 'APPLY NOW', 'custom', '/membership/#apply', 0, 'main-membership' ),
			wingate_menu_builder_make_item( 'main-mens-league', 'MEN\'S LEAGUE', 'custom', '/mens-handicap/', 0, 'main-membership' ),
			wingate_menu_builder_make_item( 'main-ladies-league', 'LADIES LEAGUE', 'custom', '/ladies-handicap/', 0, 'main-membership' ),
			wingate_menu_builder_make_item( 'main-club-house', 'THE CLUB HOUSE', 'custom', '/club-house/', 0, '', true, 'main-club-house' ),
			wingate_menu_builder_make_item( 'main-club-house-page', 'THE CLUB HOUSE', 'custom', '/club-house/', 0, 'main-club-house' ),
			wingate_menu_builder_make_item( 'main-kitchen', 'THE KITCHEN', 'custom', '/the-kitchen/', 0, 'main-club-house' ),
			wingate_menu_builder_make_item( 'main-loyal-ancient', 'LOYAL & ANCIENT', 'custom', '/loyal-ancient/', 0, 'main-club-house' ),
			wingate_menu_builder_make_item( 'main-events', 'UPCOMING EVENTS', 'custom', '/events/', 0, '', true, 'main-events' ),
			wingate_menu_builder_make_item( 'main-events-tournament', 'TOURNAMENTS', 'custom', '/events/tournament/', 0, 'main-events' ),
			wingate_menu_builder_make_item( 'main-events-wedding', 'WEDDINGS', 'custom', '/events/wedding/', 0, 'main-events' ),
			wingate_menu_builder_make_item( 'main-events-corporate', 'CORPORATE DAY', 'custom', '/events/corporate-day/', 0, 'main-events' ),
			wingate_menu_builder_make_item( 'main-news', 'CLUB NEWS', 'custom', '/news/', 0, '', true, 'main-news' ),
			wingate_menu_builder_make_item( 'main-contact', 'CONTACT US', 'custom', '/contact-us/', 0, '', true, 'main-contact' ),
		),
		'mobile' => array(
			wingate_menu_builder_make_item( 'mobile-home', 'Home', 'custom', '/', 0, '', true, 'mobile-home' ),
			wingate_menu_builder_make_item( 'mobile-course', 'The Course', 'custom', '/course/', 0, '', true, 'mobile-course' ),
			wingate_menu_builder_make_item( 'mobile-course-details', 'Course Details', 'custom', '/course/', 0, 'mobile-course' ),
			wingate_menu_builder_make_item( 'mobile-course-layout', 'Course Layout', 'custom', '/course/course-layout/', 0, 'mobile-course' ),
			wingate_menu_builder_make_item( 'mobile-rates', 'Rates', 'custom', '/rates/', 0, 'mobile-course' ),
			wingate_menu_builder_make_item( 'mobile-hole-by-hole', 'Hole by Hole', 'custom', '/hole-by-hole/', 0, 'mobile-course' ),
			wingate_menu_builder_make_item( 'mobile-green-fees', 'Green Fees', 'custom', '/green-fees/', 0, 'mobile-course' ),
			wingate_menu_builder_make_item( 'mobile-booking', 'Booking', 'custom', '/booking/', 0, '', true, 'mobile-booking' ),
			wingate_menu_builder_make_item( 'mobile-book-tee-time', 'Book a Tee Time', 'custom', '/booking/', 0, 'mobile-booking' ),
			wingate_menu_builder_make_item( 'mobile-membership', 'Membership', 'custom', '/membership/', 0, '', true, 'mobile-membership' ),
			wingate_menu_builder_make_item( 'mobile-membership-options', 'Membership Options', 'custom', '/membership/', 0, 'mobile-membership' ),
			wingate_menu_builder_make_item( 'mobile-apply-now', 'Apply Now', 'custom', '/membership/#apply', 0, 'mobile-membership' ),
			wingate_menu_builder_make_item( 'mobile-mens-league', 'Men\'s League', 'custom', '/mens-handicap/', 0, 'mobile-membership' ),
			wingate_menu_builder_make_item( 'mobile-ladies-league', 'Ladies League', 'custom', '/ladies-handicap/', 0, 'mobile-membership' ),
			wingate_menu_builder_make_item( 'mobile-club-house', 'The Club House', 'custom', '/club-house/', 0, '', true, 'mobile-club-house' ),
			wingate_menu_builder_make_item( 'mobile-kitchen', 'The Kitchen', 'custom', '/the-kitchen/', 0, '', true, 'mobile-kitchen' ),
			wingate_menu_builder_make_item( 'mobile-loyal-ancient', 'Loyal & Ancient', 'custom', '/loyal-ancient/', 0, '', true, 'mobile-loyal-ancient' ),
			wingate_menu_builder_make_item( 'mobile-events', 'Upcoming Events', 'custom', '/events/', 0, '', true, 'mobile-events' ),
			wingate_menu_builder_make_item( 'mobile-events-tournament', 'Tournaments', 'custom', '/events/tournament/', 0, 'mobile-events' ),
			wingate_menu_builder_make_item( 'mobile-events-wedding', 'Weddings', 'custom', '/events/wedding/', 0, 'mobile-events' ),
			wingate_menu_builder_make_item( 'mobile-events-corporate', 'Corporate Day', 'custom', '/events/corporate-day/', 0, 'mobile-events' ),
			wingate_menu_builder_make_item( 'mobile-news', 'Club News', 'custom', '/news/', 0, '', true, 'mobile-news' ),
			wingate_menu_builder_make_item( 'mobile-contact', 'Contact Us', 'custom', '/contact-us/', 0, '', true, 'mobile-contact' ),
		),
		'footer' => array(
			wingate_menu_builder_make_item( 'footer-membership', 'Join Our Club', 'custom', '/membership/', 0, '', true, 'footer-membership' ),
			wingate_menu_builder_make_item( 'footer-privacy', 'Privacy Policy', 'custom', '#', 0, '', true, 'footer-privacy' ),
		),
	);
}

/**
 * Return known menu labels.
 *
 * @return array<string,string>
 */
function wingate_menu_builder_labels() {
	return array(
		'main'   => 'Main Menu',
		'mobile' => 'Mobile Menu',
		'footer' => 'Footer Menu',
	);
}

/**
 * Ensure the stored menu option exists and is seeded from theme defaults once.
 *
 * @return void
 */
function wingate_menu_builder_maybe_initialize_option() {
	$stored = get_option( 'wingate_menu_builder_menus', null );
	if ( null !== $stored ) {
		return;
	}

	update_option( 'wingate_menu_builder_menus', wingate_menu_builder_default_menus(), false );
}

/**
 * Generate a sanitized URL while keeping internal paths intact.
 *
 * @param string $url Raw URL.
 * @return string
 */
function wingate_menu_builder_sanitize_url( $url ) {
	$url = trim( (string) $url );
	if ( '' === $url ) {
		return '';
	}

	if ( '#' === $url || '/' === $url || 0 === strpos( $url, '/' ) ) {
		return $url;
	}

	if ( 0 === strpos( $url, 'mailto:' ) || 0 === strpos( $url, 'tel:' ) ) {
		return esc_url_raw( $url );
	}

	return esc_url_raw( $url );
}

/**
 * Normalize a raw set of menu items.
 *
 * @param mixed  $items Raw items.
 * @param string $menu_slug Menu slug.
 * @return array<int,array<string,mixed>>
 */
function wingate_menu_builder_normalize_items( $items, $menu_slug ) {
	$defaults    = wingate_menu_builder_default_menus();
	$default_set = isset( $defaults[ $menu_slug ] ) ? $defaults[ $menu_slug ] : array();
	$locked_map  = array();

	foreach ( $default_set as $default_item ) {
		if ( ! empty( $default_item['locked'] ) && empty( $default_item['parentId'] ) && ! empty( $default_item['lockKey'] ) ) {
			$locked_map[ $default_item['lockKey'] ] = $default_item;
		}
	}

	$raw_items = is_array( $items ) ? $items : array();
	$normalized = array();
	$ids_seen = array();

	foreach ( $raw_items as $raw_item ) {
		if ( ! is_array( $raw_item ) ) {
			continue;
		}

		$lock_key = sanitize_key( (string) ( $raw_item['lockKey'] ?? '' ) );
		if ( $lock_key && isset( $locked_map[ $lock_key ] ) ) {
			$locked_item = $locked_map[ $lock_key ];
			if ( isset( $ids_seen[ $locked_item['id'] ] ) ) {
				continue;
			}
			$normalized[] = $locked_item;
			$ids_seen[ $locked_item['id'] ] = true;
			continue;
		}

		$item_id = sanitize_key( (string) ( $raw_item['id'] ?? '' ) );
		if ( '' === $item_id ) {
			$item_id = 'item_' . wp_generate_password( 10, false, false );
		}
		if ( isset( $ids_seen[ $item_id ] ) ) {
			continue;
		}

		$type = 'page' === ( $raw_item['type'] ?? '' ) ? 'page' : 'custom';
		$page_id = absint( $raw_item['pageId'] ?? 0 );
		if ( 'page' === $type && ( $page_id <= 0 || 'page' !== get_post_type( $page_id ) ) ) {
			continue;
		}

		$normalized[] = array(
			'id'       => $item_id,
			'label'    => sanitize_text_field( (string) ( $raw_item['label'] ?? '' ) ),
			'type'     => $type,
			'url'      => wingate_menu_builder_sanitize_url( (string) ( $raw_item['url'] ?? '' ) ),
			'pageId'   => $page_id,
			'parentId' => sanitize_key( (string) ( $raw_item['parentId'] ?? '' ) ),
			'locked'   => false,
			'lockKey'  => '',
		);
		$ids_seen[ $item_id ] = true;
	}

	$id_map = array();
	foreach ( $normalized as $index => $item ) {
		$id_map[ $item['id'] ] = $index;
	}

	foreach ( $normalized as $index => $item ) {
		$parent_id = (string) $item['parentId'];
		if ( '' !== $parent_id && ! isset( $id_map[ $parent_id ] ) ) {
			$normalized[ $index ]['parentId'] = '';
		}
	}

	foreach ( $locked_map as $lock_key => $locked_item ) {
		$present = false;
		foreach ( $normalized as $item ) {
			if ( $lock_key === (string) $item['lockKey'] ) {
				$present = true;
				break;
			}
		}
		if ( ! $present ) {
			$normalized[] = $locked_item;
		}
	}

	return wingate_menu_builder_break_cycles( $normalized );
}

/**
 * Remove parent cycles from a menu item list.
 *
 * @param array<int,array<string,mixed>> $items Items.
 * @return array<int,array<string,mixed>>
 */
function wingate_menu_builder_break_cycles( $items ) {
	$items = array_values( $items );
	$lookup = array();
	foreach ( $items as $item ) {
		$lookup[ $item['id'] ] = $item;
	}

	foreach ( $items as $index => $item ) {
		$seen = array( $item['id'] => true );
		$parent_id = (string) $item['parentId'];
		while ( '' !== $parent_id ) {
			if ( isset( $seen[ $parent_id ] ) || ! isset( $lookup[ $parent_id ] ) ) {
				$items[ $index ]['parentId'] = '';
				break;
			}
			$seen[ $parent_id ] = true;
			$parent_id = (string) $lookup[ $parent_id ]['parentId'];
		}
	}

	return $items;
}

/**
 * Retrieve the stored menu builder data.
 *
 * @return array<string,array<int,array<string,mixed>>>
 */
function wingate_menu_builder_get_menus() {
	$defaults = wingate_menu_builder_default_menus();
	$stored   = get_option( 'wingate_menu_builder_menus', array() );
	$menus    = array();

	foreach ( $defaults as $menu_slug => $default_items ) {
		$menus[ $menu_slug ] = wingate_menu_builder_normalize_items(
			$stored[ $menu_slug ] ?? $default_items,
			$menu_slug
		);
	}

	return $menus;
}

/**
 * Persist menu builder data.
 *
 * @param array<string,mixed> $payload Raw payload.
 * @return array<string,array<int,array<string,mixed>>>
 */
function wingate_menu_builder_save_menus( $payload ) {
	$defaults = wingate_menu_builder_default_menus();
	$menus    = array();

	foreach ( $defaults as $menu_slug => $default_items ) {
		$menus[ $menu_slug ] = wingate_menu_builder_normalize_items(
			$payload[ $menu_slug ] ?? $default_items,
			$menu_slug
		);
	}

	update_option( 'wingate_menu_builder_menus', $menus, false );

	return $menus;
}

/**
 * Resolve runtime label and URL for an item.
 *
 * @param array<string,mixed> $item Item.
 * @return array<string,mixed>|null
 */
function wingate_menu_builder_resolve_item( $item ) {
	$type    = (string) ( $item['type'] ?? 'custom' );
	$page_id = absint( $item['pageId'] ?? 0 );

	if ( 'page' === $type ) {
		$post = get_post( $page_id );
		if ( ! $post || 'publish' !== $post->post_status ) {
			return null;
		}

		return array(
			'id'       => (string) $item['id'],
			'label'    => '' !== (string) $item['label'] ? (string) $item['label'] : (string) get_the_title( $page_id ),
			'url'      => (string) get_permalink( $page_id ),
			'parentId' => (string) ( $item['parentId'] ?? '' ),
			'locked'   => ! empty( $item['locked'] ),
		);
	}

	return array(
		'id'       => (string) $item['id'],
		'label'    => (string) ( $item['label'] ?? '' ),
		'url'      => (string) ( $item['url'] ?? '' ),
		'parentId' => (string) ( $item['parentId'] ?? '' ),
		'locked'   => ! empty( $item['locked'] ),
	);
}

/**
 * Build a nested tree from flat ordered items.
 *
 * @param array<int,array<string,mixed>> $items Flat items.
 * @return array<int,array<string,mixed>>
 */
function wingate_menu_builder_build_tree( $items ) {
	$nodes = array();
	$tree  = array();

	foreach ( $items as $item ) {
		$resolved = wingate_menu_builder_resolve_item( $item );
		if ( ! $resolved ) {
			continue;
		}
		$resolved['children'] = array();
		$nodes[ $resolved['id'] ] = $resolved;
	}

	foreach ( $items as $item ) {
		$item_id = (string) ( $item['id'] ?? '' );
		if ( '' === $item_id || ! isset( $nodes[ $item_id ] ) ) {
			continue;
		}

		$parent_id = (string) ( $item['parentId'] ?? '' );
		if ( '' !== $parent_id && isset( $nodes[ $parent_id ] ) ) {
			$nodes[ $parent_id ]['children'][] = &$nodes[ $item_id ];
			continue;
		}

		$tree[] = &$nodes[ $item_id ];
	}

	return $tree;
}

/**
 * Determine whether a menu URL matches the current request path.
 *
 * @param string $url Menu item URL.
 * @return bool
 */
function wingate_menu_builder_is_current_url( $url ) {
	if ( '' === $url || '#' === $url ) {
		return false;
	}

	$target_path = wp_parse_url( $url, PHP_URL_PATH );
	$current_uri = isset( $_SERVER['REQUEST_URI'] ) ? wp_unslash( (string) $_SERVER['REQUEST_URI'] ) : '/';
	$current_path = wp_parse_url( $current_uri, PHP_URL_PATH );

	$target_path  = untrailingslashit( (string) $target_path );
	$current_path = untrailingslashit( (string) $current_path );

	if ( '' === $target_path ) {
		$target_path = '/';
	}

	if ( '' === $current_path ) {
		$current_path = '/';
	}

	return $target_path === $current_path;
}

/**
 * Render submenu nodes for the main desktop menu.
 *
 * @param array<int,array<string,mixed>> $nodes Tree nodes.
 * @return string
 */
function wingate_menu_builder_render_main_submenu( $nodes ) {
	$html = '';
	foreach ( $nodes as $node ) {
		$label = esc_html( (string) $node['label'] );
		$url   = esc_url( (string) $node['url'] );
		$children = isset( $node['children'] ) && is_array( $node['children'] ) ? $node['children'] : array();
		$link_classes = 'wingate-builder-main-submenu-link';

		if ( wingate_menu_builder_is_current_url( (string) $node['url'] ) ) {
			$link_classes .= ' is-current';
		}

		if ( ! empty( $children ) ) {
			$html .= '<div class="wingate-builder-main-subgroup">';
			$html .= '<a class="' . esc_attr( $link_classes ) . ' is-parent" href="' . $url . '">' . $label . '</a>';
			$html .= '<div class="wingate-builder-main-subgroup-children">' . wingate_menu_builder_render_main_submenu( $children ) . '</div>';
			$html .= '</div>';
			continue;
		}

		$html .= '<a class="' . esc_attr( $link_classes ) . '" href="' . $url . '">' . $label . '</a>';
	}

	return $html;
}

/**
 * Render the main menu markup.
 *
 * @return string
 */
function wingate_menu_builder_render_main_menu() {
	$menus = wingate_menu_builder_get_menus();
	$tree  = wingate_menu_builder_build_tree( $menus['main'] ?? array() );
	$html  = '<nav class="wingate-builder-main-nav" aria-label="Primary"><ul class="wingate-builder-main-list">';

	foreach ( $tree as $node ) {
		$label = esc_html( (string) $node['label'] );
		$url   = esc_url( (string) $node['url'] );
		$children = isset( $node['children'] ) && is_array( $node['children'] ) ? $node['children'] : array();
		$link_classes = 'wingate-builder-main-link';

		if ( wingate_menu_builder_is_current_url( (string) $node['url'] ) ) {
			$link_classes .= ' is-current';
		}

		$html .= '<li class="wingate-builder-main-item' . ( ! empty( $children ) ? ' has-children' : '' ) . '">';
		$html .= '<div class="wingate-builder-main-link-wrap">';
		$html .= '<a class="' . esc_attr( $link_classes ) . '" href="' . $url . '">' . $label . '</a>';
		if ( ! empty( $children ) ) {
			$html .= '<span class="wingate-builder-main-caret" aria-hidden="true"></span>';
		}
		$html .= '</div>';
		if ( ! empty( $children ) ) {
			$html .= '<div class="wingate-builder-main-submenu">' . wingate_menu_builder_render_main_submenu( $children ) . '</div>';
		}
		$html .= '</li>';
	}

	$html .= '</ul></nav>';

	return $html;
}

/**
 * Render nested nodes for the mobile menu drawer.
 *
 * @param array<int,array<string,mixed>> $nodes Tree nodes.
 * @param int                            $depth Current depth.
 * @return string
 */
function wingate_menu_builder_render_mobile_nodes( $nodes, $depth = 0 ) {
	$html = '';

	foreach ( $nodes as $node ) {
		$label = esc_html( (string) $node['label'] );
		$url   = esc_url( (string) $node['url'] );
		$children = isset( $node['children'] ) && is_array( $node['children'] ) ? $node['children'] : array();
		$depth_attr = ' data-depth="' . (int) $depth . '"';
		$link_classes = wingate_menu_builder_is_current_url( (string) $node['url'] ) ? ' class="is-current"' : '';

		if ( empty( $children ) ) {
			$html .= '<a href="' . $url . '"' . $link_classes . $depth_attr . '>' . $label . '</a>';
			continue;
		}

		$html .= '<button type="button" class="wingate-mobile-submenu-toggle" aria-expanded="false"' . $depth_attr . '>' . $label . '</button>';
		$html .= '<div class="wingate-mobile-submenu" data-depth="' . (int) ( $depth + 1 ) . '">';
		$html .= wingate_menu_builder_render_mobile_nodes( $children, $depth + 1 );
		$html .= '</div>';
	}

	return $html;
}

/**
 * Render the mobile menu drawer links.
 *
 * @return string
 */
function wingate_menu_builder_render_mobile_menu() {
	$menus = wingate_menu_builder_get_menus();
	$tree  = wingate_menu_builder_build_tree( $menus['mobile'] ?? array() );
	$html  = '<nav class="wingate-mobile-nav" aria-label="Mobile">';
	$html .= wingate_menu_builder_render_mobile_nodes( $tree );
	$html .= '</nav>';

	return $html;
}

/**
 * Render the footer menu markup.
 *
 * @return string
 */
function wingate_menu_builder_render_footer_menu() {
	$menus = wingate_menu_builder_get_menus();
	$tree  = wingate_menu_builder_build_tree( $menus['footer'] ?? array() );
	$html  = '<nav class="wingate-builder-footer-nav" aria-label="Footer">';

	foreach ( $tree as $node ) {
		$html .= '<a href="' . esc_url( (string) $node['url'] ) . '">' . esc_html( (string) $node['label'] ) . '</a>';
	}

	$html .= '</nav>';

	return $html;
}

/**
 * Shortcode entrypoint for theme menus.
 *
 * @param array<string,mixed> $atts Attributes.
 * @return string
 */
function wingate_menu_builder_shortcode( $atts ) {
	$atts = shortcode_atts(
		array(
			'menu' => 'main',
		),
		$atts,
		'wingate_menu'
	);

	$menu = sanitize_key( (string) $atts['menu'] );
	if ( 'mobile' === $menu ) {
		return wingate_menu_builder_render_mobile_menu();
	}
	if ( 'footer' === $menu ) {
		return wingate_menu_builder_render_footer_menu();
	}

	return wingate_menu_builder_render_main_menu();
}
add_shortcode( 'wingate_menu', 'wingate_menu_builder_shortcode' );

/**
 * Render callback for the menu builder block.
 *
 * @param array<string,mixed> $attributes Block attributes.
 * @return string
 */
function wingate_menu_builder_render_block( $attributes ) {
	$menu = sanitize_key( (string) ( $attributes['menu'] ?? 'main' ) );

	if ( 'mobile' === $menu ) {
		return wingate_menu_builder_render_mobile_menu();
	}

	if ( 'footer' === $menu ) {
		return wingate_menu_builder_render_footer_menu();
	}

	return wingate_menu_builder_render_main_menu();
}

/**
 * Register the dynamic menu builder block.
 *
 * @return void
 */
function wingate_register_menu_builder_block() {
	register_block_type(
		'wingate/menu-render',
		array(
			'api_version'     => 2,
			'render_callback' => 'wingate_menu_builder_render_block',
			'attributes'      => array(
				'menu' => array(
					'type'    => 'string',
					'default' => 'main',
				),
			),
		)
	);
}
add_action( 'init', 'wingate_register_menu_builder_block' );
add_action( 'after_setup_theme', 'wingate_menu_builder_maybe_initialize_option' );

/**
 * Register menu builder REST routes.
 *
 * @return void
 */
function wingate_register_menu_builder_routes() {
	register_rest_route(
		'wingate/v1',
		'/menu-builder',
		array(
			array(
				'methods'             => WP_REST_Server::READABLE,
				'permission_callback' => function () {
					return current_user_can( 'manage_options' );
				},
				'callback'            => function () {
					return rest_ensure_response(
						array(
							'menus'  => wingate_menu_builder_get_menus(),
							'labels' => wingate_menu_builder_labels(),
						)
					);
				},
			),
			array(
				'methods'             => WP_REST_Server::EDITABLE,
				'permission_callback' => function () {
					return current_user_can( 'manage_options' );
				},
				'callback'            => function ( WP_REST_Request $request ) {
					$payload = $request->get_json_params();
					$payload = is_array( $payload ) ? $payload : array();
					$menus   = wingate_menu_builder_save_menus( $payload['menus'] ?? array() );

					return rest_ensure_response(
						array(
							'menus'  => $menus,
							'labels' => wingate_menu_builder_labels(),
						)
					);
				},
			),
		)
	);

	register_rest_route(
		'wingate/v1',
		'/menu-builder/pages',
		array(
			'methods'             => WP_REST_Server::READABLE,
			'permission_callback' => function () {
				return current_user_can( 'manage_options' );
			},
			'callback'            => function ( WP_REST_Request $request ) {
				$search = sanitize_text_field( (string) $request->get_param( 'search' ) );
				$query  = array(
					'post_type'      => 'page',
					'post_status'    => 'publish',
					'posts_per_page' => 25,
					'orderby'        => 'title',
					'order'          => 'ASC',
				);

				if ( '' !== $search ) {
					$query['s'] = $search;
				}

				$posts = get_posts( $query );
				$items = array();
				foreach ( $posts as $post ) {
					$items[] = array(
						'id'       => (int) $post->ID,
						'title'    => (string) get_the_title( $post ),
						'slug'     => (string) $post->post_name,
						'url'      => (string) get_permalink( $post ),
						'parentId' => (int) $post->post_parent,
					);
				}

				return rest_ensure_response( $items );
			},
		)
	);
}
add_action( 'rest_api_init', 'wingate_register_menu_builder_routes' );

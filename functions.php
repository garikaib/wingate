<?php
/**
 * Wingate child theme functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Wingate
 */

add_action( 'wp_enqueue_scripts', 'wingate_enqueue_assets' );
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

	// React Bundle (dist folder)
	if ( file_exists( get_stylesheet_directory() . '/dist/new-wingate.css' ) ) {
		wp_enqueue_style( 'wingate-react-style', get_stylesheet_directory_uri() . '/dist/new-wingate.css', array(), $style_version );
	}

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

add_filter( 'script_loader_tag', 'wingate_force_module_script_tag', 10, 3 );
function wingate_force_module_script_tag( $tag, $handle, $src ) {
	if ( 'wingate-react-bundle' !== $handle ) {
		return $tag;
	}

	return sprintf(
		'<script type="module" src="%s" id="%s-js"></script>',
		esc_url( $src ),
		esc_attr( $handle )
	);
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
function wingate_add_open_graph_meta() {
	if ( ! is_singular() ) {
		return;
	}

	if ( class_exists( 'WPSEO_Frontend' ) ) {
		return;
	}

	$post_id = get_queried_object_id();
	if ( ! $post_id ) {
		return;
	}

	$title       = get_the_title( $post_id );
	$url         = get_permalink( $post_id );
	$description = get_the_excerpt( $post_id );
	if ( empty( $description ) ) {
		$description = wp_trim_words( wp_strip_all_tags( get_post_field( 'post_content', $post_id ) ), 30 );
	}
	$image = get_the_post_thumbnail_url( $post_id, 'full' );
	if ( ! $image ) {
		$image = home_url( '/wp-content/uploads/2026/02/20260131_124600-scaled.jpg' );
	}

	$type = is_singular( 'post' ) ? 'article' : 'website';
	$site_name = get_bloginfo( 'name' );
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
    </style>
    <script>
    document.addEventListener('DOMContentLoaded', function() {
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
    });
    </script>
    <?php
}
add_action('wp_footer', 'wingate_global_animations');

add_action( 'wp_footer', 'wingate_inject_footer_root', 0 );
function wingate_inject_footer_root() {
	echo '<div id="footer-root"></div>';
}

function wingate_contact_details_defaults() {
	return array(
		'email'     => '#',
		'phone'     => '#',
		'facebook'  => '#',
		'instagram' => '#',
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

	return array(
		'email'     => $email,
		'phone'     => $phone,
		'facebook'  => $facebook,
		'instagram' => $instagram,
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
		'Contact Details',
		'Contact Details',
		'manage_options',
		'wingate-settings',
		'wingate_render_contact_settings_page'
	);

	add_submenu_page(
		'wingate-settings',
		'Maintenance Mode',
		'Maintenance Mode',
		'manage_options',
		'wingate-maintenance',
		'wingate_render_maintenance_page'
	);
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
	if ( 'toplevel_page_wingate-settings' !== $hook ) {
		return;
	}

	$version = wp_get_theme()->get( 'Version' );

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
				<h1>Contact Details</h1>
				<p>
					Manage the global social and contact links shown across the React SPA.
					Use <strong>#</strong> when a link is not ready yet.
				</p>
			</section>

			<div class="wingate-admin-grid">
				<section class="wingate-admin-card wingate-anim-enter" data-wingate-delay="120">
					<h2>Global Links</h2>
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
					<ul>
						<li><span>Email</span><strong><?php echo esc_html( $details['email'] ); ?></strong></li>
						<li><span>Phone</span><strong><?php echo esc_html( $details['phone'] ); ?></strong></li>
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
 * Maintenance Mode Logic
 */

add_action( 'admin_init', 'wingate_register_maintenance_settings' );
function wingate_register_maintenance_settings() {
	register_setting( 'wingate_maintenance_group', 'wingate_maintenance_mode' );
	register_setting( 'wingate_maintenance_group', 'wingate_maintenance_roles' );
}

add_action( 'admin_enqueue_scripts', 'wingate_enqueue_maintenance_assets' );
function wingate_enqueue_maintenance_assets( $hook ) {
	if ( 'wingate_page_wingate-maintenance' !== $hook ) {
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
		'^events/(tournament|wedding|banquet|social)/?$',
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
	if ( '1' === get_option( 'wingate_event_type_rewrite_flushed', '0' ) ) {
		return;
	}

	wingate_register_event_type_rewrites();
	flush_rewrite_rules( false );
	update_option( 'wingate_event_type_rewrite_flushed', '1' );
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

        $allowed_types = array( 'tournament', 'wedding', 'banquet', 'social' );
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

    return $template;
}

require_once __DIR__ . '/inc/events-cpt.php';
require_once __DIR__ . '/inc/api-routes.php';

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

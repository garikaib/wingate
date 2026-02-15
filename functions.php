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
	$version = wp_get_theme()->get( 'Version' );

	// Parent theme style
	wp_enqueue_style( 'twentytwentyfive-style', get_template_directory_uri() . '/style.css' );

	// Google Fonts
	wp_enqueue_style( 'wingate-fonts', 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Montserrat:wght@300;400;700&family=Merriweather:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600&display=swap', array(), null );

	// React Bundle (dist folder)
	if ( file_exists( get_stylesheet_directory() . '/dist/new-wingate.css' ) ) {
		wp_enqueue_style( 'wingate-react-style', get_stylesheet_directory_uri() . '/dist/new-wingate.css', array(), $version );
	}

	wp_enqueue_script( 'wingate-react-bundle', get_stylesheet_directory_uri() . '/dist/wingate-theme.es.js', array(), $version, true );
	wp_localize_script(
		'wingate-react-bundle',
		'wingateThemeData',
		array(
			'contactDetails' => wingate_get_contact_details(),
		)
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

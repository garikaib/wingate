<?php
/**
 * Custom REST API Routes for Wingate
 */

add_action('rest_api_init', function () {
    register_rest_route('wingate/v1', '/generate-form', [
        'methods' => 'POST',
        'callback' => 'wingate_generate_membership_form',
        'permission_callback' => function ( WP_REST_Request $request ) {
            return wingate_verify_public_rest_request( $request, 'membership_form', 4, 10 * MINUTE_IN_SECONDS );
        },
    ]);
    register_rest_route('wingate/v1', '/form-download', [
        'methods' => 'GET',
        'callback' => 'wingate_download_membership_form',
        'permission_callback' => '__return_true',
    ]);

    // --- Restore Safe State API ---
    register_rest_route('wingate/v1', '/restore-safe-state', [
        'methods' => 'POST',
        'callback' => 'wingate_restore_safe_state',
        'permission_callback' => function () {
            return current_user_can('manage_options');
        },
    ]);

    // --- Home Settings API ---
    register_rest_route('wingate/v1', '/home-settings', [
        'methods' => 'GET',
        'callback' => 'wingate_get_home_settings',
        'permission_callback' => '__return_true',
    ]);
    register_rest_route('wingate/v1', '/home-settings', [
        'methods' => 'POST',
        'callback' => 'wingate_update_home_settings',
        'permission_callback' => function () {
            return current_user_can('manage_options');
        },
    ]);

    // --- Course Settings API ---
    register_rest_route('wingate/v1', '/course-settings', [
        'methods' => 'GET',
        'callback' => 'wingate_get_course_settings',
        'permission_callback' => '__return_true',
    ]);
    register_rest_route('wingate/v1', '/course-settings', [
        'methods' => 'POST',
        'callback' => 'wingate_update_course_settings',
        'permission_callback' => function () {
            return current_user_can('manage_options');
        },
    ]);

    // --- Scorecard API ---
    register_rest_route('wingate/v1', '/scorecard', [
        'methods' => 'GET',
        'callback' => 'wingate_get_scorecard',
        'permission_callback' => '__return_true',
    ]);
    register_rest_route('wingate/v1', '/scorecard', [
        'methods' => 'POST',
        'callback' => 'wingate_update_scorecard',
        'permission_callback' => function () {
            return current_user_can('manage_options');
        },
    ]);

    // --- Hole By Hole Settings API ---
    register_rest_route('wingate/v1', '/hole-by-hole', [
        'methods' => 'GET',
        'callback' => 'wingate_get_hole_by_hole_settings',
        'permission_callback' => '__return_true',
    ]);
    register_rest_route('wingate/v1', '/hole-by-hole', [
        'methods' => 'POST',
        'callback' => 'wingate_update_hole_by_hole_settings',
        'permission_callback' => function () {
            return current_user_can('manage_options');
        },
    ]);

    // --- Rates Settings API ---
    register_rest_route('wingate/v1', '/rates-settings', [
        'methods' => 'GET',
        'callback' => 'wingate_get_rates_settings',
        'permission_callback' => '__return_true',
    ]);
    register_rest_route('wingate/v1', '/rates-settings', [
        'methods' => 'POST',
        'callback' => 'wingate_update_rates_settings',
        'permission_callback' => function () {
            return current_user_can('manage_options');
        },
    ]);

    // --- Green Fees Settings API ---
    register_rest_route('wingate/v1', '/green-fees-settings', [
        'methods' => 'GET',
        'callback' => 'wingate_get_green_fees_settings',
        'permission_callback' => '__return_true',
    ]);
    register_rest_route('wingate/v1', '/green-fees-settings', [
        'methods' => 'POST',
        'callback' => 'wingate_update_green_fees_settings',
        'permission_callback' => function () {
            return current_user_can('manage_options');
        },
    ]);

    // --- Booking Settings API ---
    register_rest_route('wingate/v1', '/booking-settings', [
        'methods' => 'GET',
        'callback' => 'wingate_get_booking_settings',
        'permission_callback' => '__return_true',
    ]);
    register_rest_route('wingate/v1', '/booking-settings', [
        'methods' => 'POST',
        'callback' => 'wingate_update_booking_settings',
        'permission_callback' => function () {
            return current_user_can('manage_options');
        },
    ]);

    // --- News Layout Settings API ---
    register_rest_route('wingate/v1', '/news-layout-settings', [
        'methods' => 'GET',
        'callback' => 'wingate_get_news_layout_settings',
        'permission_callback' => '__return_true',
    ]);
    register_rest_route('wingate/v1', '/news-layout-settings', [
        'methods' => 'POST',
        'callback' => 'wingate_update_news_layout_settings',
        'permission_callback' => function () {
            return current_user_can('manage_options');
        },
    ]);

    // --- Membership Settings API ---
    register_rest_route('wingate/v1', '/membership-settings', [
        'methods' => 'GET',
        'callback' => 'wingate_get_membership_settings',
        'permission_callback' => '__return_true',
    ]);
    register_rest_route('wingate/v1', '/membership-settings', [
        'methods' => 'POST',
        'callback' => 'wingate_update_membership_settings',
        'permission_callback' => function () {
            return current_user_can('manage_options');
        },
    ]);

    // --- Contact Page Settings API ---
    register_rest_route('wingate/v1', '/contact-page-settings', [
        'methods' => 'GET',
        'callback' => 'wingate_get_contact_page_settings',
        'permission_callback' => '__return_true',
    ]);
    register_rest_route('wingate/v1', '/contact-page-settings', [
        'methods' => 'POST',
        'callback' => 'wingate_update_contact_page_settings',
        'permission_callback' => function () {
            return current_user_can('manage_options');
        },
    ]);
});

function wingate_sanitize_settings_value( $value, $key = '' ) {
    if ( is_array( $value ) ) {
        $sanitized = [];
        foreach ( $value as $child_key => $child_value ) {
            $sanitized[ $child_key ] = wingate_sanitize_settings_value( $child_value, is_string( $child_key ) ? $child_key : $key );
        }
        return $sanitized;
    }

    if ( is_bool( $value ) ) {
        return (bool) $value;
    }

    if ( is_int( $value ) || is_float( $value ) ) {
        return $value;
    }

    if ( null === $value ) {
        return '';
    }

    $value = (string) $value;
    $lower_key = strtolower( (string) $key );

    if ( false !== strpos( $lower_key, 'email' ) ) {
        return sanitize_email( $value );
    }

    if (
        false !== strpos( $lower_key, 'url' ) ||
        false !== strpos( $lower_key, 'image' ) ||
        false !== strpos( $lower_key, 'href' )
    ) {
        return esc_url_raw( $value );
    }

    return sanitize_textarea_field( $value );
}

function wingate_sanitize_settings_payload( $payload ) {
    if ( ! is_array( $payload ) ) {
        return [];
    }

    return wingate_sanitize_settings_value( $payload );
}

function wingate_get_home_settings_defaults() {
    return [
        'hero' => [
            'title' => 'WINGATE PARK',
            'subtitle' => 'GOLF CLUB',
            'kicker' => 'WELCOME TO',
            'description' => 'A PRESTIGIOUS 18-HOLE CHAMPIONSHIP COURSE',
            'buttonText' => 'BOOK A TEE TIME',
            'buttonUrl' => '/booking/',
            'backgroundImage' => '/wp-content/uploads/2024/07/IMG-20240720-WA0010a.png'
        ],
        'cards' => [
            [
                'title' => 'Join Our Club',
                'subtitle' => 'Membership options & application',
                'image' => '/wp-content/uploads/2026/02/20260126_140911-scaled.jpg',
                'url' => '/membership/',
                'buttonText' => 'Join Our Club'
            ],
            [
                'title' => 'Rates',
                'subtitle' => 'Membership & visitor pricing',
                'image' => '/wp-content/uploads/2026/02/20260208_131606-scaled.jpg',
                'url' => '/rates/',
                'buttonText' => 'View Rates'
            ],
            [
                'title' => 'Green Fees',
                'subtitle' => 'Daily fees & cart hire',
                'image' => '/wp-content/uploads/2026/01/2-3.jpg',
                'url' => '/green-fees/',
                'buttonText' => 'View Green Fees'
            ]
        ],
        'welcome' => [
            'title' => 'Welcome to Wingate Park',
            'image' => '/wp-content/uploads/2026/02/20260125_134724-scaled.jpg',
            'content' => "Wingate Park Golf Club is an 18-hole, well-manicured, and wooded course founded 52 years ago. Located in the tranquil Pomona area of Harare, it serves as a premier destination for golfers of all levels.\n\nToday, the club is open to all, offering a unique and challenging golfing experience with fairways lined with mature trees. The \"Loyal & Ancient\" bar and in-house catering provide a relaxing post-round atmosphere where members and guests can unwind.\n\nWhether you're looking for a competitive round or a leisurely walk in the woods, Wingate Park welcomes you."
        ],
        'peekWindow' => [
            'image' => '/wp-content/uploads/2026/02/20251127_102423-scaled.jpg'
        ]
    ];
}

function wingate_get_home_settings() {
    $settings = get_option('wingate_home_settings', []);
    $defaults = wingate_get_home_settings_defaults();
    
    return new WP_REST_Response(wp_parse_args($settings, $defaults), 200);
}

function wingate_update_home_settings($request) {
    $params = wingate_sanitize_settings_payload( $request->get_json_params() );
    update_option('wingate_home_settings', $params);
    return new WP_REST_Response(['success' => true], 200);
}

// --- Course Settings ---

function wingate_get_course_settings_defaults() {
    return [
        'hero' => [
            'kicker' => 'Championship Layout',
            'title' => 'The Course',
            'backgroundImage' => '/wp-content/uploads/2026/02/20260118_162436-scaled.jpg'
        ],
        'intro' => [
            'title' => "Well Manicured & \nWooded Parkland",
            'content' => "Wingate Park Golf Club is an 18-hole, well-manicured, and wooded course founded 52 years ago. Located in the tranquil Pomona area of Harare, it offers a unique and challenging golfing experience with fairways lined with mature trees.\n\nDespite playing on these old style characteristics, the course is thoroughly modern in other ways. The 18th is a long par 4 requiring negotiation of water on all three shots.",
            'image' => '/wp-content/uploads/2026/02/20260118_131838-scaled.jpg',
            'stats' => [
                'holes' => '18',
                'par' => '72',
                'distance' => '6450m',
                'time' => '4.5 Hrs'
            ]
        ],
        'galleryCta' => [
            'kicker' => 'Visual Tour',
            'title' => "Experience the \n Beauty",
            'description' => 'Explore our gallery to see the manicured fairways, challenging bunkers, and scenic water hazards that make Wingate Park truly unique.',
            'image' => '/wp-content/uploads/2026/02/20260126_140911-scaled.jpg',
            'buttonText' => 'View Gallery',
            'buttonUrl' => '/gallery'
        ]
    ];
}

function wingate_get_course_settings() {
    $settings = get_option('wingate_course_settings', []);
    $defaults = wingate_get_course_settings_defaults();
    return new WP_REST_Response(wp_parse_args($settings, $defaults), 200);
}

function wingate_update_course_settings($request) {
    $params = wingate_sanitize_settings_payload( $request->get_json_params() );
    update_option('wingate_course_settings', $params);
    return new WP_REST_Response(['success' => true], 200);
}

// --- Scorecard ---

function wingate_get_scorecard_defaults() {
    return [
        'out' => [
            ['hole' => 1, 'par' => 4, 'white' => 422, 'blue' => 404, 'red' => 329, 'si' => 7],
            ['hole' => 2, 'par' => 5, 'white' => 467, 'blue' => 459, 'red' => 452, 'si' => 5],
            ['hole' => 3, 'par' => 3, 'white' => 150, 'blue' => 134, 'red' => 122, 'si' => 15],
            ['hole' => 4, 'par' => 5, 'white' => 469, 'blue' => 418, 'red' => 414, 'si' => 13],
            ['hole' => 5, 'par' => 4, 'white' => 388, 'blue' => 373, 'red' => 298, 'si' => 3],
            ['hole' => 6, 'par' => 3, 'white' => 191, 'blue' => 174, 'red' => 164, 'si' => 11],
            ['hole' => 7, 'par' => 4, 'white' => 370, 'blue' => 357, 'red' => 349, 'si' => 9],
            ['hole' => 8, 'par' => 4, 'white' => 337, 'blue' => 324, 'red' => 312, 'si' => 17],
            ['hole' => 9, 'par' => 4, 'white' => 418, 'blue' => 367, 'red' => 335, 'si' => 1],
        ],
        'in' => [
            ['hole' => 10, 'par' => 5, 'white' => 495, 'blue' => 470, 'red' => 462, 'si' => 14],
            ['hole' => 11, 'par' => 4, 'white' => 386, 'blue' => 372, 'red' => 309, 'si' => 6],
            ['hole' => 12, 'par' => 5, 'white' => 523, 'blue' => 515, 'red' => 445, 'si' => 10],
            ['hole' => 13, 'par' => 3, 'white' => 182, 'blue' => 156, 'red' => 148, 'si' => 16],
            ['hole' => 14, 'par' => 4, 'white' => 427, 'blue' => 377, 'red' => 349, 'si' => 2],
            ['hole' => 15, 'par' => 4, 'white' => 389, 'blue' => 374, 'red' => 311, 'si' => 12],
            ['hole' => 16, 'par' => 4, 'white' => 340, 'blue' => 333, 'red' => 328, 'si' => 4],
            ['hole' => 17, 'par' => 3, 'white' => 141, 'blue' => 132, 'red' => 123, 'si' => 18],
            ['hole' => 18, 'par' => 4, 'white' => 355, 'blue' => 335, 'red' => 316, 'si' => 8],
        ]
    ];
}

function wingate_get_scorecard() {
    $scorecard = get_option('wingate_scorecard', []);
    $defaults = wingate_get_scorecard_defaults();
    return new WP_REST_Response(wp_parse_args($scorecard, $defaults), 200);
}

function wingate_update_scorecard($request) {
    $params = wingate_sanitize_settings_payload( $request->get_json_params() );
    update_option('wingate_scorecard', $params);
    return new WP_REST_Response(['success' => true], 200);
}

function wingate_get_events($request) {
    $args = [
        'post_type' => 'wingate_event',
        'posts_per_page' => -1,
        'post_status' => 'publish',
        'orderby' => 'meta_value',
        'meta_key' => 'event_date',
        'order' => 'ASC',
    ];

    $query = new WP_Query($args);
    $events = [];

    if ($query->have_posts()) {
        while ($query->have_posts()) {
            $query->the_post();
            $events[] = wingate_prepare_event_for_response(get_post());
        }
    }
    wp_reset_postdata();

    return new WP_REST_Response($events, 200);
}

function wingate_get_event($request) {
    $id = (int) $request['id'];
    $post = get_post($id);

    if (!$post || $post->post_type !== 'wingate_event') {
        return new WP_Error('not_found', 'Event not found', ['status' => 404]);
    }

    return new WP_REST_Response(wingate_prepare_event_for_response($post), 200);
}

function wingate_create_update_event($request) {
    $params = $request->get_json_params();
    $id = isset($params['id']) ? (int) $params['id'] : 0;

    $post_data = [
        'post_type' => 'wingate_event',
        'post_status' => 'publish',
        'post_title' => sanitize_text_field($params['title']),
        'post_content' => wp_kses_post($params['description']),
    ];

    if ($id > 0) {
        $post_data['ID'] = $id;
        $post_id = wp_update_post($post_data);
    } else {
        $post_id = wp_insert_post($post_data);
    }

    if (is_wp_error($post_id)) {
        return $post_id;
    }

    // Update Meta
    update_post_meta($post_id, 'event_date', sanitize_text_field($params['date'])); // Store as YYYY-MM-DD
    update_post_meta($post_id, 'event_type', sanitize_text_field($params['type']));

    // Wedding Fields
    if ($params['type'] === 'wedding') {
        update_post_meta($post_id, 'wedding_groom', sanitize_text_field($params['groom'] ?? ''));
        update_post_meta($post_id, 'wedding_bride', sanitize_text_field($params['bride'] ?? ''));
        update_post_meta($post_id, 'wedding_reception', sanitize_text_field($params['reception'] ?? ''));
        update_post_meta($post_id, 'is_private', !empty($params['is_private']) ? 1 : 0);
    }

    // Tournament Fields
    if ($params['type'] === 'tournament') {
        update_post_meta($post_id, 'tournament_format', sanitize_text_field($params['format'] ?? ''));
        update_post_meta($post_id, 'tee_off_time', sanitize_text_field($params['tee_off'] ?? ''));
        update_post_meta($post_id, 'entry_fee', sanitize_text_field($params['entry_fee'] ?? ''));
    }

    return new WP_REST_Response(wingate_prepare_event_for_response(get_post($post_id)), 200);
}

function wingate_prepare_event_for_response($post) {
    $type = get_post_meta($post->ID, 'event_type', true);
    
    $data = [
        'id' => $post->ID,
        'title' => $post->post_title,
        'description' => $post->post_content,
        'date' => get_post_meta($post->ID, 'event_date', true),
        'type' => $type,
    ];

    if ($type === 'wedding') {
        $data['groom'] = get_post_meta($post->ID, 'wedding_groom', true);
        $data['bride'] = get_post_meta($post->ID, 'wedding_bride', true);
        $data['reception'] = get_post_meta($post->ID, 'wedding_reception', true);
        $data['is_private'] = get_post_meta($post->ID, 'is_private', true) == '1';
    }

    if ($type === 'tournament') {
        $data['format'] = get_post_meta($post->ID, 'tournament_format', true);
        $data['tee_off'] = get_post_meta($post->ID, 'tee_off_time', true);
        $data['entry_fee'] = get_post_meta($post->ID, 'entry_fee', true);
    }

    return $data;
}

function wingate_blank_membership_form_url() {
    $upload_dir = wp_upload_dir();
    $preferred_rel = '/2026/02/Membership_Application_2026.pdf';
    $preferred_path = $upload_dir['basedir'] . $preferred_rel;

    if (file_exists($preferred_path)) {
        return $upload_dir['baseurl'] . $preferred_rel;
    }

    return home_url('/docs/forms/Membership_Application_2026.pdf');
}

function wingate_has_meaningful_form_values($clean_data) {
    $fillable_keys = [
        'surname',
        'first_names',
        'title',
        'dob',
        'occupation',
        'home_address',
        'postal_address',
        'email',
        'mobile',
        'home_tel',
        'work_tel',
        'prev_club',
        'handicap',
        'player_id',
        'category',
        'proposer_name',
        'proposer_id',
        'seconder_name',
        'seconder_id',
    ];

    foreach ($fillable_keys as $key) {
        if (!empty(trim((string)($clean_data[$key] ?? '')))) {
            return true;
        }
    }

    return false;
}

function wingate_temp_forms_dir() {
    $upload_dir = wp_upload_dir();
    $forms_dir = $upload_dir['basedir'] . '/wingate-temp-forms';
    if (!file_exists($forms_dir)) {
        wp_mkdir_p($forms_dir);
    }

    $index_file = $forms_dir . '/index.php';
    if (!file_exists($index_file)) {
        @file_put_contents($index_file, "<?php\n// Silence is golden.\n");
    }

    $htaccess_file = $forms_dir . '/.htaccess';
    if (!file_exists($htaccess_file)) {
        @file_put_contents(
            $htaccess_file,
            "Options -Indexes\n<FilesMatch \"\\.pdf$\">\nDeny from all\n</FilesMatch>\n"
        );
    }

    return $forms_dir;
}

function wingate_cleanup_temp_forms($forms_dir, $max_age_seconds = 3600) {
    if (!is_dir($forms_dir)) {
        return;
    }

    $now = time();
    foreach (glob($forms_dir . '/*.pdf') as $file_path) {
        $file_mtime = @filemtime($file_path);
        if (!$file_mtime) {
            continue;
        }
        if (($now - $file_mtime) > $max_age_seconds) {
            @unlink($file_path);
        }
    }
}

function wingate_secure_pdf_token_key($token) {
    return 'wingate_pdf_' . $token;
}

function wingate_store_download_token($file_path, $download_name, $ttl_seconds = 1800) {
    $token = wp_generate_password(48, false, false);
    $stored = set_transient(
        wingate_secure_pdf_token_key($token),
        [
            'file' => $file_path,
            'name' => $download_name,
            'created' => time(),
        ],
        $ttl_seconds
    );

    if (!$stored) {
        throw new Exception('Unable to create secure download token.');
    }

    return $token;
}

function wingate_build_download_url($token) {
    return add_query_arg(
        ['token' => $token],
        rest_url('wingate/v1/form-download')
    );
}

function wingate_generate_membership_form($request) {
    $data = $request->get_json_params();

    if (empty($data)) {
        return new WP_Error('no_data', 'No data provided', ['status' => 400]);
    }

    // Sanitize data (basic loop, Python script handles display)
    $clean_data = [];
    foreach ($data as $key => $value) {
        $clean_data[sanitize_text_field($key)] = sanitize_text_field($value);
    }

    if (!wingate_has_meaningful_form_values($clean_data)) {
        return new WP_REST_Response([
            'success' => true,
            'url' => wingate_blank_membership_form_url(),
            'message' => 'No form fields supplied. Returning blank membership form.'
        ], 200);
    }

    $timestamp = time();
    $forms_dir = wingate_temp_forms_dir();
    // Cleanup stale generated PDFs (older than 2 hours).
    wingate_cleanup_temp_forms($forms_dir, 2 * HOUR_IN_SECONDS);

    $surname = !empty($clean_data['surname']) ? $clean_data['surname'] : 'member';
    $random = wp_rand(1000, 9999);
    $pdf_filename = "Membership_Application_{$surname}_{$timestamp}_{$random}.pdf";
    // Sanitize filename
    $pdf_filename = sanitize_file_name($pdf_filename);
    $output_path = $forms_dir . '/' . $pdf_filename;

    require_once __DIR__ . '/generate-pdf.php';

    try {
        wingate_generate_pdf_php($clean_data, $output_path);
        if (!file_exists($output_path)) {
            throw new Exception('Generated PDF file was not created.');
        }
        return new WP_REST_Response([
            'success' => true,
            'url' => wingate_build_download_url(wingate_store_download_token($output_path, $pdf_filename)),
            'message' => 'PDF generated successfully'
        ], 200);
    } catch (Exception $e) {
        error_log("Wingate PDF Gen Error: " . $e->getMessage());
        return new WP_Error('generation_failed', 'Could not generate PDF at this time.', ['status' => 500]);
    }
}

function wingate_download_membership_form($request) {
    $token = sanitize_text_field((string)$request->get_param('token'));
    if ($token === '') {
        return new WP_Error('missing_token', 'Missing download token.', ['status' => 400]);
    }

    $stored = get_transient(wingate_secure_pdf_token_key($token));
    if (!is_array($stored)) {
        return new WP_Error('invalid_token', 'Invalid or expired download token.', ['status' => 403]);
    }

    $file_path = (string)($stored['file'] ?? '');
    $download_name = sanitize_file_name((string)($stored['name'] ?? 'membership-application.pdf'));

    if ($file_path === '' || !file_exists($file_path)) {
        delete_transient(wingate_secure_pdf_token_key($token));
        return new WP_Error('missing_file', 'The file is no longer available.', ['status' => 410]);
    }

    // One-time access token: consume token before streaming.
    delete_transient(wingate_secure_pdf_token_key($token));

    if (function_exists('ob_get_level')) {
        while (ob_get_level() > 0) {
            ob_end_clean();
        }
    }

    nocache_headers();
    header('Content-Type: application/pdf');
    header('Content-Disposition: attachment; filename="' . $download_name . '"');
    header('Content-Length: ' . filesize($file_path));
    header('X-Robots-Tag: noindex, nofollow, noarchive', true);
    header('Cache-Control: private, no-store, no-cache, must-revalidate, max-age=0', true);
    header('Pragma: no-cache', true);
    header('Expires: 0', true);

    readfile($file_path);
    @unlink($file_path);
    exit;
}

// --- Hole By Hole Settings ---

function wingate_get_hole_by_hole_defaults() {
    $default_holes = [];
    $default_descriptions = [
        'A gentle opener that invites you to swing freely. Avoid the bunkers on the right to set up a clean approach.',
        'A true test of length and accuracy. The green is well-guarded, demanding a precise approach shot.',
        'A picturesque par 3 requiring a solid iron shot over water. Adjust for the wind coming off the lake.',
        'Dogleg right that rewards the brave. Cut the corner at your peril, or play safe for a longer approach.',
        'Straightaway par 4 with a narrow fairway. Precision off the tee is key to scoring well here.',
        'A reachable par 5 for long hitters. The green complex is tricky, so short game is tested.',
        'A challenging hole that demands focus. Stay out of the rough to ensure a good score.',
        'Tricky par 3 surrounded by natural hazards. Club selection is crucial to find the putting surface.',
        'A strong finishing hole to the front nine. Keep the drive left to open up the angle to the green.'
    ];

    for ($i = 1; $i <= 18; $i++) {
        $desc_index = ($i - 1) % count($default_descriptions);
        $default_holes[] = [
            'hole' => $i,
            'image' => '/wp-content/uploads/2026/02/20260118_131838-scaled.jpg',
            'description' => $default_descriptions[$desc_index]
        ];
    }

    return [
        'hero' => [
            'kicker' => 'Championship Layout',
            'title' => 'Hole By Hole',
            'subtitle' => 'A WORLD-CLASS CHALLENGE AWAITS',
            'backgroundImage' => '/wp-content/uploads/2026/02/20260118_131838-scaled.jpg'
        ],
        'intro' => [
            'title' => 'THE COURSE',
            'content' => "Welcome to a golfing experience like no other. Our championship course is a masterpiece of design, weaving through natural landscapes to provide a stern yet fair test for golfers of all abilities. Renowned for its pristine conditioning, fast undulating greens, and strategic bunkering, Wingate offers a premium \"private club\" feel that challenges seasoned players while remaining accessible to those looking to improve their game."
        ],
        'holes' => $default_holes
    ];
}

function wingate_get_hole_by_hole_settings() {
    $settings = get_option('wingate_hole_by_hole_settings', []);
    $defaults = wingate_get_hole_by_hole_defaults();
    
    // Merge hero and intro, but for holes array we want the saved one to override, or fallback to defaults
    $merged = wp_parse_args($settings, $defaults);
    if (!isset($settings['holes']) || empty($settings['holes'])) {
        $merged['holes'] = $defaults['holes'];
    }

    return new WP_REST_Response($merged, 200);
}

function wingate_update_hole_by_hole_settings($request) {
    $params = wingate_sanitize_settings_payload( $request->get_json_params() );
    update_option('wingate_hole_by_hole_settings', $params);
    return new WP_REST_Response(['success' => true], 200);
}

// --- Green Fees Settings ---

function wingate_get_green_fees_settings_defaults() {
    return [
        'hero' => [
            'kicker' => 'Championship Value',
            'title' => 'Green Fees',
            'titleHighlight' => 'Rates',
            'subtitle' => 'Experience Championship Golf at Wingate Park',
            'backgroundImage' => '/wp-content/uploads/2026/02/20260131_124600-scaled.jpg'
        ],
        'intro' => [
            'content' => 'Wingate Park Golf Club offers a prestigious golfing experience accessible to all. Whether you are a seasoned affiliated player, a visitor, or a junior starting your journey, we welcome you to challenge yourself on our wooded fairways and pristine greens.'
        ],
        'greenFees' => [
            [ 'category' => 'Affiliated', 'holes18' => 20, 'holes9' => 10 ],
            [ 'category' => 'Non-Affiliated', 'holes18' => 30, 'holes9' => 15 ],
            [ 'category' => 'Non-Residents', 'holes18' => 60, 'holes9' => 40 ],
            [ 'category' => 'Seniors Affiliated', 'holes18' => 10, 'holes9' => 5 ],
            [ 'category' => 'Seniors (Non-Members) 65-74yrs', 'holes18' => 15, 'holes9' => 10 ],
            [ 'category' => 'Juniors', 'holes18' => 5, 'holes9' => 5 ],
            [ 'category' => 'Students (with Valid Cards)', 'holes18' => 15, 'holes9' => 10 ],
            [ 'category' => 'Over 75 Years', 'holes18' => 10, 'holes9' => 5 ],
            [ 'category' => 'Mon/Tue/Thu AM "Special"', 'holes18' => 10, 'holes9' => 5 ]
        ],
        'cartHire' => [
            [ 'type' => 'High-Rider / 4-Seater', 'holes18' => 40, 'holes9' => 25 ],
            [ 'type' => 'Standard Cart', 'holes18' => 35, 'holes9' => 20 ],
            [ 'type' => 'Budget Carts', 'holes18' => 30, 'holes9' => 15 ],
            [ 'type' => '3-Wheeler (Trike)', 'holes18' => 20, 'holes9' => 12 ]
        ],
        'booking' => [
            'title' => 'Book Tee Time or Cart',
            'description' => 'Ready to play? Contact the office to reserve your slot.',
            'phone' => '0772 339 670',
            'phoneType' => 'tel',
            'email' => 'reception@wingate.co.zw'
        ],
        'etiquette' => [
            'title' => 'Dress Code & Etiquette',
            'description' => "To ensure an enjoyable experience for all members and visitors, please adhere to our club's dress code and etiquette.",
            'image' => '/wp-content/uploads/2026/02/20260118_165728-scaled.jpg',
            'items' => [
                'Collared Shirts Required (No T-shirts)',
                'Shirts must be tucked into trousers or shorts',
                'Tailored shorts only (No rugby shorts)',
                'No denim jeans or denim shorts allowed',
                'Short white or "hidden" socks required'
            ],
            'buttonText' => 'Contact Us for More Info',
            'buttonUrl' => '/contact-us/'
        ]
    ];
}

function wingate_get_green_fees_settings() {
    $settings = get_option('wingate_green_fees_settings', []);
    $defaults = wingate_get_green_fees_settings_defaults();
    return new WP_REST_Response(wp_parse_args($settings, $defaults), 200);
}

function wingate_update_green_fees_settings($request) {
    $params = wingate_sanitize_settings_payload( $request->get_json_params() );
    update_option('wingate_green_fees_settings', $params);
    return new WP_REST_Response(['success' => true], 200);
}

// --- Booking Settings ---

function wingate_get_booking_settings_defaults() {
    return [
        'hero' => [
            'kicker' => 'Private Experience',
            'title' => 'Book',
            'titleHighlight' => 'Tee Time',
            'subtitle' => "Secure your round at one of Harare's finest courses",
            'backgroundImage' => '/wp-content/uploads/2026/02/20260131_124600-scaled.jpg',
        ],
        'quickInfo' => [
            [ 'label' => 'Open Daily', 'value' => '7:00 AM - 6:00 PM' ],
            [ 'label' => 'Course Type', 'value' => 'Championship 18' ],
            [ 'label' => 'Questions?', 'value' => 'Contact Us', 'url' => '/contact-us/' ],
        ],
        'dressCode' => [
            'title' => 'Dress Code',
            'badge' => 'D',
            'items' => [
                'Collared shirts required (tucked in).',
                'Tailored shorts only (no rugby/denim).',
                'Short white or "hidden" socks.',
            ],
        ],
        'cartHire' => [
            'title' => 'Cart Hire',
            'badge' => 'C',
            'description' => 'Carts available first-come, first-served. Recommended to reserve via Pro Shop.',
            'label' => '18 Holes',
            'ratesText' => 'Standard $35 | High-Rider $40',
        ],
        'cta' => [
            'text' => 'View All Rates',
            'url' => '/rates/',
        ],
    ];
}

function wingate_get_booking_settings_data() {
    $settings = get_option('wingate_booking_settings', []);
    $defaults = wingate_get_booking_settings_defaults();
    return wp_parse_args($settings, $defaults);
}

function wingate_get_booking_settings() {
    return new WP_REST_Response(wingate_get_booking_settings_data(), 200);
}

function wingate_update_booking_settings($request) {
    $params = wingate_sanitize_settings_payload( $request->get_json_params() );
    update_option('wingate_booking_settings', $params);
    return new WP_REST_Response(['success' => true], 200);
}

// --- News Layout Settings ---

function wingate_get_news_layout_settings_defaults() {
    return [
        'layout' => 'current',
    ];
}

function wingate_get_news_layout_settings_data() {
    $settings = get_option('wingate_news_layout_settings', []);
    $defaults = wingate_get_news_layout_settings_defaults();
    $merged = wp_parse_args($settings, $defaults);

    $allowed = [
        'current',
        'classic-a',
        'classic-b',
        'modern-a',
        'modern-e',
        'slider-a',
    ];

    if ( ! in_array( $merged['layout'], $allowed, true ) ) {
        $merged['layout'] = 'current';
    }

    return $merged;
}

function wingate_get_news_layout_settings() {
    return new WP_REST_Response(wingate_get_news_layout_settings_data(), 200);
}

function wingate_update_news_layout_settings($request) {
    $params = wingate_sanitize_settings_payload( $request->get_json_params() );
    $defaults = wingate_get_news_layout_settings_defaults();
    $merged = wp_parse_args(is_array($params) ? $params : [], $defaults);

    $allowed = [
        'current',
        'classic-a',
        'classic-b',
        'modern-a',
        'modern-e',
        'slider-a',
    ];

    if ( ! in_array( $merged['layout'], $allowed, true ) ) {
        $merged['layout'] = 'current';
    }

    update_option('wingate_news_layout_settings', $merged);
    return new WP_REST_Response(['success' => true], 200);
}

// --- Rates Settings ---

function wingate_get_rates_defaults() {
    return [
        'hero' => [
            'kicker' => 'Private Experience',
            'title' => "Membership \n Subscriptions",
            'subtitle' => 'Subs as from 1st January 2026',
            'backgroundImage' => '/wp-content/uploads/2026/02/20251123_115906-scaled.jpg'
        ],
        'intro' => [
            'kicker' => 'The Investment',
            'title' => "Elite Access, \nCurated for You",
            'content' => "At Wingate Park, we believe membership is more than just access—it's an entry into a legacy.\nOur restructured rates reflect our commitment to maintaining Zimbabwe's premier 18-hole Parkland Course."
        ],
        'menRates' => [
            [ 'category' => 'MALE', 'desc' => 'Over 18 non-student', 'quarterly' => '210', 'monthly' => '70', 'annual' => '', 'flat' => '' ],
            [ 'category' => 'COUNTRY', 'desc' => '+50km from CBD', 'quarterly' => '165', 'monthly' => '55', 'annual' => '', 'flat' => '' ],
            [ 'category' => 'SENIOR', 'desc' => '70-79 yrs & 10yrs member', 'quarterly' => '150', 'monthly' => '50', 'annual' => '', 'flat' => '' ],
            [ 'category' => 'LOCAL PRO', 'desc' => 'Must have a current professional license', 'quarterly' => '120', 'monthly' => '40', 'annual' => '', 'flat' => '' ],
            [ 'category' => 'STUDENT', 'desc' => 'College/Varsity (Proof required)', 'quarterly' => '105', 'monthly' => '35', 'annual' => '', 'flat' => '' ],
            [ 'category' => 'JUNIOR', 'desc' => 'Junior under 19', 'quarterly' => '105', 'monthly' => '35', 'annual' => '', 'flat' => '' ],
            [ 'category' => 'HOUSE MEN', 'desc' => "Access to members facilities. Must pay visitor's fee golf", 'quarterly' => '105', 'monthly' => '35', 'annual' => '', 'flat' => '' ],
            [ 'category' => 'LIMITED ROUNDS', 'desc' => 'Max 18 rounds a year (Once-off)', 'quarterly' => '', 'monthly' => '', 'annual' => '300', 'flat' => '' ],
            [ 'category' => 'PENSIONER', 'desc' => 'Age 80+ & 10 years member', 'quarterly' => '60', 'monthly' => '20', 'annual' => '', 'flat' => '' ],
            [ 'category' => 'ABSENTEE', 'desc' => 'Absent > 2mths, medical or out of country', 'quarterly' => '60', 'monthly' => '20', 'annual' => '', 'flat' => '' ],
        ],
        'ladiesRates' => [
            [ 'category' => 'FEMALE', 'desc' => 'FULL', 'quarterly' => '180', 'monthly' => '60', 'annual' => '', 'flat' => '' ],
            [ 'category' => 'COUNTRY', 'desc' => '+50km from CBD', 'quarterly' => '125', 'monthly' => '45', 'annual' => '', 'flat' => '' ],
            [ 'category' => 'SENIOR', 'desc' => '70-79 yrs & 10yrs member', 'quarterly' => '120', 'monthly' => '40', 'annual' => '', 'flat' => '' ],
            [ 'category' => 'STUDENT FEMALE', 'desc' => 'College/Varsity (Proof required)', 'quarterly' => '90', 'monthly' => '30', 'annual' => '', 'flat' => '' ],
            [ 'category' => 'JUNIOR', 'desc' => 'Junior under 19', 'quarterly' => '75', 'monthly' => '25', 'annual' => '', 'flat' => '' ],
            [ 'category' => 'HOUSE FEMALE', 'desc' => 'Access to members facilities', 'quarterly' => '75', 'monthly' => '25', 'annual' => '', 'flat' => '' ],
            [ 'category' => 'LIMITED', 'desc' => 'Max 18 rounds a year (Once-off)', 'quarterly' => '', 'monthly' => '', 'annual' => '250', 'flat' => '' ],
            [ 'category' => 'PENSIONER', 'desc' => 'Age 80+ & 10 years member', 'quarterly' => '30', 'monthly' => '10', 'annual' => '', 'flat' => '' ],
            [ 'category' => 'LOCAL PRO', 'desc' => 'Must have professional license', 'quarterly' => '30', 'monthly' => '10', 'annual' => '', 'flat' => '' ],
            [ 'category' => 'ABSENTEE', 'desc' => 'Absent > 2mths, medical or out of country', 'quarterly' => '30', 'monthly' => '10', 'annual' => '', 'flat' => '' ],
        ],
        'allRates' => [
            [ 'category' => 'HNA', 'desc' => 'Annual HNA Subscription (Handicap)', 'quarterly' => '', 'monthly' => '', 'annual' => '', 'flat' => '20' ],
            [ 'category' => 'ZGA', 'desc' => 'Annual Golf Union subscription', 'quarterly' => '', 'monthly' => '', 'annual' => '', 'flat' => '40' ],
            [ 'category' => 'HLPGU', 'desc' => 'Annual Golf Union subscription (Ladies)', 'quarterly' => '', 'monthly' => '', 'annual' => '', 'flat' => 'TBA' ],
            [ 'category' => 'Locker', 'desc' => 'Locker in changing rooms', 'quarterly' => '', 'monthly' => '', 'annual' => '', 'flat' => '20' ],
        ],
        'cta' => [
            'title' => "Elevate Your Game. \n Join the Legacy.",
            'description' => "Start your journey with Zimbabwe's most prestigious golfing community today.",
            'buttonText' => 'JOIN NOW',
            'buttonUrl' => '/membership',
            'backgroundImage' => '/wp-content/uploads/2026/02/20251123_115906-scaled.jpg'
        ]
    ];
}

function wingate_get_rates_settings() {
    $settings = get_option('wingate_rates_settings', []);
    $defaults = wingate_get_rates_defaults();
    
    // Merge hero, intro, and cta, but for arrays we want the saved ones to override, or fallback to defaults
    $merged = wp_parse_args($settings, $defaults);
    
    foreach (['menRates', 'ladiesRates', 'allRates'] as $array_key) {
        if (!isset($settings[$array_key]) || !is_array($settings[$array_key])) {
            $merged[$array_key] = $defaults[$array_key];
        } else {
            // Because they might save an empty array, only override if isset
            $merged[$array_key] = $settings[$array_key];
        }
    }

    return new WP_REST_Response($merged, 200);
}

function wingate_update_rates_settings($request) {
    $params = wingate_sanitize_settings_payload( $request->get_json_params() );
    update_option('wingate_rates_settings', $params);
    return new WP_REST_Response(['success' => true], 200);
}

// --- Membership Settings ---

function wingate_get_membership_defaults() {
    return [
        'hero' => [
            'title' => 'Join the Legacy',
            'subtitle' => 'Join our 18-hole, tree-lined course in Pomona, Harare, with membership options for full, country, senior, limited-round, ladies, and student/junior players.',
            'backgroundImage' => '/wp-content/uploads/2026/02/20260110_082734-scaled.jpg'
        ],
        'tiersIntro' => [
            'kicker' => 'Options',
            'title' => 'Membership Tiers',
        ],
        'tiers' => [
            [ 'name' => 'Full Membership', 'price' => '$1,200/yr', 'features' => 'Unlimited Golf, Voting Rights, Reciprocal Rates, Club Storage' ],
            [ 'name' => 'Country Member', 'price' => '$650/yr', 'features' => 'Reside >50km away, 12 Rounds/Year, Affiliation Fees included' ],
            [ 'name' => 'Student / Junior', 'price' => '$350/yr', 'features' => 'Under 25s, Full Access, Coaching Discounts' ],
            [ 'name' => 'Senior (70+)', 'price' => '$800/yr', 'features' => 'Weekday Priority, Cart Discounts, Social Events' ]
        ],
        'cta' => [
            'title' => 'Ready to Apply?',
            'description' => 'Download the application form manually if you prefer the traditional route.',
            'buttonText' => 'Download PDF Form',
            'buttonUrl' => '/docs/forms/Membership_Application_2026.pdf',
        ]
    ];
}

function wingate_get_membership_settings() {
    $settings = get_option('wingate_membership_settings', []);
    $defaults = wingate_get_membership_defaults();
    
    $merged = wp_parse_args($settings, $defaults);
    
    if (!isset($settings['tiers']) || !is_array($settings['tiers'])) {
        $merged['tiers'] = $defaults['tiers'];
    } else {
        $merged['tiers'] = $settings['tiers'];
    }

    return new WP_REST_Response($merged, 200);
}

function wingate_update_membership_settings($request) {
    $params = wingate_sanitize_settings_payload( $request->get_json_params() );
    update_option('wingate_membership_settings', $params);
    return new WP_REST_Response(['success' => true], 200);
}

// --- Contact Page Settings ---

function wingate_get_contact_page_settings_defaults() {
    return [
        'hero' => [
            'title' => 'CONTACT US',
            'backgroundImage' => '/wp-content/uploads/2026/01/605410094_1291221263032055_7504380241267586286_n-scaled.jpg',
        ],
        'club' => [
            'title' => 'Wingate Park Golf Club',
        ],
        'cards' => [
            'findUsTitle' => 'Find Us',
            'emailTitle' => 'Email Us',
            'phoneTitle' => 'Call Us',
            'socialTitle' => 'Follow Us',
        ],
        'location' => [
            'mapUrl' => 'https://maps.google.com/?q=Wingate+Park+Golf+Club',
            'lineOne' => 'Alpes Road',
            'lineTwo' => 'Harare, Zimbabwe',
            'mapSectionTitle' => 'Find Us',
            'mapEmbedUrl' => 'https://maps.google.com/maps?q=Wingate%20Park%20Golf%20Club%2C%20Harare&z=14&output=embed',
        ],
        'teamSection' => [
            'title' => 'Contact Team',
        ],
        'team' => [
            [
                'name' => 'Daryl Catterall',
                'title' => 'Club Manager',
                'phoneLabel' => '0714681041',
                'phoneHref' => 'tel:0714681041',
                'phoneType' => 'tel',
                'email' => 'daryl@wingate.co.zw',
            ],
            [
                'name' => 'D Kasiyandima',
                'title' => 'Office Assistant Manager',
                'phoneLabel' => '0719339670',
                'phoneHref' => 'tel:0719339670',
                'phoneType' => 'tel',
                'email' => 'functions@wingate.co.zw',
            ],
            [
                'name' => 'T Musiyakuvi',
                'title' => 'Office Assistant Manager',
                'phoneLabel' => '0772339670',
                'phoneHref' => 'tel:0772339670',
                'phoneType' => 'tel',
                'email' => 'reception@wingate.co.zw',
            ],
        ],
    ];
}

function wingate_get_contact_page_settings_data() {
    $settings = get_option('wingate_contact_page_settings', []);
    $defaults = wingate_get_contact_page_settings_defaults();
    $merged = wp_parse_args(is_array($settings) ? $settings : [], $defaults);

    if (!isset($settings['team']) || !is_array($settings['team'])) {
        $merged['team'] = $defaults['team'];
    }

    return $merged;
}

function wingate_get_contact_page_settings() {
    return new WP_REST_Response(wingate_get_contact_page_settings_data(), 200);
}

function wingate_update_contact_page_settings($request) {
    $params = wingate_sanitize_settings_payload( $request->get_json_params() );
    $defaults = wingate_get_contact_page_settings_defaults();
    $merged = wp_parse_args(is_array($params) ? $params : [], $defaults);

    if (!isset($params['team']) || !is_array($params['team'])) {
        $merged['team'] = $defaults['team'];
    } else {
        $merged['team'] = $params['team'];
    }

    update_option('wingate_contact_page_settings', $merged);
    return new WP_REST_Response(['success' => true], 200);
}

<?php
/**
 * Custom REST API Routes for Wingate
 */

add_action('rest_api_init', function () {
    register_rest_route('wingate/v1', '/generate-form', [
        'methods' => 'POST',
        'callback' => 'wingate_generate_membership_form',
        'permission_callback' => '__return_true', // Open endpoint, or implement nonce check if needed
    ]);
    register_rest_route('wingate/v1', '/form-download', [
        'methods' => 'GET',
        'callback' => 'wingate_download_membership_form',
        'permission_callback' => '__return_true',
    ]);

    // --- Events API ---
    register_rest_route('wingate/v1', '/events', [
        'methods' => 'GET',
        'callback' => 'wingate_get_events',
        'permission_callback' => '__return_true',
    ]);
    register_rest_route('wingate/v1', '/events/(?P<id>\d+)', [
        'methods' => 'GET',
        'callback' => 'wingate_get_event',
        'permission_callback' => '__return_true',
    ]);
    register_rest_route('wingate/v1', '/events', [
        'methods' => 'POST',
        'callback' => 'wingate_create_update_event',
        'permission_callback' => function () {
            return current_user_can('edit_posts');
        },
    ]);
});

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

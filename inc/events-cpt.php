<?php
/**
 * Custom Post Type: Wingate Events
 *
 * handling Custom Events such as Tournaments, Weddings, Banquets.
 */

add_action('init', 'wingate_register_event_cpt');
function wingate_register_event_cpt() {
    $labels = array(
        'name'                  => _x('Events', 'Post Type General Name', 'wingate'),
        'singular_name'         => _x('Event', 'Post Type Singular Name', 'wingate'),
        'menu_name'             => __('Events (SPA)', 'wingate'),
        'name_admin_bar'        => __('Event', 'wingate'),
        'archives'              => __('Event Archives', 'wingate'),
        'attributes'            => __('Event Attributes', 'wingate'),
        'parent_item_colon'     => __('Parent Event:', 'wingate'),
        'all_items'             => __('All Events', 'wingate'),
        'add_new_item'          => __('Add New Event', 'wingate'),
        'add_new'               => __('Add New', 'wingate'),
        'new_item'              => __('New Event', 'wingate'),
        'edit_item'             => __('Edit Event', 'wingate'),
        'update_item'           => __('Update Event', 'wingate'),
        'view_item'             => __('View Event', 'wingate'),
        'view_items'            => __('View Events', 'wingate'),
        'search_items'          => __('Search Event', 'wingate'),
        'not_found'             => __('Not found', 'wingate'),
        'not_found_in_trash'    => __('Not found in Trash', 'wingate'),
        'featured_image'        => __('Event Image', 'wingate'),
        'set_featured_image'    => __('Set event image', 'wingate'),
        'remove_featured_image' => __('Remove event image', 'wingate'),
        'use_featured_image'    => __('Use as event image', 'wingate'),
        'insert_into_item'      => __('Insert into event', 'wingate'),
        'uploaded_to_this_item' => __('Uploaded to this event', 'wingate'),
        'items_list'            => __('Events list', 'wingate'),
        'items_list_navigation' => __('Events list navigation', 'wingate'),
        'filter_items_list'     => __('Filter events list', 'wingate'),
    );
    $args = array(
        'label'                 => __('Event', 'wingate'),
        'description'           => __('Wingate Custom Events', 'wingate'),
        'labels'                => $labels,
        'supports'              => array('title', 'editor', 'thumbnail', 'custom-fields'),
        'hierarchical'          => false,
        'public'                => true,
        'show_ui'               => true,
        'show_in_menu'          => true, // We will also have a custom menu page for the SPA
        'menu_position'         => 5,
        'menu_icon'             => 'dashicons-calendar-alt',
        'show_in_admin_bar'     => true,
        'show_in_nav_menus'     => true,
        'can_export'            => true,
        'has_archive'           => 'events',
        'exclude_from_search'   => false,
        'publicly_queryable'    => true,
        'capability_type'       => 'post',
        'show_in_rest'          => true,
        'rewrite'               => array('slug' => 'event', 'with_front' => false),
    );
    register_post_type('wingate_event', $args);
}

// Meta setup can be done here or handled purely via REST API updates

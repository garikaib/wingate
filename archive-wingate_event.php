<?php
/**
 * The template for displaying archive pages for Wingate Events
 *
 * @package Wingate
 */

get_header();

// Reuse hero logic or create simpler one
$hero_image = home_url('/wp-content/uploads/2026/02/20260131_124600-scaled.jpg');
$type = get_query_var( 'wingate_event_type', '' );
if ( empty( $type ) && isset( $_GET['type'] ) ) {
	$type = sanitize_text_field( wp_unslash( $_GET['type'] ) );
}
$event_categories = function_exists( 'wingate_tools_get_event_categories' ) ? wingate_tools_get_event_categories() : array();
$category_map = array();
foreach ( $event_categories as $category ) {
	if ( isset( $category['slug'] ) ) {
		$category_map[ (string) $category['slug'] ] = $category;
	}
}
$allowed_types = array_keys( $category_map );
if ( ! in_array( $type, $allowed_types, true ) ) {
	$type = '';
}
$event_display = isset( $_GET['event_display'] ) ? sanitize_key( wp_unslash( $_GET['event_display'] ) ) : 'active';
if ( ! in_array( $event_display, array( 'active', 'past' ), true ) ) {
	$event_display = 'active';
}

$build_events_url = static function( $type_slug = '', $display = 'active' ) {
	$base = $type_slug ? home_url( '/events/' . rawurlencode( $type_slug ) . '/' ) : get_post_type_archive_link( 'wingate_event' );
	if ( 'past' === $display ) {
		$base = add_query_arg( 'event_display', 'past', $base );
	}
	return $base;
};

$event_filter_links = array(
	array(
		'label' => 'All Events',
		'url'   => $build_events_url( '', $event_display ),
		'key'   => '',
	),
);
foreach ( $event_categories as $category ) {
	if ( 'banquet' === (string) $category['slug'] ) {
		continue;
	}
	$event_filter_links[] = array(
		'label' => isset( $category['label'] ) ? (string) $category['label'] : ucfirst( (string) $category['slug'] ),
		'url'   => $build_events_url( (string) $category['slug'], $event_display ),
		'key'   => (string) $category['slug'],
	);
}
$display_links = array(
	array(
		'label' => 'Upcoming',
		'key'   => 'active',
		'url'   => $build_events_url( $type, 'active' ),
	),
	array(
		'label' => 'Past & Archived',
		'key'   => 'past',
		'url'   => $build_events_url( $type, 'past' ),
	),
);
?>

<div class="bg-white min-h-screen relative overflow-hidden">
    
    <!-- Hero Section -->
    <header class="relative h-[50vh] flex items-center justify-center bg-brand-blue overflow-hidden">
        <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('<?php echo esc_url($hero_image); ?>');"></div>
        <div class="absolute inset-0 bg-brand-blue/60"></div>
        <div class="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-t from-white to-transparent"></div>
        
	        <div class="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
	            <h1 class="text-5xl md:text-7xl font-cinzel text-white mb-6 tracking-tight drop-shadow-2xl leading-none">
	                <?php 
	                $title_suffix = $type && isset( $category_map[ $type ]['label'] ) ? (string) $category_map[ $type ]['label'] : 'Events';
	                ?>
	                <?php echo 'past' === $event_display ? 'Past' : 'Upcoming'; ?> <span class="text-brand-yellow"><?php echo esc_html($title_suffix); ?></span>
	            </h1>
	            <div class="w-24 h-1 bg-brand-yellow/50"></div>
	        </div>
	    </header>

	    <main class="container mx-auto px-4 py-16 md:py-20 relative z-20 max-w-6xl">
	        <nav class="mb-6 flex flex-wrap items-center justify-center gap-3" aria-label="Event display filters">
	            <?php foreach ( $display_links as $display_link ) :
	                $is_active = $event_display === $display_link['key'];
	            ?>
	                <a
	                    href="<?php echo esc_url( $display_link['url'] ); ?>"
	                    class="inline-flex items-center rounded-full border px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.18em] transition-all duration-300 no-underline hover:no-underline focus:no-underline <?php echo $is_active ? 'bg-brand-yellow border-brand-yellow !text-brand-blue shadow-md' : 'bg-white border-brand-blue/20 text-brand-blue hover:bg-brand-blue hover:border-brand-blue hover:!text-white'; ?>"
	                >
	                    <?php echo esc_html( $display_link['label'] ); ?>
	                </a>
	            <?php endforeach; ?>
	        </nav>
	        <nav class="mb-10 md:mb-12 flex flex-wrap items-center justify-center gap-3" aria-label="Event type filters">
	            <?php foreach ( $event_filter_links as $filter_link ) : 
	                $is_active = $type === $filter_link['key'] || ( '' === $type && '' === $filter_link['key'] );
	            ?>
	                <a
	                    href="<?php echo esc_url( $filter_link['url'] ); ?>"
	                    class="inline-flex items-center rounded-sm border px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.18em] transition-all duration-300 no-underline hover:no-underline focus:no-underline <?php echo $is_active ? 'bg-brand-blue border-brand-blue !text-white shadow-md' : 'bg-white border-brand-blue/20 text-brand-blue hover:bg-brand-yellow hover:border-brand-yellow hover:!text-brand-blue'; ?>"
	                >
	                    <?php echo esc_html( $filter_link['label'] ); ?>
	                </a>
	            <?php endforeach; ?>
	        </nav>
	        
	        <?php if ( have_posts() ) : 
            // Group events by Month
            $events_by_month = [];
            while ( have_posts() ) {
                the_post();
                $event_date = get_post_meta(get_the_ID(), 'event_date', true);
                if (!$event_date) continue; // Skip events without dates
                
                $month_year = date('F Y', strtotime($event_date));
                if (!isset($events_by_month[$month_year])) {
                    $events_by_month[$month_year] = [];
                }
                $events_by_month[$month_year][] = get_post();
            }
            
	            foreach ($events_by_month as $month => $month_events) :
	        ?>
	            <div class="mb-16" id="<?php echo esc_attr(sanitize_title($month)); ?>">
	                <div class="mb-8">
	                    <h2 class="text-3xl font-cinzel text-brand-blue font-bold sticky top-0 bg-white/95 backdrop-blur py-2 px-2 md:px-0 z-10 w-full border-b border-brand-yellow/30">
	                        <?php echo esc_html($month); ?>
	                    </h2>
	                </div>

	                <div class="grid gap-6">
                    <?php foreach ($month_events as $post) : setup_postdata($post); 
                        $event_date = get_post_meta($post->ID, 'event_date', true);
                        $event_type = get_post_meta($post->ID, 'event_type', true);
                        $event_end_date = function_exists( 'wingate_tools_get_event_end_date' ) ? wingate_tools_get_event_end_date( $post->ID ) : $event_date;
                        $event_lifecycle = function_exists( 'wingate_tools_get_event_lifecycle' ) ? wingate_tools_get_event_lifecycle( $post->ID ) : 'upcoming';
                        $event_visibility = function_exists( 'wingate_tools_get_event_effective_visibility' ) ? wingate_tools_get_event_effective_visibility( $post->ID ) : 'public';
                        $event_type_label = isset( $category_map[ $event_type ]['label'] ) ? (string) $category_map[ $event_type ]['label'] : ( $event_type ?: 'Event' );
                        $day = date('d', strtotime($event_date));
                        $weekday = date('l', strtotime($event_date));
                        $event_window = $event_date ? date( 'F j, Y', strtotime( $event_date ) ) : 'Date TBD';
                        if ( $event_date && $event_end_date && $event_end_date !== $event_date ) {
                            $event_window = date( 'F j, Y', strtotime( $event_date ) ) . ' to ' . date( 'F j, Y', strtotime( $event_end_date ) );
                        }
                    ?>
	                        <article id="event-<?php the_ID(); ?>" class="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-brand-yellow overflow-hidden flex flex-col md:grid md:grid-cols-[120px_minmax(0,1fr)_180px] animate-on-scroll">
	                            
	                            <!-- Date Badge (Left) -->
	                            <div class="bg-brand-gray/30 p-6 flex flex-col items-center justify-center min-w-[120px] text-brand-blue border-r border-gray-100 group-hover:bg-brand-yellow/10 transition-colors duration-300">
                                <span class="text-xs font-bold uppercase tracking-widest mb-1"><?php echo esc_html($weekday); ?></span>
                                <span class="text-4xl font-cinzel font-bold leading-none"><?php echo esc_html($day); ?></span>
                            </div>

                            <!-- Content -->
	                            <div class="p-6 flex-grow flex flex-col justify-center text-center items-center">
	                                <div class="mb-2 flex flex-wrap items-center justify-center gap-2">
	                                    <span class="inline-block px-2 py-1 bg-brand-blue/5 text-brand-blue text-[10px] font-bold uppercase tracking-wider rounded group-hover:bg-brand-yellow group-hover:text-brand-blue transition-colors duration-300">
	                                        <?php echo esc_html($event_type_label); ?>
	                                    </span>
	                                    <span class="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-[10px] font-bold uppercase tracking-wider rounded">
	                                        <?php echo esc_html( ucfirst( $event_lifecycle ) ); ?>
	                                    </span>
	                                    <?php if ( 'archived' === $event_visibility ) : ?>
	                                        <span class="inline-block px-2 py-1 bg-amber-100 text-amber-700 text-[10px] font-bold uppercase tracking-wider rounded">
	                                            Archived
	                                        </span>
	                                    <?php endif; ?>
	                                </div>
	                                <h3 class="text-xl font-cinzel text-brand-blue font-bold mb-2 group-hover:text-brand-yellow transition-colors text-center">
	                                    <a href="<?php the_permalink(); ?>" class="no-underline hover:no-underline">
	                                        <?php the_title(); ?>
	                                    </a>
	                                </h3>
	                                <div class="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-brand-blue/60">
	                                    <?php echo esc_html( $event_window ); ?>
	                                </div>
	                                <div class="text-gray-600 text-sm font-opensans line-clamp-2 text-center">
	                                    <?php echo get_the_excerpt(); ?>
	                                </div>
	                            </div>
                            
                            <!-- Action (Right) -->
	                            <div class="p-6 flex items-center justify-center md:border-l border-gray-100 bg-gray-50/50">
	                                <a href="<?php the_permalink(); ?>" class="inline-block rounded-sm bg-brand-blue px-8 py-3 !text-white font-cinzel font-bold uppercase tracking-widest hover:bg-brand-yellow hover:!text-brand-blue transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 whitespace-nowrap !no-underline">
	                                    Details
	                                </a>
	                            </div>

                        </article>
                    <?php endforeach; wp_reset_postdata(); ?>
                </div>
            </div>
        <?php endforeach; ?>

            <div class="mt-12 text-center">
                <?php
                the_posts_pagination( array(
                    'mid_size'  => 2,
                    'prev_text' => __( '&larr; Previous', 'wingate' ),
                    'next_text' => __( 'Next &rarr;', 'wingate' ),
                ) );
                ?>
            </div>

        <?php else : ?>
            <div class="text-center py-20">
                <h3 class="text-2xl font-cinzel text-brand-blue mb-4">No Events Found</h3>
                <p class="text-gray-600"><?php echo 'past' === $event_display ? 'No past or archived events are available in this view yet.' : 'Check back later for upcoming events.'; ?></p>
            </div>
        <?php endif; ?>

    </main>

</div>

<?php
get_footer();

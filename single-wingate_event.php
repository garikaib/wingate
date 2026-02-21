<?php
/**
 * The template for displaying single Wingate Event
 *
 * @package Wingate
 */

get_header();

while ( have_posts() ) : the_post();

    $event_date = get_post_meta(get_the_ID(), 'event_date', true);
    $event_type = get_post_meta(get_the_ID(), 'event_type', true);
    $thumb_url = get_the_post_thumbnail_url(get_the_ID(), 'full');
    
    // If no featured image, use a default hero
    $bg_image = $thumb_url ?: home_url('/wp-content/uploads/2026/02/20260131_124600-scaled.jpg');
?>

<div class="bg-white min-h-screen relative overflow-hidden">
    
    <!-- Hero Section -->
    <header class="relative h-[60vh] flex items-center justify-center bg-brand-blue overflow-hidden">
        <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('<?php echo esc_url($bg_image); ?>');"></div>
        <div class="absolute inset-0 bg-brand-blue/50"></div>
        <div class="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-t from-white to-transparent"></div>
        
        <div class="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center animate-fade-in-up">
            <span class="inline-block bg-brand-yellow text-brand-blue text-xs font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-widest shadow-lg">
                <?php echo esc_html($event_type ?: 'Event'); ?>
            </span>
            <h1 class="text-4xl md:text-6xl font-cinzel text-white mb-6 tracking-tight drop-shadow-2xl leading-none">
                <?php the_title(); ?>
            </h1>
            <div class="flex items-center gap-2 text-white/90 font-montserrat tracking-widest uppercase border border-white/30 px-6 py-3 rounded-sm backdrop-blur-sm">
                <span class="dashicons dashicons-calendar-alt"></span>
                <span><?php echo $event_date ? date('l, F j, Y', strtotime($event_date)) : 'Date TBD'; ?></span>
            </div>
        </div>
    </header>

    <main class="container mx-auto px-4 py-20 relative z-20 max-w-4xl">
        
        <!-- Custom Type Blocks -->
        <?php if ($event_type === 'wedding') : 
            $groom = get_post_meta(get_the_ID(), 'wedding_groom', true);
            $bride = get_post_meta(get_the_ID(), 'wedding_bride', true);
            $reception = get_post_meta(get_the_ID(), 'wedding_reception', true);
            $is_private = get_post_meta(get_the_ID(), 'is_private', true);

            if ($is_private) :
        ?>
            <div class="bg-brand-gray/30 p-8 rounded-lg border border-brand-blue/10 mb-12 text-center">
                <span class="dashicons dashicons-lock text-4xl text-brand-blue/50 mb-4"></span>
                <h3 class="font-cinzel text-2xl text-brand-blue mb-2">Private Event</h3>
                <p class="font-opensans text-gray-600">Details for this wedding are withheld for privacy.</p>
            </div>
        <?php else : ?>
            <div class="grid md:grid-cols-2 gap-8 mb-12">
                <div class="bg-brand-blue/5 p-8 rounded-lg text-center border border-brand-blue/10">
                    <span class="block text-xs font-bold uppercase tracking-widest text-brand-blue/60 mb-2">Celebrating</span>
                    <h3 class="font-cinzel text-3xl text-brand-blue mb-2">
                        <?php echo esc_html($groom ?: 'Groom'); ?> 
                        <span class="text-brand-yellow">&amp;</span> 
                        <?php echo esc_html($bride ?: 'Bride'); ?>
                    </h3>
                </div>
                <div class="bg-brand-blue/5 p-8 rounded-lg text-center border border-brand-blue/10 flex flex-col justify-center">
                    <span class="block text-xs font-bold uppercase tracking-widest text-brand-blue/60 mb-2">Reception</span>
                    <p class="font-cinzel text-xl text-brand-blue"><?php echo esc_html($reception ?: 'TBD'); ?></p>
                </div>
            </div>
        <?php endif; endif; ?>

	        <?php if ($event_type === 'tournament') : 
	            $format = get_post_meta(get_the_ID(), 'tournament_format', true);
	            $tee_off = get_post_meta(get_the_ID(), 'tee_off_time', true);
	            $entry_fee = get_post_meta(get_the_ID(), 'entry_fee', true);
	        ?>
	            <div class="grid md:grid-cols-3 gap-6 mb-12">
	                <div class="bg-white p-6 rounded shadow-sm border-t-4 border-brand-yellow text-center animate-on-scroll">
	                    <span class="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Format</span>
	                    <strong class="block font-cinzel text-brand-blue text-lg"><?php echo esc_html($format ?: 'TBD'); ?></strong>
	                </div>
	                <div class="bg-white p-6 rounded shadow-sm border-t-4 border-brand-yellow text-center animate-on-scroll" style="transition-delay: 100ms;">
                    <span class="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Tee Off</span>
                    <strong class="block font-cinzel text-brand-blue text-lg"><?php echo esc_html($tee_off ?: 'TBD'); ?></strong>
                </div>
                <div class="bg-white p-6 rounded shadow-sm border-t-4 border-brand-yellow text-center animate-on-scroll" style="transition-delay: 200ms;">
                    <span class="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Entry Fee</span>
	                    <strong class="block font-cinzel text-brand-blue text-lg"><?php echo esc_html($entry_fee ?: 'See Wingate Golf Club'); ?></strong>
	                </div>
	            </div>
	        <?php endif; ?>

	        <article class="prose prose-lg prose-headings:font-cinzel prose-headings:text-brand-blue prose-headings:text-center prose-p:font-opensans prose-p:text-gray-600 prose-p:text-center prose-li:font-opensans text-gray-600 mx-auto animate-on-scroll">
	            <?php the_content(); ?>
	        </article>

        <div class="mt-16 text-center border-t border-gray-100 pt-12 animate-on-scroll">
            <h3 class="font-cinzel text-2xl text-brand-blue mb-6">Interested in this event?</h3>
	            <a href="<?php echo esc_url(home_url('/contact-us/')); ?>" class="inline-block rounded-sm bg-brand-yellow px-10 py-4 !text-brand-blue font-cinzel font-bold uppercase tracking-widest !no-underline hover:!no-underline border border-brand-yellow transition-all duration-300 hover:bg-white hover:!text-brand-blue shadow-lg hover:shadow-xl hover:-translate-y-1">
	                Contact Us
	            </a>
            <div class="mt-8">
                <a href="<?php echo esc_url(get_post_type_archive_link('wingate_event')); ?>" class="text-gray-400 hover:text-brand-blue font-bold uppercase text-xs tracking-widest transition-colors font-montserrat">
                    &larr; Back to All Events
                </a>
            </div>
        </div>

    </main>

</div>

<?php endwhile; // End of the loop.

get_footer();

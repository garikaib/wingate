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
    $is_private = get_post_meta(get_the_ID(), 'is_private', true) === '1';
    $rsvp_enabled = get_post_meta(get_the_ID(), 'rsvp_enabled', true) === '1';
    $tournament_booking_mode = get_post_meta(get_the_ID(), 'tournament_booking_mode', true) ?: 'rsvp';
    $uses_chrono_booking = ( $event_type === 'tournament' && $tournament_booking_mode === 'chrono' );
    $booking_url = home_url('/booking/');
    $registry_pdf_url = get_post_meta(get_the_ID(), 'registry_pdf_url', true);
    $how_we_met = get_post_meta(get_the_ID(), 'how_we_met', true);
    $event_verse = get_post_meta(get_the_ID(), 'event_verse', true);
    $recurring_enabled = get_post_meta(get_the_ID(), 'recurring_enabled', true) === '1';
    $recurring_frequency = get_post_meta(get_the_ID(), 'recurring_frequency', true) ?: 'weekly';
    $recurring_interval = (int) get_post_meta(get_the_ID(), 'recurring_interval', true);
    if ($recurring_interval < 1) $recurring_interval = 1;
    $recurring_weekdays = get_post_meta(get_the_ID(), 'recurring_weekdays', true) ?: '1';
    $recurring_month_day = (int) get_post_meta(get_the_ID(), 'recurring_month_day', true);
    if ($recurring_month_day < 1 || $recurring_month_day > 31) $recurring_month_day = 1;
    $recurring_end_type = get_post_meta(get_the_ID(), 'recurring_end_type', true) ?: 'never';
    $recurring_until_date = get_post_meta(get_the_ID(), 'recurring_until_date', true) ?: '';
    $recurring_count = (int) get_post_meta(get_the_ID(), 'recurring_count', true);
    if ($recurring_count < 1) $recurring_count = 10;
    
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
            <span class="inline-block mb-3 rounded-full border border-white/30 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white/90 backdrop-blur-sm">
                <?php echo $is_private ? 'Private (Invite Only)' : 'Public Event'; ?>
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
            <?php if ( ! empty( $registry_pdf_url ) ) : ?>
                <div class="mb-8 text-center">
                    <a href="<?php echo esc_url( $registry_pdf_url ); ?>" target="_blank" rel="noopener noreferrer" class="inline-block rounded-sm border border-brand-blue/20 px-6 py-3 text-xs font-bold uppercase tracking-widest text-brand-blue !no-underline hover:!no-underline hover:bg-brand-yellow hover:border-brand-yellow transition-colors">
                        View Registry (PDF)
                    </a>
                </div>
            <?php endif; ?>
        <?php endif; endif; ?>

        <?php if ( ! empty( $how_we_met ) || ! empty( $event_verse ) ) : ?>
            <div class="mb-12 grid gap-5 md:grid-cols-2">
                <?php if ( ! empty( $how_we_met ) ) : ?>
                    <div class="rounded-xl border border-brand-blue/10 bg-brand-blue/[0.03] p-6">
                        <h3 class="font-cinzel text-xl text-brand-blue mb-2">How We Met</h3>
                        <p class="font-opensans text-gray-700 whitespace-pre-wrap"><?php echo esc_html( $how_we_met ); ?></p>
                    </div>
                <?php endif; ?>
                <?php if ( ! empty( $event_verse ) ) : ?>
                    <div class="rounded-xl border border-brand-blue/10 bg-brand-blue/[0.03] p-6">
                        <h3 class="font-cinzel text-xl text-brand-blue mb-2">Verse / Note</h3>
                        <p class="font-opensans text-gray-700 whitespace-pre-wrap"><?php echo esc_html( $event_verse ); ?></p>
                    </div>
                <?php endif; ?>
            </div>
        <?php endif; ?>

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

        <?php if ( $recurring_enabled ) : ?>
            <style>
                #wingate-recurring-calendar .wingate-cal-toolbar {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 10px;
                    margin-bottom: 14px;
                }
                #wingate-recurring-calendar .wingate-cal-nav {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 34px;
                    height: 34px;
                    border: 1px solid rgba(14,27,61,0.18);
                    border-radius: 8px;
                    background: #fff;
                    color: #0e1b3d;
                    font-weight: 700;
                    cursor: pointer;
                    transition: all .2s ease;
                }
                #wingate-recurring-calendar .wingate-cal-nav:hover {
                    background: #0e1b3d;
                    color: #fff;
                    border-color: #0e1b3d;
                }
                #wingate-recurring-calendar .wingate-cal-label {
                    font-size: 12px;
                    letter-spacing: 0.14em;
                    text-transform: uppercase;
                    font-weight: 700;
                    color: #0e1b3d;
                }
                #wingate-calendar-grid {
                    display: grid;
                    grid-template-columns: repeat(7, minmax(0, 1fr));
                    gap: 8px;
                    text-align: center;
                }
                .wingate-cal-weekday {
                    font-size: 10px;
                    letter-spacing: 0.14em;
                    text-transform: uppercase;
                    font-weight: 700;
                    color: #70809e;
                    padding: 4px 0;
                }
                .wingate-cal-day {
                    height: 38px;
                    border-radius: 9px;
                    border: 1px solid transparent;
                    background: #fff;
                    font-size: 14px;
                    color: #73819b;
                    cursor: default;
                    transition: all .2s ease;
                    position: relative;
                    font-weight: 600;
                }
                .wingate-cal-day.is-outside {
                    opacity: .52;
                }
                .wingate-cal-day.is-occurrence {
                    border-color: rgba(255,204,0,0.65);
                    background: rgba(255,204,0,0.28);
                    color: #0e1b3d;
                    font-weight: 700;
                    box-shadow: inset 0 0 0 1px rgba(255,204,0,0.28);
                }
                .wingate-cal-day.is-occurrence::after {
                    content: '';
                    position: absolute;
                    left: 50%;
                    bottom: 5px;
                    width: 5px;
                    height: 5px;
                    transform: translateX(-50%);
                    border-radius: 999px;
                    background: #0e1b3d;
                    opacity: .75;
                }
                .wingate-cal-day.is-occurrence:hover {
                    border-color: #ffcc00;
                    background: rgba(255,204,0,0.38);
                    transform: translateY(-1px);
                }
                .wingate-cal-day.is-clickable {
                    cursor: pointer;
                }
                .wingate-cal-day.is-selected {
                    border-color: #0e1b3d;
                    background: #0e1b3d;
                    color: #ffffff;
                    font-weight: 700;
                    box-shadow: 0 0 0 2px rgba(14,27,61,0.2), 0 10px 16px -12px rgba(14,27,61,0.6);
                    transform: translateY(-1px);
                }
                .wingate-cal-day.is-selected::after {
                    background: #ffcc00;
                    opacity: 1;
                }
                .wingate-cal-day[disabled] {
                    cursor: default;
                }
                .wingate-cal-day:focus-visible {
                    outline: 2px solid #0e1b3d;
                    outline-offset: 2px;
                }
                #wingate-calendar-selected {
                    margin-top: 14px;
                    font-size: 13px;
                    color: #0e1b3d;
                    font-weight: 700;
                    padding: 10px 12px;
                    border-radius: 10px;
                    background: rgba(14,27,61,0.06);
                    border: 1px solid rgba(14,27,61,0.1);
                }
                #wingate-rsvp-mode-wrap {
                    margin-top: 10px;
                }
                #wingate-rsvp-mode-indicator {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    border-radius: 999px;
                    border: 1px solid rgba(14,27,61,0.2);
                    padding: 6px 12px;
                    font-size: 10px;
                    font-weight: 800;
                    letter-spacing: .14em;
                    text-transform: uppercase;
                    background: #fff;
                    color: #0e1b3d;
                    transition: all .2s ease;
                }
                #wingate-rsvp-mode-indicator:hover {
                    border-color: #0e1b3d;
                    transform: translateY(-1px);
                }
                #wingate-rsvp-mode-indicator.is-multi {
                    background: #0e1b3d;
                    border-color: #0e1b3d;
                    color: #fff;
                }
                #wingate-rsvp-mode-indicator.is-multi .mode-dot {
                    background: #ffcc00;
                }
                #wingate-rsvp-mode-indicator .mode-dot {
                    width: 7px;
                    height: 7px;
                    border-radius: 999px;
                    background: #0e1b3d;
                }
                #wingate-calendar-legend {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    margin-top: 10px;
                    margin-bottom: 8px;
                    font-size: 11px;
                    letter-spacing: .08em;
                    text-transform: uppercase;
                    color: #70809e;
                    font-weight: 700;
                }
                #wingate-calendar-legend .legend-dot {
                    width: 9px;
                    height: 9px;
                    border-radius: 999px;
                    display: inline-block;
                    margin-right: 6px;
                    vertical-align: middle;
                }
                #wingate-calendar-legend .legend-occurrence {
                    background: #ffcc00;
                    border: 1px solid #ffcc00;
                }
                #wingate-calendar-legend .legend-selected {
                    background: #0e1b3d;
                    border: 1px solid #0e1b3d;
                }
                #wingate-multiday-modal {
                    position: fixed;
                    inset: 0;
                    z-index: 1000;
                    display: none;
                    align-items: center;
                    justify-content: center;
                    padding: 16px;
                    background: rgba(14, 27, 61, 0.6);
                    backdrop-filter: blur(2px);
                }
                #wingate-multiday-modal.is-open {
                    display: flex;
                }
                #wingate-multiday-modal .wingate-multiday-card {
                    width: min(520px, 100%);
                    border-radius: 16px;
                    border: 1px solid rgba(14,27,61,0.14);
                    background: #ffffff;
                    box-shadow: 0 24px 60px -32px rgba(14,27,61,0.6);
                    padding: 22px 22px 18px;
                }
                #wingate-multiday-modal .wingate-multiday-badge {
                    display: inline-block;
                    margin-bottom: 10px;
                    padding: 6px 10px;
                    border-radius: 999px;
                    background: rgba(255,204,0,0.18);
                    color: #0e1b3d;
                    font-size: 10px;
                    font-weight: 800;
                    letter-spacing: .14em;
                    text-transform: uppercase;
                }
                #wingate-multiday-modal .wingate-multiday-title {
                    margin: 0 0 8px;
                    color: #0e1b3d;
                    font-size: 24px;
                    line-height: 1.2;
                    font-family: "Cinzel", serif;
                }
                #wingate-multiday-modal .wingate-multiday-copy {
                    margin: 0 0 18px;
                    color: #53627d;
                    font-size: 14px;
                    line-height: 1.5;
                }
                #wingate-multiday-modal .wingate-multiday-actions {
                    display: flex;
                    justify-content: flex-end;
                    gap: 10px;
                }
                #wingate-multiday-modal .wingate-btn {
                    border-radius: 10px;
                    border: 1px solid transparent;
                    padding: 10px 14px;
                    font-size: 11px;
                    font-weight: 800;
                    letter-spacing: .12em;
                    text-transform: uppercase;
                    transition: all .2s ease;
                }
                #wingate-multiday-modal .wingate-btn-cancel {
                    border-color: rgba(14,27,61,0.14);
                    background: #fff;
                    color: #0e1b3d;
                }
                #wingate-multiday-modal .wingate-btn-cancel:hover {
                    border-color: rgba(14,27,61,0.3);
                    background: rgba(14,27,61,0.04);
                }
                #wingate-multiday-modal .wingate-btn-confirm {
                    border-color: #0e1b3d;
                    background: #0e1b3d;
                    color: #fff;
                }
                #wingate-multiday-modal .wingate-btn-confirm:hover {
                    border-color: #ffcc00;
                    background: #ffcc00;
                    color: #0e1b3d;
                }
            </style>
            <section class="mt-12 rounded-2xl border border-brand-blue/10 bg-brand-blue/[0.03] p-6" id="wingate-recurring-calendar">
                <div class="mb-4 flex items-center justify-between gap-3">
                    <h3 class="font-cinzel text-2xl text-brand-blue">Upcoming Dates</h3>
                    <span class="text-[10px] font-bold uppercase tracking-widest text-brand-blue/60">
                        Recurring <?php echo esc_html( ucfirst( $recurring_frequency ) ); ?>
                    </span>
                </div>
                <p class="text-sm text-gray-600 mb-4">
                    Upcoming occurrences are highlighted. <?php echo ( $rsvp_enabled && ! $uses_chrono_booking ) ? 'Click date(s) to include them in RSVP.' : 'Direct booking is enabled for this event.'; ?>
                </p>
                <div class="wingate-cal-toolbar">
                    <button type="button" id="wingate-calendar-prev" class="wingate-cal-nav" aria-label="Previous month">&larr;</button>
                    <div id="wingate-calendar-month-label" class="wingate-cal-label"></div>
                    <button type="button" id="wingate-calendar-next" class="wingate-cal-nav" aria-label="Next month">&rarr;</button>
                </div>
                <div id="wingate-calendar-legend">
                    <span><span class="legend-dot legend-occurrence"></span>Occurrence</span>
                    <span><span class="legend-dot legend-selected"></span>Selected</span>
                </div>
                <div id="wingate-calendar-grid" class="grid grid-cols-7 gap-2 text-center text-sm"></div>
                <div id="wingate-calendar-selected" class="mt-4 text-sm text-brand-blue font-semibold"></div>
                <?php if ( $rsvp_enabled && ! $uses_chrono_booking ) : ?>
                    <div id="wingate-rsvp-mode-wrap">
                        <button type="button" id="wingate-rsvp-mode-indicator">
                            <span class="mode-dot"></span>
                            <span id="wingate-rsvp-mode-label">Single Day</span>
                        </button>
                    </div>
                <?php endif; ?>
            </section>
            <div id="wingate-multiday-modal" aria-hidden="true">
                <div class="wingate-multiday-card" role="dialog" aria-modal="true" aria-labelledby="wingate-multiday-title">
                    <span class="wingate-multiday-badge">RSVP Options</span>
                    <h4 id="wingate-multiday-title" class="wingate-multiday-title">RSVP for multiple dates?</h4>
                    <p class="wingate-multiday-copy">You already selected one date. Enable multi-day RSVP to include more upcoming dates for this event.</p>
                    <div class="wingate-multiday-actions">
                        <button type="button" class="wingate-btn wingate-btn-cancel" id="wingate-multiday-cancel">Keep Single Day</button>
                        <button type="button" class="wingate-btn wingate-btn-confirm" id="wingate-multiday-confirm">Enable Multi-Day</button>
                    </div>
                </div>
            </div>
        <?php endif; ?>

        <div class="mt-16 text-center border-t border-gray-100 pt-12 animate-on-scroll">
            <h3 class="font-cinzel text-2xl text-brand-blue mb-6">Interested in this event?</h3>
            <?php if ( $rsvp_enabled && ! $uses_chrono_booking ) : ?>
                <button id="wingate-rsvp-trigger" class="inline-block rounded-sm bg-brand-yellow px-10 py-4 !text-brand-blue font-cinzel font-bold uppercase tracking-widest !no-underline border border-brand-yellow transition-all duration-300 hover:bg-white hover:!text-brand-blue shadow-lg hover:shadow-xl hover:-translate-y-1">
                    RSVP
                </button>
                <?php if ( $is_private ) : ?>
                    <p class="mt-3 text-xs font-bold uppercase tracking-widest text-red-600">Invite-only event: RSVP submissions are reviewed before confirmation.</p>
                <?php endif; ?>
            <?php elseif ( $uses_chrono_booking ) : ?>
                <div class="mx-auto max-w-2xl rounded-2xl border border-brand-blue/10 bg-brand-blue/[0.03] p-6 text-left">
                    <p class="text-xs font-bold uppercase tracking-widest text-brand-blue/60 mb-2">Tournament Booking</p>
                    <p class="text-sm text-gray-700 mb-4">This tournament is configured for tee-time booking. Please visit the booking page or use the Book A Tee Time popup.</p>
                    <div class="flex flex-wrap gap-3">
                        <a href="<?php echo esc_url( $booking_url ); ?>" class="inline-flex items-center justify-center rounded-sm bg-brand-blue px-5 py-3 text-xs font-bold uppercase tracking-widest text-white !no-underline hover:bg-brand-yellow hover:text-brand-blue transition-colors">
                            Visit Booking Page
                        </a>
                        <button type="button" id="wingate-open-tee-time" class="inline-flex items-center justify-center rounded-sm border border-brand-blue/20 px-5 py-3 text-xs font-bold uppercase tracking-widest text-brand-blue hover:bg-brand-blue hover:text-white transition-colors">
                            Book A Tee Time Popup
                        </button>
                    </div>
                </div>
            <?php else : ?>
                <a href="<?php echo esc_url(home_url('/contact-us/')); ?>" class="inline-block rounded-sm bg-brand-yellow px-10 py-4 !text-brand-blue font-cinzel font-bold uppercase tracking-widest !no-underline hover:!no-underline border border-brand-yellow transition-all duration-300 hover:bg-white hover:!text-brand-blue shadow-lg hover:shadow-xl hover:-translate-y-1">
                    Contact Us
                </a>
            <?php endif; ?>
            <div class="mt-8">
                <a href="<?php echo esc_url(get_post_type_archive_link('wingate_event')); ?>" class="text-gray-400 hover:text-brand-blue font-bold uppercase text-xs tracking-widest transition-colors font-montserrat">
                    &larr; Back to All Events
                </a>
            </div>
        </div>

    </main>

</div>

<?php if ( $rsvp_enabled && ! $uses_chrono_booking ) : ?>
    <div id="wingate-rsvp-modal" class="fixed inset-0 z-[999] hidden items-center justify-center bg-brand-blue/75 p-4">
        <div class="w-full max-w-xl rounded-2xl bg-white p-6 md:p-8 shadow-2xl border border-brand-blue/10">
            <div class="flex items-center justify-between mb-5">
                <h3 class="font-cinzel text-2xl text-brand-blue">RSVP</h3>
                <button id="wingate-rsvp-close" class="text-sm uppercase tracking-widest font-bold text-gray-500 hover:text-red-600">Close</button>
            </div>
            <?php if ( $is_private ) : ?>
                <div class="mb-4 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
                    This is an invite-only event. Please RSVP only if you received an invitation.
                </div>
            <?php endif; ?>
            <form id="wingate-rsvp-form" class="grid gap-4">
                <input type="text" name="name" required placeholder="Your name" class="rounded-xl border border-gray-200 px-4 py-3" />
                <div class="grid gap-4 md:grid-cols-2">
                    <input type="email" name="email" required placeholder="Email address" class="rounded-xl border border-gray-200 px-4 py-3" />
                    <input type="text" name="phone" placeholder="Phone (optional)" class="rounded-xl border border-gray-200 px-4 py-3" />
                </div>
                <div class="grid gap-4 md:grid-cols-2">
                    <input type="number" min="1" step="1" name="guests" value="1" class="rounded-xl border border-gray-200 px-4 py-3" />
                    <?php if ( $is_private ) : ?>
                        <label class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-600">
                            <input type="checkbox" name="invited_confirmed" value="1" />
                            I confirm I was invited
                        </label>
                    <?php endif; ?>
                </div>
                <textarea name="message" rows="4" placeholder="Message (dietary notes, guests, etc.)" class="rounded-xl border border-gray-200 px-4 py-3"></textarea>
                <input type="hidden" name="selected_dates" id="wingate-rsvp-selected-dates" value="" />
                <div id="wingate-rsvp-feedback" class="hidden rounded-lg px-3 py-2 text-sm"></div>
                <button type="submit" id="wingate-rsvp-submit" class="inline-flex items-center justify-center gap-2 rounded-sm bg-brand-blue px-5 py-3 text-xs font-bold uppercase tracking-widest text-white hover:bg-brand-yellow hover:text-brand-blue transition-colors disabled:opacity-70">
                    <span id="wingate-rsvp-submit-loader" class="hidden h-4 w-4 rounded-full border-2 border-white/40 border-t-white animate-spin"></span>
                    <span id="wingate-rsvp-submit-label">Submit RSVP</span>
                </button>
            </form>
            <div id="wingate-rsvp-success" class="hidden">
                <div class="rounded-xl border border-green-200 bg-green-50 p-4 mb-4">
                    <p class="text-sm font-bold uppercase tracking-widest text-green-700 mb-1">RSVP Sent</p>
                    <p id="wingate-rsvp-success-message" class="text-sm text-green-800"></p>
                </div>
                <div class="flex flex-wrap justify-end gap-2">
                    <button type="button" id="wingate-rsvp-success-close" class="inline-flex items-center justify-center rounded-sm border border-brand-blue/20 px-4 py-2 text-xs font-bold uppercase tracking-widest text-brand-blue hover:bg-brand-blue hover:text-white transition-colors">
                        Done
                    </button>
                    <button type="button" id="wingate-rsvp-again" class="inline-flex items-center justify-center rounded-sm bg-brand-yellow px-4 py-2 text-xs font-bold uppercase tracking-widest text-brand-blue hover:bg-brand-blue hover:text-white transition-colors">
                        RSVP Again
                    </button>
                </div>
            </div>
        </div>
    </div>
    <script>
    (function () {
        const modal = document.getElementById('wingate-rsvp-modal');
        const trigger = document.getElementById('wingate-rsvp-trigger');
        const closeBtn = document.getElementById('wingate-rsvp-close');
        const form = document.getElementById('wingate-rsvp-form');
        const feedback = document.getElementById('wingate-rsvp-feedback');
        const submitBtn = document.getElementById('wingate-rsvp-submit');
        const submitLoader = document.getElementById('wingate-rsvp-submit-loader');
        const submitLabel = document.getElementById('wingate-rsvp-submit-label');
        const successWrap = document.getElementById('wingate-rsvp-success');
        const successMessage = document.getElementById('wingate-rsvp-success-message');
        const successClose = document.getElementById('wingate-rsvp-success-close');
        const rsvpAgain = document.getElementById('wingate-rsvp-again');
        const selectedDatesField = document.getElementById('wingate-rsvp-selected-dates');
        const calendarGrid = document.getElementById('wingate-calendar-grid');
        const calendarSelected = document.getElementById('wingate-calendar-selected');
        const modeIndicator = document.getElementById('wingate-rsvp-mode-indicator');
        const modeLabel = document.getElementById('wingate-rsvp-mode-label');
        const calendarMonthLabel = document.getElementById('wingate-calendar-month-label');
        const calendarPrev = document.getElementById('wingate-calendar-prev');
        const calendarNext = document.getElementById('wingate-calendar-next');
        const multiDayModal = document.getElementById('wingate-multiday-modal');
        const multiDayCancel = document.getElementById('wingate-multiday-cancel');
        const multiDayConfirm = document.getElementById('wingate-multiday-confirm');
        if (!modal || !trigger || !closeBtn || !form || !feedback) return;
        const eventDate = '<?php echo esc_js( (string) $event_date ); ?>';
        const eventId = <?php echo (int) get_the_ID(); ?>;
        const recurringEnabled = <?php echo $recurring_enabled ? 'true' : 'false'; ?>;
        const recurringConfig = {
            frequency: '<?php echo esc_js( (string) $recurring_frequency ); ?>',
            interval: <?php echo (int) $recurring_interval; ?>,
            weekdays: '<?php echo esc_js( (string) $recurring_weekdays ); ?>',
            monthDay: <?php echo (int) $recurring_month_day; ?>,
            endType: '<?php echo esc_js( (string) $recurring_end_type ); ?>',
            untilDate: '<?php echo esc_js( (string) $recurring_until_date ); ?>',
            count: <?php echo (int) $recurring_count; ?>,
        };
        const selectedDates = new Set();
        let multiDayConfirmed = false;
        let lastSelectedDate = '';
        const rsvpEnabled = <?php echo $rsvp_enabled ? 'true' : 'false'; ?>;
        const cookieName = `wingate_rsvp_${eventId}`;

        const parseISO = (value) => {
            if (!/^\d{4}-\d{2}-\d{2}$/.test(value || '')) return null;
            const d = new Date(`${value}T00:00:00`);
            return Number.isNaN(d.getTime()) ? null : d;
        };
        let viewMonthDate = parseISO(eventDate) || new Date();
        const toISO = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
        const addDays = (d, n) => new Date(d.getFullYear(), d.getMonth(), d.getDate() + n);
        const setCookie = (name, value, days = 90) => {
            const expires = new Date(Date.now() + (days * 24 * 60 * 60 * 1000)).toUTCString();
            document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;
        };
        const getCookie = (name) => {
            const row = document.cookie.split('; ').find((part) => part.startsWith(`${name}=`));
            if (!row) return '';
            try {
                return decodeURIComponent(row.split('=').slice(1).join('='));
            } catch (e) {
                return '';
            }
        };
        const duplicatesAllowed = (dates) => recurringEnabled || (Array.isArray(dates) && dates.length > 1);

        const getOccurrences = () => {
            const start = parseISO(eventDate);
            if (!start) return [];
            if (!recurringEnabled) return [toISO(start)];

            const until = parseISO(recurringConfig.untilDate);
            const weekdays = String(recurringConfig.weekdays || '')
                .split(',')
                .map((v) => Number(v.trim()))
                .filter((v) => Number.isInteger(v) && v >= 0 && v <= 6);

            const out = [];
            let cursor = new Date(start);
            let guard = 0;
            while (guard < 1000) {
                guard += 1;
                if (recurringConfig.frequency === 'weekly') {
                    const startWeekStart = new Date(start);
                    startWeekStart.setDate(start.getDate() - start.getDay());
                    const cursorWeekStart = new Date(cursor);
                    cursorWeekStart.setDate(cursor.getDate() - cursor.getDay());
                    const weekDiff = Math.floor((cursorWeekStart - startWeekStart) / (7 * 24 * 60 * 60 * 1000));
                    const onInterval = weekDiff % Math.max(1, Number(recurringConfig.interval || 1)) === 0;
                    if (onInterval && weekdays.includes(cursor.getDay())) {
                        out.push(toISO(cursor));
                    }
                    cursor = addDays(cursor, 1);
                } else {
                    const day = Number(recurringConfig.monthDay || 1);
                    const candidate = new Date(cursor.getFullYear(), cursor.getMonth(), 1);
                    candidate.setDate(day);
                    if (candidate.getMonth() !== cursor.getMonth()) {
                        candidate.setDate(0);
                    }
                    if (candidate >= start) {
                        out.push(toISO(candidate));
                    }
                    cursor = new Date(cursor.getFullYear(), cursor.getMonth() + Number(recurringConfig.interval || 1), 1);
                }

                if (recurringConfig.endType === 'count' && out.length >= Number(recurringConfig.count || 10)) break;
                if (recurringConfig.endType === 'until' && until && cursor > until) break;
                if (out.length >= 120) break;
            }
            return Array.from(new Set(out)).sort();
        };

        const occurrenceDates = getOccurrences();
        const occurrenceSet = new Set(occurrenceDates);
        const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];
        const formatDisplayDate = (iso) => {
            const d = parseISO(iso);
            if (!d) return iso;
            return `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}/${d.getFullYear()}`;
        };

        const updateSelectedDatesUi = () => {
            const vals = Array.from(selectedDates).sort();
            if (selectedDatesField) selectedDatesField.value = vals.join(',');
            if (calendarSelected) {
                calendarSelected.textContent = vals.length
                    ? `Selected date${vals.length > 1 ? 's' : ''}: ${vals.map(formatDisplayDate).join(', ')}`
                    : '';
            }
        };
        const updateModeIndicator = () => {
            if (!modeIndicator || !modeLabel) return;
            const isMulti = multiDayConfirmed;
            modeLabel.textContent = isMulti ? 'Multiple Days' : 'Single Day';
            modeIndicator.classList.toggle('is-multi', isMulti);
        };
        const askMultiDayConfirmation = () => new Promise((resolve) => {
            if (!multiDayModal || !multiDayCancel || !multiDayConfirm) {
                resolve(false);
                return;
            }
            const cleanup = () => {
                multiDayModal.classList.remove('is-open');
                multiDayModal.setAttribute('aria-hidden', 'true');
                multiDayCancel.removeEventListener('click', onCancel);
                multiDayConfirm.removeEventListener('click', onConfirm);
                multiDayModal.removeEventListener('click', onBackdrop);
            };
            const onCancel = () => {
                cleanup();
                resolve(false);
            };
            const onConfirm = () => {
                cleanup();
                resolve(true);
            };
            const onBackdrop = (event) => {
                if (event.target === multiDayModal) {
                    onCancel();
                }
            };
            multiDayCancel.addEventListener('click', onCancel);
            multiDayConfirm.addEventListener('click', onConfirm);
            multiDayModal.addEventListener('click', onBackdrop);
            multiDayModal.classList.add('is-open');
            multiDayModal.setAttribute('aria-hidden', 'false');
        });

        const renderCalendar = () => {
            if (!calendarGrid || !occurrenceDates.length) return;
            calendarGrid.innerHTML = '';
            const start = new Date(viewMonthDate.getFullYear(), viewMonthDate.getMonth(), 1);
            const first = new Date(start);
            first.setDate(first.getDate() - first.getDay());
            if (calendarMonthLabel) {
                calendarMonthLabel.textContent = `${monthNames[start.getMonth()]} ${start.getFullYear()}`;
            }
            const labels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            labels.forEach((label) => {
                const el = document.createElement('div');
                el.className = 'wingate-cal-weekday';
                el.textContent = label;
                calendarGrid.appendChild(el);
            });

            for (let i = 0; i < 42; i += 1) {
                const d = addDays(first, i);
                const iso = toISO(d);
                const inMonth = d.getMonth() === start.getMonth();
                const isOccurrence = occurrenceSet.has(iso);
                const btn = document.createElement('button');
                btn.type = 'button';
                btn.className = 'wingate-cal-day';
                if (!inMonth) btn.classList.add('is-outside');
                if (isOccurrence) btn.classList.add('is-occurrence');
                if (selectedDates.has(iso)) btn.classList.add('is-selected');
                btn.textContent = String(d.getDate());
                if (isOccurrence && rsvpEnabled) {
                    btn.classList.add('is-clickable');
                    btn.addEventListener('click', async () => {
                        if (!selectedDates.has(iso) && selectedDates.size >= 1 && !multiDayConfirmed) {
                            const ok = await askMultiDayConfirmation();
                            if (!ok) {
                                multiDayConfirmed = false;
                                selectedDates.clear();
                                selectedDates.add(iso);
                                lastSelectedDate = iso;
                                renderCalendar();
                                updateSelectedDatesUi();
                                updateModeIndicator();
                                return;
                            }
                            multiDayConfirmed = true;
                            updateModeIndicator();
                        }
                        if (selectedDates.has(iso)) {
                            selectedDates.delete(iso);
                        } else {
                            selectedDates.add(iso);
                            lastSelectedDate = iso;
                        }
                        renderCalendar();
                        updateSelectedDatesUi();
                    });
                } else {
                    if (!isOccurrence) {
                        btn.disabled = true;
                    }
                }
                calendarGrid.appendChild(btn);
            }
            updateSelectedDatesUi();
        };

        if (occurrenceDates.length && occurrenceDates[0]) {
            selectedDates.add(occurrenceDates[0]);
            lastSelectedDate = occurrenceDates[0];
            const first = parseISO(occurrenceDates[0]);
            if (first) {
                viewMonthDate = new Date(first.getFullYear(), first.getMonth(), 1);
            }
        }
        if (modeIndicator) {
            modeIndicator.addEventListener('click', async () => {
                const ok = await askMultiDayConfirmation();
                if (ok) {
                    multiDayConfirmed = true;
                } else {
                    multiDayConfirmed = false;
                    const fallback = (lastSelectedDate && occurrenceSet.has(lastSelectedDate))
                        ? lastSelectedDate
                        : (Array.from(selectedDates).sort().pop() || occurrenceDates[0] || '');
                    selectedDates.clear();
                    if (fallback) {
                        selectedDates.add(fallback);
                        lastSelectedDate = fallback;
                    }
                }
                renderCalendar();
                updateSelectedDatesUi();
                updateModeIndicator();
            });
        }
        if (calendarPrev) {
            calendarPrev.addEventListener('click', () => {
                viewMonthDate = new Date(viewMonthDate.getFullYear(), viewMonthDate.getMonth() - 1, 1);
                renderCalendar();
            });
        }
        if (calendarNext) {
            calendarNext.addEventListener('click', () => {
                viewMonthDate = new Date(viewMonthDate.getFullYear(), viewMonthDate.getMonth() + 1, 1);
                renderCalendar();
            });
        }
        updateModeIndicator();
        renderCalendar();

        const showFeedback = (message, isError) => {
            feedback.textContent = message;
            feedback.classList.remove('hidden', 'bg-green-50', 'text-green-700', 'bg-red-50', 'text-red-700');
            feedback.classList.add(isError ? 'bg-red-50' : 'bg-green-50', isError ? 'text-red-700' : 'text-green-700');
        };
        const setSubmitting = (submitting) => {
            if (submitBtn) submitBtn.disabled = submitting;
            if (submitLoader) submitLoader.classList.toggle('hidden', !submitting);
            if (submitLabel) submitLabel.textContent = submitting ? 'Submitting...' : 'Submit RSVP';
            if (form) {
                const fields = form.querySelectorAll('input, textarea, select');
                fields.forEach((field) => {
                    field.disabled = submitting;
                });
            }
        };
        const showSuccess = (message) => {
            if (form) form.classList.add('hidden');
            if (successWrap) successWrap.classList.remove('hidden');
            if (successMessage) successMessage.textContent = message;
        };
        const showForm = () => {
            if (successWrap) successWrap.classList.add('hidden');
            if (form) form.classList.remove('hidden');
            feedback.classList.add('hidden');
        };

        const closeModal = () => {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        };
        const openModal = () => {
            showForm();
            const cookieEmail = (getCookie(cookieName) || '').toLowerCase();
            if (cookieEmail && !recurringEnabled) {
                showFeedback(`You have already RSVPed with ${cookieEmail}. Use RSVP Again if needed.`, true);
            }
            modal.classList.remove('hidden');
            modal.classList.add('flex');
        };

        trigger.addEventListener('click', openModal);
        closeBtn.addEventListener('click', closeModal);
        if (successClose) successClose.addEventListener('click', closeModal);
        if (rsvpAgain) {
            rsvpAgain.addEventListener('click', () => {
                showForm();
                form.reset();
                updateSelectedDatesUi();
            });
        }
        modal.addEventListener('click', function (event) {
            if (event.target === modal) closeModal();
        });

        form.addEventListener('submit', async function (event) {
            event.preventDefault();
            feedback.classList.add('hidden');

            const formData = new FormData(form);
            const payload = {
                name: String(formData.get('name') || '').trim(),
                email: String(formData.get('email') || '').trim(),
                phone: String(formData.get('phone') || '').trim(),
                guests: Number(formData.get('guests') || 1),
                message: String(formData.get('message') || '').trim(),
                selectedDates: String(formData.get('selected_dates') || '').split(',').map((d) => d.trim()).filter(Boolean),
            };
            const allowDupes = duplicatesAllowed(payload.selectedDates);
            setSubmitting(true);

            const isPrivate = <?php echo $is_private ? 'true' : 'false'; ?>;
            if (isPrivate && !formData.get('invited_confirmed')) {
                showFeedback('Please confirm you were invited before submitting RSVP.', true);
                setSubmitting(false);
                return;
            }

            const cookieEmail = (getCookie(cookieName) || '').toLowerCase();
            if (!allowDupes && cookieEmail && cookieEmail === payload.email.toLowerCase()) {
                showFeedback('You already submitted RSVP for this event. Submitting again will update your existing RSVP.', false);
            }

            try {
                const response = await fetch('<?php echo esc_url_raw( rest_url( 'wingate-tools/v1/events/' . get_the_ID() . '/rsvp' ) ); ?>', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload),
                });
                const data = await response.json();
                if (!response.ok) {
                    throw new Error(data && data.message ? data.message : 'Failed to submit RSVP.');
                }
                if (!allowDupes) {
                    setCookie(cookieName, payload.email.toLowerCase());
                }
                const bookedDays = Array.isArray(data?.bookedDays) ? data.bookedDays : payload.selectedDates;
                const baseMessage = String(data?.message || '').trim();
                const successText = bookedDays.length
                    ? `${baseMessage || 'Your RSVP was sent successfully.'} Booked day${bookedDays.length > 1 ? 's' : ''}: ${bookedDays.join(', ')}.`
                    : (baseMessage || 'Your RSVP was sent successfully.');
                showSuccess(successText);
            } catch (err) {
                showFeedback(err.message || 'Could not submit RSVP right now.', true);
            } finally {
                setSubmitting(false);
            }
        });
    })();
    </script>
<?php endif; ?>

<?php if ( $uses_chrono_booking ) : ?>
    <script>
    (function () {
        const btn = document.getElementById('wingate-open-tee-time');
        if (!btn) return;
        btn.addEventListener('click', function () {
            const selectors = ['.book-a-tee-time', '#book-a-tee-time', '[data-book-tee-time]'];
            let trigger = null;
            selectors.some((selector) => {
                trigger = document.querySelector(selector);
                return !!trigger;
            });
            if (trigger) {
                trigger.click();
                return;
            }
            window.location.href = '<?php echo esc_js( esc_url_raw( $booking_url ) ); ?>';
        });
    })();
    </script>
<?php endif; ?>

<?php endwhile; // End of the loop.

get_footer();

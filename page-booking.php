<?php
/**
 * Template Name: Booking Page
 *
 * @package Wingate
 */

$booking_settings = function_exists( 'wingate_get_booking_settings_data' )
	? wingate_get_booking_settings_data()
	: array();

$hero             = isset( $booking_settings['hero'] ) ? $booking_settings['hero'] : array();
$quick_info       = isset( $booking_settings['quickInfo'] ) ? $booking_settings['quickInfo'] : array();
$dress_code       = isset( $booking_settings['dressCode'] ) ? $booking_settings['dressCode'] : array();
$cart_hire        = isset( $booking_settings['cartHire'] ) ? $booking_settings['cartHire'] : array();
$cta              = isset( $booking_settings['cta'] ) ? $booking_settings['cta'] : array();

$hero_image       = ! empty( $hero['backgroundImage'] ) ? $hero['backgroundImage'] : home_url( '/wp-content/uploads/2026/02/20260131_124600-scaled.jpg' );
$booking_widget   = 'https://www.chronogolf.com/club/19667/widget';
$rates_url        = ! empty( $cta['url'] ) ? home_url( $cta['url'] ) : home_url( '/rates/' );
$contact_url      = ! empty( $quick_info[2]['url'] ) ? home_url( $quick_info[2]['url'] ) : home_url( '/contact-us/' );

get_header();
?>

<div class="bg-white min-h-screen relative overflow-hidden">
    
    <!-- Background element: Subtle floater -->
    <div class="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
        <div class="absolute top-1/4 right-0 w-96 h-96 bg-brand-yellow/5 rounded-full blur-[100px]"></div>
    </div>

    <!-- Hero Section: Matching Rates.jsx structure -->
    <header class="relative h-[65vh] md:h-[75vh] flex items-center justify-center bg-brand-blue overflow-hidden">
        <!-- Background Image -->
        <div 
            class="absolute inset-0 bg-cover bg-center"
            style="background-image: url('<?php echo esc_url( $hero_image ); ?>');"
        ></div>

        <!-- Premium Overlays -->
        <div class="absolute inset-0 bg-brand-blue/40"></div>
        <div class="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-t from-white to-transparent"></div>
        <div class="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/20 to-transparent"></div>

        <!-- Content -->
        <div class="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
                <div class="inline-block px-5 py-2 border border-brand-yellow/30 rounded-full mb-8 backdrop-blur-md bg-white/10">
                <span class="text-brand-yellow text-xs font-bold tracking-[0.3em] uppercase"><?php echo esc_html( isset( $hero['kicker'] ) ? $hero['kicker'] : 'Private Experience' ); ?></span>
            </div>
            
            <h1 class="text-5xl md:text-7xl lg:text-8xl font-cinzel text-white mb-6 tracking-tight drop-shadow-2xl leading-none">
                <?php echo esc_html( isset( $hero['title'] ) ? $hero['title'] : 'Book' ); ?> <span class="text-brand-yellow"><?php echo esc_html( isset( $hero['titleHighlight'] ) ? $hero['titleHighlight'] : 'Tee Time' ); ?></span>
            </h1>
            
            <div class="w-24 h-1 bg-brand-yellow/50 mb-8"></div>
            
            <p class="text-sm md:text-lg text-white/90 font-montserrat tracking-[0.2em] uppercase font-light max-w-2xl">
                <?php echo esc_html( isset( $hero['subtitle'] ) ? $hero['subtitle'] : "Secure your round at one of Harare's finest courses" ); ?>
            </p>
        </div>
    </header>

    <!-- Main Content -->
    <main class="container mx-auto px-4 -mt-20 relative z-20 pb-24">
        
        <!-- Quick Info Cards (Glassmorphism) -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 max-w-6xl mx-auto">
            <div class="bg-white/90 backdrop-blur-xl border border-white/40 shadow-xl rounded-xl p-6 text-center transform hover:-translate-y-1 transition-all duration-300">
                <p class="text-brand-blue/60 font-cinzel text-xs uppercase tracking-widest mb-2"><?php echo esc_html( isset( $quick_info[0]['label'] ) ? $quick_info[0]['label'] : 'Open Daily' ); ?></p>
                <p class="text-brand-blue font-cinzel text-xl font-bold"><?php echo esc_html( isset( $quick_info[0]['value'] ) ? $quick_info[0]['value'] : '7:00 AM - 6:00 PM' ); ?></p>
            </div>
            <div class="bg-white/90 backdrop-blur-xl border border-white/40 shadow-xl rounded-xl p-6 text-center transform hover:-translate-y-1 transition-all duration-300">
                <p class="text-brand-blue/60 font-cinzel text-xs uppercase tracking-widest mb-2"><?php echo esc_html( isset( $quick_info[1]['label'] ) ? $quick_info[1]['label'] : 'Course Type' ); ?></p>
                <p class="text-brand-blue font-cinzel text-xl font-bold"><?php echo esc_html( isset( $quick_info[1]['value'] ) ? $quick_info[1]['value'] : 'Championship 18' ); ?></p>
            </div>
            <div class="bg-white/90 backdrop-blur-xl border border-white/40 shadow-xl rounded-xl p-6 text-center transform hover:-translate-y-1 transition-all duration-300">
                <p class="text-brand-blue/60 font-cinzel text-xs uppercase tracking-widest mb-2"><?php echo esc_html( isset( $quick_info[2]['label'] ) ? $quick_info[2]['label'] : 'Questions?' ); ?></p>
                <a href="<?php echo esc_url( $contact_url ); ?>" class="text-brand-blue font-cinzel text-xl font-bold hover:text-brand-yellow transition-colors !no-underline hover:!no-underline" style="text-decoration: none !important;"><?php echo esc_html( isset( $quick_info[2]['value'] ) ? $quick_info[2]['value'] : 'Contact Us' ); ?></a>
            </div>
        </div>

        <!-- Chronogolf Widget Container -->
        <div class="bg-white rounded-sm shadow-2xl overflow-hidden border border-gray-100 mb-20">
            <iframe
                src="<?php echo esc_url( $booking_widget ); ?>"
                width="100%"
                height="1200"
                frameborder="0"
                allowfullscreen
                class="w-full"
                style="min-height: 800px;"
                title="Wingate Tee Time Booking"
            ></iframe>
        </div>

        <!-- Info Grid (Dress Code & Carts) -->
        <div class="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            
            <!-- Dress Code Card -->
            <div class="bg-brand-blue/5 rounded-2xl p-8 md:p-10 border border-brand-blue/10">
                <div class="flex items-center gap-4 mb-6">
                    <div class="w-12 h-12 rounded-full bg-brand-blue flex items-center justify-center text-brand-yellow font-bold font-cinzel text-xl"><?php echo esc_html( isset( $dress_code['badge'] ) ? $dress_code['badge'] : 'D' ); ?></div>
                    <h3 class="font-cinzel text-2xl text-brand-blue"><?php echo esc_html( isset( $dress_code['title'] ) ? $dress_code['title'] : 'Dress Code' ); ?></h3>
                </div>
                <ul class="space-y-4 font-montserrat text-slate-700">
					<?php
					$dress_items = isset( $dress_code['items'] ) && is_array( $dress_code['items'] ) ? $dress_code['items'] : array(
						'Collared shirts required (tucked in).',
						'Tailored shorts only (no rugby/denim).',
						'Short white or "hidden" socks.',
					);
					foreach ( $dress_items as $item ) :
						?>
						<li class="flex items-center gap-3">
							<span class="w-1.5 h-1.5 rounded-full bg-brand-yellow"></span>
							<span><?php echo esc_html( $item ); ?></span>
						</li>
					<?php endforeach; ?>
                </ul>
            </div>

            <!-- Cart Hire Card -->
            <div class="bg-brand-blue/5 rounded-2xl p-8 md:p-10 border border-brand-blue/10 relative overflow-hidden group">
                <div class="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/10 rounded-full -mr-10 -mt-10 blur-2xl transition-all duration-500 group-hover:bg-brand-yellow/20"></div>
                
                <div class="flex items-center gap-4 mb-6 relative z-10">
                    <div class="w-12 h-12 rounded-full bg-brand-blue flex items-center justify-center text-brand-yellow font-bold font-cinzel text-xl"><?php echo esc_html( isset( $cart_hire['badge'] ) ? $cart_hire['badge'] : 'C' ); ?></div>
                    <h3 class="font-cinzel text-2xl text-brand-blue"><?php echo esc_html( isset( $cart_hire['title'] ) ? $cart_hire['title'] : 'Cart Hire' ); ?></h3>
                </div>
                
                <p class="font-montserrat text-slate-700 mb-6 relative z-10">
                    <?php echo esc_html( isset( $cart_hire['description'] ) ? $cart_hire['description'] : 'Carts available first-come, first-served. Recommended to reserve via Pro Shop.' ); ?>
                </p>
                
                <div class="bg-white rounded-lg p-4 border border-brand-blue/10 inline-block shadow-sm relative z-10">
                    <span class="font-montserrat font-bold text-brand-blue block text-sm uppercase tracking-wider mb-1"><?php echo esc_html( isset( $cart_hire['label'] ) ? $cart_hire['label'] : '18 Holes' ); ?></span>
                    <span class="font-cinzel text-lg text-slate-800"><?php echo esc_html( isset( $cart_hire['ratesText'] ) ? $cart_hire['ratesText'] : 'Standard $35 | High-Rider $40' ); ?></span>
                </div>
            </div>

        </div>

        <!-- CTA Section -->
        <div class="mt-20 mb-24 text-center">
             <a href="<?php echo esc_url( $rates_url ); ?>" class="inline-block rounded-sm bg-brand-yellow px-10 py-4 text-brand-blue font-cinzel font-bold uppercase tracking-widest !no-underline hover:!no-underline border border-brand-yellow transition-all duration-300 hover:bg-white hover:text-brand-blue shadow-lg hover:shadow-xl hover:-translate-y-1" style="text-decoration: none !important;">
                <?php echo esc_html( isset( $cta['text'] ) ? $cta['text'] : 'View All Rates' ); ?>
            </a>
        </div>

    </main>
</div>

<?php
get_footer();

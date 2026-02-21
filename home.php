<?php
/**
 * The template for displaying the blog index (News)
 *
 * @package Wingate
 */

get_header();

// Hero Image for News - can be static or dynamic
$hero_image = home_url('/wp-content/uploads/2026/02/20260131_124600-scaled.jpg'); 
?>

<div class="bg-white min-h-screen relative overflow-hidden">
    <div class="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div class="absolute top-20 right-0 h-96 w-96 rounded-full bg-brand-yellow/10 blur-[100px]"></div>
        <div class="absolute bottom-10 -left-20 h-80 w-80 rounded-full bg-brand-blue/10 blur-[90px]"></div>
    </div>
    
    <!-- Hero Section -->
    <header class="relative h-[48vh] min-h-[360px] flex items-center justify-center bg-brand-blue overflow-hidden">
        <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('<?php echo esc_url($hero_image); ?>');"></div>
        <div class="absolute inset-0 bg-brand-blue/55"></div>
        <div class="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/35 to-transparent"></div>
        <div class="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-white to-transparent"></div>
        
        <div class="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
            <h1 class="text-4xl md:text-6xl font-cinzel text-white mb-4 tracking-tight drop-shadow-2xl leading-none">
                Club <span class="text-brand-yellow">News</span>
            </h1>
            <div class="w-20 h-1 bg-brand-yellow/50"></div>
            <p class="text-white/80 font-montserrat mt-4 text-sm uppercase tracking-widest">Updates &amp; Announcements</p>
        </div>
    </header>

    <main class="container mx-auto px-4 py-16 md:py-20 relative z-20 max-w-6xl">
        
        <?php if ( have_posts() ) : ?>
            <?php
            $featured_post = null;
            $grid_posts = array();
            while ( have_posts() ) :
                the_post();
                if ( null === $featured_post ) {
                    $featured_post = get_post();
                } else {
                    $grid_posts[] = get_post();
                }
            endwhile;
            ?>

            <?php if ( $featured_post ) : ?>
                <?php
                $featured_id = $featured_post->ID;
                $featured_thumb = get_the_post_thumbnail_url( $featured_id, 'full' );
                if ( ! $featured_thumb ) {
                    $featured_thumb = home_url('/wp-content/uploads/2026/02/20260131_124600-scaled.jpg');
                }
                $featured_categories = get_the_category( $featured_id );
                $featured_cat = ! empty( $featured_categories ) ? $featured_categories[0]->name : 'News';
                ?>
                <article class="group relative mb-14 overflow-hidden rounded-3xl bg-brand-blue shadow-[0_24px_55px_rgba(14,27,61,0.28)]">
                    <div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style="background-image: url('<?php echo esc_url( $featured_thumb ); ?>');"></div>
                    <div class="absolute inset-0 bg-gradient-to-t from-brand-blue/95 via-brand-blue/80 to-brand-blue/30"></div>
                    <div class="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-brand-yellow/25 blur-3xl"></div>
                    <div class="relative z-10 p-8 md:p-12 lg:p-14 min-h-[460px] flex flex-col justify-end">
                        <span class="inline-flex w-fit rounded-full border border-brand-yellow/40 bg-white/10 px-4 py-1.5 text-brand-yellow text-[11px] font-bold uppercase tracking-[0.22em] backdrop-blur mb-6">
                            Featured <?php echo esc_html( $featured_cat ); ?>
                        </span>
                        <h2 class="max-w-4xl text-4xl md:text-6xl font-cinzel text-white leading-[0.95] tracking-tight mb-5">
                            <a href="<?php echo esc_url( get_permalink( $featured_id ) ); ?>" class="!text-white no-underline hover:no-underline focus:no-underline">
                                <?php echo esc_html( get_the_title( $featured_id ) ); ?>
                            </a>
                        </h2>
                        <p class="max-w-2xl text-white/85 font-montserrat leading-relaxed mb-8">
                            <?php echo esc_html( wp_trim_words( get_the_excerpt( $featured_id ), 28 ) ); ?>
                        </p>
                        <div class="flex flex-wrap items-center gap-x-6 gap-y-3 text-white/80 font-montserrat text-xs uppercase tracking-widest mb-8">
                            <span><?php echo esc_html( get_the_date( 'F d, Y', $featured_id ) ); ?></span>
                            <span class="h-1.5 w-1.5 rounded-full bg-brand-yellow"></span>
                            <span>By <?php echo esc_html( get_the_author_meta( 'display_name', $featured_post->post_author ) ); ?></span>
                        </div>
                        <a href="<?php echo esc_url( get_permalink( $featured_id ) ); ?>" class="inline-flex w-fit items-center gap-2 rounded-sm bg-brand-yellow px-8 py-3.5 !text-brand-blue font-cinzel font-bold uppercase tracking-widest no-underline hover:no-underline transition-all shadow-lg hover:shadow-xl">
                            Read Featured Story
                        </a>
                    </div>
                </article>
            <?php endif; ?>

            <?php if ( ! empty( $grid_posts ) ) : ?>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <?php foreach ( $grid_posts as $post ) : setup_postdata( $post ); ?>
                        <?php
                        // Determine the image. Featured image or a default.
                        $thumb_url = get_the_post_thumbnail_url(get_the_ID(), 'large');
                        if ( ! $thumb_url ) {
                            $thumb_url = home_url('/wp-content/uploads/2026/02/logo_compressed.png');
                        }
                        // Default image check.
                        $is_default_image = strpos($thumb_url, 'logo_compressed.png') !== false;

                        // Get Category
                        $categories = get_the_category();
                        $cat_name = ! empty( $categories ) ? $categories[0]->name : 'News';
                        ?>
                        <article class="flex flex-col bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-shadow duration-300 relative group <?php echo esc_attr( implode( ' ', get_post_class() ) ); ?>">
                            
                            <!-- Share Icon Top Left -->
                            <div class="absolute top-4 left-4 z-20 w-8 h-8 bg-black/40 hover:bg-brand-blue flex items-center justify-center text-white cursor-pointer transition-colors duration-300 pointer-events-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <polyline points="15 3 21 3 21 9"></polyline>
                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                </svg>
                            </div>

                            <!-- Image Container with Kampala clip-path -->
                            <div class="relative w-full aspect-[4/3] overflow-hidden bg-brand-blue/5">
                                <?php if ($is_default_image) : ?>
                                     <div class="absolute inset-0 flex items-center justify-center p-8 bg-white" style="clip-path: polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 80%);">
                                        <img src="<?php echo esc_url($thumb_url); ?>" alt="<?php the_title_attribute(); ?>" class="w-auto h-auto max-h-full max-w-full object-contain opacity-40 mix-blend-multiply transition-transform duration-700 group-hover:scale-105">
                                     </div>
                                <?php else: ?>
                                    <div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style="background-image: url('<?php echo esc_url($thumb_url); ?>'); clip-path: polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 80%);"></div>
                                <?php endif; ?>
                            </div>

                            <!-- Text Content: Centered -->
                            <div class="pt-6 pb-8 px-6 flex flex-col items-center text-center flex-grow -mt-4 z-10 bg-white">
                                <!-- Date -->
                                <div class="text-[10px] font-montserrat tracking-[0.15em] text-gray-400 uppercase mb-3">
                                    <?php echo esc_html( get_the_date('F d, Y') ); ?>
                                </div>
                                
                                <!-- Title -->
                                <h2 class="text-xl md:text-2xl font-cinzel text-brand-blue font-bold mb-2 leading-tight hover:text-brand-yellow transition-colors">
                                    <a href="<?php the_permalink(); ?>" class="no-underline">
                                        <?php the_title(); ?>
                                    </a>
                                </h2>

                                <!-- Category -->
                                <div class="text-[10px] font-bold font-montserrat tracking-[0.1em] text-brand-yellow uppercase mb-5">
                                    <?php echo esc_html( $cat_name ); ?>
                                </div>

                                <!-- Excerpt -->
                                <div class="text-gray-500 font-opensans text-sm leading-relaxed line-clamp-3 mb-6 font-light">
                                    <?php 
                                    $excerpt = get_the_excerpt();
                                    $excerpt = wp_trim_words($excerpt, 20, '...');
                                    echo esc_html($excerpt); 
                                    ?>
                                </div>
                            </div>

                            <!-- Footer: Comments & Likes -->
                            <div class="mt-auto border-t border-gray-100 flex justify-between items-center py-4 px-6 text-[10px] font-bold uppercase tracking-widest text-brand-blue font-montserrat bg-white">
                                <a href="<?php comments_link(); ?>" class="hover:text-brand-yellow transition-colors">
                                    <?php 
                                    $comments_count = get_comments_number();
                                    if ( $comments_count == 0 ) {
                                        echo 'No Comment';
                                    } elseif ( $comments_count == 1 ) {
                                        echo '1 Comment';
                                    } else {
                                        echo esc_html( $comments_count ) . ' Comments';
                                    }
                                    ?>
                                </a>
                                
                                <!-- Fake Like button matching Kampala -->
                                <div class="flex items-center gap-1.5 text-gray-400 cursor-pointer hover:text-red-500 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                                    </svg>
                                    <span><?php echo rand(10, 500); // Random count for demo ?></span>
                                </div>
                            </div>

                        </article>
                    <?php endforeach; wp_reset_postdata(); ?>
                </div>
            <?php endif; ?>

            <div class="mt-16 text-center">
                <?php
                the_posts_pagination( array(
                    'mid_size'  => 2,
                    'prev_text' => __( '&larr; Previous', 'wingate' ),
                    'next_text' => __( 'Next &rarr;', 'wingate' ),
                    'screen_reader_text' => 'News Navigation'
                ) );
                ?>
            </div>

        <?php else : ?>
            <div class="text-center py-20 bg-gray-50 rounded-lg border border-gray-100">
                <h3 class="text-2xl font-cinzel text-brand-blue mb-2">No News Yet</h3>
                <p class="text-gray-600 font-opensans">Check back later for the latest updates from the club.</p>
            </div>
        <?php endif; ?>

    </main>

</div>

<?php
get_footer();

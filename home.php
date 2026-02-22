<?php
/**
 * The template for displaying the blog index (News)
 *
 * @package Wingate
 */

get_header();

$hero_image = home_url( '/wp-content/uploads/2026/02/20260131_124600-scaled.jpg' );
$fallback_featured = home_url( '/wp-content/uploads/2026/02/20260131_124600-scaled.jpg' );
$fallback_thumb = home_url( '/wp-content/uploads/2026/02/logo_compressed.png' );
$layout_settings = function_exists( 'wingate_get_news_layout_settings_data' ) ? wingate_get_news_layout_settings_data() : array( 'layout' => 'current' );
$layout = isset( $layout_settings['layout'] ) ? $layout_settings['layout'] : 'current';

$allowed_layouts = array( 'current', 'classic-a', 'classic-b', 'modern-a', 'modern-e', 'slider-a' );
if ( ! in_array( $layout, $allowed_layouts, true ) ) {
	$layout = 'current';
}

$posts_data = array();
if ( have_posts() ) {
	while ( have_posts() ) {
		the_post();
		$post_id = get_the_ID();
		$categories = get_the_category( $post_id );
		$category = ! empty( $categories ) ? $categories[0]->name : 'News';

		$thumb_large = get_the_post_thumbnail_url( $post_id, 'large' );
		$thumb_full = get_the_post_thumbnail_url( $post_id, 'full' );
		$thumb_large = $thumb_large ? $thumb_large : $fallback_thumb;
		$thumb_full = $thumb_full ? $thumb_full : $fallback_featured;

		$posts_data[] = array(
			'id' => $post_id,
			'title' => get_the_title( $post_id ),
			'permalink' => get_permalink( $post_id ),
			'excerpt' => wp_trim_words( get_the_excerpt( $post_id ), 30 ),
			'date' => get_the_date( 'F d, Y', $post_id ),
			'author' => get_the_author_meta( 'display_name', (int) get_post_field( 'post_author', $post_id ) ),
			'category' => $category,
			'thumb_large' => $thumb_large,
			'thumb_full' => $thumb_full,
		);
	}
}
?>

<div class="bg-white min-h-screen relative overflow-hidden">
	<div class="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
		<div class="absolute top-20 right-0 h-96 w-96 rounded-full bg-brand-yellow/10 blur-[100px]"></div>
		<div class="absolute bottom-10 -left-20 h-80 w-80 rounded-full bg-brand-blue/10 blur-[90px]"></div>
	</div>

	<header class="relative h-[48vh] min-h-[360px] flex items-center justify-center bg-brand-blue overflow-hidden">
		<div class="absolute inset-0 bg-cover bg-center" style="background-image: url('<?php echo esc_url( $hero_image ); ?>');"></div>
		<div class="absolute inset-0 bg-brand-blue/35 mix-blend-multiply"></div>
		<div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-b from-black/35 to-transparent"></div>
		<div class="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-t from-white to-transparent"></div>

		<div class="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
			<h1 class="text-4xl md:text-6xl font-cinzel text-white mb-4 tracking-tight drop-shadow-2xl leading-none">
				Club <span class="text-brand-yellow">News</span>
			</h1>
			<div class="w-20 h-1 bg-brand-yellow/50"></div>
			<p class="mt-6 inline-block bg-brand-blue/80 backdrop-blur-sm px-6 py-2.5 rounded text-white/95 font-montserrat text-sm uppercase tracking-widest shadow-xl border border-white/10">
				Updates &amp; Announcements
			</p>
		</div>
	</header>

	<main class="container mx-auto px-4 py-16 md:py-20 relative z-20 max-w-7xl">
		<?php if ( ! empty( $posts_data ) ) : ?>
			<?php
			$featured = $posts_data[0];
			$rest = array_slice( $posts_data, 1 );
			?>

			<?php if ( 'current' === $layout ) : ?>
				<article class="group relative mb-14 overflow-hidden rounded-3xl bg-brand-blue shadow-[0_24px_55px_rgba(14,27,61,0.28)]">
					<div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style="background-image: url('<?php echo esc_url( $featured['thumb_full'] ); ?>');"></div>
					<div class="absolute inset-0 bg-gradient-to-t from-brand-blue/95 via-brand-blue/80 to-brand-blue/30"></div>
					<div class="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-brand-yellow/25 blur-3xl"></div>
					<div class="relative z-10 p-8 md:p-12 lg:p-14 min-h-[460px] flex flex-col justify-end">
						<span class="inline-flex w-fit rounded-full border border-brand-yellow/40 bg-white/10 px-4 py-1.5 text-brand-yellow text-[11px] font-bold uppercase tracking-[0.22em] backdrop-blur mb-6">
							Featured <?php echo esc_html( $featured['category'] ); ?>
						</span>
						<h2 class="max-w-4xl text-4xl md:text-6xl font-cinzel text-white leading-[0.95] tracking-tight mb-5">
							<a href="<?php echo esc_url( $featured['permalink'] ); ?>" class="!text-white no-underline hover:no-underline focus:no-underline">
								<?php echo esc_html( $featured['title'] ); ?>
							</a>
						</h2>
						<p class="max-w-2xl text-white/85 font-montserrat leading-relaxed mb-8"><?php echo esc_html( $featured['excerpt'] ); ?></p>
						<div class="flex flex-wrap items-center gap-x-6 gap-y-3 text-white/80 font-montserrat text-xs uppercase tracking-widest mb-8">
							<span><?php echo esc_html( $featured['date'] ); ?></span>
							<span class="h-1.5 w-1.5 rounded-full bg-brand-yellow"></span>
							<span>By <?php echo esc_html( $featured['author'] ); ?></span>
						</div>
						<a href="<?php echo esc_url( $featured['permalink'] ); ?>" class="inline-flex w-fit items-center gap-2 rounded-sm bg-brand-yellow px-8 py-3.5 !text-brand-blue font-cinzel font-bold uppercase tracking-widest no-underline hover:no-underline transition-all shadow-lg hover:shadow-xl">
							Read Featured Story
						</a>
					</div>
				</article>
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
					<?php foreach ( $rest as $item ) : ?>
						<article class="flex flex-col bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-shadow duration-300 group">
							<div class="relative w-full aspect-[4/3] overflow-hidden bg-brand-blue/5">
								<div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style="background-image: url('<?php echo esc_url( $item['thumb_large'] ); ?>'); clip-path: polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 80%);"></div>
							</div>
							<div class="pt-6 pb-8 px-6 flex flex-col items-center text-center flex-grow -mt-4 z-10 bg-white">
								<div class="text-[10px] font-montserrat tracking-[0.15em] text-gray-400 uppercase mb-3"><?php echo esc_html( $item['date'] ); ?></div>
								<h2 class="text-xl md:text-2xl font-cinzel text-brand-blue font-bold mb-2 leading-tight hover:text-brand-yellow transition-colors">
									<a href="<?php echo esc_url( $item['permalink'] ); ?>" class="no-underline hover:no-underline"><?php echo esc_html( $item['title'] ); ?></a>
								</h2>
								<div class="text-[10px] font-bold font-montserrat tracking-[0.1em] text-brand-yellow uppercase mb-5"><?php echo esc_html( $item['category'] ); ?></div>
								<div class="text-gray-500 font-opensans text-sm leading-relaxed line-clamp-3 mb-6 font-light"><?php echo esc_html( wp_trim_words( $item['excerpt'], 20 ) ); ?></div>
							</div>
						</article>
					<?php endforeach; ?>
				</div>

			<?php elseif ( 'classic-a' === $layout ) : ?>
				<section class="mb-14 rounded-3xl overflow-hidden border border-brand-blue/10 shadow-[0_24px_40px_rgba(14,27,61,0.16)] bg-white">
					<div class="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr]">
						<div class="min-h-[440px] bg-cover bg-center" style="background-image:url('<?php echo esc_url( $featured['thumb_full'] ); ?>')"></div>
						<div class="p-8 md:p-10 bg-brand-blue text-white flex flex-col justify-center">
							<p class="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-yellow mb-4"><?php echo esc_html( $featured['category'] ); ?></p>
							<h2 class="text-3xl md:text-4xl font-cinzel leading-tight mb-4">
								<a href="<?php echo esc_url( $featured['permalink'] ); ?>" class="!text-white no-underline hover:no-underline"><?php echo esc_html( $featured['title'] ); ?></a>
							</h2>
							<p class="text-white/85 font-montserrat leading-relaxed mb-6"><?php echo esc_html( $featured['excerpt'] ); ?></p>
							<a href="<?php echo esc_url( $featured['permalink'] ); ?>" class="inline-flex w-fit rounded-sm bg-brand-yellow px-6 py-3 font-cinzel font-bold uppercase tracking-widest text-brand-blue no-underline hover:no-underline">Read Story</a>
						</div>
					</div>
				</section>
				<div class="space-y-5">
					<?php foreach ( $rest as $item ) : ?>
						<article class="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-5 items-center bg-white border border-gray-100 rounded-2xl p-4 md:p-5 shadow-sm hover:shadow-lg transition-shadow">
							<div class="h-[150px] rounded-xl bg-cover bg-center" style="background-image:url('<?php echo esc_url( $item['thumb_large'] ); ?>')"></div>
							<div>
								<p class="text-[10px] font-bold uppercase tracking-widest text-brand-yellow mb-2"><?php echo esc_html( $item['category'] ); ?> • <?php echo esc_html( $item['date'] ); ?></p>
								<h3 class="text-2xl font-cinzel text-brand-blue mb-2 leading-tight"><a href="<?php echo esc_url( $item['permalink'] ); ?>" class="no-underline hover:no-underline"><?php echo esc_html( $item['title'] ); ?></a></h3>
								<p class="text-sm text-gray-600 font-montserrat leading-relaxed"><?php echo esc_html( wp_trim_words( $item['excerpt'], 24 ) ); ?></p>
							</div>
						</article>
					<?php endforeach; ?>
				</div>

			<?php elseif ( 'classic-b' === $layout ) : ?>
				<div class="space-y-10">
					<?php foreach ( $posts_data as $index => $item ) : ?>
						<article class="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-brand-blue/10 bg-white shadow-[0_20px_35px_rgba(14,27,61,0.12)]">
							<div class="<?php echo 0 === ( $index % 2 ) ? 'order-1' : 'order-2'; ?> min-h-[300px] md:min-h-[360px] bg-cover bg-center" style="background-image:url('<?php echo esc_url( $item['thumb_full'] ); ?>')"></div>
							<div class="<?php echo 0 === ( $index % 2 ) ? 'order-2' : 'order-1'; ?> p-7 md:p-10 flex flex-col justify-center">
								<p class="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-yellow mb-3"><?php echo esc_html( $item['category'] ); ?></p>
								<h2 class="text-3xl md:text-4xl font-cinzel text-brand-blue leading-tight mb-3"><a href="<?php echo esc_url( $item['permalink'] ); ?>" class="no-underline hover:no-underline"><?php echo esc_html( $item['title'] ); ?></a></h2>
								<p class="text-gray-600 font-montserrat leading-relaxed mb-5"><?php echo esc_html( wp_trim_words( $item['excerpt'], 28 ) ); ?></p>
								<div class="text-xs uppercase tracking-widest font-bold text-gray-400 mb-6"><?php echo esc_html( $item['date'] ); ?> • <?php echo esc_html( $item['author'] ); ?></div>
								<a href="<?php echo esc_url( $item['permalink'] ); ?>" class="inline-flex w-fit px-6 py-3 rounded-sm border border-brand-blue text-brand-blue font-cinzel font-bold uppercase tracking-wider no-underline hover:no-underline hover:bg-brand-blue hover:!text-white transition-colors">Continue</a>
							</div>
						</article>
					<?php endforeach; ?>
				</div>

			<?php elseif ( 'modern-a' === $layout ) : ?>
				<section class="grid grid-cols-1 xl:grid-cols-[1.2fr_0.8fr] gap-6 mb-8">
					<article class="rounded-3xl overflow-hidden relative min-h-[520px] shadow-[0_30px_50px_rgba(14,27,61,0.24)]">
						<div class="absolute inset-0 bg-cover bg-center" style="background-image:url('<?php echo esc_url( $featured['thumb_full'] ); ?>')"></div>
						<div class="absolute inset-0 bg-gradient-to-t from-brand-blue/95 via-brand-blue/70 to-transparent"></div>
						<div class="relative z-10 h-full p-8 md:p-10 flex flex-col justify-end">
							<p class="text-[10px] uppercase tracking-[0.24em] font-bold text-brand-yellow mb-4"><?php echo esc_html( $featured['category'] ); ?></p>
							<h2 class="text-4xl md:text-5xl font-cinzel text-white leading-[0.95] mb-4"><a href="<?php echo esc_url( $featured['permalink'] ); ?>" class="!text-white no-underline hover:no-underline"><?php echo esc_html( $featured['title'] ); ?></a></h2>
							<p class="text-white/85 font-montserrat leading-relaxed max-w-3xl"><?php echo esc_html( $featured['excerpt'] ); ?></p>
						</div>
					</article>
					<div class="space-y-5">
						<?php foreach ( array_slice( $rest, 0, 3 ) as $item ) : ?>
							<article class="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm hover:shadow-lg transition-shadow">
								<div class="h-[140px] rounded-xl bg-cover bg-center mb-4" style="background-image:url('<?php echo esc_url( $item['thumb_large'] ); ?>')"></div>
								<p class="text-[10px] uppercase tracking-widest font-bold text-brand-yellow mb-2"><?php echo esc_html( $item['category'] ); ?></p>
								<h3 class="text-xl font-cinzel text-brand-blue leading-tight mb-2"><a href="<?php echo esc_url( $item['permalink'] ); ?>" class="no-underline hover:no-underline"><?php echo esc_html( $item['title'] ); ?></a></h3>
								<p class="text-sm text-gray-500 font-montserrat line-clamp-2"><?php echo esc_html( wp_trim_words( $item['excerpt'], 14 ) ); ?></p>
							</article>
						<?php endforeach; ?>
					</div>
				</section>
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					<?php foreach ( array_slice( $rest, 3 ) as $item ) : ?>
						<article class="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
							<p class="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2"><?php echo esc_html( $item['date'] ); ?></p>
							<h3 class="text-2xl font-cinzel text-brand-blue leading-tight mb-3"><a href="<?php echo esc_url( $item['permalink'] ); ?>" class="no-underline hover:no-underline"><?php echo esc_html( $item['title'] ); ?></a></h3>
							<p class="text-sm text-gray-600 font-montserrat leading-relaxed"><?php echo esc_html( wp_trim_words( $item['excerpt'], 20 ) ); ?></p>
						</article>
					<?php endforeach; ?>
				</div>

			<?php elseif ( 'modern-e' === $layout ) : ?>
				<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
					<?php foreach ( $posts_data as $index => $item ) : ?>
						<article class="relative overflow-hidden rounded-3xl border border-brand-blue/10 bg-white shadow-[0_18px_28px_rgba(14,27,61,0.12)] hover:shadow-[0_28px_42px_rgba(14,27,61,0.2)] transition-all">
							<div class="h-[220px] bg-cover bg-center" style="background-image:url('<?php echo esc_url( $item['thumb_large'] ); ?>')"></div>
							<div class="p-6">
								<div class="flex items-center justify-between mb-3">
									<span class="inline-flex px-3 py-1 rounded-full bg-brand-blue/5 text-brand-blue text-[10px] font-bold uppercase tracking-[0.18em]"><?php echo esc_html( $item['category'] ); ?></span>
									<span class="text-[10px] text-gray-400 uppercase tracking-wider font-bold"><?php echo esc_html( $item['date'] ); ?></span>
								</div>
								<h2 class="text-2xl font-cinzel text-brand-blue leading-tight mb-3"><a href="<?php echo esc_url( $item['permalink'] ); ?>" class="no-underline hover:no-underline"><?php echo esc_html( $item['title'] ); ?></a></h2>
								<p class="text-sm text-gray-600 font-montserrat leading-relaxed mb-5"><?php echo esc_html( wp_trim_words( $item['excerpt'], 18 ) ); ?></p>
								<a href="<?php echo esc_url( $item['permalink'] ); ?>" class="inline-flex text-xs font-bold uppercase tracking-[0.16em] text-brand-blue hover:text-brand-yellow transition-colors no-underline hover:no-underline">
									Explore Story →
								</a>
							</div>
							<?php if ( 0 === $index ) : ?>
								<div class="absolute top-4 right-4 px-3 py-1 rounded-full bg-brand-yellow text-brand-blue text-[10px] font-bold uppercase tracking-wider">Lead</div>
							<?php endif; ?>
						</article>
					<?php endforeach; ?>
				</div>

			<?php elseif ( 'slider-a' === $layout ) : ?>
				<section class="mb-10 rounded-3xl border border-brand-blue/10 bg-white p-4 md:p-6 shadow-[0_20px_36px_rgba(14,27,61,0.13)]">
					<div class="flex items-center justify-between mb-4">
						<h2 class="text-2xl md:text-3xl font-cinzel text-brand-blue font-bold uppercase tracking-wide">Featured Feed</h2>
						<span class="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400">Swipe Horizontally</span>
					</div>
					<div class="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-2">
						<?php foreach ( array_slice( $posts_data, 0, 6 ) as $item ) : ?>
							<article class="min-w-[320px] md:min-w-[420px] lg:min-w-[500px] snap-start rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-white">
								<div class="h-[260px] bg-cover bg-center" style="background-image:url('<?php echo esc_url( $item['thumb_full'] ); ?>')"></div>
								<div class="p-6">
									<p class="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-yellow mb-2"><?php echo esc_html( $item['category'] ); ?></p>
									<h3 class="text-3xl font-cinzel text-brand-blue leading-tight mb-3"><a href="<?php echo esc_url( $item['permalink'] ); ?>" class="no-underline hover:no-underline"><?php echo esc_html( $item['title'] ); ?></a></h3>
									<p class="text-sm text-gray-600 font-montserrat leading-relaxed"><?php echo esc_html( wp_trim_words( $item['excerpt'], 22 ) ); ?></p>
								</div>
							</article>
						<?php endforeach; ?>
					</div>
				</section>
				<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
					<?php foreach ( array_slice( $posts_data, 6 ) as $item ) : ?>
						<article class="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-lg transition-shadow">
							<p class="text-[10px] uppercase tracking-[0.16em] font-bold text-gray-400 mb-2"><?php echo esc_html( $item['date'] ); ?></p>
							<h3 class="text-2xl font-cinzel text-brand-blue leading-tight mb-3"><a href="<?php echo esc_url( $item['permalink'] ); ?>" class="no-underline hover:no-underline"><?php echo esc_html( $item['title'] ); ?></a></h3>
							<p class="text-sm text-gray-600 font-montserrat leading-relaxed"><?php echo esc_html( wp_trim_words( $item['excerpt'], 18 ) ); ?></p>
						</article>
					<?php endforeach; ?>
				</div>
			<?php endif; ?>

			<div class="mt-16 text-center">
				<?php
				the_posts_pagination(
					array(
						'mid_size' => 2,
						'prev_text' => __( '&larr; Previous', 'wingate' ),
						'next_text' => __( 'Next &rarr;', 'wingate' ),
						'screen_reader_text' => 'News Navigation',
					)
				);
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

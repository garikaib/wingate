<?php
/**
 * Default template for pages without a custom page template.
 *
 * @package Wingate
 */

get_header();
?>

<?php while ( have_posts() ) : the_post(); ?>
<?php
$hero_image = get_the_post_thumbnail_url( get_the_ID(), 'full' );
if ( ! $hero_image ) {
	$hero_image = home_url( '/wp-content/uploads/2026/02/20260131_124600-scaled.jpg' );
}

$parent_title = '';
if ( wp_get_post_parent_id( get_the_ID() ) ) {
	$parent_title = get_the_title( wp_get_post_parent_id( get_the_ID() ) );
}
?>

<div class="bg-white min-h-screen relative overflow-hidden">
	<div class="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
		<div class="absolute top-24 right-0 h-96 w-96 rounded-full bg-brand-yellow/10 blur-[110px]"></div>
		<div class="absolute bottom-24 -left-20 h-80 w-80 rounded-full bg-brand-blue/10 blur-[90px]"></div>
	</div>

	<header class="relative h-[52vh] min-h-[380px] flex items-center justify-center bg-brand-blue overflow-hidden">
		<div class="absolute inset-0 bg-cover bg-center" style="background-image: url('<?php echo esc_url( $hero_image ); ?>'); transform: scale(1.06);"></div>
		<div class="absolute inset-0 bg-brand-blue/45 mix-blend-multiply"></div>
		<div class="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-t from-white to-transparent"></div>
		<div class="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/40 to-transparent"></div>

		<div class="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center animate-on-scroll">
			<div class="inline-flex items-center rounded-full border border-brand-yellow/35 bg-white/10 px-4 py-1.5 backdrop-blur-md mb-6">
				<span class="text-brand-yellow text-xs font-bold uppercase tracking-[0.28em]">
					<?php echo esc_html( $parent_title ? $parent_title : 'Wingate Golf Club' ); ?>
				</span>
			</div>

			<h1 class="text-5xl md:text-7xl lg:text-8xl font-cinzel text-white mb-6 tracking-tight leading-none drop-shadow-2xl">
				<?php the_title(); ?>
			</h1>
			<div class="w-24 h-1 bg-brand-yellow mx-auto mb-8"></div>

			<?php if ( has_excerpt() ) : ?>
				<p class="max-w-3xl text-white/85 font-montserrat text-base md:text-lg leading-relaxed">
					<?php echo esc_html( get_the_excerpt() ); ?>
				</p>
			<?php endif; ?>
		</div>
	</header>

	<main class="container mx-auto px-4 py-20 md:py-24 relative z-20 max-w-6xl">
		<article class="bg-white/90 backdrop-blur-xl rounded-2xl border border-white/40 shadow-2xl overflow-hidden animate-on-scroll relative z-20">
			<div class="px-7 md:px-16 lg:px-24 py-12 md:py-16">
				<div class="prose prose-lg xl:prose-xl prose-headings:font-cinzel prose-headings:text-brand-blue prose-p:font-opensans prose-p:text-gray-700 prose-p:leading-relaxed prose-li:font-opensans prose-img:rounded-sm prose-img:shadow-xl prose-a:text-brand-yellow prose-a:no-underline hover:prose-a:underline max-w-none">
					<?php the_content(); ?>
				</div>
			</div>
		</article>
	</main>
</div>
<?php endwhile; ?>

<?php
get_footer();

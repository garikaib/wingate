<?php
/**
 * Template Name: Wingate Styled Page
 * Template Post Type: page
 *
 * @package Wingate
 */

get_header();
?>

<?php while ( have_posts() ) : the_post(); ?>
<?php
$hero_image = get_the_post_thumbnail_url( get_the_ID(), 'full' );

$parent_title = '';
if ( wp_get_post_parent_id( get_the_ID() ) ) {
	$parent_title = get_the_title( wp_get_post_parent_id( get_the_ID() ) );
}

$subtitle = trim( (string) get_post_meta( get_the_ID(), '_wingate_page_subtitle', true ) );
if ( '' === $subtitle && has_excerpt() ) {
	$subtitle = get_the_excerpt();
}
?>

<div class="bg-white min-h-screen relative overflow-hidden">
	<div class="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
		<div class="absolute top-24 right-0 h-96 w-96 rounded-full bg-brand-yellow/10 blur-[110px]"></div>
		<div class="absolute bottom-24 -left-20 h-80 w-80 rounded-full bg-brand-blue/10 blur-[90px]"></div>
	</div>

	<header class="relative w-full min-h-[460px] md:min-h-[560px] lg:min-h-[640px] flex items-center justify-center bg-brand-blue overflow-hidden">
		<?php if ( $hero_image ) : ?>
			<div class="absolute inset-0 bg-cover bg-center" style="background-image: url('<?php echo esc_url( $hero_image ); ?>');"></div>
			<div class="absolute inset-0 bg-brand-blue/45 mix-blend-multiply"></div>
		<?php else : ?>
			<div class="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,204,0,0.18),transparent_28%),linear-gradient(180deg,#18315f_0%,#0e1b3d_100%)]"></div>
		<?php endif; ?>
		<div class="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-t from-white to-transparent"></div>
		<div class="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/40 to-transparent"></div>

		<div class="relative z-10 w-full text-center px-6 md:px-10 max-w-6xl mx-auto flex flex-col items-center animate-on-scroll">
			<div class="inline-flex items-center rounded-full border border-brand-yellow/35 bg-white/10 px-4 py-1.5 backdrop-blur-md mb-6">
				<span class="text-brand-yellow text-xs font-bold uppercase tracking-[0.28em]">
					<?php echo esc_html( $parent_title ? $parent_title : 'Wingate Golf Club' ); ?>
				</span>
			</div>

			<h1 class="text-5xl md:text-7xl lg:text-8xl font-cinzel text-white mb-6 tracking-tight leading-none drop-shadow-2xl">
				<?php the_title(); ?>
			</h1>
			<div class="w-24 h-1 bg-brand-yellow mx-auto mb-8"></div>

			<?php if ( '' !== $subtitle ) : ?>
				<p class="max-w-3xl text-white/85 font-montserrat text-base md:text-lg leading-relaxed">
					<?php echo esc_html( $subtitle ); ?>
				</p>
			<?php endif; ?>
		</div>
	</header>

	<main class="relative z-20">
		<section class="mx-auto max-w-6xl px-6 md:px-10 lg:px-12 py-16 md:py-24 animate-on-scroll">
			<div class="max-w-4xl">
				<div class="prose prose-lg xl:prose-xl prose-headings:font-cinzel prose-headings:text-brand-blue prose-p:font-opensans prose-p:text-gray-700 prose-p:leading-relaxed prose-li:font-opensans prose-img:rounded-sm prose-img:shadow-xl prose-a:text-brand-yellow prose-a:no-underline hover:prose-a:underline max-w-none">
					<?php the_content(); ?>
				</div>
			</div>
		</section>
	</main>
</div>
<?php endwhile; ?>

<?php
get_footer();

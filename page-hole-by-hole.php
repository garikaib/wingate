<?php
/**
 * Template Name: Hole by Hole
 *
 * @package Wingate
 */

get_header();
?>

<div id="hole-by-hole-root"></div>

<section class="container mx-auto px-4 pb-16">
	<div class="rounded-2xl border border-brand-blue/10 bg-brand-blue/[0.03] p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5 shadow-sm">
		<div>
			<p class="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-blue/60 mb-2">Course Map</p>
			<h2 class="font-cinzel text-2xl md:text-3xl text-brand-blue mb-2">Want the full interactive layout?</h2>
			<p class="text-sm text-gray-600 max-w-2xl">Open the Course Layout map to view all holes on one screen with satellite toggle and clickable routing.</p>
		</div>
		<a href="<?php echo esc_url( home_url( '/course/course-layout/' ) ); ?>" class="inline-flex items-center justify-center rounded-sm bg-brand-blue px-6 py-3 text-xs font-bold uppercase tracking-widest text-white !no-underline hover:bg-brand-yellow hover:text-brand-blue transition-colors whitespace-nowrap">
			Open Course Layout
		</a>
	</div>
</section>

<?php
get_footer();

<?php
/**
 * The template for displaying all single posts (News/Blog)
 *
 * @package Wingate
 */

get_header();

if ( ! function_exists( 'wingate_lucide_icon' ) ) {
	function wingate_lucide_icon( $name, $class = 'h-4 w-4' ) {
		$icons = array(
			'share-2'    => '<path d="M14 2h6v6"/><path d="m10 14 10-10"/><path d="M20 14v7a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7"/>',
			'facebook'   => '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
			'twitter'    => '<path d="M22 5.8c-.7.3-1.5.6-2.3.7a4 4 0 0 0-6.9 3.6A11.3 11.3 0 0 1 3 4.9a4 4 0 0 0 1.2 5.3c-.6 0-1.2-.2-1.7-.5v.1a4 4 0 0 0 3.2 3.9c-.5.1-1 .2-1.6.1a4 4 0 0 0 3.7 2.8A8 8 0 0 1 2 18.6a11.3 11.3 0 0 0 6.1 1.8c7.3 0 11.3-6.1 11.3-11.3v-.5c.8-.6 1.5-1.3 2-2.1z"/>',
			'linkedin'   => '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>',
			'mail'       => '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
			'link'       => '<path d="M10 13a5 5 0 0 0 7.1 0l3.5-3.5a5 5 0 0 0-7.1-7.1L11 5"/><path d="M14 11a5 5 0 0 0-7.1 0L3.4 14.5a5 5 0 1 0 7.1 7.1L13 19"/>',
			'arrow-left' => '<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',
			'arrow-right'=> '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
		);

		if ( ! isset( $icons[ $name ] ) ) {
			return '';
		}

		return sprintf(
			'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="%s" aria-hidden="true">%s</svg>',
			esc_attr( $class ),
			$icons[ $name ]
		);
	}
}
?>

<?php while ( have_posts() ) : the_post(); ?>
<?php
$hero_image = get_the_post_thumbnail_url( get_the_ID(), 'full' );
if ( ! $hero_image ) {
	$hero_image = home_url( '/wp-content/uploads/2026/02/20260131_124600-scaled.jpg' );
}

$prev_post      = get_previous_post();
$next_post      = get_next_post();
$post_url       = get_permalink();
$post_title     = get_the_title();
$post_excerpt   = wp_strip_all_tags( get_the_excerpt() );
$reading_time   = max( 1, (int) ceil( str_word_count( wp_strip_all_tags( get_the_content() ) ) / 220 ) );
$categories     = get_the_category();
$primary_cat    = ! empty( $categories ) ? $categories[0]->name : '';

$encoded_url    = rawurlencode( $post_url );
$encoded_title  = rawurlencode( $post_title );
$encoded_email_subject = rawurlencode( 'Interesting read: ' . $post_title );
$encoded_email_body    = rawurlencode( $post_title . "\n\n" . $post_url );
?>

<div class="bg-white min-h-screen relative overflow-hidden">
	<div class="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
		<div class="absolute top-24 right-0 h-96 w-96 rounded-full bg-brand-yellow/10 blur-[110px]"></div>
		<div class="absolute bottom-24 -left-20 h-80 w-80 rounded-full bg-brand-blue/10 blur-[90px]"></div>
	</div>

	<header class="relative h-[60vh] min-h-[460px] flex items-center justify-center bg-brand-blue overflow-hidden">
		<div class="absolute inset-0 bg-cover bg-center" style="background-image: url('<?php echo esc_url( $hero_image ); ?>'); transform: scale(1.1);"></div>
		<div class="absolute inset-0 bg-brand-blue/30 mix-blend-multiply"></div>
		<div class="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-t from-white to-transparent"></div>
		<div class="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/40 to-transparent"></div>

		<div class="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center animate-on-scroll">
			<div class="inline-flex items-center rounded-full border border-brand-yellow/35 bg-white/10 px-4 py-1.5 backdrop-blur-md mb-6">
				<span class="text-brand-yellow text-xs font-bold uppercase tracking-[0.28em]"><?php echo esc_html( $primary_cat ? $primary_cat : 'News' ); ?></span>
			</div>

			<h1 class="text-5xl md:text-7xl lg:text-8xl font-cinzel text-white mb-6 tracking-tight leading-none drop-shadow-2xl">
				<?php the_title(); ?>
			</h1>
			<div class="w-24 h-1 bg-brand-yellow mx-auto mb-8"></div>

			<div class="flex flex-wrap items-center justify-center gap-4 text-white/85 font-montserrat text-xs md:text-sm uppercase tracking-widest">
				<span><?php echo esc_html( get_the_date( 'F d, Y' ) ); ?></span>
				<span class="h-1.5 w-1.5 rounded-full bg-brand-yellow"></span>
				<span>By <?php echo esc_html( get_the_author() ); ?></span>
				<span class="h-1.5 w-1.5 rounded-full bg-brand-yellow"></span>
				<span><?php echo esc_html( $reading_time ); ?> min read</span>
			</div>

		</div>
	</header>

	<main class="container mx-auto px-4 py-20 md:py-24 relative z-20 max-w-6xl">
		<!-- Floating Social Share Panel -->
		<div class="fixed left-0 top-1/2 -translate-y-1/2 z-50 flex flex-col shadow-2xl rounded-r-xl overflow-hidden pointer-events-auto">
			<a href="<?php echo esc_url( 'https://www.facebook.com/sharer/sharer.php?u=' . $encoded_url ); ?>" target="_blank" rel="noreferrer" class="group relative flex items-center justify-center w-12 h-12 bg-[#1877F2] text-white transition-all duration-300 hover:w-32 focus:outline-none">
				<?php echo wingate_lucide_icon( 'facebook', 'h-5 w-5 absolute left-1/2 -translate-x-1/2 group-hover:left-4 group-hover:-translate-x-0 transition-all duration-300' ); ?>
				<span class="absolute left-12 text-xs font-bold tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">Facebook</span>
			</a>
			<a href="<?php echo esc_url( 'https://twitter.com/intent/tweet?url=' . $encoded_url . '&text=' . $encoded_title ); ?>" target="_blank" rel="noreferrer" class="group relative flex items-center justify-center w-12 h-12 bg-black text-white transition-all duration-300 hover:w-28 focus:outline-none border-y border-white/10">
				<?php echo wingate_lucide_icon( 'twitter', 'h-5 w-5 absolute left-1/2 -translate-x-1/2 group-hover:left-4 group-hover:-translate-x-0 transition-all duration-300' ); ?>
				<span class="absolute left-10 text-xs font-bold tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">Share</span>
			</a>
			<a href="<?php echo esc_url( 'https://www.linkedin.com/sharing/share-offsite/?url=' . $encoded_url ); ?>" target="_blank" rel="noreferrer" class="group relative flex items-center justify-center w-12 h-12 bg-[#0A66C2] text-white transition-all duration-300 hover:w-32 focus:outline-none border-b border-white/10">
				<?php echo wingate_lucide_icon( 'linkedin', 'h-5 w-5 absolute left-1/2 -translate-x-1/2 group-hover:left-4 group-hover:-translate-x-0 transition-all duration-300' ); ?>
				<span class="absolute left-12 text-xs font-bold tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">LinkedIn</span>
			</a>
			<a href="<?php echo esc_url( 'mailto:?subject=' . $encoded_email_subject . '&body=' . $encoded_email_body ); ?>" class="group relative flex items-center justify-center w-12 h-12 bg-brand-yellow text-brand-blue transition-all duration-300 hover:w-28 focus:outline-none border-b border-white/10">
				<?php echo wingate_lucide_icon( 'mail', 'h-5 w-5 absolute left-1/2 -translate-x-1/2 group-hover:left-4 group-hover:-translate-x-0 transition-all duration-300' ); ?>
				<span class="absolute left-12 text-xs font-bold tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">Email</span>
			</a>
			<button type="button" data-copy-url="<?php echo esc_url( $post_url ); ?>" class="wingate-copy-link group relative flex items-center justify-center w-12 h-12 bg-brand-blue text-white transition-all duration-300 hover:w-36 focus:outline-none">
				<?php echo wingate_lucide_icon( 'link', 'h-5 w-5 absolute left-1/2 -translate-x-1/2 group-hover:left-4 group-hover:-translate-x-0 transition-all duration-300' ); ?>
				<span class="absolute left-12 text-xs font-bold tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap wingate-copy-text">Copy Link</span>
			</button>
		</div>

		<article class="bg-white/90 backdrop-blur-xl rounded-2xl border border-white/40 shadow-2xl mb-16 overflow-hidden animate-on-scroll relative z-20">
			<div class="px-7 md:px-16 lg:px-24 py-12 md:py-16">
				<div class="prose prose-lg xl:prose-xl prose-headings:font-cinzel prose-headings:text-brand-blue prose-p:font-opensans prose-p:text-gray-700 prose-p:leading-relaxed prose-li:font-opensans prose-img:rounded-sm prose-img:shadow-xl prose-a:text-brand-yellow prose-a:no-underline hover:prose-a:underline max-w-none">
					<?php the_content(); ?>
				</div>
			</div>
		</article>

		<section class="grid grid-cols-1 md:grid-cols-2 gap-6 animate-on-scroll" style="transition-delay: 120ms;">
			<?php if ( $prev_post ) : ?>
				<a href="<?php echo esc_url( get_permalink( $prev_post->ID ) ); ?>" class="group block p-8 bg-white/90 backdrop-blur-sm border border-brand-blue/10 rounded-xl shadow-sm hover:shadow-xl hover:border-brand-yellow/40 transition-all no-underline hover:no-underline">
					<span class="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-brand-yellow transition-colors">
						<?php echo wingate_lucide_icon( 'arrow-left', 'h-3.5 w-3.5' ); ?>
						Previous Article
					</span>
					<h3 class="font-cinzel text-brand-blue text-xl font-bold leading-snug line-clamp-2">
						<?php echo esc_html( $prev_post->post_title ); ?>
					</h3>
				</a>
			<?php else : ?>
				<div></div>
			<?php endif; ?>

			<?php if ( $next_post ) : ?>
				<a href="<?php echo esc_url( get_permalink( $next_post->ID ) ); ?>" class="group block p-8 bg-white/90 backdrop-blur-sm border border-brand-blue/10 rounded-xl shadow-sm hover:shadow-xl hover:border-brand-yellow/40 transition-all text-right no-underline hover:no-underline">
					<span class="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-brand-yellow transition-colors">
						Next Article
						<?php echo wingate_lucide_icon( 'arrow-right', 'h-3.5 w-3.5' ); ?>
					</span>
					<h3 class="font-cinzel text-brand-blue text-xl font-bold leading-snug line-clamp-2">
						<?php echo esc_html( $next_post->post_title ); ?>
					</h3>
				</a>
			<?php endif; ?>
		</section>

		<div class="mt-16 animate-on-scroll" style="transition-delay: 200ms;">
			<div class="relative overflow-hidden rounded-2xl bg-brand-blue px-8 py-10 md:px-10 md:py-12 text-center shadow-2xl">
				<div class="absolute inset-0 bg-gradient-to-br from-brand-blue via-brand-blue/90 to-black"></div>
				<div class="absolute -top-10 -right-10 h-44 w-44 rounded-full bg-brand-yellow/20 blur-3xl"></div>
				<div class="relative z-10">
					<h3 class="font-cinzel text-3xl md:text-4xl text-brand-yellow mb-3">More Club News</h3>
					<p class="text-white/75 font-montserrat mb-8">Catch up on latest updates, announcements, and event highlights.</p>
					<a href="<?php echo esc_url( home_url( '/news/' ) ); ?>" class="inline-flex items-center gap-2 rounded-sm bg-brand-yellow px-9 py-3.5 !text-brand-blue font-cinzel font-bold uppercase tracking-widest no-underline hover:no-underline transition-all shadow-lg hover:shadow-xl">
						<?php echo wingate_lucide_icon( 'arrow-left', 'h-4 w-4' ); ?>
						Back to News
					</a>
				</div>
			</div>
		</div>
	</main>
</div>
<?php endwhile; ?>

<div id="wingate-reading-progress" class="fixed top-0 left-0 z-[120] h-1 bg-brand-yellow shadow-[0_2px_10px_rgba(14,27,61,0.25)] transition-[width] duration-150 ease-out" style="width: 0%;"></div>
<div id="wingate-reading-indicator" class="fixed right-5 bottom-24 z-[120] rounded-sm border border-brand-blue/15 bg-white/95 px-4 py-3 shadow-[0_14px_28px_rgba(14,27,61,0.16)] backdrop-blur transition-all duration-300 opacity-0 translate-y-3 pointer-events-none">
	<div class="font-montserrat text-[10px] font-bold uppercase tracking-[0.18em] text-brand-blue/70">Read Progress</div>
	<div class="mt-1 font-cinzel text-2xl text-brand-blue leading-none">
		<span id="wingate-reading-percent">0%</span>
	</div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function () {
	const copyButton = document.querySelector('.wingate-copy-link');
	if (!copyButton) {
		return;
	}

	copyButton.addEventListener('click', async function () {
		const url = copyButton.getAttribute('data-copy-url');
		if (!url) {
			return;
		}

		try {
			if (navigator.clipboard && navigator.clipboard.writeText) {
				await navigator.clipboard.writeText(url);
			} else {
				const input = document.createElement('input');
				input.value = url;
				document.body.appendChild(input);
				input.select();
				document.execCommand('copy');
				document.body.removeChild(input);
			}
			const span = copyButton.querySelector('.wingate-copy-text');
			if (span) span.textContent = 'Copied';
			setTimeout(function () {
				if(span) span.textContent = 'Copy Link';
			}, 1200);
		} catch (error) {
			console.error('Could not copy link', error);
		}
	});

	const progressBar = document.getElementById('wingate-reading-progress');
	const progressIndicator = document.getElementById('wingate-reading-indicator');
	const progressLabel = document.getElementById('wingate-reading-percent');
	const articleContent = document.querySelector('article .prose');

	if (progressBar && progressIndicator && progressLabel && articleContent) {
		const updateReadingProgress = function () {
			const contentRect = articleContent.getBoundingClientRect();
			const scrollTop = window.scrollY || window.pageYOffset;
			const contentTop = scrollTop + contentRect.top;
			const contentHeight = articleContent.offsetHeight;
			const viewportHeight = window.innerHeight;

			const rawProgress = (scrollTop - contentTop + (viewportHeight * 0.35)) / Math.max(contentHeight, 1);
			const progress = Math.max(0, Math.min(1, rawProgress));
			const percent = Math.round(progress * 100);

			progressBar.style.width = percent + '%';
			progressLabel.textContent = percent + '%';

			if (percent > 0 && percent < 100) {
				progressIndicator.classList.remove('opacity-0', 'translate-y-3', 'pointer-events-none');
				progressIndicator.classList.add('opacity-100', 'translate-y-0');
			} else {
				progressIndicator.classList.add('opacity-0', 'translate-y-3', 'pointer-events-none');
				progressIndicator.classList.remove('opacity-100', 'translate-y-0');
			}
		};

		updateReadingProgress();
		window.addEventListener('scroll', updateReadingProgress, { passive: true });
		window.addEventListener('resize', updateReadingProgress);
	}
});
</script>

<?php
get_footer();

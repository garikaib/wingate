<?php
/**
 * Single template for Wingate Handicap posts.
 *
 * @package Wingate
 */

get_header();

while ( have_posts() ) :
	the_post();

	$post_id = get_the_ID();
	$decoded_title = html_entity_decode( html_entity_decode( (string) get_the_title( $post_id ), ENT_QUOTES | ENT_HTML5, 'UTF-8' ), ENT_QUOTES | ENT_HTML5, 'UTF-8' );
	$gender = (string) get_post_meta( $post_id, 'gender', true );
	$season_label = (string) get_post_meta( $post_id, 'season_label', true );
	$event_name = (string) get_post_meta( $post_id, 'event_name', true );
	$event_date = (string) get_post_meta( $post_id, 'event_date', true );
	$notes = (string) get_post_meta( $post_id, 'notes', true );
	$entries = get_post_meta( $post_id, 'entries', true );
	$season_stats = get_post_meta( $post_id, 'season_stats', true );
	$event_stats = get_post_meta( $post_id, 'event_stats', true );
	$gallery_id = (int) get_post_meta( $post_id, 'gallery_id', true );

	$entries = is_array( $entries ) ? $entries : array();
	$season_stats = is_array( $season_stats ) ? $season_stats : array();
	$event_stats = is_array( $event_stats ) ? $event_stats : array();

	$featured_url = get_the_post_thumbnail_url( $post_id, 'full' );
	$hero_url = $featured_url ? $featured_url : '';
	$gallery_items = array();
	if ( $gallery_id > 0 && function_exists( 'wingate_tools_get_gallery_items' ) ) {
		$gallery_items = wingate_tools_get_gallery_items( $gallery_id );
		if ( ! $hero_url && is_array( $gallery_items ) && ! empty( $gallery_items ) ) {
			$pick = $gallery_items[ array_rand( $gallery_items ) ];
			if ( is_array( $pick ) && ! empty( $pick['src'] ) ) {
				$hero_url = (string) $pick['src'];
			}
		}
	}
	$has_attached_gallery = ( $gallery_id > 0 && is_array( $gallery_items ) && ! empty( $gallery_items ) );
	if ( ! $hero_url ) {
		$hero_url = home_url( '/wp-content/uploads/2026/02/20260131_124600-scaled.jpg' );
	}

	$related = get_posts(
		array(
			'post_type'      => 'wingate_handicap',
			'post_status'    => 'publish',
			'posts_per_page' => 6,
			'post__not_in'   => array( $post_id ),
			'meta_query'     => array(
				array(
					'key'   => 'gender',
					'value' => in_array( $gender, array( 'men', 'ladies' ), true ) ? $gender : 'men',
				),
			),
			'orderby'        => 'date',
			'order'          => 'DESC',
		)
	);
	?>
	<div class="bg-brand-gray min-h-screen relative overflow-hidden">
		<div class="pointer-events-none absolute inset-0 opacity-40" style="background-image:radial-gradient(circle at 15% 8%, rgba(255,204,0,0.12), transparent 32%), radial-gradient(circle at 88% 4%, rgba(14,27,61,0.16), transparent 28%);"></div>
		<header class="relative h-[62vh] bg-brand-blue overflow-hidden flex items-end">
			<div class="absolute inset-0 bg-cover bg-center" style="background-image:url('<?php echo esc_url( $hero_url ); ?>')"></div>
			<div class="absolute inset-0 bg-gradient-to-t from-brand-blue/90 via-brand-blue/60 to-brand-blue/40"></div>
			<div class="relative z-10 container mx-auto px-4 pb-14">
				<div class="max-w-4xl rounded-2xl border border-white/20 bg-brand-blue/[0.32] p-6 md:p-8 backdrop-blur-sm animate-on-scroll">
					<p class="text-xs uppercase tracking-[0.18em] text-brand-yellow font-bold"><?php echo 'ladies' === $gender ? 'Ladies Handicap' : "Men's Handicap"; ?></p>
					<h1 class="mt-3 font-cinzel text-4xl md:text-6xl text-white"><?php echo esc_html( $decoded_title ); ?></h1>
					<p class="mt-3 text-white/85 uppercase tracking-[0.12em] text-xs md:text-sm"><?php echo esc_html( $season_label ); ?><?php echo $event_name ? ' • ' . esc_html( $event_name ) : ''; ?><?php echo $event_date ? ' • ' . esc_html( $event_date ) : ''; ?></p>
				</div>
			</div>
		</header>

		<main class="container mx-auto px-4 py-10 md:py-12 relative z-10">
			<style>
				.wingate-handicap-top-card {
					transition: transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease;
				}
				.wingate-handicap-top-card:hover {
					transform: translateY(-4px);
					box-shadow: 0 18px 28px -22px rgba(14, 27, 61, 0.45);
					border-color: rgba(255, 204, 0, 0.6);
				}
				.wingate-handicap-metric {
					transition: transform 0.25s ease, background-color 0.25s ease, border-color 0.25s ease;
				}
				.wingate-handicap-metric:hover {
					transform: translateY(-2px);
					border-color: rgba(255, 204, 0, 0.55);
				}
				.wingate-handicap-table .header-with-icon {
					display: inline-flex;
					align-items: center;
					gap: 0.45rem;
				}
				.wingate-handicap-table .header-with-icon svg {
					width: 14px;
					height: 14px;
					stroke: #ffcc00;
					stroke-width: 2;
					fill: none;
				}
				.wingate-handicap-table .handicap-row {
					opacity: 0;
					transform: translateY(10px);
					animation: wingateRowRise 0.45s ease-out forwards;
				}
				.wingate-handicap-table .handicap-row:nth-child(1) { animation-delay: 0.03s; }
				.wingate-handicap-table .handicap-row:nth-child(2) { animation-delay: 0.06s; }
				.wingate-handicap-table .handicap-row:nth-child(3) { animation-delay: 0.09s; }
				.wingate-handicap-table .handicap-row:nth-child(4) { animation-delay: 0.12s; }
				.wingate-handicap-table .handicap-row:nth-child(5) { animation-delay: 0.15s; }
				.wingate-handicap-table .handicap-row:nth-child(6) { animation-delay: 0.18s; }
				.wingate-handicap-table .handicap-row:nth-child(7) { animation-delay: 0.21s; }
				.wingate-handicap-table .handicap-row:nth-child(8) { animation-delay: 0.24s; }
				.wingate-handicap-table .handicap-row:nth-child(9) { animation-delay: 0.27s; }
				.wingate-handicap-table .handicap-row:nth-child(10) { animation-delay: 0.30s; }
				.wingate-handicap-table .handicap-row:nth-child(n+11) { animation-delay: 0.33s; }
				.wingate-handicap-table .handicap-row td {
					transition: color 0.22s ease, background-color 0.22s ease, transform 0.22s ease;
				}
				.wingate-handicap-table .handicap-row:hover td {
					background-color: rgba(14, 27, 61, 0.03);
				}
				.wingate-handicap-table .handicap-row:hover td:nth-child(2) {
					color: #0b1a4b;
					transform: translateX(2px);
				}
				.wingate-handicap-table .handicap-row:hover td:first-child {
					color: #c79d0a;
				}
				@keyframes wingateRowRise {
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}
			</style>
			<div class="grid gap-5 md:grid-cols-2">
				<div class="wingate-handicap-top-card rounded-2xl border border-brand-blue/12 bg-white p-6 shadow-sm animate-on-scroll">
					<h2 class="font-cinzel text-2xl text-brand-blue mb-4">Season Stats</h2>
					<div class="grid grid-cols-2 gap-3">
						<div class="wingate-handicap-metric rounded-lg border border-brand-blue/10 bg-brand-blue/[0.03] px-4 py-3"><p class="text-[10px] uppercase tracking-[0.14em] text-brand-blue/60 font-bold">Players</p><p class="text-xl font-cinzel text-brand-blue"><?php echo esc_html( (string) ( $season_stats['totalPlayers'] ?? 0 ) ); ?></p></div>
						<div class="wingate-handicap-metric rounded-lg border border-brand-blue/10 bg-brand-blue/[0.03] px-4 py-3"><p class="text-[10px] uppercase tracking-[0.14em] text-brand-blue/60 font-bold">Avg Index</p><p class="text-xl font-cinzel text-brand-blue"><?php echo esc_html( (string) ( $season_stats['averageIndex'] ?? 0 ) ); ?></p></div>
						<div class="wingate-handicap-metric rounded-lg border border-brand-blue/10 bg-brand-blue/[0.03] px-4 py-3"><p class="text-[10px] uppercase tracking-[0.14em] text-brand-blue/60 font-bold">Best</p><p class="text-xl font-cinzel text-brand-blue"><?php echo esc_html( (string) ( $season_stats['bestIndex'] ?? 0 ) ); ?></p></div>
						<div class="wingate-handicap-metric rounded-lg border border-brand-blue/10 bg-brand-blue/[0.03] px-4 py-3"><p class="text-[10px] uppercase tracking-[0.14em] text-brand-blue/60 font-bold">Worst</p><p class="text-xl font-cinzel text-brand-blue"><?php echo esc_html( (string) ( $season_stats['worstIndex'] ?? 0 ) ); ?></p></div>
					</div>
				</div>
				<div class="wingate-handicap-top-card rounded-2xl border border-brand-yellow/30 bg-white p-6 shadow-sm animate-on-scroll">
					<h2 class="font-cinzel text-2xl text-brand-blue mb-4">Event Stats</h2>
					<div class="grid grid-cols-2 gap-3">
						<div class="wingate-handicap-metric rounded-lg border border-brand-yellow/35 bg-brand-yellow/[0.09] px-4 py-3"><p class="text-[10px] uppercase tracking-[0.14em] text-brand-blue/60 font-bold">Entries</p><p class="text-xl font-cinzel text-brand-blue"><?php echo esc_html( (string) ( $event_stats['entries'] ?? 0 ) ); ?></p></div>
						<div class="wingate-handicap-metric rounded-lg border border-brand-yellow/35 bg-brand-yellow/[0.09] px-4 py-3"><p class="text-[10px] uppercase tracking-[0.14em] text-brand-blue/60 font-bold">Avg Course HC</p><p class="text-xl font-cinzel text-brand-blue"><?php echo esc_html( (string) ( $event_stats['averageCourseHandicap'] ?? 0 ) ); ?></p></div>
						<div class="wingate-handicap-metric rounded-lg border border-brand-yellow/35 bg-brand-yellow/[0.09] px-4 py-3"><p class="text-[10px] uppercase tracking-[0.14em] text-brand-blue/60 font-bold">Lowest</p><p class="text-xl font-cinzel text-brand-blue"><?php echo esc_html( (string) ( $event_stats['lowestCourseHandicap'] ?? 0 ) ); ?></p></div>
						<div class="wingate-handicap-metric rounded-lg border border-brand-yellow/35 bg-brand-yellow/[0.09] px-4 py-3"><p class="text-[10px] uppercase tracking-[0.14em] text-brand-blue/60 font-bold">Highest</p><p class="text-xl font-cinzel text-brand-blue"><?php echo esc_html( (string) ( $event_stats['highestCourseHandicap'] ?? 0 ) ); ?></p></div>
					</div>
				</div>
			</div>

			<?php if ( ! empty( $notes ) ) : ?>
				<div class="mt-6 rounded-2xl border border-brand-blue/10 bg-white p-6 text-brand-blue/80 shadow-sm animate-on-scroll">
					<?php echo esc_html( $notes ); ?>
				</div>
			<?php endif; ?>

			<div class="wingate-handicap-table mt-8 overflow-x-auto rounded-2xl border border-brand-blue/10 bg-white p-4 md:p-6 shadow-sm animate-on-scroll">
				<h2 class="font-cinzel text-3xl text-brand-blue mb-4">Leaderboard</h2>
				<table class="min-w-full border-collapse">
					<thead>
						<tr class="bg-brand-blue text-left text-xs uppercase tracking-[0.16em] text-white">
							<th class="px-3 py-3"><span class="header-with-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l3 7h7l-5.5 4.5 2 8.5L12 17l-6.5 5 2-8.5L2 9h7z"/></svg>#</span></th>
							<th class="px-3 py-3"><span class="header-with-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 21a8 8 0 1 0-16 0"/><circle cx="12" cy="7" r="4"/></svg>Player</span></th>
							<th class="px-3 py-3"><span class="header-with-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 6v6l4 2"/><circle cx="12" cy="12" r="9"/></svg>Index</span></th>
							<th class="px-3 py-3"><span class="header-with-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 20h12"/><path d="M12 4v12"/><path d="M7 9h10"/></svg>Course HC</span></th>
							<th class="px-3 py-3"><span class="header-with-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M7 9h6"/><path d="M7 13h10"/></svg>Member #</span></th>
						</tr>
					</thead>
					<tbody>
						<?php foreach ( $entries as $row ) : ?>
							<tr class="handicap-row border-b border-brand-blue/8 hover:bg-brand-blue/[0.03] transition-colors">
								<td class="px-3 py-2 text-brand-yellow font-bold"><?php echo esc_html( (string) ( $row['rank'] ?? '' ) ); ?></td>
								<td class="px-3 py-2 text-brand-blue font-semibold"><?php echo esc_html( (string) ( $row['playerName'] ?? '' ) ); ?></td>
								<td class="px-3 py-2 text-brand-blue"><?php echo esc_html( (string) ( $row['handicapIndex'] ?? '' ) ); ?></td>
								<td class="px-3 py-2 text-brand-blue"><?php echo esc_html( (string) ( $row['courseHandicap'] ?? '' ) ); ?></td>
								<td class="px-3 py-2 text-brand-blue/70"><?php echo esc_html( (string) ( $row['memberNumber'] ?? '' ) ); ?></td>
							</tr>
						<?php endforeach; ?>
					</tbody>
				</table>
			</div>

			<?php if ( $has_attached_gallery ) : ?>
				<section class="mt-8">
					<h3 class="font-cinzel text-3xl text-brand-blue mb-4">Gallery Highlights</h3>
					<div class="rounded-2xl border border-brand-blue/10 bg-white p-4 md:p-6 shadow-sm animate-on-scroll">
						<?php
						echo do_shortcode(
							sprintf(
								'[wingate_gallery id="%d"]',
								(int) $gallery_id
							)
						);
						?>
					</div>
				</section>
			<?php elseif ( has_post_thumbnail( $post_id ) ) : ?>
				<section class="mt-8">
					<h3 class="font-cinzel text-3xl text-brand-blue mb-4">Gallery Highlights</h3>
					<div class="overflow-hidden rounded-2xl border border-brand-blue/10 bg-white shadow-sm animate-on-scroll">
						<img src="<?php echo esc_url( (string) get_the_post_thumbnail_url( $post_id, 'large' ) ); ?>" alt="<?php echo esc_attr( $decoded_title ); ?>" class="w-full h-auto object-cover" loading="lazy" />
					</div>
				</section>
			<?php endif; ?>

			<?php if ( ! empty( $related ) ) : ?>
				<section class="mt-10">
					<h3 class="font-cinzel text-3xl text-brand-blue mb-4">Other Handicap Boards</h3>
					<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
						<?php foreach ( $related as $item ) : ?>
							<a href="<?php echo esc_url( get_permalink( $item->ID ) ); ?>" class="animate-on-scroll rounded-xl border border-brand-blue/10 bg-white p-5 shadow-sm !no-underline hover:-translate-y-0.5 hover:border-brand-yellow/60 hover:shadow-md transition-all">
								<p class="text-[10px] uppercase tracking-[0.14em] text-brand-blue/50"><?php echo esc_html( (string) get_post_meta( $item->ID, 'season_label', true ) ); ?></p>
								<h4 class="mt-2 font-cinzel text-2xl text-brand-blue"><?php echo esc_html( html_entity_decode( html_entity_decode( (string) get_the_title( $item->ID ), ENT_QUOTES | ENT_HTML5, 'UTF-8' ), ENT_QUOTES | ENT_HTML5, 'UTF-8' ) ); ?></h4>
							</a>
						<?php endforeach; ?>
					</div>
				</section>
			<?php endif; ?>
		</main>
	</div>
	<?php
endwhile;

get_footer();

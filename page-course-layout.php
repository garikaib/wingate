<?php
/**
 * Course Layout Page (clickable map)
 *
 * @package Wingate
 */

get_header();
?>

<main class="wingate-course-layout">
	<section class="layout-hero">
		<div class="container">
			<p class="kicker">The Course</p>
			<h1>Course Layout</h1>
			<p class="subtitle">Interactive course map powered by OpenStreetMap. Click any hole on the map or list to inspect routing and details.</p>
		</div>
	</section>

	<section class="layout-shell container">
		<aside class="layout-panel">
			<div class="panel-head">
				<h2>Holes</h2>
				<span id="hole-total">18 total</span>
			</div>
			<div class="panel-search">
				<input id="hole-search" type="search" placeholder="Search hole number..." />
			</div>
			<ul id="hole-list" class="hole-list" aria-label="Course holes"></ul>
		</aside>

		<div class="layout-map-wrap">
			<div class="map-toolbar">
				<div>
					<h3>Wingate Park Golf Course</h3>
					<p>Center: -17.721374, 31.07539</p>
				</div>
				<div class="map-legend">
					<span><i class="legend tee"></i>Tee</span>
					<span><i class="legend green"></i>Green</span>
					<span><i class="legend fairway"></i>Hole Route</span>
					<button id="map-expand-toggle" class="map-expand-btn" title="Toggle Full Page View">
						<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
						<span>Full Page</span>
					</button>
				</div>
			</div>
			<button id="map-fullscreen-close" class="map-fullscreen-close" type="button" aria-label="Close full map view">
				&times;
			</button>
			<div id="map-hole-selector" class="map-hole-selector" aria-label="Hole selector">
				<span class="map-hole-selector-kicker">Quick Select</span>
				<div class="map-hole-selector-head">
					<div>
						<p id="map-hole-selector-label" class="map-hole-selector-label">Hole 1</p>
						<p id="map-hole-selector-meta" class="map-hole-selector-meta">Front nine routing</p>
					</div>
					<span id="map-hole-selector-chip" class="map-hole-selector-chip">Par 4</span>
				</div>
				<div class="map-hole-selector-controls">
					<button id="map-hole-prev" class="map-hole-selector-btn" type="button" aria-label="Previous hole">Prev</button>
					<div class="map-hole-selector-select-wrap">
						<select id="map-hole-select" class="map-hole-selector-select" aria-label="Select hole"></select>
					</div>
					<button id="map-hole-next" class="map-hole-selector-btn" type="button" aria-label="Next hole">Next</button>
				</div>
			</div>
			<div id="map-active-hole-card" class="map-active-hole-card" aria-live="polite"></div>
			<div id="course-layout-map" class="layout-map" role="region" aria-label="Course layout map"></div>
		</div>
	</section>
</main>

<style>
.wingate-course-layout {
	background: radial-gradient(1200px 600px at 10% -20%, rgba(255, 204, 0, 0.25), transparent), #f3f5f8;
	color: #0e1b3d;
	min-height: 100vh;
	padding-bottom: 40px;
}
.wingate-course-layout .container {
	max-width: 1240px;
	margin: 0 auto;
	padding: 0 16px;
}
.wingate-course-layout .layout-hero {
	padding: 34px 0 18px;
}
.wingate-course-layout .kicker {
	margin: 0;
	font-size: 11px;
	font-weight: 700;
	letter-spacing: 0.16em;
	text-transform: uppercase;
	color: #7a88a2;
}
.wingate-course-layout h1 {
	margin: 6px 0 10px;
	font-family: "Cinzel", serif;
	font-size: clamp(32px, 4vw, 52px);
	line-height: 1;
}
.wingate-course-layout .subtitle {
	margin: 0;
	max-width: 760px;
	font-size: 16px;
	color: #475777;
}
.wingate-course-layout .layout-shell {
	display: grid;
	grid-template-columns: 290px minmax(0, 1fr);
	gap: 18px;
	align-items: start;
}
.wingate-course-layout .layout-panel,
.wingate-course-layout .layout-map-wrap {
	background: #fff;
	border: 1px solid rgba(14, 27, 61, 0.1);
	border-radius: 20px;
	box-shadow: 0 20px 50px -40px rgba(14, 27, 61, 0.55);
}
.wingate-course-layout .layout-panel {
	padding: 16px;
}
.wingate-course-layout .panel-head {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 12px;
}
.wingate-course-layout .panel-head h2 {
	margin: 0;
	font-family: "Cinzel", serif;
	font-size: 22px;
}
.wingate-course-layout .panel-head span {
	font-size: 10px;
	font-weight: 700;
	letter-spacing: 0.16em;
	text-transform: uppercase;
	color: #7a88a2;
}
.wingate-course-layout .panel-search input {
	width: 100%;
	border: 1px solid rgba(14, 27, 61, 0.15);
	border-radius: 10px;
	padding: 10px 12px;
	font-size: 14px;
	outline: none;
	margin-bottom: 10px;
}
.wingate-course-layout .panel-search input:focus {
	border-color: #0e1b3d;
	box-shadow: 0 0 0 2px rgba(14, 27, 61, 0.12);
}
.wingate-course-layout .hole-list {
	list-style: none;
	margin: 0;
	padding: 0;
	max-height: calc(72vh + 8px);
	overflow: auto;
	display: grid;
	gap: 8px;
}
.wingate-course-layout .hole-row {
	width: 100%;
	text-align: left;
	border: 1px solid rgba(14, 27, 61, 0.12);
	border-radius: 12px;
	background: #f9fafc;
	padding: 10px 11px;
	display: grid;
	grid-template-columns: auto 1fr auto;
	gap: 8px;
	align-items: center;
	cursor: pointer;
	transition: all .2s ease;
}
.wingate-course-layout .hole-row:hover {
	border-color: #0e1b3d;
	background: rgba(14, 27, 61, 0.04);
}
.wingate-course-layout .hole-row.active {
	background: #0e1b3d;
	border-color: #0e1b3d;
	color: #fff;
}
.wingate-course-layout .hole-badge {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 28px;
	height: 28px;
	border-radius: 999px;
	background: #ffcc00;
	color: #0e1b3d;
	font-size: 12px;
	font-weight: 700;
}
.wingate-course-layout .hole-meta strong {
	display: block;
	font-size: 13px;
}
.wingate-course-layout .hole-meta span {
	display: block;
	font-size: 11px;
	opacity: .8;
}
.wingate-course-layout .hole-dist {
	font-size: 11px;
	font-weight: 700;
	letter-spacing: 0.08em;
	text-transform: uppercase;
}
.wingate-course-layout .layout-map-wrap {
	padding: 12px;
}
.wingate-course-layout .map-toolbar {
	display: flex;
	flex-wrap: wrap;
	gap: 8px 20px;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 8px;
	padding: 4px 4px 8px;
}
.wingate-course-layout .map-toolbar h3 {
	margin: 0;
	font-family: "Cinzel", serif;
	font-size: 24px;
}
.wingate-course-layout .map-toolbar p {
	margin: 2px 0 0;
	font-size: 12px;
	color: #657596;
}
.wingate-course-layout .map-legend {
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	font-size: 10px;
	font-weight: 700;
	letter-spacing: 0.12em;
	text-transform: uppercase;
	color: #657596; align-items: center;
}
.wingate-course-layout .map-legend span {
	display: inline-flex;
	align-items: center;
	gap: 6px;
}
.wingate-course-layout .legend {
	width: 10px;
	height: 10px;
	border-radius: 999px;
	display: inline-block;
}
.wingate-course-layout .legend.tee { background: #0e1b3d; }
.wingate-course-layout .legend.green { background: #2b8a3e; }
.wingate-course-layout .legend.fairway { background: #ff7a00; }
.wingate-course-layout .layout-map {
	height: 72vh;
	min-height: 520px;
	border-radius: 14px;
	overflow: hidden;
	border: 1px solid rgba(14, 27, 61, 0.12);
}
.wingate-hole-popup h4 {
	margin: 0;
	font-family: "Cinzel", serif;
	font-size: 18px;
}
.wingate-hole-popup {
	min-width: 190px;
	color: #243455;
}
.wingate-hole-popup-head {
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	gap: 12px;
	margin-bottom: 10px;
}
.wingate-hole-popup-kicker {
	display: block;
	margin-bottom: 2px;
	font-size: 10px;
	font-weight: 700;
	letter-spacing: 0.16em;
	text-transform: uppercase;
	color: #7a88a2;
}
.wingate-hole-popup-metrics {
	display: flex;
	flex-wrap: wrap;
	gap: 6px;
	margin-bottom: 10px;
}
.wingate-hole-popup-pill {
	display: inline-flex;
	align-items: center;
	padding: 5px 9px;
	border-radius: 999px;
	background: #f2f5fb;
	border: 1px solid rgba(14, 27, 61, 0.1);
	font-size: 10px;
	font-weight: 700;
	letter-spacing: 0.12em;
	text-transform: uppercase;
	color: #5e6d8b;
}
.wingate-hole-popup-pill strong {
	margin-left: 5px;
	color: #0e1b3d;
}
.wingate-hole-popup-pill-accent {
	background: rgba(255, 204, 0, 0.16);
	border-color: rgba(255, 204, 0, 0.4);
	color: #7b5d00;
}
.wingate-hole-popup-copy {
	margin: 0;
	font-size: 13px;
	line-height: 1.5;
	color: #4a5a79;
}
.wingate-hole-popup .edit-hole-btn {
	display: inline-flex;
	margin-top: 10px;
	font-size: 11px;
	font-weight: 700;
	color: #0e1b3d;
	text-decoration: underline;
}
.wingate-course-layout .hole-chip {
	background: rgba(14, 27, 61, 0.9);
	border: 1px solid rgba(255, 255, 255, 0.85);
	border-radius: 999px;
	box-shadow: 0 10px 20px -14px rgba(14, 27, 61, 0.95);
	color: #fff;
	font-size: 11px;
	font-weight: 700;
	letter-spacing: 0.08em;
	padding: 4px 8px;
	text-transform: uppercase;
	white-space: nowrap;
}
.wingate-course-layout .hole-chip.hole-chip-green {
	background: rgba(43, 138, 62, 0.92);
}
.wingate-course-layout .hole-chip.hole-chip-hole {
	background: rgba(255, 204, 0, 0.95);
	color: #0e1b3d;
}
.wingate-course-layout .map-expand-btn {
	display: inline-flex;
	align-items: center;
	gap: 10px;
	margin-left: 20px;
	padding: 10px 22px;
	background: #0e1b3d;
	color: #fff;
	border: 1px solid rgba(255, 255, 255, 0.1);
	border-radius: 14px;
	font-family: inherit;
	font-size: 11px;
	font-weight: 800;
	letter-spacing: 0.14em;
	text-transform: uppercase;
	cursor: pointer;
	transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	box-shadow: 0 12px 24px -8px rgba(14, 27, 61, 0.4);
	white-space: nowrap;
}
.wingate-course-layout .map-expand-btn:hover {
	background: #ffcc00;
	color: #0e1b3d;
	transform: translateY(-3px) scale(1.02);
	box-shadow: 0 15px 30px -10px rgba(255, 204, 0, 0.5);
	border-color: rgba(14, 27, 61, 0.1);
}
.wingate-course-layout .map-expand-btn:active {
	transform: translateY(-1px) scale(0.98);
}
.wingate-course-layout .map-expand-btn svg {
	transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.wingate-course-layout .map-fullscreen-close {
	position: absolute;
	top: 50%;
	right: 18px;
	z-index: 1100;
	display: none;
	width: 44px;
	height: 44px;
	border-radius: 999px;
	border: 1px solid rgba(14, 27, 61, 0.18);
	background: rgba(255, 204, 0, 0.95);
	backdrop-filter: blur(6px);
	color: #0e1b3d;
	font-size: 34px;
	line-height: 1;
	cursor: pointer;
	transform: translateY(-50%);
	transition: background-color .2s ease, color .2s ease, border-color .2s ease, transform .2s ease;
}
.wingate-course-layout .map-fullscreen-close:hover {
	background: rgba(14, 27, 61, 0.96);
	border-color: rgba(255, 255, 255, 0.3);
	color: #fff;
	transform: translateY(-50%) scale(1.04);
}
.wingate-course-layout .map-hole-selector {
	position: absolute;
	left: 20px;
	bottom: 24px;
	z-index: 1050;
	display: none;
	width: min(330px, calc(100% - 96px));
	padding: 16px;
	border-radius: 20px;
	background: linear-gradient(135deg, rgba(255, 255, 255, 0.98), rgba(245, 248, 252, 0.94));
	border: 1px solid rgba(14, 27, 61, 0.12);
	box-shadow: 0 28px 55px -34px rgba(14, 27, 61, 0.65);
	backdrop-filter: blur(12px);
}
.wingate-course-layout .map-hole-selector-kicker {
	display: block;
	margin-bottom: 8px;
	font-size: 10px;
	font-weight: 700;
	letter-spacing: 0.18em;
	text-transform: uppercase;
	color: #7a88a2;
}
.wingate-course-layout .map-hole-selector-head {
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	gap: 12px;
	margin-bottom: 14px;
}
.wingate-course-layout .map-hole-selector-label {
	margin: 0;
	font-family: "Cinzel", serif;
	font-size: 26px;
	line-height: 1;
	color: #0e1b3d;
}
.wingate-course-layout .map-hole-selector-meta {
	margin: 6px 0 0;
	font-size: 12px;
	color: #627290;
}
.wingate-course-layout .map-hole-selector-chip {
	display: inline-flex;
	align-items: center;
	padding: 6px 10px;
	border-radius: 999px;
	background: rgba(255, 204, 0, 0.18);
	border: 1px solid rgba(255, 204, 0, 0.35);
	font-size: 10px;
	font-weight: 700;
	letter-spacing: 0.12em;
	text-transform: uppercase;
	color: #7b5d00;
	white-space: nowrap;
}
.wingate-course-layout .map-hole-selector-controls {
	display: grid;
	grid-template-columns: auto 1fr auto;
	gap: 10px;
	align-items: center;
}
.wingate-course-layout .map-hole-selector-btn {
	border: 1px solid rgba(14, 27, 61, 0.12);
	background: #0e1b3d;
	color: #fff;
	border-radius: 999px;
	padding: 10px 14px;
	font-size: 11px;
	font-weight: 700;
	letter-spacing: 0.12em;
	text-transform: uppercase;
	cursor: pointer;
	transition: transform .2s ease, background-color .2s ease, color .2s ease;
}
.wingate-course-layout .map-hole-selector-btn:hover {
	background: #ffcc00;
	color: #0e1b3d;
	transform: translateY(-1px);
}
.wingate-course-layout .map-hole-selector-select-wrap {
	position: relative;
}
.wingate-course-layout .map-hole-selector-select-wrap::after {
	content: "";
	position: absolute;
	top: 50%;
	right: 14px;
	width: 9px;
	height: 9px;
	border-right: 2px solid #0e1b3d;
	border-bottom: 2px solid #0e1b3d;
	transform: translateY(-65%) rotate(45deg);
	pointer-events: none;
}
.wingate-course-layout .map-hole-selector-select {
	width: 100%;
	appearance: none;
	border: 1px solid rgba(14, 27, 61, 0.12);
	background: #fff;
	color: #0e1b3d;
	border-radius: 14px;
	padding: 12px 36px 12px 14px;
	font-size: 13px;
	font-weight: 700;
	letter-spacing: 0.04em;
	cursor: pointer;
	outline: none;
}
.wingate-course-layout .map-hole-selector-select:focus {
	border-color: #0e1b3d;
	box-shadow: 0 0 0 3px rgba(14, 27, 61, 0.08);
}
.wingate-course-layout .map-active-hole-card {
	position: absolute;
	top: 92px;
	left: 50%;
	z-index: 1050;
	display: none;
	width: min(360px, calc(100% - 48px));
	padding: 16px 18px;
	border-radius: 18px;
	background: rgba(255, 255, 255, 0.96);
	border: 1px solid rgba(14, 27, 61, 0.12);
	box-shadow: 0 24px 50px -30px rgba(14, 27, 61, 0.55);
	backdrop-filter: blur(10px);
	transform: translateX(-50%);
}
.wingate-course-layout .map-active-hole-card::after {
	content: "";
	position: absolute;
	left: 50%;
	bottom: -12px;
	width: 18px;
	height: 18px;
	background: rgba(255, 255, 255, 0.96);
	border-right: 1px solid rgba(14, 27, 61, 0.08);
	border-bottom: 1px solid rgba(14, 27, 61, 0.08);
	transform: translateX(-50%) rotate(45deg);
}
.wingate-course-layout .map-active-hole-card.is-visible {
	display: block;
}
.wingate-course-layout .map-active-hole-kicker {
	display: block;
	margin-bottom: 2px;
	font-size: 10px;
	font-weight: 700;
	letter-spacing: 0.16em;
	text-transform: uppercase;
	color: #7a88a2;
}
.wingate-course-layout .map-active-hole-head {
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	gap: 12px;
}
.wingate-course-layout .map-active-hole-title {
	margin: 0;
	font-family: "Cinzel", serif;
	font-size: 28px;
	line-height: 1;
	color: #0e1b3d;
}
.wingate-course-layout .map-active-hole-pill-row {
	display: flex;
	flex-wrap: wrap;
	gap: 6px;
	margin-top: 12px;
}
.wingate-course-layout .map-active-hole-pill {
	display: inline-flex;
	align-items: center;
	gap: 6px;
	padding: 6px 10px;
	border-radius: 999px;
	background: #eff3fb;
	border: 1px solid rgba(14, 27, 61, 0.08);
	font-size: 10px;
	font-weight: 700;
	letter-spacing: 0.12em;
	text-transform: uppercase;
	color: #5e6d8b;
}
.wingate-course-layout .map-active-hole-pill strong {
	color: #0e1b3d;
}
.wingate-course-layout .map-active-hole-pill-accent {
	background: rgba(255, 204, 0, 0.18);
	border-color: rgba(255, 204, 0, 0.35);
	color: #7b5d00;
}
.wingate-course-layout .map-active-hole-copy {
	margin: 12px 0 0;
	font-size: 14px;
	line-height: 1.55;
	color: #4a5a79;
}
.wingate-course-layout .map-hole-selector {
	position: absolute;
	left: 20px;
	bottom: 24px;
	z-index: 1050;
	display: none;
	width: min(330px, calc(100% - 96px));
	padding: 16px;
	border-radius: 20px;
	background:
		linear-gradient(135deg, rgba(255, 255, 255, 0.98), rgba(245, 248, 252, 0.94));
	border: 1px solid rgba(14, 27, 61, 0.12);
	box-shadow: 0 28px 55px -34px rgba(14, 27, 61, 0.65);
	backdrop-filter: blur(12px);
}
.wingate-course-layout .map-hole-selector-kicker {
	display: block;
	margin-bottom: 8px;
	font-size: 10px;
	font-weight: 700;
	letter-spacing: 0.18em;
	text-transform: uppercase;
	color: #7a88a2;
}
.wingate-course-layout .map-hole-selector-head {
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	gap: 12px;
	margin-bottom: 14px;
}
.wingate-course-layout .map-hole-selector-label {
	margin: 0;
	font-family: "Cinzel", serif;
	font-size: 26px;
	line-height: 1;
	color: #0e1b3d;
}
.wingate-course-layout .map-hole-selector-meta {
	margin: 6px 0 0;
	font-size: 12px;
	color: #627290;
}
.wingate-course-layout .map-hole-selector-chip {
	display: inline-flex;
	align-items: center;
	padding: 6px 10px;
	border-radius: 999px;
	background: rgba(255, 204, 0, 0.18);
	border: 1px solid rgba(255, 204, 0, 0.35);
	font-size: 10px;
	font-weight: 700;
	letter-spacing: 0.12em;
	text-transform: uppercase;
	color: #7b5d00;
	white-space: nowrap;
}
.wingate-course-layout .map-hole-selector-controls {
	display: grid;
	grid-template-columns: auto 1fr auto;
	gap: 10px;
	align-items: center;
}
.wingate-course-layout .map-hole-selector-btn {
	border: 1px solid rgba(14, 27, 61, 0.12);
	background: #0e1b3d;
	color: #fff;
	border-radius: 999px;
	padding: 10px 14px;
	font-size: 11px;
	font-weight: 700;
	letter-spacing: 0.12em;
	text-transform: uppercase;
	cursor: pointer;
	transition: transform .2s ease, background-color .2s ease, color .2s ease;
}
.wingate-course-layout .map-hole-selector-btn:hover {
	background: #ffcc00;
	color: #0e1b3d;
	transform: translateY(-1px);
}
.wingate-course-layout .map-hole-selector-select-wrap {
	position: relative;
}
.wingate-course-layout .map-hole-selector-select-wrap::after {
	content: "";
	position: absolute;
	top: 50%;
	right: 14px;
	width: 9px;
	height: 9px;
	border-right: 2px solid #0e1b3d;
	border-bottom: 2px solid #0e1b3d;
	transform: translateY(-65%) rotate(45deg);
	pointer-events: none;
}
.wingate-course-layout .map-hole-selector-select {
	width: 100%;
	appearance: none;
	border: 1px solid rgba(14, 27, 61, 0.12);
	background: #fff;
	color: #0e1b3d;
	border-radius: 14px;
	padding: 12px 36px 12px 14px;
	font-size: 13px;
	font-weight: 700;
	letter-spacing: 0.04em;
	cursor: pointer;
	outline: none;
}
.wingate-course-layout .map-hole-selector-select:focus {
	border-color: #0e1b3d;
	box-shadow: 0 0 0 3px rgba(14, 27, 61, 0.08);
}
.wingate-course-layout.fullscreen-map .map-expand-btn {
	background: #fff;
	color: #0e1b3d;
	box-shadow: 0 12px 24px -8px rgba(0, 0, 0, 0.1);
}
.wingate-course-layout.fullscreen-map .map-expand-btn:hover {
	background: #ffcc00;
}
.wingate-course-layout.fullscreen-map .map-expand-btn svg {
	transform: rotate(180deg);
}

/* Fullscreen Styles */
.wingate-course-layout.fullscreen-map {
	padding-bottom: 0;
	overflow: hidden;
}
.wingate-map-fullscreen-page {
	overflow: hidden;
}
.wingate-map-fullscreen-page header,
.wingate-map-fullscreen-page footer {
	display: none !important;
}
.wingate-map-fullscreen-page #wpadminbar {
	display: none !important;
}
.wingate-map-fullscreen-page {
	margin-top: 0 !important;
}
.wingate-map-fullscreen-page .wp-site-blocks {
	padding-top: 0 !important;
	padding-bottom: 0 !important;
}
.wingate-course-layout.fullscreen-map .layout-hero {
	display: none;
}
.wingate-course-layout.fullscreen-map .layout-panel {
	display: none;
}
.wingate-course-layout.fullscreen-map .layout-shell {
	grid-template-columns: 1fr;
	padding: 0;
	max-width: none;
	height: 100vh;
	gap: 0;
	margin: 0;
}
.wingate-course-layout.fullscreen-map .layout-map-wrap {
	border-radius: 0;
	border: none;
	height: 100vh;
	padding: 0;
	display: flex;
	flex-direction: column;
	position: relative;
}
.wingate-course-layout.fullscreen-map .map-toolbar {
	position: absolute;
	top: 20px;
	left: 20px;
	right: 20px;
	z-index: 1000;
	background: rgba(255, 255, 255, 0.95);
	padding: 12px 20px;
	border-radius: 14px;
	box-shadow: 0 10px 30px rgba(0,0,0,0.15);
	backdrop-filter: blur(8px);
}
.wingate-course-layout.fullscreen-map .layout-map {
	height: 100vh;
	border-radius: 0;
	border: none;
}
.wingate-course-layout.fullscreen-map .map-hole-selector {
	display: block;
}
.wingate-course-layout.fullscreen-map .map-active-hole-card {
	display: block;
}
.wingate-course-layout.fullscreen-map .map-hole-selector {
	display: block;
}
.wingate-course-layout.fullscreen-map .map-fullscreen-close {
	display: inline-flex;
	align-items: center;
	justify-content: center;
}

@media (max-width: 1000px) {
	.wingate-course-layout .layout-shell {
		grid-template-columns: 1fr;
	}
	.wingate-course-layout .hole-list {
		max-height: 300px;
	}
	.wingate-course-layout .layout-map {
		height: 64vh;
		min-height: 420px;
	}
	.wingate-course-layout .map-hole-selector {
		left: 16px;
		right: 16px;
		bottom: 16px;
		width: auto;
	}
	.wingate-course-layout .map-hole-selector-controls {
		grid-template-columns: 1fr;
	}
	.wingate-course-layout .map-hole-selector-btn {
		width: 100%;
	}
}
</style>

<link
	rel="stylesheet"
	href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
	integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
	crossorigin=""
/>
<script
	src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
	integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
	crossorigin=""
	defer
></script>
<script>
<?php
// Inject dynamic hole data from admin
$admin_settings = get_option('wingate_hole_by_hole_settings', []);
$admin_holes = isset($admin_settings['holes']) ? $admin_settings['holes'] : [];
$dynamic_paths = [];
$hole_content = [];
foreach ($admin_holes as $hole_data) {
    if (!empty($hole_data['path']) && is_array($hole_data['path'])) {
        $dynamic_paths[$hole_data['hole']] = $hole_data['path'];
    }
	$hole_number = isset($hole_data['hole']) ? (int) $hole_data['hole'] : 0;
	if ($hole_number > 0) {
		$hole_content[$hole_number] = [
			'description' => isset($hole_data['description']) ? wp_kses_post($hole_data['description']) : '',
			'image' => isset($hole_data['image']) ? esc_url_raw($hole_data['image']) : '',
		];
	}
}
echo 'const dynamicPaths = ' . wp_json_encode($dynamic_paths) . ';';
echo 'const holeContent = ' . wp_json_encode($hole_content) . ';';

$scorecard = get_option('wingate_scorecard', []);
$scorecard_defaults = function_exists('wingate_get_scorecard_defaults') ? wingate_get_scorecard_defaults() : ['out' => [], 'in' => []];
$merged_scorecard = wp_parse_args($scorecard, $scorecard_defaults);
$scorecard_lookup = [];
foreach (['out', 'in'] as $side) {
	if (empty($merged_scorecard[$side]) || !is_array($merged_scorecard[$side])) {
		continue;
	}
	foreach ($merged_scorecard[$side] as $row) {
		$hole_number = isset($row['hole']) ? (int) $row['hole'] : 0;
		if ($hole_number > 0) {
			$scorecard_lookup[$hole_number] = [
				'par' => isset($row['par']) ? (int) $row['par'] : 0,
				'white' => isset($row['white']) ? (int) $row['white'] : 0,
				'blue' => isset($row['blue']) ? (int) $row['blue'] : 0,
				'red' => isset($row['red']) ? (int) $row['red'] : 0,
				'si' => isset($row['si']) ? (int) $row['si'] : 0,
			];
		}
	}
}
echo 'const scorecardLookup = ' . wp_json_encode($scorecard_lookup) . ';';

$can_edit = current_user_can('manage_options') ? 'true' : 'false';
echo "const canEditHoles = {$can_edit};";
?>

document.addEventListener('DOMContentLoaded', function () {
	const mapRoot = document.getElementById('course-layout-map');
	const listRoot = document.getElementById('hole-list');
	const searchRoot = document.getElementById('hole-search');
	const detailTitle = document.getElementById('hole-detail-title');
	const detailSubtitle = document.getElementById('hole-detail-subtitle');
	const detailBadge = document.getElementById('hole-detail-badge');
	const detailWhite = document.getElementById('hole-detail-white');
	const detailBlue = document.getElementById('hole-detail-blue');
	const detailRed = document.getElementById('hole-detail-red');
	const detailIndex = document.getElementById('hole-detail-index');
	const detailDescription = document.getElementById('hole-detail-description');
	const detailEdit = document.getElementById('hole-detail-edit');
	const mapActiveHoleCard = document.getElementById('map-active-hole-card');
	const mapHoleSelector = document.getElementById('map-hole-selector');
	const mapHoleSelectorLabel = document.getElementById('map-hole-selector-label');
	const mapHoleSelectorMeta = document.getElementById('map-hole-selector-meta');
	const mapHoleSelectorChip = document.getElementById('map-hole-selector-chip');
	const mapHoleSelect = document.getElementById('map-hole-select');
	const mapHolePrev = document.getElementById('map-hole-prev');
	const mapHoleNext = document.getElementById('map-hole-next');
	if (!mapRoot || !listRoot || !window.L) return;

	const center = [-17.721374, 31.07539];
	const clubBounds = L.latLngBounds(
		[-17.732858, 31.06702],
		[-17.70989, 31.08376]
	);
	const map = L.map(mapRoot, {
		zoomControl: true,
		scrollWheelZoom: true,
		maxZoom: 19,
		minZoom: 14,
		maxBounds: clubBounds,
		maxBoundsViscosity: 1.0,
	}).setView(center, 14);

	const satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
		maxZoom: 19,
		attribution: 'Tiles &copy; Esri',
	});
	satelliteLayer.addTo(map);
	map.fitBounds(clubBounds, { padding: [20, 20] });

	const holes = [
		{
			n: 1,
			par: 4,
			m: 365,
			tee: [-17.72016, 31.07537],
			green: [-17.71892, 31.07543],
			path: [
				[-17.72016, 31.07537],
				[-17.71978, 31.07536],
				[-17.71934, 31.07539],
				[-17.71892, 31.07543],
			],
			label: [-17.71956, 31.07548],
			teeLabel: [-17.72012, 31.0755],
			greenLabel: [-17.7189, 31.07556],
		},
		{
			n: 2,
			par: 3,
			m: 175,
			tee: [-17.72142, 31.07702],
			green: [-17.71992, 31.07685],
			path: [
				[-17.72142, 31.07702],
				[-17.7208, 31.07695],
				[-17.7204, 31.07690],
				[-17.71992, 31.07685],
			],
		},
		{
			n: 3,
			par: 5,
			m: 505,
			tee: [-17.72185, 31.07820],
			green: [-17.72140, 31.07590],
			path: [
				[-17.72185, 31.07820],
				[-17.72195, 31.07780],
				[-17.72200, 31.07730],
				[-17.72190, 31.07680],
				[-17.72170, 31.07640],
				[-17.72140, 31.07590],
			],
		},
		{
			n: 4,
			par: 4,
			m: 390,
			tee: [-17.71880, 31.07680],
			green: [-17.71940, 31.07720],
			path: [
				[-17.71880, 31.07680],
				[-17.71895, 31.07690],
				[-17.71915, 31.07705],
				[-17.71940, 31.07720],
			],
		},
		{
			n: 5,
			par: 4,
			m: 375,
			tee: [-17.71950, 31.07750],
			green: [-17.72060, 31.07740],
			path: [
				[-17.71950, 31.07750],
				[-17.71980, 31.07748],
				[-17.72020, 31.07744],
				[-17.72060, 31.07740],
			],
		},
		{
			n: 6,
			par: 4,
			m: 360,
			tee: [-17.72280, 31.07550],
			green: [-17.72190, 31.07530],
			path: [
				[-17.72280, 31.07550],
				[-17.72255, 31.07542],
				[-17.72220, 31.07535],
				[-17.72190, 31.07530],
			],
		},
		{
			n: 7,
			par: 3,
			m: 160,
			tee: [-17.72240, 31.07480],
			green: [-17.72190, 31.07460],
			path: [
				[-17.72240, 31.07480],
				[-17.72218, 31.07472],
				[-17.72190, 31.07460],
			],
		},
		{
			n: 8,
			par: 5,
			m: 520,
			tee: [-17.72220, 31.07420],
			green: [-17.72100, 31.07400],
			path: [
				[-17.72220, 31.07420],
				[-17.72195, 31.07415],
				[-17.72165, 31.07410],
				[-17.72135, 31.07405],
				[-17.72100, 31.07400],
			],
		},
		{
			n: 9,
			par: 4,
			m: 385,
			tee: [-17.72012, 31.07474],
			green: [-17.71898, 31.07486],
			path: [
				[-17.72012, 31.07474],
				[-17.71972, 31.07474],
				[-17.7193, 31.07478],
				[-17.71898, 31.07486],
			],
			label: [-17.7195, 31.07489],
			teeLabel: [-17.7201, 31.07487],
			greenLabel: [-17.71895, 31.07498],
		},
		{ n: 10, par: 4, y: 0.0019, x: 0.0007, dy: 0.00085, dx: 0.00015, m: 370 },
		{ n: 11, par: 3, y: 0.0019, x: 0.0013, dy: 0.00055, dx: 0.00025, m: 185 },
		{ n: 12, par: 4, y: 0.0012, x: 0.0018, dy: -0.00095, dx: 0.0002, m: 380 },
		{ n: 13, par: 4, y: 0.0002, x: 0.0019, dy: -0.0009, dx: -0.0002, m: 350 },
		{ n: 14, par: 5, y: -0.0008, x: 0.0014, dy: -0.00115, dx: -0.00045, m: 535 },
		{ n: 15, par: 4, y: -0.0004, x: 0.0008, dy: -0.0009, dx: 0.0002, m: 400 },
		{ n: 16, par: 4, y: -0.0011, x: 0.0004, dy: -0.0008, dx: 0.0004, m: 395 },
		{ n: 17, par: 4, y: -0.0001, x: -0.0002, dy: -0.0010, dx: -0.00025, m: 365 },
		{
			n: 18,
			par: 4,
			m: 410,
			tee: [-17.7201, 31.07596],
			green: [-17.71897, 31.0759],
			path: [
				[-17.7201, 31.07596],
				[-17.71972, 31.07595],
				[-17.71934, 31.07592],
				[-17.71897, 31.0759],
			],
			label: [-17.71953, 31.07602],
			teeLabel: [-17.72008, 31.07609],
			greenLabel: [-17.71895, 31.07602],
		},
	].map((hole) => {
		// Use dynamic path from admin if available
		const hasDynamicPath = dynamicPaths[hole.n] && dynamicPaths[hole.n].length >= 2;
		
		if (hasDynamicPath || (Array.isArray(hole.tee) && Array.isArray(hole.green))) {
			
			const customPath = hasDynamicPath ? dynamicPaths[hole.n] : hole.path;
			const customTee = hasDynamicPath ? dynamicPaths[hole.n][0] : hole.tee;
			const customGreen = hasDynamicPath ? dynamicPaths[hole.n][dynamicPaths[hole.n].length - 1] : hole.green;
			
			return {
				...hole,
				tee: customTee,
				green: customGreen,
				path: Array.isArray(customPath) && customPath.length >= 2 ? customPath : [customTee, customGreen],
				label: Array.isArray(hole.label) && !hasDynamicPath ? hole.label : [
					(customTee[0] + customGreen[0]) / 2,
					(customTee[1] + customGreen[1]) / 2,
				],
				teeLabel: Array.isArray(hole.teeLabel) && !hasDynamicPath ? hole.teeLabel : [customTee[0], customTee[1] + 0.00008],
				greenLabel: Array.isArray(hole.greenLabel) && !hasDynamicPath ? hole.greenLabel : [customGreen[0], customGreen[1] + 0.00008],
			};
		}

		const tee = [center[0] + hole.y, center[1] + hole.x];
		const green = [tee[0] + hole.dy, tee[1] + hole.dx];
		const midA = [tee[0] + (hole.dy * 0.33) + (hole.n % 2 ? 0.00011 : -0.0001), tee[1] + (hole.dx * 0.33)];
		const midB = [tee[0] + (hole.dy * 0.67), tee[1] + (hole.dx * 0.67) + (hole.n % 2 ? -0.00009 : 0.00011)];

		return {
			...hole,
			tee: tee,
			green: green,
			path: [tee, midA, midB, green],
			label: [
				(tee[0] + green[0]) / 2,
				(tee[1] + green[1]) / 2,
			],
			teeLabel: [tee[0], tee[1] + 0.00008],
			greenLabel: [green[0], green[1] + 0.00008],
		};
	});

	const layers = new Map();
	let activeHole = null;

	function formatDistance(value, fallback) {
		if (Number.isFinite(value) && value > 0) {
			return `${value}m`;
		}
		if (Number.isFinite(fallback) && fallback > 0) {
			return `${fallback}m`;
		}
		return 'N/A';
	}

	function updateHoleDetail(hole) {
		if (!hole) {
			return;
		}

		const scorecard = scorecardLookup[hole.n] || {};
		const savedContent = holeContent[hole.n] || {};
		const par = scorecard.par || hole.par || 0;
		const white = scorecard.white || hole.m || 0;
		const blue = scorecard.blue || 0;
		const red = scorecard.red || 0;
		const strokeIndex = scorecard.si || 'N/A';
		const description = savedContent.description && savedContent.description.trim()
			? savedContent.description.trim()
			: 'Use the map to study the route from tee to green before you play this hole.';

		if (detailTitle) {
			detailTitle.textContent = `Hole ${hole.n}`;
		}
		if (detailSubtitle) {
			detailSubtitle.textContent = hole.n <= 9 ? 'Front nine routing and playing notes.' : 'Back nine routing and playing notes.';
		}
		if (detailBadge) {
			detailBadge.textContent = par ? `Par ${par}` : 'Hole details';
		}
		if (detailWhite) {
			detailWhite.textContent = formatDistance(white, hole.m);
		}
		if (detailBlue) {
			detailBlue.textContent = formatDistance(blue, 0);
		}
		if (detailRed) {
			detailRed.textContent = formatDistance(red, 0);
		}
		if (detailIndex) {
			detailIndex.textContent = String(strokeIndex);
		}
		if (detailDescription) {
			detailDescription.textContent = description.replace(/\s+/g, ' ').trim();
		}
		if (detailEdit) {
			detailEdit.href = `/wp-admin/admin.php?page=wingate-hole-by-hole&hole=${hole.n}`;
			detailEdit.hidden = !canEditHoles;
		}

		if (mapActiveHoleCard) {
			mapActiveHoleCard.innerHTML = `
				<span class="map-active-hole-kicker">Selected Hole</span>
				<div class="map-active-hole-head">
					<h3 class="map-active-hole-title">Hole ${hole.n}</h3>
					<span class="map-active-hole-pill map-active-hole-pill-accent">SI <strong>${strokeIndex}</strong></span>
				</div>
				<div class="map-active-hole-pill-row">
					<span class="map-active-hole-pill">Par <strong>${par || 'N/A'}</strong></span>
					<span class="map-active-hole-pill">White <strong>${formatDistance(white, hole.m)}</strong></span>
				</div>
				<p class="map-active-hole-copy">${description.replace(/\s+/g, ' ').trim()}</p>
			`;
			mapActiveHoleCard.classList.toggle(
				'is-visible',
				document.body.classList.contains('wingate-map-fullscreen-page')
			);
		}

		if (mapHoleSelector) {
			if (mapHoleSelectorLabel) {
				mapHoleSelectorLabel.textContent = `Hole ${hole.n}`;
			}
			if (mapHoleSelectorMeta) {
				mapHoleSelectorMeta.textContent = hole.n <= 9 ? 'Front nine routing' : 'Back nine routing';
			}
			if (mapHoleSelectorChip) {
				mapHoleSelectorChip.textContent = par ? `Par ${par}` : 'Hole details';
			}
			if (mapHoleSelect) {
				mapHoleSelect.value = String(hole.n);
			}
		}
	}

	function createChip(position, text, className) {
		return L.marker(position, {
			interactive: false,
			icon: L.divIcon({
				className: '',
				html: `<span class="hole-chip ${className}">${text}</span>`,
				iconSize: null,
			}),
		});
	}

	function getPopupOptions() {
		const isFullscreen = document.body.classList.contains('wingate-map-fullscreen-page');
		return {
			offset: L.point(0, -18),
			autoPan: true,
			keepInView: true,
			maxWidth: 290,
			autoPanPaddingTopLeft: isFullscreen ? L.point(36, 140) : L.point(32, 96),
			autoPanPaddingBottomRight: isFullscreen ? L.point(36, 36) : L.point(32, 32),
		};
	}

	function setActive(holeNumber) {
		activeHole = holeNumber;
		document.querySelectorAll('.hole-row').forEach((btn) => {
			btn.classList.toggle('active', Number(btn.dataset.hole) === holeNumber);
		});
		layers.forEach((layer, n) => {
			layer.route.setStyle({
				color: n === holeNumber ? '#ffcc00' : '#ff7a00',
				weight: n === holeNumber ? 5 : 3,
				opacity: n === holeNumber ? 1 : 0.85,
			});
		});
		layers.forEach((entry, n) => {
			[entry.holeLabel, entry.teeLabel, entry.greenLabel].forEach((labelLayer) => {
				if (!labelLayer) {
					return;
				}
				if (n === holeNumber) {
					if (!map.hasLayer(labelLayer)) {
						labelLayer.addTo(map);
					}
				} else if (map.hasLayer(labelLayer)) {
					map.removeLayer(labelLayer);
				}
			});
		});
		const layer = layers.get(holeNumber);
		if (layer) {
			updateHoleDetail(layer.data);
			map.flyTo(layer.tee.getLatLng(), 18, { duration: 0.45 });
			map.fitBounds(layer.route.getBounds(), { padding: [60, 60], maxZoom: 18 });
			if (!document.body.classList.contains('wingate-map-fullscreen-page')) {
				layer.tee.openPopup();
			}
		}
	}

	holes.forEach((h) => {
		const route = L.polyline(h.path, {
			color: '#ff7a00',
			weight: 3,
			opacity: 0.85,
		}).addTo(map);

		const teeMarker = L.circleMarker(h.tee, {
			radius: 5,
			weight: 2,
			color: '#ffffff',
			fillColor: '#0e1b3d',
			fillOpacity: 1,
		}).addTo(map);

		const greenMarker = L.circleMarker(h.green, {
			radius: 6,
			weight: 2,
			color: '#ffffff',
			fillColor: '#2b8a3e',
			fillOpacity: 1,
		}).addTo(map);

		const holeLabel = createChip(h.label, `Hole ${h.n}`, 'hole-chip-hole');
		const teeLabel = createChip(h.teeLabel, 'Tee', '');
		const greenLabel = createChip(h.greenLabel, 'Green', 'hole-chip-green');

		const s = scorecardLookup[h.n] || {};
		const par = s.par || h.par || 0;
		const white = s.white || h.m || 0;
		const strokeIndex = s.si || 'N/A';
		const distStr = formatDistance(white, h.m);
		const savedContent = holeContent[h.n] || {};
		const popupCopy = savedContent.description && savedContent.description.trim()
			? savedContent.description.trim().replace(/\s+/g, ' ')
			: 'Study the routing from tee to green before you play this hole.';

		let popupHtml = `
			<div class="wingate-hole-popup">
				<div class="wingate-hole-popup-head">
					<div>
						<span class="wingate-hole-popup-kicker">Selected Hole</span>
						<h4>Hole ${h.n}</h4>
					</div>
					<span class="wingate-hole-popup-pill wingate-hole-popup-pill-accent">SI <strong>${strokeIndex}</strong></span>
				</div>
				<div class="wingate-hole-popup-metrics">
					<span class="wingate-hole-popup-pill">Par <strong>${par || 'N/A'}</strong></span>
					<span class="wingate-hole-popup-pill">White <strong>${distStr}</strong></span>
				</div>
				<p class="wingate-hole-popup-copy">${popupCopy}</p>
		`;
		if (canEditHoles) {
			popupHtml += `<a href="/wp-admin/admin.php?page=wingate-hole-by-hole&hole=${h.n}" class="edit-hole-btn" target="_blank">✏️ Edit Route</a>`;
		}
		popupHtml += `</div>`;
		
		teeMarker.bindPopup(popupHtml, getPopupOptions());
		greenMarker.bindPopup(popupHtml, getPopupOptions());
		teeMarker.on('click', () => setActive(h.n));
		greenMarker.on('click', () => setActive(h.n));
		route.on('click', () => setActive(h.n));

		layers.set(h.n, {
			route: route,
			tee: teeMarker,
			green: greenMarker,
			holeLabel: holeLabel,
			teeLabel: teeLabel,
			greenLabel: greenLabel,
			data: h,
		});
	});

	if (mapHoleSelect) {
		mapHoleSelect.innerHTML = holes.map((hole) => {
			const s = scorecardLookup[hole.n] || {};
			const par = s.par || hole.par || 0;
			return `<option value="${hole.n}">Hole ${hole.n}${par ? ` · Par ${par}` : ''}</option>`;
		}).join('');
		mapHoleSelect.addEventListener('change', (event) => {
			setActive(Number(event.target.value));
		});
	}

	if (mapHolePrev) {
		mapHolePrev.addEventListener('click', () => {
			const currentIndex = Math.max(holes.findIndex((hole) => hole.n === activeHole), 0);
			const nextIndex = currentIndex === 0 ? holes.length - 1 : currentIndex - 1;
			setActive(holes[nextIndex].n);
		});
	}

	if (mapHoleNext) {
		mapHoleNext.addEventListener('click', () => {
			const currentIndex = Math.max(holes.findIndex((hole) => hole.n === activeHole), 0);
			const nextIndex = currentIndex === holes.length - 1 ? 0 : currentIndex + 1;
			setActive(holes[nextIndex].n);
		});
	}

	function renderList(filter) {
		listRoot.innerHTML = '';
		const text = String(filter || '').trim();
		holes
			.filter((h) => !text || String(h.n).includes(text))
			.forEach((h) => {
				const li = document.createElement('li');
				const btn = document.createElement('button');
				btn.type = 'button';
				btn.className = 'hole-row';
				btn.dataset.hole = String(h.n);
				const s = scorecardLookup[h.n] || {};
				const par = s.par || h.par || 0;
				const white = s.white || h.m || 0;
				const distStr = formatDistance(white, h.m);

				btn.innerHTML = `
					<span class="hole-badge">${h.n}</span>
					<span class="hole-meta"><strong>Hole ${h.n}</strong><span>Par ${par}</span></span>
					<span class="hole-dist">${distStr}</span>
				`;
				btn.addEventListener('click', () => setActive(h.n));
				li.appendChild(btn);
				listRoot.appendChild(li);
			});
		if (activeHole) setActive(activeHole);
	}

	renderList('');
	searchRoot.addEventListener('input', (e) => renderList(e.target.value));
	// Fullscreen Toggle Logic
	const expandBtn = document.getElementById('map-expand-toggle');
	const closeFullscreenBtn = document.getElementById('map-fullscreen-close');
	const layoutWrapper = document.querySelector('.wingate-course-layout');

	if (expandBtn && layoutWrapper) {
		expandBtn.addEventListener('click', () => {
			layoutWrapper.classList.toggle('fullscreen-map');
			const isFullscreen = layoutWrapper.classList.contains('fullscreen-map');
			document.body.classList.toggle('wingate-map-fullscreen-page', isFullscreen);
			document.documentElement.classList.toggle('wingate-map-fullscreen-page', isFullscreen);
			map.closePopup();
			if (mapActiveHoleCard) {
				mapActiveHoleCard.classList.toggle('is-visible', isFullscreen);
			}
			
			// Update button text/icon if needed
			const btnText = expandBtn.querySelector('span');
			if (btnText) {
				btnText.textContent = isFullscreen ? 'Close View' : 'Full Page';
			}

			// Invalidate map size after CSS transition/repaint
			setTimeout(() => {
				map.invalidateSize({ animate: true });
				if (activeHole) {
					const layer = layers.get(activeHole);
					if (layer) {
						map.fitBounds(layer.route.getBounds(), { padding: [100, 100] });
						if (!isFullscreen) {
							layer.tee.openPopup();
						}
					}
				}
			}, 300);
		});

		if (closeFullscreenBtn) {
			closeFullscreenBtn.addEventListener('click', () => {
				if (layoutWrapper.classList.contains('fullscreen-map')) {
					expandBtn.click();
				}
			});
		}

		// ESC key to exit fullscreen
		document.addEventListener('keydown', (e) => {
			if (e.key === 'Escape' && layoutWrapper.classList.contains('fullscreen-map')) {
				expandBtn.click();
			}
		});
	}

	setActive(1);
});
</script>

<?php
get_footer();

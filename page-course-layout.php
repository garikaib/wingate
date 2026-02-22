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
			<div class="panel-note">
				<strong>Note:</strong> Coordinates can be refined with GPS-surveyed tee/green points for pin-point accuracy.
			</div>
		</aside>

		<div class="layout-map-wrap">
			<div class="map-toolbar">
				<div>
					<h3>Wingate Park Golf Course</h3>
					<p>Center: -17.72073, 31.07663</p>
				</div>
				<div class="map-legend">
					<span><i class="legend tee"></i>Tee</span>
					<span><i class="legend green"></i>Green</span>
					<span><i class="legend fairway"></i>Hole Route</span>
				</div>
			</div>
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
	grid-template-columns: 320px minmax(0, 1fr);
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
	max-height: 600px;
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
.wingate-course-layout .panel-note {
	margin-top: 10px;
	border: 1px dashed rgba(14, 27, 61, 0.18);
	background: rgba(255, 204, 0, 0.12);
	padding: 10px 11px;
	border-radius: 10px;
	font-size: 12px;
	color: #3d4d6f;
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
	color: #657596;
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
	margin: 0 0 4px;
	font-family: "Cinzel", serif;
	font-size: 18px;
}
.wingate-hole-popup p {
	margin: 0;
	font-size: 13px;
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
document.addEventListener('DOMContentLoaded', function () {
	const mapRoot = document.getElementById('course-layout-map');
	const listRoot = document.getElementById('hole-list');
	const searchRoot = document.getElementById('hole-search');
	if (!mapRoot || !listRoot || !window.L) return;

	const center = [-17.72073, 31.07663];
	const map = L.map(mapRoot, {
		zoomControl: true,
		scrollWheelZoom: true,
		maxZoom: 19,
		minZoom: 14,
	}).setView(center, 17);

	const streetLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: '&copy; OpenStreetMap contributors',
	});
	const satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
		maxZoom: 19,
		attribution: 'Tiles &copy; Esri',
	});
	satelliteLayer.addTo(map);
	L.control.layers(
		{
			Street: streetLayer,
			Satellite: satelliteLayer,
		},
		{},
		{ position: 'topright', collapsed: false }
	).addTo(map);

	const holes = [
		{ n: 1, par: 4, y: 0.0017, x: -0.0014, dy: 0.0009, dx: 0.00025, m: 365 },
		{ n: 2, par: 3, y: 0.0013, x: -0.0007, dy: 0.0006, dx: -0.0002, m: 175 },
		{ n: 3, par: 5, y: 0.0016, x: 0.0000, dy: 0.0011, dx: 0.0001, m: 505 },
		{ n: 4, par: 4, y: 0.0007, x: 0.0008, dy: -0.0006, dx: 0.0004, m: 390 },
		{ n: 5, par: 4, y: 0.0001, x: 0.0012, dy: 0.0009, dx: 0.00015, m: 375 },
		{ n: 6, par: 4, y: -0.0005, x: 0.0002, dy: -0.0011, dx: -0.0002, m: 360 },
		{ n: 7, par: 3, y: -0.0013, x: -0.0008, dy: -0.0005, dx: -0.00035, m: 160 },
		{ n: 8, par: 5, y: -0.0002, x: -0.0013, dy: 0.0012, dx: -0.00025, m: 520 },
		{ n: 9, par: 4, y: 0.0005, x: -0.0019, dy: 0.0009, dx: 0.0001, m: 385 },
		{ n: 10, par: 4, y: 0.0019, x: 0.0007, dy: 0.00085, dx: 0.00015, m: 370 },
		{ n: 11, par: 3, y: 0.0019, x: 0.0013, dy: 0.00055, dx: 0.00025, m: 185 },
		{ n: 12, par: 4, y: 0.0012, x: 0.0018, dy: -0.00095, dx: 0.0002, m: 380 },
		{ n: 13, par: 4, y: 0.0002, x: 0.0019, dy: -0.0009, dx: -0.0002, m: 350 },
		{ n: 14, par: 5, y: -0.0008, x: 0.0014, dy: -0.00115, dx: -0.00045, m: 535 },
		{ n: 15, par: 4, y: -0.0004, x: 0.0008, dy: -0.0009, dx: 0.0002, m: 400 },
		{ n: 16, par: 4, y: -0.0011, x: 0.0004, dy: -0.0008, dx: 0.0004, m: 395 },
		{ n: 17, par: 4, y: -0.0001, x: -0.0002, dy: -0.0010, dx: -0.00025, m: 365 },
		{ n: 18, par: 4, y: 0.0008, x: -0.0006, dy: 0.0010, dx: -0.0001, m: 410 },
	];

	const layers = new Map();
	let activeHole = null;

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
		const layer = layers.get(holeNumber);
		if (layer) {
			map.flyTo(layer.tee.getLatLng(), 18, { duration: 0.45 });
			map.fitBounds(layer.route.getBounds(), { padding: [60, 60], maxZoom: 18 });
			layer.tee.openPopup();
		}
	}

	holes.forEach((h) => {
		const tee = [center[0] + h.y, center[1] + h.x];
		const green = [tee[0] + h.dy, tee[1] + h.dx];
		const midA = [tee[0] + (h.dy * 0.33) + (h.n % 2 ? 0.00011 : -0.0001), tee[1] + (h.dx * 0.33)];
		const midB = [tee[0] + (h.dy * 0.67), tee[1] + (h.dx * 0.67) + (h.n % 2 ? -0.00009 : 0.00011)];
		const route = L.polyline([tee, midA, midB, green], {
			color: '#ff7a00',
			weight: 3,
			opacity: 0.85,
		}).addTo(map);

		const teeMarker = L.circleMarker(tee, {
			radius: 5,
			weight: 2,
			color: '#ffffff',
			fillColor: '#0e1b3d',
			fillOpacity: 1,
		}).addTo(map);

		const greenMarker = L.circleMarker(green, {
			radius: 6,
			weight: 2,
			color: '#ffffff',
			fillColor: '#2b8a3e',
			fillOpacity: 1,
		}).addTo(map);

		const popup = `<div class="wingate-hole-popup"><h4>Hole ${h.n}</h4><p>Par ${h.par} · ${h.m}m</p></div>`;
		teeMarker.bindPopup(popup);
		greenMarker.bindPopup(popup);
		teeMarker.on('click', () => setActive(h.n));
		greenMarker.on('click', () => setActive(h.n));
		route.on('click', () => setActive(h.n));

		layers.set(h.n, { route: route, tee: teeMarker, green: greenMarker, data: h });
	});

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
				btn.innerHTML = `
					<span class="hole-badge">${h.n}</span>
					<span class="hole-meta"><strong>Hole ${h.n}</strong><span>Par ${h.par}</span></span>
					<span class="hole-dist">${h.m}m</span>
				`;
				btn.addEventListener('click', () => setActive(h.n));
				li.appendChild(btn);
				listRoot.appendChild(li);
			});
		if (activeHole) setActive(activeHole);
	}

	renderList('');
	searchRoot.addEventListener('input', (e) => renderList(e.target.value));
	setActive(1);
});
</script>

<?php
get_footer();

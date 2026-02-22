import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function initClubHouseCtaEffects() {
	const sections = document.querySelectorAll('.wingate-clubhouse-cta');
	if (!sections.length) {
		return;
	}

	sections.forEach((section) => {
		if (section.dataset.gsapReady === '1') {
			return;
		}
		section.dataset.gsapReady = '1';

		const title = section.querySelector('.wingate-cta-title');
		const text = section.querySelector('.wingate-cta-copy');
		const button = section.querySelector('.wingate-cta-button .wp-block-button__link');
		const targets = [title, text, button].filter(Boolean);

		if (!targets.length) {
			return;
		}

		gsap.set(section, { autoAlpha: 0, y: 52, scale: 0.98 });
		gsap.set(title, { autoAlpha: 0, y: 56, rotateX: -18, transformOrigin: '50% 50% -50' });
		gsap.set(text, { autoAlpha: 0, y: 34 });
		gsap.set(button, { autoAlpha: 0, y: 26, scale: 0.9 });

		gsap.timeline({
			scrollTrigger: {
				trigger: section,
				start: 'top 82%',
				once: true,
			},
		})
			.to(section, {
				autoAlpha: 1,
				y: 0,
				scale: 1,
				duration: 0.9,
				ease: 'power2.out',
			})
			.to(title, {
				autoAlpha: 1,
				y: 0,
				rotateX: 0,
				duration: 0.95,
				ease: 'power3.out',
			}, '-=0.55')
			.to([text, button], {
				autoAlpha: 1,
				y: 0,
				scale: 1,
				duration: 0.8,
				stagger: 0.14,
				ease: 'power2.out',
			}, '-=0.45');

		if (button && button.dataset.gsapPulseReady !== '1') {
			button.dataset.gsapPulseReady = '1';
			gsap.to(button, {
				y: -3,
				duration: 1.8,
				ease: 'sine.inOut',
				repeat: -1,
				yoyo: true,
			});
		}
	});
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', initClubHouseCtaEffects);
} else {
	initClubHouseCtaEffects();
}

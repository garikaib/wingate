import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

const NotFound = () => {
    const componentRef = useRef(null);
    const textRef = useRef(null);
    const cardRef = useRef(null);

    // Animation refs
    const ballRef = useRef(null);
    const ballShadowRef = useRef(null);
    const waterSurfaceRef = useRef(null);
    const crownSplashRef = useRef(null);
    const centerSplashRef = useRef(null);
    const rippleRefs = useRef([]);
    const dropletRefs = useRef([]);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

            // 1. Entrance Animations for Text & Card
            const entranceTl = gsap.timeline({ defaults: { ease: "power3.out" } });

            entranceTl.fromTo(textRef.current.children,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, stagger: 0.15 }
            )
                .fromTo(cardRef.current,
                    { x: 50, opacity: 0, scale: 0.95 },
                    { x: 0, opacity: 1, scale: 1, duration: 1.2 },
                    "-=0.8"
                );

            // 2. Loop Animation (Water Scene)
            const ripples = rippleRefs.current.filter(Boolean);
            const droplets = dropletRefs.current.filter(Boolean);

            gsap.set(ballRef.current, { x: -160, y: -180, scale: 0.95, autoAlpha: 1 });
            gsap.set(ballShadowRef.current, { scaleX: 0.32, scaleY: 0.22, autoAlpha: 0.12 });
            gsap.set([crownSplashRef.current, centerSplashRef.current, ...droplets], {
                autoAlpha: 0,
                transformOrigin: 'center bottom'
            });
            gsap.set(ripples, { scaleX: 0.15, scaleY: 0.45, autoAlpha: 0 });

            if (!prefersReducedMotion) {
                // Subtle Water Movement
                gsap.to(waterSurfaceRef.current, {
                    y: 1.5,
                    duration: 2.2,
                    ease: 'sine.inOut',
                    repeat: -1,
                    yoyo: true
                });

                // Splash Sequence
                const splashTl = gsap.timeline({ repeat: -1, repeatDelay: 1.2 });

                splashTl.to(ballRef.current, {
                    x: 0, y: 0, scale: 1,
                    duration: 1.05, ease: 'power2.in'
                }, 'fall')
                    .to(ballShadowRef.current, {
                        scaleX: 1, scaleY: 0.45, autoAlpha: 0.26,
                        duration: 1.05, ease: 'power2.in'
                    }, 'fall')

                    // Impact
                    .to(ballRef.current, {
                        y: 22, scale: 0.88, autoAlpha: 0,
                        duration: 0.12, ease: 'power4.in'
                    }, 'impact')
                    .to(ballShadowRef.current, {
                        scaleX: 1.22, autoAlpha: 0,
                        duration: 0.25, ease: 'power2.out'
                    }, 'impact')

                    // Splash Eruption
                    .fromTo(crownSplashRef.current,
                        { scaleY: 0.2, scaleX: 0.7, autoAlpha: 0 },
                        { scaleY: 1, scaleX: 1, autoAlpha: 0.9, duration: 0.15, ease: 'power3.out' },
                        'impact'
                    )
                    .fromTo(centerSplashRef.current,
                        { scaleY: 0.25, autoAlpha: 0 },
                        { scaleY: 1.15, autoAlpha: 0.88, duration: 0.18, ease: 'power2.out' },
                        'impact+=0.02'
                    )

                    // Splash Dissipate
                    .to([crownSplashRef.current, centerSplashRef.current], {
                        y: 20, autoAlpha: 0, duration: 0.5, ease: 'power2.in'
                    }, 'impact+=0.18')

                    // Ripples expansion
                    .to(ripples[0], { scaleX: 2.4, scaleY: 0.9, autoAlpha: 0, duration: 1.3, ease: 'power1.out' }, 'impact+=0.06')
                    .to(ripples[1], { scaleX: 2.9, scaleY: 1.02, autoAlpha: 0, duration: 1.5, ease: 'power1.out' }, 'impact+=0.2')
                    .to(ripples[2], { scaleX: 3.3, scaleY: 1.12, autoAlpha: 0, duration: 1.7, ease: 'power1.out' }, 'impact+=0.34')

                    // Droplets
                    .fromTo(droplets,
                        { y: 0, autoAlpha: 0, scale: 0.7 },
                        {
                            y: (_, el) => Number(el.getAttribute('data-rise') || -40),
                            autoAlpha: 0.9, scale: 1,
                            duration: 0.2, ease: 'power3.out', stagger: 0.03
                        },
                        'impact'
                    )
                    .to(droplets, {
                        y: 18, autoAlpha: 0,
                        duration: 0.45, ease: 'power2.in', stagger: 0.02
                    }, 'impact+=0.18')

                    // Reset
                    .set(ballRef.current, { x: -160, y: -180, scale: 0.95, autoAlpha: 1 }, 'reset')
                    .set(ballShadowRef.current, { scaleX: 0.32, scaleY: 0.22, autoAlpha: 0.12 }, 'reset')
                    .set([crownSplashRef.current, centerSplashRef.current, ...droplets], { y: 0, autoAlpha: 0 }, 'reset')
                    .set(ripples, { scaleX: 0.15, scaleY: 0.45, autoAlpha: 0 }, 'reset');
            }
        }, componentRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="w-full bg-brand-gray font-montserrat" ref={componentRef}>
            <section className="flex min-h-[78vh] items-center justify-center px-6 py-20 lg:px-10 lg:py-24">
                <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-12 md:flex-row lg:gap-20">

                    {/* Left: Text Content - Balanced layout */}
                    <div ref={textRef} className="order-2 flex-1 text-center md:order-1 md:text-left">
                        <div className="mb-6 inline-block">
                            <h1 className="font-cinzel text-6xl font-bold uppercase leading-none tracking-wide text-brand-blue md:text-7xl lg:text-8xl">
                                404
                            </h1>
                            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-brand-yellow md:mx-0"></div>
                        </div>

                        <p className="mb-3 font-cinzel text-xs font-bold uppercase tracking-[0.28em] text-brand-yellow">
                            Out Of Bounds
                        </p>

                        <h2 className="mb-6 font-cinzel text-3xl font-bold uppercase tracking-wide text-brand-blue/90 md:text-4xl">
                            Water Hazard
                        </h2>

                        <p className="mx-auto mb-10 max-w-md text-lg leading-[1.7] text-brand-blue/75 md:mx-0">
                            It seems your shot has found the deep stuff. The page you are looking for is currently out of play.
                        </p>

                        <div className="flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
                            <a
                                href="/"
                                className="inline-flex items-center justify-center border border-brand-blue bg-brand-blue px-10 py-4 font-montserrat text-xs font-bold uppercase tracking-[0.15em] !text-white visited:!text-white focus:!text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-brand-yellow hover:bg-brand-yellow hover:!text-brand-blue"
                            >
                                Back To Clubhouse
                            </a>
                            <a
                                href="/contact-us"
                                className="inline-flex items-center justify-center border border-brand-yellow bg-brand-yellow px-10 py-4 font-montserrat text-xs font-bold uppercase tracking-[0.15em] !text-brand-blue visited:!text-brand-blue shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue hover:bg-brand-blue hover:!text-white"
                            >
                                Contact Pro Shop
                            </a>
                        </div>
                    </div>

                    {/* Right: Animation - Card with entrance */}
                    <div ref={cardRef} className="order-1 w-full max-w-[550px] flex-1 md:order-2">
                        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm border border-brand-yellow/25 bg-white shadow-2xl">
                            <svg viewBox="0 0 480 270" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
                                <defs>
                                    <linearGradient id="skyShade" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="#ffffff" />
                                        <stop offset="100%" stopColor="#f5f5f5" />
                                    </linearGradient>
                                    <linearGradient id="waterShade" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="#1f3b66" />
                                        <stop offset="100%" stopColor="#0e1b3d" />
                                    </linearGradient>
                                    <radialGradient id="ballShade" cx="30%" cy="30%" r="70%">
                                        <stop offset="0%" stopColor="#fff" />
                                        <stop offset="100%" stopColor="#d8dde8" />
                                    </radialGradient>
                                </defs>

                                {/* Sky */}
                                <rect x="0" y="0" width="480" height="270" fill="url(#skyShade)" />

                                {/* Distant terrain with more depth */}
                                <path d="M0 160 C80 145 160 165 240 155 C320 145 400 158 480 152 L480 270 L0 270 Z" fill="#1a472a" opacity="0.17" />
                                <path d="M0 175 C100 165 200 180 300 170 C400 160 480 175 480 168 L480 270 L0 270 Z" fill="#1a472a" opacity="0.28" />

                                {/* Water */}
                                <g ref={waterSurfaceRef}>
                                    <rect x="0" y="180" width="480" height="90" fill="url(#waterShade)" />
                                    <path d="M0 180 C80 176 160 184 240 180 C320 176 400 184 480 180" fill="none" stroke="#ffcc00" strokeOpacity="0.3" strokeWidth="1.5" />
                                    <path d="M0 188 C100 184 200 192 300 188 C400 184 480 190 480 188" fill="none" stroke="#ffffff" strokeOpacity="0.1" strokeWidth="1" />
                                </g>

                                {/* Splash Scene */}
                                <g transform="translate(240, 190)">
                                    <ellipse ref={ballShadowRef} cx="0" cy="4" rx="10" ry="4" fill="#091328" />

                                    <ellipse ref={(el) => { rippleRefs.current[0] = el; }} cx="0" cy="1" rx="8" ry="4" fill="none" stroke="#ffcc00" strokeOpacity="0.3" strokeWidth="1.5" />
                                    <ellipse ref={(el) => { rippleRefs.current[1] = el; }} cx="0" cy="1" rx="8" ry="4" fill="none" stroke="#ffffff" strokeOpacity="0.25" strokeWidth="1.5" />
                                    <ellipse ref={(el) => { rippleRefs.current[2] = el; }} cx="0" cy="1" rx="8" ry="4" fill="none" stroke="#ffcc00" strokeOpacity="0.16" strokeWidth="1.5" />

                                    <path ref={crownSplashRef} d="M-24 0 C-18 -22 -10 -22 -5 0 C-1 -26 1 -26 5 0 C10 -22 18 -22 24 0 L0 6 Z" fill="#edf2f7" />
                                    <path ref={centerSplashRef} d="M-5 0 C-1 -40 1 -40 5 0 Z" fill="#f7fafc" />

                                    <circle ref={(el) => { dropletRefs.current[0] = el; }} data-rise="-38" cx="-22" cy="-3" r="2" fill="#f7fafc" />
                                    <circle ref={(el) => { dropletRefs.current[1] = el; }} data-rise="-50" cx="-12" cy="-4" r="1.8" fill="#f7fafc" />
                                    <circle ref={(el) => { dropletRefs.current[2] = el; }} data-rise="-46" cx="0" cy="-6" r="2.2" fill="#ffffff" />
                                    <circle ref={(el) => { dropletRefs.current[3] = el; }} data-rise="-44" cx="12" cy="-4" r="1.9" fill="#f7fafc" />
                                    <circle ref={(el) => { dropletRefs.current[4] = el; }} data-rise="-36" cx="23" cy="-3" r="1.7" fill="#f7fafc" />

                                    <circle ref={ballRef} cx="0" cy="0" r="8" fill="url(#ballShade)" />
                                    <circle cx="-3" cy="-3" r="1.5" fill="#ffffff" opacity="0.75" />
                                </g>
                            </svg>

                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-blue/12 to-transparent"></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NotFound;

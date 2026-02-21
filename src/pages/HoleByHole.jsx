import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const holesData = [
    {
        number: 1,
        par: 4,
        index: 12,
        distance: 385,
        image: '/wp-content/uploads/2026/02/20260118_131838-scaled.jpg',
        description: 'A gentle opener that invites you to swing freely. Avoid the bunkers on the right to set up a clean approach.',
    },
    {
        number: 2,
        par: 5,
        index: 4,
        distance: 510,
        image: '/wp-content/uploads/2026/02/20260118_162436-scaled.jpg',
        description: 'A true test of length and accuracy. The green is well-guarded, demanding a precise approach shot.',
    },
    {
        number: 3,
        par: 3,
        index: 18,
        distance: 165,
        image: '/wp-content/uploads/2026/02/20260110_082734-scaled.jpg',
        description: 'A picturesque par 3 requiring a solid iron shot over water. Adjust for the wind coming off the lake.',
    },
    {
        number: 4,
        par: 4,
        index: 2,
        distance: 420,
        image: '/wp-content/uploads/2026/02/20251206_181910-scaled.jpg',
        description: 'Dogleg right that rewards the brave. Cut the corner at your peril, or play safe for a longer approach.',
    },
    {
        number: 5,
        par: 4,
        index: 10,
        distance: 395,
        image: '/wp-content/uploads/2026/02/20251127_102423-scaled.jpg',
        description: 'Straightaway par 4 with a narrow fairway. Precision off the tee is key to scoring well here.',
    },
    {
        number: 6,
        par: 5,
        index: 6,
        distance: 530,
        image: '/wp-content/uploads/2026/02/20260125_134724-scaled.jpg',
        description: 'A reachable par 5 for long hitters. The green complex is tricky, so short game is tested.',
    },
    // Filling the rest with placeholders/cycles of the above for now to complete 18
    ...Array.from({ length: 12 }).map((_, i) => ({
        number: i + 7,
        par: i % 2 === 0 ? 4 : (i % 3 === 0 ? 3 : 5),
        index: (i + 7),
        distance: 350 + (i * 10),
        image: '/wp-content/uploads/2026/02/20260118_131838-scaled.jpg', // Reusing first image as fallback
        description: 'A challenging hole that demands focus. Stay out of the rough to ensure a good score.',
    }))
];

const HoleByHole = () => {
    const heroRef = useRef(null);
    const introRef = useRef(null);
    const galleryRef = useRef(null);

    useEffect(() => {
        // Hero Animation
        const heroCtx = gsap.context(() => {
            gsap.fromTo(
                '.hero-title',
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2 }
            );
            gsap.fromTo(
                '.hero-subtitle',
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.4 }
            );
        }, heroRef);

        // Intro Animation
        const introCtx = gsap.context(() => {
            gsap.fromTo(
                introRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: introRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );
        }, introRef);

        // Gallery Animation
        const galleryCtx = gsap.context(() => {
            gsap.fromTo(
                '.gallery-item',
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: galleryRef.current,
                        start: 'top 75%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );
        }, galleryRef);

        return () => {
            heroCtx.revert();
            introCtx.revert();
            galleryCtx.revert();
        };
    }, []);

    const [selectedHole, setSelectedHole] = useState(null);
    const modalRef = useRef(null);
    const modalContentRef = useRef(null);

    const openModal = (hole) => {
        setSelectedHole(hole);
    };

    const closeModal = () => {
        if (modalRef.current && modalContentRef.current) {
            const tl = gsap.timeline({
                onComplete: () => setSelectedHole(null)
            });

            tl.to(modalContentRef.current, {
                scale: 0.8,
                opacity: 0,
                duration: 0.3,
                ease: 'power2.in'
            })
                .to(modalRef.current, {
                    opacity: 0,
                    duration: 0.3
                }, "<");
        } else {
            setSelectedHole(null);
        }
    };

    useEffect(() => {
        if (selectedHole && modalRef.current && modalContentRef.current) {
            const tl = gsap.timeline();

            tl.fromTo(modalRef.current,
                { opacity: 0 },
                { opacity: 1, duration: 0.4, ease: 'power2.out' }
            )
                .fromTo(modalContentRef.current,
                    { scale: 0.8, opacity: 0, y: 20 },
                    { scale: 1, opacity: 1, y: 0, duration: 0.5, ease: 'back.out(1.2)' },
                    "-=0.2"
                );
        }
    }, [selectedHole]);

    // Close on Escape key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') closeModal();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    return (
        <div className="bg-brand-gray min-h-screen font-sans">
            {/* Hero Section */}
            <section
                ref={heroRef}
                className="relative h-screen flex items-center justify-center overflow-hidden"
            >
                <div className="absolute inset-0 z-0">
                    <img
                        src="/wp-content/uploads/2026/02/20260118_131838-scaled.jpg"
                        alt="Course Hero"
                        className="w-full h-full object-cover transform scale-105 transition-transform duration-[20s] ease-linear hover:scale-100"
                    />
                    <div className="absolute inset-0 bg-brand-blue/35 mix-blend-multiply"></div>
                    <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/45 to-transparent"></div>
                    <div className="absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-brand-gray to-transparent"></div>
                </div>

                <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
                    <div className="inline-block px-4 py-1 border border-brand-yellow/30 rounded-full mb-6 backdrop-blur-md bg-white/10">
                        <span className="text-brand-yellow text-xs font-bold tracking-[0.3em] uppercase">Championship Layout</span>
                    </div>
                    <h1 className="hero-title text-5xl md:text-8xl font-cinzel font-bold mb-5 tracking-tight leading-none text-white drop-shadow-2xl">
                        Hole By <span className="text-brand-yellow">Hole</span>
                    </h1>
                    <div className="w-24 h-1 bg-brand-yellow mx-auto mb-6"></div>
                    <p className="hero-subtitle text-xl md:text-2xl font-montserrat font-light tracking-wide text-white/90 drop-shadow-md">
                        A WORLD-CLASS CHALLENGE AWAITS
                    </p>
                </div>

                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white cursor-pointer" onClick={() => introRef.current?.scrollIntoView({ behavior: 'smooth' })}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </section>

            {/* Intro Section */}
            <section
                ref={introRef}
                className="py-20 px-6 md:px-12 max-w-7xl mx-auto text-center"
            >
                <h2 className="text-3xl md:text-5xl font-cinzel text-brand-blue mb-8">
                    THE COURSE
                </h2>
                <div className="w-24 h-1 bg-golf-gold mx-auto mb-10"></div>
                <p className="text-lg md:text-xl font-merriweather text-gray-700 leading-relaxed max-w-4xl mx-auto">
                    Welcome to a golfing experience like no other. Our championship course is a masterpiece of design,
                    weaving through natural landscapes to provide a stern yet fair test for golfers of all abilities.
                    Renowned for its pristine conditioning, fast undulating greens, and strategic bunkering,
                    Wingate offers a premium "private club" feel that challenges seasoned players while remaining
                    accessible to those looking to improve their game.
                </p>
            </section>

            {/* Gallery Section */}
            <section ref={galleryRef} className="py-12 px-4 md:px-8 max-w-7xl mx-auto mb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {holesData.map((hole) => (
                        <div
                            key={hole.number}
                            onClick={() => openModal(hole)}
                            className="gallery-item group relative bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 cursor-pointer"
                        >
                            <div className="h-64 overflow-hidden relative">
                                <img
                                    src={hole.image}
                                    alt={`Hole ${hole.number}`}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                                <div className="absolute top-4 right-4 bg-golf-gold text-brand-blue font-bold px-3 py-1 rounded shadow-md font-cinzel">
                                    Hole {hole.number}
                                </div>
                                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/90 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-center">
                                    <span className="text-white font-montserrat uppercase text-xs tracking-widest font-bold border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors">
                                        View Details
                                    </span>
                                </div>
                            </div>
                            <div className="p-6 relative">
                                <div className="flex justify-between items-center mb-4 border-b border-gray-100 pb-2">
                                    <div className="text-center">
                                        <span className="block text-xs uppercase text-gray-500 font-bold tracking-wider">Par</span>
                                        <span className="text-xl font-cinzel font-bold text-brand-blue">{hole.par}</span>
                                    </div>
                                    <div className="text-center">
                                        <span className="block text-xs uppercase text-gray-500 font-bold tracking-wider">Index</span>
                                        <span className="text-xl font-cinzel font-bold text-brand-blue">{hole.index}</span>
                                    </div>
                                    <div className="text-center">
                                        <span className="block text-xs uppercase text-gray-500 font-bold tracking-wider">Dist</span>
                                        <span className="text-xl font-cinzel font-bold text-brand-blue">{hole.distance}m</span>
                                    </div>
                                </div>
                                <p className="text-gray-600 font-opensans text-sm leading-relaxed mb-4 line-clamp-2">
                                    {hole.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Detail Modal */}
            {selectedHole && (
                <div
                    ref={modalRef}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                    onClick={closeModal}
                >
                    <div
                        ref={modalContentRef}
                        className="bg-white rounded-sm overflow-hidden shadow-2xl w-full max-w-6xl max-h-[90vh] flex flex-col md:flex-row"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Image Side */}
                        <div className="w-full md:w-3/5 h-64 md:h-auto relative">
                            <img
                                src={selectedHole.image}
                                alt={`Hole ${selectedHole.number} Large`}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute top-4 left-4 bg-brand-blue text-white px-4 py-2 rounded-sm shadow-lg">
                                <span className="block text-xs font-montserrat uppercase tracking-wider opacity-75">Hole</span>
                                <span className="text-4xl font-cinzel font-bold">{selectedHole.number}</span>
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="w-full md:w-2/5 p-8 md:p-12 flex flex-col justify-center bg-brand-gray relative text-center md:text-left">
                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 text-gray-400 hover:text-brand-blue transition-colors z-10 p-2"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <div className="mb-8 border-b-2 border-golf-gold pb-4 inline-block mx-auto md:mx-0">
                                <h3 className="text-4xl font-cinzel font-bold text-brand-blue tracking-wide uppercase">Details</h3>
                            </div>

                            <div className="flex justify-between gap-4 mb-8">
                                <div className="flex-1 text-center p-4 bg-white rounded-sm shadow-sm border border-gray-100 flex flex-col justify-center transition-transform hover:-translate-y-1 duration-300">
                                    <span className="block text-xs uppercase text-gray-500 font-bold tracking-wider mb-1">Par</span>
                                    <span className="text-3xl font-cinzel font-bold text-brand-blue">{selectedHole.par}</span>
                                </div>
                                <div className="flex-1 text-center p-4 bg-white rounded-sm shadow-sm border border-gray-100 flex flex-col justify-center transition-transform hover:-translate-y-1 duration-300">
                                    <span className="block text-xs uppercase text-gray-500 font-bold tracking-wider mb-1">Index</span>
                                    <span className="text-3xl font-cinzel font-bold text-brand-blue">{selectedHole.index}</span>
                                </div>
                                <div className="flex-1 text-center p-4 bg-white rounded-sm shadow-sm border border-gray-100 flex flex-col justify-center transition-transform hover:-translate-y-1 duration-300">
                                    <span className="block text-xs uppercase text-gray-500 font-bold tracking-wider mb-1">Dist</span>
                                    <span className="text-2xl font-cinzel font-bold text-brand-blue whitespace-nowrap">{selectedHole.distance}m</span>
                                </div>
                            </div>

                            <div className="prose prose-lg text-gray-600 font-opensans mb-8 mx-auto md:mx-0 leading-relaxed">
                                <p>{selectedHole.description}</p>
                            </div>

                            <button className="w-full py-4 bg-brand-blue text-white font-cinzel font-bold tracking-widest text-lg hover:bg-white hover:text-brand-blue border-2 border-transparent hover:border-brand-blue transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 rounded-sm flex items-center justify-center gap-3 group">
                                <span>Book Tee Time</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HoleByHole;

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronRight, ArrowRight, MapPin, Flag, Trophy, Clock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Course = () => {
    const heroRef = useRef(null);
    const titleRef = useRef(null);
    const contentRef = useRef(null);
    const galleryRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero Title Animation
            gsap.from(titleRef.current, {
                y: 100, opacity: 0, duration: 1.5, ease: "expo.out", delay: 0.2
            });

            // Section Reveal
            gsap.utils.toArray('.reveal-section').forEach(section => {
                gsap.from(section, {
                    y: 60, opacity: 0, duration: 1, ease: "power3.out",
                    scrollTrigger: { trigger: section, start: "top 80%" }
                });
            });

            // Scorecard Row Reveal
            gsap.from(".score-row", {
                x: -30, opacity: 0, duration: 0.8, stagger: 0.1, ease: "power2.out",
                scrollTrigger: { trigger: ".score-table", start: "top 75%" }
            });

        }, heroRef); // Scope to component
        return () => ctx.revert();
    }, []);

    const scorecardOut = [
        { hole: 1, par: 4, white: 422, blue: 404, red: 329, si: 7 },
        { hole: 2, par: 5, white: 467, blue: 459, red: 452, si: 5 },
        { hole: 3, par: 3, white: 150, blue: 134, red: 122, si: 15 },
        { hole: 4, par: 5, white: 469, blue: 418, red: 414, si: 13 },
        { hole: 5, par: 4, white: 388, blue: 373, red: 298, si: 3 },
        { hole: 6, par: 3, white: 191, blue: 174, red: 164, si: 11 },
        { hole: 7, par: 4, white: 370, blue: 357, red: 349, si: 9 },
        { hole: 8, par: 4, white: 337, blue: 324, red: 312, si: 17 },
        { hole: 9, par: 4, white: 418, blue: 367, red: 335, si: 1 },
    ];

    const scorecardIn = [
        { hole: 10, par: 5, white: 495, blue: 470, red: 462, si: 14 },
        { hole: 11, par: 4, white: 386, blue: 372, red: 309, si: 6 },
        { hole: 12, par: 5, white: 523, blue: 515, red: 445, si: 10 },
        { hole: 13, par: 3, white: 182, blue: 156, red: 148, si: 16 },
        { hole: 14, par: 4, white: 427, blue: 377, red: 349, si: 2 },
        { hole: 15, par: 4, white: 389, blue: 374, red: 311, si: 12 },
        { hole: 16, par: 4, white: 340, blue: 333, red: 328, si: 4 },
        { hole: 17, par: 3, white: 141, blue: 132, red: 123, si: 18 },
        { hole: 18, par: 4, white: 355, blue: 335, red: 316, si: 8 },
    ];

    return (
        <div className="bg-white min-h-screen relative overflow-hidden font-montserrat" ref={heroRef}>
            {/* Hero Section */}
            <header className="relative h-[85vh] flex items-center justify-center bg-brand-blue overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/wp-content/uploads/2026/02/20260118_162436-scaled.jpg')",
                        transform: "scale(1.1)" // Slight scale for parallax feel if JS was adding it, just static for now or can add ref
                    }}
                ></div>
                <div className="absolute inset-0 bg-brand-blue/30 mix-blend-multiply"></div>
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-t from-white to-transparent"></div>
                <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/40 to-transparent"></div>

                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                    <div className="inline-block px-4 py-1 border border-brand-yellow/30 rounded-full mb-6 backdrop-blur-md bg-white/10">
                        <span className="text-brand-yellow text-xs font-bold tracking-[0.3em] uppercase">Championship Layout</span>
                    </div>
                    <h1 ref={titleRef} className="text-5xl md:text-8xl font-cinzel text-white mb-6 tracking-tight drop-shadow-2xl leading-none">
                        The <span className="text-brand-yellow">Course</span>
                    </h1>
                    <div className="w-24 h-1 bg-brand-yellow mx-auto mb-8"></div>
                </div>
            </header>

            {/* Content Section - Intro */}
            <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center reveal-section">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-cinzel text-brand-blue mb-8 leading-tight">
                            Well Manicured & <br /><span className="text-brand-yellow">Wooded Parkland</span>
                        </h2>
                        <div className="space-y-6 text-text-muted text-lg font-light leading-relaxed">
                            <p>
                                Wingate Park Golf Club is an 18-hole, well-manicured, and wooded course founded 52 years ago.
                                Located in the tranquil Pomona area of Harare, it offers a unique and challenging golfing experience
                                with fairways lined with mature trees.
                            </p>
                            <p>
                                Despite playing on these old style characteristics, the course is thoroughly modern in other ways.
                                The 18th is a long par 4 requiring negotiation of water on all three shots.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-8 mt-12 bg-brand-blue/5 p-8 rounded-2xl border border-brand-blue/10">
                            <div>
                                <div className="flex items-center gap-3 mb-2 text-brand-blue">
                                    <Flag size={20} />
                                    <span className="font-bold text-sm uppercase tracking-widest">Holes</span>
                                </div>
                                <span className="text-4xl font-cinzel font-bold text-brand-blue">18</span>
                            </div>
                            <div>
                                <div className="flex items-center gap-3 mb-2 text-brand-blue">
                                    <Trophy size={20} />
                                    <span className="font-bold text-sm uppercase tracking-widest">Par</span>
                                </div>
                                <span className="text-4xl font-cinzel font-bold text-brand-blue">72</span>
                            </div>
                            <div>
                                <div className="flex items-center gap-3 mb-2 text-brand-blue">
                                    <MapPin size={20} />
                                    <span className="font-bold text-sm uppercase tracking-widest">Distance</span>
                                </div>
                                <span className="text-2xl font-cinzel font-bold text-brand-blue">6450m</span>
                            </div>
                            <div>
                                <div className="flex items-center gap-3 mb-2 text-brand-blue">
                                    <Clock size={20} />
                                    <span className="font-bold text-sm uppercase tracking-widest">Est. Time</span>
                                </div>
                                <span className="text-2xl font-cinzel font-bold text-brand-blue">4.5 Hrs</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl group">
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                            style={{ backgroundImage: "url('/wp-content/uploads/2026/02/20260118_131838-scaled.jpg')" }}
                        ></div>
                        {/* Overlay Card */}
                        <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-xl p-8 rounded-xl border-l-4 border-brand-yellow shadow-lg">
                            <h3 className="font-cinzel text-xl text-brand-blue mb-2">Designed for Strategy</h3>
                            <p className="text-sm text-text-muted">Every hole offers a new challenge, rewarding precision and strategy over pure power.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Scorecard Section */}
            <section className="bg-brand-blue/5 py-24 px-4 md:px-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-yellow/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>

                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-8 reveal-section">
                        <span className="text-brand-yellow font-bold uppercase tracking-[0.3em] text-xs">The Numbers</span>
                        <h2 className="text-4xl md:text-5xl font-cinzel text-brand-blue mt-3 mb-6">Course Scorecard</h2>
                        <p className="font-cisalpin text-brand-blue/60 italic text-lg">"Forget your opponents; always play against par" - Sam Snead</p>
                    </div>

                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-brand-blue/10 reveal-section score-table">
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm md:text-base min-w-[800px]">
                                <thead className="bg-brand-blue text-white font-cinzel uppercase tracking-wider text-xs">
                                    <tr>
                                        <th className="py-4 px-6 text-left">Hole</th>
                                        <th className="py-4 px-4 bg-black/20 text-brand-yellow border-x border-brand-blue/20">Par</th>
                                        <th className="py-4 px-4">White</th>
                                        <th className="py-4 px-4">Blue</th>
                                        <th className="py-4 px-4 text-red-300">Red</th>
                                        <th className="py-4 px-6 text-right bg-black/20 text-brand-yellow border-l border-brand-blue/20">Stroke</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-brand-blue/5">
                                    {scorecardOut.map((h, i) => (
                                        <tr key={i} className={`score-row hover:bg-brand-blue/[0.02] transition-colors ${i % 2 === 0 ? 'bg-brand-blue/[0.01]' : ''}`}>
                                            <td className="py-4 px-6 font-bold text-brand-blue">{h.hole}</td>
                                            <td className="py-4 px-4 text-center font-bold bg-brand-yellow/[0.07] border-x border-brand-blue/5 text-brand-blue">{h.par}</td>
                                            <td className="py-4 px-4 text-center font-medium text-brand-blue">{h.white}</td>
                                            <td className="py-4 px-4 text-center font-light text-text-muted">{h.blue}</td>
                                            <td className="py-4 px-4 text-center font-light text-text-muted">{h.red}</td>
                                            <td className="py-4 px-6 text-right text-xs font-bold text-brand-blue bg-brand-yellow/[0.07] border-l border-brand-blue/5">{h.si}</td>
                                        </tr>
                                    ))}
                                    <tr className="bg-brand-blue/10 font-bold text-brand-blue">
                                        <td className="py-4 px-6">OUT</td>
                                        <td className="py-4 px-4 text-center bg-brand-yellow/10 border-x border-brand-blue/5 text-brand-blue-dark">36</td>
                                        <td className="py-4 px-4 text-center">3212</td>
                                        <td className="py-4 px-4 text-center">3010</td>
                                        <td className="py-4 px-4 text-center">2774</td>
                                        <td className="py-4 px-6 bg-brand-yellow/10 border-l border-brand-blue/5"></td>
                                    </tr>
                                    {scorecardIn.map((h, i) => (
                                        <tr key={i} className={`score-row hover:bg-brand-blue/[0.02] transition-colors ${i % 2 === 0 ? 'bg-brand-blue/[0.01]' : ''}`}>
                                            <td className="py-4 px-6 font-bold text-brand-blue">{h.hole}</td>
                                            <td className="py-4 px-4 text-center font-bold bg-brand-yellow/[0.07] border-x border-brand-blue/5 text-brand-blue">{h.par}</td>
                                            <td className="py-4 px-4 text-center font-medium text-brand-blue">{h.white}</td>
                                            <td className="py-4 px-4 text-center font-light text-text-muted">{h.blue}</td>
                                            <td className="py-4 px-4 text-center font-light text-text-muted">{h.red}</td>
                                            <td className="py-4 px-6 text-right text-xs font-bold text-brand-blue bg-brand-yellow/[0.07] border-l border-brand-blue/5">{h.si}</td>
                                        </tr>
                                    ))}
                                    <tr className="bg-brand-blue/10 font-bold text-brand-blue border-t-2 border-brand-blue">
                                        <td className="py-5 px-6">TOTAL</td>
                                        <td className="py-5 px-4 text-center text-lg bg-brand-yellow/10 border-x border-brand-blue/5 border-b border-brand-blue/5 text-brand-blue-dark">72</td>
                                        <td className="py-5 px-4 text-center text-lg">6450</td>
                                        <td className="py-5 px-4 text-center text-lg">6074</td>
                                        <td className="py-5 px-4 text-center text-lg">5565</td>
                                        <td className="py-5 px-6 bg-brand-yellow/10 border-l border-brand-blue/5 border-b border-brand-blue/5"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Call to Action */}
            <section ref={galleryRef} className="relative py-32 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-brand-blue">
                    <div className="absolute inset-0 opacity-40 mix-blend-overlay" style={{ backgroundImage: "url('/wp-content/uploads/2026/02/20260126_140911-scaled.jpg')", backgroundSize: 'cover', backgroundposition: 'center' }}></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/90 to-brand-blue/40"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="text-white max-w-2xl reveal-section">
                        <span className="text-brand-yellow font-cinzel tracking-[0.2em] font-bold uppercase mb-4 block">Visual Tour</span>
                        <h2 className="text-5xl md:text-6xl font-cinzel mb-6 leading-none">Experience the <br /> Beauty</h2>
                        <p className="text-white/80 text-lg font-light leading-relaxed max-w-xl">
                            Explore our gallery to see the manicured fairways, challenging bunkers, and scenic water hazards that make Wingate Park truly unique.
                        </p>
                    </div>

                    <div className="reveal-section">
                        <a href="/gallery" className="group relative inline-flex items-center overflow-hidden rounded-sm bg-brand-yellow px-12 py-6 text-brand-blue no-underline hover:no-underline focus:no-underline font-cinzel font-bold tracking-widest uppercase transition-all duration-300 hover:bg-white hover:text-brand-blue shadow-2xl hover:shadow-brand-yellow/50">
                            <span className="mr-4 text-lg">View Gallery</span>
                            <ArrowRight className="transition-transform group-hover:translate-x-2" />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Course;

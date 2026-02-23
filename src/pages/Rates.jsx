import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronRight, ShieldCheck, CreditCard, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const DEFAULT_RATES_SETTINGS = {
    hero: {
        kicker: 'Private Experience',
        title: 'Membership \n Subscriptions',
        subtitle: 'Subs as from 1st January 2026',
        backgroundImage: ''
    },
    intro: {
        kicker: 'The Investment',
        title: 'Elite Access, \nCurated for You',
        content: ''
    },
    menRates: [],
    ladiesRates: [],
    allRates: [],
    cta: {
        title: 'Elevate Your Game. \n Join the Legacy.',
        description: '',
        buttonText: 'JOIN NOW',
        buttonUrl: '/membership',
        backgroundImage: ''
    }
};

const Rates = () => {
    const rootRef = useRef(null);
    const heroRef = useRef(null);
    const titleRef = useRef(null);
    const contentRef = useRef(null);
    const parallaxRef = useRef(null);

    const [settings, setSettings] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchSettings = async () => {
            try {
                const apiRoot = window.wingateThemeData?.root || '/wp-json/';
                const response = await fetch(`${apiRoot}wingate/v1/rates-settings`);
                if (!response.ok) throw new Error('Data fetch failed');
                const data = await response.json();
                setSettings(data);
            } catch (err) {
                console.error("Error loading rates data:", err);
            } finally {
                setIsLoading(false);
            }
        };
        fetchSettings();
    }, []);

    useEffect(() => {
        if (isLoading || !settings) return;

        const ctx = gsap.context(() => {
            // Hero Title Animation
            if (titleRef.current) {
                gsap.from(titleRef.current, {
                    y: 100,
                    opacity: 0,
                    duration: 1.5,
                    ease: "expo.out"
                });
            }

            // Parallax Effect on Hero
            if (parallaxRef.current && heroRef.current) {
                gsap.to(parallaxRef.current, {
                    yPercent: 30,
                    ease: "none",
                    scrollTrigger: {
                        trigger: heroRef.current,
                        start: "top top",
                        end: "bottom top",
                        scrub: true
                    }
                });
            }

            // Sections Reveal
            const cards = contentRef.current?.querySelectorAll('.glass-card') || [];
            if (cards.length && contentRef.current) {
                gsap.from(cards, {
                    y: 60,
                    opacity: 0,
                    duration: 1,
                    stagger: 0.3,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: contentRef.current,
                        start: "top 75%"
                    }
                });
            }

            // Floating elements animation
            const floaters = rootRef.current?.querySelectorAll('.floater') || [];
            if (floaters.length) {
                gsap.to(floaters, {
                    y: -20,
                    duration: 2,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                    stagger: 0.5
                });
            }
        }, rootRef);
        return () => ctx.revert();
    }, [isLoading, settings]);

    const resolvedSettings = {
        hero: {
            ...DEFAULT_RATES_SETTINGS.hero,
            ...(settings?.hero && typeof settings.hero === 'object' ? settings.hero : {})
        },
        intro: {
            ...DEFAULT_RATES_SETTINGS.intro,
            ...(settings?.intro && typeof settings.intro === 'object' ? settings.intro : {})
        },
        menRates: Array.isArray(settings?.menRates) ? settings.menRates : DEFAULT_RATES_SETTINGS.menRates,
        ladiesRates: Array.isArray(settings?.ladiesRates) ? settings.ladiesRates : DEFAULT_RATES_SETTINGS.ladiesRates,
        allRates: Array.isArray(settings?.allRates) ? settings.allRates : DEFAULT_RATES_SETTINGS.allRates,
        cta: {
            ...DEFAULT_RATES_SETTINGS.cta,
            ...(settings?.cta && typeof settings.cta === 'object' ? settings.cta : {})
        }
    };

    const RateTable = ({ title, rates, columns, icon: Icon }) => (
        <div className="glass-card mb-20 relative">
            <div className="absolute -top-10 -left-6 w-20 h-20 bg-brand-yellow/10 rounded-full blur-2xl -z-10"></div>
            <div className="bg-white/90 backdrop-blur-xl border border-white/40 shadow-2xl rounded-2xl overflow-hidden p-8">
                <div className="flex items-center justify-between mb-8 border-b border-brand-blue/10 pb-6">
                    <div className="flex items-center">
                        <div className="bg-brand-blue/5 p-3 rounded-xl mr-5">
                            <Icon size={32} className="text-brand-blue" />
                        </div>
                        <div>
                            <h3 className="text-3xl font-cinzel text-brand-blue uppercase tracking-wider">{title}</h3>
                            <div className="w-12 h-1 bg-brand-yellow mt-1"></div>
                        </div>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[600px]">
                        <thead>
                            <tr className="text-brand-blue/50 font-cinzel text-xs uppercase tracking-[0.2em]">
                                <th className="py-4 px-4 border-b border-brand-blue/5">Category</th>
                                <th className="py-4 px-4 border-b border-brand-blue/5">Description</th>
                                {columns.map(col => (
                                    <th key={col} className="py-4 px-4 border-b border-brand-blue/5 text-center">{col}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="font-montserrat text-sm">
                            {rates.map((rate, idx) => (
                                <tr key={idx} className="group hover:bg-brand-blue/[0.02] transition-colors border-b border-brand-blue/[0.03]">
                                    <td className="py-5 px-4 font-bold text-brand-blue group-hover:text-brand-yellow transition-colors">{rate.category}</td>
                                    <td className="py-5 px-4 text-text-muted italic">{rate.desc}</td>
                                    {rate.annual ? (
                                        <td colSpan={columns.length} className="py-5 px-4 text-center font-bold text-brand-blue bg-brand-yellow/5 rounded-r-lg">
                                            <span className="text-brand-yellow mr-1">$</span>{rate.annual} <span className="text-[10px] uppercase opacity-50 ml-1">Annual</span>
                                        </td>
                                    ) : rate.flat ? (
                                        <td colSpan={columns.length} className="py-5 px-4 text-center font-bold text-brand-blue">
                                            <span className="text-brand-yellow mr-1">$</span>{rate.flat}
                                        </td>
                                    ) : (
                                        <>
                                            <td className="py-5 px-4 text-center font-bold text-brand-blue">
                                                <span className="text-xs opacity-40 mr-1">$</span>{rate.quarterly}
                                            </td>
                                            <td className="py-5 px-4 text-center font-bold text-brand-blue text-lg">
                                                <div className="bg-brand-blue text-white px-3 py-1 rounded shadow-lg scale-95 group-hover:scale-105 transition-transform duration-300">
                                                    <span className="text-xs text-brand-yellow mr-1">$</span>{rate.monthly}
                                                </div>
                                            </td>
                                        </>
                                    )}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );

    return (
        <div ref={rootRef} className="bg-white min-h-screen relative overflow-hidden">
            {/* Background elements - VIBRANT BRAND COLORS */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
                <div className="floater absolute top-1/4 right-0 w-96 h-96 bg-brand-yellow/5 rounded-full blur-[100px]"></div>
                <div className="floater absolute bottom-1/4 -left-20 w-80 h-80 bg-brand-blue/5 rounded-full blur-[80px]"></div>
            </div>

            {/* Hero Section */}
            <header ref={heroRef} className="relative h-[85vh] flex items-center justify-center bg-brand-blue overflow-hidden">
                <div
                    ref={parallaxRef}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url('${resolvedSettings.hero.backgroundImage}')`,
                        transform: "scale(1.1)"
                    }}
                ></div>

                {/* Refined Gradient Mask: Blue for depth, blending to White for the page */}
                <div className="absolute inset-0 bg-brand-blue/30"></div>
                <div className="absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-white to-transparent"></div>
                <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/40 to-transparent"></div>

                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                    <div className="inline-block px-4 py-1 border border-brand-yellow/30 rounded-full mb-6 backdrop-blur-md bg-white/10">
                        <span className="text-brand-yellow text-xs font-bold tracking-[0.3em] uppercase">{resolvedSettings.hero.kicker}</span>
                    </div>
                    <h1 ref={titleRef} className="text-5xl md:text-8xl font-cinzel text-white mb-8 tracking-tighter drop-shadow-2xl leading-none whitespace-pre-line">
                        {resolvedSettings.hero.title}
                    </h1>
                    <div className="flex flex-col items-center">
                        <div className="w-24 h-1 bg-brand-yellow/50 mb-6"></div>
                        <p className="text-sm md:text-lg text-white/90 font-montserrat tracking-[0.2em] uppercase font-light">
                            {resolvedSettings.hero.subtitle}
                        </p>
                    </div>
                </div>
            </header>

            {/* Page Content - Clean White Theme */}
            <main ref={contentRef} className="container mx-auto px-4 py-32 max-w-6xl relative">
                <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
                    <div className="max-w-2xl">
                        <span className="text-brand-yellow font-cinzel tracking-[0.4em] uppercase text-xs font-bold mb-4 block">{resolvedSettings.intro.kicker}</span>
                        <h2 className="text-5xl md:text-6xl font-cinzel text-brand-blue mb-8 leading-tight whitespace-pre-line">{resolvedSettings.intro.title}</h2>
                        <p className="text-text-muted font-montserrat text-lg leading-relaxed font-light whitespace-pre-line">
                            {resolvedSettings.intro.content}
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <div className="bg-brand-blue p-8 rounded-2xl shadow-xl text-white transform hover:-translate-y-2 transition-transform duration-300">
                            <CreditCard className="text-brand-yellow mb-4" size={32} />
                            <h4 className="font-cinzel text-lg mb-2">Monthly Flexibility</h4>
                            <p className="text-xs text-white/60 font-montserrat leading-relaxed">Spreading your investment across equal monthly payments.</p>
                        </div>
                    </div>
                </div>

                <RateTable title="Gentlemen" rates={resolvedSettings.menRates} columns={["Quarterly", "Monthly"]} icon={Users} />
                <RateTable title="Ladies" rates={resolvedSettings.ladiesRates} columns={["Quarterly", "Monthly"]} icon={Users} />
                <RateTable title="Admin & Extras" rates={resolvedSettings.allRates} columns={["Amount"]} icon={ShieldCheck} />

                {/* Final Call to Action - MORE IMPACTful */}
                <div className="relative mt-32 py-24 px-8 rounded-3xl overflow-hidden bg-brand-blue text-center group shadow-2xl">
                    <div className="absolute inset-0 opacity-20 grayscale-0 group-hover:scale-110 transition-transform duration-1000" style={{ backgroundImage: `url('${resolvedSettings.cta.backgroundImage}')`, backgroundSize: 'cover' }}></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-blue via-brand-blue/90 to-black"></div>
                    <div className="relative z-10">
                        <h3 className="text-4xl md:text-5xl font-cinzel text-brand-yellow mb-8 tracking-widest leading-tight whitespace-pre-line">{resolvedSettings.cta.title}</h3>
                        <p className="text-white/70 font-montserrat mb-12 max-w-xl mx-auto text-lg font-light leading-relaxed">
                            {resolvedSettings.cta.description}
                        </p>
                        <div className="flex flex-wrap justify-center gap-8">
                            <a href={resolvedSettings.cta.buttonUrl} className="group flex items-center bg-brand-yellow text-brand-blue no-underline hover:no-underline focus:no-underline font-cinzel font-bold text-sm tracking-widest uppercase py-4 px-12 border border-brand-yellow hover:bg-white hover:border-white transition-all duration-300 rounded-sm shadow-xl shadow-brand-yellow/20">
                                {resolvedSettings.cta.buttonText} <ChevronRight size={18} className="ml-3 group-hover:translate-x-2 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>
            </main>

            {/* Mobile Gradient Overlay */}
            <div className="h-20 bg-gradient-to-t from-black/5 to-transparent lg:hidden"></div>
        </div>
    );
};

export default Rates;

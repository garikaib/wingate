import React, { useEffect, useRef, useState } from 'react';
import OnboardingWizard from '../components/OnboardingWizard';
import gsap from 'gsap';
import { Check, ChevronRight } from 'lucide-react';

const Membership = () => {
    const heroRef = useRef(null);
    const titleRef = useRef(null);

    const [settings, setSettings] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchSettings = async () => {
            try {
                const apiRoot = window.wingateThemeData?.root || '/wp-json/';
                const response = await fetch(`${apiRoot}wingate/v1/membership-settings`);
                if (!response.ok) throw new Error('Data fetch failed');
                const data = await response.json();
                setSettings(data);
            } catch (err) {
                console.error("Error loading membership data:", err);
            } finally {
                setIsLoading(false);
            }
        };
        fetchSettings();
    }, []);

    useEffect(() => {
        if (isLoading || !settings) return;

        const ctx = gsap.context(() => {
            gsap.from(titleRef.current, {
                y: 50,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out"
            });
        }, heroRef);
        return () => ctx.revert();
    }, [isLoading, settings]);

    if (isLoading) {
        return (
            <div className="bg-brand-gray min-h-screen font-montserrat flex items-center justify-center">
                <p className="text-brand-blue">Loading membership details...</p>
            </div>
        );
    }

    if (!settings) {
        return (
            <div className="bg-brand-gray min-h-screen font-montserrat flex items-center justify-center px-4">
                <p className="text-brand-blue text-center">Unable to load membership details right now. Please try again shortly.</p>
            </div>
        );
    }

    return (
        <div className="bg-brand-gray min-h-screen font-montserrat">
            {/* Hero Section */}
            <header ref={heroRef} className="relative h-[70vh] flex items-center justify-center bg-brand-blue overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${settings.hero.backgroundImage}')` }}></div>
                <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/60 via-brand-blue/40 to-brand-blue/90"></div>

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <h1 ref={titleRef} className="text-5xl md:text-7xl font-cinzel text-brand-yellow mb-6 tracking-wide drop-shadow-lg whitespace-pre-line">
                        {settings.hero.title}
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 font-light tracking-wider mb-8 whitespace-pre-line">
                        {settings.hero.subtitle}
                    </p>
                </div>
            </header>

            {/* Wizard Section - Overlapping Hero */}
            <div className="relative z-20 px-4 -mt-32 mb-20">
                <OnboardingWizard />
            </div>

            {/* Membership Details */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-brand-yellow font-cinzel tracking-widest uppercase text-sm font-bold">{settings.tiersIntro.kicker}</span>
                        <h2 className="text-4xl font-cinzel text-brand-blue mt-2 whitespace-pre-line">{settings.tiersIntro.title}</h2>
                        <div className="w-24 h-1 bg-brand-yellow mx-auto mt-6"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {settings.tiers.map((tier, index) => (
                            <div key={index} className="bg-brand-gray p-8 border border-transparent hover:border-brand-yellow/50 transition-all duration-300 hover:shadow-xl group">
                                <h3 className="text-xl font-cinzel text-brand-blue mb-2">{tier.name}</h3>
                                <p className="text-brand-yellow font-bold text-lg mb-6">{tier.price}</p>
                                <ul className="space-y-3 mb-8">
                                    {tier.features.split(',').map((feat, i) => (
                                        <li key={i} className="flex items-start text-sm text-brand-blue/80">
                                            <Check size={16} className="text-brand-yellow mr-2 mt-0.5" />
                                            <span>{feat.trim()}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <a
                            href="/rates"
                            className="inline-flex items-center text-brand-blue font-cinzel font-bold text-sm tracking-widest uppercase border-b-2 border-brand-yellow hover:border-brand-blue transition-all pb-1 group"
                        >
                            View All Rates & Subscriptions
                            <ChevronRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>

                    <div className="mt-20 max-w-4xl mx-auto bg-brand-blue text-white p-10 md:p-14 text-center rounded-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-yellow/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                        <div className="relative z-10">
                            <h3 className="text-3xl font-cinzel text-brand-yellow mb-4 whitespace-pre-line">{settings.cta.title}</h3>
                            <p className="mb-8 text-white/80 max-w-lg mx-auto whitespace-pre-line">
                                {settings.cta.description}
                            </p>
                            <a
                                href={settings.cta.buttonUrl}
                                className="inline-block border border-brand-yellow text-brand-yellow no-underline hover:no-underline focus:no-underline px-8 py-3 hover:bg-brand-yellow hover:text-brand-blue transition-colors font-cinzel font-bold text-sm tracking-widest uppercase"
                            >
                                {settings.cta.buttonText}
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Membership;

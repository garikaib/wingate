import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone } from 'lucide-react';
import { toPhoneHref, toPhoneLinkProps } from '../config/contactDetails';

gsap.registerPlugin(ScrollTrigger);

const WhatsAppIcon = ({ size = 16 }) => (
    <svg viewBox="0 0 448 512" width={size} height={size} aria-hidden="true" fill="currentColor">
        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32 101.5 32 1.9 131.6 1.9 254c0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.5-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2s-9.7 1.4-14.8 6.9c-5.1 5.5-19.4 19-19.4 46.3s19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
    </svg>
);

const GreenFees = () => {
    const heroRef = useRef(null);
    const contentRef = useRef(null);
    const [settings, setSettings] = useState(null);

    const defaultSettings = {
        hero: {
            kicker: 'Championship Value',
            title: 'Green Fees',
            titleHighlight: 'Rates',
            subtitle: 'Experience Championship Golf at Wingate Park',
            backgroundImage: '/wp-content/uploads/2026/02/20260131_124600-scaled.jpg',
        },
        intro: {
            content: 'Wingate Park Golf Club offers a prestigious golfing experience accessible to all. Whether you are a seasoned affiliated player, a visitor, or a junior starting your journey, we welcome you to challenge yourself on our wooded fairways and pristine greens.',
        },
        greenFees: [
            { category: 'Affiliated', holes18: 20, holes9: 10 },
            { category: 'Non-Affiliated', holes18: 30, holes9: 15 },
            { category: 'Non-Residents', holes18: 60, holes9: 40 },
            { category: 'Seniors Affiliated', holes18: 10, holes9: 5 },
            { category: 'Seniors (Non-Members) 65-74yrs', holes18: 15, holes9: 10 },
            { category: 'Juniors', holes18: 5, holes9: 5 },
            { category: 'Students (with Valid Cards)', holes18: 15, holes9: 10 },
            { category: 'Over 75 Years', holes18: 10, holes9: 5 },
            { category: 'Mon/Tue/Thu AM "Special"', holes18: 10, holes9: 5 },
        ],
        cartHire: [
            { type: 'High-Rider / 4-Seater', holes18: 40, holes9: 25 },
            { type: 'Standard Cart', holes18: 35, holes9: 20 },
            { type: 'Budget Carts', holes18: 30, holes9: 15 },
            { type: '3-Wheeler (Trike)', holes18: 20, holes9: 12 },
        ],
        booking: {
            title: 'Book Tee Time or Cart',
            description: 'Ready to play? Contact the office to reserve your slot.',
            phone: '0772 339 670',
            phoneType: 'tel',
            email: 'reception@wingate.co.zw',
        },
        etiquette: {
            title: 'Dress Code & Etiquette',
            description: "To ensure an enjoyable experience for all members and visitors, please adhere to our club's dress code and etiquette.",
            image: '/wp-content/uploads/2026/02/20260118_165728-scaled.jpg',
            items: [
                'Collared Shirts Required (No T-shirts)',
                'Shirts must be tucked into trousers or shorts',
                'Tailored shorts only (No rugby shorts)',
                'No denim jeans or denim shorts allowed',
                'Short white or "hidden" socks required',
            ],
            buttonText: 'Contact Us for More Info',
            buttonUrl: '/contact-us/',
        },
    };

    useEffect(() => {
        const heroCtx = gsap.context(() => {
            gsap.fromTo('.hero-content',
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2 }
            );
        }, heroRef);

        const contentCtx = gsap.context(() => {
            gsap.fromTo('.anim-section',
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: contentRef.current,
                        start: 'top 80%',
                    }
                }
            );

            gsap.utils.toArray('.fees-table-card').forEach((card) => {
                gsap.fromTo(
                    card,
                    { y: 40, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.9,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 85%',
                        },
                    }
                );

                const rows = card.querySelectorAll('.fees-table-row');
                gsap.fromTo(
                    rows,
                    { y: 16, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.45,
                        stagger: 0.08,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 80%',
                        },
                    }
                );
            });
        }, contentRef);

        return () => {
            heroCtx.revert();
            contentCtx.revert();
        };
    }, []);

    useEffect(() => {
        const fetchSettings = async () => {
            try {
                const response = await fetch('/wp-json/wingate/v1/green-fees-settings');
                if (!response.ok) throw new Error('Failed to fetch green fees settings');
                const data = await response.json();
                setSettings(data);
            } catch (err) {
                console.error('Failed to fetch green fees settings:', err);
                setSettings(defaultSettings);
            }
        };

        fetchSettings();
    }, []);

    const pageSettings = settings || defaultSettings;
    const greenFees = pageSettings.greenFees || [];
    const cartHire = pageSettings.cartHire || [];
    const receptionPhone = pageSettings.booking?.phone || '';
    const receptionPhoneType = pageSettings.booking?.phoneType === 'whatsapp' ? 'whatsapp' : 'tel';
    const receptionEmail = pageSettings.booking?.email || '';

    return (
        <div className="bg-brand-gray min-h-screen font-sans">
            {/* Hero Section */}
            <section ref={heroRef} className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={pageSettings.hero.backgroundImage}
                        alt="Green Fees Hero"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-brand-blue/35 mix-blend-multiply"></div>
                    <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/45 to-transparent"></div>
                    <div className="absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-brand-gray to-transparent"></div>
                </div>
                <div className="relative z-10 text-center text-white hero-content px-4">
                    <div className="inline-block px-4 py-1 border border-brand-yellow/30 rounded-full mb-6 backdrop-blur-md bg-white/10">
                        <span className="text-brand-yellow text-xs font-bold tracking-[0.3em] uppercase">{pageSettings.hero.kicker}</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-cinzel font-bold mb-4 tracking-tight leading-none text-white drop-shadow-2xl">
                        {pageSettings.hero.title} <span className="text-brand-yellow">{pageSettings.hero.titleHighlight}</span>
                    </h1>
                    <div className="w-24 h-1 bg-brand-yellow mx-auto mb-6"></div>
                    <p className="text-xl md:text-2xl font-montserrat font-light tracking-wide text-white/90">
                        {pageSettings.hero.subtitle}
                    </p>
                </div>
            </section>

            <div ref={contentRef} className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">

                {/* Intro */}
                <div className="text-center mb-16 anim-section">
                    <p className="text-lg md:text-xl font-merriweather text-gray-700 leading-relaxed max-w-4xl mx-auto">
                        {pageSettings.intro.content}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

                    {/* Green Fees Table */}
                    <div className="anim-section">
                        <h2 className="text-3xl font-cinzel text-brand-blue mb-6 border-l-4 border-brand-yellow pl-4">
                            Green Fees (USD)
                        </h2>
                        <div className="fees-table-card bg-white/95 backdrop-blur-sm rounded-sm shadow-xl overflow-hidden border border-brand-yellow/20 border-t-4 border-brand-blue">
                            <table className="w-full">
                                <thead className="bg-brand-blue text-white">
                                    <tr>
                                        <th className="py-4 px-4 text-left font-cinzel font-bold tracking-wider">Category</th>
                                        <th className="py-4 px-4 text-center font-cinzel font-bold tracking-wider">18 Holes</th>
                                        <th className="py-4 px-4 text-center font-cinzel font-bold tracking-wider">9 Holes</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {greenFees.map((fee, index) => (
                                        <tr key={index} className="fees-table-row hover:bg-brand-yellow/10 transition-colors">
                                            <td className="py-4 px-4 font-montserrat font-semibold text-gray-800 text-sm md:text-base">{fee.category}</td>
                                            <td className="py-4 px-4 text-center font-cinzel font-bold text-brand-blue text-lg">${fee.holes18}</td>
                                            <td className="py-4 px-4 text-center font-cinzel font-bold text-brand-yellow text-lg">${fee.holes9}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Cart Hire Table */}
                    <div className="anim-section">
                        <h2 className="text-3xl font-cinzel text-brand-blue mb-6 border-l-4 border-brand-yellow pl-4">
                            Cart Hire (USD)
                        </h2>
                        <div className="fees-table-card bg-white/95 backdrop-blur-sm rounded-sm shadow-xl overflow-hidden border border-brand-yellow/20 border-t-4 border-brand-blue mb-12">
                            <table className="w-full">
                                <thead className="bg-brand-blue text-white">
                                    <tr>
                                        <th className="py-4 px-4 text-left font-cinzel font-bold tracking-wider">Cart Type</th>
                                        <th className="py-4 px-4 text-center font-cinzel font-bold tracking-wider">18 Holes</th>
                                        <th className="py-4 px-4 text-center font-cinzel font-bold tracking-wider">9 Holes</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {cartHire.map((cart, index) => (
                                        <tr key={index} className="fees-table-row hover:bg-brand-yellow/10 transition-colors">
                                            <td className="py-4 px-4 font-montserrat font-semibold text-gray-800 text-sm md:text-base">{cart.type}</td>
                                            <td className="py-4 px-4 text-center font-cinzel font-bold text-brand-blue text-lg">${cart.holes18}</td>
                                            <td className="py-4 px-4 text-center font-cinzel font-bold text-brand-yellow text-lg">${cart.holes9}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Booking Info */}
                        <div className="bg-brand-blue text-white p-5 md:p-6 rounded-sm shadow-lg anim-section relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-yellow/30 transition-all duration-500"></div>
                            <h3 className="text-xl md:text-2xl font-cinzel font-bold mb-2 relative z-10 text-left">{pageSettings.booking?.title}</h3>
                            <p className="font-montserrat text-sm md:text-base mb-4 text-gray-200 relative z-10 text-left">
                                {pageSettings.booking?.description}
                            </p>
                            <div className="relative z-10 flex flex-col gap-2">
                                <a
                                    href={toPhoneHref(receptionPhone, receptionPhoneType)}
                                    {...toPhoneLinkProps(receptionPhoneType)}
                                    className="group inline-flex items-center gap-3 rounded-sm border border-white/20 bg-white/5 px-4 py-2.5 text-white !no-underline hover:!no-underline focus:!no-underline transition-colors hover:border-brand-yellow hover:bg-white/10"
                                >
                                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-yellow text-brand-blue">
                                        {receptionPhoneType === 'whatsapp' ? <WhatsAppIcon size={16} /> : <Phone size={16} />}
                                    </span>
                                    <span className="font-montserrat text-sm font-semibold leading-tight">
                                        Reception {receptionPhone}
                                    </span>
                                </a>
                                <a
                                    href={`mailto:${receptionEmail}`}
                                    className="group inline-flex items-center gap-3 rounded-sm border border-white/20 bg-white/5 px-4 py-2.5 text-white !no-underline hover:!no-underline focus:!no-underline transition-colors hover:border-brand-yellow hover:bg-white/10"
                                >
                                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-yellow text-brand-blue">
                                        <Mail size={16} />
                                    </span>
                                    <span className="font-montserrat text-[13px] md:text-sm font-semibold leading-tight whitespace-nowrap">
                                        {receptionEmail}
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional Info / Etiquette */}
                <div className="mt-20 anim-section">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                        <div>
                            <img
                                src={pageSettings.etiquette?.image}
                                alt="Golf Etiquette"
                                className="rounded-sm shadow-2xl w-full h-[360px] md:h-[520px] object-cover object-bottom"
                            />
                        </div>
                        <div>
                            <h2 className="text-3xl font-cinzel text-brand-blue mb-6 border-l-4 border-brand-yellow pl-4">
                                {pageSettings.etiquette?.title}
                            </h2>
                            <p className="font-montserrat text-gray-600 mb-6 leading-relaxed">
                                {pageSettings.etiquette?.description}
                            </p>
                            <ul className="space-y-4 font-montserrat text-gray-700">
                                {(pageSettings.etiquette?.items || []).map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="text-brand-yellow mt-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-8">
                                <a href={pageSettings.etiquette?.buttonUrl} className="inline-block bg-brand-blue !text-white visited:!text-white !no-underline hover:!no-underline focus:!no-underline font-cinzel font-bold uppercase tracking-widest px-8 py-3 rounded-sm border border-brand-blue hover:bg-brand-yellow hover:!text-brand-blue hover:border-brand-yellow transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
                                    {pageSettings.etiquette?.buttonText}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default GreenFees;

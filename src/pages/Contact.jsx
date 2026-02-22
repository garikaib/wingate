import React, { useEffect, useRef, useState } from 'react';
import PeekWindowSection from '../components/PeekWindowSection';
import ContactInfoStrip from '../components/ContactInfoStrip';
import {
    getContactDetails,
    toEmailHref,
    toExternalLinkProps,
    toPhoneHref,
} from '../config/contactDetails';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const defaultContactPageSettings = {
    hero: {
        title: 'CONTACT US',
        backgroundImage: '/wp-content/uploads/2026/01/605410094_1291221263032055_7504380241267586286_n-scaled.jpg',
    },
    club: {
        title: 'Wingate Park Golf Club',
    },
    cards: {
        findUsTitle: 'Find Us',
        emailTitle: 'Email Us',
        phoneTitle: 'Call Us',
        socialTitle: 'Follow Us',
    },
    location: {
        mapUrl: 'https://maps.google.com/?q=Wingate+Park+Golf+Club',
        lineOne: 'Alpes Road',
        lineTwo: 'Harare, Zimbabwe',
        mapSectionTitle: 'Find Us',
        mapEmbedUrl: 'https://maps.google.com/maps?q=Wingate%20Park%20Golf%20Club%2C%20Harare&z=14&output=embed',
    },
    teamSection: {
        title: 'Contact Team',
    },
    team: [
        {
            name: 'Daryl Catterall',
            title: 'Club Manager',
            phoneLabel: '0714681041',
            phoneHref: 'tel:0714681041',
            email: 'daryl@wingate.co.zw',
        },
        {
            name: 'D Kasiyandima',
            title: 'Office Assistant Manager',
            phoneLabel: '0719339670',
            phoneHref: 'tel:0719339670',
            email: 'functions@wingate.co.zw',
        },
        {
            name: 'T Musiyakuvi',
            title: 'Office Assistant Manager',
            phoneLabel: '0772339670',
            phoneHref: 'tel:0772339670',
            email: 'reception@wingate.co.zw',
        },
    ],
};

const mergeContactPageSettings = (incoming) => ({
    ...defaultContactPageSettings,
    ...incoming,
    hero: { ...defaultContactPageSettings.hero, ...(incoming?.hero || {}) },
    club: { ...defaultContactPageSettings.club, ...(incoming?.club || {}) },
    cards: { ...defaultContactPageSettings.cards, ...(incoming?.cards || {}) },
    location: { ...defaultContactPageSettings.location, ...(incoming?.location || {}) },
    teamSection: { ...defaultContactPageSettings.teamSection, ...(incoming?.teamSection || {}) },
    team: Array.isArray(incoming?.team) ? incoming.team : defaultContactPageSettings.team,
});

const iconClassName = 'mx-auto mb-4 h-14 w-14 transition-colors duration-300 group-hover:text-brand-yellow';

const HouseSolidIcon = ({ className = '' }) => (
    <svg viewBox="0 0 576 512" aria-hidden="true" className={className} fill="currentColor">
        <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 176c0 26.2-21.3 48.4-47.5 48.4h-113.9c-25.9 0-47-21.1-47-47v-96h-32v96c0 25.9-21.1 47-47 47H112c-26.2 0-48-21.8-48-48V287.6H32c-17.3 0-32-14.3-32-32.1 0-10 4.7-19.5 12.7-25.6L266.6 5.6c12-10 28.3-10.4 40.7 0l256 224.3c7.9 6.1 12.5 15.7 12.5 25.6z" />
    </svg>
);

const MailSolidIcon = ({ className = '' }) => (
    <svg viewBox="0 0 512 512" aria-hidden="true" className={className} fill="currentColor">
        <path d="M64 112c-17.7 0-32 14.3-32 32v17.4l224 128 224-128V144c0-17.7-14.3-32-32-32H64zM480 208.3L272 327.1c-9.9 5.7-22.1 5.7-32 0L32 208.3V368c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V208.3z" />
    </svg>
);

const PhoneSolidIcon = ({ className = '' }) => (
    <svg viewBox="0 0 512 512" aria-hidden="true" className={className} fill="currentColor">
        <path d="M375.8 275.2c-16.5-16.5-42.3-18.6-61.2-5l-36.7 26.4c-6.9 5-16.2 4.2-22.2-1.8l-38.3-38.3c-6-6-6.8-15.3-1.8-22.2l26.4-36.7c13.6-18.9 11.5-44.7-5-61.2L184.7 84c-17.1-17.1-44.5-18.7-63.6-3.7L93.5 102C74.8 116.8 64 139.1 64 162.9c0 40.4 16 79.2 44.6 107.8l196.7 196.7C333.9 496 372.7 512 413.1 512c23.8 0 46.1-10.8 60.9-29.5l21.7-27.6c15-19.1 13.4-46.5-3.7-63.6l-116.2-116.1z" />
    </svg>
);

const FacebookSolidIcon = ({ className = '' }) => (
    <svg viewBox="0 0 320 512" aria-hidden="true" className={className} fill="currentColor">
        <path d="M279.1 288l14.2-92.7h-88.9v-60.1c0-25.3 12.4-50 52.2-50h40.4V6.3S260.4 0 225.4 0c-73.2 0-121.1 44.4-121.1 124.7v70.6H22.9V288h81.4v224h100.2V288h74.6z" />
    </svg>
);

const InstagramSolidIcon = ({ className = '' }) => (
    <svg viewBox="0 0 448 512" aria-hidden="true" className={className} fill="currentColor">
        <path d="M224.1 141c-63.6 0-115 51.4-115 115s51.4 115 115 115 115-51.4 115-115-51.5-115-115-115zm0 189.6c-41.2 0-74.6-33.4-74.6-74.6s33.4-74.6 74.6-74.6 74.6 33.4 74.6 74.6-33.4 74.6-74.6 74.6zm146.4-194.3c0 14.9-12 26.9-26.9 26.9-14.9 0-26.9-12-26.9-26.9 0-14.9 12-26.9 26.9-26.9 14.9 0 26.9 12 26.9 26.9zm76.1 27.2c-1.7-35.3-9.7-66.7-35.5-92.5-25.8-25.8-57.2-33.8-92.5-35.5-36.5-2.1-145.9-2.1-182.4 0-35.3 1.7-66.7 9.7-92.5 35.5-25.8 25.8-33.8 57.2-35.5 92.5-2.1 36.5-2.1 145.9 0 182.4 1.7 35.3 9.7 66.7 35.5 92.5 25.8 25.8 57.2 33.8 92.5 35.5-36.5 2.1-145.9 2.1 182.4 0 35.3-1.7 66.7-9.7 92.5-35.5 25.8-25.8 33.8-57.2 35.5-92.5 2.1-36.5 2.1-145.8 0-182.4zm-48 221.8c-7.7 19.3-22.6 34.2-41.9 41.9-29 11.5-97.8 8.8-132.6 8.8s-103.7 2.7-132.6-8.8c-19.3-7.7-34.2-22.6-41.9-41.9-11.5-29-8.8-97.8-8.8-132.6s-2.7-103.7 8.8-132.6c7.7-19.3 22.6-34.2 41.9-41.9 29-11.5 97.8-8.8 132.6-8.8s103.7-2.7 132.6 8.8c19.3 7.7 34.2 22.6 41.9 41.9 11.5 29 8.8 97.8 8.8 132.6s2.8 103.7-8.8 132.6z" />
    </svg>
);

const Contact = () => {
    const contactDetails = getContactDetails();
    const containerRef = useRef(null);
    const [pageSettings, setPageSettings] = useState(defaultContactPageSettings);

    useEffect(() => {
        const fetchSettings = async () => {
            try {
                const response = await fetch('/wp-json/wingate/v1/contact-page-settings');
                if (!response.ok) {
                    return;
                }
                const data = await response.json();
                setPageSettings(mergeContactPageSettings(data));
            } catch (error) {
                // Keep defaults when endpoint is unavailable.
            }
        };

        fetchSettings();
    }, []);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero Title
            gsap.from(".anim-hero-title", {
                y: 50, opacity: 0, duration: 1.2, ease: "power3.out"
            });

            // Contact Cards
            gsap.from(".anim-contact-card", {
                scrollTrigger: { trigger: ".cards-container", start: "top 80%" },
                y: 60, opacity: 0, duration: 1, stagger: 0.2, ease: "power2.out"
            });

            // Map
            gsap.from(".anim-map", {
                scrollTrigger: { trigger: ".anim-map-container", start: "top 75%" },
                scale: 0.95, opacity: 0, duration: 1.2, ease: "power2.out"
            });

            // Team: avoid pre-hiding cards before trigger activates
            gsap.fromTo(
                ".anim-team-member",
                { y: 50, autoAlpha: 0 },
                {
                    y: 0,
                    autoAlpha: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "back.out(1.5)",
                    immediateRender: false,
                    scrollTrigger: {
                        trigger: ".team-container",
                        start: "top 75%",
                        once: true,
                    },
                }
            );

        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div className="w-full" ref={containerRef}>
            <section className="relative h-[58vh] min-h-[420px] w-full overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${pageSettings.hero.backgroundImage}')` }}
                >
                    <div className="absolute inset-0 bg-black/35"></div>
                </div>
                <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
                    <h1 className="font-cinzel text-5xl font-bold tracking-wide text-white md:text-7xl anim-hero-title">
                        {pageSettings.hero.title}
                    </h1>
                </div>
            </section>

            <section className="bg-neutral-100 px-6 py-18 lg:px-10">
                <div className="mx-auto max-w-6xl">
                    <h2 className="mb-10 text-center font-cinzel text-4xl font-bold uppercase tracking-wide text-brand-blue md:text-5xl">
                        {pageSettings.club.title}
                    </h2>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3 cards-container">
                        <a
                            href={pageSettings.location.mapUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="group rounded-sm bg-white p-9 text-center shadow-sm transition-transform hover:-translate-y-1 anim-contact-card"
                        >
                            <HouseSolidIcon className={`${iconClassName} text-brand-blue`} />
                            <h3 className="mb-3 font-cinzel text-2xl font-bold uppercase tracking-wide text-brand-blue transition-colors duration-300 group-hover:text-brand-yellow">{pageSettings.cards.findUsTitle}</h3>
                            <p className="font-montserrat text-base text-slate-700 transition-colors duration-300 group-hover:text-brand-yellow">{pageSettings.location.lineOne}</p>
                            <p className="font-montserrat text-base text-slate-700 transition-colors duration-300 group-hover:text-brand-yellow">{pageSettings.location.lineTwo}</p>
                        </a>

                        <a
                            href={toEmailHref(contactDetails.email)}
                            className="group rounded-sm bg-white p-9 text-center shadow-sm transition-transform hover:-translate-y-1 anim-contact-card"
                        >
                            <MailSolidIcon className={`${iconClassName} text-brand-blue`} />
                            <h3 className="mb-3 font-cinzel text-2xl font-bold uppercase tracking-wide text-brand-blue transition-colors duration-300 group-hover:text-brand-yellow">{pageSettings.cards.emailTitle}</h3>
                            <p className="font-montserrat text-base text-slate-700 transition-colors duration-300 group-hover:text-brand-yellow">{contactDetails.email}</p>
                        </a>

                        <a
                            href={toPhoneHref(contactDetails.phone)}
                            className="group rounded-sm bg-white p-9 text-center shadow-sm transition-transform hover:-translate-y-1 anim-contact-card"
                        >
                            <PhoneSolidIcon className={`${iconClassName} text-brand-blue`} />
                            <h3 className="mb-3 font-cinzel text-2xl font-bold uppercase tracking-wide text-brand-blue transition-colors duration-300 group-hover:text-brand-yellow">{pageSettings.cards.phoneTitle}</h3>
                            <p className="font-montserrat text-base text-slate-700 transition-colors duration-300 group-hover:text-brand-yellow">{contactDetails.phone}</p>
                        </a>
                    </div>

                    <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                        <a
                            href={contactDetails.facebook}
                            {...toExternalLinkProps(contactDetails.facebook)}
                            className="group rounded-sm bg-white p-9 text-center shadow-sm transition-transform hover:-translate-y-1 anim-contact-card"
                        >
                            <FacebookSolidIcon className={`${iconClassName} text-brand-blue`} />
                            <h3 className="font-cinzel text-2xl font-bold uppercase tracking-wide text-brand-blue transition-colors duration-300 group-hover:text-brand-yellow">{pageSettings.cards.socialTitle}</h3>
                        </a>

                        <a
                            href={contactDetails.instagram}
                            {...toExternalLinkProps(contactDetails.instagram)}
                            className="group rounded-sm bg-white p-9 text-center shadow-sm transition-transform hover:-translate-y-1 anim-contact-card"
                        >
                            <InstagramSolidIcon className={`${iconClassName} text-brand-blue`} />
                            <h3 className="font-cinzel text-2xl font-bold uppercase tracking-wide text-brand-blue transition-colors duration-300 group-hover:text-brand-yellow">{pageSettings.cards.socialTitle}</h3>
                        </a>
                    </div>
                </div>
            </section>

            <section className="bg-slate-100 py-16 anim-map-container">
                <div className="mx-auto max-w-6xl px-6 lg:px-10">
                    <h2 className="mb-8 text-center font-cinzel text-4xl font-bold uppercase tracking-wide text-brand-blue">
                        {pageSettings.location.mapSectionTitle}
                    </h2>
                </div>
                <div className="relative left-1/2 w-screen -translate-x-1/2">
                    <div className="relative anim-map">
                        <iframe
                            title="Wingate Park Golf Club Location"
                            src={pageSettings.location.mapEmbedUrl}
                            className="h-[560px] w-full"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-blue/25 via-golf-gold/10 to-slate-900/20"></div>
                        <div className="pointer-events-none absolute inset-0 ring-1 ring-golf-gold/35"></div>
                    </div>
                </div>
            </section>

            <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#f8f8f3] to-[#f2f1ea] px-6 py-20 lg:px-10 lg:py-24">
                <div className="pointer-events-none absolute -left-20 top-6 h-64 w-64 rounded-full bg-brand-yellow/15 blur-3xl"></div>
                <div className="pointer-events-none absolute -right-24 bottom-4 h-72 w-72 rounded-full bg-brand-blue/10 blur-3xl"></div>
                <div className="mx-auto max-w-6xl">
                    <div className="mb-12 text-center">
                        <h2 className="font-cinzel text-4xl font-bold uppercase tracking-wide text-brand-blue md:text-5xl">
                            {pageSettings.teamSection.title}
                        </h2>
                        <div className="mx-auto mt-4 h-1 w-24 bg-brand-yellow"></div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3 team-container">
                        {pageSettings.team.map((person, index) => (
                            <article
                                key={person.email || index}
                                className="group rounded-2xl border border-brand-blue/10 bg-white/90 px-7 py-9 text-center shadow-[0_18px_30px_rgba(14,27,61,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_36px_rgba(14,27,61,0.16)] anim-team-member"
                            >
                                <h3 className="relative mb-6 inline-block font-cinzel text-[2rem] font-bold uppercase leading-tight tracking-wide text-brand-blue">
                                    {person.name}
                                    <span className="absolute -bottom-3 left-1/2 h-[3px] w-14 -translate-x-1/2 bg-brand-yellow transition-all duration-300 group-hover:w-20"></span>
                                </h3>

                                <p className="mb-5 font-montserrat text-xs font-bold uppercase tracking-[0.22em] text-brand-blue/80">
                                    {person.title}
                                </p>

                                <div className="space-y-2 font-montserrat text-base">
                                    <p>
                                        <a
                                            href={person.phoneHref}
                                            className="font-semibold text-slate-700 decoration-brand-yellow decoration-2 underline-offset-4 transition-colors hover:text-brand-blue"
                                        >
                                            {person.phoneLabel}
                                        </a>
                                    </p>
                                    <p>
                                        <a
                                            href={`mailto:${person.email}`}
                                            className="text-slate-700 decoration-brand-yellow decoration-2 underline-offset-4 transition-colors hover:text-brand-blue"
                                        >
                                            {person.email}
                                        </a>
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <PeekWindowSection />
            <ContactInfoStrip />
        </div>
    );
};

export default Contact;

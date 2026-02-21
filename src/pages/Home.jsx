import React, { useEffect, useRef } from 'react';
import Hero from '../components/Hero';
import PeekWindowSection from '../components/PeekWindowSection';
import ContactInfoStrip from '../components/ContactInfoStrip';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Title Animation
            gsap.from(".anim-title-block", {
                scrollTrigger: { trigger: ".anim-title-block", start: "top 85%" },
                y: 60, opacity: 0, duration: 1.2, ease: "power3.out"
            });

            // Cards Stagger
            gsap.from(".anim-card", {
                scrollTrigger: { trigger: ".cards-container", start: "top 75%" },
                y: 100, opacity: 0, duration: 1, stagger: 0.2, ease: "power2.out"
            });

            // Welcome Section
            gsap.from(".anim-welcome-img", {
                scrollTrigger: { trigger: ".anim-welcome-section", start: "top 70%" },
                x: -50, opacity: 0, duration: 1.2, ease: "power3.out"
            });
            gsap.from(".anim-welcome-text", {
                scrollTrigger: { trigger: ".anim-welcome-section", start: "top 70%" },
                x: 50, opacity: 0, duration: 1.2, delay: 0.2, ease: "power3.out"
            });

        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div className="w-full" ref={containerRef}>
            <Hero />
            {/* Public Course, Private Experience Section */}
            <section className="bg-brand-gray py-20 px-6 lg:px-10">
                <div className="mx-auto max-w-screen-2xl">
                    <div className="mb-16 inline-block anim-title-block">
                        <h2 className="font-cinzel text-5xl font-bold uppercase tracking-tight text-brand-blue md:text-6xl lg:text-7xl leading-none">
                            Public course,
                            <br />
                            private experience
                        </h2>
                        <div className="mt-6 h-1 w-24 bg-brand-yellow"></div>
                    </div>

                    <div className="grid grid-cols-1 gap-10 md:grid-cols-3 cards-container">
                        {/* Card 1: Membership */}
                        <div className="flex flex-col anim-card">
                            <div className="group relative h-[480px] overflow-hidden rounded-3xl border border-brand-yellow/25 shadow-[0_24px_60px_rgba(14,27,61,0.22)] mb-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_34px_80px_rgba(14,27,61,0.32)]">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{
                                        backgroundImage:
                                            "url('/wp-content/uploads/2026/02/20260126_140911-scaled.jpg')",
                                    }}
                                ></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent"></div>
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/30 via-transparent to-brand-blue/40 opacity-70 transition-opacity duration-500 group-hover:opacity-90"></div>
                                <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-brand-yellow/40 blur-3xl transition-all duration-500 group-hover:scale-110"></div>
                                <div className="absolute bottom-0 left-0 w-full p-10">
                                    <h3 className="mb-2 font-cinzel text-4xl font-bold text-white uppercase leading-tight">
                                        Join Our Club
                                    </h3>
                                    <p className="font-montserrat text-xs font-bold text-white uppercase tracking-[0.2em] opacity-90">
                                        Membership options & application
                                    </p>
                                </div>
                            </div>
                            <a href="/membership/" className="inline-flex w-fit items-center justify-center rounded-sm bg-brand-blue px-10 py-4 text-center font-montserrat text-xs font-bold uppercase tracking-widest text-white no-underline transition-all duration-300 shadow-lg border border-brand-blue hover:-translate-y-1 hover:bg-brand-yellow hover:border-brand-yellow hover:text-brand-blue focus:no-underline">
                                Join Our Club
                            </a>
                        </div>

                        {/* Card 2: Rates */}
                        <div className="flex flex-col anim-card">
                            <div className="group relative h-[480px] overflow-hidden rounded-3xl border border-brand-yellow/25 shadow-[0_24px_60px_rgba(14,27,61,0.22)] mb-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_34px_80px_rgba(14,27,61,0.32)]">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{
                                        backgroundImage:
                                            "url('/wp-content/uploads/2026/02/20260208_131606-scaled.jpg')",
                                    }}
                                ></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent"></div>
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/35 via-transparent to-brand-yellow/35 opacity-70 transition-opacity duration-500 group-hover:opacity-95"></div>
                                <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-brand-blue/40 blur-3xl transition-all duration-500 group-hover:scale-110"></div>
                                <div className="absolute bottom-0 left-0 w-full p-10">
                                    <h3 className="mb-2 font-cinzel text-4xl font-bold text-white uppercase leading-tight">
                                        Rates
                                    </h3>
                                    <p className="font-montserrat text-xs font-bold text-white uppercase tracking-[0.2em] opacity-90">
                                        Membership & visitor pricing
                                    </p>
                                </div>
                            </div>
                            <a href="/rates/" className="inline-flex w-fit items-center justify-center rounded-sm bg-brand-blue px-10 py-4 text-center font-montserrat text-xs font-bold uppercase tracking-widest text-white no-underline transition-all duration-300 shadow-lg border border-brand-blue hover:-translate-y-1 hover:bg-brand-yellow hover:border-brand-yellow hover:text-brand-blue focus:no-underline">
                                View Rates
                            </a>
                        </div>

                        {/* Card 3: Green Fees */}
                        <div className="flex flex-col anim-card">
                            <div className="group relative h-[480px] overflow-hidden rounded-3xl border border-brand-yellow/25 shadow-[0_24px_60px_rgba(14,27,61,0.22)] mb-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_34px_80px_rgba(14,27,61,0.32)]">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{
                                        backgroundImage:
                                            "url('/wp-content/uploads/2026/01/2-3.jpg')",
                                    }}
                                ></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent"></div>
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/25 via-transparent to-brand-blue/45 opacity-75 transition-opacity duration-500 group-hover:opacity-95"></div>
                                <div className="absolute -top-14 left-8 h-32 w-32 rounded-full bg-brand-yellow/35 blur-3xl transition-all duration-500 group-hover:scale-110"></div>
                                <div className="absolute bottom-0 left-0 w-full p-10">
                                    <h3 className="mb-2 font-cinzel text-4xl font-bold text-white uppercase leading-tight">
                                        Green Fees
                                    </h3>
                                    <p className="font-montserrat text-xs font-bold text-white uppercase tracking-[0.2em] opacity-90">
                                        Daily fees & cart hire
                                    </p>
                                </div>
                            </div>
                            <a href="/green-fees/" className="inline-flex w-fit items-center justify-center rounded-sm bg-brand-blue px-10 py-4 text-center font-montserrat text-xs font-bold uppercase tracking-widest text-white no-underline transition-all duration-300 shadow-lg border border-brand-blue hover:-translate-y-1 hover:bg-brand-yellow hover:border-brand-yellow hover:text-brand-blue focus:no-underline">
                                View Green Fees
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Welcome Section */}
            <section className="bg-white px-6 py-20 lg:px-10 lg:py-24 anim-welcome-section">
                <div className="mx-auto max-w-screen-2xl">
                    <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 xl:gap-16">
                        {/* Image Side */}
                        <div className="relative mx-auto w-full max-w-[640px] lg:mx-0 anim-welcome-img">
                            <div className="overflow-hidden rounded-2xl ring-1 ring-black/5 shadow-[0_24px_60px_rgba(14,27,61,0.16)]">
                                <img
                                    src="/wp-content/uploads/2026/02/20260125_134724-scaled.jpg"
                                    alt="Wingate Park Golf Club Entrance"
                                    className="h-[460px] w-full object-cover object-center transition-transform duration-700 hover:scale-[1.03] sm:h-[560px] lg:h-[620px] xl:h-[640px]"
                                />
                            </div>
                            <div className="absolute -bottom-5 -right-5 -z-10 hidden h-[92%] w-[92%] rounded-2xl border border-brand-yellow/45 bg-gradient-to-br from-brand-yellow/8 to-transparent lg:block"></div>
                        </div>

                        {/* Text Side */}
                        <div className="mx-auto w-full max-w-[620px] lg:mx-0 lg:pt-8 xl:pt-10 anim-welcome-text">
                            <div className="inline-block mb-8">
                                <h2 className="mb-4 font-cinzel text-4xl font-bold uppercase tracking-wide text-brand-blue md:text-5xl lg:text-[3.2rem] lg:leading-[1.02]">
                                    Welcome to
                                    <br />
                                    Wingate Park
                                </h2>
                                <div className="h-1 w-20 bg-brand-yellow"></div>
                            </div>

                            <div className="space-y-6 font-montserrat text-lg leading-[1.65] text-slate-700">
                                <p>
                                    Wingate Park Golf Club is an 18-hole, well-manicured, and wooded course founded 52
                                    years ago. Located in the tranquil Pomona area of Harare, it serves as a premier
                                    destination for golfers of all levels.
                                </p>
                                <p>
                                    Today, the club is open to all, offering a unique and challenging golfing
                                    experience with fairways lined with mature trees. The "Loyal & Ancient" bar and
                                    in-house catering provide a relaxing post-round atmosphere where members and guests
                                    can unwind.
                                </p>
                                <p className="font-semibold text-brand-blue">
                                    Whether you're looking for a competitive round or a leisurely walk in the woods,
                                    Wingate Park welcomes you.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <PeekWindowSection />
            <ContactInfoStrip />
        </div>
    );
};

export default Home;

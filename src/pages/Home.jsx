import React from 'react';
import Hero from '../components/Hero';
import PeekWindowSection from '../components/PeekWindowSection';
import ContactInfoStrip from '../components/ContactInfoStrip';

const Home = () => {
    return (
        <div className="w-full">
            <Hero />
            {/* Public Course, Private Experience Section */}
            <section className="bg-brand-gray py-20 px-6 lg:px-10">
                <div className="mx-auto max-w-screen-2xl">
                    <div className="mb-16 inline-block">
                        <h2 className="font-cinzel text-5xl font-bold uppercase tracking-tight text-brand-blue md:text-6xl lg:text-7xl leading-none">
                            Public course,
                            <br />
                            private experience
                        </h2>
                        <div className="mt-6 h-1 w-24 bg-brand-yellow"></div>
                    </div>

                    <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
                        {/* Card 1: Membership */}
                        <div className="flex flex-col">
                            <div className="group relative h-[480px] overflow-hidden rounded-3xl shadow-2xl mb-6">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{
                                        backgroundImage:
                                            "url('https://new-wingate.ddev.site/wp-content/uploads/2026/02/20260126_140911-scaled.jpg')",
                                    }}
                                ></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 w-full p-10">
                                    <h3 className="mb-2 font-cinzel text-4xl font-bold text-white uppercase leading-tight">
                                        Join Our Club
                                    </h3>
                                    <p className="font-montserrat text-xs font-bold text-white uppercase tracking-[0.2em] opacity-90">
                                        Join our sand creek station e-club
                                    </p>
                                </div>
                            </div>
                            <button className="w-fit rounded-sm bg-brand-blue px-10 py-4 font-montserrat text-xs font-bold text-white uppercase tracking-widest hover:bg-brand-yellow hover:text-brand-blue transition-all duration-300 shadow-lg border border-brand-blue hover:border-brand-yellow">
                                Learn More
                            </button>
                        </div>

                        {/* Card 2: The Course */}
                        <div className="flex flex-col">
                            <div className="group relative h-[480px] overflow-hidden rounded-3xl shadow-2xl mb-6">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{
                                        backgroundImage:
                                            "url('https://new-wingate.ddev.site/wp-content/uploads/2026/02/20260208_131606-scaled.jpg')",
                                    }}
                                ></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 w-full p-10">
                                    <h3 className="mb-2 font-cinzel text-4xl font-bold text-white uppercase leading-tight">
                                        Hole By Hole
                                    </h3>
                                    <p className="font-montserrat text-xs font-bold text-white uppercase tracking-[0.2em] opacity-90">
                                        18 Holes
                                    </p>
                                </div>
                            </div>
                            <button className="w-fit rounded-sm bg-brand-blue px-10 py-4 font-montserrat text-xs font-bold text-white uppercase tracking-widest hover:bg-brand-yellow hover:text-brand-blue transition-all duration-300 shadow-lg border border-brand-blue hover:border-brand-yellow">
                                Learn More
                            </button>
                        </div>

                        {/* Card 3: Contact Us */}
                        <div className="flex flex-col">
                            <div className="group relative h-[480px] overflow-hidden rounded-3xl shadow-2xl mb-6">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{
                                        backgroundImage:
                                            "url('https://new-wingate.ddev.site/wp-content/uploads/2026/01/2-3.jpg')",
                                    }}
                                ></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 w-full p-10">
                                    <h3 className="mb-2 font-cinzel text-4xl font-bold text-white uppercase leading-tight">
                                        Contact Us
                                    </h3>
                                    <p className="font-montserrat text-xs font-bold text-white uppercase tracking-[0.2em] opacity-90">
                                        Now Accepting Bookings
                                    </p>
                                </div>
                            </div>
                            <button className="w-fit rounded-sm bg-brand-blue px-10 py-4 font-montserrat text-xs font-bold text-white uppercase tracking-widest hover:bg-brand-yellow hover:text-brand-blue transition-all duration-300 shadow-lg border border-brand-blue hover:border-brand-yellow">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Welcome Section */}
            <section className="bg-white px-6 py-20 lg:px-10 lg:py-24">
                <div className="mx-auto max-w-screen-2xl">
                    <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 xl:gap-16">
                        {/* Image Side */}
                        <div className="relative mx-auto w-full max-w-[640px] lg:mx-0">
                            <div className="overflow-hidden rounded-2xl ring-1 ring-black/5 shadow-[0_24px_60px_rgba(14,27,61,0.16)]">
                                <img
                                    src="https://new-wingate.ddev.site/wp-content/uploads/2026/02/20260125_134724-scaled.jpg"
                                    alt="Wingate Park Golf Club Entrance"
                                    className="h-[460px] w-full object-cover object-center transition-transform duration-700 hover:scale-[1.03] sm:h-[560px] lg:h-[620px] xl:h-[640px]"
                                />
                            </div>
                            <div className="absolute -bottom-5 -right-5 -z-10 hidden h-[92%] w-[92%] rounded-2xl border border-brand-yellow/45 bg-gradient-to-br from-brand-yellow/8 to-transparent lg:block"></div>
                        </div>

                        {/* Text Side */}
                        <div className="mx-auto w-full max-w-[620px] lg:mx-0 lg:pt-8 xl:pt-10">
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

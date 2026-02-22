import React, { useEffect, useState } from 'react';

const ClubHouse = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className={`w-full transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {/* Hero Section */}
            <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden bg-brand-blue">
                <div className="absolute inset-0 bg-[url('https://new-wingate.ddev.site/wp-content/uploads/2026/02/20260112_120717-scaled.jpg')] bg-cover bg-center opacity-40"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/80 via-transparent to-brand-blue/90"></div>

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <h1 className="font-cinzel text-5xl md:text-7xl lg:text-8xl text-brand-yellow font-bold mb-6 drop-shadow-2xl">
                        The Loyal & Ancient
                    </h1>
                    <div className="h-1 w-32 bg-white mx-auto mb-8"></div>
                    <p className="font-montserrat text-white text-lg md:text-xl tracking-widest uppercase font-light">
                        Est. 1997
                    </p>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="font-cinzel text-4xl md:text-5xl text-brand-blue mb-8">
                        A Tradition of Hospitality
                    </h2>
                    <div className="space-y-6 font-montserrat text-gray-700 text-lg leading-relaxed show-on-scroll">
                        <p>
                            Nestled within the tranquil Pomona area of Harare, the Loyal & Ancient bar stands as a testament to the enduring spirit of camaraderie and tradition at Wingate Park Golf Club. Founded in 1997, this cherished establishment has become more than just a watering hole; it is the beating heart of our community.
                        </p>
                        <p>
                            Here, the clinking of glasses echoes the laughter of friends, both old and new. Whether you are recounting the triumphs of a round well-played or simply unwinding in the golden glow of the afternoon sun, the atmosphere remains effortlessly inviting.
                        </p>
                        <p>
                            Our in-house catering team takes pride in serving exquisite meals that complement the rustic elegance of our surroundings. From casual bites to elaborate banquets, every dish is prepared with passion and served with a smile. We invite you to step inside, relax, and become a part of our story.
                        </p>
                    </div>
                </div>
            </section>

            {/* Plugin Gallery Mount */}
            <div
                className="wingate-tools-gallery-mount"
                data-gallery-id=""
                data-gallery-title="Explore The Club House"
                data-gallery-slug="club-house-gallery"
            ></div>

            {/* CTA Section */}
            <section className="py-24 bg-brand-blue relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div className="max-w-4xl mx-auto text-center relative z-10 px-6">
                    <h2 className="font-cinzel text-4xl md:text-6xl text-white mb-8">
                        Host Your Next Event
                    </h2>
                    <p className="font-montserrat text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
                        From weddings to corporate retreats, the Loyal & Ancient provides a stunning backdrop for unforgettable moments.
                    </p>
                    <a
                        href="/contact-us/"
                        className="inline-block bg-brand-yellow text-brand-blue font-montserrat font-bold py-4 px-12 rounded-sm hover:bg-white transition-colors duration-300 shadow-lg uppercase tracking-widest"
                    >
                        Book An Event
                    </a>
                </div>
            </section>
        </div>
    );
};

export default ClubHouse;

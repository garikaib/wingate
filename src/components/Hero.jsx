import React from 'react';

const Hero = () => {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/wp-content/uploads/2024/07/IMG-20240720-WA0010a.png')",
                }}
            >
                {/* Overlay for readability */}
                <div className="absolute inset-0 bg-black/30"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 flex flex-col items-center">
                <h2 className="text-white font-cinzel text-sm md:text-lg tracking-[0.3em] mb-4 font-bold">
                    WELCOME TO
                </h2>
                <h1 className="text-white font-cinzel text-5xl md:text-7xl lg:text-9xl font-bold tracking-wider mb-2 drop-shadow-xl leading-tight">
                    WINGATE PARK
                </h1>
                <h2 className="text-white font-cinzel text-3xl md:text-5xl lg:text-6xl tracking-widest mb-6 drop-shadow-lg">
                    GOLF CLUB
                </h2>
                <div className="w-24 h-1 bg-brand-yellow mb-8"></div>

                <p className="text-white font-montserrat text-sm md:text-lg tracking-[0.2em] mb-10 max-w-2xl">
                    A PRESTIGIOUS 18-HOLE CHAMPIONSHIP COURSE
                </p>

                <a href="/booking/" className="inline-flex items-center justify-center rounded-sm border border-brand-yellow bg-brand-yellow px-10 py-4 text-center font-montserrat text-sm font-bold tracking-[0.15em] text-brand-blue no-underline transition-all duration-300 shadow-lg transform hover:-translate-y-1 hover:bg-brand-blue hover:border-brand-blue hover:text-white hover:no-underline focus:no-underline md:text-base">
                    BOOK A TEE TIME
                </a>
            </div>

            {/* Scroll Indicator (optional) */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
                <div className="w-0.5 h-16 bg-white/50"></div>
            </div>
        </section>
    );
};

export default Hero;

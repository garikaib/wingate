import React from 'react';

const Hero = () => {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('https://new-wingate.ddev.site/wp-content/uploads/2024/07/IMG-20240720-WA0010a.png')",
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

                <button className="bg-brand-yellow text-brand-blue font-montserrat font-bold text-sm md:text-base py-4 px-10 rounded-sm hover:bg-brand-blue hover:text-brand-yellow transition-all duration-300 tracking-[0.15em] border border-brand-yellow hover:border-brand-blue shadow-lg transform hover:-translate-y-1">
                    BOOK A TEE TIME
                </button>
            </div>

            {/* Scroll Indicator (optional) */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
                <div className="w-0.5 h-16 bg-white/50"></div>
            </div>
        </section>
    );
};

export default Hero;

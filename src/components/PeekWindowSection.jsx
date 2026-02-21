import React from 'react';

const defaultWindowImage = '/wp-content/uploads/2026/02/20251127_102423-scaled.jpg';

const PeekWindowSection = ({ imageUrl = defaultWindowImage }) => {
    return (
        <section className="bg-[#efeee8] py-12 md:py-16">
            <div className="relative mx-auto h-[220px] w-full overflow-hidden md:h-[260px]">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-fixed"
                    style={{ backgroundImage: `url('${imageUrl}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/18 via-transparent to-brand-blue/18" />
                <div className="absolute inset-0 ring-1 ring-black/8" />
            </div>
        </section>
    );
};

export default PeekWindowSection;

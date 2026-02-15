import React, { useState, useEffect } from 'react';
import { Facebook, Instagram, ArrowUp } from 'lucide-react';
import { getContactDetails, toExternalLinkProps, toPhoneHref } from '../config/contactDetails';

const Footer = () => {
    const [showScroll, setShowScroll] = useState(false);
    const contactDetails = getContactDetails();

    useEffect(() => {
        const checkScrollTop = () => {
            if (!showScroll && window.scrollY > 400) {
                setShowScroll(true);
            } else if (showScroll && window.scrollY <= 400) {
                setShowScroll(false);
            }
        };

        window.addEventListener('scroll', checkScrollTop);
        return () => window.removeEventListener('scroll', checkScrollTop);
    }, [showScroll]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="w-full bg-brand-blue text-gray-300 pt-16 pb-8 border-t border-brand-yellow/20 relative">
            <div className="container mx-auto px-6 lg:px-10">

                {/* Top Section: Logo */}
                <div className="flex justify-center mb-12">
                    <img
                        src="https://new-wingate.ddev.site/wp-content/uploads/2026/02/wingate_logo-1.webp"
                        alt="Wingate Golf Club"
                        className="h-28 w-auto opacity-90 filter drop-shadow-lg" // Increased size and adjusted filters
                    />
                </div>

                {/* 3 Columns Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center mb-16 relative">
                    {/* Vertical Deviders for MD+ */}
                    <div className="hidden md:block absolute top-0 bottom-0 left-1/3 w-px bg-white/10"></div>
                    <div className="hidden md:block absolute top-0 bottom-0 right-1/3 w-px bg-white/10"></div>

                    {/* Column 1: Locations */}
                    <div className="flex flex-col items-center">
                        <h3 className="font-cinzel text-xl text-white mb-4 relative inline-block">
                            Wingate Golf Club
                            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-brand-yellow/50"></span>
                        </h3>
                        <div className="font-montserrat text-sm leading-relaxed space-y-1">
                            <p>73JG+RJ2, Alpes Rd, Harare, Zimbabwe</p>
                            <a href={toPhoneHref(contactDetails.phone)} className="hover:text-brand-yellow transition-colors block mt-2 underline">{contactDetails.phone}</a>
                        </div>
                    </div>

                    {/* Column 2: Secondary Location (Placeholder) - or maybe Club House hours? Keeping structure but updating colors */}
                    <div className="flex flex-col items-center">
                        <h3 className="font-cinzel text-xl text-white mb-4 relative inline-block">
                            Club House
                            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-brand-yellow/50"></span>
                        </h3>
                        <div className="font-montserrat text-sm leading-relaxed space-y-1">
                            <p>Open Daily</p>
                            <p>7:00 AM - 7:00 PM</p>
                            <a href={toPhoneHref(contactDetails.phone)} className="hover:text-brand-yellow transition-colors block mt-2 underline">{contactDetails.phone}</a>
                        </div>
                    </div>

                    {/* Column 3: Social Media */}
                    <div className="flex flex-col items-center">
                        <h3 className="font-cinzel text-xl text-white mb-4 relative inline-block">
                            Social Media
                            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-brand-yellow/50"></span>
                        </h3>
                        <div className="flex space-x-4 mt-2">
                            <a href={contactDetails.facebook} {...toExternalLinkProps(contactDetails.facebook)} className="flex justify-center items-center w-10 h-10 bg-white/10 text-white hover:bg-brand-yellow hover:text-brand-blue transition-all duration-300 rounded-sm">
                                <Facebook size={20} fill="currentColor" strokeWidth={0} />
                            </a>
                            <a href={contactDetails.instagram} {...toExternalLinkProps(contactDetails.instagram)} className="flex justify-center items-center w-10 h-10 bg-white/10 text-white hover:bg-brand-yellow hover:text-brand-blue transition-all duration-300 rounded-sm">
                                <Instagram size={20} strokeWidth={2.5} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-montserrat text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Wingate Golf Club. All Rights Reserved.</p>
                    <div className="mt-4 md:mt-0 space-x-6">
                        <a href="#" className="hover:text-brand-yellow transition-colors">Join Our E-Club</a>
                        <a href="#" className="hover:text-brand-yellow transition-colors">Privacy Policy</a>
                    </div>
                </div>

            </div>

            {/* Scroll to Top Button */}
            <button
                className={`fixed bottom-8 right-8 bg-brand-yellow text-brand-blue p-3 shadow-lg hover:bg-white hover:text-brand-blue transition-all duration-300 z-50 ${showScroll ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
                onClick={scrollToTop}
                aria-label="Scroll to top"
            >
                <ArrowUp size={20} />
            </button>
        </footer>
    );
};

export default Footer;

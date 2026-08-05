import React from 'react';
import { Phone, Mail, Facebook, Instagram, ChevronDown } from 'lucide-react';
import {
    getContactDetails,
    toEmailHref,
    toExternalLinkProps,
    toPhoneHref,
    toPhoneLinkProps,
} from '../config/contactDetails';

const WhatsAppIcon = ({ size = 12, className = '' }) => (
    <svg viewBox="0 0 448 512" width={size} height={size} aria-hidden="true" className={className} fill="currentColor">
        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32 101.5 32 1.9 131.6 1.9 254c0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.5-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2s-9.7 1.4-14.8 6.9c-5.1 5.5-19.4 19-19.4 46.3s19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
    </svg>
);

const Header = () => {
    const contactDetails = getContactDetails();
    const PhoneIcon = contactDetails.phoneType === 'whatsapp' ? WhatsAppIcon : Phone;

    const navItems = [
        {
            label: 'Home',
            href: '/',
            hasDropdown: false
        },
        {
            label: 'The Course',
            href: '/course/',
            hasDropdown: true,
            subItems: [
                { label: 'COURSE DETAILS', href: '/course/' },
                { label: 'RATES', href: '/rates/' },
                { label: 'HOLE BY HOLE', href: '/hole-by-hole/' },
                { label: 'GREEN FEES', href: '/green-fees/' },
                { label: 'MEN\'S LEAGUE', href: '#' },
            ]
        },
        {
            label: 'Booking',
            href: '/booking/',
            hasDropdown: true,
            subItems: [
                { label: 'BOOK A TEE TIME', href: '/booking/' },
            ]
        },
        {
            label: 'Membership',
            href: '/membership/',
            hasDropdown: true,
            subItems: [
                { label: 'MEMBERSHIP OPTIONS', href: '/membership/' },
                { label: 'APPLY NOW', href: '/membership/#apply' },
            ]
        },
        {
            label: 'The Club House',
            href: '/club-house/',
            hasDropdown: false
        },
        {
            label: 'Upcoming Events',
            href: '/events/',
            hasDropdown: true,
            subItems: [
                { label: 'TOURNAMENTS', href: '/events/tournament/' },
                { label: 'WEDDINGS', href: '/events/wedding/' },
                { label: 'CORPORATE DAY', href: '/events/corporate-day/' }
            ]
        },
        {
            label: 'Club News',
            href: '/news/', // Assumes a page is set as posts page, or we use a custom route
            hasDropdown: false
        },
        {
            label: 'Contact Us',
            href: '/contact-us/',
            hasDropdown: false
        },
    ];

    return (
        <header className="w-full relative z-50">
            {/* Top Bar */}
            <div className="bg-white pt-3 pb-3">
                <div className="w-full px-6 lg:px-10 flex justify-end items-center space-x-6 text-xs font-montserrat text-brand-blue font-bold">
                    <a href="/membership/" className="hover:text-white transition-colors no-underline hover:no-underline focus:no-underline">Join Our Club</a>
                    <span className="text-brand-blue/50">|</span>
                    <a href={toPhoneHref(contactDetails.phone, contactDetails.phoneType)} {...toPhoneLinkProps(contactDetails.phoneType)} className="flex items-center space-x-1 hover:text-white transition-colors">
                        <PhoneIcon size={12} className="fill-current" />
                        <span>{contactDetails.phone}</span>
                    </a>
                    <span className="text-brand-blue/50">|</span>
                    <a href={toEmailHref(contactDetails.email)} className="flex items-center space-x-1 hover:text-white transition-colors font-bold">
                        <Mail size={12} className="fill-current" />
                        <span>{contactDetails.email}</span>
                    </a>
                    <div className="flex items-center space-x-3 ml-4">
                        <a href={contactDetails.facebook} {...toExternalLinkProps(contactDetails.facebook)} className="hover:text-white transition-colors"><Facebook size={14} /></a>
                        <a href={contactDetails.instagram} {...toExternalLinkProps(contactDetails.instagram)} className="hover:text-white transition-colors"><Instagram size={14} /></a>
                    </div>
                </div>
            </div>

            {/* Partial Separator Line - starts from middle, extends left - REMOVED for clean look or kept? User said "judicious with how we apply our colours". Let's remove the separator or make it blend. */}

            {/* Main Header */}
            <div className="bg-white py-4 shadow-sm">
                <div className="w-full px-6 lg:px-10 flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="#">
                            <img
                                src="/wp-content/uploads/2026/02/logo_compressed.png"
                                alt="Wingate Golf Club"
                                className="h-24 w-auto absolute top-2 z-50 filter drop-shadow-md" // Made logo larger and overlapping
                            />
                        </a>
                    </div>

                    {/* Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8 pl-32"> {/* Added padding-left for the larger overlapping logo */}
                        {navItems.map((item) => (
                            <div key={item.label} className="relative group">
                                <a
                                    href={item.href}
                                    className="wingate-menu-link flex items-center space-x-1 text-xs font-bold tracking-wider uppercase no-underline text-brand-blue transition-colors py-2 px-2 rounded-sm"
                                >
                                    <span>{item.label}</span>
                                    {item.hasDropdown && <ChevronDown size={14} className="group-hover:translate-y-0.5 transition-transform" />}
                                </a>

                                {item.hasDropdown && item.subItems && (
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-60 pt-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                                        <div className="bg-white shadow-xl py-4 rounded-sm border-t-[3px] border-brand-yellow flex flex-col space-y-1">
                                            {item.subItems.map((subItem) => (
                                                <a
                                                    key={subItem.label}
                                                    href={subItem.href}
                                                    className="wingate-submenu-link block px-6 py-2 text-[11px] font-bold text-gray-600 tracking-widest transition-colors font-montserrat no-underline"
                                                >
                                                    <span className="wingate-submenu-text">{subItem.label}</span>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* Mobile Menu Toggle (Simplified for now) */}
                    <div className="lg:hidden">
                        <button className="text-golf-gold p-2">
                            <span className="block w-6 h-0.5 bg-current mb-1"></span>
                            <span className="block w-6 h-0.5 bg-current mb-1"></span>
                            <span className="block w-6 h-0.5 bg-current"></span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

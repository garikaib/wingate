import React from 'react';
import { Phone, Mail, Facebook, Instagram, ChevronDown } from 'lucide-react';
import {
    getContactDetails,
    toEmailHref,
    toExternalLinkProps,
    toPhoneHref,
} from '../config/contactDetails';

const Header = () => {
    const contactDetails = getContactDetails();

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
                { label: 'BANQUETS', href: '/events/banquet/' }
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
                    <a href={toPhoneHref(contactDetails.phone)} className="flex items-center space-x-1 hover:text-white transition-colors">
                        <Phone size={12} className="fill-current" />
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

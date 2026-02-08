import React from 'react';
import { Phone, Mail, Facebook, Instagram, ChevronDown } from 'lucide-react';

const Header = () => {
    const navItems = [
        { label: 'HOME', href: '#' },
        {
            label: 'GOLF',
            href: '#',
            hasDropdown: true,
            subItems: [
                { label: 'COURSE DETAILS', href: '#' },
                { label: 'RATES', href: '#' },
                { label: 'HOLE BY HOLE', href: '#' },
                { label: 'PASSES', href: '#' },
                { label: 'MEN\'S LEAGUE', href: '#' },
            ]
        },
        {
            label: 'PLAYER DEVELOPMENT',
            href: '#',
            hasDropdown: true,
            subItems: [
                { label: 'JUNIOR GOLF', href: '#' },
                { label: 'PRIVATE INSTRUCTION', href: '#' },
                { label: 'HANDICAP', href: '#' },
                { label: 'PGA JUNIOR LEAGUE', href: '#' },
            ]
        },
        { label: 'USGA ADAPTIVE OPEN', href: '#' },
        { label: 'CABOOSE 305 CAFE', href: '#' },
        {
            label: 'EVENTS',
            href: '#',
            hasDropdown: true,
            subItems: [
                { label: 'TOURNAMENTS', href: '#' },
                { label: 'WEDDINGS', href: '#' },
                { label: 'BANQUETS', href: '#' }
            ]
        },
        {
            label: 'CONTACT',
            href: '#',
            hasDropdown: true,
            subItems: [
                { label: 'CONTACT US', href: '#' },
                { label: 'OUR TEAM', href: '#' },
                { label: 'FAQS', href: '#' }
            ]
        },
    ];

    return (
        <header className="w-full relative z-50">
            {/* Top Bar */}
            <div className="bg-white pt-3 pb-3">
                <div className="w-full px-6 lg:px-10 flex justify-end items-center space-x-6 text-xs font-montserrat text-[#4a3728] font-medium">
                    <a href="#" className="hover:text-golf-gold transition-colors">Join Our E-Club</a>
                    <span className="text-gray-300">|</span>
                    <a href="tel:3162846161" className="flex items-center space-x-1 hover:text-golf-gold transition-colors">
                        <Phone size={12} className="fill-current" />
                        <span>(316) 284-6161</span>
                    </a>
                    <span className="text-gray-300">|</span>
                    <a href="mailto:dhoush@kempersports.com" className="flex items-center space-x-1 hover:text-golf-gold transition-colors font-bold">
                        <Mail size={12} className="fill-current" />
                        <span>dhoush@kempersports.com</span>
                    </a>
                    <div className="flex items-center space-x-3 ml-4">
                        <a href="#" className="hover:text-golf-gold transition-colors"><Facebook size={14} /></a>
                        <a href="#" className="hover:text-golf-gold transition-colors"><Instagram size={14} /></a>
                    </div>
                </div>
            </div>

            {/* Partial Separator Line - starts from middle, extends left */}
            <div className="w-full flex justify-end px-6 lg:px-10">
                <div className="w-[65%] lg:w-[55%] h-[2px] bg-gray-200"></div>
            </div>

            {/* Main Header */}
            <div className="bg-white py-4 shadow-sm">
                <div className="w-full px-6 lg:px-10 flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="#">
                            <img
                                src="https://sandcreekgolfclub.com/wp-content/uploads/sites/151/2024/09/sand_creek_station.png"
                                alt="Sand Creek Station"
                                className="h-16 w-auto"
                            />
                        </a>
                    </div>

                    {/* Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <div key={item.label} className="relative group">
                                <a
                                    href={item.href}
                                    className="flex items-center space-x-1 text-xs font-bold tracking-wider text-[#c5a059] group-hover:text-[#4a3728] transition-colors py-2"
                                >
                                    <span>{item.label}</span>
                                    {item.hasDropdown && <ChevronDown size={14} className="group-hover:translate-y-0.5 transition-transform" />}
                                </a>

                                {item.hasDropdown && item.subItems && (
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-60 pt-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                                        <div className="bg-white shadow-xl py-4 rounded-sm border-t-[3px] border-[#c5a059] flex flex-col space-y-1">
                                            {item.subItems.map((subItem) => (
                                                <a
                                                    key={subItem.label}
                                                    href={subItem.href}
                                                    className="block px-6 py-2 text-[11px] font-bold text-gray-600 hover:text-[#4a3728] hover:bg-gray-50 tracking-widest transition-colors font-montserrat"
                                                >
                                                    {subItem.label}
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

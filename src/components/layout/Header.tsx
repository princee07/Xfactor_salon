"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentBulletinIndex, setCurrentBulletinIndex] = useState(0);

    // Bulletin content that will auto-change
    const bulletinContent = [
        "🌟 Free Shipping on All U.S. Orders $50+",
        "💫 20% Off First Visit - New Clients Only",
        "✨ Book Your Appointment Today - Limited Slots Available",
        "🎉 Follow Us for Latest Updates & Exclusive Offers",
        "💄 Professional Hair & Beauty Services Since 2020"
    ];

    // Auto-change bulletin content
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBulletinIndex((prevIndex) =>
                (prevIndex + 1) % bulletinContent.length
            );
        }, 8000); // Change every 8 seconds

        return () => clearInterval(interval);
    }, [bulletinContent.length]);

    const leftNavigationItems = [
        { label: "ABOUT", href: "/about" },
        { label: "LOCATIONS", href: "/locations" },
        { label: "SERVICES", href: "/services" },
    ];

    const rightNavigationItems = [
        { label: "GALLERY", href: "/gallery" },
        { label: "MEDIA", href: "/media" },
        { label: "FAQ", href: "/faq" },
    ];

    return (
        <header className="bg-black shadow-sm sticky top-0 z-50 border-b border-gray-800">
            {/* Bulletin Bar */}
            <div className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black py-1 px-4">
                <div className="luxury-container">
                    <div className="flex justify-between items-center">
                        {/* Auto-changing content */}
                        <div className="flex-1 text-center">
                            <p className="text-xs font-light italic tracking-wide animate-pulse text-black">
                                {bulletinContent[currentBulletinIndex]}
                            </p>
                        </div>

                        {/* Social Media Icons */}
                        <div className="flex items-center space-x-3">
                            <Link
                                href="https://facebook.com"
                                target="_blank"
                                className="text-black hover:text-yellow-800 transition-colors duration-300"
                                aria-label="Facebook"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </Link>
                            <Link
                                href="https://instagram.com"
                                target="_blank"
                                className="text-black hover:text-yellow-800 transition-colors duration-300"
                                aria-label="Instagram"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-2.497 0-4.527-2.03-4.527-4.527s2.03-4.527 4.527-4.527 4.527 2.03 4.527 4.527-2.03 4.527-4.527 4.527zm7.519 0c-2.497 0-4.527-2.03-4.527-4.527s2.03-4.527 4.527-4.527 4.527 2.03 4.527 4.527-2.03 4.527-4.527 4.527z" />
                                </svg>
                            </Link>
                            <Link
                                href="https://twitter.com"
                                target="_blank"
                                className="text-black hover:text-yellow-800 transition-colors duration-300"
                                aria-label="Twitter"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                </svg>
                            </Link>
                            <Link
                                href="https://youtube.com"
                                target="_blank"
                                className="text-black hover:text-yellow-800 transition-colors duration-300"
                                aria-label="YouTube"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <div className="luxury-container">
                <div className="flex justify-center items-center h-24 gap-8 pt-2">
                    {/* Left Navigation */}
                    <nav className="hidden lg:flex items-center space-x-3">
                        {leftNavigationItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="text-white hover:text-[#d4af37] text-sm font-medium tracking-wider transition-colors duration-300 uppercase relative group px-2"
                            >
                                {item.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#d4af37] transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        ))}
                    </nav>

                    {/* Logo - Center */}
                    <div className="flex justify-center">
                        <Link href="/" className="flex items-center group">
                            <Image
                                src="/images/logo/image1.png"
                                alt="Geetanjali Salon Logo"
                                width={220}
                                height={50}
                                className="transition-opacity duration-300 group-hover:opacity-80"
                                priority
                            />
                        </Link>
                    </div>

                    {/* Right Navigation */}
                    <nav className="hidden lg:flex items-center space-x-3">
                        {rightNavigationItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="text-white hover:text-[#d4af37] text-sm font-medium tracking-wider transition-colors duration-300 uppercase relative group px-2"
                            >
                                {item.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#d4af37] transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        ))}
                        <Link
                            href="/appointment"
                            className="bg-[#d4af37] hover:bg-[#b8941f] text-black px-4 py-2 text-sm font-semibold tracking-wider transition-all duration-300 uppercase transform hover:scale-105 shadow-md hover:shadow-lg ml-3"
                        >
                            BOOK NOW
                        </Link>
                    </nav>

                    {/* Mobile menu button */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-800 hover:text-[#d4af37] focus:outline-none transition-colors duration-300"
                        >
                            <svg
                                className="h-7 w-7"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden">
                        <div className="px-4 pt-4 pb-6 space-y-4 bg-white border-t border-gray-100 shadow-lg">
                            {[...leftNavigationItems, ...rightNavigationItems].map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className="block px-4 py-3 text-gray-800 hover:text-[#d4af37] hover:bg-gray-50 text-sm font-medium tracking-wider uppercase transition-colors duration-300 rounded-md"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <Link
                                href="/appointment"
                                className="block px-4 py-3 bg-[#d4af37] hover:bg-[#b8941f] text-black text-sm font-semibold text-center tracking-wider uppercase transition-colors duration-300 rounded-md shadow-md"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                BOOK NOW
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;

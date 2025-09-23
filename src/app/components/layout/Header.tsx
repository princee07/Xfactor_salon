"use client";

import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navigationItems = [
        { label: "ABOUT", href: "/about" },
        { label: "LOCATIONS", href: "/locations" },
        { label: "SERVICES", href: "/services" },
        { label: "FAQ", href: "/faq" },
        { label: "GALLERY", href: "/gallery" },
        { label: "MEDIA", href: "/media" },
        { label: "APPOINTMENT", href: "/appointment" },
    ];

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Navigation Menu - Left Side */}
                    <nav className="hidden md:flex space-x-8">
                        {navigationItems.map((item) => (
                            <div key={item.label} className="relative group">
                                <Link
                                    href={item.href}
                                    className="text-gray-700 hover:text-pink-500 text-sm font-medium tracking-wide transition-colors duration-200"
                                >
                                    {item.label}
                                </Link>
                                {/* Dropdown menu can be added here if needed */}
                            </div>
                        ))}
                    </nav>

                    {/* Logo - Center */}
                    <div className="flex-1 flex justify-center md:flex-none">
                        <Link href="/" className="flex items-center">
                            <div className="text-2xl font-bold">
                                <span className="text-black">LA NOTTE</span>
                                <div className="text-xs text-gray-500 tracking-widest mt-1">
                                    XFACTOR SALON
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Contact Button - Right Side */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link
                            href="/contact"
                            className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200"
                        >
                            CONTACT US
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-700 hover:text-pink-500 focus:outline-none"
                        >
                            <svg
                                className="h-6 w-6"
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
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
                            {navigationItems.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className="block px-3 py-2 text-gray-700 hover:text-pink-500 text-sm font-medium"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                className="block px-3 py-2 bg-pink-500 text-white rounded-full text-sm font-medium text-center mt-4"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                CONTACT US
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
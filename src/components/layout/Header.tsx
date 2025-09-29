"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentBulletinIndex, setCurrentBulletinIndex] = useState(0);
    const [showBulletin, setShowBulletin] = useState(true);
    const [bulletinVisible, setBulletinVisible] = useState(true);
    const lastScrollY = React.useRef(0);

    // Bulletin content that will auto-change (festival season)
    const bulletinContent = [
        "� Festival Special: 25% off select services — limited time!",
        "🎁 Gift Cards Available — Perfect Holiday Gift Ideas!",
        "✨ Extended Festival Hours — Evening appointments now open",
        "💆 Free festive treatment with any color service (this month)",
        "🌟 Celebrate the season with XFactor Salon — Book now!"
    ];

    // Auto-change bulletin content with fade animation
    useEffect(() => {
        const interval = setInterval(() => {
            setBulletinVisible(false); // Start fade-out
            setTimeout(() => {
                setCurrentBulletinIndex((prevIndex) =>
                    (prevIndex + 1) % bulletinContent.length
                );
                setBulletinVisible(true); // Start fade-in
            }, 300); // Delay to allow fade-out before content change
        }, 8000); // Change every 8 seconds
        return () => clearInterval(interval);
    }, [bulletinContent.length]);

    // Show/hide bulletin bar based on scroll direction with smooth transition
    useEffect(() => {
        let hideTimeout: NodeJS.Timeout | undefined;
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY.current) {
                setShowBulletin(true); // Show when scrolling down
                setBulletinVisible(true);
                if (hideTimeout) clearTimeout(hideTimeout);
            } else {
                setShowBulletin(false); // Hide when scrolling up
                hideTimeout = setTimeout(() => setBulletinVisible(false), 400); // Delay for smooth fade
            }
            lastScrollY.current = currentScrollY;
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (hideTimeout) clearTimeout(hideTimeout);
        };
    }, []);

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
        <header className="bg-black shadow-sm sticky top-0 z-50 border-b border-gray-800 relative">
            {/* Bulletin Bar */}
            {bulletinVisible && (
                <div
                    className={`absolute top-0 left-0 right-0 bg-gradient-to-r from-[#b8941f] via-[#d4af37] to-[#f59e0b] text-black py-1 px-2 sm:px-4 transition-all duration-400 ease-in-out transform z-10 ${showBulletin ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
                        }`}
                    style={{ willChange: 'opacity, transform' }}
                >
                    <div className="luxury-container">
                        <div className="flex justify-between items-center">
                            {/* Auto-changing content with fade */}
                            <div className="flex-1 text-center">
                                <p
                                    className={`text-xs sm:text-sm font-normal text-gray-800 tracking-wide transition-opacity duration-300 ${bulletinVisible ? 'opacity-100' : 'opacity-0'
                                        }`}
                                >
                                    {bulletinContent[currentBulletinIndex]}
                                </p>
                            </div>

                            {/* Social Media Icons */}
                            <div className="hidden xs:flex items-center space-x-2 sm:space-x-3">
                                {[
                                    { href: "https://facebook.com", icon: <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />, label: "Facebook" },
                                    { href: "https://instagram.com", icon: <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-2.497 0-4.527-2.03-4.527-4.527s2.03-4.527 4.527-4.527 4.527 2.03 4.527 4.527-2.03 4.527-4.527 4.527zm7.519 0c-2.497 0-4.527-2.03-4.527-4.527s2.03-4.527 4.527-4.527 4.527 2.03 4.527 4.527-2.03 4.527-4.527 4.527z" />, label: "Instagram" },
                                    { href: "https://twitter.com", icon: <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 a4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />, label: "Twitter" },
                                    { href: "https://youtube.com", icon: <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />, label: "YouTube" },
                                ].map(({ href, icon, label }) => (
                                    <Link
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        className="text-black hover:text-yellow-800 transition-colors duration-300 transform hover:scale-110"
                                        aria-label={label}
                                    >
                                        <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                                            {icon}
                                        </svg>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Main Navigation */}
            <div className={`luxury-container px-2 sm:px-4 lg:px-6 ${bulletinVisible && showBulletin ? 'pt-8' : ''}`}>
                <div className="flex justify-center items-center h-16 sm:h-20 lg:h-24 gap-4 sm:gap-6 lg:gap-8 xl:gap-12 pt-1 sm:pt-2">
                    {/* Left Navigation */}
                    <nav className="hidden xl:flex items-center space-x-2 2xl:space-x-3">
                        {leftNavigationItems.map((item, index) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="text-white hover:text-[#d4af37] text-sm xl:text-base font-semibold font-royal tracking-wider transition-all duration-300 uppercase relative group px-2 xl:px-3 transform hover:scale-105 opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <span className="font-semibold">{item.label}</span>
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#d4af37] transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        ))}
                    </nav>

                    {/* Logo */}
                    <div className="flex justify-center">
                        <Link href="/" className="flex items-center group">
                            <Image
                                src="/images/logo/image1.png"
                                alt="Geetanjali Salon Logo"
                                width={180}
                                height={40}
                                className="transition-all duration-300 group-hover:opacity-80 group-hover:scale-105 w-32 h-auto sm:w-40 md:w-48 lg:w-52 xl:w-56 opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]"
                                priority
                            />
                        </Link>
                    </div>

                    {/* Right Navigation */}
                    <nav className="hidden xl:flex items-center space-x-2 2xl:space-x-3">
                        {rightNavigationItems.map((item, index) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="text-white hover:text-[#d4af37] text-sm xl:text-base font-semibold font-royal tracking-wider transition-all duration-300 uppercase relative group px-2 xl:px-3 transform hover:scale-105 opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]"
                                style={{ animationDelay: `${(index + leftNavigationItems.length) * 100}ms` }}
                            >
                                <span className="font-semibold">{item.label}</span>
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#d4af37] transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        ))}
                        <Link
                            href="/appointment"
                            className="bg-[#d4af37] hover:bg-[#b8941f] text-black px-4 xl:px-5 py-2 text-sm xl:text-base font-semibold font-royal tracking-wider transition-all duration-300 uppercase transform hover:scale-105 shadow-md hover:shadow-lg ml-2 xl:ml-3 opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]"
                            style={{ animationDelay: `${(rightNavigationItems.length + leftNavigationItems.length) * 100}ms` }}
                        >
                            BOOK NOW
                        </Link>
                    </nav>

                    {/* Mobile menu button */}
                    <div className="xl:hidden absolute right-2 sm:right-4">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-white hover:text-[#d4af37] focus:outline-none transition-all duration-300 p-2 transform hover:scale-110"
                            aria-label="Toggle mobile menu"
                        >
                            <svg
                                className="h-6 w-6 sm:h-7 sm:w-7"
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
                    <div className="xl:hidden">
                        <div className="px-2 sm:px-4 pt-2 pb-4 space-y-2 bg-black border-t border-gray-700 shadow-xl animate-[slideDown_0.3s_ease-out]">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {[...leftNavigationItems, ...rightNavigationItems].map((item, index) => (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        className="block px-4 sm:px-5 py-3 text-white hover:text-[#d4af37] hover:bg-gray-800 text-base font-semibold font-royal tracking-wider uppercase transition-all duration-300 rounded-md border border-gray-700 hover:border-[#d4af37] transform hover:scale-105 opacity-0 animate-[fadeIn_0.3s_ease-out_forwards]"
                                        style={{ animationDelay: `${index * 100}ms` }}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                            <Link
                                href="/appointment"
                                className="block px-4 py-3 bg-[#d4af37] hover:bg-[#b8941f] text-black text-sm font-semibold font-royal text-center tracking-wider uppercase transition-all duration-300 rounded-md shadow-lg mt-4 transform hover:scale-105 opacity-0 animate-[fadeIn_0.3s_ease-out_forwards]"
                                style={{ animationDelay: `${([...leftNavigationItems, ...rightNavigationItems].length) * 100}ms` }}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                BOOK NOW
                            </Link>
                        </div>
                    </div>
                )}
            </div>

            {/* Inline CSS for animations */}
            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                @keyframes slideDown {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </header>
    );
};

export default Header;
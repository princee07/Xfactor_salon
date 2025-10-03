"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentBulletinIndex, setCurrentBulletinIndex] = useState(0);
  const [showBulletin, setShowBulletin] = useState(true);
  const [bulletinFading, setBulletinFading] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowBulletin(window.scrollY < 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bulletinContent = [
    "� Festival Special: 25% off select services — limited time!",
    "🎁 Gift Cards Available — Perfect Holiday Gift Ideas!",
    "✨ Extended Festival Hours — Evening appointments now open",
    "💆 Free festive treatment with any color service (this month)",
    "🌟 Celebrate the season with XFactor Salon — Book now!",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBulletinFading(true);
      setTimeout(() => {
        setCurrentBulletinIndex(
          (prevIndex) => (prevIndex + 1) % bulletinContent.length
        );
        setBulletinFading(false);
      }, 300);
    }, 8000);
    return () => clearInterval(interval);
  }, [bulletinContent.length]);

  const leftNavigationItems = [
    { label: "ABOUT", href: "/about" },
    { label: "LOCATIONS", href: "/locations" },
    {
      label: "SERVICES",
      href: "/services",
      dropdown: [
        { label: "Men", href: "/services/men" },
        { label: "Women", href: "/services/women" },
        { label: "Bride & Groom", href: "/services/bride-groom" },
      ],
    },
  ];

  const rightNavigationItems = [
    { label: "GALLERY", href: "/gallery" },
    { label: "COURSES", href: "/courses" },
    { label: "FAQ", href: "/faq" },
  ];

  return (
    <header className="bg-black shadow-sm sticky top-0 z-50 border-b border-gray-800 relative">
      {/* Bulletin Bar */}
      {showBulletin && (
        <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-[#b8941f] via-[#d4af37] to-[#f59e0b] text-black py-1 px-2 sm:px-4 transition-all duration-400 ease-in-out transform z-10">
          <div className="luxury-container">
            <div className="flex justify-between items-center">
              <div className="flex-1 text-center">
                <p
                  className={`text-xs sm:text-sm font-normal text-gray-800 tracking-wide transition-opacity duration-300 ${
                    bulletinFading ? "opacity-0" : "opacity-100"
                  }`}
                >
                  {bulletinContent[currentBulletinIndex]}
                </p>
              </div>

              {/* Social Media Icons */}
              <div className="hidden xs:flex items-center space-x-2 sm:space-x-3">
                {[
                  {
                    href: "https://facebook.com",
                    icon: (
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    ),
                    label: "Facebook",
                  },
                  {
                    href: "https://instagram.com",
                    icon: (
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-2.497 0-4.527-2.03-4.527-4.527s2.03-4.527 4.527-4.527 4.527 2.03 4.527 4.527-2.03 4.527-4.527 4.527zm7.519 0c-2.497 0-4.527-2.03-4.527-4.527s2.03-4.527 4.527-4.527 4.527 2.03 4.527 4.527-2.03 4.527-4.527 4.527z" />
                    ),
                    label: "Instagram",
                  },
                ].map(({ href, icon, label }) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    className="text-black hover:text-yellow-800 transition-colors duration-300 transform hover:scale-110"
                    aria-label={label}
                  >
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
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
      <div
        className={`luxury-container px-2 sm:px-4 lg:px-6 ${
          showBulletin ? "pt-8" : ""
        }`}
      >
        <div className="flex justify-center items-center h-16 sm:h-20 lg:h-24 gap-4 sm:gap-6 lg:gap-8 xl:gap-12 pt-1 sm:pt-2">
          {/* Left Navigation */}
          <nav className="hidden xl:flex items-center space-x-2 2xl:space-x-3">
            {leftNavigationItems.map((item, index) => (
              <div
                key={item.label}
                className="relative inline-block"
                onMouseEnter={() =>
                  item.dropdown && setServicesDropdownOpen(true)
                }
                onMouseLeave={() =>
                  item.dropdown && setServicesDropdownOpen(false)
                }
              >
                <Link
                  href={item.href}
                  className={`text-white hover:text-[#d4af37] text-sm xl:text-base font-semibold font-royal tracking-wider transition-all duration-300 uppercase relative group px-2 xl:px-3 transform hover:scale-105 opacity-0 animate-[fadeIn_0.5s_ease-out_forwards] ${
                    currentPath === item.href ? " text-[#d4af37]" : ""
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={(e) => {
                    if (item.dropdown) {
                      e.preventDefault();
                      setServicesDropdownOpen((v) => !v);
                    }
                  }}
                >
                  <span className="font-semibold">{item.label}</span>
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-[#d4af37] transition-all duration-300 ${
                      currentPath === item.href ? "w-full" : "w-0"
                    } group-hover:w-full`}
                  ></span>
                </Link>

                {/* Dropdown for SERVICES */}
                {item.dropdown && servicesDropdownOpen && (
                  <div className="absolute left-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-gold/30 z-50 animate-dropdown">
                    {item.dropdown.map((drop) => (
                      <Link
                        key={drop.label}
                        href={drop.href}
                        className="block px-5 py-3 text-black font-playfair font-semibold hover:bg-gold/20 transition-colors duration-200"
                      >
                        {drop.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
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
                style={{
                  animationDelay: `${
                    (index + leftNavigationItems.length) * 100
                  }ms`,
                }}
              >
                <span className="font-semibold">{item.label}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#d4af37] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <Link
              href="/appointment"
              className="bg-[#d4af37] hover:bg-[#b8941f] text-black px-4 xl:px-5 py-2 text-sm xl:text-base font-semibold font-royal tracking-wider transition-all duration-300 uppercase transform hover:scale-105 shadow-md hover:shadow-lg ml-2 xl:ml-3 opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]"
              style={{
                animationDelay: `${
                  rightNavigationItems.length + leftNavigationItems.length
                }00ms`,
              }}
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
                {[...leftNavigationItems, ...rightNavigationItems].map(
                  (item, index) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block px-4 sm:px-5 py-3 text-white hover:text-[#d4af37] hover:bg-gray-800 text-base font-semibold font-royal tracking-wider uppercase transition-all duration-300 rounded-md border border-gray-700 hover:border-[#d4af37] transform hover:scale-105 opacity-0 animate-[fadeIn_0.3s_ease-out_forwards]"
                      style={{ animationDelay: `${index * 100}ms` }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )
                )}
              </div>
              <Link
                href="/appointment"
                className="block px-4 py-3 bg-[#d4af37] hover:bg-[#b8941f] text-black text-sm font-semibold font-royal text-center tracking-wider uppercase transition-all duration-300 rounded-md shadow-lg mt-4 transform hover:scale-105 opacity-0 animate-[fadeIn_0.3s_ease-out_forwards]"
                style={{
                  animationDelay: `${
                    [...leftNavigationItems, ...rightNavigationItems].length *
                    100
                  }ms`,
                }}
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
        @keyframes dropdownFade {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-dropdown {
          animation: dropdownFade 0.25s ease-out;
        }
      `}</style>
    </header>
  );
};

export default Header;

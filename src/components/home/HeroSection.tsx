"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from "../ui/moving-border";

const HeroSection = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [
        '/hero/image1.png',
        '/hero/image2.png',
        '/hero/image3.png',
        '/hero/image4.png',
        '/hero/image5.png',
        '/hero/image6.png'
    ];

    // Auto image slider
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);

    // Subtitle typing effect
    const subtitles = React.useMemo(() => [
        'WHERE BEAUTY MEETS EXCELLENCE',
        'INDULGE IN LUXURY BEAUTY SERVICES',
        'YOUR TRANSFORMATION STARTS HERE'
    ], []);
    const [typedSubtitle, setTypedSubtitle] = useState('');
    const [subtitleIndex, setSubtitleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [subtitlePulse, setSubtitlePulse] = useState(false);

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        const current = subtitles[subtitleIndex];
        const baseSpeed = 60;
        const deleteSpeed = 30;

        if (!isDeleting) {
            if (typedSubtitle.length < current.length) {
                timeout = setTimeout(() => {
                    setTypedSubtitle(current.slice(0, typedSubtitle.length + 1));
                }, baseSpeed);
            } else {
                timeout = setTimeout(() => setIsDeleting(true), 1500);
            }
        } else {
            if (typedSubtitle.length > 0) {
                timeout = setTimeout(() => {
                    setTypedSubtitle(current.slice(0, typedSubtitle.length - 1));
                }, deleteSpeed);
            } else {
                setIsDeleting(false);
                setSubtitleIndex((prev) => (prev + 1) % subtitles.length);
            }
        }
        return () => clearTimeout(timeout);
    }, [typedSubtitle, isDeleting, subtitleIndex, subtitles]);

    useEffect(() => {
        setSubtitlePulse(true);
        const t = setTimeout(() => setSubtitlePulse(false), 600);
        return () => clearTimeout(t);
    }, [subtitleIndex]);

    // 🔥 Scroll direction logic for bullet bar
    const [showBullets, setShowBullets] = useState(true);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY < lastScrollY) {
                // user scrolled upward → hide
                setShowBullets(false);
            } else {
                // user scrolled downward or stayed → show
                setShowBullets(true);
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className="relative min-h-[85vh] md:min-h-[92vh] w-full overflow-hidden">
            {/* Background Image Slider */}
            <div className="absolute inset-0 w-full h-full">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentImage ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <Image
                            src={image}
                            alt={`Hero image ${index + 1}`}
                            fill
                            className="object-cover w-full h-full"
                            priority={index === 0}
                            quality={90}
                            sizes="100vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/20"></div>
                    </div>
                ))}
            </div>

            {/* Content */}
            <div className="relative z-10 h-full min-h-[85vh] md:min-h-[92vh] flex items-center justify-center text-white">
                <div className="luxury-container px-4">
                    <div className="text-center animate-fade-in">
                        <h1 className="-mt-6 md:-mt-8 text-5xl md:text-7xl font-royal font-extrabold mb-6 hero-heading">
                            XFactor Salon
                        </h1>
                        <p
                            className={`hero-royal mb-6 transition-all duration-600 ease-out ${subtitlePulse ? 'opacity-100 translate-y-0' : 'opacity-90 -translate-y-1'
                                }`}
                        >
                            Elevate your elegance — bespoke styles, timeless beauty.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Button
                                href="/appointment"
                                borderRadius="0" // square corners
                                containerClassName="w-[12rem] md:w-[18rem]"
                                className="bg-[#d4af37] hover:bg-[#b8941f] text-black px-18 py-4 text-lg font-semibold tracking-wider transition-all duration-300 uppercase transform hover:scale-105 shadow-lg hover:shadow-xl min-w-[10rem] moving-border-white"
                            >
                                Book Appointment
                            </Button>
                            <Link
                                href="/services"
                                className="border-2 border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black px-8 py-4 text-lg font-semibold tracking-wider transition-all duration-300 uppercase transform hover:scale-105 shadow-lg"
                            >
                                View Services
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* 🔥 Bullet Indicators (hide on scroll up) */}
            <div
                className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 transition-all duration-500 ${showBullets ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                    }`}
            >
                <div className="flex space-x-3">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentImage(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentImage
                                ? 'bg-[#d4af37] scale-125'
                                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
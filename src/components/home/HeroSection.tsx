'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [
        '/hero/image1.png',
        '/hero/image2.png',
        '/hero/image3.png',
        '/hero/image4.png'
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section className="relative h-screen overflow-hidden">
            {/* Background Image Slider */}
            <div className="absolute inset-0">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImage ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <Image
                            src={image}
                            alt={`Hero image ${index + 1}`}
                            fill
                            className="object-cover"
                            priority={index === 0}
                            quality={90}
                            sizes="100vw"
                            onError={() => console.error(`Failed to load image: ${image}`)}
                        />
                        {/* Dark overlay for better text readability */}

                    </div>
                ))}
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center justify-center text-white">
                <div className="luxury-container">
                    <div className="text-center animate-fade-in">
                        <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 drop-shadow-lg">
                            XFactor Salon
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 font-light tracking-wide drop-shadow-md">
                            WHERE BEAUTY MEETS EXCELLENCE
                        </p>
                        <p className="text-lg mb-12 max-w-2xl mx-auto text-gray-200 leading-relaxed drop-shadow-sm">
                            Transform your look with our expert stylists and premium beauty services.
                            Experience the difference at XFactor Salon.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link
                                href="/appointment"
                                className="bg-[#d4af37] hover:bg-[#b8941f] text-black px-8 py-4 text-lg font-semibold tracking-wider transition-all duration-300 uppercase transform hover:scale-105 shadow-lg hover:shadow-xl"
                            >
                                Book Appointment
                            </Link>
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

            {/* Image Indicators */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
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
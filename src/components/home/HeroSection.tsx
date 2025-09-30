"use client";

import React, { useState, useEffect } from 'react';

const HeroSection = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [
        '/hero/1.png',
        '/hero/2.png',
    ];

    // Auto image slider
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);

    const [showBullets] = useState(true);

    return (
        <section className="relative w-full overflow-hidden">
            {/* Background image (render only the active image so it defines height) */}
            <div className="w-full">
                <div className="w-full transition-opacity duration-500 ease-in-out opacity-100">
                    {/* Debug: use native img to ensure the public path is correct and image loads */}
                    <img
                        src={images[currentImage]}
                        alt={`Hero image ${currentImage + 1}`}
                        className="w-full h-auto object-contain sm:object-cover block"
                        style={{ objectPosition: 'center' }}
                    />
                </div>
            </div>

            {/* Bullet indicators */}
            <div className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 transition-opacity duration-500 ${showBullets ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className="flex space-x-2 sm:space-x-3">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentImage(index)}
                            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${index === currentImage ? 'bg-[#d4af37] scale-125' : 'bg-white/40 hover:bg-white/60'}`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HeroSection;

'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const instagramImages = [
    {
        id: 1,
        src: '/instagram/1.png',
        alt: 'XFactor Salon - Professional hair styling and beauty services',
        caption: 'Professional hair styling'
    },
    {
        id: 2,
        src: '/instagram/2.png',
        alt: 'XFactor Salon - Modern salon interior and luxury experience',
        caption: 'Modern salon interior'
    },
    {
        id: 3,
        src: '/instagram/3.png',
        alt: 'XFactor Salon - Hair color transformation and styling',
        caption: 'Hair color transformation'
    },
    {
        id: 4,
        src: '/instagram/4.png',
        alt: 'XFactor Salon - Beauty treatments and facial services',
        caption: 'Beauty treatments'
    },
    {
        id: 5,
        src: '/instagram/5.png',
        alt: 'XFactor Salon - Nail services and manicure',
        caption: 'Nail services'
    }
];

const InstagramGallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const startAutoSlide = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        intervalRef.current = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % instagramImages.length);
        }, 5000);
    };

    useEffect(() => {
        startAutoSlide();
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    const handleMouseEnter = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    };

    const handleMouseLeave = () => {
        startAutoSlide();
    };

    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6">
                        Follow on Instagram
                    </h2>
                    <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
                    <p className="text-lg text-elegant-gray max-w-2xl mx-auto font-lato leading-relaxed">
                        Stay connected with us on Instagram to see our latest work, behind-the-scenes moments,
                        and discover the XFactor difference every day.
                    </p>
                </motion.div>

                {/* Instagram Slider */}
                <div
                    className="relative overflow-hidden max-w-[80rem] mx-auto"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <motion.div
                        className="flex gap-6"
                        animate={{ x: -currentIndex * (320 + 24) }} // 320px width + 24px gap
                        transition={{ duration: 0.7, ease: "easeInOut" }}
                    >
                        {[...instagramImages, ...instagramImages].map((image, index) => (
                            <motion.div
                                key={index}
                                className="flex-shrink-0"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    width={320}
                                    height={400}
                                    className="object-cover rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center mt-6 space-x-2">
                    {instagramImages.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                ? 'bg-gold scale-125'
                                : 'bg-gray-300 hover:bg-gray-400'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InstagramGallery;
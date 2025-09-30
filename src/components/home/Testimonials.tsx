'use client';

import React, { useState, useEffect, useRef } from 'react';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const testimonials = [
        {
            name: "ANKUR AGGARWAL",
            review: "I've been getting my haircuts at this salon for years, and I can't imagine going anywhere else. The stylists here always give me the perfect cut that suits my face shape and style.",
            avatar: "A"
        },
        {
            name: "JESSICA ARORA",
            review: "The haircuts here are consistently top-notch, and their attention to detail is unmatched. Plus, the face care treatments are a fantastic way to relax and rejuvenate.",
            avatar: "J"
        },
        {
            name: "GOURAV ARORA",
            review: "I can't express how grateful I am to have found this salon. The hairstylists here are not only incredibly talented but also friendly and welcoming.",
            avatar: "G"
        },
        {
            name: "PRIYA VERMA",
            review: "This is hands-down the best salon experience I've ever had. The staff is professional, the atmosphere is luxurious, and my hair has never looked better.",
            avatar: "P"
        },
        {
            name: "RAHUL SINGH",
            review: "I was hesitant to try a new place, but Geetanjali Salon exceeded all my expectations. My beard trim was perfect, and the service was exceptional.",
            avatar: "R"
        }
    ];

    const startAutoSlide = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        intervalRef.current = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 5000);
    };

    useEffect(() => {
        startAutoSlide();
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [testimonials.length]);

    const handleMouseEnter = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    };

    const handleMouseLeave = () => {
        startAutoSlide();
    };

    return (
        <>
            {/* Section Header OUTSIDE image */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <p className="text-gold font-lato font-semibold text-sm mb-2 tracking-wider uppercase">
                            Testimonials
                        </p>
                        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-black mb-4">
                            What Our Clients Say
                        </h2>
                        <div className="mx-auto w-full max-w-xs md:max-w-md mb-8 flex justify-center">
                            <img src="/royal/3.png" alt="Decorative" className="w-full h-auto object-contain rounded-md" />
                        </div>
                    </div>
                </div>
            </section>
            {/* Testimonials Carousel OVER image bg */}
            <section
                className="py-12 overflow-hidden relative"
                style={{
                    backgroundImage: "url('/hero/image5.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                {/* Removed background overlay for full image brightness */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div
                        className="relative max-w-5xl mx-auto"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="overflow-hidden">
                            <div
                                className="flex transition-transform duration-700 ease-in-out"
                                style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
                            >
                                {testimonials.concat(testimonials).map((testimonial, index) => (
                                    <div
                                        key={index}
                                        className="w-full md:w-1/3 flex-shrink-0 p-4"
                                    >
                                        <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-lg shadow-xl p-6 h-full transform transition-all duration-500 hover:scale-105 hover:bg-opacity-100">
                                            {/* Large Quote Mark */}
                                            <div className="text-5xl text-gray-200 font-serif mb-4 leading-none">
                                                &quot;
                                            </div>
                                            {/* Testimonial Content */}
                                            <p className="text-gray-600 font-playfair leading-relaxed mb-6 text-base">
                                                {testimonial.review}
                                            </p>
                                            {/* Customer Info */}
                                            <div className="flex items-center">
                                                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full flex items-center justify-center text-white font-bold mr-4">
                                                    {testimonial.avatar}
                                                </div>
                                                <p className="font-lato font-semibold text-gray-900 text-sm tracking-wider">
                                                    - {testimonial.name}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Pagination Dots */}
                    <div className="flex justify-center mt-8 space-x-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                    ? 'bg-gold scale-125 shadow-lg'
                                    : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Testimonials;
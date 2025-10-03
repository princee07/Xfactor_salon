"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// Define a type for the feature items
interface FeatureItem {
    icon: React.ReactNode;
    headline: string;
    description: string;
}

const WhyChooseUs: React.FC = () => {
    // Define your salon-specific features
    const features: FeatureItem[] = [
        {
            icon: (
                <Image src="/icons/1.png" alt="Expert Stylist Icon" width={32} height={32} className="h-8 w-8 object-contain" priority />
            ),
            headline: 'Expert Stylists',
            description: 'Our team consists of highly experienced and trained professionals dedicated to perfecting your look.',
        },
        {
            icon: (
                <Image src="/icons/2.png" alt="Timely Service" width={32} height={32} className="h-8 w-8 object-contain" />
            ),
            headline: 'Timely Service',
            description: 'We value your time, ensuring efficient appointments without compromising on quality or experience.',
        },
        {
            icon: (
                <Image src="/icons/4.png" alt="Flexible Booking" width={32} height={32} className="h-8 w-8 object-contain" />
            ),
            headline: 'Flexible Booking',
            description: 'Easily schedule appointments online at your convenience with our flexible booking system.',
        },
        {
            icon: (
                <Image src="/icons/3.png" alt="Premium Products" width={32} height={32} className="h-8 w-8 object-contain" />
            ),
            headline: 'Premium Products',
            description: 'We use only the highest quality, professional-grade products for all our services.',
        },
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-gold" // Golden icon
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                </svg>
            ),
            headline: 'Premium Products',
            description: 'We use only the highest quality, professional-grade products for all our services.',
        },
    ];

    // Gallery data for Expert Stylists
    const galleryImages = [
        { src: '/instagram/1.png', title: 'Hair Styling Mastery' },
        { src: '/instagram/2.png', title: 'Color Transformation' },
        { src: '/instagram/3.png', title: 'Bridal Perfection' },
        { src: '/instagram/4.png', title: 'Modern Cuts' },
        { src: '/instagram/5.png', title: 'Premium Treatments' }
    ];


    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [showGallery, setShowGallery] = useState(false);

    // Gallery navigation function
    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
    };

    // For Why Choose Us card slider
    const [whySlide, setWhySlide] = useState(0);
    const whySlides = [
        {
            headline: 'Expert Stylists',
            description: 'Our team consists of highly experienced and trained professionals dedicated to perfecting your look.'
        },
        {
            headline: 'Timely Service',
            description: 'We value your time, ensuring efficient appointments without compromising on quality or experience.'
        },
        {
            headline: 'Flexible Booking',
            description: 'Easily schedule appointments online at your convenience with our flexible booking system.'
        },
        {
            headline: 'Premium Products',
            description: 'We use only the highest quality, professional-grade products for all our services.'
        }
    ];
    const nextWhySlide = () => {
        setWhySlide((prev) => (prev + 1) % whySlides.length);
    };

    return (
        <section className="bg-white py-16 text-black">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 items-stretch">
                {/* Top-Left Feature (Expert Stylists with Interactive Gallery) */}
                <div
                    className="md:col-span-1 relative overflow-hidden bg-gray-100 h-full min-h-[300px] md:min-h-[400px] group"
                    onMouseLeave={() => setShowGallery(false)}
                >
                    {!showGallery ? (
                        // Default Content View
                        <div className="p-8 flex flex-col justify-between h-full">
                            <div>
                                <h3 className="text-xl font-royal font-bold mb-4 text-gold tracking-wide">Expert Stylists</h3>
                                {/* Scissor Icon */}
                                <div className="mb-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-12 w-12 text-gold"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586L21 11.172c.78.78.78 2.047 0 2.828L11.828 23c-.78.78-2.047.78-2.828 0L1.414 15.414C1.024 15.024.819 14.512.819 14s.205-1.024.595-1.414L9 5c.78-.78 2.047-.78 2.828 0l2.586 2.586M7 7l2.586 2.586"
                                        />
                                    </svg>
                                </div>
                                <p className="text-lg font-playfair tracking-wide opacity-80 mb-6">Our team consists of highly experienced and trained professionals dedicated to perfecting your look.</p>
                            </div>

                            {/* Interactive Arrow Button */}
                            <button
                                onClick={() => setShowGallery(true)}
                                className="self-start bg-gold text-black px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-yellow-600 transition-colors duration-300 font-semibold"
                            >
                                <span>View Gallery</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 transition-transform group-hover:translate-x-1"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    ) : (
                        // Gallery View
                        <div className="relative h-full">
                            {/* Image with Overlay */}
                            <div className="relative h-full">
                                <Image
                                    src={galleryImages[currentImageIndex].src}
                                    alt={galleryImages[currentImageIndex].title}
                                    fill
                                    className="object-cover"
                                />
                                {/* Overlay Text */}
                                <div className="absolute inset-0 flex items-center justify-center pt-16">
                                    <div className="text-center text-white">
                                        <h4 className="text-xl font-bold mb-2">{galleryImages[currentImageIndex].title}</h4>
                                        <p className="text-sm opacity-90">Professional styling by our expert team</p>
                                    </div>
                                </div>

                                {/* Navigation Arrow */}
                                <button
                                    onClick={nextImage}
                                    className="absolute bottom-4 right-4 bg-gold text-black p-3 rounded-full hover:bg-yellow-600 transition-colors duration-300"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Center Vimeo Video */}
                <div className="md:col-span-1 lg:col-span-2 relative h-0 pb-[56.25%] w-full hidden md:block rounded-lg shadow-lg overflow-hidden">
                    <iframe
                        src="https://player.vimeo.com/video/1121614838?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;muted=1&amp;loop=1&amp;background=1"
                        className="absolute top-0 left-0 w-full h-full"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                        title="XFactor Salon Video"
                    />
                </div>

                {/* Top-Right "Why Choose Us" Section - Heading only on first slide, then sliding content */}
                <div className="md:col-span-1 bg-black p-8 flex flex-col justify-center items-end text-right text-white h-full min-h-[300px] md:min-h-[400px] relative overflow-hidden">
                    <AnimatePresence initial={false} mode="wait">
                        <motion.div
                            key={whySlide}
                            initial={{ x: 300, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -300, opacity: 0 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 40 }}
                            className="absolute inset-0 flex flex-col justify-center items-end text-right w-full h-full p-8 pt-20"
                        >
                            {whySlide === 0 && (
                                <h2 className="text-4xl lg:text-5xl font-royal font-bold mb-4 text-gold tracking-wide">WHY CHOOSE US?</h2>
                            )}
                            <h3 className="text-2xl font-bold text-gold mb-2">{whySlides[whySlide].headline}</h3>
                            <p className="text-lg font-playfair tracking-wide opacity-80 mb-4">{whySlides[whySlide].description}</p>
                        </motion.div>
                    </AnimatePresence>
                    {/* Arrow Button for slide navigation */}
                    <button
                        onClick={nextWhySlide}
                        className="absolute bottom-8 right-8 bg-gold text-black p-3 rounded-full hover:bg-yellow-600 transition-colors duration-300 flex items-center justify-center shadow-lg z-20"
                        aria-label="Next reason"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* Bottom-Left Feature */}
                <div className="md:col-span-1 bg-gray-100 p-8 pb-16 flex flex-col justify-start items-start text-black border border-gray-200 shadow-sm">
                    <h3 className="text-xl font-royal font-bold mb-2 text-gold tracking-wide">Timely Service</h3>
                    <div className="mb-4">{features[1].icon}</div>
                    <p className="text-lg font-playfair tracking-wide text-gray-700">{features[1].description}</p>
                    <Link href="/services" className="mt-6 text-gold flex items-center group">
                        <span className="font-semibold text-sm mr-2">Visit site</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 transition-transform group-hover:translate-x-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>

                {/* Bottom-Middle and Bottom-Right Features */}
                <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
                    {/* Flexible Booking Box with Hover Effect */}
                    <div className="bg-black p-8 pb-16 flex flex-col justify-start items-start text-white relative overflow-hidden group">
                        <h3 className="text-xl font-royal font-bold mb-2 text-gold tracking-wide">Flexible Booking</h3>
                        <div className="mb-4">{features[2].icon}</div>
                        <p className="text-lg font-playfair tracking-wide opacity-80 mb-6">{features[2].description}</p>

                        {/* Calendar Animation on Hover */}
                        <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-16 w-16 text-gold"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={1}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                            </svg>
                        </div>

                        {/* Interactive Booking Button */}
                        <div className="mt-auto">
                            <Link href="/booking" className="inline-flex items-center bg-gold text-black px-6 py-3 rounded-lg hover:bg-yellow-600 transition-colors duration-300 font-semibold group/btn">
                                <span className="mr-2">Book Now</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 transition-transform group-hover/btn:translate-x-1"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    {/* Premium Products Box with Sparkle Effect */}
                    <div className="bg-gray-100 p-8 pb-16 flex flex-col justify-start items-start text-black relative overflow-hidden group">
                        <h3 className="text-xl font-royal font-bold mb-2 text-gold tracking-wide">Premium Products</h3>
                        <div className="mb-4">{features[3].icon}</div>
                        <p className="text-lg font-playfair tracking-wide opacity-80 mb-6">{features[3].description}</p>

                        {/* Sparkle Animation */}
                        <div className="absolute top-6 right-6 opacity-30 group-hover:opacity-60 transition-opacity duration-300">
                            <div className="relative">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-gold animate-pulse"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 0l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-3.01L12 0z" />
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 text-gold absolute -top-2 -right-2 animate-pulse delay-150"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 0l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-3.01L12 0z" />
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-3 w-3 text-gold absolute -bottom-1 -left-3 animate-pulse delay-300"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 0l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-3.01L12 0z" />
                                </svg>
                            </div>
                        </div>

                        {/* Interactive Products Button */}
                        <div className="mt-auto">
                            <Link href="/products" className="inline-flex items-center bg-gold text-black px-6 py-3 rounded-lg hover:bg-yellow-600 transition-colors duration-300 font-semibold group/btn">
                                <span className="mr-2">View Products</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 transition-transform group-hover/btn:translate-x-1"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Luxury Products Box - Below "Why Choose Us" - Image Hover Effect */}
                <div className="md:col-span-1 relative overflow-hidden group cursor-pointer">
                    {/* First Image - Default */}
                    <Image
                        src="/whyus/image.png"
                        alt="Luxury Beauty Products"
                        width={400}
                        height={400}
                        className="object-cover w-full h-full min-h-[300px] md:min-h-[400px] transition-transform duration-500 ease-in-out group-hover:translate-x-[-100%]"
                    />
                    {/* Second Image - On Hover */}
                    <Image
                        src="/whyus/image1.png"
                        alt="Luxury Beauty Products Hover"
                        width={400}
                        height={400}
                        className="object-cover w-full h-full min-h-[300px] md:min-h-[400px] absolute top-0 left-0 transition-transform duration-500 ease-in-out translate-x-[100%] group-hover:translate-x-0"
                    />
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M3.636 5.636l.707.707m0 7V21m-3-3h18M9 6h.01M15 6h.01M12 10h.01M12 14h.01M12 18h.01"
                    />
                </svg>
            ),
            headline: 'Expert Stylists',
            description: 'Our team consists of highly experienced and trained professionals dedicated to perfecting your look.',
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
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
            ),
            headline: 'Timely Service',
            description: 'We value your time, ensuring efficient appointments without compromising on quality or experience.',
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
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                </svg>
            ),
            headline: 'Flexible Booking',
            description: 'Easily schedule appointments online at your convenience with our flexible booking system.',
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

    return (
        <section className="bg-white py-16 text-black">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 items-stretch">
                {/* Top-Left Feature (Labeled as "Expert Stylists") - Match video height */}
                <div className="md:col-span-1 bg-gray-100 p-8 flex flex-col justify-between items-start text-black h-full min-h-[300px] md:min-h-[400px]">
                    <div>
                        <h3 className="text-xl font-semibold mb-2 text-gold">Expert Stylists</h3> {/* Added label */}
                        <div className="mb-4">{features[0].icon}</div>
                        <p className="text-sm opacity-80">{features[0].description}</p>
                    </div>
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

                {/* Top-Right "Why Choose Us" Section - Match video height */}
                <div className="md:col-span-1 bg-black p-8 flex flex-col justify-center items-end text-right text-white h-full min-h-[300px] md:min-h-[400px]">
                    <div>
                        <h2 className="text-4xl lg:text-5xl font-bold font-playfair mb-4 text-gold">WHY CHOOSE US?</h2> {/* Label aligned at top */}
                        <p className="text-lg opacity-80">
                            Every day we work hard to make life of our clients better and happier.
                        </p>
                    </div>
                </div>

                {/* Bottom-Left Feature */}
                <div className="md:col-span-1 bg-gray-100 p-8 pb-16 flex flex-col justify-start items-start text-black border border-gray-200 shadow-sm">
                    <h3 className="text-xl font-semibold mb-2 text-gold">Timely Service</h3> {/* Added label */}
                    <div className="mb-4">{features[1].icon}</div>
                    <p className="text-sm text-gray-700">{features[1].description}</p>
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
                    <div className="bg-black p-8 pb-16 flex flex-col justify-start items-start text-white">
                        <h3 className="text-xl font-semibold mb-2 text-gold">Flexible Booking</h3> {/* Added label */}
                        <div className="mb-4">{features[2].icon}</div>
                        <p className="text-sm opacity-80">{features[2].description}</p>
                        <Link href="/booking" className="mt-6 text-gold flex items-center group">
                            <span className="font-semibold text-sm mr-2">Book Now</span>
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
                    <div className="bg-gray-100 p-8 pb-16 flex flex-col justify-start items-start text-black">
                        <h3 className="text-xl font-semibold mb-2 text-gold">Premium Products</h3> {/* Added label */}
                        <div className="mb-4">{features[3].icon}</div>
                        <p className="text-sm opacity-80">{features[3].description}</p>
                        <Link href="/products" className="mt-6 text-gold flex items-center group">
                            <span className="font-semibold text-sm mr-2">View Products</span>
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
                </div>

                {/* Luxury Products Box - Below "Why Choose Us" - Only Image */}
                <div className="md:col-span-1 flex items-center justify-center overflow-hidden">
                    <Image
                        src="/whyus/image.png"
                        alt="Luxury Beauty Products"
                        width={400}
                        height={400}
                        className="object-cover w-full h-full min-h-[300px] md:min-h-[400px]"
                    />
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
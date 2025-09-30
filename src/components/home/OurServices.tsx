'use client';

import React from 'react';
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal';
import Image from 'next/image';

const content = [
    {
        title: "Hair",
        description:
            "Transform your look with our expert stylists who specialize in precision cuts, vibrant colors, and personalized styling. From classic cuts to trendy styles, we bring your hair vision to life with professional techniques and premium products.\n\nOur hair services include:\n- Haircut & Styling: Professional cuts and styling for all hair types\n- Hair Coloring: Full color, highlights, lowlights, and color correction\n- Hair Treatments: Deep conditioning, keratin treatments, and hair masks\n- Blowout & Styling: Professional blowout and special occasion styling\nExperience luxury and care with every visit.",
        content: (
            <div className="flex h-full w-full items-center justify-center relative overflow-hidden rounded-2xl">
                <Image
                    src="/instagram/1.png"
                    alt="Professional Hair Styling Services"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white z-10">
                    <h3 className="text-2xl font-playfair font-bold mb-2">Hair Services</h3>
                    <p className="text-sm opacity-90">Cuts • Colors • Styling</p>
                </div>
            </div>
        ),
        buttonText: "Book Hair Service",
        buttonLink: "/services/hair"
    },
    {
        title: "Skin & Care",
        description:
            "Rejuvenate and nourish your skin with our luxury facial treatments and skincare services. Our expert aestheticians use advanced techniques and premium products to give you a radiant, healthy complexion that glows from within.\n\nOur skin care menu features:\n- Classic Facial: Deep cleansing facial for all skin types\n- Anti-Aging Facial: Specialized treatment to reduce signs of aging\n- Acne Treatment: Targeted treatment for problematic skin\n- Hydrating Facial: Intensive moisture treatment for dry skin\nLet us help you achieve glowing, healthy skin.",
        content: (
            <div className="flex h-full w-full items-center justify-center relative overflow-hidden rounded-2xl">
                <Image
                    src="/instagram/2.png"
                    alt="Professional Skin Care Services"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white z-10">
                    <h3 className="text-2xl font-playfair font-bold mb-2">Skin Care</h3>
                    <p className="text-sm opacity-90">Facials • Treatments • Glow</p>
                </div>
            </div>
        ),
        buttonText: "Book Skin Treatment",
        buttonLink: "/services/skin"
    },
    {
        title: "Makeup",
        description:
            "Enhance your natural beauty with our professional makeup services. From everyday looks to glamorous special occasions, our talented makeup artists create stunning transformations that make you feel confident and radiant.\n\nOur makeup offerings include:\n- Bridal Makeup: Elegant looks for your special day\n- Event Makeup: Glamorous styles for parties and occasions\n- Everyday Makeup: Natural and radiant finishes\n- Makeup Trials: Preview your look before the big event\nStep out with confidence and style.",
        content: (
            <div className="flex h-full w-full items-center justify-center relative overflow-hidden rounded-2xl">
                <Image
                    src="/instagram/3.png"
                    alt="Professional Makeup Services"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white z-10">
                    <h3 className="text-2xl font-playfair font-bold mb-2">Makeup</h3>
                    <p className="text-sm opacity-90">Bridal • Events • Glamour</p>
                </div>
            </div>
        ),
        buttonText: "Book Makeup Session",
        buttonLink: "/services/makeup"
    },
    {
        title: "Bride & Groom",
        description:
            "Make your special day unforgettable with our comprehensive bridal and groom packages. From trial sessions to the big day, we ensure you look absolutely perfect with our specialized wedding beauty services tailored just for you.\n\nOur wedding services include:\n- Bridal Hair & Makeup: Custom looks for brides\n- Groom Styling: Hair, skin, and grooming for grooms\n- Pre-wedding Trials: Preview and perfect your style\n- Special Day Packages: All-in-one luxury for your wedding\nTrust us to make your celebration flawless.",
        content: (
            <div className="flex h-full w-full items-center justify-center relative overflow-hidden rounded-2xl">
                <Image
                    src="/instagram/4.png"
                    alt="Bridal and Groom Wedding Services"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white z-10">
                    <h3 className="text-2xl font-playfair font-bold mb-2">Bride & Groom</h3>
                    <p className="text-sm opacity-90">Wedding • Bridal • Special Day</p>
                </div>
            </div>
        ),
        buttonText: "Book Wedding Package",
        buttonLink: "/services/bridal"
    }
];

function OurServices() {
    return (
        <section className="py-6 md:py-10 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
            {/* Section Header */}
            <div className="luxury-container relative z-10 mb-8 px-4 md:px-0">
                <div className="text-center">
                    <h2 className="text-3xl md:text-6xl font-script text-gold mb-4 italic">
                        Welcome
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-playfair font-bold text-gray-900 mb-2">
                        OUR SERVICES
                    </h3>
                    <div className="mx-auto w-full max-w-xl md:max-w-2xl lg:max-w-3xl mb-2 flex justify-center">
                        <Image src="/royal/3.png" alt="Service visual" width={0} height={0} sizes="100vw" className="w-full h-auto object-contain rounded-md" />
                    </div>
                    <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-4"></div>

                </div>
            </div>

            {/* StickyScroll Component - Full width, keep spacing below header */}
            <div className="w-full relative px-0 mt-6 md:mt-12">
                <StickyScroll content={content} contentClassName="hide-scrollbar lg:h-[28rem] lg:max-h-[28rem]" />
            </div>

        </section>
    );
}

export default OurServices;
"use client";

import React, { useState, useEffect } from "react";

const StatsSection = () => {
    const [counters, setCounters] = useState({
        locations: 0,
        artists: 0,
        experience: 0,
        awards: 0
    });

    const [isVisible, setIsVisible] = useState(false);

    // Intersection Observer for animation trigger
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        const element = document.getElementById('stats-section');
        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, []);

    // Enhanced counter animation
    useEffect(() => {
        if (!isVisible) return;

        const targetValues = {
            locations: 180,
            artists: 4000,
            experience: 3,
            awards: 15
        };

        const animationDuration = 2500;
        const steps = 60;
        const stepTime = animationDuration / steps;

        Object.keys(targetValues).forEach((key) => {
            const target = targetValues[key as keyof typeof targetValues];
            let current = 0;
            let step = 0;

            const timer = setInterval(() => {
                step++;
                const progress = step / steps;
                const easedProgress = 1 - Math.pow(1 - progress, 3); // Ease-out cubic
                current = Math.floor(target * easedProgress);

                setCounters((prev) => ({
                    ...prev,
                    [key]: current
                }));

                if (step >= steps) {
                    clearInterval(timer);
                }
            }, stepTime);
        });
    }, [isVisible]);

    const stats = [
        {
            value: counters.locations,
            suffix: "+",
            label: "Premium Locations",
            sublabel: "Across India"
        },
        {
            value: counters.artists,
            suffix: "+",
            label: "Expert Artists",
            sublabel: "& Technicians"
        },
        {
            value: counters.experience,
            suffix: "",
            label: "Decades of",
            sublabel: "Excellence"
        },
        {
            value: counters.awards,
            suffix: "+",
            label: "Global Awards",
            sublabel: "& Recognition"
        }
    ];

    return (
        <section
            id="stats-section"
            className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-gold/20 to-yellow-400/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-gold/10 to-yellow-400/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>

            <div className="luxury-container relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-block">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-gray-900 mb-4 tracking-tight">
                            OUR ACHIEVEMENTS
                        </h2>
                        <div className="w-24 h-1 bg-gold rounded-full mx-auto"></div>
                    </div>
                </div>

                {/* Stats Grid - Simple, no cards, no icons, all text same color */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="p-4 text-center"
                        >
                            <div className="mb-2">
                                <span className="text-5xl lg:text-6xl font-extrabold font-serif text-gray-900 tracking-tight">
                                    {stat.value.toLocaleString()}
                                </span>
                                <span className="text-3xl lg:text-4xl font-bold font-serif text-gray-900 ml-1">
                                    {stat.suffix}
                                </span>
                            </div>
                            <div className="space-y-1">
                                <p className="text-lg font-semibold font-serif text-gray-900 tracking-wide">
                                    {stat.label}
                                </p>
                                <p className="text-sm font-medium font-serif text-gray-900">
                                    {stat.sublabel}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

             
            </div>
        </section>
    );
};

export default StatsSection;
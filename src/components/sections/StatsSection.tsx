"use client";

import React, { useState, useEffect } from "react";

const StatsSection = () => {
    const [counters, setCounters] = useState({
        locations: 0,
        artists: 0,
        experience: 0,
        awards: 0
    });

    // Continuous animated counter effect
    useEffect(() => {
        const baseValues = {
            locations: 180,
            artists: 4000,
            experience: 3,
            awards: 15
        };

        const variationRanges = {
            locations: { min: 150, max: 200 },
            artists: { min: 3800, max: 4200 },
            experience: { min: 3, max: 3 }, // Keep experience constant at 3
            awards: { min: 12, max: 18 }
        };

        const animationDuration = 3000; // 3 seconds for each cycle
        const updateInterval = 50; // Update every 50ms for smooth animation

        const intervals = Object.keys(baseValues).map((key) => {
            const range = variationRanges[key as keyof typeof variationRanges];
            let currentTarget = baseValues[key as keyof typeof baseValues];
            let currentValue = 0;
            let animationProgress = 0;

            // Start with count-up animation to base value
            const intervalId = setInterval(() => {
                if (animationProgress === 0) {
                    // Initial count-up to base value
                    currentValue += (currentTarget / (animationDuration / updateInterval));
                    if (currentValue >= currentTarget) {
                        currentValue = currentTarget;
                        animationProgress = 1;

                        // Set new random target for continuous animation
                        if (key !== 'experience') {
                            currentTarget = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
                        }
                    }
                } else {
                    // Continuous smooth variation
                    if (key !== 'experience') {
                        const step = Math.abs(currentTarget - currentValue) / (animationDuration / updateInterval);

                        if (currentValue < currentTarget) {
                            currentValue += step;
                            if (currentValue >= currentTarget) {
                                currentValue = currentTarget;
                                // Set new random target
                                setTimeout(() => {
                                    currentTarget = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
                                }, 1000);
                            }
                        } else if (currentValue > currentTarget) {
                            currentValue -= step;
                            if (currentValue <= currentTarget) {
                                currentValue = currentTarget;
                                // Set new random target
                                setTimeout(() => {
                                    currentTarget = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
                                }, 1000);
                            }
                        }
                    }
                }

                setCounters((prev) => ({
                    ...prev,
                    [key]: Math.floor(currentValue)
                }));
            }, updateInterval);

            return intervalId;
        });

        return () => {
            intervals.forEach((interval) => clearInterval(interval));
        };
    }, []);

    const stats = [
        {
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
            ),
            value: counters.locations,
            suffix: "+",
            label: "Locations Pan India",
            color: "text-[#d4af37]"
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A2.99 2.99 0 0 0 17.09 7c-.8 0-1.54.37-2.01.99L12 11.9 8.92 7.99A2.99 2.99 0 0 0 6.01 7c-.8 0-1.54.37-2.01.99L1.46 16H4v6h4v-6h2v6h4v-6h2v6h4z" />
                </svg>
            ),
            value: counters.artists,
            suffix: "+",
            label: "Expert Artists & Technicians",
            color: "text-black"
        },
        {
            icon: (
                <div className="flex justify-center items-center space-x-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                </div>
            ),
            value: counters.experience,
            suffix: "",
            label: "Decades of Excellence",
            color: "text-gray-600"
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5 16L3 5h5.5l1.5 3h6L19 5h2l-2 11H5zm7-2.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5z" />
                </svg>
            ),
            value: counters.awards,
            suffix: "+",
            label: "Global Awards & Recognition",
            color: "text-[#d4af37]"
        }
    ];

    return (
        <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-16">
            <div className="luxury-container">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="text-center group hover:transform hover:scale-105 transition-all duration-300"
                        >
                            {/* Icon */}
                            <div
                                className={`${stat.color} mb-2 flex justify-center group-hover:animate-bounce`}
                            >
                                {stat.icon}
                            </div>

                            {/* Number */}
                            <div className="mb-1 flex justify-center items-baseline">
                                <span className="text-4xl lg:text-5xl font-bold text-black">
                                    {stat.value.toLocaleString()}
                                </span>
                                <span className="text-2xl lg:text-3xl font-bold text-gray-600">
                                    {stat.suffix}
                                </span>
                            </div>

                            {/* Label */}
                            <p className="text-sm lg:text-base text-gray-700 font-medium tracking-wide leading-tight px-2">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Bottom accent line */}
                <div className="mt-12 flex justify-center">
                    <div className="w-24 h-1 bg-gradient-to-r from-black via-[#d4af37] to-gray-600 rounded-full"></div>
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
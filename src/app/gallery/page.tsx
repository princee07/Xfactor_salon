"use client"
import React, { useState } from 'react';

const GalleryPage = () => {
    const galleryCategories = [
        {
            name: "Hair Transformations",
            images: [
                { id: 1, title: "Blonde Highlights", description: "Beautiful blonde highlights on brunette hair" },
                { id: 2, title: "Pixie Cut", description: "Modern pixie cut with layers" },
                { id: 3, title: "Balayage", description: "Natural balayage technique" },
                { id: 4, title: "Color Correction", description: "Before and after color correction" },
                { id: 5, title: "Long Layers", description: "Long layered cut with face framing" },
                { id: 6, title: "Bob Cut", description: "Classic bob with modern twist" }
            ]
        },
        {
            name: "Nail Art",
            images: [
                { id: 7, title: "French Manicure", description: "Classic French manicure with gel" },
                { id: 8, title: "Floral Design", description: "Hand-painted floral nail art" },
                { id: 9, title: "Ombre Nails", description: "Gradient ombre effect" },
                { id: 10, title: "Geometric Pattern", description: "Modern geometric nail design" },
                { id: 11, title: "Holiday Nails", description: "Festive holiday nail art" },
                { id: 12, title: "Glitter Accent", description: "Elegant glitter accent nails" }
            ]
        },
        {
            name: "Makeup & Beauty",
            images: [
                { id: 13, title: "Bridal Makeup", description: "Natural bridal makeup look" },
                { id: 14, title: "Evening Glam", description: "Glamorous evening makeup" },
                { id: 15, title: "Natural Look", description: "Fresh, natural everyday makeup" },
                { id: 16, title: "Smoky Eyes", description: "Classic smoky eye technique" },
                { id: 17, title: "Bold Lips", description: "Statement lip color" },
                { id: 18, title: "Contouring", description: "Professional contouring and highlighting" }
            ]
        },
        {
            name: "Special Events",
            images: [
                { id: 19, title: "Wedding Party", description: "Bridal party hair and makeup" },
                { id: 20, title: "Prom Night", description: "Elegant prom hairstyles" },
                { id: 21, title: "Photo Shoot", description: "Professional photo shoot styling" },
                { id: 22, title: "Red Carpet", description: "Red carpet glamour look" },
                { id: 23, title: "Anniversary", description: "Special anniversary styling" },
                { id: 24, title: "Birthday Glam", description: "Birthday celebration makeover" }
            ]
        }
    ];

    const [selectedCategory, setSelectedCategory] = useState("All");
    const [lightboxImage, setLightboxImage] = useState<number | null>(null);

    const categories = ["All", ...galleryCategories.map(cat => cat.name)];

    const getFilteredImages = () => {
        if (selectedCategory === "All") {
            return galleryCategories.flatMap(cat => cat.images);
        }
        const category = galleryCategories.find(cat => cat.name === selectedCategory);
        return category ? category.images : [];
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Gallery</h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Explore our portfolio of stunning transformations and artistic creations.
                            See the quality and creativity that sets XFactor Salon apart.
                        </p>
                    </div>
                </div>
            </section>

            {/* Filter Tabs */}
            <section className="py-8 bg-white border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-3 rounded-full font-medium transition-colors duration-200 ${selectedCategory === category
                                    ? 'bg-pink-500 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {getFilteredImages().map((image) => (
                            <div
                                key={image.id}
                                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200 cursor-pointer"
                                onClick={() => setLightboxImage(image.id)}
                            >
                                {/* Image Placeholder */}
                                <div className="bg-gray-200 h-64 flex items-center justify-center relative group">
                                    <span className="text-gray-500">Image {image.id}</span>

                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-200 flex items-center justify-center">
                                        <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4">
                                    <h3 className="font-semibold text-gray-900 mb-2">{image.title}</h3>
                                    <p className="text-sm text-gray-600">{image.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox Modal */}
            {lightboxImage && (
                <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
                    <div className="relative max-w-4xl max-h-full">
                        {/* Close Button */}
                        <button
                            onClick={() => setLightboxImage(null)}
                            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
                        >
                            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Image */}
                        <div className="bg-white rounded-lg overflow-hidden">
                            <div className="bg-gray-200 h-96 flex items-center justify-center">
                                <span className="text-gray-500 text-xl">Large Image {lightboxImage}</span>
                            </div>
                            <div className="p-6">
                                {(() => {
                                    const image = galleryCategories
                                        .flatMap(cat => cat.images)
                                        .find(img => img.id === lightboxImage);
                                    return image ? (
                                        <>
                                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{image.title}</h3>
                                            <p className="text-gray-600">{image.description}</p>
                                        </>
                                    ) : null;
                                })()}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Call to Action */}
            <section className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready for Your Transformation?</h2>
                        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                            Book your appointment today and let our talented team create your perfect look.
                            We can&apos;t wait to add your before and after to our gallery!
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-200">
                                Book Appointment
                            </button>
                            <button className="border border-pink-500 text-pink-500 hover:bg-pink-50 px-8 py-3 rounded-full font-semibold transition-colors duration-200">
                                View Services
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Instagram Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Follow Us on Instagram</h2>
                        <p className="text-gray-600 mb-6">
                            Stay updated with our latest work and get daily inspiration from our social media.
                        </p>
                        <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200">
                            @XFactorSalon
                        </button>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {[1, 2, 3, 4, 5, 6].map((item) => (
                            <div key={item} className="bg-gray-200 aspect-square rounded-lg flex items-center justify-center">
                                <span className="text-gray-500 text-sm">IG Post {item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GalleryPage;
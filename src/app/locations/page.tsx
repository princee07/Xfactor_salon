import React from 'react';

const LocationsPage = () => {
    const locations = [
        {
            id: 1,
            name: "Downtown Branch",
            address: "123 Main Street, Downtown, City 12345",
            phone: "(555) 123-4567",
            hours: {
                weekdays: "9:00 AM - 8:00 PM",
                saturday: "8:00 AM - 6:00 PM",
                sunday: "10:00 AM - 5:00 PM"
            },
            services: ["Hair Styling", "Hair Coloring", "Manicure", "Pedicure", "Facial Treatments"]
        },
        {
            id: 2,
            name: "Mall Location",
            address: "456 Shopping Center Blvd, Mall Plaza, City 12345",
            phone: "(555) 987-6543",
            hours: {
                weekdays: "10:00 AM - 9:00 PM",
                saturday: "9:00 AM - 9:00 PM",
                sunday: "11:00 AM - 6:00 PM"
            },
            services: ["Hair Styling", "Hair Coloring", "Highlights", "Hair Treatments", "Eyebrow Services"]
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Locations</h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Visit us at any of our convenient locations. Each salon offers the same exceptional
                            service and luxurious experience you&apos;ve come to expect from XFactor Salon.
                        </p>
                    </div>
                </div>
            </section>

            {/* Locations Grid */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {locations.map((location) => (
                            <div key={location.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                                {/* Location Image Placeholder */}
                                <div className="bg-gray-200 h-48 flex items-center justify-center">
                                    <span className="text-gray-500">Location Image</span>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{location.name}</h3>

                                    {/* Address */}
                                    <div className="flex items-start mb-3">
                                        <div className="bg-gray-100 p-2 rounded-full mr-3">
                                            <svg className="h-5 w-5 text-[#d4af37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-gray-700">{location.address}</p>
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div className="flex items-center mb-4">
                                        <div className="bg-gray-100 p-2 rounded-full mr-3">
                                            <svg className="h-5 w-5 text-[#d4af37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <p className="text-gray-700">{location.phone}</p>
                                    </div>

                                    {/* Hours */}
                                    <div className="mb-4">
                                        <h4 className="font-semibold text-gray-900 mb-2">Hours:</h4>
                                        <div className="text-sm text-gray-600 space-y-1">
                                            <p><span className="font-medium">Mon-Fri:</span> {location.hours.weekdays}</p>
                                            <p><span className="font-medium">Saturday:</span> {location.hours.saturday}</p>
                                            <p><span className="font-medium">Sunday:</span> {location.hours.sunday}</p>
                                        </div>
                                    </div>

                                    {/* Services */}
                                    <div className="mb-6">
                                        <h4 className="font-semibold text-gray-900 mb-2">Available Services:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {location.services.map((service, index) => (
                                                <span
                                                    key={index}
                                                    className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                                                >
                                                    {service}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Actions */}
                                    <div className="flex space-x-3">
                                        <button className="bg-[#d4af37] hover:bg-[#b8941f] text-white px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200">
                                            Book Appointment
                                        </button>
                                        <button className="border border-[#d4af37] text-[#d4af37] hover:bg-gray-50 px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200">
                                            Get Directions
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us</h2>
                        <p className="text-gray-600">
                            Use the map below to find the location nearest to you.
                        </p>
                    </div>

                    <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
                        <span className="text-gray-500 text-lg">Interactive Map Placeholder</span>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LocationsPage;
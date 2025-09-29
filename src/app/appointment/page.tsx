"use client";
import React from 'react';

const AppointmentPage = () => {
    const [formData, setFormData] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        stylist: '',
        location: '',
        date: '',
        time: '',
        notes: ''
    });

    const services = [
        { value: 'haircut', label: 'Haircut & Styling', duration: '60 mins', price: 'From $50' },
        { value: 'color', label: 'Hair Coloring', duration: '2-3 hours', price: 'From $80' },
        { value: 'highlights', label: 'Highlights/Lowlights', duration: '2-3 hours', price: 'From $120' },
        { value: 'treatment', label: 'Hair Treatment', duration: '45 mins', price: 'From $40' },
        { value: 'manicure', label: 'Manicure', duration: '45 mins', price: 'From $25' },
        { value: 'pedicure', label: 'Pedicure', duration: '60 mins', price: 'From $35' },
        { value: 'facial', label: 'Facial Treatment', duration: '60 mins', price: 'From $70' },
        { value: 'makeup', label: 'Makeup Application', duration: '45 mins', price: 'From $60' },
        { value: 'eyebrows', label: 'Eyebrow Services', duration: '30 mins', price: 'From $25' },
        { value: 'package', label: 'Special Package', duration: 'Varies', price: 'Contact for pricing' }
    ];

    const stylists = [
        { value: 'any', label: 'No Preference' },
        { value: 'sarah', label: 'Sarah Johnson - Senior Stylist' },
        { value: 'mike', label: 'Mike Chen - Color Specialist' },
        { value: 'emily', label: 'Emily Rodriguez - Hair & Makeup' },
        { value: 'david', label: 'David Kim - Master Stylist' },
        { value: 'lisa', label: 'Lisa Thompson - Nail Specialist' }
    ];

    const locations = [
        { value: 'downtown', label: 'Downtown Branch' },
        { value: 'mall', label: 'Mall Location' }
    ];

    const timeSlots = [
        '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
        '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
        '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM',
        '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM'
    ];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Appointment booking:', formData);
        // Handle form submission here
        alert('Appointment request submitted! We will contact you shortly to confirm.');
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-white via-gray-50 to-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/5 to-transparent"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="text-center">
                        <div className="inline-block p-1 bg-gradient-to-r from-[#d4af37] to-[#b8941f] rounded-full mb-6">
                            <div className="bg-white rounded-full px-6 py-2">
                                <span className="text-[#d4af37] font-semibold text-sm uppercase tracking-wider">Premium Booking</span>
                            </div>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                            Book Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-[#b8941f]">Royal</span> Experience
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Indulge in luxury beauty services at XFactor Salon. Our expert artisans await to transform your look
                            with unparalleled elegance and sophistication.
                        </p>
                        <div className="mt-8 flex justify-center space-x-4">
                            <div className="flex items-center text-gray-500">
                                <svg className="h-5 w-5 text-[#d4af37] mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-sm">Expert Stylists</span>
                            </div>
                            <div className="flex items-center text-gray-500">
                                <svg className="h-5 w-5 text-[#d4af37] mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-sm">Premium Products</span>
                            </div>
                            <div className="flex items-center text-gray-500">
                                <svg className="h-5 w-5 text-[#d4af37] mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-sm">Luxury Atmosphere</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Booking Form */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                        <div className="bg-gradient-to-r from-[#d4af37]/10 to-transparent p-8 border-b border-gray-100">
                            <div className="text-center">
                                <h2 className="text-3xl font-bold text-gray-900 mb-2">Reserve Your Session</h2>
                                <p className="text-gray-600">Complete your booking details below</p>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit} className="p-8 space-y-8">
                            {/* Personal Information */}
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                                            First Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                                            Last Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                            Phone Number *
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Service Selection */}
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Service Details</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                                            Select Service *
                                        </label>
                                        <select
                                            id="service"
                                            name="service"
                                            value={formData.service}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                                        >
                                            <option value="">Choose a service...</option>
                                            {services.map((service) => (
                                                <option key={service.value} value={service.value}>
                                                    {service.label} - {service.duration} - {service.price}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="stylist" className="block text-sm font-medium text-gray-700 mb-2">
                                            Preferred Stylist
                                        </label>
                                        <select
                                            id="stylist"
                                            name="stylist"
                                            value={formData.stylist}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                                        >
                                            <option value="">Select stylist...</option>
                                            {stylists.map((stylist) => (
                                                <option key={stylist.value} value={stylist.value}>
                                                    {stylist.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                                            Location *
                                        </label>
                                        <select
                                            id="location"
                                            name="location"
                                            value={formData.location}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                                        >
                                            <option value="">Choose location...</option>
                                            {locations.map((location) => (
                                                <option key={location.value} value={location.value}>
                                                    {location.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Date and Time */}
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Preferred Date & Time</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                                            Preferred Date *
                                        </label>
                                        <input
                                            type="date"
                                            id="date"
                                            name="date"
                                            value={formData.date}
                                            onChange={handleInputChange}
                                            required
                                            min={new Date().toISOString().split('T')[0]}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
                                            Preferred Time *
                                        </label>
                                        <select
                                            id="time"
                                            name="time"
                                            value={formData.time}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                                        >
                                            <option value="">Select time...</option>
                                            {timeSlots.map((time) => (
                                                <option key={time} value={time}>
                                                    {time}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Additional Notes */}
                            <div>
                                <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
                                    Additional Notes or Special Requests
                                </label>
                                <textarea
                                    id="notes"
                                    name="notes"
                                    value={formData.notes}
                                    onChange={handleInputChange}
                                    rows={4}
                                    placeholder="Please share any specific requests, hair concerns, or special occasions..."
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="pt-8 border-t border-gray-100">
                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-[#d4af37] to-[#b8941f] hover:from-[#b8941f] hover:to-[#d4af37] text-white py-4 px-8 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                                >
                                    <span className="flex items-center justify-center">
                                        <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        Confirm Royal Appointment
                                    </span>
                                </button>
                                <p className="text-sm text-gray-500 text-center mt-4 flex items-center justify-center">
                                    <svg className="h-4 w-4 text-[#d4af37] mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                    </svg>
                                    We will contact you within 24 hours to confirm your appointment
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* Booking Information */}
            <section className="bg-gradient-to-br from-gray-50 to-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose XFactor Salon</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">Experience the pinnacle of luxury beauty services</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Booking Policies */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center group">
                            <div className="bg-gradient-to-br from-[#d4af37]/20 to-[#b8941f]/20 h-20 w-20 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <svg className="h-10 w-10 text-[#d4af37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Royal Treatment</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Experience unparalleled luxury with our premium booking policies designed for your convenience and satisfaction.
                            </p>
                        </div>

                        {/* Contact Info */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center group">
                            <div className="bg-gradient-to-br from-[#d4af37]/20 to-[#b8941f]/20 h-20 w-20 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <svg className="h-10 w-10 text-[#d4af37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Personal Concierge</h3>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                Our dedicated team is available to assist you with any questions or special requests.
                            </p>
                            <p className="text-[#d4af37] font-bold text-xl">(555) 123-4567</p>
                        </div>

                        {/* Walk-ins */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center group">
                            <div className="bg-gradient-to-br from-[#d4af37]/20 to-[#b8941f]/20 h-20 w-20 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <svg className="h-10 w-10 text-[#d4af37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Flexible Options</h3>
                            <p className="text-gray-600 leading-relaxed">
                                While appointments guarantee your preferred time, we welcome spontaneous visits when availability permits.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Alternative Booking Methods */}
            <section className="py-20 bg-gradient-to-br from-white to-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-12 shadow-2xl border border-gray-200">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Alternative Royal Pathways</h2>
                            <p className="text-xl text-gray-600">
                                Choose your preferred method to begin your luxury transformation journey.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Phone Booking */}
                            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 text-center group">
                                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">📞</div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Imperial Call</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Connect directly with our royal concierge team for personalized booking assistance.
                                </p>
                                <p className="text-[#d4af37] font-bold text-xl mb-4">(555) 123-4567</p>
                                <p className="text-sm text-gray-500 font-medium">Mon-Fri: 9AM-8PM • Sat-Sun: 8AM-6PM</p>
                            </div>

                            {/* In-Person Booking */}
                            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 text-center group">
                                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">�</div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Palatial Visit</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Experience our majestic salons firsthand and book your appointment in person.
                                </p>
                                <button className="bg-gradient-to-r from-[#d4af37] to-[#b8941f] hover:from-[#b8941f] hover:to-[#d4af37] text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                                    Discover Locations
                                </button>
                            </div>

                            {/* Social Media */}
                            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 text-center group">
                                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">�</div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Digital Court</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Join our exclusive social circles and message us directly for royal treatment booking.
                                </p>
                                <button className="bg-gradient-to-r from-[#d4af37] to-[#b8941f] hover:from-[#b8941f] hover:to-[#d4af37] text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                                    Royal Message
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AppointmentPage;

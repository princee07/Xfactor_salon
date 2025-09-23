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
            <section className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-gray-900 mb-6">Book Your Appointment</h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Ready to transform your look? Schedule your appointment with XFactor Salon today.
                            Our expert team is here to help you achieve your beauty goals.
                        </p>
                    </div>
                </div>
            </section>

            {/* Booking Form */}
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-lg shadow-md p-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
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
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
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
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
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
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
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
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
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
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
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
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
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
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
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
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
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
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
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
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="pt-6">
                                <button
                                    type="submit"
                                    className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 px-6 rounded-md font-semibold text-lg transition-colors duration-200"
                                >
                                    Book Appointment
                                </button>
                                <p className="text-sm text-gray-500 text-center mt-3">
                                    * We will contact you within 24 hours to confirm your appointment
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* Booking Information */}
            <section className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Booking Policies */}
                        <div className="text-center">
                            <div className="bg-pink-100 h-16 w-16 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <svg className="h-8 w-8 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Booking Policy</h3>
                            <p className="text-gray-600 text-sm">
                                Please book at least 24 hours in advance. Cancellations require 24-hour notice to avoid fees.
                            </p>
                        </div>

                        {/* Contact Info */}
                        <div className="text-center">
                            <div className="bg-pink-100 h-16 w-16 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <svg className="h-8 w-8 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Need Help?</h3>
                            <p className="text-gray-600 text-sm mb-2">
                                Call us directly to book your appointment or ask questions.
                            </p>
                            <p className="text-pink-600 font-semibold">(555) 123-4567</p>
                        </div>

                        {/* Walk-ins */}
                        <div className="text-center">
                            <div className="bg-pink-100 h-16 w-16 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <svg className="h-8 w-8 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Walk-ins Welcome</h3>
                            <p className="text-gray-600 text-sm">
                                We accept walk-ins based on availability, but appointments are recommended for guaranteed service.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Alternative Booking Methods */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-pink-50 rounded-lg p-8">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Other Ways to Book</h2>
                            <p className="text-gray-600">
                                Choose the booking method that works best for you.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Phone Booking */}
                            <div className="bg-white p-6 rounded-lg text-center">
                                <div className="text-4xl mb-4">📞</div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Call Us</h3>
                                <p className="text-gray-600 mb-4">
                                    Speak directly with our reception team to book your appointment.
                                </p>
                                <p className="text-pink-600 font-bold text-lg mb-4">(555) 123-4567</p>
                                <p className="text-sm text-gray-500">Mon-Fri: 9AM-8PM</p>
                            </div>

                            {/* In-Person Booking */}
                            <div className="bg-white p-6 rounded-lg text-center">
                                <div className="text-4xl mb-4">🏪</div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Visit Us</h3>
                                <p className="text-gray-600 mb-4">
                                    Stop by any of our locations to book your next appointment in person.
                                </p>
                                <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full font-medium transition-colors duration-200">
                                    Find Locations
                                </button>
                            </div>

                            {/* Social Media */}
                            <div className="bg-white p-6 rounded-lg text-center">
                                <div className="text-4xl mb-4">💬</div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Message Us</h3>
                                <p className="text-gray-600 mb-4">
                                    Send us a direct message on Instagram or Facebook to schedule.
                                </p>
                                <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full font-medium transition-colors duration-200">
                                    Message Us
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
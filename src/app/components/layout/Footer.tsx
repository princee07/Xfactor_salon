import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-black text-white">
            {/* Main Footer Content */}
            <div className="luxury-container py-16">
                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <div className="mb-6">
                            <h3 className="text-3xl font-playfair font-bold text-[#d4af37] mb-2">GEETANJALI</h3>
                            <p className="text-sm text-gray-400 tracking-[0.3em] uppercase">SALON</p>
                        </div>
                        <p className="text-gray-300 mb-8 leading-relaxed max-w-md">
                            Experience luxury and transformation at Geetanjali Salon. Our expert stylists and premium services
                            will help you discover your most beautiful self in an atmosphere of elegance and sophistication.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-[#d4af37] transition-colors duration-300 transform hover:scale-110">
                                <span className="sr-only">Facebook</span>
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-[#d4af37] transition-colors duration-300 transform hover:scale-110">
                                <span className="sr-only">Instagram</span>
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.749.099.120.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.751-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-[#d4af37] transition-colors duration-300 transform hover:scale-110">
                                <span className="sr-only">Twitter</span>
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-[#d4af37] transition-colors duration-300 transform hover:scale-110">
                                <span className="sr-only">YouTube</span>
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-playfair font-semibold text-[#d4af37] mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><Link href="/about" className="text-gray-300 hover:text-[#d4af37] transition-colors duration-300 text-sm uppercase tracking-wide">About Us</Link></li>
                            <li><Link href="/services" className="text-gray-300 hover:text-[#d4af37] transition-colors duration-300 text-sm uppercase tracking-wide">Our Services</Link></li>
                            <li><Link href="/gallery" className="text-gray-300 hover:text-[#d4af37] transition-colors duration-300 text-sm uppercase tracking-wide">Gallery</Link></li>
                            <li><Link href="/locations" className="text-gray-300 hover:text-[#d4af37] transition-colors duration-300 text-sm uppercase tracking-wide">Locations</Link></li>
                            <li><Link href="/media" className="text-gray-300 hover:text-[#d4af37] transition-colors duration-300 text-sm uppercase tracking-wide">Media</Link></li>
                            <li><Link href="/faq" className="text-gray-300 hover:text-[#d4af37] transition-colors duration-300 text-sm uppercase tracking-wide">FAQ</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-playfair font-semibold text-[#d4af37] mb-6">Get In Touch</h4>
                        <div className="space-y-4 text-gray-300">
                            <div className="flex items-start">
                                <svg className="w-5 h-5 mr-3 mt-1 text-[#d4af37] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <div className="text-sm">
                                    <p>123 Beauty Boulevard</p>
                                    <p>Fashion District, City 12345</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <svg className="w-5 h-5 mr-3 text-[#d4af37] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span className="text-sm">(555) 123-SALON</span>
                            </div>
                            <div className="flex items-center">
                                <svg className="w-5 h-5 mr-3 text-[#d4af37] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span className="text-sm">hello@geetanjalissalon.com</span>
                            </div>
                        </div>

                        {/* Book Now Button */}
                        <div className="mt-6">
                            <Link
                                href="/appointment"
                                className="inline-block bg-[#d4af37] hover:bg-[#b8941f] text-black px-6 py-3 text-sm font-semibold tracking-wider uppercase transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                            >
                                Book Appointment
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Business Hours */}
                <div className="mt-12 pt-8 border-t border-gray-800">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-lg font-playfair font-semibold text-[#d4af37] mb-4">Business Hours</h4>
                            <div className="space-y-2 text-gray-300 text-sm">
                                <div className="flex justify-between">
                                    <span>Monday - Friday:</span>
                                    <span className="text-white">9:00 AM - 8:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Saturday:</span>
                                    <span className="text-white">8:00 AM - 6:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Sunday:</span>
                                    <span className="text-white">10:00 AM - 5:00 PM</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h4 className="text-lg font-playfair font-semibold text-[#d4af37] mb-4">Stay Updated</h4>
                            <p className="text-gray-300 mb-4 text-sm">Subscribe to our newsletter for exclusive offers and beauty tips.</p>
                            <div className="flex max-w-md">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-4 py-2 bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-[#d4af37] transition-colors duration-300 text-sm"
                                />
                                <button className="px-6 py-2 bg-[#d4af37] hover:bg-[#b8941f] text-black font-semibold transition-colors duration-300 text-sm uppercase tracking-wide">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="bg-gray-900 py-6">
                <div className="luxury-container">
                    <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
                        <p>&copy; 2024 Geetanjali Salon. All rights reserved.</p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <Link href="/privacy" className="hover:text-[#d4af37] transition-colors duration-300">Privacy Policy</Link>
                            <Link href="/terms" className="hover:text-[#d4af37] transition-colors duration-300">Terms of Service</Link>
                            <Link href="/careers" className="hover:text-[#d4af37] transition-colors duration-300">Careers</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

{/* Contact Info */ }
<div>
    <h4 className="text-lg font-playfair text-[#d4af37] mb-4">Contact</h4>
    <div className="space-y-3 text-gray-300">
        <div className="flex items-center">
            <svg className="w-5 h-5 mr-3 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>123 Beauty Street<br />City, State 12345</span>
        </div>
        <div className="flex items-center">
            <svg className="w-5 h-5 mr-3 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>(555) 123-4567</span>
        </div>
        <div className="flex items-center">
            <svg className="w-5 h-5 mr-3 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>info@xfactorsalon.com</span>
        </div>
    </div>
</div>

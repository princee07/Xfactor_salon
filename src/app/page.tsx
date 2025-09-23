import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import FeaturedServices from '@/components/home/FeaturedServices';
import AboutSection from '@/components/home/AboutSection';
import Testimonials from '@/components/home/Testimonials';
import CallToAction from '@/components/home/CallToAction';
import ContactInfo from '@/components/home/ContactInfo';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <FeaturedServices />
      <AboutSection />
      <Testimonials />
      <CallToAction />
      <ContactInfo />
    </div>
  );
};

export default HomePage;

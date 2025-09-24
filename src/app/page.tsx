import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import StatsSection from '@/components/sections/StatsSection';
import OurServices from '@/components/home/OurServices';

import Testimonials from '@/components/home/Testimonials';
import InstagramGallery from '@/components/home/InstagramGallery';

import ContactInfo from '@/components/home/ContactInfo';
import WhyChooseUs from  '@/components/home/WhyChooseUs'
const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <StatsSection />
      <OurServices />
      <WhyChooseUs/>
      <Testimonials />
      <InstagramGallery />
   
      <ContactInfo />
    </div>
  );
};

export default HomePage;

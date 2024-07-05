import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import WelcomeSection from './WelcomeSection';
import WhyChooseUs from './WhyChooseUs';
import AboutSection from './AboutSection';
import Solutions from './Solutions';
import ProcessPage from './OurProcess';
import MiniFAQ from './FAQHERO';
import Test from './Test';
import ECommerceImage from '../assets/CUSTOMGLIDE.jpg';
import Badges from './awards';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/services/services');
  };

  const handleClickSecond = () => {
    navigate('/contact');
  };

  const heroImageUrl = ECommerceImage;


  

  return (
    <div className="font-sans w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen bg-gray-800">
        <div className="container w-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="text-2xl font-bold tracking-tight text-white sm:text-6xl">
            Transform Your Digital Presence with CustomGlide
          </h1>
          <h2 className="mt-6 text-l leading-8 text-white font-semibold">
            Cutting-Edge Web Design & Development Solutions Tailored to Your Needs
          </h2>
          <div className="mt-10 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button onClick={handleClickSecond} className="cta-button bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-blue-800 hover:text-white">
              Get a Free Quote
            </button>
            <button onClick={handleClick} className="cta-button bg-orange-600 hover:text-white hover:bg-blue-800 text-white py-2 px-4 rounded-md">
              Explore Our Services
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center my-10 px-4 sm:px-6 lg:px-8">
          <div className="relative w-full h-full md:h-full flex items-center justify-center">
            <div className="relative w-96 h-96 ">
            <img
              src={heroImageUrl}
              alt="Hero Image"
              className="w-full h-auto object-cover rounded-3xl"
            />
            </div>
          </div>
        </div>
      </div>
      <WelcomeSection />
      <AboutSection />
      <Solutions />
      <WhyChooseUs />
      <ProcessPage />
      <MiniFAQ />
      <Test />
      <Badges />
    </div>
  );
};

export default HeroSection;

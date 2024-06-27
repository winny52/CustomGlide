import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ServicesImage from '../assets/webdesignanddev.jpg'; // Replace with your actual image path

const Solutions = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/services/services');
  };

  // State to manage the visibility of each paragraph
  const [openSection, setOpenSection] = useState(null);

  // Function to toggle visibility
  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  // Services data
  const services = [
    { title: "Website Design & Development", description: "Craft visually stunning and highly functional websites tailored to your brand and objectives, utilizing the latest technologies for responsiveness, speed, and security." },
    { title: "Responsive Design", description: "Ensure your website delivers an optimal user experience across all devices, enhancing engagement and retention." },
    { title: "E-commerce Solutions", description: "Drive sales and growth with custom-built online stores that are secure, scalable, and easy to manage." },
    { title: "Custom Web Applications", description: "Tailor-made solutions to meet your unique requirements, from business applications to content management systems." },
    { title: "UI/UX Design", description: "Delight users and boost engagement with intuitive and captivating interfaces designed through user-centric methodologies." },
    { title: "Website Maintenance", description: "Keep your site updated, secure, and performing at its best with our flexible maintenance plans." },
    { title: "SEO Services", description: "Improve your online visibility and attract more leads with comprehensive SEO strategies, including keyword research and on-page optimization." },
    { title: "Content Creation", description: "Elevate your brand with high-quality, engaging content across various channels, from website copy to social media." },
    { title: "PPC Advertising", description: "Drive targeted traffic and maximize ROI with expertly managed pay-per-click campaigns." }
  ];

  return (
    <div className="font-sans container mx-auto py-4 px-4 md:px-8 mb-4">
      <h1 className="text-center text-4xl font-semibold text-blue-700 mb-4">
        Comprehensive Digital Solutions to Elevate Your Business
      </h1>
      <p className="text-xl mb-4 text-center">
        At CustomGlide, we offer a comprehensive suite of services to propel your business forward:
      </p>
      <div className="flex flex-col items-center">
        <img src={ServicesImage} alt="Services" className="rounded-xl shadow-lg w-full h-auto md:w-3/4 mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-200 p-3 md:p-4 rounded-xl border-gray-900 flex flex-col justify-between cursor-pointer"
              onClick={() => toggleSection(index)}
            >
              <div className="flex justify-between items-center">
                <h2 className="text-lg text-blue-800">
                  {service.title}
                </h2>
                <span className={`transform transition-transform ${openSection === index ? 'rotate-180' : 'rotate-0'}`}>
                  ▼
                </span>
              </div>
              {openSection === index && (
                <p className="text-md text-gray-700 mt-2">
                  {service.description}
                </p>
              )}
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-center">
          <button
            onClick={handleClick}
            className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-blue-800 hover:text-white transition duration-300"
          >
            Explore Our Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default Solutions;

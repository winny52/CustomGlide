// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Solutions = () => {
//   const navigate = useNavigate();
//   const handleClick = () => {
//     navigate('/services/services');
//   };

//   return (
//     <div className=" font-sans container mx-auto py-12 px-4 md:px-8">
//       <h1 text-center text-xl font-semibold text-blue-700 > Comprehensive Digital Solutions to Elevate Your Business </h1>
//       <p className="text-2xl  mb-8 text-center">At HopeTech, we offer a comprehensive suite of services to propel your business forward:</p>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mt-8">
//         {/* Services Sections */}
//         <div className="bg-gray-200 p-4 md:p-6 rounded-xl border-b-2 border-r-2 border-blue-500 flex flex-col justify-between">
//           <div>
//             <h2 className="text-2xl font-semibold text-blue-800">Website Design & Development</h2>
//             <p className="text-lg text-gray-700 mt-2">
//               Craft visually stunning and highly functional websites tailored to your brand and objectives, utilizing the latest technologies for responsiveness, speed, and security.
//             </p>
//           </div>
//         </div>
//         <div className="bg-gray-200 p-4 md:p-6 rounded-xl border-b-2 border-r-2 border-blue-500 flex flex-col justify-between">
//           <div>
//             <h2 className="text-2xl font-semibold text-blue-800">Responsive Design</h2>
//             <p className="text-lg text-gray-700 mt-2">
//               Ensure your website delivers an optimal user experience across all devices, enhancing engagement and retention.
//             </p>
//           </div>
//         </div>
//         <div className="bg-gray-200 p-4 md:p-6 rounded-xl border-b-2 border-r-2 border-blue-500 flex flex-col justify-between">
//           <div>
//             <h2 className="text-2xl font-semibold text-blue-800">E-commerce Solutions</h2>
//             <p className="text-lg text-gray-700 mt-2">
//               Drive sales and growth with custom-built online stores that are secure, scalable, and easy to manage.
//             </p>
//           </div>
//         </div>
//         <div className="bg-gray-200 p-4 md:p-6 rounded-xl border-b-2 border-r-2 border-blue-500 flex flex-col justify-between">
//           <div>
//             <h2 className="text-2xl font-semibold text-blue-800">Custom Web Applications</h2>
//             <p className="text-lg text-gray-700 mt-2">
//               Tailor-made solutions to meet your unique requirements, from business applications to content management systems.
//             </p>
//           </div>
//         </div>
//         <div className="bg-gray-200 p-4 md:p-6 rounded-xl border-b-2 border-r-2 border-blue-500 flex flex-col justify-between">
//           <div>
//             <h2 className="text-2xl font-semibold text-blue-800">UI/UX Design</h2>
//             <p className="text-lg text-gray-700 mt-2">
//               Delight users and boost engagement with intuitive and captivating interfaces designed through user-centric methodologies.
//             </p>
//           </div>
//         </div>
//         <div className="bg-gray-200 p-4 md:p-6 rounded-xl border-b-2 border-r-2 border-blue-500 flex flex-col justify-between">
//           <div>
//             <h2 className="text-2xl font-semibold text-blue-800">Website Maintenance</h2>
//             <p className="text-lg text-gray-700 mt-2">
//               Keep your site updated, secure, and performing at its best with our flexible maintenance plans.
//             </p>
//           </div>
//         </div>
//         <div className="bg-gray-200 p-4 md:p-6 rounded-xl border-b-2 border-r-2 border-blue-500 flex flex-col justify-between">
//           <div>
//             <h2 className="text-2xl font-semibold text-blue-800">SEO Services</h2>
//             <p className="text-lg text-gray-700 mt-2">
//               Improve your online visibility and attract more leads with comprehensive SEO strategies, including keyword research and on-page optimization.
//             </p>
//           </div>
//         </div>
//         <div className="bg-gray-200 p-4 md:p-6 rounded-xl border-b-2 border-r-2 border-blue-500 flex flex-col justify-between">
//           <div>
//             <h2 className="text-2xl font-semibold text-blue-800">Content Creation</h2>
//             <p className="text-lg text-gray-700 mt-2">
//               Elevate your brand with high-quality, engaging content across various channels, from website copy to social media.
//             </p>
//           </div>
//         </div>
//         <div className="bg-gray-200 p-4 md:p-6 rounded-xl border-b-2 border-r-2 border-blue-500 flex flex-col justify-between">
//           <div>
//             <h2 className="text-2xl font-semibold text-blue-800">PPC Advertising</h2>
//             <p className="text-lg text-gray-700 mt-2">
//               Drive targeted traffic and maximize ROI with expertly managed pay-per-click campaigns.
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="mt-8 flex justify-center">
//         <button onClick={handleClick} className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-blue-800 hover:text-white transition duration-300">
//           Explore Our Services
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Solutions;
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
    <div className="font-sans container mx-auto py-8 px-4 md:px-8 mb-4">
      <h1 className="text-center text-4xl font-semibold text-blue-700 mb-4">
        Comprehensive Digital Solutions to Elevate Your Business
      </h1>
      <p className="text-xl mb-4 text-center">
        At CustomGlide, we offer a comprehensive suite of services to propel your business forward:
      </p>
      <div className="flex flex-col md:flex-row justify-between items-start">
        <div className="flex flex-col gap-2 md:w-1/2">
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
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img src={ServicesImage} alt="Services" className="rounded-xl shadow-lg w-full h-auto md:w-3/4" />
        </div>
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
  );
};

export default Solutions;

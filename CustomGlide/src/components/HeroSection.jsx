// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router';
// import WelcomeSection from './WelcomeSection';
// import WhyChooseUs from './WhyChooseUs';
// import AboutSection from './AboutSection';
// import Solutions from './Solutions';
// import ProcessPage from './OurProcess';
// import MiniFAQ from './FAQHERO';
// import Test from './Test';
// import ECommerceImage from '../assets/ecommerce solutions.jpg';
// import Badges from './awards';

// const HeroSection = () => {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate('/services/services');
//   };

//   const handleClickSecond = () => {
//     navigate('/contact');
//   };

//   const images = [
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzlCOVXdzk1grY1xCdnXRXkBbLqHZxHSpAWQ&s",
//     "https://p7.hiclipart.com/preview/994/313/176/web-development-responsive-web-design-professional-web-design-web-design.jpg",
//     "https://media.licdn.com/dms/image/D5612AQEF706vzumkXA/article-cover_image-shrink_600_2000/0/1705969422703?e=2147483647&v=beta&t=F9PxVHvOdZfyoUyw0oqcPmMtM8DFMF75HcnUm8G0A3k",
//     ECommerceImage
//   ];

//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const updateImageIndex = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   useEffect(() => {
//     const intervalId = setInterval(updateImageIndex, 5000);
//     return () => clearInterval(intervalId);
//   }, []);

//   const divStyle = {
//     backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('${images[currentImageIndex]}')`,
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     minHeight: "135vh",
//   };

//   return (
//     <div className="  font-sans w-full">
//       <div className="flex items-center justify-center md:min-w-screen" style={divStyle}>
//         <div className="container w-full flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 py-24">
//           <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
//             Transform Your Digital Presence with HopeTech
//           </h1>
//           <h2 className="mt-6 text-lg leading-8 text-white font-semibold">
//             Cutting-Edge Web Design & Development Solutions Tailored to Your Needs
//           </h2>
//           <div className="mt-10 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
//             <button onClick={handleClickSecond} className="cta-button bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-blue-800 hover:text-white ">
//               Get a Free Quote
//             </button>
//             <button onClick={handleClick} className="cta-button bg-orange-600 hover:text-white hover:bg-blue-800 text-white py-2 px-4 rounded-md hover:bg-blue-800  ">
//               Explore Our Services
//             </button>
//           </div>
//         </div>
//       </div>
//       <WelcomeSection />
//       <AboutSection/>
//       <Solutions/>
//       <WhyChooseUs />
//       <ProcessPage/>
//       <MiniFAQ/>
//       <Test/>
//       <Badges/>

//     </div>
//   );
// };

// export default HeroSection;
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import WelcomeSection from './WelcomeSection';
import WhyChooseUs from './WhyChooseUs';
import AboutSection from './AboutSection';
import Solutions from './Solutions';
import ProcessPage from './OurProcess';
import MiniFAQ from './FAQHERO';
import Test from './Test';
import ECommerceImage from '../assets/ecommerce solutions.jpg';
import Badges from './awards';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/services/services');
  };

  const handleClickSecond = () => {
    navigate('/contact');
  };

  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzlCOVXdzk1grY1xCdnXRXkBbLqHZxHSpAWQ&s",
    "https://p7.hiclipart.com/preview/994/313/176/web-development-responsive-web-design-professional-web-design-web-design.jpg",
    "https://media.licdn.com/dms/image/D5612AQEF706vzumkXA/article-cover_image-shrink_600_2000/0/1705969422703?e=2147483647&v=beta&t=F9PxVHvOdZfyoUyw0oqcPmMtM8DFMF75HcnUm8G0A3k",
    ECommerceImage
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const updateImageIndex = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(updateImageIndex, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="font-sans w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 h-screen bg-gray-800 ">
        <div className="container w-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Transform Your Digital Presence with CustomGlide
          </h1>
          <h2 className="mt-6 text-lg leading-8 text-white font-semibold">
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
            <div className="relative w-72 h-72 transform rotate-45">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Service ${index + 1}`}
                  className={`absolute w-full h-full object-cover transition-opacity duration-1000 transform rounded-3xl ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ transform: 'rotate(-90deg)' }}
                />
              ))}
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

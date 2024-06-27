import React, { useState } from 'react';
import emilyParker from '../assets/emilyparker.jpeg';
import jacobThompson from '../assets/jacobthompson.jpeg';
import oliviaGreen from '../assets/oliviagreen.jpeg';
import liamDavis from '../assets/liamdavis.jpeg';
import isabellaRoberts from '../assets/isabellaroberts.jpeg';
import { useNavigate } from 'react-router-dom';

// Update the testimonials array to include imported images
const testimonials = [
  {
    clientName: "Emily Parker",
    company: "The Forage",
    testimonial: "CustomGlide transformed our outdated website into a modern, user-friendly platform. Their team was professional, responsive, and dedicated to our success. We have seen a significant increase in traffic and conversions since the redesign.",
    imageUrl: emilyParker,
  },
  {
    clientName: "Jacob Thompson",
    company: "Picmonic Picture Mmemonics",
    testimonial: "We partnered with CustomGlide to develop a custom web application for our business. The process was seamless, and the end result exceeded our expectations. Their expertise and attention to detail were evident throughout the project.",
    imageUrl: jacobThompson,
  },
  {
    clientName: "Olivia Green",
    company: "FatJoe",
    testimonial: "CustomGlide's SEO services have been a game-changer for our business. We have seen a dramatic improvement in our search engine rankings and an increase in organic traffic. Their team is knowledgeable, professional, and easy to work with.",
    imageUrl: oliviaGreen,
  },
  {
    clientName: "Liam Davis",
    company: "Word Agents",
    testimonial: "Working with CustomGlide was a fantastic experience. Their team was knowledgeable, responsive, and dedicated to our success. They took the time to understand our needs and delivered a solution that exceeded our expectations.",
    imageUrl: liamDavis,
  },
  {
    clientName: "Isabella Roberts",
    company: "Marcella New York",
    testimonial: "We have been working with CustomGlide for several years, and they continue to impress us with their quality of work and level of service. They are always available to answer questions and provide support, and their expertise has been invaluable to our business.",
    imageUrl: isabellaRoberts,
  },
];

const Test = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleClick = () => {
    navigate('/contact');
  };

  const { clientName, company, testimonial, imageUrl } = testimonials[currentIndex];

  return (
    <div className="text-blue-900 font-sans py-4 pt-20 rounded-2xl">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">What Our Clients Say</h2>
        <p className="text-center mb-12 text-xl">
          Our clients are our biggest advocates, and their success is our greatest reward. We are proud to share some of the feedback we’ve received from our clients. These testimonials highlight our commitment to quality, customer satisfaction, and delivering results.
        </p>
        <div className="flex justify-center items-center">
          <button onClick={handlePrevious} className="px-4 py-2 bg-gray-300 text-blue-900 rounded hover:bg-gray-400">
            &lt;
          </button>
          <div className="p-6 bg-gray-200 rounded-xl border-b-2 border-r-2 border-blue-500 transition duration-300 shadow-2xl m-6 flex flex-col items-center w-80">
            <img src={imageUrl} alt={clientName} className="w-24 h-24 rounded-full mb-4" />
            <p className="italic mb-4">"{testimonial}"</p>
            <p className="font-bold">{clientName}</p>
            <p className="text-sm">{company}</p>
          </div>
          <button onClick={handleNext} className="px-4 py-2 bg-gray-300 text-blue-900 rounded hover:bg-gray-400">
            &gt;
          </button>
        </div>
        <div className="flex justify-center mt-8">
          <button onClick={handleClick} className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-blue-800">
            Unlock Your Success Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default Test;

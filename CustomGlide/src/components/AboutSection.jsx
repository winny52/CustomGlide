import React from "react";
import { useNavigate } from "react-router-dom";


const AboutSection =() => {
 const navigate=useNavigate();
 const handleClick = () => {
    navigate('/about');
  };
  


    return (
      <div className=" font-sans about-page pt-20 text-gray-900 p-6 flex justify-center items-center">
        <div className="container m-4">
          <h2 className="text-4xl text-center text-blue-700 font-semibold mb-8">About CustomGlide</h2>
          <p className="w-full text-center text-xl">
            CustomGlide is a leading web design and development agency committed to bringing your digital vision to life. With 10+ years of experience, our team of experts specializes in creating responsive, user-friendly, and visually captivating websites that drive results.
          </p>
          
          <div className="story-section text-center m-8">
            <button onClick={handleClick} className="px-4 py-2 bg-orange-600 text-white rounded  hover:text-white hover:bg-blue-800">Discover our story</button>
          </div>
        </div>
      </div>
    );
  }
  
  export default AboutSection;
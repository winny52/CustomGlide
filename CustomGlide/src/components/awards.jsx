import React from "react";
import badge1 from '../assets/Forbesbadge.jpeg';
import badge3 from '../assets/silversteve2020.jpg';
import badge4 from '../assets/silversteve23.jpg';

const Badges = () => {
  return (
    <div className="flex justify-center items-center mt-8 mb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        <div className="flex justify-center items-center p-4">
          <img src={badge1} className="h-32 w-32 object-cover" alt="Badge 1" />
        </div>
        <div className="flex justify-center items-center p-4">
          <img src={badge3} className="h-32 w-32 object-cover" alt="Badge 3" />
        </div>
        <div className="flex justify-center items-center p-4">
          <img src={badge4} className="h-32 w-32 object-cover" alt="Badge 4" />
        </div>
      </div>
    </div>
  );
};

export default Badges;

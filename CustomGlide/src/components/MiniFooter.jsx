import React from 'react';
import { Link } from 'react-router-dom';

const miniFooter = () => {
  return (
    <div className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <Link to="/legal-policy" className="text-white hover:underline mx-2">
            Legal Policy
          </Link>
          <Link to="/privacy-policy" className="text-white hover:underline mx-2">
            Privacy Policy
          </Link>
        </div>
        <div className="text-center">
          &copy; {new Date().getFullYear()} CustomGlide. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default miniFooter;

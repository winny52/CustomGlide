import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-2 px-4">
      <div className="container font-sans mx-auto flex justify-end items-right">
       
        <div className="flex space-x-4 items-center text-sm">
          <span>Email: suppport@hopetech.com</span>
          <span>Phone: (123) 456-7890</span>
        </div>
      </div>
    </header>
  );
};

export default Header;

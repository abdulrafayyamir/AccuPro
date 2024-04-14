"use client";

import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='mt-10' >
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-gray-800">AccuPro Bookkeeping</a>
        
        
        <button
          className="block lg:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6 fill-current text-gray-800"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4 6h16a1 1 0 110 2H4a1 1 0 110-2zm0 5h16a1 1 0 010 2H4a1 1 0 010-2zm0 5h16a1 1 0 010 2H4a1 1 0 010-2z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        
        <ul className="hidden lg:flex lg:flex-grow lg:justify-center lg:space-x-6">
          <li><a href="/" className="text-gray-600 hover:text-gray-800">Home</a></li>
          <li><a href="/aboutus" className="text-gray-600 hover:text-gray-800">About Us</a></li>
          <li><a href="/servicess" className="text-gray-600 hover:text-gray-800">Services</a></li>
        </ul>
        
        
        <a
          href="#"
          className="bg-[#37B2E5] hover:bg-[#37B2E5] text-white font-bold py-2 px-4 rounded shadow-md hidden lg:block"
        >
          Contact Me
        </a>

        
        {isMenuOpen && (
          <div className="absolute top-16 right-0 bg-white shadow-md rounded py-2 z-10 lg:hidden">
            <ul className="px-4 py-2 text-gray-800">
              <li><a href="/" className="block px-4 py-2 hover:bg-gray-200">Home</a></li>
              <li><a href="/aboutus" className="block px-4 py-2 hover:bg-gray-200">About</a></li>
              <li><a href="/servicess" className="block px-4 py-2 hover:bg-gray-200">Services</a></li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-[#37B2E5] bg-[#37B2E5] text-white font-bold py-2 px-4 rounded shadow-md"
                  onClick={toggleMenu}
                >
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

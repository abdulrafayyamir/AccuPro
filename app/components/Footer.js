import React from 'react';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import KeepInTouchSection from './Keepintouch'; // Import the KeepInTouchSection component

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6">

      <KeepInTouchSection />

      <hr className="border-gray-300 my-6 mx-auto w-2/3 md:w-1/3" />

      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center md:justify-between">
        
        <div className="flex items-center space-x-4 mb-4 md:mb-0">
          <a href="https://www.instagram.com/accupro_bookkeeping_llc?igsh=Y3V0YmhyNTJqbmEy" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
            <FaFacebookF size={24} />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
            <FaLinkedinIn size={24} />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
            <FaXTwitter size={24} />
          </a>

        </div>

        <p className="text-center text-gray-800 text-xl font-bold mb-4 md:mb-0 md:pl-12 lg:pl-24 xl:pl-[40px]">AccuPro Bookkeeping LLC</p>
        
        <div className="flex items-center space-x-4">
          <img src="/images/quickbooks.png" alt="QuickBooks Certified ProAdvisor" className="w-16 md:w-20" />
          <img src="/images/qbonline.png" alt="QuickBooks Certified ProAdvisor" className="w-16 md:w-20" />
        </div>
      </div>

      <div className="text-center text-gray-600 mt-4">
        <p>&copy; 2024 AccuPro Bookkeeping LLC. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

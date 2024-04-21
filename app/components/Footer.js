import React from 'react';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import KeepInTouchSection from './Keepintouch'; // Import the KeepInTouchSection component

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6">
      <KeepInTouchSection />
      <hr className="border-gray-300 my-6 mx-auto w-2/3 md:w-1/3" />

      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">

        {/* Contact Us Section */}
        <div className="text-center text-gray-600 md:text-left">
          <h2 className="text-lg text-center font-bold mb-5 ">Contact Us</h2>
          <p className="text-center font-bold">Email: hello@accuprobookkeepingllc.com</p>
          <p className='text-center font-bold'>Phone: (716)-3010248</p>
          <div className="flex justify-center md:justify-center mt-6 gap-3"> {/* Updated justify-center */}
            <a href="https://www.instagram.com/accupro_bookkeeping_llc?igsh=Y3V0YmhyNTJqbmEy" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100093142393864&mibextid=LQQJ4d" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
              <FaFacebookF size={24} />
            </a>
            <a href="https://www.linkedin.com/company/accupro-financial-services/" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
              <FaLinkedinIn size={24} />
            </a>
            <a href="https://x.com/accuprollc?s=11" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
              <FaXTwitter size={24} />
            </a>
          </div>
        </div>

        {/* Branding Section */}
        <div className="text-center text-gray-800 text-xl font-bold mb-4 md:mb-0">
          AccuPro Bookkeeping LLC
        </div>

        {/* Logos Section */}
        <div className="flex justify-center md:justify-end items-center mt-4 md:mt-0">
          <img src="/images/quickbooks.png" alt="QuickBooks Certified ProAdvisor" className="w-16 md:w-20 mr-2 md:mr-4" />
          <img src="/images/qbonline.png" alt="QuickBooks Certified ProAdvisor" className="w-16 md:w-20" />
        </div>

        {/* Copyright Section */}
        <div className="text-center text-gray-600 mt-4 md:col-span-3">
          <p>&copy; 2024 AccuPro Bookkeeping LLC. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

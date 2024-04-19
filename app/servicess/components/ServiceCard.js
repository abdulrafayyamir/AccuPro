import React from 'react';
import Link from 'next/link'

const ServiceCard = ({ title, description, price, features }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-6 md:p-8 flex flex-col items-center justify-between shadow-lg">
      <div className="flex flex-col items-center">
        {/* Title */}
        <h4 className="text-1xl md:text-1xl font-bold text-gray-800 mb-4 text-center uppercase"style={{ lineHeight: '1' }}>{title}</h4>
        
        {/* Description */}
        <div className="flex-grow flex items-center mb-6">
          <p className="text-gray-600 text-center text-sm md:text-base">
            {description}
          </p>
        </div>
        
        {/* Features List */}
        <ul className="text-gray-700 text-left w-full mb-6 space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm md:text-base">
              <svg className="w-4 h-4 md:w-5 md:h-5 mr-2 text-[#37B2E5]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Price and Button Section */}
      <div className="flex flex-col items-center mt-auto"> 
        {/* Price */}
        <span className="text-lg md:text-xl font-bold text-[#37B2E5] mb-4">
          {price}
        </span>

        {/* Button */}
        <Link
          href={"/calendly"}
          className="bg-[#37B2E5] hover:bg-[#37B2E5] text-white font-bold py-3 px-6 rounded shadow-md transition duration-300 ease-in-out transform hover:scale-105 text-sm md:text-base"
        >
          Let&apos;s Get Started!
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;

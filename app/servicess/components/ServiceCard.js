import React from 'react';

const ServiceCard = ({ title, description, price, features }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-6 md:p-8 flex flex-col items-center justify-between shadow-lg">
      <div className="flex flex-col items-center">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center uppercase">{title}</h3>
        
        <div className="flex-grow flex items-center mb-6">
          <p className="text-gray-600 text-center text-sm md:text-base">{description}</p>
        </div>
        
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

      <div className="flex flex-col items-center mt-auto"> 
        <span className="text-lg md:text-xl font-bold text-[#37B2E5] mb-4">{price}</span>

        <button
          className="bg-[#37B2E5] hover:bg-[#37B2E5] text-white font-bold py-3 px-6 rounded shadow-md transition duration-300 ease-in-out transform hover:scale-105 text-sm md:text-base"
        >
          Let's Get Started!
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;

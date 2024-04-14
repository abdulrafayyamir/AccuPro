import React from 'react';

const BookDiscovery = ({ onButtonClick }) => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-col-reverse lg:flex-row lg:items-center">
          {/* Image column */}
          <div className="lg:w-1/2 lg:pr-8 order-2 lg:order-1 mb-6 lg:mb-0">
            <img
              src="/images/money.jpg"
              alt="Section 6 Image"
              className="rounded-lg w-full lg:h-auto"
            />
          </div>
          
          {/* Content column */}
          <div className="lg:w-1/2 lg:pl-8 order-1 lg:order-2">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 uppercase">
                Ready to make money moves?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Take the first step by booking a discovery call with us today.
              </p>
              <div className="text-center lg:text-left">
                <button
                  className="bg-[#37B2E5] text-white font-bold py-3 px-6 rounded-md shadow-md  transition duration-300 ease-in-out inline-block"
                  onClick={onButtonClick}
                >
                  Book a Discovery Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDiscovery;

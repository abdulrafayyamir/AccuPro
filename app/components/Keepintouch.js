import React from 'react';

const KeepInTouchSection = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-col-reverse lg:flex-row lg:items-center">
         
          <div className="lg:w-1/2 lg:pr-8 order-2 lg:order-1">
            <img
              src="/images/social.jpg"
              alt="Newsletter"
              className="rounded-lg mb-4 lg:mb-0 w-full shadow-md" 
            />
          </div>
          
          <div className="lg:w-1/2 lg:pl-8 order-1 lg:order-2">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 uppercase">Keep In Touch</h2>
              <p className="text-lg text-gray-600 mb-6">
                Subscribe to our newsletter to stay updated with the latest news and offers.
              </p>
              <form className="flex flex-col lg:flex-row lg:items-center">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-white w-full lg:w-auto py-3 px-4 text-gray-800 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-[#37B2E5] mb-4 lg:mb-0 mr-0 lg:mr-4"
                />
                <button
                  type="submit"
                  className="bg-[#37B2E5] hover:bg-[#37B2E5] text-white font-bold py-3 px-6 rounded-md shadow-md w-full lg:w-auto"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeepInTouchSection;

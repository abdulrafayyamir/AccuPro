import React from 'react';

const KeepInTouchSection = () => {
  return (
    <section className="py-6 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 uppercase">Keep In Touch</h2>
          <p className="text-sm text-gray-600 mb-4 text-center">
            Subscribe to our newsletter to stay updated with the latest news and offers.
          </p>
          <form className="flex items-center">
            <input
              type="email"
              placeholder="Your email address"
              className="bg-white py-2 px-3 text-sm text-gray-800 rounded-l-md shadow-md focus:outline-none focus:ring-2 focus:ring-[#37B2E5] flex-1"
            />
            <button
              type="submit"
              className="bg-[#37B2E5] hover:bg-[#37B2E5] text-white font-bold py-2 px-4 rounded-r-md shadow-md"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default KeepInTouchSection;

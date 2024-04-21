import React from 'react';

const KeepInTouchSection = () => {
  return (
    <section className="py-6 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 uppercase">Keep In Touch</h2>
          <p className="text-sm text-gray-600 mb-4 text-center">
            Join us in accountant's corner to get tips + tricks, freebies & special offers delivered to your inbox each week!
          </p>
          <form class="flex flex-col justify-center items-center border rounded-lg overflow-hidden  pl-[13%] pr-[13%] pt-10 pb-10 h-full">
              <input
                  type="text"
                  placeholder="Your name"
                  class="bg-white py-2 px-3 text-sm text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-[#37B2E5] w-full mb-4"
              />
              <input
                  type="email"
                  placeholder="Your email address"
                  class="bg-white py-2 px-3 text-sm text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-[#37B2E5] w-full mb-4"
              />
              <div class="flex-grow">
              <button
                  type="submit"
                  class="bg-[#37B2E5] hover:bg-[#1E70B3] text-white font-bold py-2 px-4 rounded-md"
              >
                  Subscribe
              </button>
              </div> 

          </form>


        </div>
      </div>
    </section>
  );
};

export default KeepInTouchSection;

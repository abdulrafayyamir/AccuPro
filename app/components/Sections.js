import React from 'react';

const SectionsComponent = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
      
        <div className="mb-12 md:flex md:items-center">
          <div className="md:w-1/2 md:pr-8 md:text-right mb-6">
            <img src='/images/tired.jpg' alt="Section 1 Image" className="rounded-lg mb-4 md:mb-0 md:rounded-none md:w-full shadow-lg" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 uppercase">Helping you manage your business finances</h2>
            <p className="text-lg text-gray-600 mb-6">
              Hands up if you’ve got a totally packed business to-do list… and bookkeeping keeps getting bumped to the bottom. (We’ve all been there, no judgment!)<br/><br/>
              When you’re hustling hard for your dream, it’s no surprise that the nitty-gritty of daily admin doesn’t exactly spark joy. Especially when it feels like you’re back in high school math class.<br/><br/>
              But here’s the thing: you deserve a business that truly supports you, and there’s a whole lot of power (and peace of mind!) in understanding your financials.<br/><br/>
              By getting your books in order (and keeping them that way!), you can stop stressing about what you don’t know and start making confident money moves instead.
            </p>
          </div>
        </div>

      
        <div className="mb-12 md:flex md:flex-row-reverse md:items-center">
          <div className="md:w-1/2 md:pl-8 mb-6">
            <img src='/images/accounting.jpg' alt="Section 2 Image" className="rounded-lg mb-4 md:mb-0 md:rounded-none md:w-full shadow-lg" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 uppercase">Picture This</h2>
            <p className="text-lg text-gray-600 mb-6">
              You receive Monthly financial reports in your inbox on the 10th of every month.<br/><br/>
              You have an accountant in your back pocket for all the money questions you used to Google.<br/><br/>
              You start paying yourself more after gaining financial confidence & tax season feels like a breeze.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionsComponent;

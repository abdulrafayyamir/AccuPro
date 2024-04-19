import React from 'react';

const SectionsComponent = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
      
        <div className="mb-12 md:flex md:items-center">
          <div className="md:w-1/2 md:pr-8 md:text-right mb-6">
            <img src='/images/helpin.jpg' alt="Section 1 Image" className="rounded-lg mb-4 md:mb-0 md:rounded-none md:w-full shadow-lg" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 uppercase">Helping you manage your business finances</h2>
            <p className="text-lg text-gray-600 mb-6">
              <em><strong>Hands up if you&apos;ve got a totally packed business to-do list… and bookkeeping keeps getting bumped to the bottom. (We&apos;ve all been there, no judgment!)</strong></em><br/><br/>
              When you&apos;re hustling hard for your dream, it&apos;s no surprise that the nitty-gritty of daily admin doesn&apos;t exactly spark joy. Especially when it feels like you&apos;re back in high school math class.<br/><br/>
              But here&apos;s the thing: you deserve a business that truly supports you, and there&apos;s a whole lot of power (and peace of mind!) in understanding your financials.<br/><br/>
              By getting your books in order (and keeping them that way!), you can stop stressing about what you don&apos;t know and start making confident money moves instead.
            </p>
          </div>
        </div>

        {/* Updated content block */}
        <div className="mb-12 md:flex md:flex-row-reverse md:items-start"> {/* Use 'items-start' to align items at the start */}
          <div className="md:w-1/2 md:pl-8 mb-6">
            {/* Update the image source */}
            <img src='/images/picture.jpg' alt="Section 2 Image" className="rounded-lg mb-4 md:mb-0 md:rounded-none md:w-full shadow-lg" />
          </div>
          <div className="md:w-1/2 flex flex-col justify-center "> {/* Use 'flex-col' to arrange items in a column */}
            {/* Move the heading here with specific styling for flexbox */}
            <div className="mb-4"> 
              <h2 className="text-3xl font-bold text-center text-gray-800 uppercase mt-[5%]">Picture This</h2>
            </div>
            {/* Center the paragraphs vertically */}
            <div className="flex flex-col  h-full mt-[9%]"> {/* Use 'h-full' to make the container full height */}
              <p className="text-lg text-gray-600 text-center md:text-center"> {/* Center paragraphs on small screens, left-align on medium screens and larger */}
                You receive Monthly financial reports in your inbox on the 10th of every month.<br/><br/>
                You have an accountant in your back pocket for all the money questions you used to Google.<br/><br/>
                You start paying yourself more after gaining financial confidence & tax season feels like a breeze.
              </p>
            </div>
          </div>
        </div>
      
      </div>
    </section>
  );
};

export default SectionsComponent;

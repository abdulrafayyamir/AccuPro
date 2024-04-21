import React from 'react';
import Link from 'next/link';

const Hero = () => {
  const sectionStyle = {
    backgroundImage: "url('/images/herobg.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '80vh', // Adjust the minimum height of the section
    display: 'flex',
    alignItems: 'center',
    padding: '4rem 2rem', // Adjust the padding for content within the section
    position: 'relative', // Add relative positioning for overlay
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Light whitish background with opacity
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
    
    borderRadius: '8px', // Rounded corners
  };

  return (
    <section className="hero mt-5" style={sectionStyle}>
      {/* Overlay with text and button */}
      <div style={overlayStyle}>
        <div className="container mx-auto text-center lg:text-left">
          <h1 className="text-2xl lg:text-3xl font-bold text-black mb-4 capitalize text-center">
            We simplify numbers, fuel your passion, and boost your profits so that you can run your business with confidence.
          </h1>
          {/* Optional text content with light gray color */}

          <div className="flex justify-center">
            <Link href="/servicess" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded shadow-md inline-block mt-4">
              
                Explore 1:1 Bookkeeping Services
              
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

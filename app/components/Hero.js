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
  };

  return (
    <section className="hero mt-5" style={sectionStyle}>
      <div className="container mx-auto text-center lg:text-left">
        <h1 className="text-2xl lg:text-2xl font-bold  mb-4 capitalize">
          We simplify numbers, fuel your passion, and boost your profits so that you can run your business with confidence.
        </h1>
        <p className="text-lg text-gray-300 mb-8"></p>
        <div className="flex justify-center">
          <Link href="/servicess" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded shadow-md inline-block mt-10">
            Explore 1:1 Bookkeeping Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';
import Link from 'next/link'
const Hero = () => {
  return (
    <section className="hero mt-5  py-20 lg:py-24 flex flex-col-reverse lg:flex-row items-center">
      <div className="container mx-auto px-4 lg:w-1/2 text-center lg:text-left">
        <h1 className="text-4xl lg:text-3xl font-bold text-[#] mb-4 capitalize">We simplify numbers, fuel your passion, and boost your profits so that you can run your business with confidence. </h1>
        <p className="text-lg text-gray-600 mb-8"></p>
        <div className="flex justify-center">
           <Link href="/servicess" className="bg-[#07ACEC] hover:bg-[#37B2E5] text-white font-bold py-3 px-6 rounded shadow-md inline-block mt-10">
              Explore 1:1 Bookkeeping Services
            </Link>
        </div>

      </div>
      <div className="container mx-auto px-4 lg:w-1/2 flex justify-center mb-10">
        <img src='/images/money.jpg' alt="money" className="rounded-lg lg:max-w-full h-100 w-full object-cover" />
      </div>
    </section>
  );
};

export default Hero;

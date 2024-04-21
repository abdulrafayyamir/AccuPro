'use client';

import React from 'react';
import { InlineWidget } from 'react-calendly';

const CalendlyComponent = ({ url }) => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Text and button section with flexbox for centering */}
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <div className="lg:w-1/2 text-center">
            <h2 className="text-3xl text-center font-bold text-gray-800 mb-6 uppercase">
              Schedule a Consultation
            </h2>
            <p className="text-lg text-center text-gray-600 mb-6">
              Let&apos;s chat about your business finances and see how we can help!
            </p>
          </div>
        </div>

        {/* Calendly widget section with full width for larger screens */}
        <div className="mt-12 lg:mt-0 lg:w-full flex justify-center">
          <InlineWidget
            url={url}
            className="calendly-inline-widget"
            styles={{
              width: '100%',
              maxWidth: '500px',
              height: '600px',
              border: 'none',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default CalendlyComponent;



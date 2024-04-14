'use client';
import React from 'react';
import { InlineWidget } from 'react-calendly';

import React from 'react';
import { InlineWidget } from 'react-calendly';

const CalendlyComponent = ({ url }) => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-col lg:flex-row lg:items-center">
          <div className="lg:w-1/2 lg:pr-8">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 uppercase">
                Schedule a Consultation
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Let&apos;s chat about your business finances and see how we can help!
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 lg:pl-8 flex justify-center lg:justify-start">
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
      </div>
    </section>
  );
};

export default CalendlyComponent;


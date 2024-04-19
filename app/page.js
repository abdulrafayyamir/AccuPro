import React from 'react';
import Hero from './components/Hero';

import Section from './components/Sections';
import Calendly from './components/Calendly';
import Testimonials from './components/Testimonials';
const HomePage = () => {
  const calendlyUrl = "https://calendly.com/accuprobookkeepingllc/30min?month=2024-04"; 

  return (
    <div>
      <Hero />
      <Section />
      <Testimonials />
      <Calendly url={calendlyUrl} /> 
    </div>
  );
};

export default HomePage;

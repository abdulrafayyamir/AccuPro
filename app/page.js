import React from 'react';
import Hero from './components/Hero';
import KeepInTouchSection from './components/Keepintouch';
import Section from './components/Sections';
import Calendly from './components/Calendly';

const HomePage = () => {
  const calendlyUrl = "https://calendly.com/accuprobookkeepingllc/30min?month=2024-04"; 

  return (
    <div>
      <Hero />
      <Section />
      <KeepInTouchSection />
      <Calendly url={calendlyUrl} /> 
    </div>
  );
};

export default HomePage;

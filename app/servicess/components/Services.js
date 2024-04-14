import React from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
  const serviceData = [
    {
      title: 'Monthly Micro Book keeping: ',
      description: `For new & small businesses who need 
      simplified bookkeeping at a budget-friendly rate. `,
      price: 'Starting at $250/month',
      features: [
        'Monthly Income & Expense Categorization',
        'Monthly Bank Reconciliations ',
        'Monthly financial reports & recap (delivered by the 10th of every month) ',
        '1:1 Unlimited Support via email ',
        '1:1 Financial Review Quarterly',
        'Collaborative coordination with your CPA ',
        'One 30-minute strategy call per year'
      ], 
    },
    {
      title: 'Monthly Standard Book keeping:',
      description: `For Growing & established businesses 
      who are seeking clarity & confidence around their numbers to strategically scale their business 
      `,
      price: 'Starting at $430/month',
      features: [
        'Monthly Income & Expense Categorization ',
        'Monthly Bank reconciliation',
        'Monthly financial reports & recap (delivered by the 10th of every month) ',
        'Google Data Studio Visual Dashboard ',
        'Annual 1099 Prep ',
        'Collaborative coordination with your CPA',
        '1:1 Financial Review Monthly ',
        'Two 30-minute strategy calls per year' 

      ],
    },
    {
      title: 'Monthly Advanced Book Keeping',
      description: 'For business owners who are ready to own their role as CFO of their biz.',
      price: 'Starting at $750/month',
      features: [
        'Everything in Monthly Standard Book keeping ',
        'Categorizing transactions',
        'Monthly 1:1 Intensive calls where we dive into deeper support for topics like budgeting, forecasting, growing your team, etc.',
        'Monthly Cash Flow Forecasting ',
      ],
    },
  ];

  return (
    <section className="services bg-white py-16">
      <div className="container mx-auto px-4 lg:w-3/4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center uppercase">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceData.map((service) => (
            <ServiceCard
              key={service.title} 
              title={service.title}
              description={service.description}
              price={service.price}
              features={service.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

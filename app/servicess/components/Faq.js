'use client';

import React, { useState } from 'react';

const FAQ = () => {
  const faqData = [
    {
      question: 'Why should I hire a financial advisor?',
      answer: `Many companies prioritize outsourcing tasks that can increase their income. However, this might not always be the best strategy for getting assistance.<br><br>
      Consider hiring help if you identify with any of the following situations:<br>
      - Your financial records are always outdated<br>
      - Your accountant handles your bookkeeping and charges a hefty fee<br>
      - You find the tax season very stressful<br>
      - You often overlook significant tax deductions<br>
      - Your cash flow is inconsistent<br>
      - You’re unsure about the amount to set aside for estimated taxes<br>
      - Your sales are growing, but your profits aren’t<br>
      - You lack a comprehensive understanding of your financial status<br>
      - You’re not compensating yourself<br>`,
    },
    {
      question: `What Info do I have to share with you so that you can do my bookkeeping?`,
      answer: `After onboarding, you’ll receive a monthly email reminder to upload your bank statements.`,
    },
    {
      question: 'What if my books are a mess (or non-existent)?',
      answer: `I love messy books! Deep diving into messy books is why I do my job. I know that messy books feel overwhelming and make you anxious! When I see unorganized books, I see a challenge. It's like a puzzle to me, and I want to help you put together the pieces of your business!`,
    },
    {
      question: 'What if I already have a CPA? Do you file taxes?',
      answer: `Consider your bookkeeper and CPA as a dynamic duo, like coffee and morning newspaper. We’re essentially a powerful team. While your CPA is your main point of contact during the busy tax season, I’m here to support you throughout the year. Having clear and up-to-date financial reports not only helps you make wise financial decisions all year round but also enables your CPA to optimize your tax returns.<br>
      I don’t file taxes, but the beautiful year-end package I share with your CPA makes tax filing a breeze. (And if you’re looking for tax prep, I’m happy to refer you to a trusted CPA!)`,
    },
    {
      question: `What accounting software do you use?`,
      answer: `I’m a certified Quickbook ProAdvisor and use Quickbooks for bookkeeping. But I have experience with all accounting software out there.<br>
      Don’t have a Quickbooks account yet? No problem! I’ll work closely with you to get an account up and running, as well as customized to how you like to view your data.`,
    },
    {
      question: `Can you work with clients anywhere?`,
      answer: `If you’re in the USA, you’re in luck – we can team up! As long as you’ve got internet, I can manage your books.`,
    },
    {
      question: `Is there a Time Commitment?`,
      answer: `Absolutely not! The last thing I want is for you to be stuck paying for something you either can’t afford or don’t want.<br>
      That simply would not sit right with me.<br>
      My clients have the option to cancel their monthly bookkeeping at any time.`,
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const handleQuestionClick = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // Collapse if already open
    } else {
      setOpenIndex(index); // Expand if closed
    }
  };

  return (
    <section className="faq  py-12">
      <div className="container mx-auto px-4 lg:w-3/4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center uppercase">Frequently Asked Questions</h2>
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item bg-white rounded-lg shadow-md mb-6">
            <div
              className="flex justify-between items-center cursor-pointer p-6"
              onClick={() => handleQuestionClick(index)}
            >
              <h3 className="text-xl font-bold text-gray-800 uppercase">{faq.question}</h3>
              <span className="text-gray-500">{openIndex === index ? '-' : '+'}</span>
            </div>
            {openIndex === index && (
              <div className="p-6 border-t border-gray-200">
                <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: faq.answer }} />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;

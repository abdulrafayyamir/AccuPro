import React from 'react';
import Link from 'next/link'
const ServicePage = () => {
  const sections = [
    {
      heading: "Let’s transform your books from cluttered to clear, one monthly report at a time.",
      text: "Managing finances doesn't have to be overwhelming. Get clear insights into your business numbers.",
      buttonLabel: "Book an Intro Call",
      imageUrl: "/images/breakfast.jpg",
    },
    {
      heading: "Setting up strong systems sets your business up for success",
      text: (
        <>
          <p className="italic text-center">
            You don’t even have to touch a spreadsheet.
          </p>
          <p className="text-center">
            Here’s to more profit, more passion, and more time spent doing what’s meaningful to you.<br/> You didn’t get into business to spend your whole day on numbers, but I sure did, so let’s team up!
          </p>
        </>
      ),
      imageUrl: "/images/performance.jpg",
    },
    {
      heading: "Accupro helps you with:",
      listItems: [
        "CLEAN, CLEAR BUSINESS BOOKS - Accurate and up-to-date transactions, every single month.",
        "CONSISTENT FINANCIAL INSIGHT - Know where your cash is coming from and where it’s going.",
        "PERSONAL STRATEGY & SUPPORT - Expert guidance to help you make the most of your money.",
      ],
      imageUrl: "/images/sponsor.jpg"
    },
  ];

  const renderTextWithBreaks = (textContent) => {
    if (!textContent) return null;
    
    const paragraphs = textContent.split('<br/>');
    return (
      <div className="text-lg text-gray-600 mb-6">
        {paragraphs.map((paragraph, index) => (
          <React.Fragment key={index}>
            <p>{paragraph}</p>
            {index < paragraphs.length - 1 && <br />}
          </React.Fragment>
        ))}
      </div>
    );
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        {sections.map((section, index) => (
          <div key={index} className={`mb-12 lg:flex ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
            <div className={`lg:w-1/2 lg:pr-8 ${index % 2 === 0 ? '' : 'lg:pl-8'} flex justify-center items-center`}>
              <img src={section.imageUrl} alt={`Section ${index + 1} Image`} className="rounded-lg w-full mb-6 lg:mb-0 lg:rounded-none lg:w-auto shadow-lg" />
            </div>
            <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pl-8' : ''} flex flex-col justify-center items-center`}>
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 uppercase">{section.heading}</h2>
                {typeof section.text === 'string' ? (
                  renderTextWithBreaks(section.text)
                ) : (
                  <div className="text-lg text-gray-600 mb-6">{section.text}</div>
                )}
                {section.listItems && (
                  <div className="text-center mb-6">
                    {section.listItems.map((item, i) => {
                      const [heading, description] = item.split(' - ');
                      return (
                        <div key={i} className="text-left mb-4">
                          <h3 className="font-bold mb-2 text-center">{heading}</h3>
                          <p className="text-center">{description}</p>
                        </div>
                      );
                    })}
                  </div>
                )}
                {section.buttonLabel && (
                  <Link href={"/calendly"} className="bg-[#37B2E5] text-white font-bold py-3 px-6 rounded-md shadow-md hover:bg-blue-600 transition duration-300 ease-in-out uppercase">
                    {section.buttonLabel}
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicePage;

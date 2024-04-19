import React from 'react';
import Link from 'next/link'
const AboutUs = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">

        <div className="mb-12 pb-8 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 md:pr-8">
            <img src='/images/accountingfirm.png' alt="Section 1 Image" className="rounded-lg mb-4 md:mb-0 shadow-lg" />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center md:text-left uppercase">About the Firm</h2>
            <p className="text-lg text-gray-600 mb-6 text-center md:text-left">
              At AccuPro Bookkeeping LLC, we&apos;re all about making your finances simple. Our mission is to help business owners get a clear picture of their finances and use those insights to make smart business moves.
            </p>
            <p className="text-lg text-gray-600 mb-6 text-center md:text-left">
              We know that accounting can seem old-fashioned and intimidating. That&apos;s why we&apos;re committed to bringing you a fresh, friendly bookkeeping experience.
            </p>
          </div>
        </div>

        {/* Section 2: Our Core Values */}
        <div className="mb-12 pb-8 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 md:pr-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center md:text-left uppercase">Our Core Values</h2>
            <ul className="list-disc list-inside text-lg text-gray-600 mb-6 text-center md:text-left">
              <li className="mb-4">
                <strong>EMPOWERMENT:</strong><br />
                Here at AccuPro, we&apos;re big believers in empowerment. We&apos;re all about making financial management a breeze, breaking it down into simple, understandable terms. We want to give business owners the confidence they need to make smart decisions.
              </li>
              <li className="mb-4">
                <strong>INNOVATION:</strong><br />
                We&apos;re always on the lookout for fresh, innovative ways to make bookkeeping simpler. We&apos;re committed to providing a modern, user-friendly bookkeeping experience that&apos;s packed with insights.
              </li>
              <li className="mb-4">
                <strong>INTEGRITY:</strong><br />
                We put integrity front and center in everything we do. We&apos;re committed to being transparent, honest, and ethical in our services. We hold ourselves to the highest standards.
              </li>
              <li className="mb-4">
                <strong>COMMITMENT:</strong><br />
                We&apos;re all in when it comes to our clients. We work hard to meet their needs, always going the extra mile to ensure their success. When our clients succeed, we feel like we&apos;ve succeeded too.
              </li>
              <li className="mb-4">
                <strong>RESPECT:</strong><br />
                We deeply respect our clients and value the trust they place in us. We honor this trust by delivering reliable, top-notch services that cater to their unique needs.
              </li>
              <li>
                <strong>EXCELLENCE:</strong><br />
                We&apos;re always striving for excellence. Whether it&apos;s the services we provide or the way we interact with our clients, we aim to exceed expectations and set new benchmarks in bookkeeping.
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2">
            <img src='/images/corevalues.jpg' alt="Section 2 Image" className="rounded-lg shadow-lg" />
          </div>
        </div>

        {/* Section 3: Meet Ali */}
        <div className="mb-12 pb-8 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 md:pr-8">
            <img src='/images/alitahir.jpg' alt="Section 3 Image" className="rounded-lg mb-4 md:mb-0 shadow-lg" />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center md:text-left uppercase">Meet Ali</h2>
            <h3 className="text-2xl text-gray-800 mb-6 text-center md:text-left">The Dreamer Behind AccuPro</h3>
            <p className="text-lg text-gray-600 mb-6 text-center md:text-left">
              A business enthusiast who turned his dream into reality. An year ago, everything was put on the line to breathe life into AccuPro. It was more than just a business; it was a dream, a passion that demanded hard work and dedication every single day. Today, AccuPro stands as a testament to that dream. Within just a year, it has grown to become a trusted bookkeeping firm for numerous businesses. AccuPro is not just about bookkeeping; it&apos;s about building trust, about being there for businesses when they need it the most.
            </p>
          </div>
        </div>

        {/* Section 4: Sounds Familiar? */}
        <div className="mb-12 pb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 uppercase">Sounds Familiar?</h2>
          <p className="text-lg text-gray-600 mb-6">
            You&apos;re making money, but you&apos;re not sure where it&apos;s all going… You want to grow your team, but you&apos;re not sure the numbers make sense… You want to pay yourself, but you&apos;re not sure how… You thought your CPA was going to take care of your bookkeeping at the end of the year, until they didn&apos;t… Your tax bill shocked you this year, next year you don&apos;t want surprises…
          </p>
        <div className="flex justify-center">
          <Link href="/servicess">
              <button className="bg-[#37B2E5] hover:bg-[#37B2E5] text-white font-bold py-2 px-3 md:px-4 rounded shadow-md">
              Let's Get Started!
              </button>
          </Link>
        </div>

        </div>

      </div>
    </section>
  );
};

export default AboutUs;

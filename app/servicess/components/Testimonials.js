import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      content:
        `Ali has helped my business in so many ways that I am forever thankful for him and his services. He has helped me in ways that now I feel I have some control over my business. It feels very good to have a person that cares and is supportive on my side.`,
      author: 'Danny Guardado',
      business: 'Harbor Westlake Roofing'
    },
    {
      content:
        `Before working with Ali, our books were a mess. Ali helped both my husband's and my businesses' finances. Now, we both feel at ease and confident about our finances, knowing that someone is managing our books with accuracy.`,
      author: 'Holly Vaughn',
      business: 'Tack Metal Roofing'
    },
  ];

  return (
    <section className="testimonials bg-gray-100 py-16">
      <div className="container mx-auto px-4 lg:w-3/4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center uppercase">Client Testimonials</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.author} className="testimonial bg-white p-6 rounded-lg shadow-md text-center">
              <p className="text-gray-800 text-lg mb-4">{testimonial.content}</p>
              <p className="text-gray-600 font-bold">{testimonial.author}</p>
              <p className="text-gray-600">{testimonial.business}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

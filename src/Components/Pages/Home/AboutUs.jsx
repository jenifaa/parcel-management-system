import React from 'react';

const AboutUs = () => {
  return (
    <section className=" py-16">
      <div className="max-w-screen-xl mx-auto text-center px-6">
        <h2 className="text-3xl font-semibold text-green-800 mb-4">
          About Us
        </h2>
        <p className="text-lg text-green-700 mb-8">
          At Packify, we are committed to providing exceptional services and high-quality products to our customers. Our mission is to create meaningful connections with every individual we serve and make a positive impact in their lives.
        </p>
        <div className="flex justify-center space-x-8">
          <div className="w-1/3">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" stroke="currentColor" className="text-green-400 mb-4">
              <circle cx="20" cy="20" r="18" strokeWidth="4" />
              <path d="M6 12L12 18L18 12L24 18L30 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/>
            </svg>
            <h3 className="text-xl font-semibold text-green-800">Our Mission</h3>
            <p className="text-green-700">
              To deliver high-quality solutions that solve real-world problems and enhance the customer experience.
            </p>
          </div>
          <div className="w-1/3">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" stroke="currentColor" className="text-green-400 mb-4">
              <circle cx="20" cy="20" r="18" strokeWidth="4" />
              <path d="M6 12L12 18L18 12L24 18L30 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/>
            </svg>
            <h3 className="text-xl font-semibold text-green-800">Our Vision</h3>
            <p className="text-green-700">
              To be a leading provider of innovative products and services that exceed customer expectations.
            </p>
          </div>
          <div className="w-1/3">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" stroke="currentColor" className="text-green-400 mb-4">
              <circle cx="20" cy="20" r="18" strokeWidth="4" />
              <path d="M6 12L12 18L18 12L24 18L30 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/>
            </svg>
            <h3 className="text-xl font-semibold text-green-800">Our Values</h3>
            <p className="text-green-700">
              Integrity, innovation, customer satisfaction, and excellence drive everything we do.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

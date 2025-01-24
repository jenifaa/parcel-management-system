import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6';

const ContactUsPage = () => {
  return (
    <div className="bg-gray-100 py-16 my-10">
      <div className="container mx-auto px-6 md:px-12">
        <h1 className="text-5xl font-bold text-center text-gray-900 mb-8">Contact Us</h1>
        <p className="text-xl text-center text-gray-700 mb-16 max-w-3xl mx-auto">
          We’re here to help! Whether you have questions, feedback, or need assistance with our parcel management services, feel free to reach out. Our team is ready to assist you.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white shadow-xl rounded-lg p-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Get in Touch</h2>
            <form>
              <div className="mb-6">
                <label htmlFor="name" className="block text-lg font-semibold text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-lg font-semibold text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-lg font-semibold text-gray-700 mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                ></textarea>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-800 transition-colors duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-white shadow-xl rounded-lg p-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Our Office</h2>
            <p className="text-lg text-gray-700 mb-6">
              <strong>Address:</strong> 123 Parcel Delivery St, abc City Bangladesh
            </p>
            <p className="text-lg text-gray-700 mb-6">
              <strong>Phone:</strong> +123 456 7890
            </p>
            <p className="text-lg text-gray-700 mb-6">
              <strong>Email:</strong> support@parcelmanager.com
            </p>
            <p className="text-lg text-gray-700 mb-6">
              <strong>Business Hours:</strong> Mon-Fri, 9 AM - 6 PM
            </p>

            {/* Social Links */}
            <div className="flex space-x-6 mt-8">
              <a href="#" className="text-purple-600 hover:text-purple-800">
              <FaFacebook className='text-4xl'></FaFacebook>
              </a>
              <a href="#" className="text-purple-600 hover:text-purple-800">
               <FaInstagram className='text-4xl'></FaInstagram>
              </a>
              <a href="#" className="text-purple-600 hover:text-purple-800">
               <FaTwitter className='text-4xl'></FaTwitter>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;

import React from "react";
import img from '../../../assets/images/FAQs-rafiki (1).png'
const Faq = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 p-8 lg:p-16 bg-gray-100">
        {/* Left Side: Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={img} // Replace with your image URL
            alt="FAQ Illustration"
            className="rounded-lg shadow-lg object-cover w-full h-full"
          />
        </div>

        {/* Right Side: Accordion */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {/* Accordion Item 1 */}
            <div className="border border-gray-300 rounded-lg overflow-hidden shadow-sm">
              <button className="w-full text-left px-4 py-3 bg-gray-200 hover:bg-gray-300 focus:outline-none font-semibold text-gray-800">
                What is the purpose of this platform?
              </button>
              <div className="px-4 py-3 bg-white text-gray-600">
                This platform helps users manage parcel deliveries efficiently,
                connecting users, delivery personnel, and admins through a
                seamless interface.
              </div>
            </div>

            {/* Accordion Item 2 */}
            <div className="border border-gray-300 rounded-lg overflow-hidden shadow-sm">
              <button className="w-full text-left px-4 py-3 bg-gray-200 hover:bg-gray-300 focus:outline-none font-semibold text-gray-800">
                How do I track my parcel?
              </button>
              <div className="px-4 py-3 bg-white text-gray-600">
                Once your delivery request is created, you can track your
                parcel's status in the "My Deliveries" section of your account.
              </div>
            </div>

            {/* Accordion Item 3 */}
            <div className="border border-gray-300 rounded-lg overflow-hidden shadow-sm">
              <button className="w-full text-left px-4 py-3 bg-gray-200 hover:bg-gray-300 focus:outline-none font-semibold text-gray-800">
                How do I contact customer support?
              </button>
              <div className="px-4 py-3 bg-white text-gray-600">
                You can reach out to our support team via the "Contact Us" page
                or by emailing support@example.com.
              </div>
            </div>
            <div className="border border-gray-300 rounded-lg overflow-hidden shadow-sm">
            <button className="w-full text-left px-4 py-3 bg-gray-200 hover:bg-gray-300 focus:outline-none font-semibold text-gray-800">
              Can I cancel or reschedule my delivery?
            </button>
            <div className="px-4 py-3 bg-white text-gray-600">
              Yes, you can cancel or reschedule your delivery through the "My Deliveries" section, as long as the delivery is not already in progress.
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;

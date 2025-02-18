import React from "react";
import contactImage from "../../../assets/lottie/contact.json";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Lottie from "lottie-react";

const ContactUs = () => {
  return (
    <div className="my-16 font w-11/12 mx-auto">
      <div className="my-10">
        <h2 className="text-center font font-bold text-5xl">Contact us</h2>
      </div>
      <div className=" mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-20">
          {/* Contact Image */}
          <div className="w-full ">
            {/* <img
              src={contactImage}
              alt="Contact Us"
              className="rounded-lg shadow-xl w-full h-[300px] "
            /> */}
            <Lottie animationData={contactImage} className="w-[450px]"></Lottie>
          </div>

          {/* Contact Information */}
          <div className="w-full  ">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Get in Touch
            </h2>
            <p className="mb-6 text-lg">
              We would love to hear from you! Reach out to us through any of the
              following channels:
            </p>

            <div className="flex flex-col gap-5">
              {/* Phone */}
              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-3xl text-blue-400" />
                <p className="text-xl">+1 (123) 456-7890</p>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-3xl text-blue-400" />
                <p className="text-xl">packify@gmail.com</p>
              </div>

              {/* Address */}
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-3xl text-blue-400" />
                <p className="text-xl">123 Main St, City, Country</p>
              </div>
            </div>

            <button className="mt-8 py-3 px-6 font-bold text-white  bg-blue-500  rounded-xl shadow-lg hover:bg-blue-400 transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

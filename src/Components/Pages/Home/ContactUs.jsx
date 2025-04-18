import React from "react";
import contactImage from "../../../assets/lottie/contact.json";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <div className="my-16 font w-11/12 mx-auto">
      <div className="my-4">
        <p className="text-sm font-bold text-blue-500 mb-3 text-center">
          Connect with us--
        </p>
        <h2 className="text-center font font-bold text-5xl">Contact us</h2>
      </div>
      <div className=" mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-20">
          <div className="w-full ">
            <Lottie
              animationData={contactImage}
              className="lg:w-[450px]"
            ></Lottie>
          </div>

          {/* Contact Information */}
          <div className="w-full  bg-gray-100 dark:text-black px-10 py-7 rounded-xl">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Get in Touch
            </h2>
            <p className="mb-6 text-lg">
              We would love to hear from you! Reach out to us through any of the
              following channels:
            </p>

            <div className="flex flex-col gap-3">
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

            <div className="mt-5">
              <Link
                to="/contact"
                className=" py-3 px-6 font-bold text-white  bg-blue-500  rounded-md shadow-lg hover:bg-blue-400 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center  mt-4">
        <p className="text-sm font-bold text-blue-500 mb-3">
          Learn more about us--
        </p>
        <h2 className="font-bold text-5xl">About Us</h2>
      </div>
    </div>
  );
};

export default ContactUs;

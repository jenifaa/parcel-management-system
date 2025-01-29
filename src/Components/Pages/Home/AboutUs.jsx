import React from "react";
import about from "../../../assets/images/About us page-pana (1).png";
import { Link } from "react-router-dom";
const AboutUs = () => {
  return (
    <section className=" py-16 w-11/12 mx-auto">
      <div className="flex flex-col-reverse lg:flex-row justify-between items-start gap-20">
        <div className=" text-center px-6 lg:w-1/2">
          
          <div className="grid sm:grid-cols-2 gap-10">
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="none"
                stroke="currentColor"
                className="text-green-400 mb-4"
              >
                <circle cx="20" cy="20" r="18" strokeWidth="4" />
                <path
                  d="M6 12L12 18L18 12L24 18L30 12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                />
              </svg>
              <h3 className="text-2xl font-semibold text-green-800 mb-3">
                Our Mission
              </h3>
              <p className="text-green-800 text-sm">
                To deliver high-quality solutions that solve real-world problems
                and enhance the customer experience.
              </p>
            </div>
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="none"
                stroke="currentColor"
                className="text-green-400 mb-4"
              >
                <circle cx="20" cy="20" r="18" strokeWidth="4" />
                <path
                  d="M6 12L12 18L18 12L24 18L30 12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                />
              </svg>
              <h3 className="text-2xl font-semibold text-green-800 mb-3">
                Our Vision
              </h3>
              <p className="text-green-800 text-sm">
                To be a leading provider of innovative products and services
                that exceed customer expectations.
              </p>
            </div>
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="none"
                stroke="currentColor"
                className="text-green-400 mb-4"
              >
                <circle cx="20" cy="20" r="18" strokeWidth="4" />
                <path
                  d="M6 12L12 18L18 12L24 18L30 12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                />
              </svg>
              <h3 className="text-2xl font-semibold text-green-800 mb-3">
                Our Values
              </h3>
              <p className="text-green-800 text-sm">
                Integrity, innovation, customer satisfaction, and excellence
                drive everything we do.
              </p>
            </div>
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="none"
                stroke="currentColor"
                className="text-green-400 mb-4"
              >
                <circle cx="20" cy="20" r="18" strokeWidth="4" />
                <path
                  d="M6 12L12 18L18 12L24 18L30 12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                />
              </svg>
              <h3 className="text-2xl font-semibold text-green-800 mb-3">
                Our Commitment
              </h3>
              <p className="text-green-800 text-sm">
                We are dedicated to sustainability and creating a positive
                impact on society and the environment.
              </p>
            </div>
            <Link to='/about' className="text-green-800 border-b-2 border-green-800 rounded-xl font-bold py-2">See More...</Link>
          </div>
        </div>
        <div className="lg:w-1/2">
          <img className="" src={about} alt="" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

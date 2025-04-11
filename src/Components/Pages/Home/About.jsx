import Lottie from "lottie-react";
import React from "react";
import about from "../../../assets/lottie/aboutUs.json";
import robo from "../../../assets/lottie/roboBox.json";
const About = () => {
  return (
    <div className="  mx-auto px-40 py-28 dark:bg-gray-800 font  bg-gray-50">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white">About Us</h1>
        <p className="text-lg text-gray-600 mt-4 dark:text-white">
          Welcome to <span className="text-indigo-600">Packify</span>, your
          trusted partner in parcel delivery solutions.
        </p>
      </div>

      <div className="md:flex justify-between gap-20 items-center mb-20">
        <div className=" mb-12">
          <h2 className="text-3xl font-semibold text-center">Who We Are</h2>
          <p className="text-lg text-gray-600 mt-4 dark:text-white">
            At <span className="text-indigo-600">Packify</span>, we are a team
            of passionate professionals committed to transforming the logistics
            experience. We offer a user-friendly platform that makes parcel
            delivery seamless and efficient.
          </p>
        </div>
        <div>
          <Lottie animationData={about}></Lottie>
        </div>
      </div>

      
      <div className="md:flex justify-between mb-20">
        <div><Lottie animationData={robo}></Lottie></div>
      <div className=" lg:pl-28">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-white text-center">What We Do</h2>
        <p className="text-lg text-gray-600 dark:text-white mt-4">
          - <strong>Fast and Reliable Delivery:</strong> We provide swift
          delivery services that guarantee the safe and on-time arrival of your
          parcels.
        </p>
        <p className="text-lg text-gray-600 mt-4 dark:text-white" >
          - <strong>Real-Time Tracking:</strong> Stay updated with live
          tracking, ensuring complete visibility over the status of your parcel.
        </p>
        <p className="text-lg text-gray-600 mt-4 dark:text-white">
          - <strong>User-Friendly Interface:</strong> Our platform is designed
          for ease of use, whether you’re sending a package or tracking an
          existing delivery.
        </p>
        <p className="text-lg text-gray-600 mt-4 dark:text-white">
          - <strong>Security & Trust:</strong> We take pride in delivering
          parcels with the utmost security, maintaining the trust our customers
          place in us.
        </p>
        <p className="text-lg text-gray-600 mt-4 dark:text-white">
          - <strong>Customizable Solutions:</strong> We offer flexible delivery
          options tailored to meet the specific needs of businesses,
          individuals, and e-commerce platforms.
        </p>
      </div>
      </div>

      
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-center  text-gray-800 dark:text-white">Our Values</h2>
        <p className="text-lg text-gray-600 mt-4 dark:text-white">
          - <strong>Customer-Centric Approach:</strong> We believe in delivering
          exceptional customer service, ensuring every interaction is friendly,
          professional, and efficient.
        </p>
        <p className="text-lg text-gray-600 mt-4 dark:text-white">
          - <strong>Innovation:</strong> We embrace cutting-edge technology to
          continuously improve our services and make the parcel delivery process
          simpler and faster.
        </p>
        <p className="text-lg text-gray-600 mt-4 dark:text-white">
          - <strong>Reliability:</strong> Trust is at the core of what we do.
          Our commitment to timely deliveries and security has earned us the
          confidence of countless satisfied clients.
        </p>
      </div>

     
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-white text-center ">Why Choose Us?</h2>
        <p className="text-lg text-gray-600 mt-4 dark:text-white">
          - <strong>Expert Delivery Personnel:</strong> Our team consists of
          trained professionals who are dedicated to handling each parcel with
          care and responsibility.
        </p>
        <p className="text-lg text-gray-600 mt-4 dark:text-white">
          - <strong>Timely Deliveries:</strong> We understand the importance of
          deadlines, which is why we always prioritize punctuality.
        </p>
        <p className="text-lg text-gray-600 mt-4 dark:text-white">
          - <strong>End-to-End Support:</strong> From booking to delivery, we
          offer 24/7 customer support to assist you with any inquiries or
          concerns.
        </p>
      </div>

      <div className="text-center">
        <p className="text-lg text-gray-600 dark:text-white">
          At <span className="text-indigo-600 dark:text-white">Packify</span>, we go
          beyond just delivering parcels. We create experiences that enhance
          convenience and reliability. Join us and experience the future of
          parcel delivery.
        </p>
      </div>
    </div>
  );
};

export default About;

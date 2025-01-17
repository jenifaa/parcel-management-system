import React from "react";
import bannerImg from "../../../assets/images/banner2.jpeg";
import { FaSearch } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="relative mt-16">
      <img
        className="h-[400px] lg:h-[550px] w-full object-cover"
        src={bannerImg}
        alt=""
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-40 px-4">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-6 text-center">
          Find Your Perfect Parcel Delivery
        </h1>

        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Enter your tracking ID..."
            className="w-full py-3 pl-4 pr-28 rounded-lg text-gray-800 focus:outline-none"
          />
          <button className="flex items-center gap-1 absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
          <FaSearch />Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

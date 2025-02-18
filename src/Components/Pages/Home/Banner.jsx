import React from "react";
import bannerImg from "../../../assets/images/bannerImage.png";
import { FaSearch } from "react-icons/fa";
import banner from "../../../assets/lottie/banner2.json";
import Lottie from "lottie-react";
// import vid from "../../../assets/video/banner.mp4";
const Banner = () => {
  return (
    <div className="relative ">
      <img
        className="h-[500px] lg:h-[650px] w-full object-cover"
        src={bannerImg}
        alt=""
      />
      {/* <Lottie className="h-[600px]" animationData={banner}></Lottie> */}
      

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-60 px-4">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold font mb-6 text-center">
          Find Your Perfect Parcel Delivery
        </h1>

        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Enter your tracking ID..."
            className="w-full py-3 pl-4 pr-28 rounded-lg text-gray-800 focus:outline-none"
          />
          <button className="flex items-center gap-1 absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            <FaSearch />
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

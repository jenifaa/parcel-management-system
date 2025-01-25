import React from "react";
import icon from "../../../assets/icons/map.png";
import secure from "../../../assets/lottie/secure.json";
import map from "../../../assets/lottie/map.json";
import rocket from "../../../assets/lottie/rocket.json";
import { FaTruck, FaUserFriends, FaBoxOpen } from "react-icons/fa";
import Lottie from "lottie-react";
import CountUp from "react-countup";
import useAxiosPublic from "@/Components/Hooks/useAxiosPublic";

import { useQuery } from "@tanstack/react-query";
const OurFeature = () => {
  const axiosPublic = useAxiosPublic();
  const { data: stats = [], refetch } = useQuery({
    queryKey: ["stats"],
    queryFn: async () => {
      const res = await axiosPublic.get("/stat");

      return res.data;
    },
  });

  return (
    <div className="bg-gray-50">
      <section className="pt-12 pb-8  px-6 ">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-sm font-bold mb-2 text-green-700">
            Our Features---
          </h2>
          <h2 className="text-5xl font-bold mb-10">Our Services at a Glance</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* card 1 */}
            <div className="bg-white px-4 pb-5  rounded-lg shadow-lg">
              <div className="flex justify-center items-center">
                <Lottie
                  animationData={secure}
                  className="w-40 object-cover"
                ></Lottie>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Secure & Safe Delivery
              </h3>
              <p className="text-gray-600">
                With advanced tracking and security protocols, your parcel stays
                safe from pickup to delivery.
              </p>
            </div>

            {/* card 2 */}
            <div className="bg-white  px-4 pb-5   rounded-lg shadow-lg">
              <div className="flex justify-center items-center">
                <Lottie animationData={rocket} className="w-36 mb-3"></Lottie>
              </div>
              <h3 className="text-xl font-semibold mb-3">Speedy Service</h3>
              <p className="text-gray-600">
                Get your parcels delivered in record time with our ultra-fast
                delivery network.
              </p>
            </div>

            {/* card 3 */}
            <div className="bg-white px-4 pb-5 rounded-lg shadow-lg">
              <div className="flex justify-center items-center">
                <Lottie
                  animationData={map}
                  className="w-40 object-cover"
                ></Lottie>
              </div>
              <h3 className="text-xl font-semibold mb-2">Track Your Parcel</h3>
              <p className="text-gray-600">
                Know exactly where your parcel is with live tracking updates,
                ensuring peace of mind throughout the journey.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className=" py-10">
          <div className="bg-gray-100 ">
            <h2 className="text-5xl font-bold text-center pt-8 mb-4 ">
               Achievements Unlocked
            </h2>
            <p className="text-center text-sm text-green-600 font-bold mb-12">
              See what makes us the most reliable delivery service.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:w-8/12 mx-auto gap-8 px-8">
              {/* Parcels Booked */}
              <div className="bg-white shadow-lg p-8 rounded-lg text-center hover:shadow-2xl transition-shadow duration-300">
                <div className="flex justify-center items-center mb-4">
                  <FaBoxOpen className="text-6xl text-green-500" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                  Parcels Booked
                </h3>
                <CountUp
                  className="text-4xl font-bold text-green-600"
                  end={stats.parcels}
                  duration={2}
                  separator=","
                />
              </div>

              {/* Parcels Delivered */}
              <div className="bg-white shadow-lg p-8 rounded-lg text-center hover:shadow-2xl transition-shadow duration-300">
                <div className="flex justify-center items-center mb-4">
                  <FaTruck className="text-6xl text-blue-500" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                  Parcels Delivered
                </h3>
                <CountUp
                  className="text-4xl font-bold text-blue-600"
                  end={stats.delivered}
                  duration={2}
                  separator=","
                />
              </div>

              {/* Users Registered */}
              <div className="bg-white shadow-lg p-8 rounded-lg text-center hover:shadow-2xl transition-shadow duration-300">
                <div className="flex justify-center items-center mb-4">
                  <FaUserFriends className="text-6xl text-purple-500" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                  Users Registered
                </h3>
                <CountUp
                  className="text-4xl font-bold text-purple-600"
                  end={stats.users}
                  duration={2}
                  separator=","
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurFeature;

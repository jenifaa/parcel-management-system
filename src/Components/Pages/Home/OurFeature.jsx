import React from "react";
import icon from "../../../assets/icons/globe-location.png";
import secure from "../../../assets/icons/safety.png";
import boXLottie from "../../../assets/icons/protect.png";

import { FaTruck, FaUserFriends, FaBoxOpen } from "react-icons/fa";
import Lottie from "lottie-react";
import CountUp from "react-countup";
import con from "../../../assets/icons/confetti.png";
import box from "../../../assets/icons/box.png";
import boxes from "../../../assets/icons/boxes.png";
import parcel from "../../../assets/icons/rocket.png";
import truck from "../../../assets/icons/vehicle.png";
import useAxiosPublic from "@/Components/Hooks/useAxiosPublic";
import image from "../../../assets/images/del.png";
import { MdOutlineAttachMoney } from "react-icons/md";
import { IoTicketSharp } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";
import { HiOutlineUserGroup } from "react-icons/hi";
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
    <div className="bg-gray-50 dark:bg-black font mb-20">
      <section className="pt-12 pb-8  px-6">
        <div className="lg:w-11/12 mx-auto text-center">
          <h2 className="text-sm  font-bold mb-2 text-blue-500">
            Our Features---
          </h2>
          <h2 className="text-5xl font-bold mb-16">Our Services at a Glance</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5 ">
            <div className="bg-white px-4 pb-5 md:w-56  lg:w-72 rounded-lg shadow-lg">
              <div className="flex justify-center p-5 items-center">
                <img src={secure} className="w-full h-52" alt="" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Secure & Safe Delivery
              </h3>
              <p className="text-gray-600 text-sm">
                With advanced tracking and security protocols, your parcel stays
                safe from pickup to delivery.
              </p>
            </div>

            <div className="bg-white  px-4 pb-5 md:w-56  lg:w-72  rounded-lg shadow-lg">
              <div className="flex justify-center p-5 items-center">
                <img src={parcel} className="w-full h-52 " alt="" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Speedy Service</h3>
              <p className="text-gray-600 text-sm">
                Get your parcels delivered in record time with our ultra-fast
                delivery network.
              </p>
            </div>

            <div className="bg-white px-4 pb-5 md:w-56  lg:w-72 rounded-lg shadow-lg">
              <div className="flex justify-center p-5 items-center">
                <img src={icon} className="w-full h-52" alt="" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Track Your Parcel</h3>
              <p className="text-gray-600 text-sm">
                Know exactly where your parcel is with live tracking updates,
                ensuring peace of mind throughout the journey.
              </p>
            </div>
            <div className="bg-white px-4 pb-5 md:w-56  lg:w-72  rounded-lg shadow-lg">
              <div className="flex justify-center p-5 items-center">
                <img src={boXLottie} className="w-full h-52" alt="" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Package Insurance</h3>
              <p className="text-gray-600 text-sm">
                Know exactly where your parcel is with live tracking updates,
                ensuring peace of mind throughout the journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div
        style={{
          backgroundImage: `url(${image})`,
        }}
        className="h-screen bg-fixed bg-cover  bg-center relative mt-20  mb-20 sm:mb-5"
      >
        
        <div className="absolute inset-0 bg-black opacity-80"></div>

        <div className="relative z-10 lg:px-64 py-10">
          <h2 className="text-5xl font-bold text-center font text-white mb-12">
            Achievements Unlocked
          </h2>

          <div className="w-full text-white">
            <div className="w-full flex justify-between items-center border-b">
              <div className="text-center w-1/3 px-4 py-4 border-r flex flex-col justify-center items-center">
                <div className="text-6xl  mb-4">
                  <img className="w-14" src={boxes} alt="" />
                </div>
                <h3 className="text-md font-semibold mb-2">Parcels Booked</h3>
                <p className="text-3xl font-bold">
                  <CountUp end={stats.parcels} duration={3} separator="," />
                </p>
              </div>

              <div className="text-center w-1/3 px-4 py-4 border-r flex flex-col justify-center items-center">
                <div className="text-6xl  mb-4">
                  <img className="w-14" src={truck} alt="" />
                </div>
                <h3 className="text-md font-semibold  mb-2">
                  Parcels Delivered
                </h3>
                <p className="text-3xl font-bold">
                  <CountUp end={stats.delivered} duration={3} separator="," />
                </p>
              </div>

              <div className="text-center w-1/3 px-4 py-4  flex flex-col justify-center items-center">
                <div className="text-6xl text-[#8613ab] mb-4">
                  <FaUserFriends />
                </div>
                <h3 className="text-md font-semibold  mb-2">
                  Users Registered
                </h3>
                <p className="text-3xl font-bold">
                  <CountUp end={stats.users} duration={3} separator="," />
                </p>
              </div>
            </div>

            <div className="w-full flex justify-between items-center sm:border-b">
              <div className="text-center w-1/3 px-4 py-4 border-r flex flex-col justify-center items-center">
                <div className="text-6xl  mb-4">
                  <HiOutlineUserGroup className="text-[#be1b16]" />
                </div>
                <h3 className="text-md font-semibold mb-2">
                  Teamwork and Collaboration
                </h3>
                <p className="text-3xl font-bold">
                  <CountUp end={30} duration={3} separator="," />
                </p>
              </div>

              <div className="text-center w-1/3 px-4 py-4 border-r flex flex-col justify-center items-center">
                <div className="text-6xl text-yellow-500 mb-4">
                  <MdOutlineAttachMoney />
                </div>
                <h3 className="text-md font-semibold  mb-2">
                  Revenue Generated
                </h3>
                <p className="text-3xl font-bold">
                  <CountUp end={400} duration={3} separator="," />
                </p>
              </div>

              <div className="text-center w-1/3 px-4 py-4  flex flex-col justify-center items-center">
                <div className="text-6xl text-blue-500 mb-4">
                  <IoPersonSharp />
                </div>
                <h3 className="text-md font-semibold  mb-2">
                  Drivers Assigned
                </h3>
                <p className="text-3xl font-bold">
                  <CountUp end={25} duration={3} separator="," />
                </p>
              </div>
            </div>
            <div className="w-full sm:flex justify-between items-center hidden">
              <div className="text-center w-1/3 px-4 py-4 border-r-2 flex flex-col justify-center items-center">
                <div className="text-6xl  mb-4">
                  <IoTicketSharp className="text-[#13ab9d]" />
                </div>
                <h3 className="text-md font-semibold mb-2">
                  Support Tickets Resolved
                </h3>
                <p className="text-3xl font-bold">
                  <CountUp end={18} duration={3} separator="," />
                </p>
              </div>

              <div className="text-center w-1/3 px-4 py-4 border-r-2 flex flex-col justify-center items-center">
                <div className="text-6xl text-blue-200 mb-4">
                  <img className="w-14" src={con} alt="" />
                </div>
                <h3 className="text-md font-semibold  mb-2">
                  Customers Served
                </h3>
                <p className="text-3xl font-bold">
                  <CountUp end={stats.delivered} duration={3} separator="," />
                </p>
              </div>

              <div className="text-center w-1/3 px-4 py-4  flex flex-col justify-center items-center">
                <div className="text-6xl text-purple-200 mb-4">
                  <img className="w-14" src={box} alt="" />
                </div>
                <h3 className="text-md font-semibold  mb-2">
                  Packages Picked Up
                </h3>
                <p className="text-3xl font-bold ">
                  <CountUp end={35} duration={3} separator="," />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFeature;

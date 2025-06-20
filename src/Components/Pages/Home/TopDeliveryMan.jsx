import useAxiosPublic from "@/Components/Hooks/useAxiosPublic";
import useParcel from "@/Components/Hooks/useParcel";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { motion } from "motion/react";
const TopDeliveryMan = () => {
  const axiosPublic = useAxiosPublic();

  const { data: deliveryMan = [] } = useQuery({
    queryKey: ["deliveryMan"],
    queryFn: async () => {
      const res = await axiosPublic.get("/top-deliveryMan");

      return res.data;
    },
  });

  const deliveryMen = [
    {
      id: 1,
      rank: "🏆 Top Performer",
      color: "bg-yellow-600",
      experience: "5+ years",
      badge: "🌟 Customer Favorite",
    },
    {
      id: 2,
      rank: "🥈 Reliable",
      color: "bg-gray-500",
      experience: "3+ years",
      badge: "🚀 Fast Responder",
    },
    {
      id: 3,
      rank: "🥉 Fastest",
      color: "bg-blue-500",
      experience: "2+ years",
      badge: "⚡ Speed Master",
    },
  ];

  return (
    <div className="w-11/12  mx-auto my-10 font">
      <div className="text-center mb-8">
        <p className="text-sm text-blue-500 font-bold mb-3">
          Meet our deliveryman---
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold  mb-12">
          🏆Our Top Three DeliveryMan
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 ">
        {deliveryMan.map((delivery, index) => (
          <motion.div
            key={delivery._id}
            className=" bg-white dark:bg-gray-800 shadow-lg rounded-2xl  text-center transform transition-all hover:scale-105 hover:shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            // className="border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-white overflow-hidden"
          >
            <div className="relative p-4 text-start flex items-center gap-6">
              <div
                className={`absolute bottom-2 left-3 px-3 py-1 text-white text-sm font-semibold rounded-full shadow-md ${
                  deliveryMen[index]?.color || "bg-gray-400"
                }`}
              >
                {deliveryMen[index]?.rank || "🚴 Delivery Man"}
              </div>
              <div
                className={`absolute lg:top-3 -top-5 -right-4 px-4 py-2 text-white text-sm font-semibold rounded-full shadow-md ${
                  deliveryMen[index]?.color || "bg-gray-400"
                }`}
              >
                 {deliveryMen[index]?.experience}  of Experience
              </div>

              <div>
                <img
                  className="w-40 h-40 object-cover rounded-full border-4 border-gray-300 shadow-sm"
                  src={delivery.photoURL}
                  alt={`${delivery.name}'s Profile`}
                />
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-start  text-gray-800">
                  {delivery.name}
                </h2>
                <div className="flex items-center ">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-yellow-400 text-xl ${
                        i < delivery.reviewCount
                          ? "text-yellow-500"
                          : "text-gray-400"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                {/* <p className="text-md text-blue-500 font-bold">
                 
                  {deliveryMen[index]?.experience}  <span className="font-bold text-gray-800">Experience</span>{" "}
                </p> */}
                <p className="text-md text-green-500 my-1 font-bold">
              
                  {deliveryMen[index]?.badge}
                </p>
               
                
               
                <p className="text-base text-blue-700 font-bold">
                  <span className="font-bold text-gray-800"></span>{" "}
                  Completed {delivery.deliveryCount}+ Deliveries
                </p>
                <p className="text-lg mt-1  font-bold ">
                  <span className="font-bold text-gray-800">
                    Total Reviews:
                  </span>{" "}
                  {delivery.reviewCount}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TopDeliveryMan;

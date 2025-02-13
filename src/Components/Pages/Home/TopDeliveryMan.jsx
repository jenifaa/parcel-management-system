import useAxiosPublic from "@/Components/Hooks/useAxiosPublic";
import useParcel from "@/Components/Hooks/useParcel";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const TopDeliveryMan = () => {
  const axiosPublic = useAxiosPublic();

  const { data: deliveryMan = [] } = useQuery({
    queryKey: ["deliveryMan"],
    queryFn: async () => {
      const res = await axiosPublic.get("/top-deliveryMan");

      return res.data;
    },
  });

  return (
    <div className="w-11/12 mx-auto my-10">
      <div className="text-center mb-8">
        <p className="text-sm text-green-800 font-bold mb-2">
          Meet our deliveryman---
        </p>
        <h2 className="text-5xl font-bold font2 mb-12">
          Our Top Three DeliveryMan
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 ">
        {deliveryMan.map((delivery) => (
          <div
            key={delivery._id}
            className="border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-white overflow-hidden"
          >
            <div className="p-4 flex items-center gap-6">
              <div>
                <img
                  className="w-40 h-40 object-cover rounded-full border border-gray-300 shadow-sm"
                  src={delivery.photoURL}
                  alt={`${delivery.name}'s Profile`}
                />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-2 text-gray-800">
                  {delivery.name}
                </h2>
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-yellow-500 ${
                        i < delivery.reviewCount ? "text-yellow-500" : "text-gray-400"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-lg text-green-700 font-bold mb-3">
                  <span className="font-bold text-gray-800">
                    Total Reviews:
                  </span>{" "}
                  {delivery.reviewCount}
                </p>
                <p className="text-lg text-green-700 font-bold">
                  <span className="font-bold text-gray-800">
                    Total Delivered:
                  </span>{" "}
                  {delivery.deliveryCount}
                </p>
              </div>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopDeliveryMan;

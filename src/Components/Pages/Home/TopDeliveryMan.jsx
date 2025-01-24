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
        <p className="text-sm text-green-800 font-bold mb-2">Meet our deliveryman---</p>
        <h2 className="text-5xl font-bold font2 mb-2">
          Our Top Three DeliveryMan
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 ">
        {deliveryMan.map((delivery) => (
          <div key={delivery._id} className="border">
            <div className="p-4 flex items-center gap-5">
              <div>
                <img className="w-40 h-40 object-cover" src={delivery.photoURL} alt="" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-2">{delivery.name}</h2>
                <p className="font-bold mb-3">Total review:{delivery.reviewCount}</p>
                <p className="font-bold">Total Delivered: {delivery.deliveryCount}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopDeliveryMan;

import useAxiosPublic from "@/Components/Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const TopDeliveryMan = () => {
  const axiosPublic = useAxiosPublic();
  const { data: deliveryMan = [] } = useQuery({
    queryKey: ["deliveryMan"],
    queryFn: async () => {
      const res = await axiosPublic.get("/users/deliveryMan");
      console.log(res.data);
      return res.data;
    },
  });
  return <div></div>;
};

export default TopDeliveryMan;

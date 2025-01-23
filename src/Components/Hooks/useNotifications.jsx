import React from "react";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";

const useNotifications = () => {
  const axiosSecure = useAxiosSecure();

  const { data: notification = [], refetch } = useQuery({
    queryKey: ["notification"],
    queryFn: async () => {
      const res = await axiosSecure.get("/notification");
   
      console.log(notification);
      console.log(res.data);
      return res.data;
    },
  });
  return [notification, refetch];
};

export default useNotifications;

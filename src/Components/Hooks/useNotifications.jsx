import React from "react";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";

const useNotifications = () => {
  const axiosSecure = useAxiosSecure();

  const { data: notification = [], refetch } = useQuery({
    queryKey: ["notification"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
   
      
      return res.data.filter((user) => user.type === "pending");
    },
  });
  return [notification, refetch];
};

export default useNotifications;

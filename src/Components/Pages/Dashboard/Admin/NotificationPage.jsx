import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import useAxiosPublic from "@/Components/Hooks/useAxiosPublic";
import useNotifications from "@/Components/Hooks/useNotifications";
import useAxiosSecure from "@/Components/Hooks/useAxiosSecure";

const NotificationPage = () => {
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();

  

  const [notification, refetch] = useNotifications();
  console.log(notification);
  const handleAccept = async (id) => {
    const response = await axiosSecure.patch(`/users/deliveryMan/${id}`, {
      type: "deliveryMan",
    });
    refetch();
    console.log("User accepted:", response.data);
  };
  return (
    <div className="p-4 my-24 lg:pl-64 lg:pr-[550px]">
      <div className="flex items-center justify-between mb-14">
        <h1 className="text-2xl font-bold mb-4">
          Notifications: {notification.length}
        </h1>
        <p className="font-bold text-green-800">
          People who Wanted to be delivery Man
        </p>
      </div>

      {notification.length > 0 ? (
        <ul>
          {notification.map((notifications) => (
            <li
              key={notifications._id}
              className="bg-gray-100 p-4 mb-3 rounded shadow w-6/12"
            >
              <div className="flex justify-between">
                <div>
                  <p>
                    <strong>Name: {notifications.name}</strong>
                  </p>
                  <p>
                    <strong>Email:</strong> {notifications.email}
                  </p>
                  <p>
                    <strong>Phone:</strong> {notifications.phoneNumber || "N/A"}
                  </p>
                </div>
                <div>
                  <button
                    onClick={() => handleAccept(notifications._id)}
                    className="bg-green-700 px-3 py-1 rounded-md text-white"
                  >
                    accept
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No new notifications.</p>
      )}
    </div>
  );
};

export default NotificationPage;

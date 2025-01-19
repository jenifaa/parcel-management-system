import useAuth from "@/Components/Hooks/useAuth";
import useDeliveryManNotifications from "@/Components/Hooks/useDeliveryManNotifications";
import React from "react";
import { FaTrash } from "react-icons/fa6";

const DeliveryNotification = () => {
  const { user } = useAuth();
  const [notifications, refetch] = useDeliveryManNotifications();
  console.log(notifications);
//   const handleDelete = (notificationId) => {
//     notifications.filter((notification) => notification._id !== notificationId);

//     refetch();
//   };
  return (
    <div className="p-4 my-24 lg:pl-64 lg:pr-[550px]">
      <h1 className="text-2xl font-bold mb-6">
        Delivery Man Notifications: {notifications.length}
      </h1>

      {notifications.length > 0 ? (
        <ul>
          {notifications.map((notification, index) => (
            <li
              key={index}
              className="bg-gray-100 p-4 mb-3 rounded shadow w-6/12"
            >
              <div className="flex justify-between">
                <div>
                  {" "}
                  <p className="font-bold">Congratulation!!</p>
                  <p>Admin Has accepted your request</p>
                  <p className="text-sm text-gray-500">
                    You're A deliveryMan Now
                  </p>
                </div>
                {/* <div>
                  <button onClick={() => handleDelete(notification._id)}>
                    <FaTrash className="text-xl text-red-600"></FaTrash>
                  </button>
                </div> */}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No notifications found.</p>
      )}
    </div>
  );
};

export default DeliveryNotification;

import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuth from "@/Components/Hooks/useAuth";
import useAxiosSecure from "@/Components/Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../../ui/select";

const MyParcel = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [selectedStatus, setSelectedStatus] = useState("All"); 

  const { data: parcels = [], refetch } = useQuery({
    queryKey: ["parcels", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcel/${user?.email}`);
      return res.data;
    },
  });

  const handleCancelParcel = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to cancel this parcel?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/parcel/cancel/${id}`, { status: "Canceled" })
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              Swal.fire({
                title: "Canceled!",
                text: "Parcel has been canceled successfully.",
                icon: "success",
              });
              refetch();
            }
          })
          .catch((error) => {
            console.error("Error canceling parcel:", error);
            Swal.fire({
              title: "Error",
              text: "Could not cancel the parcel. Please try again.",
              icon: "error",
            });
          });
      }
    });
  };

  
  const filteredParcels =
    selectedStatus === "All"
      ? parcels
      : parcels.filter((parcel) => parcel.status === selectedStatus);

  return (
    <div className="mb-20">
      <div className="flex justify-between items-center mb-8">
        <h2 className="font-bold text-3xl">My Parcels: {filteredParcels.length}</h2>
        <Select onValueChange={(value) => setSelectedStatus(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Status</SelectLabel>
              <SelectItem value="All">All</SelectItem>
              <SelectItem value="Pending">Pending</SelectItem>
              <SelectItem value="Delivered">Delivered</SelectItem>
              <SelectItem value="Canceled">Canceled</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-100 border-b">
                <th className="px-4 py-2 text-left">Parcel Type</th>
                <th className="px-4 py-2 text-left">Requested Date</th>
                <th className="px-4 py-2 text-left">Approximate Delivery Date</th>
                <th className="px-4 py-2 text-left">Booking Date</th>
                <th className="px-4 py-2 text-right">DeliveryManId</th>
                <th className="px-4 py-2 text-right">Status</th>
                <th className="px-4 py-2 text-right"></th>
                <th className="px-4 py-2 text-right"></th>
                <th className="px-4 py-2 text-right"></th>
              </tr>
            </thead>
            <tbody>
              {filteredParcels.map((parcel) => (
                <tr key={parcel._id} className="border-b">
                  <td className="px-4 py-2">{parcel.parcelType}</td>
                  <td className="px-4 py-2">{parcel.requestedDeliveryDate}</td>
                  <td className="px-4 py-2">{parcel.approximateDeliveryDate}</td>
                  <td className="px-4 py-2 text-sm">{parcel.BookingDate}</td>
                  <td className="px-4 py-2 text-right text-sm">
                    {parcel.deliveryManId}
                  </td>
                  <td className="px-4 py-2 text-right text-xs font-bold">
                    {parcel.status}
                  </td>
                  <td className="px-4 py-2 text-right">
                    {parcel.status === "Pending" ? (
                      <Link to={`/dashboard/update/${parcel._id}`}>
                        <button className="text-xl text-blue-600">
                          <FaRegEdit />
                        </button>
                      </Link>
                    ) : parcel.status === "Delivered" ? (
                      <button
                        onClick={() =>
                          Swal.fire(
                            "Review Clicked!",
                            "You can write a review.",
                            "info"
                          )
                        }
                        className="text-sm text-green-600 font-bold"
                      >
                        Review
                      </button>
                    ) : (
                      <button
                        className="text-xl text-gray-500 font-bold cursor-not-allowed"
                        disabled
                      >
                        <FaRegEdit />
                      </button>
                    )}
                  </td>
                  <td className="px-4 py-2 text-right">
                    {parcel.status === "Pending" ? (
                      <button
                        onClick={() => handleCancelParcel(parcel._id)}
                        className="text-sm text-red-500"
                      >
                        Cancel
                      </button>
                    ) : (
                      <button
                        className="text-sm text-gray-500 font-bold cursor-not-allowed"
                        disabled
                      >
                        Cancel
                      </button>
                    )}
                  </td>
                  <td className="px-4 py-2 text-right">
                    {parcel.status === "Canceled" ? (
                      <button
                        className="font-bold text-gray-500 cursor-not-allowed"
                        disabled
                      >
                        Pay
                      </button>
                    ) : (
                      <button className="font-bold">
                        <Link to="/dashboard/payment">Pay</Link>
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyParcel;

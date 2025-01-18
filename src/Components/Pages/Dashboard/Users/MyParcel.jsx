import React from "react";

import { useQuery } from "@tanstack/react-query";

import { Link } from "react-router-dom";
import useAuth from "@/Components/Hooks/useAuth";
import useAxiosSecure from "@/Components/Hooks/useAxiosSecure";
import Swal from "sweetalert2";

// import { Table, TableBody, TableCell, TableHead, TableRow } from "../ui/table";
const MyParcel = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: parcels = [] ,refetch} = useQuery({
    queryKey: ["parcels", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcel/${user?.email}`);
      return res.data;
    },
  });
  const handleDeleteParcel = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/parcel/item/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "User has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div className="my-20">
      <h2 className="text-center">My Parcels {parcels.length}</h2>
      <div>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-100 border-b">
                <th className="px-4 py-2 text-left">Parcel Type</th>
                <th className="px-4 py-2 text-left">Requested Date</th>
                <th className="px-4 py-2 text-right">Delivery Man</th>
                <th className="px-4 py-2 text-right">Status</th>
                <th className="px-4 py-2 text-right">Update</th>
                <th className="px-4 py-2 text-right"></th>
                <th className="px-4 py-2 text-right"></th>
              </tr>
            </thead>
            <tbody>
              {parcels.map((parcel) => (
                <tr key={parcel._id} className="border-b">
                  <td className="px-4 py-2">{parcel.parcelType}</td>
                  <td className="px-4 py-2">{parcel.requestedDeliveryDate}</td>
                  <td className="px-4 py-2 text-right">Id</td>
                  <td className="px-4 py-2 text-right">{parcel.status}</td>
                  <td className="px-4 py-2 text-right">
                    <Link to={`/dashboard/update/${parcel._id}`}>
                      <button>Update</button>
                    </Link>
                  </td>
                  <td className="px-4 py-2 text-right">
                    <button onClick={() => handleDeleteParcel(parcel._id)}>
                      delete
                    </button>
                  </td>
                  <td className="px-4 py-2 text-right">
                    <button><Link to="/dashboard/payment">Pay</Link></button>
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

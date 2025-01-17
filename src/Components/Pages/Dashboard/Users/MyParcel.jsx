import React from "react";

import { useQuery } from "@tanstack/react-query";

import { Link } from "react-router-dom";
import useAuth from "@/Components/Hooks/useAuth";
import useAxiosSecure from "@/Components/Hooks/useAxiosSecure";

// import { Table, TableBody, TableCell, TableHead, TableRow } from "../ui/table";
const MyParcel = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: parcels = [] } = useQuery({
    queryKey: ["parcels", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcel/${user?.email}`);
      return res.data;
    },
  });
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
                  <td className="px-4 py-2 text-right"><button>Update</button></td>
                  <td className="px-4 py-2 text-right"><button>delete</button></td>
                  <td className="px-4 py-2 text-right"><button>pay</button></td>
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

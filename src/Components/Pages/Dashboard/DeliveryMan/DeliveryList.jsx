import React, { useEffect, useState } from "react";
import useAxiosSecure from "@/Components/Hooks/useAxiosSecure";
import useAuth from "@/Components/Hooks/useAuth";
import { useLoaderData } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableRow } from "../../../ui/table";
const DeliveryList = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
 
  const { data: parcels = [], refetch } = useQuery({
    queryKey: ["parcels-delivery"],
    queryFn: async () => {
      const res = await axiosSecure.get("/parcels-delivery");
      console.log(res.data);
      return res.data;
    },
  });
  const filteredParcels = parcels.filter(
    (parcel) => parcel.deliveryManDetails.email === user?.email
  );
  console.log(filteredParcels);

  return (
    <div className="overflow-x-auto">
      <h2 className="text-lg font-semibold mb-4">Parcels Assigned to me</h2>
      <table className="min-w-full table-auto">
        <TableCaption>my assigned parcels.</TableCaption>
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Phone Number</th>
            <th className="px-4 py-2 text-left">Requested Delivery Date</th>
            <th className="px-4 py-2 text-left">Approximate  Delivery Date</th>
            <th className="px-4 py-2 text-left">Receiver Phone</th>
            <th className="px-4 py-2 text-left">Receiver Address</th>
            <th className="px-4 py-2 text-left">View Location</th>
            <th className="px-4 py-2 text-left"></th>
            <th className="px-4 py-2 text-left"></th>
          </tr>
        </thead>
        <tbody>
          {filteredParcels.length === 0 ? (
            <tr>
              <td colSpan={5} className="text-center px-4 py-2">
                No parcels assigned.
              </td>
            </tr>
          ) : (
            filteredParcels.map((parcel) => (
              <tr key={parcel._id}>
                <td className="px-4 py-2">{parcel.name}</td>
                <td className="px-4 py-2">{parcel.phoneNumber}</td>
                <td className="px-4 py-2">{parcel.requestedDeliveryDate}</td>
                <td className="px-4 py-2">{parcel.approximateDeliveryDate
                }</td>
                <td className="px-4 py-2">{parcel.receiverNumber}</td>
                <td className="px-4 py-2">{parcel.deliveryAddress}</td>
                <td className="px-4 py-2"><button>View Location</button></td>
                <td className="px-4 py-2"><button>Cancel</button></td>
                <td className="px-4 py-2"><button>Deliver</button></td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DeliveryList;

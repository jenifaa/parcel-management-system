import React, { useEffect, useState } from "react";
import useAxiosSecure from "@/Components/Hooks/useAxiosSecure";
import useAuth from "@/Components/Hooks/useAuth";
import { useLoaderData, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableRow,
} from "../../../ui/table";
// import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "mapbox-gl/dist/mapbox-gl.css";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const DeliveryList = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [selectedParcels, setSelectedParcels] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const { data: parcels = [], refetch } = useQuery({
    queryKey: ["parcels-delivery"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/deli-parcels/${user?.email}`);
      console.log(res.data);
      return res.data;
    },
  });

  const handleCancel = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to cancel this parcel?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, cancel it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const updatedDelivery = { status: "Cancelled" };
          const res = await axiosSecure.patch(
            `/parcel/delivery/${id}`,
            updatedDelivery
          );

          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              title: "Canceled!",
              text: "Parcel has been canceled successfully.",
              icon: "success",
            });
          } else {
            Swal.fire({
              title: "Error",
              text: "Could not cancel the parcel. Please try again.",
              icon: "error",
            });
          }
        } catch (error) {
          console.error("Error canceling parcel:", error);
          Swal.fire({
            title: "Error",
            text: "Could not cancel the parcel. Please try again.",
            icon: "error",
          });
        }
      }
    });
  };
  const handleDeliver = async (id, deliveryManId) => {
    console.log(deliveryManId);
    Swal.fire({
      title: "Are you sure?",
      text: "Parcel Delivery done?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const updatedDelivery = { status: "Delivered", deliveryManId };
          const res = await axiosSecure.patch(
            `/parcel/delivery/${id}`,
            updatedDelivery
          );

          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              title: "Delivered!",
              text: "Parcel has been delivered successfully.",
              icon: "success",
            });
          } else {
            Swal.fire({
              title: "Error",
              text: "Could not cancel the parcel. Please try again.",
              icon: "error",
            });
          }
        } catch (error) {
          console.error("Error canceling parcel:", error);
          Swal.fire({
            title: "Error",
            text: "Could not cancel the parcel. Please try again.",
            icon: "error",
          });
        }
      }
    });
  };
  const position = [51.505, -0.09];

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
            <th className="px-4 py-2 text-left">Approximate Delivery Date</th>
            <th className="px-4 py-2 text-left">Receiver Phone</th>
            <th className="px-4 py-2 text-left">Receiver Address</th>
            <th className="px-4 py-2 text-left">View Location</th>
            <th className="px-4 py-2 text-left"></th>
            <th className="px-4 py-2 text-left"></th>
          </tr>
        </thead>
        <tbody>
          {parcels.length === 0 ? (
            <tr>
              <td colSpan={5} className="text-center px-4 py-2">
                No parcels assigned.
              </td>
            </tr>
          ) : (
            parcels.map((parcel) => (
              <tr key={parcel._id}>
                <td className="px-4 py-2">{parcel.name}</td>
                <td className="px-4 py-2">{parcel.phoneNumber}</td>
                <td className="px-4 py-2">{parcel.requestedDeliveryDate}</td>
                <td className="px-4 py-2">{parcel.approximateDeliveryDate}</td>
                <td className="px-4 py-2">{parcel.receiverNumber}</td>
                <td className="px-4 py-2">{parcel.deliveryAddress}</td>
                <td className="px-4 py-2">
                  <button
                    className="text-blue-500 text-sm "
                    onClick={() => setModalOpen(true)}
                  >
                    View Location
                  </button>

                  {/* Modal */}
                  {modalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                      <div className="bg-white rounded-lg shadow-xl w-full sm:w-96 p-6">
                        <div className="flex justify-between items-center">
                          <h2 className="text-xl font-semibold">Location</h2>
                          <button
                            className="text-gray-500 text-2xl"
                            onClick={() => setModalOpen(false)}
                          >
                            &times;
                          </button>
                        </div>
                        {/* <MapContainer
                          center={position}
                          zoom={13}
                          scrollWheelZoom={false}
                        >
                          <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                          />
                          <Marker position={position}>
                            <Popup>
                              A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                          </Marker>
                        </MapContainer> */}

                        <div className="mt-6 flex justify-end">
                          <button
                            className="px-3 py-1 bg-red-500 text-white rounded-md"
                            onClick={() => setModalOpen(false)} // Close modal
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </td>
                <td className="px-4 py-2">
                  {parcel.status === "Cancelled" ||
                  parcel.status === "Delivered" ? (
                    <button
                      disabled
                      className="text-gray-500 text-sm cursor-not-allowed"
                    >
                      {parcel.status === "Cancelled" ? "Cancelled" : "Cancel"}
                    </button>
                  ) : (
                    <button
                      onClick={() => handleCancel(parcel._id)}
                      className="text-red-700 text-sm hover:text-red-800"
                    >
                      Cancel
                    </button>
                  )}
                </td>

                <td className="px-4 py-2">
                  {parcel.status === "Cancelled" ? (
                    <button
                      disabled
                      className="text-gray-500 text-sm cursor-not-allowed"
                    >
                      Cancelled
                    </button>
                  ) : parcel.status === "Delivered" ? (
                    <button
                      disabled
                      className="text-gray-500 text-sm cursor-not-allowed"
                    >
                      Delivered
                    </button>
                  ) : (
                    <button
                      onClick={() =>
                        handleDeliver(parcel._id, parcel.deliveryManId)
                      }
                      className="text-blue-700 text-sm hover:text-blue-800"
                    >
                      Deliver
                    </button>
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DeliveryList;

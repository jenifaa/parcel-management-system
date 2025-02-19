import useAxiosSecure from "@/Components/Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../ui/table";
import { Button } from "../../../ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../ui/select";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import { FaSearch } from "react-icons/fa";

const AllParcel = () => {
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [selectedDeliveryMan, setSelectedDeliveryMan] = useState(null);
  const [selectedParcel, setSelectedParcel] = useState(null);
  const [filteredParcels, setFilteredParcels] = useState([]);
  const [deliveryDate, setDeliveryDate] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const { data: paidData = [] } = useQuery({
    queryKey: ["paidData"],
    queryFn: async () => {
      const res = await axiosSecure.get("/payments");

      return res.data;
    },
  });

  const { data: parcels = [], refetch } = useQuery({
    queryKey: ["parcels"],
    queryFn: async () => {
      const res = await axiosSecure.get("/parcel");

      return res.data;
    },
  });
  const fetchFilteredParcels = async () => {
    if (!fromDate || !toDate) return;

    try {
      const isoFromDate = new Date(fromDate).toISOString();
      const isoToDate = new Date(toDate).toISOString();

      const res = await axiosSecure.get(
        `/parcels/all?fromDate=${isoFromDate}&toDate=${isoToDate}`
      );

      setFilteredParcels(res.data);
    } catch (error) {
      console.error("Error fetching parcels:", error);
    }
  };

  const handleSearch = () => {
    fetchFilteredParcels();
  };

  const { data: deliveryMan = [] } = useQuery({
    queryKey: ["deliveryMan"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users/deliveryMan");

      return res.data;
    },
  });

  const getCostForParcel = (parcelId) => {
    const payment = paidData.find((payment) => payment.parcelId === parcelId);
    return payment ? payment.price : "Not Paid";
  };

  const handleUpdateStatus = async () => {
    if (!selectedDeliveryMan || !selectedParcel || !deliveryDate) {
      Swal.fire({
        title: "Fill Up The Form",
        text: "Please select a deliveryman, parcel, and approximate delivery date.",
        icon: "error",
      });

      return;
    }

    try {
      const updatedParcel = {
        status: "On The Way",
        deliveryManId: selectedDeliveryMan,
        approximateDeliveryDate: deliveryDate,
      };

      const res = await axiosSecure.put(
        `/managing/${selectedParcel._id}`,
        updatedParcel
      );

      if (res.data.modifiedCount > 0) {
        refetch();
        toast.success("Updated");
      }
    } catch (error) {
      console.error("Error updating parcel:", error);
    }
  };
  return (
    <div className="py-9 px-10">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="light"
      ></ToastContainer>
      <div className="flex justify-between items-center   mb-10 mt-5">
        <h2 className="text-5xl font font-bold ">All Parcel</h2>

        <div className="flex items-center gap-2 mb-5">
          <input
            type="date"
            className="p-2 border-2 rounded text-black"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
          />
          <input
            type="date"
            className="p-2 border-2 rounded text-black"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="bg-gray-800 text-white px-4 py-2"
          >
            Search
          </button>
        </div>
      </div>

      {/* <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-200">
          <caption className="caption-top text-lg font-semibold mb-4">
            A list of all parcels.
          </caption>
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border border-gray-200 text-left">
                Name
              </th>
              <th className="px-4 py-2 border border-gray-200 text-left">
                Phone Number
              </th>
              <th className="px-4 py-2 border border-gray-200 text-left">
                Booked Date
              </th>
              <th className="px-4 py-2 border border-gray-200 text-left">
                Requested Delivery Date
              </th>
              <th className="px-4 py-2 border border-gray-200 text-left">
                Cost
              </th>
              <th className="px-4 py-2 border border-gray-200 text-left">
                Status
              </th>
              <th className="px-4 py-2 border border-gray-200 text-left">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((parcel) => (
              <tr key={parcel._id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border border-gray-200">
                  {parcel.name}
                </td>
                <td className="px-4 py-2 border border-gray-200">
                  {parcel.phoneNumber}
                </td>
                <td className="px-4 py-2 border border-gray-200">
                  {new Date(parcel.BookingDate).toLocaleDateString()}
                </td>
                <td className="px-4 py-2 border border-gray-200">
                  {parcel.requestedDeliveryDate}
                </td>
                <td className="px-4 py-2 border border-gray-200">
                  {getCostForParcel(parcel._id)}
                </td>
                <td className="px-4 py-2 border border-gray-200">
                  <span className="text-sm font-semibold">{parcel.status}</span>
                </td>
                <td className="px-4 py-2 border border-gray-200">
                  <Dialog>
                    <DialogTrigger asChild>
                      <button
                        onClick={() => setSelectedParcel(parcel)}
                        className="text-blue-600 underline"
                      >
                        Manage
                      </button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Assign Delivery</DialogTitle>
                      </DialogHeader>
                      <div className="py-4">
                        <div className="mb-4">
                          <Select
                            onValueChange={(value) =>
                              setSelectedDeliveryMan(value)
                            }
                          >
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select a deliveryman" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                {deliveryMan.map((delivery) => (
                                  <SelectItem
                                    key={delivery._id}
                                    value={delivery._id}
                                  >
                                    {delivery.name}
                                  </SelectItem>
                                ))}
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="mb-4">
                          <input
                            type="date"
                            className="w-full h-9 border rounded px-2"
                            value={deliveryDate}
                            onChange={(e) => setDeliveryDate(e.target.value)}
                          />
                        </div>
                      </div>
                      <DialogFooter>
                        <button
                          onClick={handleUpdateStatus}
                          className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800"
                        >
                          Assign
                        </button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {parcels.map((parcel) => (
    <div
      key={parcel._id}
      className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 transition hover:shadow-2xl"
    >
      <h3 className="text-xl font-bold text-gray-800 flex items-center">
        📦 {parcel.name}
      </h3>
      <p className="text-gray-600 mt-2">
        📞 <strong>Phone:</strong> {parcel.phoneNumber}
      </p>
      <p className="text-gray-600">
        📅 <strong>Booked Date:</strong>{" "}
        {new Date(parcel.BookingDate).toLocaleDateString()}
      </p>
      <p className="text-gray-600">
        ⏳ <strong>Requested Delivery:</strong> {parcel.requestedDeliveryDate}
      </p>
      <p className="text-gray-700 font-semibold">
        💰 <strong>Cost:</strong> ${getCostForParcel(parcel._id)}
      </p>
      <p
        className={`font-semibold text-lg mt-2 ${
          parcel.status === "Pending"
            ? "text-yellow-500"
            : parcel.status === "Delivered"
            ? "text-green-500"
            : "text-blue-500"
        }`}
      >
        🚚 <strong>Status:</strong> {parcel.status}
      </p>

      <Dialog>
        <DialogTrigger asChild>
          <Button
            onClick={() => setSelectedParcel(parcel)}
            className="mt-4 flex items-center justify-center bg-blue-600 text-white hover:bg-blue-700 px-5 py-2 rounded-lg shadow-md transition"
          >
            ⚙️ Manage
          </Button>
        </DialogTrigger>
        <DialogContent className="bg-white">
          <DialogHeader>
            <DialogTitle className="text-lg font-semibold">
              🏷️ Assign Delivery
            </DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <div className="mb-4">
              <Select onValueChange={(value) => setSelectedDeliveryMan(value)}>
                <SelectTrigger className="w-full border border-gray-300 rounded-md px-3 py-2">
                  <SelectValue placeholder="Select a deliveryman" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectGroup>
                    {deliveryMan.map((delivery) => (
                      <SelectItem key={delivery._id} value={delivery._id}>
                        🚴 {delivery.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="mb-4">
              <input
                type="date"
                className="w-full h-10 border border-gray-300 rounded-md px-3"
                value={deliveryDate}
                onChange={(e) => setDeliveryDate(e.target.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              onClick={handleUpdateStatus}
              className="w-full bg-green-600 text-white hover:bg-green-700 px-4 py-2 rounded-lg shadow-md transition"
            >
              ✅ Assign Delivery
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  ))}
</div>

    </div>
  );
};

export default AllParcel;

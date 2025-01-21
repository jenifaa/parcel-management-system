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
      // console.log(res.data);
      return res.data;
    },
  });

  const { data: parcels = [], refetch } = useQuery({
    queryKey: ["parcels"],
    queryFn: async () => {
      const res = await axiosSecure.get("/parcel");
      // console.log(res.data);
      return res.data;
    },
  });
  const fetchFilteredParcels = async () => {
    if (!fromDate || !toDate) return;

    try {
      const isoFromDate = new Date(fromDate).toISOString();
      const isoToDate = new Date(toDate).toISOString();
      console.log("Formatted From Date:", isoFromDate);
      console.log("Formatted To Date:", isoToDate);

      const res = await axiosSecure.get(
        `/parcel?fromDate=${isoFromDate}&toDate=${isoToDate}`
      );
      console.log(res.data);
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
        `/parcel/${selectedParcel._id}`,
        updatedParcel
      );
      console.log(res.data);
      console.log(updatedParcel);
      if (res.data.modifiedCount > 0) {
        toast.success("Updated");
        refetch();
      }
    } catch (error) {
      console.error("Error updating parcel:", error);
    }
  };

  return (
    <div>
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
      <div className="flex justify-between items-center  mb-10 mt-5">
        <h2 className="text-3xl font-bold ">All Parcel</h2>

        <div className="flex items-center gap-2 mb-5">
          <input
            type="date"
            className="p-2 border-2 rounded"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
          />
          <input
            type="date"
            className="p-2 border-2 rounded"
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
      {/* <Table>
        <TableCaption>A list of all parcels.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Phone Number</TableHead>
            <TableHead>Booked Date</TableHead>
            <TableHead>Requested delivery Date</TableHead>
            <TableHead>cost</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {parcels.map((parcel) => (
            <TableRow key={parcel._id}>
              <TableCell>{parcel.name}</TableCell>
              <TableCell>{parcel.phoneNumber}</TableCell>
              <TableCell>{parcel.BookingDate}</TableCell>
              <TableCell>{parcel.requestedDeliveryDate}</TableCell>
              <TableCell>cost</TableCell>
              <TableCell>
                <span className="text-sm font-semibold">{parcel.status}</span>
              </TableCell>
              <TableCell>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      onClick={() => setSelectedParcel(parcel)}
                    >
                      <span className="text-blue-600"> Manage</span>
                    </Button>
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
                      <Button
                        onClick={handleUpdateStatus}
                        className="bg-green-700 text-white"
                      >
                        Assign
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table> */}
      <div className="overflow-x-auto">
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
      </div>
    </div>
  );
};

export default AllParcel;

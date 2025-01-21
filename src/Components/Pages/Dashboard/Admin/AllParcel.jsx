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

  // handle search button click
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
          <button  onClick={handleSearch} className="bg-gray-800 text-white px-4 py-2">
            Search
          </button>
        </div>
      </div>
      <Table>
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
      </Table>
    </div>
  );
};

export default AllParcel;

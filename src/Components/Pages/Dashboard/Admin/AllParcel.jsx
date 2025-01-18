import useAxiosSecure from "@/Components/Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
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

const AllParcel = () => {
  const axiosSecure = useAxiosSecure();
  const [selectedDeliveryMan, setSelectedDeliveryMan] = useState(null);
  const [selectedParcel, setSelectedParcel] = useState(null);
  const [deliveryDate, setDeliveryDate] = useState("");

  const { data: parcels = [], refetch } = useQuery({
    queryKey: ["parcels"],
    queryFn: async () => {
      const res = await axiosSecure.get("/parcel");
      return res.data;
    },
  });

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

      await axiosSecure.put(`/parcel/${selectedParcel._id}`, updatedParcel);
      Swal.fire({
        title: "Updated!!",
        text: "DeliveryMan And status Updated successfully",
        icon: "success",
      });
      refetch();
    } catch (error) {
      console.error("Error updating parcel:", error);
      
    }
  };

  return (
    <div>
      <Table>
        <TableCaption>A list of all parcels.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Phone Number</TableHead>
            <TableHead>Booked Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {parcels.map((parcel) => (
            <TableRow key={parcel._id}>
              <TableCell>{parcel.name}</TableCell>
              <TableCell>{parcel.phoneNumber}</TableCell>
              <TableCell>{parcel.requestedDeliveryDate}</TableCell>
              <TableCell>{parcel.status}</TableCell>
              <TableCell>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      onClick={() => setSelectedParcel(parcel)}
                    >
                      Manage
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

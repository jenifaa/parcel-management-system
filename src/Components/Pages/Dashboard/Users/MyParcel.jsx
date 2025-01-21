import React, { useEffect, useState } from "react";
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
import { Button } from "../../../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../ui/dialog";
import { Input } from "../../../ui/input";
import { Label } from "../../../ui/label";
import { toast, ToastContainer } from "react-toastify";

const MyParcel = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");

  const [userName, setUserName] = useState(user?.displayName || "");
  const [deliveryManId, setDeliveryManId] = useState("");

  const { data: parcels = [], refetch } = useQuery({
    queryKey: ["parcels", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcel/${user?.email}`);
      return res.data;
    },
  });
  const { data: paidData = [] } = useQuery({
    queryKey: ["paidData", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user?.email}`);
      console.log(res.data);
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
          .delete(`/parcel/cancel/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
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
  const isPaid = (parcelId) =>
    paidData.some((payment) => payment.parcelId === parcelId);
  useEffect(() => {
    parcels.map((parcel) => {
      setDeliveryManId(parcel.deliveryManId);
    });
  }, [parcels]);
  const handleReview = async () => {
    const reviewData = {
      userName,
      review,
      rating,
      deliveryManId,
      userPhoto: user?.photoURL,
    };
    const res = await axiosSecure.post('/reviews',reviewData)
    if(res.data.insertedId){
      toast.success("Review Sent")
      refetch()

    }
    console.log(res.data);
    console.log(reviewData);
  };

  return (
    <div className="mb-20">
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
      <div className="flex justify-between items-center mb-8">
        <h2 className="font-bold text-3xl">
          My Parcels: {filteredParcels.length}
        </h2>
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
                <th className="px-4 py-2 text-left">
                  Approximate Delivery Date
                </th>
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
                  <td className="px-4 py-2">
                    {parcel.approximateDeliveryDate}
                  </td>
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
                      <Dialog>
                        <DialogTrigger asChild>
                          {/* <Button variant="outline">Review</Button> */}
                          <button className="text-green-700 font-bold text-sm">
                            Review
                          </button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                          <DialogHeader>
                            <DialogTitle>Give Review!!</DialogTitle>
                            <DialogDescription>
                              Write your experience here...
                            </DialogDescription>
                          </DialogHeader>
                          <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="name" className="text-right">
                                Users Name
                              </Label>
                              <Input
                                id="name"
                                defaultValue={user?.displayName}
                                className="col-span-3"
                              />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label className="text-right">Users Photo</Label>
                              <img src={user?.photoURL} alt="" />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="rating" className="text-right">
                                Rating
                              </Label>
                              <Input
                                id="rating"
                                placeholder="Rate Out of 5"
                                className="col-span-3"
                                onChange={(e) => setRating(e.target.value)}
                              />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="feedback" className="text-right">
                                Feedback
                              </Label>
                              <Input
                                id="feedback"
                                className="col-span-3"
                                onChange={(e) => setReview(e.target.value)}
                              />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label
                                htmlFor="deliveryId"
                                className="text-right"
                              >
                                DeliveryMan Id
                              </Label>
                              <Input
                                id="deliveryId"
                                // defaultValue={parcel.deliveryManId}
                                value={deliveryManId}
                                readOnly
                                className="col-span-3"
                                // onChange={(e) => {
                                //   setDeliveryManId(e.target.value);
                                // }}
                              />
                            </div>
                          </div>
                          <DialogFooter>
                            <Button onClick={handleReview} type="submit">
                              Send
                            </Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
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
                    {parcel.status === "Canceled" || isPaid(parcel._id) ? (
                      <button
                        className="font-bold text-gray-500 cursor-not-allowed"
                        disabled
                      >
                        Paid
                      </button>
                    ) : (
                      <button className="font-bold">
                        <Link to={`/dashboard/payment/${parcel._id}`}>Pay</Link>
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

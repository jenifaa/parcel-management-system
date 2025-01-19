import useAuth from "@/Components/Hooks/useAuth";
import useAxiosPublic from "@/Components/Hooks/useAxiosPublic";
import useAxiosSecure from "@/Components/Hooks/useAxiosSecure";
import React from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateBooking = () => {
  const {
    phoneNumber,
    parcelType,
    parcelWeight,
    receiverName,
    receiverNumber,
    deliveryAddress,
    requestedDeliveryDate,
    addressLatitude,
    addressLongitude,
    price,
    _id,
  } = useLoaderData();

  const { user } = useAuth();
  const { register, handleSubmit, reset, watch } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const weight = watch("parcelWeight");
  
  const calculatedPrice = (parcelWeight) => {
    if (parcelWeight <= 1) {
      return 50;
    }
    if (parcelWeight > 1 && parcelWeight <= 2) {
      return 100;
    }
    if (parcelWeight > 2) {
      return 150;
    }
  };

  const dynamicPrice = weight ? calculatedPrice(parseFloat(weight)) : price;

  const onSubmit = async (data) => {
    const price = calculatedPrice(parseFloat(data.parcelWeight));
    try {
      const parcel = {
        name: data.name,
        email: data.email,
        phoneNumber: data.phoneNumber,
        parcelType: data.parcelType,
        parcelWeight: parseFloat(data.parcelWeight),
        receiverName: data.receiverName,
        receiverNumber: data.receiverNumber,
        deliveryAddress: data.deliveryAddress,
        requestedDeliveryDate: data.requestedDeliveryDate,
        addressLatitude: parseFloat(data.addressLatitude),
        addressLongitude: parseFloat(data.addressLongitude),
        price: price,
      };

      const parcelItem = await axiosSecure.patch(`/parcel/item/${_id}`, parcel);

      if (parcelItem.data.modifiedCount > 0) {
        reset();
        Swal.fire({
          title: "Good job!",
          text: "Item Updated",
          icon: "success",
        });
      }
    } catch (error) {
      console.error("Error in submission:", error);
      Swal.fire({
        title: "Error",
        text: "There was an error submitting your data.",
        icon: "error",
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <h2 className="text-3xl font2 text-green-700 font-bold text-center">Update Your Parcel Booking</h2>
        
        {/* User Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-sm font-medium">Name</h2>
            <input
              type="text"
              {...register("name")}
              className="w-full h-12 px-4 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={user?.displayName}
              readOnly
            />
          </div>
          <div>
            <h2 className="text-sm font-medium">Email</h2>
            <input
              type="text"
              {...register("email")}
              className="w-full h-12 px-4 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={user?.email}
              readOnly
            />
          </div>
        </div>

        {/* Phone and Parcel Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-sm font-medium">Phone Number*</h2>
            <input
              type="number"
              className="w-full h-12 px-4 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              defaultValue={phoneNumber}
              {...register("phoneNumber", { required: true })}
            />
          </div>
          <div>
            <h2 className="text-sm font-medium">Parcel Type*</h2>
            <input
              type="text"
              defaultValue={parcelType}
              {...register("parcelType", { required: true })}
              className="w-full h-12 px-4 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Weight and Receiver Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-sm font-medium">Parcel Weight*</h2>
            <input
              type="number"
              defaultValue={parcelWeight}
              className="w-full h-12 px-4 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              step="any"
              {...register("parcelWeight", { required: true })}
            />
          </div>
          <div>
            <h2 className="text-sm font-medium">Receiver Name*</h2>
            <input
              type="text"
              defaultValue={receiverName}
              className="w-full h-12 px-4 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("receiverName", { required: true })}
            />
          </div>
        </div>

        {/* Receiver Number and Delivery Address */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-sm font-medium">Receiver Number*</h2>
            <input
              type="number"
              defaultValue={receiverNumber}
              className="w-full h-12 px-4 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("receiverNumber", { required: true })}
            />
          </div>
          <div>
            <h2 className="text-sm font-medium">Parcel Delivery Address*</h2>
            <input
              type="text"
              defaultValue={deliveryAddress}
              className="w-full h-12 px-4 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("deliveryAddress", { required: true })}
            />
          </div>
        </div>

        {/* Date, Price, and Coordinates */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-sm font-medium">Requested Delivery Date*</h2>
            <input
              type="date"
              defaultValue={requestedDeliveryDate}
              className="w-full h-12 px-4 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("requestedDeliveryDate", { required: true })}
            />
          </div>
          <div>
            <h2 className="text-sm font-medium">Price*</h2>
            <input
              type="number"
              value={dynamicPrice}
              className="w-full h-12 px-4 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              readOnly
            />
          </div>
        </div>

        {/* Latitude and Longitude */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-sm font-medium">Delivery Address Latitude*</h2>
            <input
              type="text"
              defaultValue={addressLatitude}
              className="w-full h-12 px-4 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("addressLatitude", { required: true })}
            />
          </div>
          <div>
            <h2 className="text-sm font-medium">Delivery Address Longitude*</h2>
            <input
              type="text"
              defaultValue={addressLongitude}
              className="w-full h-12 px-4 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("addressLongitude", { required: true })}
            />
          </div>
        </div>

        <div className="flex justify-center">
          <input
            className="w-60 h-12 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-all cursor-pointer"
            type="submit"
            value="Update Booking"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateBooking;

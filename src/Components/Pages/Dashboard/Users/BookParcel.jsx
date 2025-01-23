import useAuth from "@/Components/Hooks/useAuth";
import useAxiosPublic from "@/Components/Hooks/useAxiosPublic";
import useAxiosSecure from "@/Components/Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const BookParcel = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset, watch } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const parcelWeight = watch("parcelWeight");
  const [phoneNumber, setPhoneNumber] = useState('');
  const { data: users = [] } = useQuery({
    queryKey: [user?.email, "users"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/find/${user?.email}`);
      console.log(res.data);
      console.log(users);
      return res.data;
    },
    // onSuccess: (data) => { // Update state in success callback
    //   setPhoneNumber(data?.phoneNumber || '');
    // },
  });
  
//  console.log(users.phoneNumber);
  const calculatedPrice = (parcelWeight) => {
    if (parcelWeight <= 1) return 50;
    if (parcelWeight > 1 && parcelWeight <= 2) return 100;
    if (parcelWeight > 2) return 150;
  };

  const dynamicPrice = parcelWeight
    ? calculatedPrice(parseFloat(parcelWeight))
    : 0;

  const onSubmit = async (data) => {
    const price = calculatedPrice(parseFloat(data.parcelWeight));
    try {
      const parcel = {
        name: data.name,
        email: data.email,
        phoneNumber: data.phoneNumber,
        parcelType: data.type,
        parcelWeight: parseFloat(data.parcelWeight),
        receiverName: data.receiverName,
        receiverNumber: data.receiverNumber,
        deliveryAddress: data.deliveryAddress,
        requestedDeliveryDate: data.requestedDeliveryDate,
        addressLatitude: parseFloat(data.addressLatitude),
        addressLongitude: parseFloat(data.addressLongitude),
        price: price,
        status: "Pending",
        BookingDate: new Date(),
      };

      const parcelItem = await axiosSecure.post("/parcel", parcel);

      if (parcelItem.data.insertedId) {
        reset();
        Swal.fire({
          title: "Good job!",
          text: "Parcel Booked Successfully",
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "Error",
          text: "Something went wrong. Please try again.",
          icon: "error",
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
    <div className="lg:px-10 px-2 bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-10">
        <h2 className="text-4xl font-semibold text-green-800 mb-8 text-center">
          Book A Parcel
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <h3 className="text-2xl font-medium text-gray-700">
            Book Your Parcel Here
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Name
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                className="w-full h-12 px-4 border rounded-md shadow-sm"
                value={user?.displayName}
                readOnly
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                type="text"
                {...register("email", { required: true })}
                className="w-full h-12 px-4 border rounded-md shadow-sm"
                value={user?.email}
                readOnly
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Phone Number
              </label>
              <input
                type="number"
                // value={phoneNumber}
                // onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full h-12 px-4 border rounded-md shadow-sm"
                placeholder="Enter Your Phone Number"
                {...register("phoneNumber", { required: true })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Parcel Type
              </label>
              <input
                {...register("type", { required: true })}
                className="w-full h-12 px-4 border rounded-md shadow-sm"
                placeholder="Parcel Type"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Parcel Weight
              </label>
              <input
                type="number"
                step="any"
                className="w-full h-12 px-4 border rounded-md shadow-sm"
                placeholder="Parcel Weight"
                {...register("parcelWeight", { required: true })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Receiver Name
              </label>
              <input
                type="text"
                className="w-full h-12 px-4 border rounded-md shadow-sm"
                {...register("receiverName", { required: true })}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Receiver Number
              </label>
              <input
                type="number"
                className="w-full h-12 px-4 border rounded-md shadow-sm"
                placeholder="Receiver Number"
                {...register("receiverNumber", { required: true })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Delivery Address
              </label>
              <input
                type="text"
                className="w-full h-12 px-4 border rounded-md shadow-sm"
                {...register("deliveryAddress", { required: true })}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Requested Delivery Date
              </label>
              <input
                type="date"
                className="w-full h-12 px-4 border rounded-md shadow-sm"
                {...register("requestedDeliveryDate", { required: true })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Price
              </label>
              <input
                type="number"
                value={dynamicPrice}
                className="w-full h-12 px-4 border rounded-md shadow-sm"
                {...register("price", { required: true })}
                readOnly
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Latitude
              </label>
              <input
                type="text"
                className="w-full h-12 px-4 border rounded-md shadow-sm"
                {...register("addressLatitude", { required: true })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Longitude
              </label>
              <input
                type="text"
                className="w-full h-12 px-4 border rounded-md shadow-sm"
                {...register("addressLongitude", { required: true })}
              />
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <input
              className="w-40 py-3 bg-green-700 text-white font-semibold rounded-md transition duration-300 transform hover:bg-green-600 hover:scale-105"
              type="submit"
              value="Book Parcel"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookParcel;

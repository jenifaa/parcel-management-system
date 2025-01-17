import useAuth from "@/Components/Hooks/useAuth";
import useAxiosPublic from "@/Components/Hooks/useAxiosPublic";
import useAxiosSecure from "@/Components/Hooks/useAxiosSecure";
import React from "react";

import { useForm } from "react-hook-form";

import Swal from "sweetalert2";

const BookParcel = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset, watch } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const parcelWeight = watch("parcelWeight");
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
  const dynamicPrice = parcelWeight ? calculatedPrice(parseFloat(parcelWeight)) : 0;
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
          status: 'Pending'
        };
  
       
        const parcelItem = await axiosSecure.post("/parcel", parcel);
  
        
        if (parcelItem.data.insertedId) {
          reset();
          console.log(parcelItem);
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
    }
  

  return (
    <div className="my-20 px-44">
      <h2 className="text-center text-3xl">Book A parcel</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Book Your Parcel Here</h2>
        <div className="flex gap-10 items-center my-5">
          <div>
            <h2>Name</h2>
            <input
              type="text"
              {...register("name", { required: true })}
              className="w-72 h-10 px-6 rounded-md border-2 "
              value={user?.displayName}
              readOnly
            />
          </div>
          <div>
            <h2>Email</h2>
            <input
              type="text"
              {...register("email", { required: true })}
              className="w-72 h-10 px-6 rounded-md border-2 "
              value={user?.email}
              readOnly
            />
          </div>
        </div>
        <div className="flex gap-10 items-center my-5">
          <div>
            <h2>Phone Number*</h2>
            <input
              type="number"
              className="w-72 h-10 px-6 rounded-md border-2 "
              placeholder="Enter Your Phone Number"
              {...register("phoneNumber", { required: true })}
            />
          </div>
          <div>
            <h2>Parcel Type*</h2>

            <input
              {...register("type", { required: true })}
              className="w-72 h-10 px-6 rounded-md border-2 "
              placeholder="Write Parcel Type here"
            ></input>
          </div>
        </div>
        <div className="flex gap-10 items-center my-5">
          <div>
            <h2>Parcel Weight*</h2>
            <input
              type="number"
              className="w-72 h-10 px-6 rounded-md border-2 "
              placeholder="Write Parcel Weight"
              step="any"
              {...register("parcelWeight", { required: true })}
            />
          </div>
          <div>
            <h2>Receiver Name*</h2>
            <input
              type="text"
              className="w-72 h-10 px-6 rounded-md border-2 "
              {...register("receiverName", { required: true })}
            />
          </div>
        </div>
        <div className="flex gap-10 items-center my-5">
          <div>
            <h2>Receiver Number*</h2>
            <input
              type="number"
              className="w-72 h-10 px-6 rounded-md border-2 "
              placeholder="Enter Receiver Number"
              {...register("receiverNumber", { required: true })}
            />
          </div>
          <div>
            <h2>Parcel Delivery Address*</h2>
            <input
              type="text"
              className="w-72 h-10 px-6 rounded-md border-2 "
              {...register("deliveryAddress", { required: true })}
            />
          </div>
        </div>
        <div className="flex gap-10 items-center my-5">
          <div>
            <h2>requested Delivery date*</h2>
            <input
              type="date"
              className="w-72 h-10 px-6 rounded-md border-2 "
              {...register("requestedDeliveryDate", { required: true })}
            />
          </div>
          <div>
            <h2>Price*</h2>

            <input
              type="number"
              value={dynamicPrice}
              className="w-72 h-10 px-6 rounded-md border-2"
              {...register("price", { required: true })}
              readOnly
            />
          </div>
        </div>
        <div className="flex gap-10 items-center my-5">
          <div>
            <h2> Delivery Address Latitude*</h2>
            <input
              type="text"
              className="w-72 h-10 px-6 rounded-md border-2 "
              {...register("addressLatitude", { required: true })}
            />
          </div>
          <div>
            <h2> Delivery Address Longitude*</h2>
            <input
              type="text"
              className="w-72 h-10 px-6 rounded-md border-2 "
              {...register("addressLongitude", { required: true })}
            />
          </div>
        </div>

        <input
          className="w-60 border-2 py-3  px-5"
          type="submit"
          value="Book"
        />
      </form>
    </div>
  );
};

export default BookParcel;

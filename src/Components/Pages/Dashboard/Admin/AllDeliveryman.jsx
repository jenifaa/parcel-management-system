import useAxiosSecure from "@/Components/Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../ui/table";
import { FaSearch } from "react-icons/fa";
const AllDeliveryman = () => {
  const axiosSecure = useAxiosSecure();
 
  const { data: parcels = [] } = useQuery({
    queryKey: ["parcels"],
    queryFn: async () => {
      const res = await axiosSecure.get("/parcel");
    
      return res.data;
    },
  });

  const {
    data: deliveryMenData,
    isLoading: isLoadingDeliveryMen,
    error: deliveryManError,
  } = useQuery({
    queryKey: ["deliveryMen"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users/deliveryMan");
   
      return res.data;
    },
  });


  const {
    data: reviewsData,
    isLoading: isLoadingReviews,
    error: reviewsError,
  } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axiosSecure.get("/reviews");
   
      return res.data;
    },
  });
  const [deliveryMenWithReviews, setDeliveryMenWithReviews] = useState([]);

 

  useEffect(() => {
    if (parcels && deliveryMenData && reviewsData) {
      const processedDeliveryMen = deliveryMenData.map((deliveryMan) => {
        const deliveredParcels = parcels.filter(
          (parcel) => parcel.status === 'Delivered' && parcel.deliveryManId === deliveryMan._id
        ).length;

        const reviews = reviewsData.filter(
          (review) => review.deliveryManEmail === deliveryMan.email
        );

        const totalRating = reviews.reduce(
          (acc, review) => acc + review.rating,
          0
        );
       

        return {
          ...deliveryMan,
          deliveredParcels,
          reviewCount: reviews.length,
        
        };
      });
      setDeliveryMenWithReviews(processedDeliveryMen);
    }
  }, [parcels, deliveryMenData, reviewsData]);

  if (isLoadingDeliveryMen || isLoadingReviews) {
    return <div>Loading...</div>;
  }

  if (deliveryManError || reviewsError) {
    return <div>Error loading data.</div>;
  }

  return (
    <div>
      <h2 className="text-3xl font-bold my-5 text-center">All Delivery Men</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-200 text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 border border-gray-300">Name</th>
              <th className="px-4 py-2 border border-gray-300">Phone Number</th>
              <th className="px-4 py-2 border border-gray-300">
                Total Delivered parcel
              </th>
              <th className="px-4 py-2 border border-gray-300">Total Review</th>
            </tr>
          </thead>

          <tbody>
            {deliveryMenWithReviews.map((deliveryMan) => (
              <tr key={deliveryMan._id}>
                <td className="px-4 py-2 border border-gray-300">
                  {deliveryMan.name}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {deliveryMan.phoneNumber}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {deliveryMan.deliveredParcels}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {deliveryMan.reviewCount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllDeliveryman;

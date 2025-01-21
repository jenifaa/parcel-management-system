import useAxiosSecure from "@/Components/Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const MyReviews = () => {
  const axiosSecure = useAxiosSecure();

  const { data: reviews = [], refetch, isLoading: isLoadingReviews, isError: isErrorReviews } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axiosSecure.get("/reviews");
      return res.data;
    },
  });

  const { data: users = [], isLoading: isLoadingUsers, isError: isErrorUsers } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  // Show loading indicator if data is still loading
  if (isLoadingReviews || isLoadingUsers) {
    return <div>Loading...</div>;
  }

  // Handle errors in the API calls
  if (isErrorReviews || isErrorUsers) {
    return <div>Error loading data!</div>;
  }

//   const matched = users.filter((user) => user.type === "deliveryMan");
//   console.log("Matched delivery men:", matched);

  // Filter reviews by deliveryManId matching _id from users
  const parcelsForDeliveryMen = reviews.filter((review) =>
    users.find((deliveryMan) => deliveryMan._id === review.deliveryManId)
  );

  console.log("Filtered reviews for delivery men:", parcelsForDeliveryMen);

  return (
    <div>
      <h2 className="text-4xl font-bold">My Reviews</h2>
      <ul>
        {parcelsForDeliveryMen.map((review) => (
          <li key={review._id}>{review.review} (Delivery Man ID: {review.deliveryManId})</li>
        ))}
      </ul>
    </div>
  );
};

export default MyReviews;

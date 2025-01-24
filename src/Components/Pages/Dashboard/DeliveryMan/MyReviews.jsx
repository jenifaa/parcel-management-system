import useAuth from "@/Components/Hooks/useAuth";
import useAxiosSecure from "@/Components/Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
// import StarRatingComponent from "react-rating-stars-component";
const MyReviews = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const {
    data: reviews = [],
    refetch,
    isLoading: isLoadingReviews,
    isError: isErrorReviews,
  } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/reviews/${user?.email}`);
    
      return res.data;
    },
  });

 

  return (
    <div>
      <h2 className="text-4xl font-bold">My Reviews</h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 my-10">
        {reviews.map((review) => (
          <div
            key={review._id}
            className="bg-white shadow-md rounded-lg p-4 mb-6 border border-gray-200 h-52 flex flex-col"
          >
            <div className="flex items-center gap-10">
              <img className="w-20 h-20 object-cover" src={review.userPhoto} />

              {/* User Details */}
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  {review.userName}
                </h2>
                <p className="text-xs text-gray-500 font-semibold">
                  {new Date(review.date).toLocaleDateString()}
                </p>
                <p className="text-yellow-500 font-medium">
                  ⭐ {review.rating} / 5
                </p>
                {/* <StarRatingComponent
                  value={review.rating} // Pass the rating value
                  starColor="#facc15" // Gold stars
                  emptyStarColor="#e5e7eb" // Gray empty stars
                  editing={false} // Prevents changing the rating
                /> */}
              </div>
            </div>

            <p className="text-gray-700 text-sm mt-4 line-clamp-3 overflow-hidden font-bold">
              {review.review}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyReviews;

import React, { useState } from "react";

const CustomerReview = () => {
  const [sortOption, setSortOption] = useState("Most Recent");

  const reviews = [
    {
      name: "John Doe",
      avatar: "https://i.ibb.co.com/s5Ljcfw/business.png",
      rating: 5,
      text: "The service is excellent. My parcel arrived on time and in perfect condition. The tracking feature helped me stay updated every step of the way.",
      date: "January 12, 2025",
    },
    {
      name: "Jane Smith",
      avatar: "https://i.ibb.co.com/pwQqGVv/counsilor15.jpg",
      rating: 4,
      text: "Good experience overall, but I wish the delivery time was a bit quicker.",
      date: "January 5, 2025",
    },
    {
      name: "Samuel Brown",
      avatar: "https://i.ibb.co.com/yW52Kk8/counsilor16.jpg",
      rating: 5,
      text: "Very reliable. The parcel management system is intuitive and easy to use!",
      date: "December 25, 2024",
    },
    {
      name: 'Emily White',
      avatar: 'https://i.ibb.co.com/bFBGkH9/counsilor5.jpg',
      rating: 5,
      text: "Absolutely loved the experience! The app made tracking my parcel so easy, and I never had to worry about any delays.",
      date: 'January 20, 2025',
    },
  ];

 
  const sortedReviews = reviews.sort((a, b) => {
    switch (sortOption) {
      case "Most Recent":
        return new Date(b.date) - new Date(a.date);
      case "Highest Rating":
        return b.rating - a.rating; 
      case "Most Helpful":
       
        return a.text.localeCompare(b.text);
      default:
        return 0;
    }
  });

  return (
    <div>
      <section className="customer-reviews py-10 font bg-gray-50">
        <div className="container mx-auto text-center">
          <p className="text-sm font-bold text-blue-500 mb-3">
            Meet our customers---
          </p>
          <h2 className="text-5xl font-bold mb-8">
            Our Customers
          </h2>

          {/* Filter & Sort Options */}
          <div className="mb-8">
            <label htmlFor="sort-reviews" className="mr-4">
              Sort by:
            </label>
            <select
              id="sort-reviews"
              className="py-2 px-4 border rounded-lg"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option>Most Recent</option>
              <option>Highest Rating</option>
              <option>Most Helpful</option>
            </select>
          </div>

          {/* Review Cards */}
          <div className="w-11/12 mx-auto review-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 flex-wrap justify-center">
            {sortedReviews.map((review, index) => (
              <div
                key={index}
                className="review-card bg-white shadow-lg rounded-lg p-6 mb-6 w-80"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={review.avatar}
                 
                    className="w-14 h-14 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="text-xl font-semibold">{review.name}</h4>
                    <p className="text-sm text-gray-500">Verified Customer</p>
                  </div>
                </div>
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-yellow-500 ${
                        i < review.rating ? "text-yellow-500" : "text-gray-400"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 mb-2">{review.text}</p>
                <p className="text-sm text-gray-400">
                  Reviewed on: {review.date}
                </p>
              </div>
            ))}
          </div>

         
        </div>
      </section>
    </div>
  );
};

export default CustomerReview;

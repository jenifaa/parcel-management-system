import useAuth from "@/Components/Hooks/useAuth";
import useAxiosSecure from "@/Components/Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";

const UserHome = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white p-6 rounded-xl shadow-lg md:flex items-center gap-3 md:space-x-6">
          <div className="flex-shrink-0">
            <img
              className="h-20 w-20 rounded-full object-cover"
              src={user?.photoURL}
              alt={user?.displayName}
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              Hello, {user?.displayName}
            </h2>
            <p className="text-xl text-gray-600">Welcome to your dashboard!</p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <h1 className="text-4xl font-semibold text-gray-800">
            Your Dashboard Overview
          </h1>
          <p className="text-lg text-gray-500 mt-2">
            Here, you can manage your activities, see recent updates, and more.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800">
              Explore Orders
            </h3>
            <p className="text-gray-600">
              View, track, and manage your orders in one place. Keep an eye on
              your recent orders and their status.
            </p>
          </div>

       
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800">
              Stay Connected
            </h3>
            <p className="text-gray-600">
              Receive important updates and messages directly on your dashboard.
              Stay informed about new offers and changes.
            </p>
          </div>

    
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800">
              Manage Your Profile
            </h3>
            <p className="text-gray-600">
              Edit your personal details, update your preferences, and manage
              your account settings all from one place.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800">
              Discover Promotions
            </h3>
            <p className="text-gray-600">
              Explore exclusive deals and discounts available just for you. Make
              the most out of special offers.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800">
              Give Feedback
            </h3>
            <p className="text-gray-600">
              Share your experiences and help us improve by providing feedback.
              Your opinion matters.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800">Get Help</h3>
            <p className="text-gray-600">
              Reach out to our customer support for assistance with any issues
              or inquiries. We’re here to help.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link  to="/dashboard/myProfile" className="bg-green-600 text-white py-2 px-6 rounded-full text-xl hover:bg-green-700 transition">
            Edit Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserHome;

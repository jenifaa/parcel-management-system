import React from "react";
import useAuth from "../Hooks/useAuth";
import { IoBookmarksOutline } from "react-icons/io5";
import { LuUserRoundPlus } from "react-icons/lu";
import { FaHome, FaUserCircle } from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useDeliveryMan from "../Hooks/useDeliveryMan";
import Loading from "../Shared/Loading";
const Dashboard = () => {
  const { user, loading } = useAuth();
  const [isAdmin] = useAdmin();
  const [isDeliveryMan] = useDeliveryMan();
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div className="flex">
      <div className="lg:w-64  lg:px-5 sm:px-4 px-1 py-10 min-h-screen text-white bg-green-700">
        <ul className="menu space-y-5">
          {isAdmin ? (
            // Admin Menu
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHome></FaHome> Statistic
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/manageItems">Manage Items</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allParcel">All Parcels</NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/allDeliveryMan">
                  All DeliveryMan
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/allUsers">All Users</NavLink>
              </li>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
            </>
          ) : isDeliveryMan ? (
            // Delivery Man Menu
            <>
              <li>
                <NavLink to="/dashboard/deliveryHome">
                  Delivery Man Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/deliveryList">My Delivery List</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myReviews">My Reviews</NavLink>
              </li>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
            </>
          ) : (
            // User Menu
            <>
              <li>
                <NavLink
                  to="/dashboard/userHome"
                  className="flex items-center gap-1"
                >
                  <IoBookmarksOutline />
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/booking"
                  className="flex items-center gap-1"
                >
                  <IoBookmarksOutline />
                  Book A Parcel
                </NavLink>
              </li>

              <li>
                <Link
                  to="/dashboard/parcel"
                  className="flex items-center gap-1"
                >
                  <LuUserRoundPlus />
                  My Parcel
                </Link>
              </li>

              <li className="">
                <Link
                  to="/dashboard/myProfile"
                  className="flex items-center gap-1"
                >
                  {" "}
                  <FaUserCircle /> My Profile
                </Link>
              </li>
              <hr className=""/>
              <li>
                <Link to="/" className="flex items-center gap-1">
                  <FaHome />
                  Home
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;

import React from "react";
import useAuth from "../Hooks/useAuth";
import { IoBookmarksOutline } from "react-icons/io5";
import { LuUserRoundPlus } from "react-icons/lu";
import { FaHome, FaUserCircle } from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useDeliveryMan from "../Hooks/useDeliveryMan";
const Dashboard = () => {
  const { user } = useAuth();
  const [isAdmin] = useAdmin();
  const [isDeliveryMan] = useDeliveryMan();

  return (
    <div className="flex">
      <div className="w-64 p-5 min-h-screen text-white bg-green-700">
        <ul className="menu">
          {isAdmin ? (
            // Admin Menu
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHome></FaHome> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItems">Add Items</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">Manage Items</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageBookings">
                  Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allUsers">All Users</NavLink>
              </li>
            </>
          ) : isDeliveryMan ? (
            // Delivery Man Menu
            <>
              <li>
                <NavLink to="/dashboard/deliveryTasks">Delivery Tasks</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/profile">Profile</NavLink>
              </li>
            </>
          ) : (
            // User Menu
            <>
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
               <Link to='/dashboard/myProfile' className="flex items-center gap-1"> <FaUserCircle /> My Profile</Link>
              </li>
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

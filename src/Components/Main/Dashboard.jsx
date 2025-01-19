import React from "react";
import useAuth from "../Hooks/useAuth";
import { IoBookmarksOutline } from "react-icons/io5";
import { LuUserRoundPlus } from "react-icons/lu";
import { FaHome, FaUserCircle } from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useDeliveryMan from "../Hooks/useDeliveryMan";
import Loading from "../Shared/Loading";
import { IoIosStats } from "react-icons/io";
import { BsBoxes } from "react-icons/bs";
import { MdGroups } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi2";
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
                <NavLink to="/dashboard/adminHome" className="flex items-center gap-1">
                  <IoIosStats></IoIosStats> Statistic
                </NavLink>
              </li>

             
              <li>
                <NavLink to="/dashboard/allParcel" className="flex items-center gap-1"><BsBoxes></BsBoxes>All Parcels</NavLink>
              </li>

              <li>
                <NavLink className="flex items-center gap-1" to="/dashboard/allDeliveryMan">
                 <MdGroups></MdGroups> All DeliveryMan
                </NavLink>
              </li>

              <li>
                <NavLink className="flex items-center gap-1" to="/dashboard/allUsers"><HiUserGroup></HiUserGroup>All Users</NavLink>
              </li>
              <hr />
              <li>
                <NavLink className="flex items-center gap-1" to="/"><FaHome></FaHome>Home</NavLink>
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

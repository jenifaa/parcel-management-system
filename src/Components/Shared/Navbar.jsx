import React, { useContext, useEffect, useState } from "react";

import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { CiLogout } from "react-icons/ci";
import logo from "../../assets/images/icons8-parcel-delivery-55.png";
import { BsPersonCircle } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiLogin } from "react-icons/ci";

import { IoPersonOutline } from "react-icons/io5";
import { Button } from "../ui/button";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import Loading from "./Loading";
import useAdmin from "../Hooks/useAdmin";
import useDeliveryMan from "../Hooks/useDeliveryMan";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logOut, loading } = useAuth();

  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  // const isHomepage = location.pathname === "/";
  const isLoginPage = location.pathname === "/login";
  const isRegisterPage = location.pathname === "/register";
  const isAdmin = useAdmin();
  const isDeliveryMan = useDeliveryMan();
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 250);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleLogOut = () => {
    logOut().then(() => {
      Swal.fire({
        title: "LogOut Successful",
        text: "You LogOut successfully!!",
        icon: "success",
      });
    });
  };
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-white text-black shadow-lg" : "bg-green-950 text-white"
      }`}
    >
      <nav className="flex  items-center  justify-between px-8 py-4">
        <div className="flex items-center">
          <img className="w-12" src={logo} alt="" />
          <Link to="/" className="text-3xl font-bold  font tracking-widest">
            Packify
          </Link>
        </div>

        <div className=" flex space-x-3  items-center">
          <div className="lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <div>
            {isLoginPage || isRegisterPage ? null : (
              <>
                <div className="flex space-x-3 items-center">
                  <div className="lg:flex items-center space-x-3 hidden">
                    <NavLink
                      to="/"
                      className="hover:font-bold text-sm flex items-center space-x-2"
                    >
                      Home
                    </NavLink>

                    <NavLink className="hover:text-gray-200">
                      <IoIosNotificationsOutline />
                    </NavLink>
                  </div>
                  {user && user?.email ? (
                    <>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <img
                            className="w-10 h-10 rounded-full hover:cursor-pointer"
                            src={user?.photoURL}
                            alt=""
                          />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                          <DropdownMenuLabel>My Profile</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuGroup>
                            <DropdownMenuItem>
                              <h2 className=" font-bold text-green-800 text-xl">
                                {" "}
                                {user?.displayName}
                              </h2>
                            </DropdownMenuItem>
                            <DropdownMenuItem>

                              {/* {
                                isAdmin ? <li>
                                <NavLink to="/dashboard/adminHome">
                                  Dashboard
                                </NavLink>
                              </li> : ""
                              }
                              {
                                isDeliveryMan ?  <li>
                                <NavLink to="/dashboard/deliveryHome">
                                  Dashboard
                                </NavLink>
                              </li> : ""
                              }
                              {
                                user && user?.email ?  <li>
                                <Link to="/userHome" className="">
                                  Dashboard
                                </Link>
                              </li> : ""
                              } */}





                              
                              {isAdmin ? (
                                // Admin Menu

                                <li>
                                  <NavLink to="/dashboard/adminHome">
                                    Dashboard
                                  </NavLink>
                                </li>
                              ) : isDeliveryMan ? (
                                // Delivery Man Menu

                                <li>
                                  <NavLink to="/dashboard/deliveryHome">
                                    Dashboard
                                  </NavLink>
                                </li>
                              ) : (
                                // User Menu
                                <>
                                  <li>
                                    <Link to="/userHome" className="">
                                      Dashboard
                                    </Link>
                                  </li>
                                </>
                              )}
                            </DropdownMenuItem>
                          </DropdownMenuGroup>

                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <button
                              onClick={handleLogOut}
                              className="font-bold flex items-center gap-1"
                            >
                              <CiLogout />
                              LogOut
                            </button>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </>
                  ) : (
                    <NavLink to="/login">
                      <button className="text-white flex items-center gap-1">
                        <CiLogin />
                        Sign In
                      </button>
                    </NavLink>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className="flex flex-col space-y-4 px-6 py-4 bg-gradient-to-r from-[#49b6a2] via-[#069b5d] to-[#4caf7f]  text-white lg:hidden">
          <NavLink to="/" className="hover:text-gray-200">
            Home
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Navbar;

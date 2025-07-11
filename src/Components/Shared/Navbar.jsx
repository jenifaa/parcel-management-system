import React, { useState, useEffect, useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { CiLogout, CiLogin } from "react-icons/ci";
import { IoMdNotifications } from "react-icons/io";
import logo from "../../assets/images/icons8-parcel-delivery-55.png";
import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useAdmin";
import useDeliveryMan from "../Hooks/useDeliveryMan";
import Swal from "sweetalert2";
import Loading from "./Loading";
import useNotifications from "../Hooks/useNotifications";
import useDeliveryManNotifications from "../Hooks/useDeliveryManNotifications";
import { ThemeContext } from "../Pages/Home/ThemeProvider";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logOut, loading } = useAuth();
  const location = useLocation();
  const [notification] = useNotifications();
  const [notifications] = useDeliveryManNotifications();
  const [scrolled, setScrolled] = useState(false);

  const [isAdmin, isAdminLoading] = useAdmin();
  const [isDeliveryMan, isDeliveryManLoading] = useDeliveryMan();
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
  if (loading || isAdminLoading || isDeliveryManLoading) {
    return <Loading />;
  }

  return (
    <div
      className={`fixed top-0 font   left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white text-black shadow-lg"
          : "bg-black bg-opacity-40 text-white"
      }`}
    >
      <nav className="flex items-center md:px-8 px-2 lg:px-12 justify-between py-4">
        <div className="sm:flex items-center">
          <img className="w-9 sm:w-12" src={logo} alt="Logo" />
          <Link
            to="/"
            className="text-2xl sm:text-3xl font-bold tracking-widest font3"
          >
            Packify
          </Link>
        </div>

        <div className="flex items-center sm:space-x-3">
          <div>
            {location.pathname !== "/login" &&
              location.pathname !== "/register" && (
                <div className="flex space-x-2 sm:space-x-4 items-center">
                  <div className="flex items-center sm:space-x-6">
                    <button
                      onClick={toggleTheme}
                      className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full transition-all"
                    >
                      {theme === "dark" ? (
                        <Sun className="w-6 h-6 text-yellow-400" />
                      ) : (
                        <Moon className="w-6 h-6 text-gray-900" />
                      )}
                    </button>
                    <NavLink
                      to="/"
                      className="hover:font-bold text-md lg:flex hidden"
                    >
                      Home
                    </NavLink>
                    <NavLink
                      to="/about"
                      className="hover:font-bold text-md lg:flex hidden"
                    >
                      About Us
                    </NavLink>
                    <NavLink
                      to="/blog"
                      className="hover:font-bold text-md lg:flex hidden"
                    >
                      Blog
                    </NavLink>
                    <NavLink
                      to="/contact"
                      className="hover:font-bold text-md lg:flex hidden"
                    >
                      Contact Us
                    </NavLink>
                    {user ? (
                      <>
                        <NavLink
                          to="/service"
                          className="hover:font-bold text-md lg:flex hidden"
                        >
                          Our Services
                        </NavLink>
                        {/* <NavLink
                          to="/allProduct"
                          className="hover:font-bold text-md lg:flex hidden"
                        >
                          All Product
                        </NavLink> */}
                      </>
                    ) : (
                      ""
                    )}

                    {user ? (
                      <>
                        {isAdmin && (
                          <NavLink
                            to="notification"
                            className="relative hover:text-gray-200"
                          >
                            <div className="relative flex items-center">
                              <IoMdNotifications className="text-3xl text-yellow-500" />
                              {notification.length > 0 && (
                                <span
                                  className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-600 text-white text-xs font-bold rounded-full px-2 py-0.5 shadow-lg"
                                  style={{ transform: "translate(50%, -50%)" }}
                                >
                                  {notification.length}
                                </span>
                              )}
                            </div>
                          </NavLink>
                        )}
                        {isDeliveryMan && (
                          <NavLink
                            to="deliveryNotification"
                            className="hover:text-gray-200"
                          >
                            <div className="relative flex items-center">
                              <IoMdNotifications className="text-3xl text-yellow-500" />
                              {notifications.length > 0 && (
                                <span
                                  className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-600 text-white text-xs font-bold rounded-full px-2 py-0.5 shadow-lg"
                                  style={{ transform: "translate(50%, -50%)" }}
                                >
                                  {notifications.length}
                                </span>
                              )}
                            </div>
                          </NavLink>
                        )}
                        {!isAdmin && !isDeliveryMan && (
                          <NavLink className="hover:text-gray-200">
                            <IoMdNotifications className="text-xl text-yellow-500" />
                          </NavLink>
                        )}
                      </>
                    ) : (
                      <IoMdNotifications className="text-3xl text-yellow-500" />
                    )}
                  </div>

                  {user ? (
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <img
                          className="w-10 h-10 rounded-full cursor-pointer"
                          src={user?.photoURL}
                        />
                      </DropdownMenuTrigger>

                      <DropdownMenuContent className="w-56 bg-white overflow-hidden">
                        <DropdownMenuLabel>My Profile</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                          <DropdownMenuItem>
                            <h2 className="font-bold text-blue-500 text-xl">
                              {user?.displayName}
                            </h2>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            {isAdmin && (
                              <NavLink to="/dashboard/adminHome">
                                Admin Dashboard
                              </NavLink>
                            )}
                            {isDeliveryMan && (
                              <NavLink to="/dashboard/deliveryHome">
                                Delivery Dashboard
                              </NavLink>
                            )}
                            {!isAdmin && !isDeliveryMan && (
                              <NavLink to="/dashboard/userHome">
                                User Dashboard
                              </NavLink>
                            )}
                          </DropdownMenuItem>
                        </DropdownMenuGroup>

                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <button
                            onClick={handleLogOut}
                            className="font-bold flex items-center gap-1"
                          >
                            <CiLogout /> LogOut
                          </button>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <NavLink to="/login">
                      <button className=" flex items-center gap-1">
                        <CiLogin /> Sign In
                      </button>
                    </NavLink>
                  )}
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
                </div>
              )}
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className="flex flex-col space-y-4 px-6 py-4 bg-gradient-to-r from-[#49b6a2] via-[#3694db] to-[#3086c8] text-white lg:hidden">
          <NavLink to="/" className="hover:text-gray-200">
            Home
          </NavLink>
          <NavLink to="/blog" className="">
            Blog
          </NavLink>
          <NavLink to="/contact" className="">
            Contact Us
          </NavLink>
          <NavLink to="/about" className="">
            About Us
          </NavLink>
          {user ? (
            <>
              <NavLink to="/service" className="">
                Our Services
              </NavLink>
            </>
          ) : (
            ""
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;

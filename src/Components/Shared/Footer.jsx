import React from "react";
import img1 from "../../assets/icons/facebook (1).png";
import img2 from "../../assets/icons/instagram (1).png";
import img4 from "../../assets/icons/linkedin (2).png";
import img3 from "../../assets/icons/twitter (2).png";
import img5 from "../../assets/images/icons8-parcel-delivery-55.png";
import { Link, useLocation } from "react-router-dom";
// import img1 from '../../assets/icons/facebook (1).png'
const Footer = () => {
  const location = useLocation();
  // const isHomepage = location.pathname === "/";
  const isLoginPage = location.pathname === "/login";
  const isRegisterPage = location.pathname === "/register";
  return (
    !isLoginPage &&
    !isRegisterPage && (
      <div className="bg-green-950 text-white">
        <div className="lg:flex  lg:justify-between w-11/12  mx-auto py-8 space-y-10 lg:space-y-0">
          <div className="md:flex md:justify-between lg:gap-60  space-y-10 md:space-y-2">
            <div className="px-6 lg:px-0">
              <h2 className="text-2xl font-bold mb-3">Follow us</h2>
              <div className="flex items-center gap-3">
                <Link to="https://www.facebook.com">
                  {" "}
                  <img className="w-8" src={img1} alt="" />
                </Link>
                <Link to='https://www.instagram.com'>
                  <img className="w-8" src={img2} alt="" />
                </Link>
                <Link to='https://x.com/?lang=en&mx=2'>
                  <img className="w-8" src={img3} alt="" />
                </Link>

                <Link to="https://www.linkedin.com">
                  {" "}
                  <img className="w-8" src={img4} alt="" />
                </Link>
              </div>
            </div>
            <div className="">
              <div className=" px-8 pb-4 rounded-lg shadow-md flex gap-20 lg:gap-40 ">
                <div>
                  <h2 className="text-xl font-semibold mb-4 border-b border-green-700 pb-2">
                    Company
                  </h2>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="#"
                        className="block text-sm hover:text-green-300 transition duration-200"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block text-sm hover:text-green-300 transition duration-200"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block text-sm hover:text-green-300 transition duration-200"
                      >
                        Our Services
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block text-sm hover:text-green-300 transition duration-200"
                      >
                        Privacy Policy
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-4 border-b border-green-700 pb-2">
                    Get Help
                  </h2>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="#"
                        className="block text-sm hover:text-green-300 transition duration-200"
                      >
                        Helpline
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block text-sm hover:text-green-300 transition duration-200"
                      >
                        FAQ
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block text-sm hover:text-green-300 transition duration-200"
                      >
                        Documents
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block text-sm hover:text-green-300 transition duration-200"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="px-6 lg:px-0">
            <div className="flex items-center mb-4">
              <img src={img5} alt="" />
              <h2 className="text-4xl font">Packify</h2>
            </div>

            <p className=" text-2xl font-semibold">
              Delivering your parcels <br /> safely and quickly.
            </p>
            <form className=" flex my-5">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-l bg-gray-200  text-black focus:ring focus:ring-green-700 outline-none"
              />
              <button
                type="submit"
                className=" w-full bg-green-600 text-white py-2 rounded-r hover:bg-green-700 transition"
              >
                Get Your Subscription
              </button>
            </form>
          </div>
        </div>
        <hr className="opacity-15" />
        <div className="container mx-auto text-center text-sm py-5 text-gray-400">
          © 2025 Packify. All rights reserved. |{" "}
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
        </div>
      </div>
    )
  );
};

export default Footer;

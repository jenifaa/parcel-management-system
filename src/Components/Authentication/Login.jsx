import React, { useContext, useEffect, useRef, useState } from "react";

import bgImg from "../../assets/images/Computer login-rafiki.png";

// import {
//   loadCaptchaEnginge,
//   LoadCanvasTemplate,
//   validateCaptcha,
// } from "react-simple-captcha";
// import { AuthContext } from "../../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import useAuth from "../Hooks/useAuth";
import SocialLogin from "../Hooks/SocialLogin";
const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [disable, setDisable] = useState(true);
  const { signIn, setLoading } = useAuth();
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password).then((result) => {
      const user = result.user;
      Swal.fire({
        title: "Login Successful",
        text: "You Logged in successfully!!",
        icon: "success",
      });
      navigate(from, { replace: true });
    });
  };
  const from = location.state?.from?.pathname || "/";
  //   useEffect(() => {
  //     loadCaptchaEnginge(6);
  //   }, []);
  //   const handleValidateCaptcha = (e) => {
  //     const user_captcha_value = e.target.value;
  //     if (validateCaptcha(user_captcha_value)) {
  //       setDisable(false);
  //     } else {
  //       setDisable(true);
  //     }
  //   };

  return (
    <div>
      <div
        className=" min-h-screen"
       
      >
        <div
          className=" gap-16 py-8 lg:flex items-center"
      
        >
          <div className="text-center lg:w-1/2 lg:text-left">
            <img src={bgImg} alt="" />
          </div>
          <div className="mx-auto px-5 lg:w-1/2 max-w-sm font-semibold">
            <div className="mb-10 text-center text-green-700">
              <h2 className=" text-4xl  font2 font-bold mb-2">Welcome</h2>
              <p className="text-sm">Login to your Account to continue...</p>
            </div>
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <h2>Email*</h2>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className=" border-2 rounded-md py-2 px-3 w-full mt-2 mb-5"
                  required
                />
              </div>
              <div className="form-control">
                <h2>Password*</h2>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className=" border-2 rounded-md py-2 px-3 w-full mt-2"
                  required
                />
              </div>
            
              <p className=" text-green-700 mb-2">
                <small>
                  New Here? Create an Account -
                  <Link className="font-bold" to="/register">
                    SingUp
                  </Link>
                </small>
              </p>
              <div className="">
                <input
                  //   disabled={disable}
                  className="w-full py-2 my-2 bg-opacity-90 rounded-lg text-white font-bold bg-green-900"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>

            <div className="text-center text-green-700 ">
              <small>Or Sign in with</small>
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

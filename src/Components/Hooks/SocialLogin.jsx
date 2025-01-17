import React from "react";
import goggle from "../../assets/icons/google (1).png";

import { useNavigate } from "react-router-dom";

import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";
const SocialLogin = () => {
  const { signInWithGoogle } = useAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const handleGoogleSignIn = () => {
    signInWithGoogle().then((result) => {
    
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
        type: "user", 
        isSocialLogin: true, 
      };

      axiosPublic
        .post("/users", userInfo)
        .then((res) => {
          if (res.data.insertedId || res.data.message === "User exists") {
            navigate("/"); 
          }
        })
     
    });
  };
  return (
    <div className="flex justify-center items-center mt-2">
      <div className=" py-2 rounded-full border-2 border-gray-300 w-[80%] lg:w-[60%]">
        <button
          onClick={handleGoogleSignIn}
          className="flex items-center gap-2 px-4"
        >
          <img className="w-8" src={goggle} alt="" />
          SignIn/SignUp
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;

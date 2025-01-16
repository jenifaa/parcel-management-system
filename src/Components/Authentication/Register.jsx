import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import Swal from "sweetalert2";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import useAuth from "../Hooks/useAuth";
import SocialLogin from "../Hooks/SocialLogin";
import img2 from "../../assets/images/Sign up-rafiki (1).png";

import { FaArrowLeft } from "react-icons/fa";
const Register = () => {
  const [step, setStep] = useState(1);
  const handleNext = () => {
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);
  };
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { createNewUser, updateUserProfile } = useAuth();
  const onSubmit = (data) => {
    createNewUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
    

      updateUserProfile(data.name, data.photoURL).then(() => {
        const userInfo = {
          name: data.name,
          email: data.email,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          if (res.data.insertedId) {
            reset();
            Swal.fire({
              title: " Successful",
              text: "You create your profile  successfully!!",
              icon: "success",
            });
            navigate("/");
          }
        });
      });
    });
  };
  return (
    <div>
      <div className="mt-20 mb-10 ">
        <div className="   flex flex-col-reverse lg:flex-row  items-center lg:w-10/12 mx-auto">
          <div className="  lg:w-1/2 mx-auto lg:max-w-xs">
            <h2 className="text-center text-4xl font2 mb-8 text-green-800 font-bold">
              Sign Up
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="">
              {step === 1 && (
                <>
                  <div className="form-control">
                    <h2 className="text-green-800">Name*</h2>
                    <input
                      type="text"
                      {...register("name", { required: true })}
                      name="name"
                      placeholder="Your Name"
                      className=" border-b-2 rounded-md py-2 px-3 w-full mt-2 mb-5"
                    />
                    {errors.name && (
                      <span className="text-red-600">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className="form-control">
                    <h2 className="text-green-800">Email*</h2>
                    <input
                      type="email"
                      {...register("email", { required: true })}
                      name="email"
                      placeholder="Your email"
                      className=" border-b-2 rounded-md py-2 px-3 w-full mt-2 mb-2"
                    />
                    {errors.name && (
                      <span className="text-red-600">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-end mb-5 mt-3">
                    <button
                      type="button"
                      className=" text-sm font-bold text-green-800 flex items-center gap-3"
                      onClick={handleNext}
                    >
                      Continue <FaArrowRightLong className="text-sm" />
                    </button>
                  </div>
                </>
              )}
              {step === 2 && (
                <>
                  <div className="form-control">
                    <h2 className="text-green-800">PhotoUrl*</h2>
                    <input
                      type="url"
                      {...register("photoURL", { required: true })}
                      placeholder="Your PhotoURL"
                      className=" border-b-2 rounded-md py-2 px-3 w-full mt-2 mb-5"
                    />
                    {errors.photoURL && (
                      <span className="text-red-600">
                        This field is required
                      </span>
                    )}
                  </div>

                  <div className="form-control">
                    <h2 className="text-green-800">Password*</h2>
                    <input
                      type="password"
                      {...register("password", {
                        required: true,
                        minLength: 6,
                        maxLength: 20,
                        pattern:
                          /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/,
                      })}
                      name="password"
                      placeholder="password"
                      className=" border-b-2 rounded-md py-2 px-3 w-full mt-2 mb-5"
                    />
                    {errors.password?.type === "required" && (
                      <p className="text-red-600">Password is required</p>
                    )}
                    {errors.password?.type === "minLength" && (
                      <p className="text-red-600">
                        Password must be at least 6 character
                      </p>
                    )}
                    {errors.password?.type === "maxLength" && (
                      <p className="text-red-600">
                        Password must be lower than 20 character
                      </p>
                    )}
                    {errors.password?.type === "pattern" && (
                      <p className="text-red-600">
                        Password must be one uppercase,one lowercase, one digit,
                        one special character
                      </p>
                    )}
                  </div>
                  <div className="">
                    <div className="flex items-center ">
                      <button
                        type="button"
                        className=" text-sm font-bold text-green-800 flex items-center gap-2"
                        onClick={handleBack}
                      >
                    <FaArrowLeft className="text-sm " /> Back
                      </button>
                    </div>
                    <input
                      //   disabled={disable}
                      className="w-full py-2 my-2 bg-opacity-90 rounded-lg text-white font-bold bg-green-900"
                      type="submit"
                      value="Login"
                    />
                  </div>
                </>
              )}

              <p className="text-center text-green-800">
                <small>
                  New Here? Create an Account -
                  <Link className="font-bold" to="/login">
                    SingIn
                  </Link>
                </small>
              </p>
            </form>

            <div className="text-center text-green-700 ">
              <small>Or Sign in with</small>
              <SocialLogin></SocialLogin>
            </div>
          </div>
          <div className="text-center lg:w-1/2 lg:text-left">
            <img src={img2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

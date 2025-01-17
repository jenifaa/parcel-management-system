import useAuth from "@/Components/Hooks/useAuth";
import Loading from "@/Components/Shared/Loading";
// import { Loader } from 'lucide-react';
import React from "react";
import { Input } from "../../../ui/input";
import { Label } from "../../../ui/label";
import { useForm } from "react-hook-form";
import useAxiosPublic from "@/Components/Hooks/useAxiosPublic";
import useAxiosSecure from "@/Components/Hooks/useAxiosSecure";
import Swal from "sweetalert2";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const MyProfile = () => {
  const { user, setUser, loading } = useAuth();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    const res = await axiosPublic.post(image_hosting_api, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      const updatedPhotoURL = res.data.data.display_url;
      const myProfile = {
        email: user.email,
        photoURL: updatedPhotoURL,
      };
      const myUpdatedProfile = await axiosSecure.patch("/users", myProfile);

      if (myUpdatedProfile.data.modifiedCount > 0) {
        setUser((prevUser) => ({
          ...prevUser,
          photoURL: updatedPhotoURL,
        }));

        reset();
        Swal.fire({
          title: "Good job!",
          text: "Profile Updated",
          icon: "success",
        });
      }
    }
  };

  if (loading) {
    return <Loading></Loading>;
  }
  console.log(user);
  return (
    <div className="mx-auto w-10/12">
      <h2 className="text-4xl text-center">Hello {user?.displayName}</h2>
      <div>
        <section className="bg-gradient-to-br from-green-500 to-green-600 text-white py-16">
          <div className="container mx-auto px-6 lg:px-20">
            <div className=" ">
              <div className="w-40 h-40 lg:w-52 lg:h-52 rounded-md overflow-hidden shadow-lg">
                <img
                  src={user?.photoURL || updatedPhotoURL}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-center lg:text-left">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  {user?.name}
                </h2>
                <h3 className="text-xl lg:text-2xl font-semibold mb-6">
                  hello wrold
                </h3>
                <p className="text-lg leading-relaxed mb-6">Im a student</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="picture" className="text-white">
                      Update Profile Picture
                    </Label>
                    <Input
                      id="picture"
                      type="file"
                      accept="image/*"
                      {...register("image", { required: true })}
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-white text-green-600 px-6 py-2 rounded-md mt-4 font-bold hover:bg-gray-200"
                  >
                    Update
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MyProfile;

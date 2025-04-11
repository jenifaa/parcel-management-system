import useAuth from "@/Components/Hooks/useAuth";
import Loading from "@/Components/Shared/Loading";
import { Input } from "../../../ui/input";
import { Label } from "../../../ui/label";
import { useForm } from "react-hook-form";
import useAxiosPublic from "@/Components/Hooks/useAxiosPublic";
import useAxiosSecure from "@/Components/Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import auth from "@/firebase.init";

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

    try {
      const res = await axiosPublic.post(image_hosting_api, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (res.data.success) {
        const updatedPhotoURL = res.data.data.display_url;

     
        await updateProfile(auth.currentUser, {
          photoURL: updatedPhotoURL,
        });

        
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
            text: "Profile Picture Updated Successfully",
            icon: "success",
          });
        }
      }
    } catch (error) {
      console.error("Error updating profile picture:", error);
      Swal.fire({
        title: "Error",
        text: "There was an issue updating your profile picture.",
        icon: "error",
      });
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className=" bg-gray-100 dark:bg-black min-h-screen font">
      <h2 className="text-5xl text-center dark:text-white pt-5 font font-semibold mb-6 text-gray-800">
       My Profile 
      </h2>
      <div>
        <section className=" py-16 rounded-lg shadow-lg">
          <div className="  flex justify-center items-center">
            <div className=" md:flex md:gap-12 lg:gap-32 space-y-5 px-3 lg:items-center">
              <div className=" shadow-lg ">
                <img
                  src={user?.photoURL}
                  alt="Profile"
                  className="lg:w-[350px] w-80 rounded-md object-cover"
                />
              </div>

              <div className="">
                <h2 className="text-xl lg:text-4xl font-bold mb-4">
                 Name:  {user?.displayName || "Name not available"}
                </h2>
                <h3 className="text-sm lg:text-2xl font-semibold mb-6">
                 Email: {user?.email || "Email not available"}
                </h3>
               
               
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid w-full max-w-sm items-center gap-5">
                    <Label htmlFor="picture" className="text-sm lg:text-lg">
                      Update Profile Picture:
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
                    className="bg-white text-blue-600 px-6 py-2 rounded-md mt-4 font-bold hover:bg-gray-200"
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

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useParcel = () => {
    const axiosSecure = useAxiosSecure()
    const {user} = useAuth()
    const { data: parcels = [], refetch } = useQuery({
        queryKey: ["parcels", user?.email],
        queryFn: async () => {
          const res = await axiosSecure.get(`/parcel/${user?.email}`);
          return res.data;
        },
      });
    return [parcels,refetch]
};

export default useParcel;
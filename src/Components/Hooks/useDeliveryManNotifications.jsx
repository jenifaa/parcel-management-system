import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useDeliveryManNotifications = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data: notifications = [], refetch } = useQuery({
    queryKey: ["notifications"],
    queryFn: async () => {
      const res = await axiosSecure.get("/delivery/notifications");
    
      const notify = res.data.filter((use) => use.email === user?.email);
    
      return notify;
    },
  });

  return [notifications, refetch];
};

export default useDeliveryManNotifications;

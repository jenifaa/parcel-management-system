import useAxiosSecure from "@/Components/Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../ui/table";
const AllDeliveryman = () => {
  const axiosSecure = useAxiosSecure();
  const { data: deliveryMan = [], refetch } = useQuery({
    queryKey: ["deliveryMan"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users/deliveryMan");
      console.log(res.data);
      return res.data;
    },
  });

  return (
    <div>
      <Table>
      
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Phone Number</TableHead>
            <TableHead>Delivered parcel</TableHead>
            <TableHead>Review</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {deliveryMan.map((delivery) => (
            <TableRow key={delivery._id}>
              <TableCell>{delivery.name}</TableCell>
              <TableCell>{delivery.phoneNumber}</TableCell>
              <TableCell>5</TableCell>
              <TableCell>
                Review count
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
       
      </Table>
    </div>
  );
};

export default AllDeliveryman;

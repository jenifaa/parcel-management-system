import useAdmin from "@/Components/Hooks/useAdmin";
import useAuth from "@/Components/Hooks/useAuth";
import useAxiosSecure from "@/Components/Hooks/useAxiosSecure";
import useDeliveryMan from "@/Components/Hooks/useDeliveryMan";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import Swal from "sweetalert2";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../../ui/pagination";
const AllUsers = () => {
  const { user, signInWithGoogle } = useAuth();
  const [isAdmin] = useAdmin();
  const [isDeliveryMan] = useDeliveryMan();
  const axiosSecure = useAxiosSecure();
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  const { data: paid = [] } = useQuery({
    queryKey: ["paid"],
    queryFn: async () => {
      const res = await axiosSecure.get("/payments");
      console.log(res.data);
      return res.data;
    },
  });

  const { data: parcels = [] } = useQuery({
    queryKey: ["parcels"],
    queryFn: async () => {
      const res = await axiosSecure.get("/parcel");
      return res.data;
    },
  });
  
  const userParcelCount = users.map((user) => {
    const userParcels = parcels.filter((parcel) => parcel.email === user.email);

    return { ...user, parcelCount: userParcels.length, parcels: userParcels };
  });
  console.log(userParcelCount);

  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user?._id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          title: "Updated!",
          text: "User has been Updated to Admin.",
          icon: "success",
        });
      }
    });
  };
  const handleMakeDeliveryMan = (user) => {
    axiosSecure.patch(`/users/deliveryMan/${user?._id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          title: "Updated!",
          text: "User has been Updated to deliveryMan.",
          icon: "success",
        });
      }
    });
  };
  const totalPages = Math.ceil(userParcelCount.length / usersPerPage);
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = userParcelCount.slice(indexOfFirstUser, indexOfLastUser);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  return (
   
    <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-700">All Users</h2>
        <h2 className="text-3xl font-bold text-gray-700">
          Total Users ({users.length})
        </h2>
      </div>

      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-200 text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 border border-gray-300">#</th>
              <th className="px-4 py-2 border border-gray-300">Name</th>
              <th className="px-4 py-2 border border-gray-300">Phone Number</th>
              <th className="px-4 py-2 border border-gray-300">
                Booked Parcel
              </th>
              <th className="px-4 py-2 border border-gray-300">Total cost</th>
              <th className="px-4 py-2 border border-gray-300">Admin Role</th>
              <th className="px-4 py-2 border border-gray-300">Delivery Man</th>
            </tr>
          </thead>

          <tbody>
            {currentUsers.map((user, index) => {
              const userTotalPaid = paid
                .filter((payment) => payment.email === user.email)
                .reduce((total, payment) => total + (payment.price || 0), 0);

              return (
                <tr
                  key={user._id}
                  className={`${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  } hover:bg-gray-200`}
                >
                  <td className="px-4 py-2 border border-gray-300 text-center">
                    {index + 1 + (currentPage - 1) * usersPerPage}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">{user.name}</td>
                  <td className="px-4 py-2 border border-gray-300">
                    {user.phoneNumber || "N/A"}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {user.parcelCount}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    ${userTotalPaid}
                  </td>
                  <td className="px-4 py-2 border border-gray-300 text-center">
                    {user.type === "admin" ? (
                      "Admin"
                    ) : (
                      <button
                        onClick={() => handleMakeAdmin(user)}
                        className="p-2 bg-yellow-400 text-white rounded-md shadow-md"
                      >
                        <FaUsers className="text-xl" />
                      </button>
                    )}
                  </td>
                  <td className="px-4 py-2 border border-gray-300 text-center">
                    {user.type === "deliveryMan" ? (
                      "DeliveryMan"
                    ) : (
                      <button
                        onClick={() => handleMakeDeliveryMan(user)}
                        className="p-2 bg-blue-500 text-white rounded-md shadow-md"
                      >
                        <FaUsers className="text-xl" />
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="my-5 text-center">
        <button
          className="mx-2 px-4 py-2 bg-gray-300 text-gray-700 rounded-md"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {[...Array(totalPages).keys()].map((page) => (
          <button
            key={page + 1}
            className={`mx-1 px-4 py-2 rounded-md ${
              currentPage === page + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-700"
            }`}
            onClick={() => handlePageChange(page + 1)}
          >
            {page + 1}
          </button>
        ))}
        <button
          className="mx-2 px-4 py-2 bg-gray-300 text-gray-700 rounded-md"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AllUsers;

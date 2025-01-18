import React, { useEffect, useState } from "react";
import useAxiosSecure from "@/Components/Hooks/useAxiosSecure";

const DeliveryList = ({ deliveryManId }) => {
  const axiosSecure = useAxiosSecure();
  const [data, setData] = useState([]);
  //   const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDeliveryList = async () => {
      const res = await axiosSecure.get(
        `/parcels/deliveryMan/${deliveryManId}`
      );
      console.log(res.data);
    };
    if (deliveryManId) {
      fetchDeliveryList();
    }
  }, [axiosSecure, deliveryManId]);

 

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">
        Parcels for Delivery Man: {deliveryManId}
      </h2>
      {data.length > 0 ? (
        <ul className="list-disc pl-5">
          {data.map((parcel) => (
            <li key={parcel._id}>
              <p>
                <strong>Name:</strong> {parcel.name}
              </p>
              <p>
                <strong>Phone Number:</strong> {parcel.phoneNumber}
              </p>
              <p>
                <strong>Status:</strong> {parcel.status}
              </p>
              <p>
                <strong>Approx Delivery Date:</strong>{" "}
                {parcel.approximateDeliveryDate}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No parcels assigned to this delivery man.</p>
      )}
    </div>
  );
};

export default DeliveryList;

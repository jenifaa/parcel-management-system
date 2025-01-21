import useAuth from "@/Components/Hooks/useAuth";
import useAxiosSecure from "@/Components/Hooks/useAxiosSecure";
import useParcel from "@/Components/Hooks/useParcel";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

import { useLoaderData, useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const axiosSecure = useAxiosSecure();
  const data = useLoaderData();
  const [parcels, refetch] = useParcel();
  console.log(data);
  const { user } = useAuth();
  const [transactionId, setTransactionId] = useState("");

  const [clientSecret, setClientSecret] = useState("");

  const [error, setError] = useState("");
  const [selectedParcel, setSelectedParcel] = useState(null);
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  useEffect(() => {
    if (data.price > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: data.price })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [data, axiosSecure]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) return;
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log(error);
      setError(error);
    } else {
      setError("");
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log(confirmError);
    } else {
      console.log("PaymentIntent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        setTransactionId(paymentIntent.id);
        const payment = {
          email: user.email,
          price: data?.price,
          date: new Date(),
          status: "pending",
          transactionId: paymentIntent.id,
          parcelId: data?._id,
        };
        const res = await axiosSecure.post("/payments", payment);

        refetch();
        navigate("/dashboard/paymentHistory");
      }
    }
  };

  return (
    <div>
      <div className="mb-8 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Parcel Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p>
              <span className="font-semibold">Sender Name:</span> {data.name}
            </p>
            <p>
              <span className="font-semibold">Phone Number:</span>{" "}
              {data.phoneNumber}
            </p>
            <p>
              <span className="font-semibold">Parcel Type:</span>{" "}
              {data.parcelType}
            </p>
            <p>
              <span className="font-semibold">Weight:</span> {data.parcelWeight}{" "}
              kg
            </p>
          </div>
          <div>
            <p>
              <span className="font-semibold">Price:</span> ${data.price}
            </p>
            <p>
              <span className="font-semibold">Delivery Address:</span>{" "}
              {data.deliveryAddress}
            </p>
            <p>
              <span className="font-semibold">Receiver Name:</span>{" "}
              {data.receiverName}
            </p>
            <p>
              <span className="font-semibold">Receiver Number:</span>{" "}
              {data.receiverNumber}
            </p>
          </div>
          <div>
            <p>
              <span className="font-semibold">Booking Date:</span>{" "}
              {new Date(data.BookingDate).toLocaleDateString()}
            </p>
            <p>
              <span className="font-semibold">Requested Delivery Date:</span>{" "}
              {new Date(data.requestedDeliveryDate).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-semibold my-8">Pay Here</h2>
      <div className="lg:w-8/12 px-5">
        <form onSubmit={handleSubmit}>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />

          <button
            className="px-8 py-2 text-white rounded-md bg-green-600 my-10"
            type="submit"
            disabled={!stripe || !clientSecret}
          >
            Pay
          </button>
          <p className="text-red-600 my-4">{error}</p>
          {transactionId && (
            <p className="text-green-500">
              Your Transaction id: {transactionId}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;

import Home from "@/Components/Pages/Home/Home";
import MainLayOut from "../Components/Main/MainLayOut";

import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "@/Components/ErrorPage";
import Register from "@/Components/Authentication/Register";
import Login from "@/Components/Authentication/Login";
import Dashboard from "@/Components/Main/Dashboard";
import BookParcel from "@/Components/Pages/Dashboard/Users/BookParcel";
import MyParcel from "@/Components/Pages/Dashboard/Users/MyParcel";
import AllUsers from "@/Components/Pages/Dashboard/Admin/AllUsers";
import MyProfile from "@/Components/Pages/Dashboard/Users/MyProfile";
import UpdateBooking from "@/Components/Pages/Dashboard/Users/UpdateBooking";
import AdminHome from "@/Components/Pages/Dashboard/Admin/AdminHome";
import UserHome from "@/Components/Pages/Dashboard/Users/UserHome";
import DeliveryManHome from "@/Components/Pages/Dashboard/DeliveryMan/DeliveryManHome";
import AllParcel from "@/Components/Pages/Dashboard/Admin/AllParcel";
import AllDeliveryman from "@/Components/Pages/Dashboard/Admin/AllDeliveryman";
import DeliveryList from "@/Components/Pages/Dashboard/DeliveryMan/DeliveryList";
import MyReviews from "@/Components/Pages/Dashboard/DeliveryMan/MyReviews";
import Payment from "@/Components/Pages/Dashboard/Users/Payment";
import AdminRoute from "./AdminRoute";
import DeliveryManRoute from "./DeliveryManRoute";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard></Dashboard>
      </PrivateRoutes>
    ),
    children: [
      //Users Only
      {
        path: "booking",
        element: <BookParcel></BookParcel>,
      },
      {
        path: "parcel",
        element: <MyParcel></MyParcel>,
      },
      {
        path: "userHome",
        element: <UserHome></UserHome>,
      },
      {
        path: "myProfile",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "update/:id",
        element: <UpdateBooking></UpdateBooking>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/parcel/item/${params.id}`),
      },
      //Admin Only
      {
        path: "allUsers",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "allParcel",
        element: (
          <AdminRoute>
            <AllParcel></AllParcel>
          </AdminRoute>
        ),
      },
      {
        path: "adminHome",
        element: (
          <AdminRoute>
            <AdminHome></AdminHome>
          </AdminRoute>
        ),
      },
      {
        path: "allDeliveryMan",
        element: (
          <AdminRoute>
            <AllDeliveryman></AllDeliveryman>
          </AdminRoute>
        ),
      },
      //delivery man only
      {
        path: "deliveryHome",
        element: (
          <DeliveryManRoute>
            <DeliveryManHome></DeliveryManHome>
          </DeliveryManRoute>
        ),
      },

      {
        path: "deliveryList",
        element: (
          <DeliveryManRoute>
            <DeliveryList></DeliveryList>
          </DeliveryManRoute>
        ),
      },
      {
        path: "myReviews",
        element: (
          <DeliveryManRoute>
            <MyReviews></MyReviews>
          </DeliveryManRoute>
        ),
      },
    ],
  },
]);

export default router;

import Home from "@/Components/Pages/Home/Home";
import MainLayOut from "../Components/Main/MainLayOut";

import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "@/Components/ErrorPage";
import Register from "@/Components/Authentication/Register";
import Login from "@/Components/Authentication/Login";
import Dashboard from "@/Components/Main/Dashboard";
import BookParcel from "@/Components/Pages/Dashboard/Users/BookParcel";
import MyParcel from "@/Components/Pages/Dashboard/MyParcel";
import Extra from "@/Components/Pages/Extra";

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
      {
        path: "extra",
        element: <Extra></Extra>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "booking",
        element: <BookParcel></BookParcel>,
      },
      {
        path: "parcel",
        element: <MyParcel></MyParcel>,
      },
    ],
  },
]);

export default router;

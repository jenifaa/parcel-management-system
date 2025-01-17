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
    element: <Dashboard></Dashboard>,
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
        path: "myProfile",
        element: <MyProfile></MyProfile>,
      },
      //Admin Only
      {
        path: 'allUsers',
        element: <AllUsers></AllUsers>
      }
    ],
  },
]);

export default router;

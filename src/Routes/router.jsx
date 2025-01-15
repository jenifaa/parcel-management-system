
import Home from '@/Components/Pages/Home/Home';
import MainLayOut from '../Components/Main/MainLayOut'

import { createBrowserRouter } from "react-router-dom";
import ErrorPage from '@/Components/ErrorPage';
import Register from '@/Components/Authentication/Register';
import Login from '@/Components/Authentication/Login';

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut></MainLayOut>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element:<Home></Home>
        },
        {
          path: 'register',
          element:<Register></Register>
        },
        {
          path: 'login',
          element:<Login></Login>
        },
      ]
    },
  ]);


export default router;
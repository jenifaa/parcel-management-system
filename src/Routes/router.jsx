
import Home from '@/Components/Pages/Home/Home';
import MainLayOut from '../Components/Main/MainLayOut'

import { createBrowserRouter } from "react-router-dom";
import ErrorPage from '@/Components/ErrorPage';

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut></MainLayOut>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element:<Home></Home>
        }
      ]
    },
  ]);


export default router;
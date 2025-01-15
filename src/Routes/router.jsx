
import MainLayOut from '../Components/Main/MainLayOut'

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut></MainLayOut>,
    },
  ]);


export default router;
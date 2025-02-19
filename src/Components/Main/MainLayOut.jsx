// import Navbar from "../Shared/Navbar";

import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import ThemeProvider from "../Pages/Home/ThemeProvider";

const MainLayOut = () => {
  return (
    <div>
      <ThemeProvider>
        <Navbar></Navbar>
        <div className="min-h-screen dark:bg-black dark:text-white">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </ThemeProvider>
    </div>
  );
};

export default MainLayOut;

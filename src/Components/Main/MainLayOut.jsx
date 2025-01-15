// import Navbar from "../Shared/Navbar";

import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";


const MainLayOut = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="min-h-screen"><Outlet></Outlet></div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;
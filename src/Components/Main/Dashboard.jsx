import React from 'react';
import useAuth from '../Hooks/useAuth';
import { IoBookmarksOutline } from 'react-icons/io5';
import { LuUserRoundPlus } from "react-icons/lu";
import { FaHome, FaUserCircle } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
const Dashboard = () => {
    const {user} = useAuth();
    return (
        <div>
            <div className='w-56 p-6 min-h-screen bg-green-700'>
                <div>
                    <ul className='text-lg font-semibold space-y-4 text-white'>
                       <NavLink to="/dashboard/booking" className='flex items-center gap-1'><IoBookmarksOutline />Book A Parcel</NavLink>
                        <Link to="/dashboard/parcel" className='flex items-center gap-1'><LuUserRoundPlus />My Parcel</Link>
                        <li className='flex items-center gap-1'><FaUserCircle></FaUserCircle>My Profile</li>
                        <Link to="/" className='flex items-center gap-1'><FaHome />Home</Link>
                    </ul>
                </div>


            </div>
        </div>
    );
};

export default Dashboard;
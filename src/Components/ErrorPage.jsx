import React from 'react';
import error from '../assets/images/Oops! 404 Error with a broken robot-amico.svg'
import { Link } from 'react-router-dom';
import { IoHome } from "react-icons/io5";
const ErrorPage = () => {
    return (
        <div className='flex justify-center items-center'>
            <div>
            <img className='lg:w-[600px]' src={error} alt="" />
            <button className='px-4 py-2 bg-green-600 text-white rounded-md'><Link to='/' className='flex items-center gap-1'><IoHome></IoHome> GO Home</Link></button>
            </div>
           

        </div>
    );
};

export default ErrorPage;
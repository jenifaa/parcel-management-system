import useAuth from '@/Components/Hooks/useAuth';
import React from 'react';

const UserHome = () => {
    const {user} = useAuth()
    return (
        <div>
            <h2 className='text-center text-3xl font-bold'>Hello {user?.displayName}</h2>
            <p className='text-center'>Welcome to your dashboard</p>
        </div>
    );
};

export default UserHome;
import useAuth from '@/Components/Hooks/useAuth';
import React from 'react';

const MyProfile = () => {
    const {user} = useAuth()
    return (
        <div>
            <h2 className='text-4xl text-center'>Hello {user?.displayName}</h2>
        </div>
    );
};

export default MyProfile;
import React from 'react';
import { Progress } from "../ui/progress"

const Loading = () => {
    return (
        <div className='text-black'>
            <Progress value={33} />
        </div>
    );
};

export default Loading;
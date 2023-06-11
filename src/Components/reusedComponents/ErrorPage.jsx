import React from 'react';
import { useRouteError } from 'react-router-dom';
import PrimaryButton from './PrimaryButton';

const ErrorPage = () => {
    const errorstatus = useRouteError();
    return (
        <div className='w-full flex justify-center items-center min-h-screen'>
            <div className='w-fit text-center font-Raleway'>
                <img className='w-2/5 mx-auto animate-bounce' src="https://cdn.dribbble.com/users/3029126/screenshots/9002033/media/b38f573b3ac5ce0a731c096cdcf9a6cd.png?compress=1&resize=400x300" />
                <h2 className='font-bold animate-pulse'>{errorstatus?.statusText}</h2>
                <h2>{errorstatus?.data}</h2>
                <PrimaryButton text="Back to Home" direction="/"/>
            </div>
            
        </div>
    );
};

export default ErrorPage;
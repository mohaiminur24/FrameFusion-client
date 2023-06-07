import React from 'react';
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
    return (
        <div className='mt-5 w-full md:w-3/5'>
            <div className='flex justify-center items-center gap-5'>
                <hr className='w-full'/>
                or
                <hr className='w-full' />
            </div>
            <button className='flex justify-center gap-3 items-center mt-3 border px-5 py-2 rounded-full'><FcGoogle className='text-2xl'/> <span className='text-sm'>Continue with Google</span></button>
        </div>
    );
};

export default SocialLogin;
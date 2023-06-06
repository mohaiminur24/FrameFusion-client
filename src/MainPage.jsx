import React from 'react';
import HeaderLayout from './Components/reusedComponents/HeaderLayout';
import { Outlet } from 'react-router-dom';
import FooterLayout from './Components/reusedComponents/FooterLayout';

const MainPage = () => {
    return (
        <div>
           <HeaderLayout/> 
           <div className='w-full min-h-[calc(100vh-250px)]'><Outlet/></div>
           <FooterLayout/>
        </div>
    );
};

export default MainPage;
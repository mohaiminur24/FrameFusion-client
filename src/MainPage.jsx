import React from 'react';
import HeaderLayout from './Components/reusedComponents/HeaderLayout';
import { Outlet } from 'react-router-dom';

const MainPage = () => {
    return (
        <div>
           <HeaderLayout/> 
           <div><Outlet/></div>
        </div>
    );
};

export default MainPage;
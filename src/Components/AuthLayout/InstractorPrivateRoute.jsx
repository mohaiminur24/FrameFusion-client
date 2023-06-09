import React from 'react';
import UserRole from '../CustomHook/UserRole';
import { useNavigate } from 'react-router-dom';

const InstractorPrivateRoute = ({children}) => {
    const [userpower] = UserRole();
    const navigate = useNavigate();
    if(!userpower){
        return;
    };
    if(userpower === 'instractor'){
        return children;
    }else{
        navigate('/')
    }
};

export default InstractorPrivateRoute;
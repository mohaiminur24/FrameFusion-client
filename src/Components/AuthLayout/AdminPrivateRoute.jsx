import { useContext } from 'react';
import UserRole from '../CustomHook/UserRole';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthancationContext';

const AdminPrivateRoute = ({children}) => {
    const {loading} = useContext(AuthContext);
    const [userpower] = UserRole();
    const navigate = useNavigate();
    if(loading){
        return;
    }
    if(!userpower){
        return;
    };
    if(userpower === 'admin'){
        return children;
    }else{
        navigate('/')
    }
};

export default AdminPrivateRoute;
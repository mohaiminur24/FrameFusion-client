import UserRole from '../CustomHook/UserRole';
import { useNavigate } from 'react-router-dom';

const AdminPrivateRoute = ({children}) => {
    const [userpower] = UserRole();
    const navigate = useNavigate();
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
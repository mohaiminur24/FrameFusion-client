import UserRole from '../CustomHook/UserRole';
import { useNavigate } from 'react-router-dom';

const StudentPrivateRoute = ({children}) => {
    const [userpower] = UserRole();
    const navigate = useNavigate();
    if(!userpower){
        return;
    };
    if(userpower === 'student'){
        return children;
    }else{
        navigate('/')
    }
};

export default StudentPrivateRoute;
import { createBrowserRouter } from "react-router-dom";
import MainPage from "../../MainPage";
import HomePage from "../PageLayout/HomePage/HomePage";
import LoginPage from "../PageLayout/LoginPage/LoginPage";
import Registration from "../PageLayout/RegistrationPage/Registration";
import InstractorPage from "../PageLayout/instractorPage/instractorPage";
import InstractorDashboard from "../PageLayout/InstractorDashboardPage/InstractorDashboard";
import AddNewClass from "../PageLayout/InstractorDashboardPage/AddNewClass";

const route = createBrowserRouter([
    {
        path: "/",
        element: <MainPage/>,
        children:[
            {
                path:'/',
                element: <HomePage/>
            },
            {
                path:"/loginPage",
                element: <LoginPage/>
            },
            {
                path: '/registration',
                element: <Registration/>
            },
            {
                path:'/instractor',
                element: <InstractorPage/>
            },
            {
                path : "/instractorDashboard",
                element: <InstractorDashboard/>
            },
            {
                path: "/addnewclass",
                element: <AddNewClass/>
            }
        ]
    }
]);









export default route;
import { createBrowserRouter } from "react-router-dom";
import MainPage from "../../MainPage";
import HomePage from "../PageLayout/HomePage/HomePage";
import LoginPage from "../PageLayout/LoginPage/LoginPage";
import Registration from "../PageLayout/RegistrationPage/Registration";
import InstractorPage from "../PageLayout/instractorPage/instractorPage";
import Dashboard from "../PageLayout/DashboardPage/Dashboard";
import MyClasses from "../PageLayout/InstractorDashboardPage/MyClasses";
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
            
        ]
    },
    {
        path : "/Dashboard",
        element: <Dashboard/>,
        children:[
            // instractor route is here
            {
                path: "instractorclasses",
                element: <MyClasses/>
            },
            {
                path: "addnewclass",
                element: <AddNewClass/>
            }
        ]
    },
]);









export default route;
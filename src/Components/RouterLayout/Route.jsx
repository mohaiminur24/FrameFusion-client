import { createBrowserRouter } from "react-router-dom";
import MainPage from "../../MainPage";
import HomePage from "../PageLayout/HomePage/HomePage";
import LoginPage from "../PageLayout/LoginPage/LoginPage";
import Registration from "../PageLayout/RegistrationPage/Registration";
import InstractorPage from "../PageLayout/instractorPage/instractorPage";
import Dashboard from "../PageLayout/DashboardPage/Dashboard";
import MyClasses from "../PageLayout/InstractorDashboardPage/MyClasses";
import AddNewClass from "../PageLayout/InstractorDashboardPage/AddNewClass";
import UpdateClass from "../PageLayout/InstractorDashboardPage/UpdateClass";
import InstractorPrivateRoute from "../AuthLayout/InstractorPrivateRoute";
import ManageClasses from "../PageLayout/AdminDashboard/ManageClasses";

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
                element: <InstractorPrivateRoute><MyClasses/></InstractorPrivateRoute>
            },
            {
                path: "addnewclass",
                element: <InstractorPrivateRoute><AddNewClass/></InstractorPrivateRoute>
            },
            {
                path: "updateclass/:id",
                element: <InstractorPrivateRoute><UpdateClass/></InstractorPrivateRoute>,
            },
            // Admin all route is here
            {
                path:"manageclasses",
                element: <ManageClasses/>
            },
            {
                path: "manageusers",
                element: <h1>this is manage users</h1>
            }
        ]
    },
]);









export default route;
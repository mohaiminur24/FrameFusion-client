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
import ManageUsers from "../PageLayout/AdminDashboard/ManageUsers";
import AdminPrivateRoute from "../AuthLayout/AdminPrivateRoute";
import Classes from "../PageLayout/AllClasses/Classes";
import ErrorPage from "../reusedComponents/ErrorPage";
import EnrollClasses from "../PageLayout/StudentDashboard/EnrollClasses";

const route = createBrowserRouter([
    {
        path: "/",
        element: <MainPage/>,
        errorElement: <ErrorPage/>,
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
                path: "/allclasses",
                element: <Classes/>
            }
            
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
                element: <AdminPrivateRoute><ManageClasses/></AdminPrivateRoute>
            },
            {
                path: "manageusers",
                element: <AdminPrivateRoute><ManageUsers/></AdminPrivateRoute>
            },
            // Student all route is here
            {
                path: "myselectclass",
                element: <EnrollClasses/>
            }
        ]
    },
]);









export default route;
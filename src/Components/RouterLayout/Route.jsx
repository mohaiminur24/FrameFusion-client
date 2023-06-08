import { createBrowserRouter } from "react-router-dom";
import MainPage from "../../MainPage";
import HomePage from "../PageLayout/HomePage/HomePage";
import LoginPage from "../PageLayout/LoginPage/LoginPage";
import Registration from "../PageLayout/RegistrationPage/Registration";
import InstractorPage from "../PageLayout/instractorPage/instractorPage";

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
            }
        ]
    }
]);









export default route;
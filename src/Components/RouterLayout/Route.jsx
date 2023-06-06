import { createBrowserRouter } from "react-router-dom";
import MainPage from "../../MainPage";
import HomePage from "../PageLayout/HomePage/HomePage";
import LoginPage from "../PageLayout/LoginPage/LoginPage";

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
            }
        ]
    }
]);









export default route;
import { createBrowserRouter } from "react-router-dom";
import MainPage from "../../MainPage";
import HomePage from "../PageLayout/HomePage/HomePage";

const route = createBrowserRouter([
    {
        path: "/",
        element: <MainPage/>,
        children:[
            {
                path:'/',
                element: <HomePage/>
            }
        ]
    }
]);









export default route;
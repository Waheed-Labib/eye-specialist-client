import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Home from "../pages/Home/Home/Home";
import Signin from "../pages/Signin/Signin";
import CreateAccount from "../pages/CreateAccount/CreateAccount";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/signin',
                element: <Signin></Signin>
            },
            {
                path: '/create-account',
                element: <CreateAccount></CreateAccount>
            }
        ]
    }
])
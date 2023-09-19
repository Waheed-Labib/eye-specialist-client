import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Home from "../pages/Home/Home/Home";
import Signin from "../pages/Signin/Signin";
import CreateAccount from "../pages/CreateAccount/CreateAccount";
import Blog from "../pages/Blog/Blog";
import MyRevies from "../pages/MyReviews/MyRevies";
import AddService from "../pages/AddService/AddService";
import Services from "../pages/Services/Services";

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
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/my-reviews',
                element: <MyRevies></MyRevies>
            },
            {
                path: '/add-service',
                element: <AddService></AddService>
            }
        ]
    }
])
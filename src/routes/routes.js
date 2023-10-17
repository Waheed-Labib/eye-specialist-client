import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Home from "../pages/Home/Home/Home";
import Signin from "../pages/Signin/Signin";
import CreateAccount from "../pages/CreateAccount/CreateAccount";
import AddService from "../pages/AddService/AddService";
import Services from "../pages/Services/Services";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import MyProfileAndReviews from "../pages/MyProfileAndReviews/MyProfileAndReviews";
import PrivateRoute from "./PrivateRoute";
import CheckYourInternetConnection from "../pages/CheckYourInternertConnection/CheckYourInternetConnection";
import Blogs from "../pages/Blogs/Blogs";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <CheckYourInternetConnection></CheckYourInternetConnection>,
        children: [
            {
                path: '/',
                element: <Home></Home>,

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
                element: <Services></Services>,
                loader: () => fetch('https://eye-specialist-server.vercel.app/services'),

            },
            {
                path: '/service-details/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`https://eye-specialist-server.vercel.app/services/${params.id}`),

            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/my-profile-and-reviews',
                element: <PrivateRoute><MyProfileAndReviews></MyProfileAndReviews></PrivateRoute>
            },
            {
                path: '/add-service',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '*',
                element: <ErrorPage></ErrorPage>
            }
        ]
    }
])
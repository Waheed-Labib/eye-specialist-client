import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Home from "../pages/Home/Home/Home";
import Signin from "../pages/Signin/Signin";
import CreateAccount from "../pages/CreateAccount/CreateAccount";
import Blog from "../pages/Blog/Blog";
import AddService from "../pages/AddService/AddService";
import Services from "../pages/Services/Services";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import MyProfileAndReviews from "../pages/MyProfileAndReviews/MyProfileAndReviews";

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
                element: <Services></Services>,
                loader: () => fetch('https://eye-specialist-server.vercel.app/services')
            },
            {
                path: '/service-details/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`https://eye-specialist-server.vercel.app/services/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/my-profile-and-reviews',
                element: <MyProfileAndReviews></MyProfileAndReviews>
            },
            {
                path: '/add-service',
                element: <AddService></AddService>
            },
            {
                path: '*',
                element: <ErrorPage></ErrorPage>
            }
        ]
    }
])
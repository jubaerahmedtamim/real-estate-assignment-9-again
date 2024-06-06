import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import NotFound from "../pages/404NotFound/NotFound";
import PropertyDetails from "../pages/PropertyDetails/PropertyDetails";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import UserProfile from "../pages/UserProfile/UserProfile";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";


export const router = createBrowserRouter([
    {
        path: "/",
        element:<Root></Root>,
        errorElement:<NotFound></NotFound>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/residence.json'),
            },
            {
                path: '/property-details/:id',
                element: <ProtectedRoute><PropertyDetails></PropertyDetails></ProtectedRoute>,
                loader:() => fetch('/residence.json'),
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
            {
                path: '/update-profile',
                element: <ProtectedRoute><UpdateProfile></UpdateProfile></ProtectedRoute> ,
            },
            {
                path: '/user-profile',
                element: <ProtectedRoute><UserProfile></UserProfile></ProtectedRoute>  ,
            },
        ]
    }
]) 
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Details from "../Pages/Media/Details/Details";
import Media from "../Pages/Media/Media";
import MyAlbums from "../Pages/MyAlbums/MyAlbums";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/media',
                element: <Media></Media>
            },
            {
                path: '/myAlbum',
                element: <PrivateRoute><MyAlbums></MyAlbums></PrivateRoute>
            },
            {
                path: '/about',
                element: <PrivateRoute><About></About></PrivateRoute>
            },
            {
                path: '/details/:id',
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: ({ params }) => {
                    return fetch(`https://y-mu-umber.vercel.app/upload/${params.id}`)
                }
            }
        ],

    }
    ,
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Register></Register>
    }
])

export default router;
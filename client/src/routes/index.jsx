import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import React from 'react';

import Home from "../pages/Home";
import LogIn from "../pages/LogIn";

const BrowserRouter = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/login",
        element: <LogIn />,
    },
]);

const MyRouter = () => <RouterProvider router={BrowserRouter} />;

export default MyRouter;
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import React from 'react';

import Home from "../pages/Home";
import Reservation from "../pages/Reservation";

const BrowserRouter = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/reservar-cita",
        element: <Reservation />,
    },
]);

const MyRouter = () => <RouterProvider router={BrowserRouter} />;

export default MyRouter;
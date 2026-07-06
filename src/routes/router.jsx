// src/routes/router.jsx

import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../layouts/RootLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import TwoFactor from "../Pages/TwoFactor/TwoFactor";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/two-factor",
        element: <TwoFactor></TwoFactor>,
      },
    ],
  },
]);

import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blogs from "../Pages/Blogs/Blogs";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import Service from "../Pages/Service/Service";
import Services from "../Pages/Services/Services";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
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
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/services",
        element: <Services></Services>,
        loader: () =>
          fetch("https://server-photographer-tahsinkarim.vercel.app/services"),
      },
      {
        path: "/services/:id",
        element: <Service></Service>,
        loader: ({ params }) =>
          fetch(
            `https://server-photographer-tahsinkarim.vercel.app/services/${params.id}`
          ),
      },
    ],
  },
]);

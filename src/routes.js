import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Decom from "./pages/Decom/Decom";


import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
        path: "/noticias",
        element: <About/>, 
    },
    {
        path: "/inicio",
        element: <Decom/>, 
    },
    {
        path: "/*",
        element: <Home/>, 
    }
  ]);
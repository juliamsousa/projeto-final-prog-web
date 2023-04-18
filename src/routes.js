import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Decom from "./pages/Decom/Decom";


import {
    createBrowserRouter,
  } from "react-router-dom";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/decom",
      element: <Decom/>,
    },
    {
        path: "/noticias",
        element: <About/>, 
    },
    {
        path: "/inicio",
        element: <Home/>,
    },
    {
        path: "/*",
        element: <Home/>, 
    }
  ]);
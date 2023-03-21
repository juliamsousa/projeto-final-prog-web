import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Decom from "./pages/Decom/Decom";


import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

export const router = createBrowserRouter([
    {
      path: "projeto-final-prog-web/",
      element: <Home/>,
    },
    {
      path: "projeto-final-prog-web/decom",
      element: <Decom/>,
    },
    {
        path: "projeto-final-prog-web/noticias",
        element: <About/>, 
    },
    {
        path: "projeto-final-prog-web/inicio",
        element: <Home/>,
    },
    {
        path: "projeto-final-prog-web/*",
        element: <Home/>, 
    }
  ]);
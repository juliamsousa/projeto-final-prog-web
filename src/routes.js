import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";

const AppRoutes = () => {
   return(
       <BrowserRouter>
            <Routes>
                <Route component = { Home }  path="/" exact />   
                <Route component = { About }  path="/decom" />   
            </Routes>
       </BrowserRouter>
   )
}

export default AppRoutes;
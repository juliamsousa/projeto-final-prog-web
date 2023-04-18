import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import {router} from "./routes"
import Home from './pages/Home/Home';
import Decom  from './pages/Decom/Decom';
import About from './pages/About/About';

function App() {
  return (
    <Router>
      {/* <RouterProvider router={router} /> */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/*" element={<Home/>} />
        <Route path="/inicio" element={<Home/>} />
        <Route path="/decom" element={<Decom/>} />
        <Route path="/noticias" element={<About/>} />
      </Routes>
    </Router>
  );
}

export default App;

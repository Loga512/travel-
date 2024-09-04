import React from "react";
import { Route,Routes } from "react-router-dom";
import { Auth } from "./Component/Auth";
import Project from "./Component/Project";
import About from "./Component/About";
import Service from "./Component/Service";
import Contact from "./Component/Contact";
import Login from "./Component/Login";
import Signup from "./Component/Signup";
import Forex from "./Component/Forex";
import Hotel from "./Component/Hotel";
import Flight from "./Component/Flight";
import Bus from "./Component/Bus";
function App() {
  return (
    <div className="App">
      <Auth>
      <Routes>
        <Route path="/" element={<Project/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/forex" element={<Forex/>}/>
        <Route path="/hotel" element={<Hotel/>}/>
        <Route path="/flight" element={<Flight/>}/>
        <Route path="/bus" element={<Bus/>}/>        
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
      </Auth>
    </div>
  );
}

export default App;

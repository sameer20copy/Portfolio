//App.jsx
import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Nav from "../components/Nav";
import Home from "../pages/Home";
import About from "../pages/About";
import Service from "../pages/Service";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";
export default function App(){
  return(
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/projects" element={<Projects/>}/>
      </Routes>
    </Router>
  )
}
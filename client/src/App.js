import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Navbar__ from "./Components/Navbar__/Navbar__";
import HomePage from "./Pages/HomePage/HomePage";
import Footer from "./Components/Footer/Footer";
import Cubix from "./Pages/Cubix/Cubix";
import Hackathon from "./Pages/HackNUThon/Hackathon";
import About from "./Pages/About/About";
import Blogs from "./Pages/Blogs/Blogs";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Navbar__ />
      <div className="nav-bg"></div>
      <div className="app-content">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<HomePage />}></Route>
            <Route path="/cubix" element={<Cubix />}></Route>
            <Route path="/hacknuthon" element={<Hackathon />}></Route>
            <Route path="/about-us" element={<About />}></Route>
            <Route path="/blogs" element={<Blogs />}></Route>
            <Route path="/contact-us" element={<Contact />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;

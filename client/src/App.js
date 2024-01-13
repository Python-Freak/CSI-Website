import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';
import Navbar__ from "./Components/Navbar__/Navbar__"
import HomePage from './Pages/HomePage/HomePage';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar__ />
      <BrowserRouter >
        <Routes>
          <Route exact path='/' element={<HomePage />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Footer /> // Milapp will update */}
    </div>
  );
}

export default App;

import './App.css';
import React from 'react'
import SamplePage from './Pages/SamplePage/SamplePage';
import NavbarCustom from './Components/NavbarCustom/NavbarCustom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavbarCustom />
      <BrowserRouter >
        <Routes>
          <Route exact path='/' element={<><h3>HOME</h3></>}></Route>
          <Route exact path='/sample' element={<SamplePage />}></Route>
        </Routes>
      </BrowserRouter>
      <SamplePage />
    </div>
  );
}

export default App;

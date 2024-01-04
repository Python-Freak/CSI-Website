import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Routes>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

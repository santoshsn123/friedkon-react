import React from 'react';
// import logo from './logo.svg';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Components/Home';
import AdminHome from './Admin/AdminHome';
import Login from './Admin/Components/Login';

function App() {
  return (
    <>
    
    <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/admin/*" element={<AdminHome />}></Route>
                <Route path="/login" element={<Login />}></Route>
              </Routes>
            </BrowserRouter>
    </>
  
  );
}

export default App;

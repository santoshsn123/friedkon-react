import React from "react";
// import logo from './logo.svg';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import AdminHome from "./Admin/AdminHome";
import Login from "./Admin/Components/Login";
import AboutUs from "./Components/AboutUs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />}></Route>
          <Route path="/about-us" element={<AboutUs />}></Route>
          <Route path="/admin/*" element={<AdminHome />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

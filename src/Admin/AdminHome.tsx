import React, { useEffect } from "react";
import { BrowserRouter, NavLink, Route, Routes, useLocation } from "react-router-dom";
// import Login from "./Components/Login";
import { CMS } from "./Components/CMS";
import Users from "./Components/Users";
import appData from "./JSON/appData";
import AddCMS from "./Components/AddCMS";

const AdminHome = () => {
    console.log('appData here : ',appData);
    const location = useLocation();
    console.log('location',location);
    useEffect(()=>{
     
      if(!localStorage.getItem('loggedInUser')){
        window.location.href = '/login';
      }
    },[])
    const logOut = () =>{
      localStorage.clear();
      window.location.href = '/login';
    }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            FriedKon
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <ul className="list-group admin-menu">
            
            <li 
            
            ><NavLink to='/admin/dashboard'   className={({ isActive, isPending, isTransitioning }) =>
            [
              isPending ? "pending" : "",
              isActive ? "active" : "",
              isTransitioning ? "transitioning" : "","list-group-item"
            ].join(" ")}
            >Dashboard</NavLink></li>
            {appData.map(item => {
              return (
                <li  key={item.id}>
                  <NavLink className={({ isActive }) =>
            [
              isActive ? "active" : "","list-group-item"
            ].join(" ")} to={`/admin${item.router}`}>{item.title}</NavLink>
                </li>
              )
            })}
            <li className="list-group-item"><a  onClick={logOut}>Logout</a></li>
            </ul>
          </div>
          <div className="col-md-9 border">
            <Routes>
            <Route path='/dashboard' element={<Users />} />
            <Route path='/users' element={<Users />} />
            {appData.map((item,index) => {
              return (
                  <Route path={`${item.router}/add`}  key={index} element={<AddCMS  appData={item} />} />
              )
            })}
             {appData.map((item,index) => {
              return (
                  <Route path={`${item.router}`} key={index} element={<CMS appData={item} />} />
              )
            })}
             {appData.map((item,index) => {
              return (
                  <Route path={`${item.router}/edit/:id`} key={index} element={<AddCMS appData={item} />} /> 
              )
            })}
            
          </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminHome;

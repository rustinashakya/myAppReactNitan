
import React, { Component } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Error from './Error';
import GetDynamicRouteParamter from './GetDynamicRouteParamter';

const LearnRoute = () => {
  
  return (
    <div>

        

        {/* use navlinks instead of anchor 'a' tag */}
        <NavLink to="/" style={{marginLeft: "20px"}}>Home</NavLink>
        <NavLink to="/about" style={{marginLeft: "20px"}}>About</NavLink>
        <NavLink to="/contact" style={{marginLeft: "20px"}}>Contact</NavLink>


        {/* defining components for specific paths  */}
        <Routes>

          {/* displays error page  */}
          <Route path="*" element={<Error></Error>}></Route>
          
          <Route path="/" element={<Home></Home>}></Route>

          <Route path="/about" element={<About></About>}></Route>

          <Route path="/contact" element={<Contact></Contact>}></Route>

          <Route path="/a" element={<div>a page.</div>}></Route>
          <Route path="/a/a1" element={<div>a1 page.</div>}></Route>
          <Route path="/a/a1/a2" element={<div>a1/a2 page.</div>}></Route>

          {/* anything after '/a', except 'a1' displays any page */}{/* this is route parameter + dynamic parameter  */}
          <Route path="/a/:any" element={<div>any page.</div>}></Route>

          {/* only in the place of 'id1' and 'id2' there can be dynamic parameters  */}
          <Route path="/b/:id1/id/:id2" element={<GetDynamicRouteParamter></GetDynamicRouteParamter>}></Route>


        </Routes>



    </div>
  );
}

export default LearnRoute

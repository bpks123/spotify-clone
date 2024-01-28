import React, { useState } from 'react'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import "./styles/App.css";
import SideBar from './components/sideBar/SideBar';
import Navbar from './components/home/Navbar'
import Home from './components/home/Home';
import Search from './components/home/Search';
import SearchAll from './components/home/SearchAll';
export default function App() {
  

    return (
      <div style={{ display: "flex" }}>
        <SideBar/>
        <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <Navbar/>
          <Router>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/search' element={<Search/>}/>
              <Route path='/searchAll' element={<SearchAll/>}/>
            </Routes>
          </Router>
          
        </div>
        
      </div>
      
    );
}

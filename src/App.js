import React, { useState } from 'react'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import "./styles/App.css";
import SideBar from './components/sideBar/SideBar';
import Navbar from './components/home/Navbar'
import Home from './components/home/Home';
import Search from './components/home/Search';
import SearchAll from './components/home/SearchAll';
import Premium from './layouts/Premium';
import AlbumSongs from './components/Card/AlbumSongs';
export default function App() {
  

    return (
      <Router>
      <div style={{ display: "flex" }}>
        <SideBar/>
        <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
          
          
          <Navbar/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/search' element={<Search/>}/>
              <Route path='/searchAll' element={<SearchAll/>}/>
              <Route path='/album' element={<AlbumSongs/>}/>
              <Route path="/premium" element={<Premium/>}/>
            </Routes>
          
          
        </div>
        
      </div>
      </Router>
      
    );
}

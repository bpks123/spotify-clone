import React, { useState } from 'react'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import "./styles/App.css";
import SideBar from './components/sideBar/SideBar';

export default function App() {
  

    return (
      <div>
        <SideBar/>
      </div>
      
    );
}

import React ,{useEffect, useState} from 'react'
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@mui/material";
import "./search.css"
import "./home.css"

import { FaGreaterThan, FaLessThan, FaPlay } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useStateProvider } from '../utils/StateProvider';
import Footer from "./Footer"
import SearchIcon from "@mui/icons-material/Search";
import romantic from "./Romantic.jpg"
import newrlease from "./newRelease.jpg"
export default function Search() {
  const [{searchClicked, searchSong }, dispatch] = useStateProvider();
  const [searchQuery, setSearchQuery] = useState("");
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
    console.log(e);
  };
useEffect(() => {
    console.log(searchSong);
  }, [searchSong]);
  const handleInput= async ()=>{

  }
  const handleCardClick = () => {
    dispatch({ type: "SET_SELECTED_SONG", payload: searchSong });
  };
  return (
    <div className='homePage'>
          <div className="searchBarSection">
            <SearchIcon style={{ marginLeft: "10px", marginRight: "10px" }} />
            <input
              type="text"
              id="searchBar"
              placeholder="What do you want to listen to?"
              value={searchQuery}
              onChange={handleChange}
              onKeyUp={(e) => handleInput(e)}
            />
          </div>
          <div className='searchBody'>
            <div className='item'>
              <h1 style={{position:"absolute"}}>Romantic</h1>
              <img src={romantic} alt="romanticImg" className='imageFix'/>
            </div>
            <div className='item'>
              <h1 style={{position:"absolute"}}>New Release</h1>
              <img src={newrlease} className='imageFix'/>
            </div>
            <div className='item'>
              <h1 style={{position:"absolute"}}>Romantic</h1>
              <img src={romantic} alt="romanticImg" className='imageFix'/>
            </div>
            <div className='item'>
              <h1 style={{position:"absolute"}}>New Release</h1>
              <img src={newrlease} className='imageFix'/>
            </div>
            <Footer/>
          </div>
          
    </div>
  )
}

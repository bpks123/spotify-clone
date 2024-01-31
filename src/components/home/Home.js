import React,{useEffect, useState} from 'react'
import {
  Box,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Card from "@mui/material/Card";
import { Link, useNavigate } from "react-router-dom";
import "./home.css"
import Footer from "./Footer.js"
import favoriteimg from "./favoriteimg.jpg";
import Cards from '../Card/Cards.js';


export default function Home() {
  const navigate=useNavigate()
  const [musicList, setMusicList] = useState([])
  const projectId="c91eotf57uop";

 async function Search(){
      try{
        const response= await fetch('https://academics.newtonschool.co/api/v1/music/album', {
          headers: {
            projectId: projectId,
          }})
        const result=await response.json()
        setMusicList(result.data)
      }
      catch(error){
        console.log(error)
      }
      
  }
  useEffect(()=>{
    Search()
  },[])
  const displayedMusic = musicList.slice(1, 6);
  const displayedMusic_two = musicList.slice(6, 11);
  const displayedMusic_three = musicList.slice(12, 17);
  const width = window.screen.width;

console.log(musicList)
  return (
    <div className="homePage">
      <div className="homeBody">
        <div className="sections">
          <span className="sectionHeading">Albums</span>
          <Link to="/searchall" style={{ color: "white", paddingRight: "15px" }}>
            Show All
          </Link>
        </div>
        <div className="sectionGrid">
        {displayedMusic.map((music) => (
            <Cards key={music._id} music={music} />
            
          ))}
        </div>
        <div className="sections">
          <span className="sectionHeading">Songs</span>
          <Link to="/searchall" style={{ color: "white", paddingRight: "15px" }}>
            Show All
          </Link>
        </div>
        <div className="sectionGrid">
        {displayedMusic_two.map((music) => (
            <Cards key={music._id} music={music} />
          ))}
        </div>
        <div className="sections">
          <span className="sectionHeading">Music Albums</span>
          <Link to="/searchall" style={{ color: "white", paddingRight: "15px" }}>
            Show All
          </Link>
        </div>
        <div className="sectionGrid">
        {displayedMusic_three.map((music) => (
            <Cards key={music._id} music={music} />
          ))}
        </div>
        <Footer/>
      </div>
      
      
    </div>
  )
}

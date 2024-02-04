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
import { useStateProvider } from '../utils/StateProvider.js';

export default function Home() {
  const navigate=useNavigate()
  const [musicList, setMusicList] = useState([])
  const [{ selectedCard, favorites, list }, dispatch] = useStateProvider();
  const projectId="c91eotf57uop";

 async function Search(){
      try{
        const response= await fetch('https://academics.newtonschool.co/api/v1/music/album', {
        headers: {
          projectId: projectId,
        }})
        const result=await response.json()
        dispatch({ type: "SET_List", payload: result.data })
        setMusicList(result.data)
        console.log(result.data)
        
      }
      catch(error){
        console.log(error)
      }
      
  }
  useEffect(()=>{
    Search()
  },[])

  useEffect(() => {
    console.log("Updated musicList:", musicList);
  }, [musicList]);

  useEffect(() => {
    if (selectedCard) {
      console.log("Selected Card:", selectedCard);
    }
  }, [selectedCard]);

  const displayedMusic = musicList.slice(1, 6);
  const displayedMusic_two = musicList.slice(6, 11);
  const displayedMusic_three = musicList.slice(15, 20);
  const width = window.screen.width;

  useEffect(() => {
    console.log(width);
  }, [width]);
  
// console.log(musicList)
  return (
    <div className="homePage">
      <div className="homeBody">
      {favorites.length !== 0 && localStorage.getItem("jwtToken") ? (
          <Card sx={{ maxWidth: 200 }} onClick={() => navigate("/liked-song")}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={favoriteimg}
                alt="green iguana"
              />
              <CardContent sx={{ background: "#000000", color: "#ffffff" }}>
                <Typography gutterBottom variant="h5" component="div">
                  Liked Songs
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ) : null}
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

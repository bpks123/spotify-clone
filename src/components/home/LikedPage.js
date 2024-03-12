import React ,{useState, useEffect} from 'react'
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Footer from './Footer';
import { useStateProvider } from "../utils/StateProvider";
import { FaPlay } from "react-icons/fa";
import "./likedPage.css"
import { useNavigate } from "react-router-dom";
import favoriteimg from "./favoriteimg.jpg";

export default function LikedPage() {
  const [{ favorites, selectedCard }, dispatch] = useStateProvider();
  console.log("fav", favorites);
  const navigate = useNavigate();

  const handleLikedSong =(song)=>{
    dispatch({ type: "SET_SELECTED_SONG", payload: song });
    navigate('/songs')

  }
  return (
    <Box className="LikedPage">
      <Box sx={{
          display: "flex",
          height: "300px",
          marginBottom: "23px",
          background: "#6459ac",
        }}>
          <Box className="mainSection">
          <Typography variant="h4" sx={{ mt: "85px" }}>
            Favorite Songs
          </Typography>
          <img
            src={favoriteimg}
            style={{
              width: "120px",
              height: "120px",
              display: "flex",
              alignSelf: "baseline",
              marginLeft: "16px",
            }}
          />
        </Box>
        <Box
          sx={{
            border: "1px solid",
            height: "1px",
          }}></Box>
      </Box>
      <Box
        display="flex"
        flexWrap="wrap"
        gap="20px"
        ml="25px"
        mr="25px"
        justifyContent="center">
          {favorites?.map((music) => (
          <Card
            sx={{ maxWidth: 130, mt: "15px", mr: "10px", background: "black" }}
            className="cardMediaHover"
            key={music.id}
            onClick={() => handleLikedSong(music)}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="129"
                width="100"
                image={music.thumbnail}
                alt="Song Image"
              />
              <button className="play_btn">
                <FaPlay className="buttonIcon" />
              </button>
              <CardContent sx={{ background: "#000000", color: "#ffffff" }}>
                <h3 className="title">{music.title}</h3>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
        </Box>
      <Footer/>
    </Box>
  )
}

import React from 'react'
import { FaPlay } from "react-icons/fa";
import "./Card.css"
import {Link, useNavigate } from "react-router-dom";
import { useStateProvider } from '../utils/StateProvider'

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export default function Cards({music}) {
  const [, dispatch] = useStateProvider();
  const navigate=useNavigate()
  const handleCardClick = () => {
    dispatch({ type: "SET_SELECTED_CARD", payload: music });
    console.log(music);
    navigate("/album");
  };

  return (
    <div className="card ">
      <Card 
        sx={{ maxWidth: 160 }} 
        onClick={()=>handleCardClick()}>
          <CardActionArea>
          <CardMedia
            component="img"
            height="129"
            width="100"
            image={music.image}
            sx={{ cursor: "pointer" }}
            alt="green iguana"
          />
          <button className="play_btn">
            <FaPlay className="buttonIcon" />
          </button>
          <CardContent sx={{ background: "#000000", color: "#ffffff" }}>
            <h3 className="title">{music.title}</h3>
            <p className="description">{music.description}</p>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  )
}

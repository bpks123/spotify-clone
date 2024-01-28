import React,{useState} from 'react'
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



export default function Home() {
  const navigate=useNavigate()
  const [musicList, setMusicList] = useState([])
  const projectId="c91eotf57uop";

  return (
    <div className="homePage">
      <h1>THis is home page</h1>
      <div className="homeBody">
        <div className="sections">
          <span className="sectionHeading">Albums</span>
          <Link to="/searchall" style={{ color: "white", paddingRight: "15px" }}>
            Show All
          </Link>
        </div>
        <div className="sectionGrid">
          <div style={{height:"200px",width:"180px",border:"1px solid white",textAlign:"center",padding:"10px"}}>
            1st music
          </div>
          <div style={{height:"200px",width:"180px",border:"1px solid white",textAlign:"center",padding:"10px"}}>
            2nd music
          </div>
          <div style={{height:"200px",width:"180px",border:"1px solid white",textAlign:"center",padding:"10px"}}>
            3rd music
          </div>
          <div style={{height:"200px",width:"180px",border:"1px solid white",textAlign:"center",padding:"10px"}}>
            4th music
          </div>
        </div>
        <div className="sections">
          <span className="sectionHeading">Songs</span>
          <Link to="/searchall" style={{ color: "white", paddingRight: "15px" }}>
            Show All
          </Link>
        </div>
        <div className="sectionGrid">
          <div style={{height:"200px",width:"180px",border:"1px solid white",textAlign:"center",padding:"10px"}}>
            1st music
          </div>
          <div style={{height:"200px",width:"180px",border:"1px solid white",textAlign:"center",padding:"10px"}}>
            2nd music
          </div>
          <div style={{height:"200px",width:"180px",border:"1px solid white",textAlign:"center",padding:"10px"}}>
            3rd music
          </div>
          <div style={{height:"200px",width:"180px",border:"1px solid white",textAlign:"center",padding:"10px"}}>
            4th music
          </div>
        </div>
        <div className="sections">
          <span className="sectionHeading">Music Albums</span>
          <Link to="/searchall" style={{ color: "white", paddingRight: "15px" }}>
            Show All
          </Link>
        </div>
        <div className="sectionGrid">
          <div style={{height:"200px",width:"180px",border:"1px solid white",textAlign:"center",padding:"10px"}}>
            1st music
          </div>
          <div style={{height:"200px",width:"180px",border:"1px solid white",textAlign:"center",padding:"10px"}}>
            2nd music
          </div>
          <div style={{height:"200px",width:"180px",border:"1px solid white",textAlign:"center",padding:"10px"}}>
            3rd music
          </div>
          <div style={{height:"200px",width:"180px",border:"1px solid white",textAlign:"center",padding:"10px"}}>
            4th music
          </div>
        </div>

      </div>
      
      
    </div>
  )
}

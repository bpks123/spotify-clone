import React from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaPlay } from "react-icons/fa";
import "./Card.css";
import { Link, useNavigate } from "react-router-dom";
import { useStateProvider } from "../utils/StateProvider";


export default function SongCard({ song }) {
  const [token, dispatch] = useStateProvider();
  const navigate = useNavigate();

  // To select the song and play with music player
  const handleCardClick = () => {
    if (token.token) {
      dispatch({ type: "SET_SELECTED_SONG", payload: song });
    } else {
      // alert("please login")
      toast.error('Please login to lisen song!')
      setTimeout(() => {
        navigate("/login");        
      }, 1000);
    }
    console.log(song);
    
  };

  return (
    <div
      className="card "
      style={{ background: "black" }}
      onClick={handleCardClick}
    >
      <div>
        <img src={song.thumbnail} style={{ height: "160px" }} />
      </div>
      <button className="play_btn">
            <FaPlay className="buttonIcon" />
          </button>
      <div>
        <p>{song.title}</p>
        <p style={{ color: "gray" }}>{song.mood}</p>
      </div>
    </div>
  );
}

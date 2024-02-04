import React, { useState, useEffect, useRef } from "react";
import { useStateProvider } from "../utils/StateProvider";
import "./songBar.css"
import { BiRepeat, BiShuffle } from "react-icons/bi";
import { FaPause, FaPlay } from "react-icons/fa";
import { PiMicrophoneStageDuotone, PiQueueLight } from "react-icons/pi";
import { HiSpeakerXMark, HiSpeakerWave } from "react-icons/hi2";
import { BsArrowsAngleContract, BsSpeakerFill } from "react-icons/bs";
import { AiOutlineHeart, AiOutlinePlaySquare } from "react-icons/ai";
import { IoMdSkipBackward, IoMdSkipForward } from "react-icons/io";
import playButton from "./playButton.png"
import { Box } from "@mui/material";

export default function SongBar() {

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audiourl, setAudioUrl] = useState("");
  const [{ selectedCard, selectedSong, token }, dispatch] = useStateProvider();

  return (
    <div className="songBar">
      {selectedSong? (
        <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          "@media(max-width:370px)": {
            display: "none",
          },
        }}>
        <img src={selectedSong.thumbnail} className="unknownImg" />
        <h4
          style={{
            display: "flex",
            wordWrap: "break-word",
            textAlign: "center",
          }}>
          {selectedSong.title}
        </h4>
      </Box>
      ):(
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            "@media(max-width:370px)": {
              display: "none",
            },
          }}>
          <img src={playButton} className="unknownImg" />
          <h4
            style={{
              display: "flex",
              wordWrap: "break-word",
              textAlign: "center",
            }}>
            Unknown Song
          </h4>
        </Box>
      )
      }
      <div style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignItems: "center",
        }}>

          <div style={{ paddingBottom: "10px" }}>
          <BiShuffle className="songIcons" />
          <IoMdSkipBackward className="songIcons" />
          {isPlaying ? (
            <FaPause className="songIcons" />
          ) : (
            <FaPlay className="songIcons" />
          )}
          <IoMdSkipForward className="songIcons" />
          <BiRepeat className="songIcons" />
        </div>
        <audio  controls className="audioSpotify">
          <source src={audiourl} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
      <Box
        sx={{
          display: "flex",
          "@media(max-width:600px)": { display: "none" },
        }}>
        <BsArrowsAngleContract className="songIcons" />
        <BsSpeakerFill className="songIcons" />
        <PiMicrophoneStageDuotone className="songIcons" />
        <PiQueueLight className="songIcons" />
      </Box>
      
    </div>
  )
}

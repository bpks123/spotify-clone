import React from 'react'
import "./AlbumSongs.css";
import { Box, Typography, createTheme } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import Footer from "./../home/Footer"

const theme = createTheme();

export default function AlbumSongs() {

  const navigate = useNavigate();

  return (
    <Box
    sx={{
      maxHeight: "calc(100vh - 80px)",
      position: "relative",
      width: "100%",
      right: 0,
      top: 0,
      display: "flex",
      flexDirection: "column",
    }}>
      <div className="albumBody">
          <Box>
            <div className="onImage">
            <Typography variant="h4" sx={{ marginTop: "20px" }}>
              PlayList
            </Typography>
            <Typography
              variant="h6"
              sx={{
                marginTop: "20px",
                textAlign: "center",
                fontFamily: "sans-serif",
              }}>
              {/* {selectedCard.artists[0].name} are on top of the Hottest 50! */}
              Ranveer Singh are on top of the Hottest 50!
            </Typography>
            <Typography
              variant="h6"
              sx={{ marginTop: "20px", textAlign: "center" }}>
                Spotify music // 12,584,964 likes // 10 Songs
              {/* Spotify . 34,134,343 likes . {selectedCard.songs.length}{" "}
              {selectedCard.songs.length <= 1 ? "song" : "songs"} */}
            </Typography>
            </div>
          </Box>
          <Box>
          <TableContainer
            component={Paper}
            sx={{
              background: "linear-gradient(to bottom, #223c59, #121212)",
              marginBottom: "47px",
              pt: "20px",
            }}>
              </TableContainer>
          </Box> <Footer/> 
      </div>

    </Box>
  )
}

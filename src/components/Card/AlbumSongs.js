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
  const handleSongClick=()=>{
    console.log('Going to song page')
    navigate("/songs");
  }

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
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                  <TableCell sx={{ color: "white", paddingLeft: "20px" }}>
                    #
                  </TableCell>
                  <TableCell sx={{ color: "white" }}>Title</TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      display: "table-cell",
                      color: "white",
                      "@media(max-width:600px)": { display: "none" },
                    }}>
                    Album
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      display: "table-cell",
                      color: "white",
                      "@media(max-width:1100px)": { display: "none" },
                    }}>
                    Date Added
                  </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {/* Map the album content need to updated */}
                  <TableRow sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                      color: "white",
                      cursor: "pointer",
                    }}
                    onClick={() => handleSongClick()}>
                      <TableCell component="th"
                      scope="row"
                      sx={{ color: "white", paddingLeft: "20px" }}>
                        1
                      </TableCell>
                      <TableCell align="right"
                      sx={{ color: "white", display: "flex" }}>
                        <div style={{ display: "flex", flex: "auto" }}>
                        <img
                          src=""
                          alt="Thumbnail"
                          className="thumbnails"
                          style={{ marginRight: "10px" }}
                        />{" "}
                        Badal ke Pado hai
                      </div>
                      </TableCell>
                      <TableCell align="right"
                      sx={{
                        display: "table-cell",
                        color: "white",
                        "@media(max-width:600px)": { display: "none" },
                      }}>
                        Chak De India
                      </TableCell>
                      <TableCell align="right"
                      sx={{
                        display: "table-cell",
                        color: "white",
                        "@media(max-width:1100px)": { display: "none" },
                      }}
                      className="hide-on-desktop">
                        12/12/2024
                      </TableCell>
                  </TableRow>
                </TableBody>

              </Table>
              </TableContainer>
          </Box> 
          <Footer/> 
      </div>

    </Box>
  )
}

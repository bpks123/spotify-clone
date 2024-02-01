import React, { useEffect, useState } from "react";
import { Box, Typography, createTheme } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { FaPlay } from "react-icons/fa";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Footer from "./../home/Footer"
import { useNavigate } from "react-router-dom";
import "./../Card/SongCards.css"
const theme = createTheme();

export default function SongCards() {

  const [musicList, setMusicList] = useState([]);
  const navigate = useNavigate();

  const projectId="c91eotf57uop";
  const style = {
    container: {
      display: "table-cell",
      color: "white",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
  };
  return (
    <Box sx={{
      maxHeight: "calc(100vh - 80px)",
      position: "relative",
      width: "100%",
      right: 0,
      top: 0,
      display: "flex",
      flexDirection: "column",
      backgroundColor: "linear-gradient(to bottom, #223c59, #121212)",
    }}>
      <div className="albumBody">
        <Box>
          <div className="onImage">
            <Box display="flex" width="100%" justifyContent="space-evenly">
              <img src="" style={{ width: "150px", height: "150px" }}/>
              <Typography variant="h4"
                sx={{
                  marginTop: "20px",
                  ml: "10px",
                  fontSize: "22px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "monospace",
                  textAlign: "center",
                  "@media(max-width:550px)": {
                    fontSize: "19px",
                  },
                }}>
                  Chad chupa badal me from (Chak De India)
              </Typography>
            </Box>
            <Typography variant="h6" sx={{ marginTop: "20px" }}>
              Sukhwendar Singh
            </Typography>
            <Typography
              variant="h"
              sx={{ marginTop: "20px", marginBottom: "10px" }}>
              34,134,343 Followers . 7 Songs
            </Typography>
          </div>
          <div
            style={{
              border: "1px solid",
              height: "1px",
            }}>
          </div>
        </Box>
        <div style={{ background: "#223c59", paddingTop: "20px" }}>
          <div style={{ display: "flex", background: "#223c59" }}>
            <button className="faplayclass">
              <FaPlay className="faplay" />
            </button>
            {/* Need to change the code add the favorite card */}
            <FavoriteBorderIcon
                // onClick={() => handleFavoriteClick(selectedSong)}
                sx={{
                  width: "40px",
                  height: "40px",
                  marginLeft: "20px",
                  cursor: "pointer",
                }}
              />
          </div>
          <div style={{
              display: "flex",
              flexDirection: "column",
              background: "#223c59",
              paddingTop: "30px",
              paddingBottom: "30px",
            }}>
            <Typography variant="h6" sx={{ ml: "20px" }}>
              Popular Tracks by{" "}
            </Typography>
            <Typography sx={{ ml: "20px" }}>
              Skihawant Singh
            </Typography>
            <TableContainer sx={{ background: "#223c59" }}>
            <Table aria-label="simple table">
              <TableHead>
                  <TableRow>
                    <TableCell sx={{ color: "white", paddingLeft: "20px" }}>
                      #
                    </TableCell>
                    <TableCell sx={{ color: "white" }}>Title</TableCell>
                    <TableCell align="right" sx={style.container}>
                      Date Of Release
                    </TableCell>
                  </TableRow>
                </TableHead>
              <TableBody>
                {/* Need to map the songs to make the table */}
                <TableRow sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                        color: "white",
                        cursor: "pointer",
                      }}>
                    <TableCell
                        component="th"
                        scope="row"
                        sx={{ color: "white", paddingLeft: "20px" }}>
                        1
                      </TableCell>
                      <TableCell
                        sx={{
                          color: "white",
                          display: "flex",
                          alignItems: "center",
                        }}>
                        <img
                          src=""
                          alt="Thumbnail"
                          className="thumbnails"
                          style={{
                            marginRight: "10px",
                            width: "40px",
                            height: "40px",
                            objectFit: "cover",
                          }}
                        />{" "}
                        Chand Chupaa badal me
                      </TableCell>
                      <TableCell align="right" sx={style.container}>
                        8/1/2007, 11:00:00 AM
                      </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            </TableContainer>
          </div>
          <Typography fontFamily={"serif"} variant="h5" m={2}>
            Recommented Artists
          </Typography>
          <Box sx={{ pb: 5 }}>
          <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  margin: "20px",
                  cursor: "pointer",
                  "&:hover": { background: "rgb(28, 48, 71)" },
                }}
                >
                <img
                  src=""
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "30px",
                  }}
                />
                <Typography variant="h6" fontWeight={600} ml={2}>
                  Shukwendar Singh
                </Typography>
              </div>
          </Box>
          <Footer/>
        </div>
      </div>


    </Box>
  )
}

import React,{useState,useEffect} from 'react'
import Box from "@mui/material/Box";
import { BiSolidHome, BiLibrary } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { FaPlus } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import "../../styles/App.css"
import favorite from "./favorite.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useStateProvider } from "../utils/StateProvider";
import spotifylogo from '../../assests/Spotify_Logo_RGB_Green.png'

export default function SideBar() {
  
    const navigate = useNavigate();
    const [isHomeActive, setIsHomeActive] = useState(true);
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [{token, favorites }, dispatch] = useStateProvider();
    const navigateToHome = () => {
      setIsHomeActive(true);
      setIsSearchActive(false);
      dispatch({ type: "SET_SEARCH_CLICKED", payload: false });
      navigate("/");
    };

    const navigateToSearch = () => {
      setIsHomeActive(false);
      setIsSearchActive(true);
      dispatch({ type: "SET_SEARCH_CLICKED", payload: true });
      navigate("/search");
    };
    const isMediumScreen = window.innerWidth;
    useEffect(() => {
      console.log(isMediumScreen);
    }, [isMediumScreen]);

  return (
    <Box
      sx={{
        width: "25%",
        "@media (max-width: 711px)": {
          display: "none",
        },
        mr: 1,
        height: "100%",
      }}>
        <img src={spotifylogo} style={{width:'100px',marginBottom:'1%'}}/>
        <Box
        sx={{
          backgroundColor: "#121212",
          borderRadius: "8px",
          px: "20px",
          py: "12px",
          height: "20%",
        }}>
            {/* Box for Home */}
        <Box
          onClick={navigateToHome}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 3,
            cursor: "pointer",
            color: isHomeActive ? "#ffffff" : "#a7a7a7",
          }}>
          <BiSolidHome
            style={{ fontSize: "30px", fontWeight: "bold", ml: "15px" }}
          />
          <span className="home_search">Home</span>
        </Box>
        {/* Box for Search */}
        <Box
          onClick={navigateToSearch}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 3,
            mt: 3,
            cursor: "pointer",
            color: isSearchActive ? "#ffffff" : "#a7a7a7",
          }}>
          <FiSearch
            style={{ fontSize: "30px", fontWeight: "bold", ml: "15px" }}
          />
          <span className="home_search">Search</span>
        </Box>
        </Box>
        <Box
        sx={{
          backgroundColor: "#121212",
          borderRadius: 3,
          p: "7px",
          mt: 2,
          height: "50%",
        }}>
            {/* Your Library */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 4,
          }}>
          <Box
            sx={{ display: "flex", gap: 2, alignItems: "center", pl: "14px" }}>
            <BiLibrary style={{ fontSize: "30px", fontWeight: "bold" }} />
            <span>Your Library</span>
          </Box>
          <button
            variant="contained"
            color="primary"
            style={{
              background: "black",
              border: "none",
              color: "white",
              cursor: "pointer",
            }}>
            <FaPlus
              style={{
                fontSize: 20,
                borderRadius: "100%",
              }}
            />
          </button>
        </Box>
            {/* Create Playlist */}
        <div>
          {/* Favorites song should be implemented once clicked in the favorite  */}
          {favorites.length != 0 && localStorage.getItem("jwtToken") ? (
            <Box
              id="library2"
              onClick={() => navigate("/liked-song")}
              sx={{ cursor: "pointer" }}>
              <img src={favorite} style={{ width: "30px", height: "30px" }} />
              <h5
                style={{
                  marginLeft: "10px",
                  textAlign: "center",
                  marginTop: "5px",
                }}>
                Liked Songs
              </h5>
            </Box>
          ) : (
            <Box id="library">
              <Box
                sx={{
                  backgroundColor: "#242424",
                  borderRadius: 3,
                  p: "18px",
                  mt: 2,
                }}>
                <div className="library_seg" style={{ gap: "8px" }}>
                  <span
                    style={{
                      fontWeight: "bold",
                      display: "block",
                      marginBottom: "17px",
                    }}>
                    Create your first playlist
                  </span>
                  <span style={{ fontWeight: "semibold" }}>
                    It's easy, we'll help you
                  </span>
                </div>

                <button className="button" onClick={()=>navigate('/playlist')}>Create playlist</button>
              </Box>
              {/* Browse Podcast */}
              <Box
                sx={{
                  backgroundColor: "#242424",
                  borderRadius: 3,
                  p: "18px",
                  mt: 3,
                }}>
                <div className="library_seg" style={{ gap: "8px" }}>
                  <span
                    style={{
                      fontWeight: "bold",
                      display: "block",
                      marginBottom: "17px",
                    }}>
                    Let's find some podcasts to follow
                  </span>
                  <span
                    style={{
                      fontWeight: "semibold",
                      mt: "5px",
                    }}>
                    We'll keep you updated on new episodes
                  </span>
                </div>
                <button className="button" onClick={()=>navigate('/playlist')}>Browse Podcast</button>
              </Box>
            </Box>
          )}
        </div>
      </Box>
      <div id="footer">
        {/* coming soon pages */}
        <div id="sideBar_footer">
          {token && <Link to="/forgot">Change Password</Link>}
          <Link to={'/comingsoon'}>About</Link>
          <Link to={'/comingsoon'}>Privacy Policy</Link>
          <Link to={'/comingsoon'}>Cookies</Link>
          <Link to={'/comingsoon'}>Accessibility</Link>
        </div>
        <div className="language">
          <button className=" languageButton">
            <TbWorld style={{ fontSize: "22px" }} />
            <p style={{ fontSize: "17px" }}>English</p>
          </button>
        </div>
      </div>
    </Box>
  )
}

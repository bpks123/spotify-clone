import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useStateProvider } from "../utils/StateProvider";
import SearchIcon from "@mui/icons-material/Search";
import spotifylogo from '../../assests/Spotify_Logo_RGB_Green.png'

export default function Navbar() {
  const navigate = useNavigate();
  const [{searchClicked, token, name, searchSong }, dispatch] =
    useStateProvider();
  const [open, setOpen] = useState(false);


  const handleLogOut = () => {
    dispatch({ type: "SET_NAME", payload: null });
    dispatch({ type: "SET_TOKEN", payload: null });
    dispatch({ type: "ADD_FAVORITE", payload: [] });
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("userName");
    localStorage.removeItem("favorites");

    navigate("/");
  };
  const toggleDrawer = (isOpen) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(isOpen);
  };  

  const sideList = () => (
    <List>
      <ListItem button
        onClick={() => {
          navigate("/");
          setOpen(false);
        }}>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button
        onClick={() => {
          dispatch({ type: "SET_SEARCH_CLICKED", payload: true });
          navigate("/search");
          setOpen(false);
        }}>
        <ListItemText primary="Search" />
      </ListItem>
      <ListItem button
        onClick={() => {
          navigate("/premium");
          setOpen(false);
        }}>
        <ListItemText primary="Premium" />
      </ListItem>
      <ListItem
        button
        onClick={() => {
          navigate("/liked-song");
          setOpen(false);
        }}>
        <ListItemText primary="Favorites" />
      </ListItem>
      {!token ? (
        <>
          <ListItem
            button
            onClick={() => {
              navigate("/signup");
              setOpen(false);
            }}>
            <ListItemText primary="Sign Up" />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              navigate("/login");
              setOpen(false);
            }}>
            <ListItemText primary="Log In" />
          </ListItem>
        </>
      ) : (
        <>
          <ListItem button>
            <ListItemText
              onClick={() => {
                navigate("/forgot");
                setOpen(false);
              }}
              primary="Change Password"
            />
          </ListItem>
          <ListItem button>
            <ListItemText
              onClick={() => {
                navigate("/login");
                setOpen(false);
              }}
              primary="Log Out"
            />
          </ListItem>
        </>
      )}
    </List>
  );


  return (
    <div>
      <div className="navBar">
      <div id="navBarId">
          <AppBar
            position="static"
            sx={{
              background: "black",
              width: "60px",
              display: "none",
              "@media (max-width: 711px)": {
                display: "flex",
              },
            }}>
              <img src={spotifylogo} style={{width:'100px',marginBottom:'1%'}}/>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
            {sideList()}  
          </Drawer>
        

        </div>
        
        {(token && !searchClicked)?(<div style={{fontSize:"25px",padding:"5px",background:"linear-gradient(to right, #f32170, #ff6b08, #cf23cf, #eedd44)"}}>
         Welcome {localStorage.getItem("userName")} to Spotify Music
        </div>):""}
        
        {token ? (
          <div>
            <Link
              to="/premium"
              className="premiumLink"
              style={{ paddingRight: "10px" }}>
              Premium
            </Link>
            <Link to="/" className="logInLink" onClick={handleLogOut}>
              Log out
            </Link>
          </div>
        ) : (
          <div>
            <Link to="/premium" className="premiumLink">
              Premium
            </Link>
            <Link to="/signup" className="signUpLink">
              Sign Up
            </Link>
            <Link to="/login" className="logInLink">
              Log in
            </Link>
          </div>
        )}

      </div>
    </div>
  );
}

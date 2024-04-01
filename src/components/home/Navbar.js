import React, { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
  const [{searchClicked, token }, dispatch] = useStateProvider();
  const [open, setOpen] = useState(false);
  const userInfomation=localStorage.getItem("userName")
  const [userInfo,setUserInfo]=useState(userInfomation)
  const [flag,setFlag]=useState(false)

  // to change the color of the userInformation
  useEffect(()=>{
    const intervalTime=setInterval(()=>{
      setFlag((prevFlag) => !prevFlag)
    },1000)
    return()=>clearInterval(intervalTime)
  },[])
  


  const handleLogOut = () => {
    dispatch({ type: "SET_NAME", payload: null });
    dispatch({ type: "SET_TOKEN", payload: null });
    dispatch({ type: "ADD_FAVORITE", payload: [] });
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("userName");
    localStorage.removeItem("favorites");
    toast.success("Successfully logout!")
    navigate("/");
  };
  const toggleDrawer = (isOpen) => (event) => {
    // to avoid unnecessary opening when searching the songs
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(isOpen);
  };  
// TO display the side list when display in mobile or tablet
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
              <img src={spotifylogo} style={{width:'100px',marginBottom:'1%'}} onClick={()=>navigate('/')}/>
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
        
        {/* Display when user Logged In */}
        {(token && !searchClicked)?(<div className={flag?"welcome-text":'welcome-colortext'}>
         Welcome {userInfo} to Spotify Music
        </div>):""}
        
        {/* Display when user Logged In */}
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

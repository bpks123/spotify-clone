import React, {useState } from "react";
import "./Navbar.css"
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
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
export default function Navbar() {
    const [searchQuery, setSearchQuery] = useState("")
    const [open, setOpen] = useState(false);

    const handleChange = (e) => {
        setSearchQuery(e.target.value)
        console.log(e)
      }
  return (
    <div>
      <div className="navBar">
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
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                // onClick={toggleDrawer(true)}
                >
                <MenuIcon />
              </IconButton>
            </Toolbar>
        </AppBar>
        <div style={{display:"flex",gap:"20px"}}>
          <Link to="/premium" className="premiumLink">Premium</Link>
          <Link to="/search" className="signUpLink">Sign up</Link>
          <Link to="/search" className="logInLink">Login</Link>
        </div>
      </div>
    </div>
  )
}

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
            <div>Premium</div>
            <div>Sign Up</div>
            <div>Login</div>
        </div>
      </div>
    </div>
  )
}

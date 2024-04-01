import React, { useState } from "react";
import "../Login/Login.css"
import { Link, useNavigate } from "react-router-dom";
import { Box, Container, Typography } from "@mui/material";
import logo from "../../layouts/logo.png"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const projectId="c91eotf57uop";

  let headersList = {
    projectId: projectId,
    "Content-Type": "application/json",
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      const user={
        email:email,
        password:password,
        appType:"music",
      }
      let response= await fetch("https://academics.newtonschool.co/api/v1/user/login",{
        method:'POST',
        headers:headersList,
        body:JSON.stringify({...user})
      })
      // console.log(response)
      if (response.status === 200){
        let result= await response.json()
        console.log(result)
        console.log(result.data.name)
        localStorage.setItem("jwtToken", result.token);
        localStorage.setItem("userName", result.data.name);
        setTimeout(() => {
          navigate("/")
        }, 1000);
        // alert('Sing in succefully')
        toast.success('Sign in Successfully!😀😀')
      }
      else{
        let result= await response.json()
        const message=result.message
        // alert(message)
        toast.error(message)
      }

    }
    catch(error){
      alert(error)      
    }
  };

  return (
    <div>
      <div style={{ background: "#191919" }}>
        <Box>
          <Box
            sx={{
              background: "#000000",
              py: "2.5rem",
              textAlign: "center",
              width: "50%",
              mx: "auto",
              "@media(max-width:900px)": {
                width: "80%",
              },
              "@media(max-width:500px)": {
                width: "95%",
              },
            }}
            className="login-container"
          >
            <img src={logo} style={{ width: "50%", cursor: "pointer" }}
            onClick={() => navigate("/")}/>
            <Typography
            variant="h5"
            sx={{
              fontSize: "2.5rem",
              my: "3rem",
              fontWeight: 600,
              "@media(max-width:900px)": {
                fontSize: "1.5rem",
              },
              "@media(max-width:500px)": {
                fontSize: "1rem",
              },
            }}>
            Log in to Spotify
          </Typography>
          <div className="login-border"></div>
          <form className="form" onSubmit={handleSubmit}>
            <Box sx={{ textAlign: "left", py: "1rem" }}>
          <label htmlFor="email" className="form-label">
                Email or username
              </label>
          <input
                type="text"
                id="email"
                name="email"
                placeholder="Email or username"
                className="email-field"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
              </Box>
              <Box sx={{ textAlign: "left", py: "1rem" }}>
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className="email-field"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              />
            </Box>
            <Box className="w-full text-left py-4">
              <input
                // onClick={handleLogin}
                type="submit"
                value="Log in"
                className="submit-button"
              />
            </Box>
            <Box sx={{ textAlign: "left", py: "1rem" }}>
              <Link to="/forgot" className="forgot-password-link">
                Forgot Password?
              </Link>
            </Box>
          </form>
          <div className="login-border"></div>
          <p className="sign-up-text">
            <span className="sign-up-info">Don't have an account? </span>
            <Link to="/signup" className="sign-up-link">
              Sign up for Spotify
            </Link>
          </p>
          </Box>
        </Box>
      </div>
    </div>
  );
}

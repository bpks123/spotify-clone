import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Input,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Typography,
} from "@mui/material";
import "../Sinup/signup.css"
import logo from "../../layouts/logo.png"


const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export default function Sinup() {

  const [userData, setUserData] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [gender, setGender] = useState("male");
  const [marketingChecked, setMarketingChecked] = useState(false);
  const [shareDataChecked, setShareDataChecked] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if(!email.endsWith('@gmail.com')){
      alert('Please put the valid email!')
    }
    else if(password.length<5){
      alert('Password Must be greater than 4 digit!')
    }
    else if(username.length<3){
      alert('UserName must be 3 digit or greater!')
    }
    else if(isNaN(year) || year>2024 || year<1800
     || isNaN(month) || month<0 || month>12
      || isNaN(day) || day<0 || day>30){
        alert('Plese provide the correct DoB! eg. 2012-12-05')
      }

    else{
      try{
        const user={
          name:username,
          email:email,
          password:password,
          appType:"music",
        }
        let response= await fetch("https://academics.newtonschool.co/api/v1/user/signup",{
          method:'POST',
          headers:headersList,
          body:JSON.stringify({...user})
        })
        if(response.status===403){
          alert('User already Exists!')
        }
        if (response.status === 201){
          let result=await response.json()
          console.log(result)
          console.log(result.data)
          setUserData(response);
          // console.log(userData);
          alert('Sing up succefully')
          setTimeout(()=>{
            navigate("/login")
          },2000)
        }else{
          alert("sign up failed")
        }
      }
      catch(error){
        alert(error)      
      }
    }
    
  };
  const navigate = useNavigate();
  const projectId="c91eotf57uop";
  let headersList = {
    projectId: projectId,
    "Content-Type": "application/json",
  };

  
  return (
    <div style={{ background: "white", margin: "-10px" }}>
      <Container maxWidth="sm"
        className="container"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "white",
          color: "black",
        }}>
          <div className="form-container">
          <img
            src={logo}
            style={{ width: "50%", cursor: "pointer" }}
            onClick={() => navigate("/")}
          />
          <Typography
            variant="h4"
            sx={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              my: "33px",
              fontWeight: 900,
              fontSize: "25px",
              // "@media (max-width: 500px)": {
              //   fontSize: "25px",
              // },
            }}>
            Sign up for free to start listening.
          </Typography>
          <form className="signup-form" onSubmit={handleFormSubmit}>
          <FormControl fullWidth margin="normal">
              <label for="email">What's your email?</label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <label for="password">Create a password</label>
              <Input
                type="password"
                id="password"
                name="password"
                maxLength='8'
                minLength='5'
                placeholder="Password is hidden"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <label for="username">What should we call you?</label>
              <Input
                type="text"
                id="username"
                name="username"
                placeholder="Enter a profile name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <label for="username">DOB (e.g. 2000-09-24 )</label>
            </FormControl>
            <div className="birthdate-input">
              <FormControl className="input-group" margin="normal">
                <label>Year</label>
                <Input
                  type="text"
                  id="year"
                  name="year"
                  placeholder="YYYY"
                  maxLength="4"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  required
                />
              </FormControl>
              <FormControl className="input-group" margin="normal">
                <label>Month</label>
                <Input
                  type="text"
                  id="month"
                  name="month"
                  placeholder="MM"
                  maxLength="2"
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                  required
                />
              </FormControl>
              <FormControl className="input-group" margin="normal">
                <label>Day</label>
                <Input
                  type="text"
                  id="day"
                  name="day"
                  placeholder="DD"
                  maxLength="2"
                  value={day}
                  onChange={(e) => setDay(e.target.value)}
                  required
                />
              </FormControl>
            </div>
            <FormControl fullWidth margin="normal">
              <label for="gender" style={{ marginBottom: "15px" }}>
                What's your gender?
              </label>
              <Select
                id="gender"
                name="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required>
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
            </FormControl>
            <Box className="checkbox-container">
              <input
                type="checkbox"
                id="marketing"
                name="marketing"
                checked={marketingChecked}
                onChange={(e) => setMarketingChecked(e.target.checked)}
              />
              <label for="marketing">
                I would prefer not to receive marketing messages from Spotify
              </label>
            </Box>
            <Box className="checkbox-container">
              <input
                type="checkbox"
                id="shareData"
                name="shareData"
                checked={shareDataChecked}
                onChange={(e) => setShareDataChecked(e.target.checked)}
              />
              <label for="shareData">
                Share my registration data with Spotify's content for providers.
              </label>
            </Box>
            <button
              // onClick={handleSignUp}
              type="submit"
              className="signup-button">
              Sign Up
            </button>
            <Typography
            variant="body2"
            className="policy-link"
            sx={{ fontSize: "10px" }}>
            By clicking on sign-up, you agree to{" "}
            <Link to="/" className="text-black">
              Spotify's Terms and Conditions of Use
            </Link>{" "}
            and{" "}
            <Link to="/" className="text-black">
              Spotify's Privacy Policy
            </Link>
          </Typography>

          <Typography
            variant="body2"
            className="login-link"
            sx={{ textAlign: "center", fontSize: "18px", my: "20px" }}>
            Have an account? <Link to="/login">Log in</Link>
          </Typography>

          </form>
          </div>
         
      </Container>
      
    </div>
  )
}

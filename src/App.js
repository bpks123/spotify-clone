import React, { useState,useEffect } from 'react'
import {BrowserRouter as Router,Routes,Route,Link,useLocation} from 'react-router-dom'
import "./styles/App.css";
import SideBar from './components/sideBar/SideBar';
import Navbar from './components/home/Navbar'
import Home from './components/home/Home';
import Search from './components/home/Search';
import SearchAll from './components/home/SearchAll';
import Premium from './layouts/Premium';
import AlbumSongs from './components/Card/AlbumSongs';
import SongCards from './components/Card/SongCards';
import Login from './components/Login/Login';
import SignUp from './components/Sinup/Sinup';
import  {useStateProvider} from "./components/utils/StateProvider"
import Forget from './components/Login/Forget';
import ArtistSong from './components/Card/ArtistSong';
import LikedPage from './components/home/LikedPage';
import SongBar from './components/Card/SongBar';
import Signup from './components/sideBar/SignUp';

export default function App() {
  const location = useLocation();
  const [{ selectedCard, selectedSong, selectedArtist, token }, dispatch] = useStateProvider();
  
  useEffect(() => {
    const storedToken = localStorage.getItem("jwtToken");

    if (storedToken) {
      dispatch({ type: "SET_TOKEN", payload: storedToken });
    }
  }, []);
  
  return (
    
      <>
      {location.pathname === "/signup" ? (
        <SignUp />
      ) : location.pathname === "/login" ? (
        <Login />
      ) : location.pathname === "/premium" ? (
        <Premium />
      ) : location.pathname === "/forgot" ? (
        <Forget />
      ) : (
        <Main />
      )}
      </>
      
      
    );
}
const Main=()=>{

  const location = useLocation();
  const [
    { selectedCard, selectedSong, selectedArtist, token, favorites },
    dispatch,
  ] = useStateProvider();

  useEffect(() => {
    const storedToken = localStorage.getItem("jwtToken");

    if (storedToken) {
      dispatch({ type: "SET_TOKEN", payload: storedToken });
    }
    const storedFavorites = JSON.parse(localStorage.getItem("favorites"));
    if (
      Array.isArray(storedFavorites) &&
      storedFavorites.length > 0 &&
      storedToken
    ) {
      dispatch({ type: "ADD_FAVORITE", payload: storedFavorites });
    }
  }, []);
  const width = window.screen.width;
  return(
    <div style={{ display: "flex" }}>
        <SideBar/>
        <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <Navbar/>
          
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/search' element={<Search/>}/>
              <Route path='/album' element={selectedCard ? <AlbumSongs /> : <Home />}/>
              <Route path='/songs' element={selectedSong ? <SongCards /> : <Home />}/>
              <Route path="/artist" element={selectedArtist ? <ArtistSong /> : <Home />}/>
              <Route path="/liked-song" element={favorites ? <LikedPage /> : <Home />}/>
              <Route path='/searchAll' element={<SearchAll/>}/>
              
            </Routes>
            {token ? <SongBar /> : <Signup />}
          
        </div>
        
      </div>
  )
}

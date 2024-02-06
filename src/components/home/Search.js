import React ,{useEffect, useState} from 'react'
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@mui/material";
import "./search.css"
import "./home.css"
import Cards from '../Card/Cards';
import { FaGreaterThan, FaLessThan, FaPlay } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useStateProvider } from '../utils/StateProvider';
import Footer from "./Footer"
import SearchIcon from "@mui/icons-material/Search";
import romantic from "./Romantic.jpg"
import newrlease from "./newRelease.jpg"
export default function Search() {
  const [{searchClicked, searchSong }, dispatch] = useStateProvider();
  const [searchQuery, setSearchQuery] = useState("");
  const [romanticMusic, setRomanticMusic] = useState([]);
  const [musicList, setMusicList] = useState([]);
  const [check,setCheck]=useState(false)
  const projectId="c91eotf57uop";

  async function Search(){
    try{
      const response= await fetch('https://academics.newtonschool.co/api/v1/music/album', {
        headers: {
          projectId: projectId,
        }})
      const result=await response.json()
      dispatch({ type: "SET_List", payload: result.data })

      setRomanticMusic(result.data)
      console.log('Romatic')
      console.log(romanticMusic)
      console.log(result.data)
      
    }
    catch(error){
      console.log(error)
    }
    
}
useEffect(()=>{
  Search()
},[])

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
    // console.log(e);
  };
useEffect(() => {
    console.log(searchSong);
  }, [searchSong]);
  const handleInput= async ()=>{

  }
  const handleCardClick = () => {
    dispatch({ type: "SET_SELECTED_SONG", payload: searchSong });
  };
  function backToSearch(){
    setCheck(!check)
  }
  return (
    <>
    {check?(
      <div className='homePage'>
          <div className="searchBarSection">
            <SearchIcon style={{ marginLeft: "10px", marginRight: "10px" }} />
            <input
              type="text"
              id="searchBar"
              placeholder="What do you want to listen to?"
              value={searchQuery}
              onChange={handleChange}
              onKeyUp={(e) => handleInput(e)}
            />
          </div>
            <div className='searchBody'>
            <div className='item' onClick={()=>backToSearch()}>
              <h1 style={{position:"absolute"}}>Romantic</h1>
              <img src={romantic} alt="romanticImg" className='imageFix'/>
            </div>
            <div className='item' onClick={()=>backToSearch()}>
              <h1 style={{position:"absolute"}}>New Release</h1>
              <img src={newrlease} className='imageFix'/>
            </div>
            <div className='item' onClick={()=>backToSearch()}>
              <h1 style={{position:"absolute"}}>Hindi</h1>
              <img src={romantic} alt="romanticImg" className='imageFix'/>
            </div>
            <div className='item' onClick={()=>backToSearch()}>
              <h1 style={{position:"absolute"}}>Panjabi</h1>
              <img src={newrlease} className='imageFix'/>
            </div>
            <Footer/>
          </div>          
    </div>
    ):(
      <div style={{
        position: "relative",
        width: "100%",
        right: 0,
        top: 0,
      }}>
        <button onClick={()=>backToSearch()} className='backButton'>&larr; Back to Search</button>
        <div
          className="homeBody"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            alignItems: "center",
            gap: "20px",
          }}>
            {romanticMusic.map((music) => (
            <Cards music={music} key={music._id} />
          ))}
            
            </div> 
      </div>
    )}
   </> 
  )
}

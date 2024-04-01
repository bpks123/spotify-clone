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
import { useStateProvider } from '../utils/StateProvider';
import Footer from "./Footer"
import SearchIcon from "@mui/icons-material/Search";
import romantic from "./Romantic.jpg"
import newrlease from "./newRelease.jpg"
import hindi from "./bollywood.webp"
import trending from "./trending.jpg"
import top20 from "./top-20.png"
import loading from "./loading.gif"
import SongCard from '../Card/SongCard';
import { useNavigate } from "react-router-dom";
export default function Search() {
  const navigate = useNavigate();
  const [{searchSong,token }, dispatch] = useStateProvider();
  const [searchQuery, setSearchQuery] = useState("");
  const [romanticMusic, setRomanticMusic] = useState([]);
  const [musicList, setMusicList] = useState([]);
  const [allsearchSongs, setAllsearchSongs]=useState([]);
  const [isloading,setIsloading]=useState(true)
  const [check,setCheck]=useState(true)
  const projectId="c91eotf57uop"; 

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };
  useEffect(() => {
    console.log("You have searched song==> "+searchSong);
  }, [searchSong]);

  const handleInput= async (e)=>{
    if(e.key==="Enter"){
      if(searchQuery.length===0){
        dispatch({ type: "SET_SEARCH_SONG", payload: null })
        return
      }
      try{
        const response=await fetch(`https://academics.newtonschool.co/api/v1/music/song?search={"title":"${searchQuery}"}`,{
          headers: {
            projectId: projectId,
          }})
          const result=await response.json();
          console.log('songs')
          setAllsearchSongs(result.data)
          console.log(allsearchSongs)
          const songData=result.data[0]
          
          console.log(songData)
          dispatch({ type: "SET_SEARCH_SONG", payload: songData })
      }
      catch(error){
        console.log(error)
      }

    }
  }
  function backToSearch(){
    setCheck(!check)
    setIsloading(true)
  }
  const songSearch= async (input)=>{
    console.log(input);
     let url;
     if(input=="romantic"){
      //search by mood
      url=`https://academics.newtonschool.co/api/v1/music/song?filter={"mood":"romantic"}`;
     }
     else if(input=="new"){
      //sort the data with release date
      url=`https://academics.newtonschool.co/api/v1/music/song?sort={"release":1}`
     }
     else{
      //convert the input into string, coming data is in form of object
      url=`https://academics.newtonschool.co/api/v1/music/song?filter={"featured":${JSON.stringify(input)}}`
     }
    // if(input == "Trending songs"){
    //   url = `https://academics.newtonschool.co/api/v1/music/song?filter={"featured":"Trending songs"}`;
    // }
    // else if(input == "Top 50 of this month"){
    //   url = `https://academics.newtonschool.co/api/v1/music/song?filter={"featured":"Top 50 of this month"}`;
    // }
    // else if(input == "Top 20 of this week"){
    //   url = `https://academics.newtonschool.co/api/v1/music/song?filter={"featured":"Top 20 of this week"}`;
    // }
    // else if(input=="romantic"){
    //   url=`https://academics.newtonschool.co/api/v1/music/song?filter={"mood":"romantic"}`;
    // }
    // else if(input=="new"){
    //   url=`https://academics.newtonschool.co/api/v1/music/song?sort={"release":1}`
    // }
    try{
      const response= await fetch(url, {
        headers: {
          projectId: projectId,
        }})
      const result=await response.json()

      setMusicList(result.data)
      console.log('Music List')
      console.log(musicList)
      setCheck(!check)
      setIsloading(false)
      
    }
    catch(error){
      console.log(error)
    }
  }
  function searchMenu(){
    setSearchQuery('')
    dispatch({ type: "SET_SEARCH_SONG", payload: null })

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
          
          {searchSong?(
          <div >
            
            
            <button className='backButton'  onClick={()=>searchMenu()}>&larr; Back To Search Menu</button>
            <button className='back'  onClick={()=>searchMenu()}>&larr; Back</button>
            <div className="homeBody"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            alignItems: "center",
            gap: "20px",
          }}>
            {allsearchSongs?allsearchSongs.map((music)=>(
              <SongCard song={music} key={music._id}/>
            )):'Soory! No songs found. Try Again!!!'}
            </div>
          </div>
          ):(
            <div className='searchBody'>
              <div className='item' onClick={()=>songSearch("Trending songs")}>
              <h1 style={{position:"absolute"}}>Trending</h1>
              <img src={trending} alt="romanticImg" className='imageFix'/>
            </div>            
            <div className='item' onClick={()=>songSearch("romantic")}>
              <h1 style={{position:"absolute"}}>Romantic</h1>
              <img src={romantic} alt="romanticImg" className='imageFix'/>
            </div>
            <div className='item' onClick={()=>songSearch("new")}>
              <h1 style={{position:"absolute"}}>New Release</h1>
              <img src={newrlease} className='imageFix'/>
            </div>
            <div className='item' onClick={()=>songSearch("Top 50 of this month")}>
              <h1 style={{position:"absolute"}}>Hindi</h1>
              <img src={hindi} alt="bollywood" className='imageFix'/>
            </div>
            <div className='item' onClick={()=>songSearch("Top 20 of this week")}>
              <h1 style={{position:"absolute",color:"black"}}>Songs</h1>
              <img src={top20
              } className='imageFix'/>
            </div>
            <Footer/>
          </div>   
          )

    }

                   
    </div>
    ):(
      <div style={{
        position: "relative",
        width: "100%",
        right: 0,
        top: 0,
      }}>
        <button onClick={()=>backToSearch()} className='backButton'>&larr; Back to Search</button>
        {isloading?<img src={loading}/>:(
          <div
          className="homeBody"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            alignItems: "center",
            gap: "20px",
          }}>
            {musicList.map((music) => (
            <SongCard song={music} key={music._id} />
          ))}
          </div>
        )}
         
      </div>
    )}
   </> 
  )
}

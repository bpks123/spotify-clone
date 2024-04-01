import React,{ useEffect, useState } from 'react'
import { useStateProvider } from '../utils/StateProvider';
import SongCard from '../Card/SongCard.js';

export default function SearchAllSongs() {
    const [musicList, setMusicList] = useState([]);
    const [{ selectedCard, favorites}, dispatch] = useStateProvider();
    const projectId="c91eotf57uop";
  
    //function for Search all songs
    async function Search(){
      try{
        const response= await fetch('https://academics.newtonschool.co/api/v1/music/song?limit=100', {
          headers: {
            projectId: projectId,
          }})
        const result=await response.json()
  
        setMusicList(result.data)
        console.log(result.data)
        
      }
      catch(error){
        console.log(error)
      }
      
  }
  useEffect(()=>{
    Search()
  },[])
  
  // to see when click on music
  useEffect(() => {
    console.log("Updated musicList:", musicList);
  }, [musicList]);
  
    
  return (
    <div style={{
        position: "relative",
        width: "100%",
        right: 0,
        top: 0,
      }}>
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
            <SongCard key={music._id} song={music} />
          ))}  
            </div> 
      </div>
  )
}

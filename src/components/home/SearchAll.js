import React,{ useEffect, useState } from 'react'
import {Link,useNavigate } from "react-router-dom"
import Cards from '../Card/Cards'
import { useStateProvider } from '../utils/StateProvider';

export default function SearchAll() {
  
  const navigate = useNavigate();
  const [musicList, setMusicList] = useState([]);
  const [{ selectedCard, favorites}, dispatch] = useStateProvider();
  const projectId="c91eotf57uop";

  async function Search(){
    try{
      const response= await fetch('https://academics.newtonschool.co/api/v1/music/album?limit=50', {
        headers: {
          projectId: projectId,
        }})
      const result=await response.json()
      dispatch({ type: "SET_List", payload: result.data })

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
          <Cards music={music} key={music._id} />
        ))}
          
          </div> 
    </div>
  )
}

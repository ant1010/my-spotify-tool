import React, {useState,useEffect} from 'react'
import SongLookup from "./SongLookup.js"
import MassPlaylist from "./MassPlaylist.js";
import "./Body.css"
import Home from "./Home.js"
import Library from "./Library.js"

function Body({spotify,action}) {
   
   const [currentAction, setAction] = useState(action);
   useEffect(() =>{
       setAction(action);
   },[action])
   
    return (
        <div className = "body">
        <h4 className="body_title">{currentAction}</h4>
    {currentAction === "Home" ?  (
         <Home spotify = {spotify}/>
    ) : currentAction === "Search" ? (
        <SongLookup spotify = {spotify}/>
    ) : currentAction === "My Library" ? (
       <Library spotify = {spotify}/>
    ) : currentAction === "Create Mass Playlist" ? (
        <MassPlaylist spotify = {spotify}/>
    ) : null

}        
        </div>
    )
}

export default Body

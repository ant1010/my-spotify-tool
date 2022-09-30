import React, {useState,useEffect} from 'react'
import SongLookup from "./SongLookup.js"
import MassPlaylist from "./MassPlaylist.js";
import "./Body.css"


function Body({spotify,action,switchSong}) {
   
   const [currentAction, setAction] = useState(action);
   useEffect(() =>{
       setAction(action);
   },[action])
   
    return (
        <div className = "body">
        <h1 style = {{marginBottom:'7vh'}}>{currentAction}</h1>
    {currentAction === "Home" ?  (
    <h3>Welcome Back</h3>
    ) : currentAction === "Search" ? (
        <SongLookup switchSong = {switchSong} spotify = {spotify}/>
    ) : currentAction === "My Library" ? (
        <h3>What to listen to again?</h3>
    ) : currentAction === "Create Mass Playlist" ? (
        <MassPlaylist spotify = {spotify}/>
    ) : null

}        
        </div>
    )
}

export default Body

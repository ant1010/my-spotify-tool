import React,{useState, useEffect} from 'react'
import "./Player.css";
import Sidebar from './Sidebar';
import Body from './Body';
import Footer from './Footer';
import useAuth from './useAuth';
import SpotifyWebApi  from "spotify-web-api-js";
import {useDataLayerValue} from "./ServiceProvider"

 const spotify = new SpotifyWebApi({clientId:'6ca42bd62f0542959053535545c73611',});
 function Player({code}) {
     const [action,setAction] = useState('notHome');
     const [currentSong, setSong] = useState();
     const accessToken = useAuth(code);
     const [{user,token,playing,playlists},dispatch] = useDataLayerValue();

     const switcher = (newAction) => {setAction(newAction)}
     const switchSong = (newSong) => { console.log("setSong",newSong);setSong(newSong) }
     useEffect(() => {
         if(!accessToken)return;
         spotify.setAccessToken(accessToken);
         
         spotify.getUserPlaylists('aarreol',{"limit":50})
        .then(function(data) {
        dispatch({type:"SET_PLAYLISTS",playlists:data.items})
        },function(err) {
          console.log('Something went wrong!', err);
        });

        
     },[accessToken]);
    console.log("playlists: ",playlists)
    return (
        <div className = "player">
        <div className = "player__body">
           
            <Sidebar switcher= {switcher}/>
            <Body switchSong = {switchSong} spotify = {spotify} action = {action}/>
            <Footer accessToken = {accessToken} trackUri = {currentSong} />
            
        </div>
            
        </div>
    )
}

export default Player


import React, {useEffect,useState} from "react";
import './App.css';
import Login from "./Login";
import Player from "./Player";
import { getTokenFromURL } from "./spotify";
import SpotifyWebApi  from "spotify-web-api-js";
import {useDataLayerValue} from "./ServiceProvider"

const spotify = new SpotifyWebApi();

function App() {
 //const [token,setToken] = useState(null);
 const [{user,token},dispatch] = useDataLayerValue();
 useEffect(()=>{
  const hash = getTokenFromURL();
  window.location.hash = "";

  const _token = hash.access_token;
  if(_token){
    //setToken(_token);
    dispatch({type: "SET_TOKEN", token:_token, })
    spotify.setAccessToken(_token);
    
    spotify.getMe().then(user => {
      dispatch({type: 'SET_USER', user:user,})
      
    })
  }
  
 });
 console.log("usererer", user);
 console.log("usertoken44",token);
 
  return (
    
    <div className="app">
    {
      token ? <Player spotify={spotify}></Player>:<Login/>
    }
  
    </div>
  );
}

export default App;

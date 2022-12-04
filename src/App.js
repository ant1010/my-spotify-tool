
import React, {useEffect,useState} from "react";
import './App.css';
import Login from "./Login";
import Player from "./Player";
import {useDataLayerValue} from "./ServiceProvider"

const code = new URLSearchParams(window.location.search).get('code');

if(code){
  localStorage.setItem("token",code);
}
function App() {
 
 const [{user,token,playing},dispatch] = useDataLayerValue();
 
 const [token_,setToken] = useState(localStorage.getItem("token"));

 const h = false;
 
//  useEffect(()=>{
//  // const hash = getTokenFromURL();
  
 
//   //window.location.hash = "";

//  // const _token = hash.access_token;
 
//  //console.log(_token,"****");
//   if(code){
//     //setToken(_token);
    
//     localStorage.setItem("token",code);
//     //dispatch({type: "SET_TOKEN", token:_token, })
//     setToken(code);
//    // spotify.setAccessToken(_token);
    
//    // spotify.getMe().then(user => {
//      // dispatch({type: 'SET_USER', user:user,})
      
//    // }
//    // ,[token, dispatch])
//    }
  
//  });
 function logout(){
  localStorage.clear();
  setToken(null);
  
 }
 
  return (
    
    <div className="app">
   
    {
      token_? <Player logout ={logout}code= {token_}></Player>:<Login/>
    }
  
    </div>
  );
}

export default App;

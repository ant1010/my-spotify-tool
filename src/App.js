
import React, {useEffect,useState} from "react";
import './App.css';
import Login from "./Login";
import { getTokenFromURL } from "./spotify";
function App() {
 const [token,setToken] = useState(null);
 useEffect(()=>{
  const hash = getTokenFromURL();
  window.location.hash = "";

  const _token = hash.access_token;
  if(_token){
    setToken(_token);
  }
  console.log("ihaveatoken!", _token);
 });
  return (
    
    <div className="app">
    {
      token ? ( <h1>i am logged in</h1>): (<Login/>)
    }
  
    </div>
  );
}

export default App;

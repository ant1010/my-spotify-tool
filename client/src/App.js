
import React, {useEffect,useState} from "react";
import './App.css';
import Login from "./Login";
import Player from "./Player";
import {useDataLayerValue} from "./ServiceProvider"


const code = new URLSearchParams(window.location.search).get('code');
//const code = 'AQBLkRxHOrXeYoLfeTg3ISkp-7CS4p-fTEGSHMOnIW3ypcufLZC216Yssf_NzNzJBmcycW6zqO7dfyo6-m7CnZhRNnKMOFHRmtWgxwGTzXZa8Ts0Wx2DCxDV6vNeraRPaSKHleBxfb2GRC78vDL0ZkYuDQd8P2UeR2HvUNxN8HABZ8SMZVtUKR26Wjjrp4HmyQ_fO1osqXKkkuYIuy-W4OqwhyWbuamwcvT-DL5gtcgYXFTKfH_liGAuOncRNh_uA5XDZlOY_TYeRbd8eMYl0IVME3c8TX45xWzTKzo5qP-u5LpxuEVnPB59MOL4xgsUaT_PCB332g'
function App() {
 //const [token,setToken] = useState(null);
 const [{user,token,playing},dispatch] = useDataLayerValue();
 const [button,setButton] = useState(0);
 const h = false;
 
//  useEffect(()=>{
//   const hash = getTokenFromURL();
//   console.log(token,"****");
//   window.location.hash = "";

//   const _token = hash.access_token;
//   if(_token){
//     //setToken(_token);
//     dispatch({type: "SET_TOKEN", token:_token, })
//     spotify.setAccessToken(_token);
    
//     spotify.getMe().then(user => {
//       dispatch({type: 'SET_USER', user:user,})
      
//     },[token, dispatch])
//    }
  
//  });
 
 
  return (
    
    <div className="app">
   
    {
      code ? <Player code= {code}></Player>:<Login/>
    }
  
    </div>
  );
}

export default App;

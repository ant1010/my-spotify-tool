import React,{useState,useEffect} from 'react'
import axios from 'axios';
export default function useAuth(code) {
   const [accessToken, setAccessToken] = useState(localStorage.getItem("accessToken"));
   const [refreshToken,setRefreshToken] = useState(localStorage.getItem("refreshToken"));
   const [expiresIn,setExpiresIn] = useState(localStorage.getItem("expiresIn"));
  
  console.log("this is code",code);
   useEffect(() => {
    if(localStorage.getItem("logged")){
       return;
    }
      
      axios.post('/api/login',{
          code,
        }).then(res => {
              setAccessToken(res.data.accessToken);
              localStorage.setItem("accessToken",res.data.accessToken)
              setRefreshToken(res.data.refreshToken);
              localStorage.setItem("refreshToken",res.data.refreshToken)
              localStorage.setItem("expiresIn",res.data.expiresIn)
              setExpiresIn(res.data.expiresIn);
              window.history.pushState({},null,"/")
              localStorage.setItem("logged",true)
          }).catch((err) => {
              window.location = '/';
             console.log(err);
          })
         
   },[code] )
   useEffect(() => {
       if(!refreshToken|| !expiresIn){return}
    const interval = setInterval(( ) =>{
         axios.post('/api/refresh',{
        refreshToken,
      }).then(res => {
            setAccessToken(res.data.accessToken);
            localStorage.setItem("accessToken",res.data.accessToken)
            setExpiresIn(res.data.expiresIn);
            localStorage.setItem("expiresIn",res.data.expiresIn)
            
        }).catch((err) => {
            window.location = '/';
           console.log(err);
        })
    }, (expiresIn - 60) * 1000) 
    return () => clearInterval(interval);
   
   },[refreshToken,expiresIn])
   return accessToken;
}

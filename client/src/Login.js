import React from 'react'
import './Login.css';
import { loginURL } from './spotify';
function Login() {
    return (
        <div className = 'login'>
           
            {/*Spotify logo*/}
            <img src ="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt=""/>
            {/* Login with Spotify buttin */}
            <a href = {loginURL}>LOGIN WITH Spotify</a>

            
            
        </div>
    )
}

export default Login

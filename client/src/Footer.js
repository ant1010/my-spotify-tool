import React from 'react'
import "./Footer.css";
import SongPlayer from "./SongPlayer.js";

function Footer(accessToken,trackUri) {
    console.log(accessToken.trackUri);
    return (
        <div className = "footer">
           <SongPlayer Token = {accessToken.accessToken} trackUri = {accessToken.trackUri?.uri}/>
        </div>
    )
}

export default Footer

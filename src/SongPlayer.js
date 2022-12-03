import React,{useState,useEffect} from 'react';
import SpotifyPlayer from "react-spotify-web-playback"
import {useDataLayerValue} from "./ServiceProvider"

export default function SongPlayer({Token}) {
    const [{token,playing},dispatch] = useDataLayerValue();
    const [play, setPlay] = useState(false)
    
    useEffect(() => setPlay(true), [playing])
    
    if (!Token) return null
    return (
      <SpotifyPlayer
      styles={{
        activeColor: '#fff',
        bgColor: '#0000',
        color: '#fff',
        loaderColor: '#fff',
        sliderColor: '#1cb954',
        trackArtistColor: '#ccc',
        trackNameColor: '#fff',
      }}
      
        token={Token}
        showSaveIcon
        callback={state => {
          if (!state.isPlaying) setPlay(false)
        }}
        play={play}
        uris={playing ? [playing] : []}
      />
    )
}

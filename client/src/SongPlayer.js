import React,{useState,useEffect} from 'react';
import SpotifyPlayer from "react-spotify-web-playback"

export default function SongPlayer({Token,trackUri}) {
    const [play, setPlay] = useState(false)
    console.log(trackUri);
    useEffect(() => setPlay(true), [trackUri])
    
    if (!Token) return null
    return (
      <SpotifyPlayer
      styles={{
        activeColor: '#fff',
        bgColor: '#282828',
        color: '#fff',
        loaderColor: '#fff',
        sliderColor: '#1cb954',
        trackArtistColor: '#ccc',
        trackNameColor: '#fff',
      }}
      Locale = "Devices"
        token={Token}
        showSaveIcon
        callback={state => {
          if (!state.isPlaying) setPlay(false)
        }}
        play={false}
        uris={trackUri ? [trackUri] : []}
      />
    )
}

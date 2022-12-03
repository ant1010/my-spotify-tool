import React,{useState,useEffect} from 'react'
import TrackItem from "./TrackItem.js";
import "./Home.css";
import {useDataLayerValue} from "./ServiceProvider"

export default function Home({spotify}) {

//const [{topTracks},dispatch] = useDataLayerValue();
const [topTracks,setTopTracks] = useState([]);

useEffect(() =>{
    if(topTracks.length != 0){return}
    spotify.getMyTopTracks()
  .then(function(data) {
    let tracks = data.items;
   setTopTracks( tracks.map(track => {
    const smallestAlbumImage = track.album.images.reduce(
        (smallest, image) => {
            if (image.height < smallest.height) return image
            return smallest;
        },
        track.album.images[0]
    )

    return {
        artist: track.artists[0].name,
        title: track.name,
        uri: track.uri,
        albumUrl: smallestAlbumImage.url,
    }
}));
   return;
  }, function(err) {
    console.log('Something went wrong!', err);
  });
  
})
console.log(topTracks)
    return (
        <div className = "home_container">
        <h4>Songs You Listen To The Most:</h4>
            <div className="topTracks" style={{ overflowY: "auto" }}>
          {topTracks.map((track) =>{
              return <TrackItem track = {track} key = {track.uri}/>
          })}
          </div>
        </div>
    )
}

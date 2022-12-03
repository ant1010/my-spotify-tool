import React,{useEffect,useState} from 'react'
import "./Library.css"
import {useDataLayerValue} from "./ServiceProvider"
import TrackItem from "./TrackItem.js";
export default function Library({spotify}) {
    const [{library},dispatch] = useDataLayerValue();
    const [refresh,setRefresh] = useState(false);
    useEffect(()=>{
       
        if(library.length != 0){return}

        spotify.getMySavedTracks({
            limit : 50,
            offset: 1
          })
          .then((res)=> {
            console.log('Done!', res.items.map((track) =>{return track.track.album.images}));
         
            dispatch({type:"SET_LIBRARY",library:res.items.map((track) => {
                const smallestAlbumImage = track.track.album.images.reduce(
                    (smallest, image) => {
                        if (image.height < smallest.height) return image
                        return smallest;
                    },
                    track.track.album.images[0]
                )
            
                return {
                    artist: track.track.artists[0].name,
                    title: track.track.name,
                    uri: track.track.uri,
                    albumUrl: smallestAlbumImage.url,
                }
            })})
          }, function(err) {
            console.log('Something went wrong!', err);
          });

    },[refresh])
   

    console.log(library);
    return (
        <div>
            <button onClick = {() => setRefresh(true)}>Refresh</button>
           <div>{library.map((track) =>{return <TrackItem key = {track.uri} track = {track}/>})}</div> 
        </div>
    )
}

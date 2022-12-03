import React, {useState,useEffect} from 'react'
import "./SongLookup.css"
import {Container,Form} from 'react-bootstrap';
import useAuth from './useAuth';
import SpotifyWebApi  from "spotify-web-api-js";
import TrackItem from "./TrackItem.js";

//const spotifyApi = new SpotifyWebApi({clientId:'6ca42bd62f0542959053535545c73611',});

function SongLookup({spotify}) {

    // const accessToken = useAuth(spotify);
     console.log("lknkln");
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([])

    // useEffect(() => {
    //     if (!accessToken) return;
    //     spotifyApi.setAccessToken(accessToken);
    // }, [accessToken]);
  
    useEffect(() => {
        if (!search) return setSearchResults([])
        let cancel = false;
        spotify.searchTracks(search).then(res => {
            if (cancel) return;
            setSearchResults(
                res.tracks.items.map(track => {
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
                })
            )
           
        })

        return () => (cancel = true)


    }, [search])

    return (

        <div className="container" style={{ height: "90vh" }}>
            <input
            className = "form"
                type="search"
                placeholder="Search Songs/Artists"
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
            <div className="flex-grow-1 my-2" style={{ overflowY: "auto" }}>
                {searchResults.map(track => (
                    <TrackItem
                        track={track}
                        key={track.uri}
                        

                    />
                ))}

            </div>

        </div>

    )
}

export default SongLookup

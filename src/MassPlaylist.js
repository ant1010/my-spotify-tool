import React,{useState,useEffect} from 'react'
import "./MassPlaylist.css";
import TrackItem from "./TrackItem.js";
import Modal from "./Modal";
import {useDataLayerValue} from "./ServiceProvider"

export default function MassPlaylist({spotify}) {
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([])
    const [modalOn,setModalOn] = useState(false);
    const [{user,token,playing,playlists},dispatch] = useDataLayerValue();

    function handleChange(event)
    {
       setSearch(event.target.value);
       
    }
    function handleSubmit(event){
       setSearchResults([]);
        const searchList = search.split("\n");
        console.log("list",searchList);
        searchList.forEach((track) => {
            
            spotify.searchTracks(track).then(res => {
                console.log(res.tracks.items[0])
                const element = res.tracks.items[0];
                const smallestAlbumImage = element.album.images.reduce(
                    (smallest, image) => {
                        if (image.height < smallest.height) return image
                        return smallest;
                    },
                    element.album.images[0]
                )
                const data = { 
                  
                    artist: element.artists[0].name,
                    title: element.name,
                    uri: element.uri,
                    albumUrl: smallestAlbumImage.url,

                   
                }
                setSearchResults(searchResults => [...searchResults,data]);
            })
        
        })
        event.preventDefault();
    }
    useEffect(() =>{
        console.log("searchreasults",searchResults);
    },[searchResults])
    function closeModal(){
        setModalOn(false);
    }
    function testPlaylistName(name){
        console.log(name);
        // update playlists with new addition
       
          for(let i = 0; i < playlists.length;++i){
             if(playlists[i].name == name){
                 return `Playlist called ${name} already exists.`;
             }
            }
        let result = createPlaylist(name)
        return result?"Playlist Created":"Something went wrong" ;
    }
   
    
    function createPlaylist(name) {
        console.log("pressed");
       
       // if(searchResults.length == 0){return;}
       
        //Create a private playlist
        let message = true; 
        let playlist_id = '';
        spotify.createPlaylist('aarreol', { 'name':name,'description': 'My description', 'public': false })
            .then(function (data) {
                playlist_id = data.id;
                 addTracksToPlaylist(playlist_id);  
                console.log('Created playlist!',data);
                
            }, function (err) {
                console.log('Something went wrong!', err);
               message = false;
            });
            spotify.getUserPlaylists('aarreol',{"limit":50})
            .then(function(data) {
            dispatch({type:"SET_PLAYLISTS",playlists:data.items})
            },function(err) {
              console.log('Something went wrong!', err);
            });
               
          return message;
    }
    function addTracksToPlaylist(playlist_id){
        const tracks = searchResults.map(track => (
           track.uri
        ));
        console.log("uritrcka",tracks);
        spotify.addTracksToPlaylist(playlist_id,tracks )
        .then(function(data) {
          console.log('Added tracks to playlist!');
        }, function(err) {
          console.log('Something went wrong!', err);
        });
    }

    return (
        <div className = "container_mp">
           
           
            <form className = "form_mp"onSubmit = {handleSubmit}>
                <button className="submit PS" onClick ={()=>setModalOn(true)} >Create Playlist</button>
          <textarea className = "textBox_mp" value={search} onChange={handleChange} />
                
                <input className = "submit" type="submit" value="Submit" />
               
            </form> 
             
            <div className="flex-grow-1 my-2" style={{ overflowY: "auto" }}>
                {searchResults.map(track => (
                    <TrackItem
                        track={track}
                        key={track.uri}
                    />
                ))}

            </div>
           {modalOn?<Modal playlistName = {testPlaylistName} close = {closeModal}/>:null}
        </div>
    )
}

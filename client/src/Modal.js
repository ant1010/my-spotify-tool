import React,{useState} from 'react'
import "./Modal.css";
export default function Modal({close,playlistName}) {
    const [name,setName] = useState();
    const [message, setMessage] = useState("");
   
    function handleClose(event){
        close(true);
        event.preventDefault();

    }
    function handleSubmit(event){
        const response = playlistName(name);
        
            return setMessage(response);
       
        event.preventDefault();
    }
    return (
        <div className="modal">
            <div className = "box">
            <h3>Give Your Playlist A Name:</h3>
            <input
            className = "name"
                type="search"
                placeholder='"My Playlist"'
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <h5>{message}!</h5>
            <button onClick = {handleSubmit}className = "submit modal_submit">Create Playlist</button>
            <button onClick = {handleClose}className = "submit modal_close">Cancel</button>
            </div>
        </div>
    )
}

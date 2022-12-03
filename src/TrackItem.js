import React from "react";
import "./TrackItem.css";
import {useDataLayerValue} from "./ServiceProvider"
export default function TrackSearchResult({ track }) {
    const [{playing},dispatch] = useDataLayerValue();
  function handlePlay() {
    //selectTrack(track)
    dispatch({type:"SET_PLAYING",playing:track.uri})
    console.log(track);
  }
  console.log(track);
  return (
    <div
      className="cont"
      style={{ cursor: "pointer" }}
      onClick={handlePlay}
    >
      <img src={track.albumUrl} style={{ height: "64px", width: "64px" }} />
      <div className="title">
        <div>{track.title}</div>
        <div className="text">{track.artist}</div>
      </div>
    </div>
  )
}
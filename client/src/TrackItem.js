import React from "react";
import "./TrackItem.css";

export default function TrackSearchResult({ track, selectTrack }) {
  function handlePlay() {
    selectTrack(track)
    console.log(track);
  }

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
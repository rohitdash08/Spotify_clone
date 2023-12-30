import React from "react";
import "./SongRow.css";

function SongRow({ track }) {
  //   console.log("track data:", track);

  // Check if track is falsy or album property is missing
  if (!track || !track.album) {
    console.log("Invalid track data, skipping rendering.");
    return null;
  }

  // Check if album property has images array
  if (!track.album.images || track.album.images.length === 0) {
    console.log("No image property in the album object.");
    return null;
  }

  return (
    <div className="songRow">
      {/* Use optional chaining to handle cases where images might be undefined */}
      <img className="songRow__album" src={track.album.images[0]?.url} alt="" />
      <div className="songRow__info">
        <h1>{track.name}</h1>
        <p>
          {track.artists
            ? track.artists.map((artist) => artist.name).join(", ")
            : "Unknown Artist"}{" "}
          - {track.album.name}
        </p>
      </div>
    </div>
  );
}

export default SongRow;

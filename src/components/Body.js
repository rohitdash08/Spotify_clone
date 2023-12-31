import React from "react";
import Header from "./Header";
import "./Body.css";
import { useDataLayerValue } from "../DataLayer";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SongRow from "./SongRow";

function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();

  console.log("discover weekly data:", discover_weekly);

  if (!discover_weekly || !discover_weekly.tracks) {
    console.error("Discover Weekly or tracks not available");
    return null;
  }

  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body__info">
        <img src={discover_weekly?.images[0].url} alt="image" />

        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon className="body__shuffle" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>

        {/* list of songs */}
        {discover_weekly.tracks.items.map((item) => (
          <SongRow key={item.track.id} track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default Body;

// ROHIT DASH
// 31.12.2023

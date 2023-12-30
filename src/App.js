import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./components/Player";
import { useDataLayerValue } from "./DataLayer";
import Footer from "./components/Footer";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token, currentSong }, dispatch] = useDataLayerValue();

  // Run Code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then(
        (user) => {
          dispatch({
            type: "SET_USER",
            user: user,
          });
        },
        (error) => {
          console.error("Error fetching user:", error);
        }
      );

      spotify.getUserPlaylists().then(
        (playlists) => {
          dispatch({
            type: "SET_PLAYLISTS",
            playlists: playlists,
          });
        },
        (error) => {
          console.error("Error fetching playlists:", error);
        }
      );

      spotify.getPlaylist("37i9dQZF1E38x7azLRlieU").then(
        (response) => {
          console.log("discover Weekly Playlist", response);
          dispatch({
            type: "SET_DISCOVER_WEEKLY",
            discover_weekly: response,
          });
        },
        (error) => {
          console.error("Error fetching Discover Weekly playlist:", error);
        }
      );
    }
  }, []);

  console.log("hello>>>", user);
  console.log("token>>>", token);

  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
      {currentSong && <Footer currentSong={currentSong} />}
    </div>
  );
}

export default App;

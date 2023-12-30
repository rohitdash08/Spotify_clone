import React from "react";
import "./Login.css";
import SpotifyLogo from "../images/Spotify_Logo_CMYK_Black.png";
import { loginUrl } from "../spotify";

function Login() {
  return (
    <div className="login">
      <img src={SpotifyLogo} alt="" />

      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}

export default Login;

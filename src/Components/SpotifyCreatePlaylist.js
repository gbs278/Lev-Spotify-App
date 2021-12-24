import React, { useState, useEffect } from "react";
import User from "../Classes/User";
import Table from "react-bootstrap";
const PLAYLISTS_ENDPOINT = "https://api.spotify.com/v1/";
const SpotifyCreatePlaylist = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setToken(localStorage.getItem("accessToken"));
    }
  }, []);
  const handleCreatePlaylist = () => {
    const user = new User(PLAYLISTS_ENDPOINT, token);
    console.log({ user });
    console.log("passing");
    console.log({ token });
    console.log(localStorage.getItem("accessToken"));
    localStorage.removeItem("currentUser");
    localStorage.setItem("currentUser", JSON.stringify(user));
  };

  return <button onClick={handleCreatePlaylist}>Create Playlist</button>;
};
export default SpotifyCreatePlaylist;

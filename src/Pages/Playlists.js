import React from "react";
import Menu from "../Components/Menu";
import SpotifyGetPlaylists from "../Components/SpotifyGetPlaylists";
import SpotifyCreatePlaylist from "../Components/SpotifyCreatePlaylist";
import "../App.css";
function Playlists() {
  return (
    <>
      <div className="app">
        <Menu />
        <div style={{ color: "red" }}>
          {" "}
          Gal's Comment: Attempted to Get Playlists, but wasn't able to add
          playlists so I wasn't able to get' them
        </div>
        <SpotifyGetPlaylists />
      </div>
      <div style={{ color: "red" }}>
        {" "}
        Gal's Comment: Attempted to Create Playlists with the button below and
        some dummy data, but didn't understand from the spotify api docs how to
        do so. If you want to see how the api call was made, visit
        'src/Classes/User/addPlaylist'
      </div>
      <SpotifyCreatePlaylist />;
    </>
  );
}
export default Playlists;

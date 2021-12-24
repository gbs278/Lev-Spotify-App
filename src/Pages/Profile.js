import React from "react";
import Menu from "../Components/Menu";
import "../App.css";
import SpotifyGetUserInfo from "../Components/SpotifyGetUserInfo";
function Profile() {
  return (
    <>
      <div className="app">
        <Menu />
      </div>
      <div style={{ color: "red" }}>
        {" "}
        Gal's Comment: Might need to press the "Profile" button twice in order
        to get information :)
      </div>

      <SpotifyGetUserInfo />
    </>
  );
}
export default Profile;

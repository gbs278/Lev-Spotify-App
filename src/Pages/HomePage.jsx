import React from "react";
import Menu from "../Components/Menu";
import "../App.css";
function HomePage({ isLoggedIn, setIsLoggedIn }) {
  return (
    <>
      <div className="app">
        <Menu />
      </div>
      <div style={{ color: "red" }}>
        {" "}
        Gal's Comment: Couldn't Access the current song because I wasn't able to
        first get the current playlist :(
      </div>
    </>
  );
}
export default HomePage;

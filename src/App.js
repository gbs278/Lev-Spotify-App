import React, { useState, useEffect } from "react";
import Playlists from "./Pages/Playlists";
import Menu from "./Components/Menu";
import HomePage from "./Pages/HomePage";
import "bootstrap/dist/css/bootstrap.css";
import Login from "./Pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./Pages/Profile";
import "./App.css";

const App = () => {
  localStorage.removeItem("isLoggedIn");
  localStorage.setItem("isLoggedIn", false);
  const [isLoggedIn, setIsLoggedIn] = useState();

  useEffect(() => {
    if (window.location.hash) {
      localStorage.setItem("isLoggedIn", true);
    }
  }, []);
  return (
    <>
      {console.log(localStorage.getItem("isLoggedIn"))}
      {/* disabled={!localStorage.getItem("isLoggedIn")} */}
      <div className="app ">
        {!localStorage.getItem("isLoggedIn") ? (
          <Menu isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        ) : (
          ""
        )}
      </div>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            }
          />
          <Route
            exact
            path="/home"
            element={
              <HomePage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            }
          />
          <Route exact path="/playlists" element={<Playlists />} />
          <Route
            exact
            path="/profile"
            element={<Profile isLoggedIn={isLoggedIn} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;

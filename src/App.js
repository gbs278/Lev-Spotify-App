import React, { useState, useEffect } from "react";
import Playlists from "./Pages/Playlists";
import Menu from "./Components/Menu";
import HomePage from "./Pages/HomePage";
import "bootstrap/dist/css/bootstrap.css";
import Login from "./Pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import { BrowserRouter as Router } from "react-router-dom";
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

// import React, { useEffect } from "react";
// import SpotifyGetPlaylists from "./Components/SpotifyGetPlaylists";
// import './App.css'

// const CLIENT_ID = "12a8f70e2bf341cba73d05954b1783fe"; // insert your client id here from spotify
// const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
// const REDIRECT_URL_AFTER_LOGIN = "http://localhost:3000";
// const SPACE_DELIMITER = "%20";
// const SCOPES = [
//   "user-read-currently-playing",
//   "user-read-playback-state",
//   "playlist-read-private",
// ];
// const SCOPES_URL_PARAM = SCOPES.join(SPACE_DELIMITER);

// /*
// http://localhost:3000/webapp#access_token=ABCqxL4Y&token_type=Bearer&expires_in=3600
// */
// const getReturnedParamsFromSpotifyAuth = (hash) => {
//   const stringAfterHashtag = hash.substring(1);
//   const paramsInUrl = stringAfterHashtag.split("&");
//   const paramsSplitUp = paramsInUrl.reduce((accumulater, currentValue) => {
//     console.log(currentValue);
//     const [key, value] = currentValue.split("=");
//     accumulater[key] = value;
//     return accumulater;
//   }, {});

//   return paramsSplitUp;
// };

// const WebApp = () => {
//   useEffect(() => {
//     if (window.location.hash) {
//       const { access_token, expires_in, token_type } =
//         getReturnedParamsFromSpotifyAuth(window.location.hash);

//       localStorage.clear();

//       localStorage.setItem("accessToken", access_token);
//       localStorage.setItem("tokenType", token_type);
//       localStorage.setItem("expiresIn", expires_in);
//     }
//   });

//   const handleLogin = () => {
//     window.location = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`;
//   };

//   return (
//     <div className="container">
//       <h1>hi</h1>
//       <button onClick={handleLogin}>login to spotify</button>
//       <SpotifyGetPlaylists />
//     </div>
//   );
// };

// export default WebApp;
// import React, {useState} from 'react';
// import logo from './logo.svg';
// import './App.css';
// import {Playlist} from './Classes/Playlist';
// import CreateAccount from './Pages/CreateAccount'
// import  HomePage  from './Pages/HomePage';
// import Login from './Pages/Login';
// import './css/Login.css'
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// function App() {
//   const [loggedIn, setLoggedIn] = useState(false);
//   return (
//     <div className="app">
//       <h1>Application</h1>
//       <BrowserRouter>
//           <Routes>
//           <Route path="/" element={ <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} /> }/>
//           <Route path="/Home" element={<HomePage />}/>
//           <Route path="/CreateAccount" element={<CreateAccount/>}/>

//           </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

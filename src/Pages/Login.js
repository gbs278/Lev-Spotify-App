import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { Container } from "react-bootstrap";

// I wouldn't put this client_end in a .env file so that it cannot be accessed, but its not a client secret ID
const CLIENT_ID = "12a8f70e2bf341cba73d05954b1783fe";
const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
const REDIRECT_URL_AFTER_LOGIN = "http://localhost:3000/";
// SPECIFIES WHAT YOU WANT TO DO OR SEE
const SCOPES = [
  "user-read-currently-playing",
  "playlist-read-private",
  "playlist-modify-public",
  "user-library-read",
];
const SCOPES_URL_PARAM = SCOPES.join("%20");
const getReturnedParamsFromSpotifyAuth = (hash) => {
  const stringAfterHashtag = hash.substring(1);
  const paramsInUrl = stringAfterHashtag.split("&");
  const paramsSplitUp = paramsInUrl.reduce((accumulater, currentValue) => {
    console.log({ currentValue });
    const [key, value] = currentValue.split("=");
    accumulater[key] = value;
    localStorage.setItem("isLoggedIn", true);
    window.location = "http://localhost:3000/home";
    return accumulater;
  }, {});
  return paramsSplitUp;
};

export default function Login({ isLoggedIn, setIsLoggedIn }) {
  useEffect(() => {
    if (window.location.hash) {
      const { access_token, expires_in, token_type } =
        getReturnedParamsFromSpotifyAuth(window.location.hash);

      localStorage.clear();
      localStorage.setItem("accessToken", access_token);
      localStorage.setItem("tokenType", token_type);
      localStorage.setItem("expiresIn", expires_in);
      localStorage.setItem("isLoggedIn", true);
    }
  });
  const handleLogin = () => {
    window.location = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`;
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", true);
    <Navigate to="/home" />;
  };
  return (
    <div>
      {console.log(localStorage.getItem("isLoggedIn"))}
      <Container
        className="d-flex justify-content-center"
        disabled={!localStorage.getItem("isLoggedIn")}
      >
        <a className="btn btn-success btn-lg " onClick={handleLogin}>
          Login With Spotify
        </a>
      </Container>
    </div>
  );
}

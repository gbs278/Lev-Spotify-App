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

// import React, { useEffect } from "react";
// import "../css/Login.css";
// import "bootstrap/dist/css/bootstrap.css";
// import { Button, Container } from "react-bootstrap";

// const CLIENT_ID = "12a8f70e2bf341cba73d05954b1783fe";
// const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
// const REDIRECT_URL_AFTER_LOGIN = "http://localhost:3000/";

// // SPECIFIES WHAT YOU WANT TO DO OR SEE
// const SCOPES = ["user-read-currently-playing", "playlist-read-private"];
// const SCOPES_URL_PARAM = SCOPES.join("%20");

// export default function Login({ isLoggedIn }) {
//   const handleLogin = () => {
//     window.location = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`;

//     //console.log({ isLoggedIn });
//   };
//   //useEffect(() => {}, [isLoggedIn]);

//   return (
//     <>
//       {!isLoggedIn ? (
//         <Container className="d-flex justify-content-center">
//           <a className="btn btn-success btn-lg " onClick={handleLogin}>
//             Login With Spotify
//           </a>
//         </Container>
//       ) : (
//         ""
//       )}
//     </>
//   );
// }

// // import React, { useState , useEffect} from 'react';
// // import User from '../Classes/User';
// // import  { Link, Navigate } from 'react-router-dom';
// // export default function Login({loggedIn, setLoggedIn}) {
// //     const [username, setUsername] = useState();
// //     const [password, setPassword] = useState();
// //     const [errorMessage, setErrorMessage] = useState()
// //     useEffect(() => {
// //       setLoggedIn(false);

// //   },[loggedIn])
// //     const handleUsername = (event) => {
// //         event.preventDefault();
// //         const newdata = event.target.value;
// //         setUsername(newdata)
// //       };
// //       const handlePassword = (event) => {
// //         event.preventDefault();
// //         const newdata = event.target.value;
// //         setPassword(newdata)
// //       };
// //       const handleSubmit = (event) => {
// //         event.preventDefault();
// //         console.log("submitted")
// //         let user = JSON.parse(localStorage.getItem(username))
// //         console.log({user})
// //         console.log("user.password " + user.username + " password " + username)
// //         if(user.password !== password  ){
// //           setErrorMessage("Invalid username or password. Try again")
// //         }
// //         else{
// //           setErrorMessage('')
// //         }
// //         setLoggedIn(true)
// //         localStorage.setItem("loggedInUsername" , username);

// //         }
// //   if(!loggedIn){
// //     return(
// //       <div className="login-wrapper">
// //         <h1>Please Log In</h1>
// //         <form onSubmit={(e) => handleSubmit(e)}>
// //           <label>
// //             <p>Username</p>
// //             <input type="text" onChange={(e) => handleUsername(e)}/>
// //           </label>
// //           <label>
// //             <p>Password</p>
// //             <input type="password" onChange={(e) => handlePassword(e)} />
// //           </label>
// //           <div>
// //             <button type="submit" >Submit</button>
// //           </div>
// //         </form>
// //         {errorMessage && <div style={{ color: 'red' }} className="error"> {errorMessage} </div>}
// //       <Link to = "/CreateAccount">
// //         Create a new account
// //       </Link>
// //       </div>

// //     )

// //   }
// //   else return <Navigate to="/home" />

// //   }

import React, { useState, useEffect } from "react";
import User from "../Classes/User";
import { Table } from "react-bootstrap";

const PLAYLISTS_ENDPOINT = "https://api.spotify.com/v1/";
const SpotifyGetPlaylists = () => {
  const [token, setToken] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setToken(localStorage.getItem("accessToken"));

      const user = new User(PLAYLISTS_ENDPOINT, token);
      console.log({ user });
      console.log("passing");
      console.log({ token });
      console.log(localStorage.getItem("accessToken"));
      localStorage.removeItem("currentUser");

      localStorage.setItem("currentUser", JSON.stringify(user));
      const info = {
        username: localStorage.getItem("userName"),
        id: localStorage.getItem("userId"),
        email: localStorage.getItem("userEmail"),
      };
      console.log({ info });
      setId(info.id);
      setUsername(info.username);
      setEmail(info.email);
      console.log({ user });
      setUsername(localStorage.getItem("userName"));
      setId(localStorage.getItem("userId"));
      setEmail(localStorage.getItem("userEmail"));
      console.log({ id });
      console.log({ username });
      console.log({ email });
    }
  }, [username, id, email]);

  return (
    <div>
      {username ? (
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>User Name</th>
              <th>User Email</th>
              <th>User ID</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{username}</td>
              <td>{email}</td>
              <td>{id}</td>
            </tr>
          </tbody>
        </Table>
      ) : (
        ""
      )}
    </div>
  );
};
export default SpotifyGetPlaylists;

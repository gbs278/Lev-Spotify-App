import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const SpotifyGetPlaylists = () => {
  const [token, setToken] = useState("");
  const [amountOfPlaylists, setAmountOfPlaylists] = useState(0);

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setToken(localStorage.getItem("accessToken"));
    }
    handleGetPlaylists();
  }, []);

  const handleGetPlaylists = () => {
    console.log("in handle get playlists");
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (user) {
      setAmountOfPlaylists(user.playlists.length);
    }
  };

  if (amountOfPlaylists === 0) {
    return (
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>No Playlists</th>
          </tr>
        </thead>
      </Table>
    );
  }
  return (
    <div></div>
    // I WOULD'VE MAPPED THE PLAYLISTS FROM THE USER OBJECT
    //     <Table striped bordered hover variant="dark">
    //   <thead>
    //     <tr>
    //       <th>#</th>
    //       <th>Playlist Name</th>
    //       <th>Number of Songs</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     <tr>
    //       <td>1</td>
    //       <td>Mark</td>
    //     </tr>
    //   </tbody>
    // </Table>
  );
};

export default SpotifyGetPlaylists;

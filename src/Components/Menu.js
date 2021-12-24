import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./Menu.css";
function Menu() {
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.setItem("isLoggedIn", false);
    console.log(localStorage.getItem("isLoggedIn"));
    window.location = "/";
  };
  return (
    <>
      {console.log(localStorage.getItem("isLoggedIn"))}
      <div className="Header ">
        <Navbar bg="black" variant="dark">
          <Container>
            <Navbar.Brand href="/Home">Home</Navbar.Brand>
            <Nav className="justify-content-end">
              <Nav.Link href="/playlists">Playlists</Nav.Link>
              <Nav.Link href="/profile">Profile</Nav.Link>
              <Nav.Link href="/" onClick={handleLogout}>
                Log Out{" "}
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </>
  );
}
export default Menu;

import { Navbar, Nav, Container } from "react-bootstrap";
import React from "react";
import logo from "../assets/netflix_logo.png";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <header>
        <Navbar className="navbar navbar-expand-lg navbar-dark">
          <Container fluid>
            <Navbar.Brand>
              <img src={logo} id="logo" alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link to="/home" className="navbar-links">
                  <div>Home</div>
                </Link>
                <Link to="/tv-shows" className="navbar-links">
                  <div>TV Shows</div>
                </Link>
                <Link to="/movies" className="navbar-links">
                  <div>Movies</div>
                </Link>
                <Link to="" className="navbar-links">
                  <div>Recently Added</div>
                </Link>
                <Link to="" className="navbar-links">
                  <div>My List</div>
                </Link>
              </Nav>
              <Nav>
                <Nav.Link href="#login">Login</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}

export default Header;

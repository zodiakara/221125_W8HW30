import { Navbar, Nav, Container } from "react-bootstrap";
import React from "react";
import logo from "../assets/netflix_logo.png";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  console.log("LOCATION PATHNAME", location.pathname);

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
                <div
                  className={
                    location.pathname === "/home"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Home
                </div>
              </Link>
              <Link to="/tv-shows" className="navbar-links">
                <div
                  className={
                    location.pathname === "/tv-shows"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  TV Shows
                </div>
              </Link>
              <Link to="/movies" className="navbar-links">
                <div
                  className={
                    location.pathname === "/movies"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Movies
                </div>
              </Link>
              <Link to="/recently-added" className="navbar-links">
                <div
                  className={
                    location.pathname === "/recently-added"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Recently Added
                </div>
              </Link>
              <Link to="my-list" className="navbar-links">
                <div
                  className={
                    location.pathname === "/my-lists"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  My List
                </div>
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
};

export default Header;

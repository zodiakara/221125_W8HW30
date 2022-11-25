import { Navbar, Nav, Container } from "react-bootstrap";
import React from "react";

class FooterItem extends React.Component {
  render() {
    return (
      <header>
        <Navbar className="navbar navbar-expand-lg navbar-dark">
          <Container fluid>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#movies">Movies</Nav.Link>
                <Nav.Link href="#link">Series</Nav.Link>
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

export default FooterItem;

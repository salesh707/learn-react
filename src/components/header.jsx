import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

class Header extends Component {
  render() {
    return (
      <header className="main-header">
        <Navbar collapseOnSelect expand="lg">
          <Container>
            <Navbar.Brand href="#">
              {/* <img src="%PUBLIC_URL%/logo.png" alt="Logo" /> */}
              <img src="img/logo.png" alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link href="#">Our Environment</Nav.Link>
                <Nav.Link href="#">Risk & Opportunity</Nav.Link>
                <Nav.Link href="#">Risk & Opportunity</Nav.Link>
                <Nav.Link href="#">Technology</Nav.Link>
                <Nav.Link href="#">Better Decisions</Nav.Link>
                <Nav.Link href="#">Resources</Nav.Link>
                <Nav.Link href="#">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}

export default Header;

import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar
        collapseOnSelect={true}
        expand="lg"
        fixed="top"
        bg="primary"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="/">CPPS Coaching</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} eventKey="1" className="nav-link" to="/">
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                eventKey="2"
                className="nav-link"
                to="/courses"
              >
                Our courses
              </Nav.Link>
              <Nav.Link as={Link} eventKey="3" className="nav-link" to="/about">
                About us
              </Nav.Link>
              <Nav.Link
                as={Link}
                eventKey="4"
                className="nav-link"
                to="/contact"
              >
                Contact us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;

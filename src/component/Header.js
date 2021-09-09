import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Logo from "../img/olarm_logo.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Header() {
  return (
    <header className="bg-img">
      <Navbar variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img alt="" src={Logo} className="d-inline-block align-top" />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="navLinks">
            <Nav className="me-auto">
              <Nav.Link href="#home" className="navLinks--active">
                HOME
              </Nav.Link>
              <Nav.Link href="#link" className="link">
                FEATURES
              </Nav.Link>
              <Nav.Link href="#link">PLANS</Nav.Link>
              <Nav.Link href="#link">MEET OLARM</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link className="links" href="">
                Sign up
              </Nav.Link>
              <Nav.Link className="links navCta" href="">
                Sign in
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col className="textCont">
            <h1 className="heading">
              World's <span className="headingActive">Smartest</span> Home
              Security
            </h1>
            <p className="supportText">
              Unique security experiences with more than 300,000 clients, Simple
              Installation, Convenience & Free Monitoring
            </p>
            <button className="ctaBtn">VISIT SHOP</button>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col>
            <div className="icons">
              <i className="fab fa-google"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-facebook-f"></i>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;

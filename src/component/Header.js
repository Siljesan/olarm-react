import React from 'react'

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Logo from '../img/olarm_logo.png'


function Header() {
    return (
<header className='bg-img'>
<Navbar variant='dark' expand="lg">
  <Container>
  <Navbar.Brand href="#home">
        <img
          alt=""
          src={Logo}
          height="30"
          className="d-inline-block align-top"
        />{' '}
      </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className='navLinks'>
      <Nav className="me-auto">
        <Nav.Link href="#home" className='active'>HOME</Nav.Link>
        <Nav.Link href="#link" className='link'>FEATURES</Nav.Link>
        <Nav.Link href="#link">PLANS</Nav.Link>
        <Nav.Link href="#link">MEET OLARM</Nav.Link>
      </Nav>
      <Nav>
      <Nav.Link className='active' href="">Sign up</Nav.Link>
      <Nav.Link className='active navCta' href="">Sign in</Nav.Link>
    </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</header>
    )
}

export default Header

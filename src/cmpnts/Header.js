import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const Header = ({loggedinState,handleLogin}) => {
    
  return (
    <Navbar
      bg="info"
      variant="dark"
      expand="sm"
      fixed="top"
      className="justify-content-between"
    >
      <Navbar.Brand>habbitual</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
         {!loggedinState && <Nav.Link onClick={() => handleLogin(true)}>Sign In</Nav.Link>}
          <Nav.Link>Home</Nav.Link>
          {loggedinState && <Nav.Link className="active">Habits</Nav.Link>}
          {loggedinState && <Nav.Link onClick={() => handleLogin(false)}>Logout</Nav.Link>}
          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;

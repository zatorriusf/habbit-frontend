import React, { useState } from "react";
import { Modal, Navbar, Nav } from "react-bootstrap";
import LoginForm from './LoginForm'

const Header = ({ loggedinState, handleLogin }) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const handleModal =() =>{
      setShowLoginModal(!showLoginModal);
  }
  return (<>
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
          {!loggedinState && (
            <Nav.Link onClick={handleModal}>Sign In</Nav.Link>
          )}
          <Nav.Link>Home</Nav.Link>
          {loggedinState && <Nav.Link className="active">Habits</Nav.Link>}
          {loggedinState && (
            <Nav.Link onClick={() => handleLogin(false)}>Logout</Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <Modal show = {showLoginModal} onHide = {handleModal}><LoginForm handleLogin={handleLogin} handleModal={handleModal}/></Modal>
    </>
  );
};

export default Header;

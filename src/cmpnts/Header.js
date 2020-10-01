import React, { useState } from "react";
import { Modal, Navbar, Nav } from "react-bootstrap";
import AuthForm from "./AuthForm";

const Header = ({
  loggedinState,
  handleLogin,
  handleLogout,
  handleRegisterandLogin,
}) => {
  const [authMode, setAuthMode] = useState(null);
  const handleModal = (mode) => {
    setAuthMode(mode);
  };
  return (
    <>
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
              <Nav.Link onClick={() => handleModal("login")}>Sign In</Nav.Link>
            )}
            {!loggedinState && (
              <Nav.Link onClick={() => handleModal("register")}>
                Register
              </Nav.Link>
            )}
            {loggedinState && <Nav.Link className="active">Habits</Nav.Link>}
            {loggedinState && (
              <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={authMode === "login"} onHide={() => handleModal(null)}>
        <AuthForm
          handleAuth={handleLogin}
          handleModal={handleModal}
          confirmText="Sign In"
        />
      </Modal>
      <Modal show={authMode === "register"} onHide={() => handleModal(null)}>
        <AuthForm
          handleAuth={handleRegisterandLogin}
          handleModal={handleModal}
          confirmText="Create Account"
        />
      </Modal>
    </>
  );
};

export default Header;

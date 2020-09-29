import React from "react";
import { Button, Form } from "react-bootstrap";

const LoginForm = ({ handleModal, handleLogin }) => {
  const successfulLogin = () => {
    handleLogin(true);
    handleModal();
  };
  return (
    <Form className="p-3">
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="secondary" onClick={() => handleModal()}>
        Close
      </Button>
      <Button variant="info" onClick={successfulLogin}>
        Sign In
      </Button>
    </Form>
  );
};

export default LoginForm;

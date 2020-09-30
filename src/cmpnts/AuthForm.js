import React,{useRef} from "react";
import { Button, Form } from "react-bootstrap";

const AuthForm = ({ handleModal, handleAuth,confirmText }) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const submitAuthInfo = () => {
    if(emailRef.current.value === '' || passwordRef.current.value === '' ){
      return;
    }
    const authObject = {
      email : emailRef.current.value,
      password : passwordRef.current.value
    }
    handleAuth(authObject);
    handleModal();
  };
  return (
    <Form className="p-3">
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" ref={emailRef}/>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" ref={passwordRef}/>
      </Form.Group>
      <Button variant="secondary" onClick={() => handleModal()}>
        Cancel
      </Button>
      <Button variant="info" onClick={submitAuthInfo}>
        {confirmText}
      </Button>
    </Form>
  );
};

export default AuthForm;

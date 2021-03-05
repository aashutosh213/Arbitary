import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../SigninForm/SigninForm.css";

const SignupForm = () => {
  const handleClick = () => {
    console.log("hi");
  };
  return (
    <div>
      <div className="formAdjust">
        <Form className="signinForm">
        <Form.Group controlId="formBasicEmail">
            <Form.Label className="signinForm ">Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label className="signinForm ">Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label className="signinForm">Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Sign Up
          </Button>
        </Form>
        <p
          onClick={() => handleClick()}
          style={{ cursor: "pointer" }}
          className="newuser"
          href="#signin"
        >
          Already s user? Click here to Sign In!
        </p>
      </div>
    </div>
  );
};

export default SignupForm;

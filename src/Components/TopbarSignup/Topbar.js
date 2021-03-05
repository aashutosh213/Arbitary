import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./Topbar.css";
// import Button from "react-bootstrap/Button";
// import Form from 'react-bootstrap/Form'

const Topbar = () => {
  return (
    <div className ="Topbar">
      <Navbar variant="dark">
        <Navbar.Brand href="#home">Arbitary</Navbar.Brand>
        <Nav className="Navlinks">
          <Nav.Link href="#home">Sign In</Nav.Link>
          <Nav.Link href="#features">Sign Up</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Topbar;

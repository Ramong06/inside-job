import React from "react";
import { Link } from "react-router-dom";

function NavBar(props) {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Link href="#home">Home</Link>
        <Link href="#features">Features</Link>
        <Link href="#pricing">Pricing</Link>
      </Nav>
    </Navbar>
  );
}

export default NavBar;

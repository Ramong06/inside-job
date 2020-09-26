import React from "react";
import { Navbar, NavbarBrand, Container } from "react-bootstrap";
import "./style.css";



function Foot() {
  return (
        <div className="fixed-bottom" id="footer">  
            <Navbar color="dark" dark>
                <Container>
                    <NavbarBrand>Footer</NavbarBrand>
                </Container>
            </Navbar>
        </div>
  );
}

export default Foot;

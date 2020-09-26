import React from "react";
import { Navbar, NavbarBrand, Container } from "react-bootstrap";
import "./style.css";



function Foot() {
  return (
        <div className="fixed-bottom" id="footer">  
            <Navbar color="dark" dark>
                <Container>
                    <NavbarBrand><span className="copyright d-none d-sm-block" id="navBrand"> © Ehson Raza, Mariam Ghaffar, Tolu Alimi, Ramon Garza III 2020</span></NavbarBrand>
                </Container>
            </Navbar>
        </div>
  );
}

export default Foot;

import React from "react";
import "../App.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Container, Image } from "react-bootstrap";
import AstroPathos from '../assets/img/AstroPathos.svg';

function Header() {
  return (
    <div className="container-fluid">
      <div className="header-layout row">
        <Navbar>
          
            <Navbar.Brand href="/home">
                <Image src={AstroPathos} width={125}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto mt-2">
                <Nav.Link href="/astrology">Astroloji</Nav.Link>
                <Nav.Link href="/blog">Blog</Nav.Link>
                <Nav.Link href="/contact">İletişim</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          
        </Navbar>
      </div>
    </div>
  );
}
export default Header;

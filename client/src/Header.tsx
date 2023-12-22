import React from 'react';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { ReactComponent as Logo } from './assets/logo.svg';
import { ReactComponent as Arrowdown } from './assets/arrowdown.svg';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';


export default function Header() {
  return (
    <div className="header-section">
      <Navbar collapseOnSelect expand="lg" className="nav-background">
        <Container>
          <Navbar.Brand href="#home"><Logo /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown className={"d-grid"} style={{ top: "6px", position: "relative" }} title={
                <span>Understand <Arrowdown style={{ marginLeft: "12px" }} /></span>
              }>
                <NavDropdown.Item href="#action/3.1">Item One</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2"> Item Two </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Item Three</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown style={{ top: "6px" }} title={
                <span>Explore <Arrowdown style={{ marginLeft: "12px" }} /> </span>
              }>
                <NavDropdown.Item href="#action/3.1">Item One</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2"> Item Two </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Item Three</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown style={{ top: "6px" }} title={
                <span>About Us <Arrowdown style={{ marginLeft: "12px" }} /> </span>
              }>
                <NavDropdown.Item href="#action/3.1">Item One</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2"> Item Two </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Item Three</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

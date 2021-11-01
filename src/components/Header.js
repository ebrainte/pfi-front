import React from "react";
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
import {
    Link,
    Router
  } from "react-router-dom";
  
function Header({ children }) {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Videojuegos en Medicina Preventiva</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link><Link to="/">Inicio</Link></Nav.Link>
            <Nav.Link><Link to="/stats">Estadísticas</Link></Nav.Link>
            </Nav>
            </Container>
            </Navbar>
        </div>
    );
  }

  export default Header;



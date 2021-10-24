import React from "react";
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
  
function Header({ children }) {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Videojuegos en Medicina Preventiva</Navbar.Brand>
        <Nav className="me-auto">
        <Nav.Link href="#home">Inicio</Nav.Link>
        <Nav.Link href="#features">Estadísticas</Nav.Link>
        </Nav>
        </Container>
        </Navbar>
      </div>
    );
  }

  export default Header;



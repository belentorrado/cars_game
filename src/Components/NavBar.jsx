import { Link } from "react-router-dom";
import '../Pages/Home.css';
import { useAuthContext } from "../Context/AuthContext";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from 'react-bootstrap/Container';

function NavBar() {
  const { login, handleLogout } = useAuthContext();

  return (
    <Navbar bg="light">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {!login && (<>
              <Nav.Link as={Link} to="/registro">Registro</Nav.Link>
              <Nav.Link as={Link} to="/">Login</Nav.Link>
            </>)}
            {login && (<>
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Nav.Link as={Link} to="/crearProducto">Crear Producto</Nav.Link>
              <Nav.Link onClick={() => handleLogout()}>Salir</Nav.Link>
            </>)}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
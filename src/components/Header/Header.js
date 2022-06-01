import CartIcon from "../CartIcon/CartIcon";
import { Nav, Navbar, Container } from "react-bootstrap";

export default function NavBar() {
  return (
    <Navbar className="nav" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">TriaShop App</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Inicio</Nav.Link>
          <Nav.Link href="#features">Nosotros</Nav.Link>
          <Nav.Link href="#pricing">Contacto</Nav.Link>
        </Nav>
      </Container>
      <CartIcon />
    </Navbar>
  );
}

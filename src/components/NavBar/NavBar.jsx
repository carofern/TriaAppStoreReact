import { Nav, Navbar, Container } from "react-bootstrap";
import CartComponent from "../Cart/CartComponent";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="App-header">
      <Navbar className="nav" bg="light" variant="light">
        <Container>
          <Navbar.Brand>
            <NavLink to="/" className="btnNav">
              TriaShop
            </NavLink>
          </Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="/" className="btnNav">
              Inicio
            </NavLink>

            <NavLink to="/category/1" className="btnNav">
              Competicion
            </NavLink>

            <NavLink to="/category/2" className="btnNav">
              Entrenamiento
            </NavLink>

            <NavLink to="/category/3" className="btnNav">
              Mixtas
            </NavLink>
          </Nav>
        </Container>
        <CartComponent />
      </Navbar>
    </header>
  );
}

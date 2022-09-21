import { Container, Nav, Navbar } from "react-bootstrap";
import { BsFillCartFill } from "react-icons/bs";
import "./CartWidget.css"
import "./ItemListContainer.css"

const NavBar = () => {
 return (
   <Navbar bg="dark" variant="dark">
   <Container>
     <Navbar.Brand href="#home">
       Galactic Empire Hardstore
     </Navbar.Brand>
     <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#products">Productos</Nav.Link>
            <Nav.Link href="#pcbuild">Arma Tu PC</Nav.Link>
            <Nav.Link href="#contact">Contacto</Nav.Link>
            <Nav.Link href="#login">Login</Nav.Link>
          </Nav>
          <BsFillCartFill/>
   </Container>
 </Navbar>
 )
}


export default NavBar;
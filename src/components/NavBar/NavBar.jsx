import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import CartWidget from '../CartWidget/CartWidget';
import LogoWeb from './logo192.png'
import './NavBar.css';

const NavBar=()=>{
    return(
        <Navbar bg="light" expand="lg" className="naveg">
            <Container fluid>
                <Navbar.Brand href="#"><img src={LogoWeb} alt='logo web' className="logoWeb" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="#">Home</Nav.Link>
                    <Nav.Link href="#">Productos</Nav.Link>
                    <Nav.Link href="#">Envíos</Nav.Link>
                    <Nav.Link href="#">Acerca de</Nav.Link>
                    <Nav.Link href="#">Contacto</Nav.Link>
                </Nav>
                
                <CartWidget />
                </Navbar.Collapse>
            </Container>
            </Navbar>
    )
}
export default NavBar


import { Link } from "react-router-dom";
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
                <Link to="/" ><img src={LogoWeb} alt='logo web' className="logoWeb" /></Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Link to="/" className="menuNavBar" >Home</Link>
                    <Link to="/catalogo" className="menuNavBar" >Catalogo</Link>
                    <Link to="/catalogo/Chomba" className="menuNavBar" >Chombas</Link>
                    <Link to="/catalogo/Gorra" className="menuNavBar" >Gorras</Link>
                </Nav>
                    <Link to="/cart" >
                    <CartWidget />
                    </Link>
                </Navbar.Collapse>
            </Container>
            </Navbar>
    )
}
export default NavBar

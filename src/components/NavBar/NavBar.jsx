
import { NavLink } from "react-router-dom";
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
                <NavLink to="/" ><img src={LogoWeb} alt='logo web' className="logoWeb" /></NavLink>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <NavLink to="/" className="menuNavBar" >Home</NavLink>
                        <NavLink to="/catalogo/Chomba" className="menuNavBar" >Chombas</NavLink>
                        <NavLink to="/catalogo/Gorra" className="menuNavBar" >Gorras</NavLink>
                    <NavLink to="/about" className="menuNavBar" >Acerca de</NavLink>
                </Nav>
                    <NavLink to="/cart" >
                    <CartWidget />
                    </NavLink>
                </Navbar.Collapse>
            </Container>
            </Navbar>
    )
}
export default NavBar

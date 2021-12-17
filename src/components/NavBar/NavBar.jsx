import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav } from 'react-bootstrap';

import CartWidget from '../CartWidget/CartWidget';
import LogoWeb from './logo.png'

const NavBar=()=>{
    return(
        <Navbar expand="lg" className="naveg">
            <Container fluid>
                <NavLink to="/" ><img src={LogoWeb} alt='logo web' className="logoWeb" /></NavLink>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                    <NavLink to="/" className="menuNavBar" >Home</NavLink>
                        <NavLink to="/catalogo/Destacados" className="menuNavBar" >Destacados</NavLink>
                        <NavLink to="/catalogo/Chomba" className="menuNavBar" >Chombas</NavLink>
                        <NavLink to="/catalogo/Gorra" className="menuNavBar" >Gorras</NavLink>
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

import './NavBar.css';


const NavBar = () => {
    return (
        <div>
            <nav>
            <div>
            <a href="#"><img src="logo512.png" alt="" /></a>
            <div>
                <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Productos</a>
                </li>
                <li>
                    <a href="#">Envios</a>
                </li>
                <li>
                    <a href="#">Acerca de</a>
                </li>
                <li>
                    <a href="#">Contacto</a>
                </li>
                </ul>
            </div>
            </div>
        </nav>
        </div>
    )
}

export default NavBar

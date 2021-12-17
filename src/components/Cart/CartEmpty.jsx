import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';

export const CartEmpty = () => {

    return (
        <div>
            <h1 className="titulos">Su carrito esta vacio</h1>
            <Link to='/'><Button variant="dark" className="botDetalle">Ver Articulos</Button></Link>
        </div>
    )
}
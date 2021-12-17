import React from 'react'
import {Button, Badge} from 'react-bootstrap';

import { useCartContext } from "../../context/CartContext"

const CartWidget = () => {
    const { cantItem } = useCartContext()
    
    return (
        <div>
            <Button variant="danger" className="cartWidg">
            Carrito <Badge bg="dark"><span>{cantItem()}</span></Badge>
            </Button>
        </div>
    )
}

export default CartWidget



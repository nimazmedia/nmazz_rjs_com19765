import React from 'react'
import { useCartContext } from "../../context/CartContext"
import {Button, Badge} from 'react-bootstrap';


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



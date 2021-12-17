import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from 'react-bootstrap';

import { useCartContext } from '../../context/CartContext'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ items }) => {
    const [click, setClick] = useState(false)
    const [count, setCount] = useState(1)
    const {addCart} = useCartContext()
    
    const onAdd = (count) => {
        setClick(true)
        setCount(count)
        addCart(items, count)
    }

    return(
            <Card key={items.id} border="dark" className="cardItemDetail">
                <Card.Header>
                    <Card.Title>{items.title}</Card.Title>
                </Card.Header>
                    <Card.Img variant="top" src={items.photo} className="cardItemIMG"/> 
                    <Card.Text>{items.descrip}</Card.Text>
                    <Card.Subtitle className="precioItem">Precio: ${items.precio}</Card.Subtitle>

                    {click === false ? <ItemCount inicial={0} stock={items.stock} onAdd={onAdd}  /> : 
                    <><Link to='/'><Button variant="success" className="botDetalle">Volver a Catalogo</Button></Link>
                    <Link to='/cart'><Button variant="danger" className="botDetalle">Finalizar compra</Button></Link></>}
            </Card>
    )
}

export default ItemDetail;





import React, {useState} from "react";
import {Card, Button} from 'react-bootstrap';
import {Link} from "react-router-dom";
import {useCartContext} from '../../context/CartContext'
import ItemCount from '../ItemCount/ItemCount'


const ItemDetail = ({ items }) => {
    const { id, title, descrip, photo, precio, stock } = items;
    const [click, setClick] = useState(false)
    const [count, setCount] = useState(1)
    const {addCart} = useCartContext()
    

    const onAdd = (count) => {
        addCart(items, count)
        setCount(count)
        setClick(true)
    }

    console.log(items)
    console.log(count)

    return(
            <Card key={id} border="dark" className="cardItemDetail">
                <Card.Header>
                    <Card.Title>{title}</Card.Title>
                </Card.Header>
                    <Card.Img variant="top" src={photo} className="cardItemIMG"/> 
                    <Card.Text>{descrip}</Card.Text>
                    <Card.Subtitle className="precioItem">Precio: ${precio}</Card.Subtitle>

                    {click === false ? <ItemCount inicial={0} stock={stock} onAdd={onAdd}  /> : 
                    <><Link to='/'><Button variant="success" className="botDetalle">Volver a Catalogo</Button></Link>
                    <Link to='/cart'><Button variant="danger" className="botDetalle">Finalizar compra</Button></Link></>}
            </Card>
    );
};

export default ItemDetail;





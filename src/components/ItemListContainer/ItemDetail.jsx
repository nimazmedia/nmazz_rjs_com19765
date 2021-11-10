import React from "react";
import {Card} from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount'


const ItemDetail = ({ items }) => {
    const { id, title, descrip, photo, precio, stock } = items;

    console.log(items)

    return(
            <Card key={id} border="dark" className="cardItemDetail">
                <Card.Header>
                    <Card.Title>{title}</Card.Title>
                </Card.Header>
                <Card.Text>{descrip}</Card.Text>
                    <Card.Img variant="top" src={photo} /> 
                    <Card.Subtitle className="precioItem">Precio: ${precio}</Card.Subtitle>
                <ItemCount inicial={0} stock={stock}  />
            </Card>
    );
};

export default ItemDetail;


    
import React from "react";
import {Card, Button} from 'react-bootstrap';
import { Link } from "react-router-dom";
import ItemCount from '../ItemCount/ItemCount'



const Item = ({id, title, photo, precio, stock}) => {
  return(
      <Card key={id} border="dark" className="mb-2 cardItem">
          <Card.Header>
          <Card.Title>{title}</Card.Title>
          </Card.Header>
            <Card.Img variant="top" src={photo} /> 
            <Card.Subtitle className="mb-2 precioItem">Precio: ${precio}</Card.Subtitle>
          <ItemCount inicial={0} stock={stock}  />
          <Link to={`/detail/${id}`}>
            <Button variant="dark" className="botDetalle">Ver detalles</Button>
          </Link>
          
      </Card>
    );
};

export default Item;
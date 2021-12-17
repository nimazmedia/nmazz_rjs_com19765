import React from "react";
import { Link } from "react-router-dom";
import {Card, Button} from 'react-bootstrap';

const Item = ({id, title, photo, precio, stock}) => {
  return(
      <Card key={id} border="dark" className="mb-2 cardItem">
          <Card.Header>
          <Card.Title>{title}</Card.Title>
          </Card.Header>
            <Card.Img variant="top" src={photo} /> 
            <Card.Subtitle className="mb-2 precioItem">Precio: ${precio}</Card.Subtitle>
          <Link to={`/detail/${id}`}>
            <Button variant="dark" className="botDetalle">Ver detalles</Button>
          </Link>
      </Card>
    );
};

export default Item;
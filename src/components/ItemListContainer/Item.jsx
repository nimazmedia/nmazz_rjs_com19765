import React from "react";
import {Card, Button} from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount'



const Item =({jsonpack})=>{
  return(
      <>
      <Card border="dark" className="mb-2 cardItem">
          <Card.Header>
            <Card.Img variant="top" src={jsonpack.photo} />
          </Card.Header>
            <Card.Title>{jsonpack.producto}</Card.Title>
          <Card.Subtitle className="mb-2">Precio: ${jsonpack.precio}</Card.Subtitle>
          <ItemCount inicial={0} stock={10}  />
          <Button variant="dark" className="botDetalle">Ver detalles</Button>
      </Card>
      </>
    );
};

export default Item;


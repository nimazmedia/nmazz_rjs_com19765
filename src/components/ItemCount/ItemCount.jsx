import React, {useState} from 'react'
import './ItemCount.css';

const ItemCount = ({stock, inicial}) => {
    const [cantidad, setCantidad] = useState(inicial)

    const sumItem = () => {
        cantidad < stock ? setCantidad(cantidad + 1) : alert(`Superaste el limite de productos`)
    }
    const resItem = () => {
        cantidad > inicial ? setCantidad(cantidad - 1) : console.log(`Sin stock`)
    }
    const onAdd = () => {
        if(cantidad >=1) alert(`Agregaste ${cantidad} productos`)
    }

    return (
        <div>
            <label>Cantidad: {cantidad}</label> <br />
            <button className="btn btn-dark" onClick={sumItem}>+</button>
            <button className="btn btn-secondary" onClick={resItem}>-</button>

            <button className="btn btn-dark" onClick={onAdd}>Agregar</button>
        </div>
    );
}

export default ItemCount;
import React, {useState} from 'react'
import './ItemCount.css';

const ItemCount = ({stock, inicial}) => {
    const [count, setCount] = useState(inicial)

    const sumItem = () => {
        count < stock ? setCount(count + 1) : alert(`Superaste el limite de productos`)
    }
    const resItem = () => {
        count > inicial ? setCount(count - 1) : console.log(`Sin Stock`)
    }
    const onAdd = () => {
        alert(`Agregaste ${count} productos`)
    }

    return (
        <div>
            <label>Cantidad: {count} | Stock: {stock}</label> <br />
            <button className="btn btn-dark" onClick={sumItem}>+</button>
            <button className="btn btn-secondary" onClick={resItem}>-</button>

            <button className="btn btn-dark" onClick={onAdd}>Agregar</button>
        </div>
    );
}

export default ItemCount;
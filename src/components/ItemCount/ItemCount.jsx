import React, {useState} from 'react'

const ItemCount = ({stock, inicial, onAdd}) => {
    const [count, setCount] = useState(inicial)

    const sumItem = () => { if (count < stock) {setCount(count + 1)} }
    const resItem = () => { if (count >= inicial) {setCount(count - 1)} }

    return (
        <div>
            <label>Cantidad: {count} | Stock: {stock}</label> <br />
            <button className="btn btn-dark" onClick={sumItem} disabled={count === stock} >+</button>
            <button className="btn btn-secondary" onClick={resItem} disabled={count === 0}>-</button>
            <button className="btn btn-danger" onClick={() => onAdd(count)} disabled={count === 0}>Agregar</button>
        </div>
    );
}

export default ItemCount;
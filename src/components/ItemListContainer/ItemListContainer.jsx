import React, {useState} from 'react'
import ItemList from './ItemList';
import jsonpack from './data.json';


const ItemListContainer = () => {

    const [item,setItems]=useState([])
    const call = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(jsonpack)
        },2000)
    })

    call.then(response=> {
        setItems(response)
    })

    return (
        <div>
            <h1>Productos</h1>
            <div className="itemList">
                <ItemList items={item} />
            </div>
        </div>
    )
};

export default ItemListContainer;

import React from 'react'
import Item from './Item';

const ItemList = ({items}) => {
    return (
        <>
            { items.map(item=>
            <Item key={item.id} id={item.id} title={item.title} precio={item.precio} photo={item.photo} stock={item.stock}/>
            )}
        </>
    )
}

export default ItemList;
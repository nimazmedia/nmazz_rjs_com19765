import React from 'react'
import Item from './Item';

const ItemList = ({items}) => {
    return (
        <>
            { items.map(item=>
            <Item key={item.codeName} jsonpack={item} />
            )}
        </>
    )
}

export default ItemList;
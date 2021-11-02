import React, {Fragment} from 'react'
import ItemCount from '../ItemCount/ItemCount'


function ItemListContainer({items}) {

    return (
        <Fragment>
            <h1>{items}</h1>
            <ItemCount initial={0} stock={10} />
        </Fragment>
    )
}

export default ItemListContainer

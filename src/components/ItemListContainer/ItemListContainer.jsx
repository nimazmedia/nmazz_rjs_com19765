import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import ItemList from './ItemList';
import prodsF1 from './prodsF1';
import Spinner from './Spinner';

const getItems = new Promise((resolve, reject) => {

    const condition = true;
    if (condition) {
        setTimeout(() => {
            resolve(prodsF1)
        }, 2000)
    } else {
        reject('404 Not found')
    }

})


const ItemListContainer = () => {
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(true)

    const { id } = useParams();


    useEffect(() => {
        if (id) {
            getItems
                .then(res => setItem(res.filter(prod => prod.categoria === id)))
                .finally(() => setLoading(false))
        } else {
            getItems
                .then(res => setItem(res))
                .finally(() => setLoading(false))
            
        }
    },[id] )

    return (
        <div>
            <h1 className="titulos">Productos</h1>
            {loading ? <Spinner /> : <div className="itemList">
            <ItemList items={item} />
            </div>}
        </div>
    )
};

export default ItemListContainer;

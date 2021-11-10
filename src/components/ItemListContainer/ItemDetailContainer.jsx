import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import ItemDetail from './ItemDetail';
import prodsF1 from './prodsF1';
import Spinner from './Spinner';

const getItem = new Promise((res, rej) => {
    const condition = true;
    
    if (condition) {
        setTimeout(() => {
            res(prodsF1)
        }, 2000)
    } else {
        rej('404 Not found')
    }
})


const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(true)

    const { id } = useParams()

    useEffect(() => {
        if (id) {
            getItem
                .then(res => setItem(res.find(element => element.id === id)))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))

        } else {
            getItem
                .then(res => setItem(res))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))

        }
            
    }, [id])    
    
    return (
        <div>           
            {loading ? <Spinner /> : <ItemDetail item={item} />}
        </div>
    )
}

export default ItemDetailContainer;
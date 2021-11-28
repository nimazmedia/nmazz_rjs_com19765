import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import { getFirestore } from '../../service/getFirestore';
import ItemDetail from './ItemDetail';
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


const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)

    const { id } = useParams();


    useEffect(() => {
        const bdQuery = getFirestore()

        bdQuery.collection('items').doc(id).get() 
            .then(resp => setItem({ id: resp.id, ...resp.data() }))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    },[id] ) 
    
    return (
        <div>           
            {loading ? <Spinner /> : <ItemDetail items={item} />}
        </div>
    )
}

export default ItemDetailContainer;
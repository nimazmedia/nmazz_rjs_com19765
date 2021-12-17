import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";

import { getFirestore } from '../../service/getFirestore';
import ItemDetail from './ItemDetail';
import Spinner from './Spinner';

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
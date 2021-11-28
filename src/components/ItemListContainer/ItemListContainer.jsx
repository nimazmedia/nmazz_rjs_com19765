import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import { getFirestore } from '../../service/getFirestore';
import ItemList from './ItemList';
import Spinner from './Spinner';


const ItemListContainer = () => {
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(true)

    const { id } = useParams();


    useEffect(() => {
        const dbQuery = getFirestore()

        if (id ===  undefined) {
            dbQuery.collection('items').get()
                .then(data => setItem(data.docs.map(i => ({ id: i.id, ...i.data() }))))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        } else {
            dbQuery.collection('items').where('categoria', '==',  id ).get()
                .then(data => setItem(data.docs.map(i => ({ id: i.id, ...i.data() }))))
                .catch(err => console.log(err))
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

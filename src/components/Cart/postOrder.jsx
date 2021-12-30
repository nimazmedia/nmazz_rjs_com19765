import firebase from 'firebase'
import { getFirestore } from '../service/fireBaseConfig'

const postOrder = (order, setOrderId, cartList) => {

    const dbQ = getFirestore()
    const orders = dbQ.collection('orders')

    orders.add(order)
         .then((res) => { setOrderId(res.id) })
         .catch(err => console.log(err))

    const itemsToUpdate = dbQ.collection('items').where(firebase.firestore.FieldPath.documentId(), 'in', cartList.map(i => i.id))
    const batch = dbQ.batch();

    itemsToUpdate.get()
         .then(collection => {
               collection.docs.forEach(docSnapshot => {
               batch.update(docSnapshot.ref, { stock: docSnapshot.data().stock - cartList.find(item => item.id === docSnapshot.id).count })
            })
               batch.commit().then(res => {console.log(`Stock actualizado`)})
            })
 }

 export default postOrder

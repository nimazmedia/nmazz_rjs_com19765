import { useState } from 'react'
import firebase from 'firebase'
import { Link } from 'react-router-dom'
import { Button, Container, Row, Col, Form } from 'react-bootstrap'

import { CartEmpty } from './CartEmpty'
import FinalCompra from '../FinalCompra/FinalCompra'
import { useCartContext } from '../../context/CartContext'
import { getFirestore } from '../../service/getFirestore'


export const Cart = () => {
    const [orderId, setOrderId] = useState(null)
    const [mostrarModal, setmostrarModal] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [tel, setTel] = useState('')

    const { cartList, vaciarCart, borrarItem, precioTotal } = useCartContext()

    const generarOrden = (e) => {
        e.preventDefault();

        const order = {}
        order.buyer = { name, email, tel } 
        order.total = precioTotal()
        order.date = firebase.firestore.Timestamp.fromDate(new Date())
        order.items = cartList.map(cartItem => {
            const id = cartItem.id
            const title = cartItem.title
            const price = cartItem.price * cartItem.cantidad
            return { id, title, price }
        })

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
                    batch.update(docSnapshot.ref, { stock: docSnapshot.data().stock - cartList.find(item => item.id === docSnapshot.id).cantidad })
                })
                batch.commit().then(res => {console.log(`Stock actualizado`)})
            })
    }


    const handleHide = () => {
        setmostrarModal(false)
        vaciarCart()
    }

    return (
        <div>
            {cartList.length === 0 ? <CartEmpty /> :

            <>
                <h1 className="titulos">Carrito</h1>
                <Container>
                <Row className="carritoTitle">
                    <Col className="carritoText">Articulo</Col>
                    <Col className="carritoText">Cantidad</Col>
                    <Col className="carritoText">Precio</Col>
                    <Col></Col>
                </Row>
                {cartList.map(item =>
                    <Row className="carritoLine" key={item.id} >
                        <Col className="carritoText">{item.title}</Col>
                        <Col className="carritoText">{item.count}</Col>
                        <Col className="carritoText">$ {item.precio * item.count}</Col>
                        <Col><Button variant="dark" className="botDetalle botCart" onClick={() => borrarItem(item.id)}>Eliminar Item</Button></Col>
                    </Row>)}
                </Container>
            </>
            }
            {
                cartList.length === 0 ? null :
                    <>
                        <Container>
                            <Row>
                                <Col></Col>
                                <Col><Link to='/' className="card-link"><Button variant="success" className="botDetalle">Seguir Comprando</Button></Link></Col>
                                <Col><Button variant="danger" className="botDetalle" onClick={vaciarCart}>Vaciar Carrito</Button></Col>
                                <Col></Col>
                            </Row>
                        </Container>
                        
                        
                        <div className="card container mt-3 mb-5 text-center">
                            <div className="card-body">
                                <h4 className="titulos">Finalizar Compra</h4>
                                <p className="carritoText">El total de su compra es de ${precioTotal()}</p>
                                <Form onSubmit={generarOrden}>
                                <Form.Group className="mb-3" controlId="formGroupEmail">
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} id="nombre" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupEmail">
                                    <Form.Label>Telefono</Form.Label>
                                    <Form.Control type="text" value={tel} onChange={(e) => setTel(e.target.value)} id="tel" />
                                </Form.Group>
                                <button className="btn btn-warning" onClick={() => setmostrarModal(true)} >Terminar compra</button>
                                </Form>
                            </div>
                        </div>
                        <FinalCompra show={mostrarModal} onHide={handleHide} orderId={orderId} total={precioTotal()} />
                    </>
            }
</div>
    )
}





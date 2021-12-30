import firebase from 'firebase'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Container, Row, Col, Form } from 'react-bootstrap'

import { CartEmpty } from './CartEmpty'
import postOrder from './postOrder'
import FinalCompra from '../FinalCompra/FinalCompra'
import { useCartContext } from '../../context/CartContext'

export const Cart = () => {
    const [orderId, setOrderId] = useState(null)
    const [mostrarModal, setmostrarModal] = useState(false)
    const [nombre, setName] = useState('')
    const [email, setEmail] = useState('')
    const [tel, setTel] = useState('')

    const { cartList, vaciarCart, borrarItem, precioTotal } = useCartContext()

    const generarOrden = (e) => {
        e.preventDefault();

        const order = {}
        order.buyer = { nombre, email, tel }
        order.total = precioTotal()
        order.date = firebase.firestore.Timestamp.fromDate(new Date())
        order.items = cartList.map(cartItem => {
            const id = cartItem.id
            const title = cartItem.title
            const price = cartItem.price * cartItem.cantidad
            return { id, title, price }
        })
        
        postOrder(order, setOrderId, cartList)

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
                                <Row className="mb-3">
                                    <Form.Group as={Col}>
                                        <Form.Label>Nombre y Apellido</Form.Label>
                                        <Form.Control value={nombre} onChange={(e) => setName(e.target.value)} className="form-control" id="name"/>
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group as={Col}>
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="email"/>
                                    </Form.Group>

                                    <Form.Group as={Col}>
                                    <Form.Label>Telefono</Form.Label><Form.Control value={tel} onChange={(e) => setTel(e.target.value)} className="form-control" id="tel"/>
                                    </Form.Group>
                                </Row>

                                <button className="btn btn-warning" onClick={() => setmostrarModal(true)} >Terminar compra</button>
                                </Form>
                            </div>
                        </div>
                        <FinalCompra show={mostrarModal} onHide={handleHide} orderid={orderId} total={precioTotal()} />
                    </>
            }
</div>
    )
}





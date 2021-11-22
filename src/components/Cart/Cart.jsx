import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import { Button, Container, Row, Col } from 'react-bootstrap';
import { CartEmpty } from './CartEmpty'

export const Cart = () => {
    const { cartList, vaciarCart, borrarItem, cantItem, totalPrice } = useCartContext()

    return (
        <div>
            {cartList.length === 0 ? <CartEmpty /> :

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
            }
            {
                cartList.length === 0 ? null :
                    <>
                        <Container>
                            <Row>
                                <Col></Col>
                                <Col className="carritoText">Cantidad de productos: {cantItem()}</Col>
                                <Col className="carritoText">Total: $ {totalPrice()}</Col>
                                <Col><Button variant="danger" className="botDetalle" onClick={vaciarCart}>Vaciar Carrito</Button></Col>
                            </Row>
                        </Container>
                        <Link to='/' className="card-link"><Button variant="success" className="botDetalle">Seguir Comprando</Button></Link>
                        <Link to='/checkOut' className="card-link"><Button variant="danger" className="botDetalle">Finalizar Compra</Button></Link>
                    </>
            }
</div>
    )
}





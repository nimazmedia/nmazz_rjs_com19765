import { useCartContext } from '../../context/CartContext'
import {Card, Button} from 'react-bootstrap';

export const Cart = () => {
    const { cartList, vaciarCart } = useCartContext()

    return (
        <div>
            <h1 className="titulos">Carrito de compra</h1>

            {cartList.map(item =>
                        <Card className="text-center cardCarrito" border="dark">
                            <Card.Header>
                                <Card.Title className="carritoTitle">{item.title}</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Card.Text className="carritoText">Cantidad: {item.cantidad} | Precio: ${item.precio}</Card.Text>
                            </Card.Body>
                            <Card.Footer><Button variant="dark" className="botDetalle">Eliminar Item</Button></Card.Footer>
                        </Card>
            )}
            <Button variant="danger" className="botDetalle" onClick={vaciarCart}>Vaciar Carrito</Button>
        </div>
    )
}
import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const CompraFinalizada = (props) => {
    
    return (
        <div>
            <Modal {...props}>
                <Modal.Body className="fs-5">Tu compra ha sido realizada con éxito <br />
                    Muchas gracias por comprar en F1 Shop. El envío será realizado próximamente.
                    <Button variant="danger" onClick={props.onHide}>Cerrar</Button>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default CompraFinalizada
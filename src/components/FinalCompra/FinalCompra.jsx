import React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

const CompraFinalizada = (props) => {

    
    return (
        <div>
            <Modal {...props}>
                <Modal.Header closeButton>
                    <Modal.Title>Tu compra ha sido realizada con éxito</Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-success fs-5"> El orden de compra es {props.orderId} por un total de ${props.total} <br />
                    El envío será realizado próximamente, muchas gracias por confiar en F1 Shop.</Modal.Body>
                
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.onHide}>
                        Cerrar
                    </Button>
                    
                </Modal.Footer>
            </Modal>
        
        </div>
    )
}

export default CompraFinalizada
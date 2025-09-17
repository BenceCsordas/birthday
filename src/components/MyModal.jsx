import React from 'react'
import { Modal, ModalBody, ModalHeader } from "reactstrap"

export const MyModal = ({ modal, setModal, selTitle, selImg }) => {
    const toggle = () => setModal(!modal)
    return (
        <div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle} className='text-capitalize'>{selTitle}</ModalHeader>
                <ModalBody>
                    <img src={selImg} alt="kép" className='img-fluid' style={{objectFit:"cover"}}/>
                </ModalBody>
            </Modal>
        </div>
    )
}


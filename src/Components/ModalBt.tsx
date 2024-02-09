import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const ModalBt = ({show,modalClose,title, showFooter=true,children,saveTitle='Save'}:any) => {
  return (
   <>{show && <Modal show={show} onHide={modalClose}>
    {title && <Modal.Header closeButton>
      <Modal.Title>{title}</Modal.Title>
    </Modal.Header>}
    {/* style={{padding: 0}} */}
    <Modal.Body >
     {children}
    </Modal.Body>

    {showFooter && <Modal.Footer>
      <Button variant="secondary" onClick={modalClose}>
        Close
      </Button>
      <Button variant="primary">{saveTitle}</Button>
    </Modal.Footer>}
  </Modal>}
  </>
  )
}

export default ModalBt

import Modal from "react-bootstrap/Modal";
import { Button, Form } from "react-bootstrap";


export default function ServiceInfo({ show, hide }) {
  return (
    <div>
      <Modal
        show={show}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className="info-modal-body">
          <Modal.Header className="info-modal-header">
            <Modal.Title
              id="contained-modal-title-vcenter"
              className="modal_title info-modal-header"
            >
              Survey Based Service
            </Modal.Title>
          </Modal.Header>
          <div className="py-2 px-5">
            <p>
              The selected issue or service requires the team to visit, call or
              email a customer to identify the exact requirements, measurements
              or preferences before an estimate could be provided to the
              customer.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer className="info-modal-footer">
          <Button variant="info" className="white" onClick={() => hide(false)}>
            Okay, Got It
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

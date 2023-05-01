import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import { modalsError } from "../../helpers/modalsErrors";
import { useEffect } from "react";

export default function CreateOfferModal({ show, hide }) {
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [callout, setCallout] = useState();
  const [ac, setAc] = useState();
  const [plumbing, setPlumbing] = useState();
  const [electrical, setElectrical] = useState();
  const [handyman, setHandyman] = useState();
  const [spareParts, setSpareParts] = useState();
  const [date, setDate] = useState();


  const [disableBtn, setDisableBtn] = useState(false);

//   function inputForm(e, key) {
//     console.log(formData)
//     let data = formData;
//     if (key != "name" || key != "price") {
//       data.detail[key] = e.target.value;
//     } else {
//       data[key] = e.target.value;
//     }
//     setFormData(data);
//   }
  async function createOffer() {
    let token = localStorage.getItem('token')
    let formValues = {
        name,
        price,
        date,
        token,
        detail: {
            callout,
            ac,
            electrical,
            plumbing,
            handyman,
            spareParts
        }
    }
    setDisableBtn(true);
    await axios({
      method: "post",
      url: `https://profixing-back-production.up.railway.app/offers/create`,
      data: formValues,
    })
      .then((res) => {
        if (res.status == 200) {
          toast.success("Created Successfully");
          setName('')
          setAc()
          setCallout(null)
          setDate(null)
          setElectrical(null)
          setHandyman(null)
          setPlumbing(null)
          setPrice(null)
          setSpareParts(null)
          hide(false);
          setDisableBtn(false);
          window.location.reload()
        }
      })
      .catch((err) => {
        console.log("err>>", err);
        setDisableBtn(false);
        modalsError(err);
      });
  }

  return (
    <div>
      <Modal
        show={show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <div className="modal_inputField">
            <Modal.Header>
              <Modal.Title
                id="contained-modal-title-vcenter"
                className="modal_title"
              >
                Create Offer
              </Modal.Title>
            </Modal.Header>
            <div className="inputField_container">
              <div className="row">
                <div className="col-sm-12 col-md-6 mt-2">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    className="form-control"
                    type="text"
                    placeholder="Name"
                    value={name}
                    onInput={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="col-sm-12 col-md-6 mt-2">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    className="form-control"
                    type="number"
                    placeholder="Price"
                    value={price}
                    onInput={(e) => setPrice(e.target.value)}
                  />
                </div>
                <div className="col-sm-12 col-md-6 mt-2">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    className="form-control"
                    type="date"
                    placeholder="Date"
                    value={date}
                    onInput={(e) => setDate(e.target.value)}
                  />
                </div>
                <div className="col-12 mt-2">
                  <h5>Details</h5>
                </div>
                <div className="col-sm-12 col-md-6 mt-2">
                  <Form.Label>Callout</Form.Label>
                  <Form.Control
                    className="form-control"
                    type="number"
                    placeholder="Callout"
                    value={callout}
                    onInput={(e) => setCallout(Number(e.target.value))}
                  />
                </div>
                <div className="col-sm-12 col-md-6 mt-2">
                  <Form.Label>AC</Form.Label>
                  <Form.Control
                    className="form-control"
                    type="number"
                    placeholder="AC"
                    value={ac}
                    onInput={(e) => setAc(Number(e.target.value))}
                  />
                </div>
                <div className="col-sm-12 col-md-6 mt-2">
                  <Form.Label>Plumbing</Form.Label>
                  <Form.Control
                    className="form-control"
                    type="number"
                    placeholder="Plumbing"
                    value={plumbing}
                    onInput={(e) => setPlumbing(Number(e.target.value))}
                  />
                </div>
                <div className="col-sm-12 col-md-6 mt-2">
                  <Form.Label>Electrical</Form.Label>
                  <Form.Control
                    className="form-control"
                    type="number"
                    placeholder="Electrical"
                    value={electrical}
                    onInput={(e) => setElectrical(Number(e.target.value))}
                  />
                </div>
                <div className="col-sm-12 col-md-6 mt-2">
                  <Form.Label>Handyman</Form.Label>
                  <Form.Control
                    className="form-control"
                    type="number"
                    placeholder="Handyman"
                    value={handyman}
                    onInput={(e) => setHandyman(Number(e.target.value))}
                  />
                </div>
                <div className="col-sm-12 col-md-6 mt-2">
                  <Form.Label>Spareparts</Form.Label>
                  <Form.Control
                    className="form-control"
                    type="number"
                    placeholder="Spareparts"
                    value={spareParts}
                    onInput={(e) => setSpareParts(Number(e.target.value))}
                  />
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => hide(false)}>Close</Button>
          <Button variant="info white" onClick={createOffer} disabled={disableBtn}>Create</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

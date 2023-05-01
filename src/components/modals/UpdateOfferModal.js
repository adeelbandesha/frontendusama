import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import { modalsError } from "../../helpers/modalsErrors";

export default function UpdateOfferModal({
  currentData,
  showUpdate,
  setShowUpdate,
}) {
  const [updateData, setUpdateData] = useState();
  const [disableBtn, setDisableBtn] = useState(false);

  const inputValue = (e, key) => {
    let data = { ...updateData };
    data[key] = e;
    setUpdateData({ ...data });
  };

  async function updateOffer() {
    let token = localStorage.getItem("token");
    let formValues = {
      name: updateData?.name,
      price: updateData?.price,
      date: updateData?.date,
      _id: updateData?._id,
      detail: {
        callout: updateData?.callout,
        ac: updateData?.ac,
        plumbing: updateData?.plumbing,
        electrical: updateData?.electrical,
        handyman: updateData?.handyman,
        spareParts: updateData?.spareParts,
      },
      token: token,
    };
    setDisableBtn(true);
    console.log(formValues)
    await axios({
      method: "put",
      url: `https://profixing-back-production.up.railway.app/offers/${updateData?._id}/updateOffers`,
      data: formValues,
    })
      .then((res) => {
        if (res.status == 200) {
          toast.success("Updated Successfully");
          // window.location.reload();
          console.log("res>>", res);
        }
      })
      .catch((err) => {
        console.log("err>>", err);
        setDisableBtn(false);
        modalsError(err);
      });
  }

  useEffect(() => {
    console.log("currentData", currentData)
    let name = currentData?.name;
    let price = currentData?.price;
    let date = currentData?.date;
    let _id = currentData?._id;
    let detail = currentData?.detail;
    setUpdateData({ name, price, date, _id, ...detail });
  }, [currentData]);
  return (
    <>
      <div>
        <Modal
          show={showUpdate}
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
                  Update Offer
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
                      value={updateData?.name}
                      onInput={(e) => inputValue(e.target.value, "name")}
                    />
                  </div>
                  <div className="col-sm-12 col-md-6 mt-2">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                      className="form-control"
                      type="number"
                      placeholder="Price"
                      value={updateData?.price}
                      onInput={(e) => inputValue(e.target.value, "price")}
                    />
                  </div>
                  <div className="col-sm-12 col-md-6 mt-2">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                      className="form-control"
                      type="date"
                      placeholder="Date"
                      value={updateData?.date}
                      onInput={(e) => inputValue(e.target.value, "date")}
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
                      value={updateData?.callout}
                      onInput={(e) => inputValue(e.target.value, "callout")}
                    />
                  </div>
                  <div className="col-sm-12 col-md-6 mt-2">
                    <Form.Label>AC</Form.Label>
                    <Form.Control
                      className="form-control"
                      type="number"
                      placeholder="AC"
                      value={updateData?.ac}
                      onInput={(e) => inputValue(e.target.value, "ac")}
                    />
                  </div>
                  <div className="col-sm-12 col-md-6 mt-2">
                    <Form.Label>Plumbing</Form.Label>
                    <Form.Control
                      className="form-control"
                      type="number"
                      placeholder="Plumbing"
                      value={updateData?.plumbing}
                      onInput={(e) => inputValue(e.target.value, "plumbing")}
                    />
                  </div>
                  <div className="col-sm-12 col-md-6 mt-2">
                    <Form.Label>Electrical</Form.Label>
                    <Form.Control
                      className="form-control"
                      type="number"
                      placeholder="Electrical"
                      value={updateData?.electrical}
                      onInput={(e) => inputValue(e.target.value, "electrical")}
                    />
                  </div>
                  <div className="col-sm-12 col-md-6 mt-2">
                    <Form.Label>Handyman</Form.Label>
                    <Form.Control
                      className="form-control"
                      type="number"
                      placeholder="Handyman"
                      value={updateData?.handyman}
                      onInput={(e) => inputValue(e.target.value, "handyman")}
                    />
                  </div>
                  <div className="col-sm-12 col-md-6 mt-2">
                    <Form.Label>Spareparts</Form.Label>
                    <Form.Control
                      className="form-control"
                      type="number"
                      placeholder="Spareparts"
                      value={updateData?.spareParts}
                      onInput={(e) => inputValue(e.target.value, "spareParts")}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowUpdate(false)}>
              Close
            </Button>
            <Button
              variant="info white"
              onClick={updateOffer}
              disabled={disableBtn}
            >
              Update
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { modalsError } from "../helpers/modalsErrors";
import UpdateOfferModal from "./modals/UpdateOfferModal";

export default function OffersTable() {
  const [loading, setLoading] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [updateData, setUpdateData] = useState(null);
  const [offers, setOffers] = useState([]);
  const [disableDelete, setDisableDelete] = useState(false);

  const openModal = (data) => {
    console.log(data)
    setUpdateData(data);
    setShowUpdate(true);
  };
  const fetchOffers = async () => {
    let token = localStorage.getItem("token");
    setLoading(true);
    await axios({
      method: "post",
      url: `https://profixing-back-production.up.railway.app/offers/allOffers`,
      data: {token},
    })
      .then((res) => {
        console.log("res>>", res);
        if (res.status == 200) {
          setLoading(false);
          setOffers(res?.data);
        }
      })
      .catch((err) => {
        console.log("err>>", err);
        setLoading(false);
        modalsError(err);
      });
  };

  const deleteOffer = async (id) => {
    let token = localStorage.getItem('token')
    setDisableDelete(true);
    await axios({
      method: "delete",
      url: `https://profixing-back-production.up.railway.app/offers/${id}/deleteOffers`,
      data: {token}
    })
      .then((res) => {
        console.log("res>>", res);
        if (res.status == 200) {
          setDisableDelete(false);
          toast.success("Deleted successfully")
          fetchOffers();
        }
      })
      .catch((err) => {
        console.log("err>>", err);
        setDisableDelete(false);
        modalsError(err);
      });
  };

  useEffect(() => {
    fetchOffers();
  }, []);
  return (
    <>
    <div>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center">
          <Spinner animation="border" variant="info" />
        </div>
      ) : (
        <table style={{overflowX: 'scroll'}}>
            <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Date</th>
            <th>Callout</th>
            <th>AC</th>
            <th>Plumbing</th>
            <th>Electrical</th>
            <th>Handyman</th>
            <th>Spareparts</th>
            <th>Actions</th>
          </tr>
          </thead>
          <tbody>
          {offers?.map((el, i) => {
            return (
              <tr key={i} className="tables-row">
                <td>{el?.name}</td>
                <td>{el?.price} AED</td>
                <td>{el?.date}</td>
                <td>{el?.detail?.callout}</td>
                <td>{el?.detail?.ac}</td>
                <td>{el?.detail?.plumbing}</td>
                <td>{el?.detail?.electrical}</td>
                <td>{el?.detail?.handyman}</td>
                <td>{el?.detail?.spareParts}</td>
                <td>
                <Button variant="primary" className="mb-2" onClick={() => openModal(el)} disabled={disableDelete}>
                    Edit
                  </Button> <br /> 
                  <Button variant="danger" onClick={() => deleteOffer(el?._id)} disabled={disableDelete}>
                    Delete
                  </Button>
                </td>
              </tr>
            );
        })}
        </tbody>
        </table>
      )}
    </div>
    <UpdateOfferModal
    showUpdate={showUpdate}
    setShowUpdate={setShowUpdate}
    currentData={updateData}
  />
  </>
  );
}

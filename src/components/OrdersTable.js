import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { modalsError } from "../helpers/modalsErrors";
import OrdersModal from "./modals/OrdersModal";

export default function OrdersTable() {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState();
  const [orders, setOrders] = useState([]);

  const openModal = (data) => {
    setModalData(data);
    setShowModal(true);
  };

  const token = localStorage.getItem("token");
  const fetchOrders = async () => {
    setLoading(true);
    await axios({
      method: "post",
      url: "https://profixing-back-production.up.railway.app/order/admin/orders",
      data: {token}
    })
      .then((res) => {
        console.log("res>>", res);
        if (res.status == 200) {
          setLoading(false);
          setOrders(res?.data?.orders);
        }
      })
      .catch((err) => {
        console.log("err>>", err);
        setLoading(false);
        modalsError(err);
      });
  };

  useEffect(() => {
    fetchOrders();
  }, []);
  return (
    <div>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center">
          <Spinner animation="border" variant="info" />
        </div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Service Name</th>
              <th>Service Issue</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((el, i) => {
              return (
                <tr
                  key={i}
                  className="tables-row"
                  onClick={() => openModal(el)}
                >
                  <td>{el?.serviceName}</td>
                  <td>{el?.ServiceOrIssue}</td>
                  <td>{el?.date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
      <OrdersModal
        show={showModal}
        hide={setShowModal}
        data={modalData}
        size={"lg"}
        centered
      />
    </div>
  );
}

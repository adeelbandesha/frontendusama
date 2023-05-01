import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function OrdersModal({ data, show, hide }) {
  return (
    <>
      <Modal
        show={show}
        onHide={hide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Service Detail</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <div className="row">
                <div className="col-6">
                  <p>Service Name: </p>
                </div>
                <div className="col-6">
                  <p>{data?.serviceName}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <p>Service issue: </p>
                </div>
                <div className="col-6">
                  <p>{data?.ServiceOrIssue}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <p>Date: </p>
                </div>
                <div className="col-6">
                  <p>{data?.date}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <p>time: </p>
                </div>
                <div className="col-6">
                  <p>{data?.time}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <p>Subtotal: </p>
                </div>
                <div className="col-6">
                  <p>{data?.subTotal}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <p>Discount: </p>
                </div>
                <div className="col-6">
                  <p>{data?.discount}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <p>Total: </p>
                </div>
                <div className="col-6">
                  <p>{data?.total}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <p>Furnished: </p>
                </div>
                <div className="col-6">
                  <p>{data?.furnished && data.furnished ? "true" : "false"}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <p>Survey: </p>
                </div>
                <div className="col-6">
                  <p>{data?.onSurvey && data.onSurvey ? "true" : "false"}</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="row">
                <div className="col-6">
                  <p>Address: </p>
                </div>
                <div className="col-6">
                  <p>{data?.location?.address}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <p>Building: </p>
                </div>
                <div className="col-6">
                  <p>{data?.location?.building}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <p>Street: </p>
                </div>
                <div className="col-6">
                  <p>{data?.location?.street}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <p>Villa no: </p>
                </div>
                <div className="col-6">
                  <p>{data?.location?.villNumber}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <p>City: </p>
                </div>
                <div className="col-6">
                  <p>{data?.location?.city}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <p>Country: </p>
                </div>
                <div className="col-6">
                  <p>{data?.location?.country}</p>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default OrdersModal;

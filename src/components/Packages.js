import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { AiFillCheckCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { modalsError } from "../helpers/modalsErrors";

function Packages() {
  const [loading, setLoading] = useState(false);
  const [offers, setOffers] = useState([]);

  const fetchOffers = async () => {
    let token = localStorage.getItem("token");
    setLoading(true);
    await axios({
      method: "post",
      url: `https://profixing-back-production.up.railway.app/offers/allOffers`,
      data: { token },
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
        // modalsError(err);
      });
  };

  useEffect(() => {
    fetchOffers();
  }, []);

  return (
    <div className="offers_back bg-custom mt-3">
      <div className="container my-5">
        <h2 className="text-center primary mb-5">Our Packages</h2>
        <div className="row">
          {loading ? (
            <div className="col-12 text-center">
              <Spinner animation="border" variant="info" />
            </div>
          ) : (
            offers?.map((el) => {
              return (
                <div className="col-lg-4 offer-cards mb-2">
                  <div className="offer_card_1">
                    <h4>{el?.name} Package</h4>
                    <div className="offer_rate">
                      <p>Starting From</p>
                      <h2>
                        {el?.price} <sup>AED</sup> /month{" "}
                      </h2>
                    </div>
                    <div className="start_list">
                      <ul>
                        <li>
                          <AiFillCheckCircle /> {el?.detail?.callout} x Callouts
                        </li>
                        <li>
                          <AiFillCheckCircle /> {el?.detail?.ac} x A/C Service
                        </li>
                        <li>
                          <AiFillCheckCircle /> {el?.detail?.plumbing} x
                          Plumbing Service
                        </li>
                        <li>
                          <AiFillCheckCircle /> {el?.detail?.electrical} x
                          Electrical Service
                        </li>
                        <li>
                          <AiFillCheckCircle /> {el?.detail?.handyman} x
                          Handyman Service
                        </li>
                        <li>
                          <AiFillCheckCircle />
                          {el?.detail?.spareParts} Spare Parts
                        </li>
                      </ul>
                      <div className="sleclt_btns">
                        <Link to={`/offers/package/${el?.name.toLowerCase()}`}>
                          <button type="button" className="select_btn">
                            Select Pages
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default Packages;

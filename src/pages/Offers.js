import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import asset7 from "../assets/images/asset7.png";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import {modalsError} from '../helpers/modalsErrors'
import Packages from "../components/Packages";

export default function Offers() {
const [offersBtn, setOffersBtn] = useState(false)
const [newsBtn, setNewsBtn] = useState(false)
const [formData, setFormData] = useState({})

function inputForm(e, key) {
  let data = formData;
    data[key] = e.target.value;
  setFormData({ ...data });
}
  const subscribeOffers = async ()=> {
    // setOffersBtn(true)
    // const token = JSON.parse(localStorage.getItem("user"));
    // await axios({
    //   method: "post",
    //   url: "API",
    //   headers: { Authorization: `Bearer ${token?.token}` },
    // })
    //   .then((res) => {
    //     if (res.status == 200) {
    //       toast.success("Offers Subscribed");
    //       setOffersBtn(false);
    //     }
    //   })
    //   .catch((err) => {
    //     console.log("err>>", err);
    //     setOffersBtn(false);
    //     modalsError(err);
    //   });
  }

  const subscribeNewsletter = async ()=> {
    // setNewsBtn(true)
    // await axios({
    //   method: "post",
    //   url: "API",
    //   data: formData
    // })
    //   .then((res) => {
    //     if (res.status == 200) {
    //       toast.success("Offers Subscribed");
    //       let data = {name: "", email: "", number: ""}
    //       setFormData({...data})
    //       setNewsBtn(false);
    //     }
    //   })
    //   .catch((err) => {
    //     console.log("err>>", err);
    //     setNewsBtn(false);
    //     modalsError(err);
    //   });
  }
  return (
    <>
      <Header />
      <section className="offers_back">
        <div className="container">
          <div className="mobile_img_win">
            <img src={asset7} alt="" />
          </div>
          <div className="win_not_miss">
            <h1>Offer you cannot miss!</h1>
            <p>
              Every month we craft some exciting offers for our customers so
              they continue to get the best value for their money with
              Profixingdubai. In case you would like to be notified of the monthly
              offers, kindly drop in your contact details below and click
              subscribe so we can register your interest.
            </p>
            <button type="button" onClick={subscribeOffers} disabled={offersBtn} >Subscribe now</button>
          </div>
        </div>
        <Packages />
      </section>
      <div className="win_new_letter">
        <h1>Subscribe to our newsletter</h1>
        <div className="container">
          <div className="subscribe_form">
            <div className="row">
              <div className="col-lg-3">
                <div className="subscribe_input">
                  <input type="text" id="" placeholder="Name*" value={formData["name"]} onChange={(e) => inputForm(e, "name")} />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="subscribe_input">
                  <input type="text" id="" placeholder="Email*" value={formData["email"]} onChange={(e) => inputForm(e, "email")} />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="subscribe_input">
                  <input
                    type="text"
                    id=""
                    placeholder="Enter 9-didgitmonile number"
                    value={formData["number"]} onChange={(e) => inputForm(e, "number")}
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="subscribe_input">
                  <button type="submit" onClick={subscribeNewsletter} disabled={newsBtn}> Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";
import Header from "../components/Header";
import Footer from '../components/Footer'
import axios from "axios";
import { useEffect } from "react";
import { modalsError } from "../helpers/modalsErrors";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const stripePromise = loadStripe("pk_test_51MXOggGe4eVPPaQiQXN62m9WlBaW7Duwy8JrS0laok4s5UyhZYPDpkI9FXzJ2UocoUy2uMaWeWc5hL7tgxndRCBi00FRi94z2w");

const CheckoutForm = ({price}) => {
  const stripe = useStripe();
  const elements = useElements();

  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const amount = price*1000; // in cents
    if (amount <= 0) {
      setPaymentError("Invalid Payment Amount");
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message);
    } else {
      const response = await fetch("https://api.stripe.com/v1/charges", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          payment_method_id: paymentMethod.id,
          amount: amount,
        }),
      });

      if (response.ok) {
        setPaymentSuccess("Payment Successful!");
      } else {
        setPaymentError("Payment Failed");
      }
    }
  };

  return (
    <>
    <Header />
    {/* <div className="container my-5">
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button className="my-3" type="submit" disabled={!stripe}>
        Pay
      </button>
      {paymentError && <p style={{ color: "red" }}>{paymentError}</p>}
      {paymentSuccess && (
        <p style={{ color: "green" }}>{paymentSuccess}</p>
      )}
    </form>
    </div> */}
    <div className="container my-5">
        <div className="row">
          <div className="form-group col-12 col-md-6 my-3">
            <h2 className="primary text-center my-3">Pay for Package</h2>
            <label for="NameOnCard">Name on card</label>
            <br></br>
            <input
              id="NameOnCard"
              className="form-control"
              type="text"
              maxlength="255"
            ></input>

            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-12 col-md-6 my-3">
                  <label htmlFor="cardnumber" className="mb-3">
                    Card Number
                  </label>
                  <CardNumberElement />
                </div>
                <div className="col-6 my-3">
                  <label htmlFor="cardexpiry" className="mb-3">
                    Expiry Date
                  </label>
                  <CardExpiryElement />
                </div>
                <div className="col-6 my-3">
                  <label htmlFor="cardcvc" className="mb-3">
                    CVC
                  </label>
                  <CardCvcElement />
                </div>
                <div className="col-12">
                  <button
                    id="PayButton"
                    className="btn btn-block btn-success submit-button"
                    type="submit"
                    disabled={!stripe}
                  >
                    <span className="align-middle">Pay</span>
                  </button>
                </div>
                {paymentError && <p style={{ color: "red" }}>{paymentError}</p>}
                {paymentSuccess && (
                  <p style={{ color: "green" }}>{paymentSuccess}</p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    <Footer />
    </>
  );
};

const App = () => {
  const [offers, setOffers] = useState();
  const [loading, setLoading] = useState(false);

  

  const { packagename } = useParams();

  const fetchOffers = async () => {
    let token = localStorage.getItem("token");
    setLoading(true);
    await axios({
      method: "post",
      url: `/offers/allOffers`,
      token: token,
    })
      .then((res) => {
        console.log("res>>", res);
        if (res?.status == 200) {
          setLoading(false);
          let current = Object.values(res?.data)
          let data = current?.filter(el => (el?.name).toLowerCase() == packagename)
          setOffers(data[0]);
        }
      })
      .catch((err) => {
        console.log("err>>", err);
        setLoading(false);
        modalsError(err);
      });
  };

  useEffect(()=> {
    fetchOffers()
  },[])
  return (
    <Elements stripe={stripePromise}>
    {loading ? <Spinner animation="border" variant="info" /> :
      <CheckoutForm price={offers?.price} />
    }
    </Elements>
  );
};

export default App;

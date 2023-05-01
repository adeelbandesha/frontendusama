import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { Form } from "react-router-dom";

const stripePromise = loadStripe("YOUR_PUBLISHABLE_KEY");

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const amount = 1000; // in cents
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
      const response = await fetch("/server/charge", {
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
      <div className="master_div">
        <div id="Checkout" className="inline">
          <h1>Pay Invoice</h1>
          <div className="card-row">
            <span className="visa"></span>
            <span className="mastercard"></span>
            {/* <span className="amex"></span>   */}
            <span className="discover"></span>
          </div>
          <Form>
            <div className="form-group">
              <label for="PaymentAmount">Payment amount</label>
              <div className="amount-placeholder">
                <span>AED</span>
                {/* <span>{packagesPrice[packagename].price}</span> */}
              </div>
            </div>
            <div className="form-group">
              <label for="NameOnCard">Name on card</label>
              <br></br>
              <input
                id="NameOnCard"
                className="form-control"
                type="text"
                maxlength="255"
              ></input>
            </div>

            <div className="form-group">
                <CardElement />
                <button type="submit" disabled={!stripe} onClick={handleSubmit}>
                  Pay
                </button>
                {paymentError && <p style={{ color: "red" }}>{paymentError}</p>}
                {paymentSuccess && (
                  <p style={{ color: "green" }}>{paymentSuccess}</p>
                )}
            </div>
            <div className="security-code-group form-group">
              <label for="SecurityCode" className="input_side">
                Security code
              </label>
              <div className="input-container">
                <input
                  id="SecurityCode"
                  className="form-control input_side"
                  type="text"
                ></input>
                <i id="cvc" className="fa fa-question-circle"></i>
              </div>
              <div className="cvc-preview-container two-card hide">
                <div className="amex-cvc-preview"></div>
                <div className="visa-mc-dis-cvc-preview"></div>
              </div>
            </div>
            <div className="zip-code-group form-group">
              <label for="ZIPCode">ZIP/Postal code</label>
              <div className="input-container">
                <input
                  id="ZIPCode"
                  className="form-control"
                  type="text"
                  maxlength="10"
                ></input>
                <a
                  tabindex="0"
                  role="button"
                  data-toggle="popover"
                  data-trigger="focus"
                  data-placement="left"
                  data-content="Enter the ZIP/Postal code for your credit card billing address."
                >
                  <i class="fa fa-question-circle"></i>
                </a>
              </div>
            </div>
            <button
              id="PayButton"
              className="btn btn-block btn-success submit-button"
              type="submit"
              disabled={handleSubmit}
            >
              <span className="submit-button-lock"></span>
              <span className="align-middle">
                Pay AED 
              </span>
            </button>
          </Form>
        </div>
      </div>
    </>
  );
};

const StripePayment = ({price}) => {
  console.log(price)
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default StripePayment;

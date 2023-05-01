import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";
import call from "../assets/images/call.png";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { modalsError } from "../helpers/modalsErrors";
import axios from "axios";
import { toast } from "react-toastify";
import { Spinner } from "react-bootstrap";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
    text: "",
  });

  const changeHandler = (value, key) => {
    let data = contactData;
    data[key] = value;
    setContactData({ ...data });
  };

  const submitContact = async (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    if (user?.email) {
      const { name, email, contact, address, text } = contactData;
      let number = `0097${contact}`;
      setLoading(true);
      await axios({
        method: "post",
        url: "https://profixing-back-production.up.railway.app/offers/contactMail",
        data: { name, email, contact: number, address, text, from: user.email },
      })
        .then((res) => {
          if (res.status == 200) {
            toast.success("Email sent, you will be contacted soon");
            let data = {
              name: "",
              email: "",
              contact: "",
              address: "",
              text: "",
            };
            setContactData({ ...data });
            setLoading(false);
          }
        })
        .catch((err) => {
          console.log("err>>", err);
          setLoading(false);
          modalsError(err);
        });
    } else {
      toast.error("You must be login");
    }
  };
  return (
    <>
      <div className="about_heading">
        <Header />
        <div className="container my-3">
          <h1>Contact</h1>
        </div>
      </div>
      <div className="container">
        <div className="win_flexi_nav mb-3">
          <FaHome />
          <a href="/" className="links-hover">
            Home
          </a>
          <a>/ About</a>
        </div>
      </div>
      <div className="container">
        <div className="conatact_map  mb-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.30118397996!2d54.947287526927106!3d25.076381471817122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1678395523962!5m2!1sen!2s"
            width="100%"
            height="480"
          ></iframe>
        </div>
        <div className="row my-5 ">
          <div className="col-lg-7">
            <div className="contact_call">
              <h1 className="primary">
                <img src={call} alt="" />
                Call or write to us
              </h1>
              <p>
                Bookings are open 24/7 on <span> www.Profixingdubai.com </span>
                or our <span> iOS and Android </span> mobile apps<br></br>
                For any customer support, kindly call or Whatsapp us on our
                toll-free contact
                <b>+971506367091 between 8 AM to 8 PM Saturday to Thursday,</b>
                except public holidays. Alternately, please send us an email on
                our 24/7 mailbox<span> support@Profixingdubai.com.</span>
                <br></br>
                All sales and partnership inquiries can be sent on
                <span> sales@Profixingdubai.com</span>
              </p>

              <div className="for_info">
                <b>
                  For any other information, please fill and submit the form and
                  we will revert within 24 hours.
                </b>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <form onSubmit={submitContact}>
              <div className="contact_form_win">
                <input
                  type="text"
                  className="form_contant_input"
                  id=""
                  placeholder="Name"
                  required
                  value={contactData.name}
                  onChange={(e) => changeHandler(e.target.value, "name")}
                />
                <input
                  type="email"
                  className="form_contant_input"
                  id=""
                  placeholder="Email Address"
                  required
                  value={contactData.email}
                  onChange={(e) => changeHandler(e.target.value, "email")}
                />
                <InputGroup className="my-3">
                  <InputGroup.Text id="basic-addon1">00971</InputGroup.Text>
                  <Form.Control
                    placeholder="9-digit mobile no. (e.g. 566820572)"
                    required
                    maxLength={9}
                    value={contactData.contact}
                    onChange={(e) => changeHandler(e.target.value, "contact")}
                  />
                </InputGroup>
                <InputGroup className="my-3">
                  <InputGroup.Text id="basic-addon1">UAE</InputGroup.Text>
                  <Form.Control
                    placeholder="address"
                    required
                    value={contactData.address}
                    onChange={(e) => changeHandler(e.target.value, "address")}
                  />
                </InputGroup>
                <textarea
                  id="msg"
                  placeholder="Your text"
                  className="p-2"
                  required
                  value={contactData.text}
                  onChange={(e) => changeHandler(e.target.value, "text")}
                ></textarea>
                <div className="contact_submit">
                  <button type="submit" disabled={loading}>
                    {loading ? "Submitting" : "Submit"}
                  </button>
                  {loading ? (
                    <Spinner animation="border" style={{ color: "#50d1c0" }} />
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

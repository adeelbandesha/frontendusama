import React, { useEffect, useState } from "react";

// import "./styles.css";
// import Wizard from "./Wizard";
import Wizard from "../components/Wizard";
import banne from "../assets/images/banne.png";

import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

import Modal from "react-bootstrap/Modal";
// import Header from "../components/Header";
// import Footer from '../components/Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { categoriesPrices } from "../js/CateroiesPrices";

import { useNavigate, useParams } from "react-router-dom";

import { sendBooking } from "../helpers/sendBooking";
import Step3 from "../components/Step3";
import { useDispatch, useSelector } from "react-redux";
import {
  setBookServiceData,
  step2ValidationsChange,
} from "../redux/ServiceSlice";
import { Spinner } from "react-bootstrap";
import UserModal from "../components/modals/UserModal";
import BookingHeader from "../components/BookingHeader";
import { selectedTimes } from "../js/CategariesNames";
import { monthDates } from "../js/CategariesNames";
import { CategoriesDetails } from "../js/CategoriesDetails";

function SubCatigaries() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const [shows] = useState(false);
  const handsleClose = () => setShow(false);
  const handsleShow = () => setShow(true);
  const [modalShow, setModalShow] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const [modalIsOpen1, setIsOpen1] = useState(false);

  const openModal1 = () => setIsOpen1(true);
  const closeModal1 = () => setIsOpen1(false);

  const [modalIsOpen2, setIsOpen2] = useState(false);

  const openModal2 = () => setIsOpen2(true);
  const closeModal2 = () => setIsOpen2(false);

  const { category, subcategory } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let currentData = categoriesPrices[category]?.find(
    (elem) => elem?.name == subcategory
  );


  const counter = currentData?.units;
  const [unit, setUnit] = useState(currentData?.units);
  const [unitCounter, setUnitCounter] = useState(1);

  const [selectedReasons, setSelectedReasons] = useState(
    currentData?.rooms ? currentData?.rooms[0] : null
  );
  const [selectedReason, setSelectedReason] = useState(null);
  console.log("reson seselcted ::: ", selectedReason);

  const [useTerms, setUseTerms] = useState(false);
  const [furnished, setFurnished] = useState(false);
  const [activeBtn, setActiveBtn] = useState(false);

  const [getDate, setGetDate] = useState();
  const [getTime, setGetTime] = useState();
  const [showDate, setShowDate] = useState();
  const [loginRequire, setLoginRequire] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState(0);

  // const [disableOthers, setDisableOthers] = useState(null)

  const categoryImage = CategoriesDetails.find((cat) => {
    return cat.value === category;
  })?.image;

  const [location, setLocation] = useState("Villa");

  // const [additionalData, setAdditionalData] = useState([])

  // console.log('additional:::::::::::::', additionalData)

  const changeLocationState = (e) => {
    setLocation(e.target.value);
  };

  useEffect(() => {
    let bookingData = {
      serviceName: currentData?.name,
      ServiceOrIssue: selectedReason,
      ServiceOrIssues: selectedReasons,
      units: unit,
      furnished: furnished,
      onSurvey: currentData?.onSurvey,

      to: "Profixinga@gmail.com",
      subject: "Request for booking",
      text: "Booking Summary",
      subTotal: Number(
        currentData?.price * unitCounter +
        (currentData?.additionalCharges && activeBtn == "yes"
          ? currentData?.additionalCharges * unitCounter
          : 0)
      ).toFixed(2),
      discount: currentData.onSurvey
        ? 0
        : Number(0.65 * unitCounter).toFixed(2),
      total: Number(
        currentData?.price * unitCounter -
        (0.65 * unitCounter).toFixed(2) +
        (currentData?.additionalCharges && activeBtn == "yes"
          ? currentData?.additionalCharges * unitCounter
          : 0)
      ).toFixed(2),
    };
    dispatch(setBookServiceData(bookingData));
  }, [unit, selectedReason, selectedReasons, furnished, unitCounter]);
  console.log("selected price:: ", selectedPrice);
  const getCurrentDate = (date) => {
    setGetDate(date);
    const today = new Date(date);
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const monthName = monthNames[today.getMonth()];
    const dayName = dayNames[today.getDay()];
    const dayDate = today.getDate();
    const currentYear = today.getFullYear();
    let currentDate =
      dayDate + " " + monthName + " " + dayName + " " + currentYear;
    setShowDate(currentDate);
    dispatch(step2ValidationsChange(false));
    dispatch(setBookServiceData({ date: date }));
  };

  const bookingData = useSelector((s) => s.services.bookService);
  const loading = useSelector((s) => s.services.serviceLoading);

  const decreaseCounter = () => {
    if (unit > counter) {
      setUnit((unit) => unit - counter);
      setUnitCounter((unitCounter) => unitCounter - 1);
    }
  };

  const currentDates = {
    dots: false,
    // infinite: false,
    speed: 500,
    centerMode: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: monthDates?.findIndex((el) => el?.date == getDate) ?? 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  var times = {
    dots: false,
    // infinite: false,
    centerMode: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: selectedTimes?.findIndex((el) => el == getTime),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const addAdditional = (text, price, hours) => {
    console.log("added");
    console.log(text);
    console.log(price);
    console.log(hours);
    // setAdditionalData([...additionalData, {title:text, price: price, time:hours}])
  };

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Payment summary
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="plan">
            <p>Plan</p>
            <p>Upon completion</p>
          </div>

          <div className="plan">
            <p>Method</p>
            <p>Cash</p>
          </div>
          <hr></hr>
          <div className="priveing">
            <h5 className="fw-bold">Pricing</h5>
          </div>
          <div className="plan">
            <h6 className="fw-bold">Item</h6>
            <p>AED</p>
          </div>
          <div className="plan">
            <p>Labor (including inspection)</p>
            <p>
              {Number(
                currentData?.price * unitCounter +
                (currentData?.additionalCharges && activeBtn == "yes"
                  ? currentData?.additionalCharges * unitCounter
                  : 0)
              ).toFixed(2)}
            </p>
          </div>
          <div className="plan">
            <p>Discount (self*)</p>
            <p>{currentData?.onSurvey ? 0.0 : 0.65 * unitCounter}</p>
          </div>

          <div className="plan">
            <h5 className="fw-bold">Total Amount</h5>
            <h5 className="fw-bold">
              {Number(
                currentData?.price * unitCounter -
                (0.65 * unitCounter).toFixed(2) +
                (currentData?.additionalCharges && activeBtn == "yes"
                  ? currentData?.additionalCharges * unitCounter
                  : 0)
              ).toFixed(2)}
            </h5>
          </div>
          <hr></hr>

          <p>*For website and app bookings only.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>{" "}
      </Modal>
    );
  }

  const Page1 = () => {
    const [selectedReason, setSelectedReason] = useState("");
    const [selectedReasons, setSelectedReasons] = useState("");
    const [selectedReasons2, setSelectedReasons2] = useState("");
    const [selectElement, setSelectElement] = useState("0")

    const handleReasonChange = (e) => {
      const selectedValue = e.target.value;
      setSelectedReason(selectedValue);
      setSelectedReasons("");
      setSelectedReasons2("");

      setSelectElement(e.target.id)

    };

    const handleReasons2Change = (e) => {
      const selectedValue = e.target.value;
      setSelectedReasons2(selectedValue);
      setSelectElement(e.target.id)
    };

    return (
      <>
        <div>
          <div className="counter_img"></div>
          <div className="counter_head">
            <h1>What service do you need? </h1>
            <p>
              Let us know a few details about the service you need or issue you
              are facing.
            </p>
          </div>


          {currentData?.reason ?

            <div className="conter_select">
              <p>{currentData?.reason}</p>
              <div className="selecter">
                <select
                  id="1"
                  onChange={handleReasonChange}
                  value={selectedReason}
                  className="text-capitalize"
                  disabled={selectElement !== "0" && selectElement !== "1"}

                >
                  {currentData?.reasons?.map((el, i) => (
                    <option key={i} value={el} className="text-capitalize">
                      {el}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            : null
          }

          {currentData?.uni ?

            <div className="conter_select">
              <p>{currentData?.uni}</p>
              <div className="selecter">
                <select
                  id="2"
                  onChange={handleReasonChange}
                  value={selectedReasons}
                  className="text-capitalize"
                  disabled={selectElement !== "0" && selectElement !== "2"}
                >
                  {currentData?.rooms?.map((el, i) => (
                    <option key={i} value={el} className="text-capitalize">
                      {el}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            : null
          }

          {currentData?.rea ?
            <div className="conter_select">
              <p>{currentData?.rea}</p>
              <div className="selecter">
                <select
                  id="3"
                  onChange={handleReasons2Change}
                  value={selectedReasons2}
                  className="text-capitalize"
                  disabled={selectElement !== "0" && selectElement !== "3"}
                >
                  {currentData?.reas?.map((el, i) => (
                    <option key={i} value={el} className="text-capitalize">
                      {el}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            : null
          }

          <div className="counter">{/* ... other code ... */}</div>
        </div>
      </>
    );
  };

  const Page2 = () => (
    <div>
      <div
        className="counter_img"
        style={{
          backgroundImage: `url("${categoryImage ? `/categories/${categoryImage}` : banne
            }")`,
        }}
      ></div>
      <div className="counter_head">
        <h1>When do you need the service?</h1>
        <p>Let us know your availability so we can work our schedule.</p>
      </div>
      <div className="select_date">
        <p className="fw-bold">Selected date and Time</p>
        <p className="date-time-font">
          {getTime} {showDate}
        </p>
      </div>
      <div>
        <Slider {...currentDates}>
          {monthDates?.map((el) => {
            return (
              <div
                className="all_dates"
                onClick={() => getCurrentDate(el?.date)}
              >
                <button
                  className={`date_piker ${el?.date == getDate ? "date_active" : ""
                    }`}
                >
                  <p className="day">{el?.dayName}</p>
                  <h6 className="slider_date">{el?.date.split("/")[1]}</h6>
                </button>
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="Select_time">
        <p>Select Time</p>
      </div>
      <div>
        <Slider {...times}>
          {selectedTimes?.map((el, i) => {
            return (
              <div
                className={`time_border pointer ${el == getTime ? "time_border_active" : ""
                  }`}
                key={i}
                onClick={() => setGetTime(el)}
              >
                <div className="time">{el}</div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );

  const Page4 = () => (
    <div>
      <div className="thank_page">
        {/* <p className="thanku">Thank you!</p> */}
        <p className="confrined">Your booking is almost ready</p>
        {/* <p>
          <b>Cleaning</b>
        </p>
        <p>
          <b>JOB ID</b> <span>221019947</span>{" "}
        </p>
        <p className="date_time">16/22/2022,10:22</p> */}
        <p>We will intimate you via email</p>
        <div className="veiw_btns">
          {/* <button className="btn_details">View Details</button> */}
          <button
            className="btn_servises"
            disabled={loading}
            onClick={() =>
              sendBooking(bookingData, navigate, dispatch, setLoginRequire)
            }
          >
            Book Now
          </button>
          {loading ? (
            <span className="m-2">
              <Spinner animation="border" variant="info" />
            </span>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );

  // function getAdditionalPrice(){
  //   let additionalPrice = 0
  //   additionalData.map((item) => {
  //     additionalPrice = additionalPrice + parseInt(item.price)
  //   })

  //   return additionalPrice
  // }
  return (
    <>
      {/* <Header /> */}
      <BookingHeader category={category} subcategory={subcategory} />
      <Wizard
        data={currentData}
        furnished={furnished}
        selected={selectedReason}
        selecteds={selectedReasons}
        unit={unit}
        date={getDate}
        time={getTime}
        currentData={currentData}
        location={location}
      // additionaldata = {additionalData? additionalData : null}
      >
        <Page1 />
        <Page2 category={category} />
        <Step3 />
        <Page4 />
      </Wizard>

      <footer>
        <div className="footer_2">
          <div className="side_bar_btns">
            <Button variant="primary" onClick={handsleShow}>
              Scope Details
            </Button>

            <Offcanvas show={shows} onHide={handsleClose}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Pricing details</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <h3>Inspection based services.</h3>
                <p>
                  Minimum inspection call-out charges* AED 129. Additional
                  charges as per bill estimate. *Inspection call-out charges
                  apply to inspection based services only, and include travel
                  cost plus 1 hour of labor required to diagnose the issue,
                  perform minor repairs, if time permits or provide a detailed
                  bill estimate for a major repair.
                </p>
                <h2>NOTES</h2>
                <p>
                  Additional charges apply for Emergency bookings, based on
                  availability and permissions from community/ building, as
                  confirmed by the Customer. VAT charges are not included and
                  are based on the total invoice Amount.
                </p>
              </Offcanvas.Body>
            </Offcanvas>

            <Button variant="primary" onClick={() => setUseTerms(true)}>
              Terms of Use
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                  <h4 className="primary">Scope Details</h4>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <hr></hr>
              <Offcanvas.Body>
                <h6 className="fw-bold primary">What's Included</h6>
                <p>
                  - Visit the customer location. <br />
                  - Inspection and diagnosis of the issue, on-site. <br />
                  - For minor repair - work that can be completed, on the spot,
                  in 1 hour <br />
                  - For major repair - detailed diagnosis and bill estimation,
                  including ascertaining the availability of material and/ or
                  spare parts <br />
                  - Testing and demo; and <br />- Post-inspection cleanup.
                </p>

                <hr></hr>

                <h6 className="fw-bold primary">NOTES</h6>
                <p>
                  Customer to assist in getting access to community and service
                  location; and electricity and water connection to be active.
                </p>
              </Offcanvas.Body>
            </Offcanvas>
            <Offcanvas show={useTerms} onHide={() => setUseTerms(false)}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                  <h4 className="primary">Terms Of Use</h4>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <hr></hr>
              <Offcanvas.Body>
                <p>
                  <span className="primary">Profixingdubai</span> is a online
                  on-demand "managed" marketplace which ensure that its Users
                  get the Services they booked to the quality, price and as per
                  their schedule they desire. We not only identify, train and
                  onboard Service delivery Partners using a very stringent
                  criteria but also ensure that they are matched to only the
                  right Service requested by the User based on verifying their
                  skills, legal status, ratings and reviews, in real-time. All
                  these activities are conducted on HomeGenie platform, our
                  proprietary purpose built technology system.
                </p>
                <hr />
                <p>
                  Service booked by the User can be cancelled at any time before
                  the booking has been attended at the User location. A
                  cancellation charge might be applicable depending upon how
                  close to the booking date/ time was the booking cancelled and
                  whether a Service Delivery Partner (or "Genie") has already
                  been assigned to the booking. Upon trying to cancel, the
                  HomeGenie Platform will show the applicable cancellation
                  charges in case the User proceeds with the cancellation.
                </p>
              </Offcanvas.Body>
            </Offcanvas>

            <Button variant="primary" onClick={() => setModalShow(true)}>
              AED
              {currentData?.onSurvey
                ? 0.0
                : activeBtn == "yes" && currentData?.additionalCharges
                  ? currentData?.price * unitCounter -
                  (0.65 * unitCounter).toFixed(2) +
                  unitCounter * currentData?.additionalCharges
                  : currentData?.price * unitCounter -
                  (0.65 * unitCounter).toFixed(2)}
              {currentData?.onSurvey ? (
                <p
                  className="fw-bold"
                  style={{ color: "red", fontSize: "14px" }}
                >
                  Free Survey
                </p>
              ) : (
                ""
              )}
            </Button>

            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
            <UserModal show={loginRequire} hide={setLoginRequire} />
          </div>
        </div>
      </footer>
    </>
  );
}

export default SubCatigaries;

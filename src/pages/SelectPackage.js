import Header from "../components/Header";
import Footer from "../components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import plumb1 from "../assets/images/plumb1.jpg";
import plumb2 from "../assets/images/plumb2.jpg";
import plumb3 from "../assets/images/plumb3.jpg";
import plumb4 from "../assets/images/plumb4.jpg";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { modalsError } from "../helpers/modalsErrors";

export default function Select_pkg() {
  const { packagename } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [offers, setOffers] = useState();

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
      });
  };

  useEffect(()=> {
    fetchOffers()
  },[])

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  
  const payPrice = () => {
    navigate(`/offers/package/${packagename}/payment`);
  };
  return (
    <>
      <Header />
      <div className="about_heading my-3 ">
        <div className="container">
          <h1 className="primary">Maintenance Packages </h1>
        </div>
      </div>
      <div className="container my-3">
        <div className="win_flexi_nav">
        <a href="/" className="links-hover">
            Home
          </a>
          <a>/ Maintenance Packages</a>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <Slider {...settings}>
              <div className="pkg_img">
                <img src={plumb1} alt="" />
              </div>
              <div className="pkg_img">
                <img src={plumb2} alt="" />
              </div>
              <div className="pkg_img">
                <img src={plumb3} alt="" />
              </div>
              <div className="pkg_img">
                <img src={plumb4} alt="" />
              </div>
            </Slider>
          </div>
          <div className="col-lg-7">
            <div className="select_pkg_sec_2">
              <div className="selcet_content">
                <h1 style={{ textTransform: "capitalize" }} className="primary">
                  {packagename} (Monthly)
                </h1>
                Starting from
                <h2 className="primary">
                  AED {offers?.price}/Month
                  <span className="span_color"> (VAT Inclusive)</span>
                </h2>
                {/* PROPERTY TYPE
                <select className="rate_selecter">
                  <option selected="selected">Select Property Type</option>
                  <option>Select Property Type</option>
                  <option>Small Apartment - ST / 1BR / 2BR</option>
                  <option>Mid-sized Apartment - 3BR / 4BR</option>

                  <option>Large Apartment - 5BR / PENT</option>
                  <option>Small Villa - 2BR / 3BR</option>
                  <option>Mid-sized Villa - 4BR / 5BR</option>
                  <option>Large Villa - 6BR / 7BR</option>
                </select> */}
                <div className="sign_btn_2">
                  <Link to="/login">
                    <button>Sign In / Resgister</button>
                  </Link>
                </div>
                <p className="maintance">
                  *Home Maintenance Packages are active for a year from the date
                  of purchase. All recurring payments related to this product
                  will be processed with the credit card provided for purchase.
                </p>
                <p className="maaintaince_pkgs">
                  Our maintenance packages provide the most cost effective and
                  convenient way to ensure your home is always in good working
                  order. Whether you need emergency cover, or you want complete
                  peace of mind, we have different packages suited to your
                  needs.
                </p>
              </div>
              <div onClick={payPrice} className="sleclt_btns">
                <button type="button" className="select_btn">
                  Purchase
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-custom my-5">
        <div className="container p-5">
          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="home" title="Dtails">
              <div className="home_content">
                <p>
                  Our maintenance packages provide the most cost effective and
                  convenient way to ensure the assets in your home or property
                  is in good working condition. Whether you need an immediate
                  emergency cover or you want complete peace of mind, we have
                  suitable packages for every requirement. We also provide
                  specialized packages for specific property requirements.
                </p>
                <h4>DETAILS</h4>
                <p>
                  {offers?.detail.callout} X Regular Call Outs<br></br>
                  {packagename == "silver" ? "Applicable" : 2} X Preventive
                  Maintenance
                  <br></br>
                  {offers?.detail.ac}- Air-conditioning<br></br>
                  {offers?.detail?.electrical}- Electrical
                  Components and Panels<br></br>
                  {offers?.detail?.plumbing}- Plumbing
                  Components<br></br>
                  {offers?.detail?.handyman} X Handyman
                  Services
                </p>
                <h4>PACKAGE SCOPE COVERAGE</h4>
                <p>
                  <strong>Air Conditioning Spare Parts</strong> - Fan Motor, Fan
                  Blade, A/C Temperature Thermostat, Grill, Filters, Compressor
                  (Threshold of AED 650 per compressor replacement), Actuator,
                  A/C Re-Gassing &amp; Gas Recovery, Other Minor Parts
                  (Threshold of AED 100 per minor spare part)
                </p>
                <p>
                  <strong>Plumbing Spare Parts</strong> - Water Heater
                  Thermostat, Toilet Flush Kit, Toilet Push Buttons, Flex Pipes,
                  Float Valve, Other Minor Spare Parts (threshold of AED 100 per
                  minor spare part), Shattaf (profixingdubai standard issue Shattaf)
                </p>
                <p>
                  <strong>Electrical Spare Parts</strong> - Light Switches,
                  Cooker Switch, Power Sockets (13 &amp; 15 Amp), Miniature
                  Circuit Breaker (MCB) Fuse, Other Minor Parts (Threshold of
                  AED 100 per minor spare part), Light bulbs (profixingdubai Standard
                  issue) replaced only once during Electrical service, if
                  required.
                </p>
                <p>
                  <strong>Handyman Services</strong>
                  <br></br>Fixing of mirror, book shelves, minor carpentry, door
                  hinges and cabinet hinges fixing, wall hanging and picture
                  frame fixing on walls
                </p>{" "}
                <p>
                  Labour – Unlimited <br></br>Consumables – Limited <br></br>
                  .Parts – Limited
                </p>
                <h4>EXCLUSION IN SCOPE</h4>{" "}
                <p>
                  <strong>Air-conditioning</strong>
                  <br></br>Duct Cleaning, Coil Cleaning, Changing of coils
                </p>{" "}
                <p>
                  <strong>Plumbing</strong>
                  <br></br>Replacement of water heater, water pumps, pressure
                  kit, flush tank, cistern, piping, customer specific shattaf,
                  basin mixer taps, shower heads etc. and irrigation network
                </p>{" "}
                <p>
                  <strong>Electrical</strong>
                  <br></br>Lights, bulbs, batteries, home automation and
                  re-wiring
                </p>{" "}
                <p>
                  <strong>Handyman</strong>
                  <br></br>Any major carpentry jobsroller fly screens, aluminum
                  door/ window works, sliding door, glass works, ceiling tiles/
                  re-fixing, any new installation (cabinet, doors, windows,
                  gazeebos, glass works, etc.)
                </p>
              </div>
            </Tab>
            <Tab eventKey="profile" title="Term & Conditions">
              <div className="term_content">
                <h4>TERMS AND CONDITIONS OF PURCHASE</h4>
                <p className="some_ita">
                  The following Terms and Conditions of Purchase shall apply to
                  all services purchased by a customer from profixingdubai, which is a
                  wholly owned division of Emrill Services LLC (hereafter
                  referred to as “profixingdubai”), and the customer shall be deemed to
                  have accepted these Terms and Conditions of Purchase (unless
                  specifically waived or varied by Emrill in writing).
                </p>
                <h4>CUSTOMER OBLIGATIONS</h4>
                <p className="ul_head">The customer shall:</p>
                <ul>
                  <li>
                    Ensure that a responsible person, whether this be the
                    property owner, or a representative of the property owner,
                    is present to enable access to the property as
                    agreed/scheduled and be present at the property for the
                    duration of the service delivery. For the avoidance of
                    doubt, if attendance of a scheduled and confirmed callout
                    appointment is delayed or prohibited due to inability to
                    gain access to the premises, the services shall be
                    considered as fulfilled /completed.
                  </li>
                  <li>
                    Provide water and electricity for any maintenance work being
                    carried out.
                  </li>
                  <li>
                    Ensure there is a safe and secure means of access to all
                    plant and equipment that requires maintenance (i.e.
                    installation of permanent ladder access to pitch roofs for
                    air conditioning equipment).
                  </li>
                  <li>
                    Remove all obstructions around the area to be serviced (e.g.
                    water tanks) to allow safe access.
                  </li>
                  <li>
                    Bear any cost for any destructive access (such as cutting
                    through ceiling plaster or panels) is required for delivery
                    of the services.
                  </li>
                  <li>
                    Promptly settle all charges without any set-off, deduction
                    or counter claim.
                  </li>
                  <li>
                    Be responsible to obtain any and all sorts of approval / NOC
                    required from the local authority, building management,
                    community management, etc. prior to the commencement of
                    services.
                  </li>
                </ul>
                <div className="seco_ul_home_size">
                  <h4>HOME SIZES</h4>
                  <ul>
                    <li>
                      Apartments are defined as homes that are vertically
                      stacked above each other in a single building. In some
                      cases, an apartment may be referred to as studio or a
                      loft.
                    </li>
                    <li>
                      Villas are defined as homes that are horizontally laid out
                      either as free-standing buildings or with shared walls. In
                      some cases, a Villa may be referred to a Podium Villa or a
                      Townhouse.
                    </li>
                    <li>
                      Bedrooms are defined as any room that is used for sleeping
                      purposes. A Maid’s room, Driver’s room and/or and study
                      that could be used as a bedroom are included in this
                      definition when defining the overall home size.
                    </li>
                    <li>
                      For services whose price varies based on home size, the
                      following will define how a home size option is
                      determined:
                    </li>
                  </ul>
                </div>
              </div>
            </Tab>
            <Tab eventKey="contact" title="Inclusions & exclusions">
              <div className="exculsion_content">
                <h4>Inclusions</h4>
                <p>
                  Callouts &amp; Maintenance Services as specified in the
                  product information / details
                </p>
                <p>
                  <strong>Air Conditioning Spare Parts</strong>- Fan Motor, Fan
                  Blade, A/C Temperature Thermostat, Grill, Filters, Compressor
                  (Threshold of AED 650 per compressor replacement), Actuator,
                  A/C Re-Gassing &amp; Gas Recovery, Other Minor Parts
                  (Threshold of AED 100 per minor spare part)
                </p>
                <p>
                  <strong>Plumbing Spare Parts</strong> - Water Heater
                  Thermostat, Toilet Flush Kit, Toilet Push Buttons, Flex Pipes,
                  Float Valve, Other Minor Spare Parts (threshold of AED 100 per
                  minor spare part), Shattaf (profixingdubai standard issue Shattaf)
                </p>
                <p>
                  <strong>Electrical Spare Parts</strong> - Light Switches,
                  Cooker Switch, Power Sockets (13 &amp; 15 Amp), Miniature
                  Circuit Breaker (MCB) Fuse, Other Minor Parts (Threshold of
                  AED 100 per minor spare part), Light bulbs (profixingdubai Standard
                  issue) replaced only once during Electrical service, if
                  required.
                </p>
                <p>
                  <strong>Handyman Services</strong> - Re-fixing of fixed fly
                  screen (materials charged separately), Hanging of picture /
                  mirrors, fixing of bookshelves / shelves, Tightening of
                  kitchen/cabinet/door hinges
                </p>
                <h4>Exclusions</h4>{" "}
                <p>
                  <strong>Air Conditioning Spare Parts</strong> - Fan Coil
                  Units, Insulation, Ducting or Piping, Chemical Coil cleaning
                </p>{" "}
                <p>
                  <strong>Plumbing Spare Parts</strong> - Water Heaters, water
                  Pumps, pressure kits, Toilet Pan, Cistern, Basin, Taps,
                  Piping, Garden Irrigation Systems
                </p>{" "}
                <p>
                  <strong>Electrical Spare Parts</strong>- Power Distribution
                  Board, Light Globes/ Batteries, Re-Wiring, Home Automation
                  Systems
                </p>{" "}
                <p>
                  <strong>Handyman Services</strong>- Roller fly screens,
                  Aluminium door/ window works (realignment, re fixing), Sliding
                  door / glass works, Ceiling tiles fixing / re-fixing, Any new
                  installation (cabinet, doors, windows, gazebos, glass works,
                  etc)
                </p>{" "}
                <p>
                  <strong>
                    Destructive Access Services are not covered in this package
                  </strong>{" "}
                  - Any destructive access (such as cutting through ceiling
                  plaster or panels) is required for delivery of the services{" "}
                </p>{" "}
                <p>
                  <strong>Approvals </strong> - Obtaining approval / NOC
                  required from the local authority, building management,
                  community management, etc. prior to the commencement of
                  services is not covered in the scope.
                </p>
                <p>
                  <strong>Warranties </strong>- No warranty on materials or
                  spare parts unless the defect is proven to be as a result of
                  profixingdubai actions or negligence and such defect is highlighted in
                  writing to profixingdubai within 30 days from the date of the original
                  service taking place. profixingdubai shall not be liable for any
                  defects that are caused by or related to fair wear and tear,
                  misuse, customer or third-party actions.
                </p>{" "}
                <p>
                  <strong>
                    Other Services which are note covered in this package{" "}
                  </strong>{" "}
                  - Installation of any items / materials provided by the
                  customer (for safety reasons), Any system or service not
                  expressly mentioned in our scope, Any addition, upgrade,
                  replacement or partial preplacement to existing systems, Any
                  rectification / modification to correct design, construction
                  or commissioning faults, Modification and or insulation work
                  for piping, ducting and internal duct cleaning, Replacement of
                  water or drainage lines in shafts, air wells, water pumps,
                  pressure vessels, bladders, water tanks etc., Replacement of
                  complete light fittings, Roof or basement leakage due to water
                  proofing failure of the structure, Kitchen equipment, Audio
                  visual equipment , Data and related components, Generators,
                  Chilled water pumps or piping insulation, Garden Sprinkler/
                  Irrigation systems and associated pumps and equipment
                </p>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>

      <Footer />
    </>
  );
}

import React from "react";

import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

import caty_1 from "../assets/images/trend_card_6.png";
import caty_2 from "../assets/images/trend_card_7.png";
import caty_3 from "../assets/images/trend_card_8.png";
import caty_4 from "../assets/images/trend_card_9.png";
import caty_5 from "../assets/images/trend_card_10.png";
import catys_11 from "../assets/images/catys_11.jpg";
import catys_12 from "../assets/images/catys_12.jpg";
import catys_13 from "../assets/images/catys_13.jpg";
import catys_14 from "../assets/images/catys_14.jpg";
import catys_16 from "../assets/images/cartys_16.jpg";
import catys_17 from "../assets/images/cartys_17.jpg";
import catys_18 from "../assets/images/cartys_18.jpg";
import catys_19 from "../assets/images/cartys_19.jpg";
import catys_20 from "../assets/images/cartys_20.jpg";

import cartys_21 from "../assets/images/cartys_21.png";
import cartys_22 from "../assets/images/cartys_22.png";
import cartys_23 from "../assets/images/cartys_23.png";
import cartys_24 from "../assets/images/cartys_24.png";
import cartys_25 from "../assets/images/cartys_25.png";
import cartys_34 from "../assets/images/cartys_34.png";
import cartys_35 from "../assets/images/cartys_35.png";
import cartys_36 from "../assets/images/cartys_36.png";

import cartys_38 from "../assets/images/cartys_38.png";

import cartys_26 from "../assets/images/cartys_26.jpg";
import cartys_27 from "../assets/images/cartys_27.jpg";
import cartys_28 from "../assets/images/cartys_28.jpg";
import cartys_29 from "../assets/images/cartys_29.jpg";
import cartys_30 from "../assets/images/cartys_30.jpg";
import cartys_31 from "../assets/images/cartys_31.jpg";
import cartys_32 from "../assets/images/cartys_32.jpg";
import cartys_33 from "../assets/images/cartys_33.jpg";

import cartys_39 from "../assets/images/cartys_39.jpg";
import cartys_40 from "../assets/images/cartys_40.jpg";
import cartys_41 from "../assets/images/cartys_41.jpg";
import cartys_42 from "../assets/images/cartys_42.jpg";
import cartys_43 from "../assets/images/cartys_43.jpg";
import cartys_44 from "../assets/images/cartys_44.jpg";
import cartys_45 from "../assets/images/cartys_45.jpg";
import cartys_46 from "../assets/images/cartys_46.jpg";
import cartys_47 from "../assets/images/cartys_47.jpg";
import cartys_48 from "../assets/images/cartys_48.jpg";

import cartys_49 from "../assets/images/cartys_49.png";
import cartys_50 from "../assets/images/cartys_50.png";
import cartys_51 from "../assets/images/cartys_51.png";
import cartys_52 from "../assets/images/cartys_52.png";
import cartys_53 from "../assets/images/cartys_53.png";
import cartys_54 from "../assets/images/cartys_54.jpg";
import cartys_55 from "../assets/images/cartys_55.png";
import cartys_56 from "../assets/images/cartys_56.png";
import cartys_57 from "../assets/images/cartys_57.png";
import cartys_58 from "../assets/images/cartys_58.png";

import cartys_59 from "../assets/images/cartys_59.png";
import cartys_60 from "../assets/images/cartys_60.png";
import cartys_61 from "../assets/images/cartys_61.png";
import cartys_62 from "../assets/images/cartys_62.png";
import cartys_63 from "../assets/images/cartys_63.png";
import cartys_64 from "../assets/images/cartys_64.png";
import cartys_65 from "../assets/images/cartys_65.png";
import cartys_66 from "../assets/images/cartys_66.png";
import cartys_67 from "../assets/images/cartys_67.png";
import cartys_68 from "../assets/images/cartys_68.png";
import cartys_69 from "../assets/images/cartys_69.png";
import cartys_70 from "../assets/images/cartys_70.png";

import cartys_71 from "../assets/images/cartys_71.jpg";
import cartys_72 from "../assets/images/cartys_72.jpg";
import cartys_73 from "../assets/images/cartys_73.jpg";
import cartys_74 from "../assets/images/cartys_74.jpg";

import cartys_79 from "../assets/images/cartys_79.jpg";
import cartys_80 from "../assets/images/cartys_80.jpg";
import cartys_81 from "../assets/images/cartys_81.jpg";
import cartys_82 from "../assets/images/cartys_82.jpg";
import cartys_83 from "../assets/images/cartys_83.jpg";
import cartys_84 from "../assets/images/cartys_84.jpg";
import cartys_85 from "../assets/images/cartys_85.jpg";
import cartys_86 from "../assets/images/cartys_86.jpg";
import cartys_87 from "../assets/images/cartys_87.jpg";
import cartys_88 from "../assets/images/cartys_88.jpg";

// import caty_11 from "../assets/images/caty_11.png";
// import caty_12 from "../assets/images/caty_12.png";
import { NavLink, useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import caty_13 from "../assets/images/caty_13.png";

function Catigaries() {
  const { category } = useParams();
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="my-3">
          <Tab.Container id="left-tabs-example" defaultActiveKey={category}>
            <Row>
              <Col sm={12} md={3} className="caty_back">
                <Nav variant="pills" className="flex-column py-2">
                  <Nav.Item>
                    <Nav.Link href="ac">AC Work</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="painting">Painting</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="electrical">Electrical</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="plumbing">Plumbing</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="deepcleaning">Deep Cleaning</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="gardening">Gardening</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="glasswork">Glass Work</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="handyman">Handyman</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="appliances">Appliances</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="specialized">Specialised Services</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={12} md={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="ac">
                    <div className="primary mb-3">
                      <h1>Ac Work</h1>
                    </div>

                    <div className="row">
                      {/* <div className="col-12 col-md-6 col-lg-3">
                      <NavLink to="service/coil-cleaning">
                        <img
                          className="caty_1"
                          src={caty_1}
                          alt=""
                          width={"100%"}
                        />
                        <p className="caty_win_p">AC coil cleaning</p>
                      </NavLink>
                    </div> */}
                      {/* <div className="cart_1_img"> */}
                      {/* <div className="col-12 col-md-6 col-lg-3">
                      <img
                        className="caty_1"
                        src={caty_1}
                        alt=""
                        width={"100%"}
                      />
                      <p className="caty_win_p">AC coil cleaning</p>
                    </div> */}
                      {/* <div className="cart_1_img"> */}
                      {/* <div className="col-12 col-md-6 col-lg-3">
                      <img src={caty_1} alt="" width={"100%"} />
                      <p className="caty_win_p">AC cooling cleaning</p>
                    </div> */}
                    </div>
                    {/* </div> */}
                    <div className="caty_flexi">
                      <div className="flexi_phoos">
                        <NavLink to="service/ac-soft-service">
                          <div className="cart_1_img">
                            <img className="caty_1" src={caty_1} alt="" />
                            <p className="caty_win_p">AC Soft Service</p>
                          </div>
                        </NavLink>
                        <NavLink to="service/repair-maintainance">
                          <div className="cart_1_img">
                            <img className="caty_1" src={caty_2} alt="" />
                            <p className="caty_win_p">
                              AC Repair & Maintainance
                            </p>
                          </div>
                        </NavLink>
                        <NavLink to="service/coil-cleaning">
                          <div className="cart_1_img">
                            <img className="caty_1" src={caty_3} alt="" />
                            <p className="caty_win_p">AC Coil Cleaning</p>
                          </div>
                        </NavLink>
                        <NavLink to="service/duct-cleaning">
                          <div className="cart_1_img">
                            <img className="caty_1" src={caty_4} alt="" />
                            <p className="caty_win_p">AC Duct cleaning</p>
                          </div>
                        </NavLink>
                        <NavLink to="service/installation">
                          <div className="cart_1_img">
                            <img className="caty_1" src={caty_5} alt="" />
                            <p className="caty_win_p">AC Installation</p>
                          </div>
                        </NavLink>
                        {/* <div className="cart_1_img">
                      <img className="caty_1" src={caty_1} alt="" />
                      <p className="caty_win_p">AC cooling cleaning</p>
                    </div> */}
                      </div>
                    </div>
                    {/* <div className="caty_flexi">
                    <div className="cart_1_img">
                      <img className="caty_1" src={caty_1} alt="" />
                      <p className="caty_win_p">AC cooling cleaning</p>
                    </div>
                    <div className="cart_1_img">
                      <img className="caty_1" src={caty_1} alt="" />
                      <p className="caty_win_p">AC cooling cleaning</p>
                    </div>
                    <div className="cart_1_img">
                      <img className="caty_1" src={caty_1} alt="" />
                      <p className="caty_win_p">AC cooling cleaning</p>
                    </div>
                  </div> */}
                  </Tab.Pane>
                  <Tab.Pane eventKey="electrical">
                    <div className="primary mb-3">
                      <h1>Electrical</h1>
                    </div>
                    <div className="caty_flexi">
                      <div className="flexi_phoos">
                        <NavLink to="service/shutdown-repair">
                          <div className="cart_1_img">
                            <img className="caty_1" src={catys_11} alt="" />
                            <p className="caty_win_p">
                              Electrical shutdown repair
                            </p>
                          </div>
                        </NavLink>
                        <NavLink to={"service/fixture-or-repair"}>
                          <div className="cart_1_img">
                            <img className="caty_1" src={catys_12} alt="" />
                            <p className="caty_win_p">
                              Light fixture or LED installation
                            </p>
                          </div>
                        </NavLink>
                        <NavLink to={"service/electrical-fitting"}>
                          <div className="cart_1_img">
                            <img className="caty_1" src={catys_13} alt="" />
                            <p className="caty_win_p">
                              Electrical fitting installation
                            </p>
                          </div>
                        </NavLink>
                        <NavLink to={"service/power-switches-repair"}>
                          <div className="cart_1_img">
                            <img className="caty_1" src={catys_14} alt="" />
                            <p className="caty_win_p">
                              Power outlets and switches repair
                            </p>
                          </div>
                        </NavLink>
                       
                      </div>

                      {/* <div className="cart_1_img">
                      <img className="caty_1" src={caty_2} alt="" />
                      <p className="caty_win_p">AC thermostat repair</p>
                    </div>
                    <div className="cart_1_img">
                      <img className="caty_1" src={caty_2} alt="" />
                      <p className="caty_win_p">AC thermostat repair</p>
                    </div> */}
                    </div>
                    {/* <div className="caty_flexi">
                    <div className="cart_1_img">
                      <img className="caty_1" src={caty_2} alt="" />
                      <p className="caty_win_p">AC thermostat repair</p>
                    </div>
                    <div className="cart_1_img">
                      <img className="caty_1" src={caty_2} alt="" />
                      <p className="caty_win_p">AC thermostat repair</p>
                    </div>
                    <div className="cart_1_img">
                      <img className="caty_1" src={caty_2} alt="" />
                      <p className="caty_win_p">AC thermostat repair</p>
                    </div>
                  </div> */}
                    {/* <div className="caty_flexi">
                    <div className="cart_1_img">
                      <img className="caty_1" src={caty_2} alt="" />
                      <p className="caty_win_p">AC thermostat repair</p>
                    </div>
                    <div className="cart_1_img">
                      <img className="caty_1" src={caty_2} alt="" />
                      <p className="caty_win_p">AC thermostat repair</p>
                    </div>
                    <div className="cart_1_img">
                      <img className="caty_1" src={caty_2} alt="" />
                      <p className="caty_win_p">AC thermostat repair</p>
                    </div>
                  </div> */}
                    {/* <div className="caty_flexi">
                    <div className="cart_1_img">
                      <img className="caty_1" src={caty_2} alt="" />
                      <p className="caty_win_p">AC thermostat repair</p>
                    </div>
                    <div className="cart_1_img">
                      <img className="caty_1" src={caty_2} alt="" />
                      <p className="caty_win_p">AC thermostat repair</p>
                    </div>
                    <div className="cart_1_img">
                      <img className="caty_1" src={caty_2} alt="" />
                      <p className="caty_win_p">AC thermostat repair</p>
                    </div>
                  </div> */}
                  </Tab.Pane>

                  <Tab.Pane eventKey="painting">
                    <div className="primary mb-3">
                      <h1>Painting</h1>
                    </div>
                    <div className="caty_flexi">
                      <div className="flexi_phoos">
                        {/* <NavLink to="service/Off White/White">
                          <div className="cart_1_img">
                            <img className="caty_1" src={cartys_79} alt="" />
                            <p className="caty_win_p">Off White/White</p>
                          </div>
                        </NavLink> */}
                          {/* <NavLink to="service/Off-White">
                          <div className="cart_1_img">
                            <img className="caty_1" src={cartys_79} alt="" />
                            <p className="caty_win_p">Off White/White</p>
                          </div>
                        </NavLink> */}

                         <NavLink to="service/Off White" className="mynavcard">
                          <div className="cart_1_img">
                            <img className="caty_1" src={cartys_79} alt="" />
                            <p className="caty_win_p">Off White/White</p>
                          </div>
                        </NavLink>

                        <NavLink to="service/Color Painting" className="mynavcard">
                          <div className="cart_1_img">
                            <img className="caty_1" src={cartys_80} alt="" />
                            <p className="caty_win_p">
                              Color Painting
                            </p>
                          </div>
                        </NavLink>
                        <NavLink to="service/ Water Damage Repair" className="mynavcard">
                          <div className="cart_1_img">
                            <img className="caty_1" src={cartys_81} alt="" />
                            <p className="caty_win_p">
                              Water Damage Repair
                            </p>
                          </div>
                        </NavLink>
                        
                        
                        {/*
                       
                        <NavLink to="service/interior-double-coat">
                          <div className="cart_1_img">
                            <img className="caty_1" src={cartys_84} alt="" />
                            <p className="caty_win_p">
                              Interior apartment or villa painting - Move-in or
                              double coat
                            </p>
                          </div>
                        </NavLink>
                        <NavLink to="service/exterior-villa">
                          <div className="cart_1_img">
                            <img className="caty_1" src={cartys_85} alt="" />
                            <p className="caty_win_p">
                              Exterior villa painting
                            </p>
                          </div>
                        </NavLink>
                        <NavLink to="service/room-painting">
                          <div className="cart_1_img">
                            <img className="caty_1" src={cartys_86} alt="" />
                            <p className="caty_win_p">Room(s) painting</p>
                          </div>
                        </NavLink>
                        <NavLink to="service/touchup-painting">
                          <div className="cart_1_img">
                            <img className="caty_1" src={cartys_87} alt="" />
                            <p className="caty_win_p">Touch up painting</p>
                          </div>
                        </NavLink>
                        <NavLink to="service/custom-painting">
                          <div className="cart_1_img">
                            <img className="caty_1" src={cartys_88} alt="" />
                            <p className="caty_win_p">
                              Other custom job - fence painting, etc.
                            </p>
                          </div>
                        </NavLink> */}
                      </div>
                    </div>
                  </Tab.Pane>

                  <Tab.Pane eventKey="plumbing">
                    <div className="primary mb-3">
                      <h1>Plumbing</h1>
                    </div>
                    <div className="caty_flexi">
                      <div className="flexi_phoos">
                        <NavLink to="service/large-fixture" className="mynavcard">
                          <div className="cart_1_img">
                            <img className="caty_1" src={catys_16} alt="" />
                            <p className="caty_win_p">
                              Large fixture (WC, etc) repair
                            </p>
                          </div>
                        </NavLink>
                        <NavLink to="service/pipe-unclogging" className="mynavcard">
                          <div className="cart_1_img">
                            <img className="caty_1" src={catys_17} alt="" />
                            <p className="caty_win_p">
                              Pipe (kitchen, bathroom, etc.) unclogging
                            </p>
                          </div>
                        </NavLink>
                        <NavLink to="service/water-leakage" className="mynavcard">
                          <div className="cart_1_img">
                            <img className="caty_1" src={catys_18} alt="" />
                            <p className="caty_win_p">
                              Water leakage and mold removal
                            </p>
                          </div>
                        </NavLink>
                        <NavLink to="service/water-overflow-repair" className="mynavcard">
                          <div className="cart_1_img">
                            <img className="caty_1" src={catys_19} alt="" />
                            <p className="caty_win_p">
                              Water tank overflow repair
                            </p>
                          </div>
                        </NavLink>
                        <NavLink to="service/pump-or-motor-repair" className="mynavcard">
                          <div className="cart_1_img">
                            <img className="caty_1" src={catys_20} alt="" />
                            <p className="caty_win_p">
                              Water pump or motor repair
                            </p>
                          </div>
                        </NavLink>
                      </div>

                      {/* <div className="cart_1_img">
                      <img className="caty_1" src={caty_3} alt="" />
                      <p className="caty_win_p">
                        AC digital thermostat installation
                      </p>
                    </div> */}
                      {/* <div className="cart_1_img">
                      <img className="caty_1" src={caty_3} alt="" />
                      <p className="caty_win_p">
                        AC digital thermostat installation
                      </p>
                    </div> */}
                    </div>

                    {/* <div className="caty_flexi">
                    <div className="cart_1_img">
                      <img className="caty_1" src={caty_3} alt="" />
                      <p className="caty_win_p">
                        AC digital thermostat installation
                      </p>
                    </div>
                    <div className="cart_1_img">
                      <img className="caty_1" src={caty_3} alt="" />
                      <p className="caty_win_p">
                        AC digital thermostat installation
                      </p>
                    </div>
                    <div className="cart_1_img">
                      <img className="caty_1" src={caty_3} alt="" />
                      <p className="caty_win_p">
                        AC digital thermostat installation
                      </p>
                    </div>
                  </div> */}
                    {/* <div className="caty_flexi">
                    <div className="cart_1_img">
                      <img className="caty_1" src={caty_3} alt="" />
                      <p className="caty_win_p">
                        AC digital thermostat installation
                      </p>
                    </div>
                    <div className="cart_1_img">
                      <img className="caty_1" src={caty_3} alt="" />
                      <p className="caty_win_p">
                        AC digital thermostat installation
                      </p>
                    </div>
                    <div className="cart_1_img">
                      <img className="caty_1" src={caty_3} alt="" />
                      <p className="caty_win_p">
                        AC digital thermostat installation
                      </p>
                    </div>
                  </div> */}

                    {/* <div className="caty_flexi">
                    <div className="cart_1_img">
                      <img className="caty_1" src={caty_3} alt="" />
                      <p className="caty_win_p">
                        AC digital thermostat installation
                      </p>
                    </div>
                    <div className="cart_1_img">
                      <img className="caty_1" src={caty_3} alt="" />
                      <p className="caty_win_p">
                        AC digital thermostat installation
                      </p>
                    </div>
                    <div className="cart_1_img">
                      <img className="caty_1" src={caty_3} alt="" />
                      <p className="caty_win_p">
                        AC digital thermostat installation
                      </p>
                    </div>
                  </div> */}
                  </Tab.Pane>

                  <Tab.Pane eventKey="deepcleaning">
                    <div className="primary mb-3">
                      <h1>Deepcleaning</h1>
                    </div>
                    <div className="caty_flexi">
                      <div className="flexi_phoos">
                        <NavLink to="service/Kitchen" className="mynavcard">
                          <div className="cart_1_img">
                            <img className="caty_1" src={cartys_21} alt="" />
                            <p className="caty_win_p">Kitchen</p>
                          </div>
                        </NavLink>
                        <NavLink to="service/Bathroom" className="mynavcard">
                          <div className="cart_1_img">
                            <img className="caty_1" src={cartys_22} alt="" />
                            <p className="caty_win_p">Bathroom</p>
                          </div>
                        </NavLink>
                        <NavLink to="service/Full Home" className="mynavcard">
                          <div className="cart_1_img">
                            <img className="caty_1" src={cartys_23} alt="" />
                            <p className="caty_win_p">
                              Full Home
                            </p>
                          </div>
                        </NavLink>
                        <NavLink to="service/Balcony" className="mynavcard">
                          <div className="cart_1_img">
                            <img className="caty_1" src={cartys_24} alt="" />
                            <p className="caty_win_p">Balcony</p>
                          </div>
                        </NavLink>
                        
                        <NavLink to="service/sofa-cleaning" className="mynavcard">
                          <div className="cart_1_img">
                            <img className="caty_1" src={cartys_34} alt="" />
                            <p className="caty_win_p">
                              Sofa
                            </p>
                          </div>
                        </NavLink>
                        {/* <NavLink to="service/carpet-cleaning">
                          <div className="cart_1_img">
                            <img className="caty_1" src={cartys_36} alt="" />
                            <p className="caty_win_p">Carpet cleaning</p>
                          </div>
                        </NavLink> */}
                        <NavLink to="service/Add Ones" className="mynavcard">
                          <div className="cart_1_img">
                            <img className="caty_1" src={cartys_35} alt="" />
                            <p className="caty_win_p">
                              Add Ones
                            </p>
                          </div>
                        </NavLink>
                       
                        {/* <NavLink to="service/drain-or-sewer-cleaning">
                          <div className="cart_1_img">
                            <img className="caty_1" src={cartys_38} alt="" />
                            <p className="caty_win_p">
                              Other specialised job - drain or sewer cleaning,
                              etc.
                            </p>
                          </div>
                        </NavLink> */}
                      </div>
                    </div>
                  </Tab.Pane>

                  <Tab.Pane eventKey="gardening">
                    <div className="primary mb-3">
                      <h1>Gardening</h1>
                    </div>
                    <div className="caty_flexi">
                      <div className="flexi_phoos">
                        <NavLink to="service/pruning-or-trimming" className="mynavcard">
                          <div className="cart_1_img">
                            <img className="caty_1" src={cartys_26} alt="" />
                            <p className="caty_win_p">
                              Garden pruning or trimming
                            </p>
                          </div>
                        </NavLink>
                        <NavLink to="service/sprinkler-or-drip-repair" className="mynavcard">
                          <div className="cart_1_img">
                            <img className="caty_1" src={cartys_27} alt="" />
                            <p className="caty_win_p">
                              Garden sprinkler or drip irrigation system repair
                            </p>
                          </div>
                        </NavLink>
                        <NavLink to="service/lawn-grass-carpeting" className="mynavcard">
                          <div className="cart_1_img">
                            <img className="caty_1" src={cartys_28} alt="" />
                            <p className="caty_win_p">
                              Natural lawn grass carpeting
                            </p>
                          </div>
                        </NavLink> 
                        <NavLink to="service/tree-or-stump-cutting" className="mynavcard">
                          <div className="cart_1_img">
                            <img className="caty_1" src={cartys_29} alt="" />
                            <p className="caty_win_p">
                              Tree or stump cutting and removal
                            </p>
                          </div>
                        </NavLink>
                        <NavLink to="service/fake-grass-installation" className="mynavcard">
                          <div className="cart_1_img">
                            <img className="caty_1" src={cartys_30} alt="" />
                            <p className="caty_win_p">
                              Artificial or fake grass installation
                            </p>
                          </div>
                        </NavLink>
                        <NavLink to="service/sail-shade-installation" className="mynavcard">
                          <div className="cart_1_img">
                            <img className="caty_1" src={cartys_31} alt="" />
                            <p className="caty_win_p">
                              Sail shade installation
                            </p>
                          </div>
                        </NavLink>
                        <NavLink to="service/tree-or-flower-painting" className="mynavcard">
                          <div className="cart_1_img">
                            <img className="caty_1" src={cartys_32} alt="" />
                            <p className="caty_win_p">
                              Garden tree or flower planting
                            </p>
                          </div>
                        </NavLink>
                        <NavLink to="service/garden-landscaping" className="mynavcard">
                          <div className="cart_1_img">
                            <img className="caty_1" src={cartys_33} alt="" />
                            <p className="caty_win_p">Garden landscaping</p>
                          </div>
                        </NavLink>
                      </div>
                    </div>
                  </Tab.Pane>

                  <Tab.Pane eventKey="glasswork">
                    <div className="primary mb-3">
                      <h1>Glasswork</h1>
                    </div>
                    <div className="caty_flexi">
                      <div className="flexi_phoos">
                        <NavLink to="service/door-glass-replacement" className="mynavcard">
                          <div className="cart_1_img">
                            <img className="caty_1" src={cartys_39} alt="" />
                            <p className="caty_win_p">Door glass replacement</p>
                          </div>
                        </NavLink>
                        <NavLink to="service/window-glass-replacement" className="mynavcard">
                          <div className="cart_1_img">
                            <img className="caty_1" src={cartys_40} alt="" />
                            <p className="caty_win_p">
                              Window glass replacement
                            </p>
                          </div>
                        </NavLink>
                        <NavLink to="service/tabletop-glass-cutting" className="mynavcard">
                          <div className="cart_1_img">
                            <img className="caty_1" src={cartys_41} alt="" />
                            <p className="caty_win_p">
                              Tabletop glass slab cutting
                            </p>
                          </div>
                        </NavLink>
                        <NavLink to="service/glass-partition-fabrication" className="mynavcard">
                          <div className="cart_1_img">
                            <img className="caty_1" src={cartys_42} alt="" />
                            <p className="caty_win_p">
                              Glass partition fabrication
                            </p>
                          </div>
                        </NavLink>
                        <NavLink to="service/bathroom-glass-fabrication" className="mynavcard">
                          <div className="cart_1_img">
                            <img className="caty_1" src={cartys_43} alt="" />
                            <p className="caty_win_p">
                              Bathroom glass shower enclosure fabrication
                            </p>
                          </div>
                        </NavLink>
                        <NavLink to="service/mirror-work" className="mynavcard">
                          <div className="cart_1_img">
                            <img className="caty_1" src={cartys_44} alt="" />
                            <p className="caty_win_p">Mirror work</p>
                          </div>
                        </NavLink>
                        <NavLink to="service/glass-staircase-fabrication" className="mynavcard">
                          <div className="cart_1_img">
                            <img className="caty_1" src={cartys_45} alt="" />
                            <p className="caty_win_p">
                              Glass staircase fabrication
                            </p>
                          </div>
                        </NavLink>
                        <NavLink to="service/glass-door-fabrication" className="mynavcard">
                          <div className="cart_1_img">
                            <img className="caty_1" src={cartys_46} alt="" />
                            <p className="caty_win_p">Glass door fabrication</p>
                          </div>
                        </NavLink>
                        <NavLink to="service/door-window-glass-tint" className="mynavcard">
                          <div className="cart_1_img">
                            <img className="caty_1" src={cartys_47} alt="" />
                            <p className="caty_win_p">
                              Door and window glass tint
                            </p>
                          </div>
                        </NavLink>
                        <NavLink to="service/custom-glass-job" className="mynavcard">
                          <div className="cart_1_img">
                            <img className="caty_1" src={cartys_48} alt="" />
                            <p className="caty_win_p">
                              Other custom job - decorative glass, etc.
                            </p>
                          </div>
                        </NavLink>
                      </div>
                    </div>
                  </Tab.Pane>

                  <Tab.Pane eventKey="handyman">
                    <div className="primary mb-3">
                      <h1>Handyman</h1>
                    </div>
                    <div className="caty_flexi">
                      <div className="flexi_phoos">
                        <NavLink to="service/curtains-fixing" className="mynavcard">
                          <div className="cart_1_img">
                            <img className="caty_1" src={cartys_49} alt="" />
                            <p className="caty_win_p">Curtains fixing</p>
                          </div>
                        </NavLink>
                        <NavLink to="service/flynet-screen-or-flynet-repair" className="mynavcard">
                          <div className="cart_1_img">
                            <img className="caty_1" src={cartys_50} alt="" />
                            <p className="caty_win_p">
                              Flyscreen or flynet mesh repair
                            </p>
                          </div>
                        </NavLink>
                        <NavLink to="service/chandelier-hanging" className="mynavcard">
                          <div className="cart_1_img">
                            <img className="caty_1" src={cartys_51} alt="" />
                            <p className="caty_win_p">Chandelier hanging</p>
                          </div>
                        </NavLink>
                        <NavLink to="service/decorative-lights-hanging" className="mynavcard">
                          <div className="cart_1_img">
                            <img className="caty_1" src={cartys_52} alt="" />
                            <p className="caty_win_p">
                              Decorative and festive lights hanging
                            </p>
                          </div>
                        </NavLink>
                        <NavLink to="service/modular-furniture-assembly" className="mynavcard">
                          <div className="cart_1_img">
                            <img className="caty_1" src={cartys_53} alt="" />
                            <p className="caty_win_p">
                              Modular furniture (e.g. IKEA) assembly
                            </p>
                          </div>
                        </NavLink>
                        <NavLink to="service/wall-fixtures-hanging" className="mynavcard"> 
                          <div className="cart_1_img">
                            <img className="caty_1" src={cartys_54} alt="" />
                            <p className="caty_win_p">
                              Wall fixtures (paintings, mirror, etc.) hanging
                            </p>
                          </div>
                        </NavLink>
                        <NavLink to="service/lcd-tv-mounting" className="mynavcard">
                          <div className="cart_1_img">
                            <img className="caty_1" src={cartys_55} alt="" />
                            <p className="caty_win_p">LCD TV mounting</p>
                          </div>
                        </NavLink>
                        <NavLink to="service/door-locks-repair" className="mynavcard">
                          <div className="cart_1_img">
                            <img className="caty_1" src={cartys_56} alt="" />
                            <p className="caty_win_p">
                              Door locks and knobs repair or locksmith
                            </p>
                          </div>
                        </NavLink>
                        <NavLink to="service/blinds-installation" className="mynavcard">
                          <div className="cart_1_img">
                            <img className="caty_1" src={cartys_57} alt="" />
                            <p className="caty_win_p">Blinds installation</p>
                          </div>
                        </NavLink>
                        <NavLink to="service/other-handyman-jobs" className="mynavcard">
                          <div className="cart_1_img">
                            <img className="caty_1" src={cartys_58} alt="" />
                            <p className="caty_win_p">
                              Other custom job - minor drilling, etc.
                            </p>
                          </div>
                        </NavLink>
                      </div>
                    </div>
                  </Tab.Pane>

                  <Tab.Pane eventKey="appliances">
                    <div className="primary mb-3">
                      <h1>Appliances</h1>
                    </div>
                    <div className="caty_flexi">
                      <div className="flexi_phoos">
                        <NavLink to="service/dishwasher-repair" className="mynavcard">
                          <div className="cart_1_img">
                            <img className="caty_1" src={cartys_59} alt="" />
                            <p className="caty_win_p">Dishwasher repair</p>
                          </div>
                        </NavLink>
                        <NavLink to="service/deep-freezer-repair" className="mynavcard">
                          <div className="cart_1_img">
                            <img className="caty_1" src={cartys_60} alt="" />
                            <p className="caty_win_p">Deep freezer repair</p>
                          </div>
                        </NavLink>
                        <NavLink to="service/exhaust-fan-repair" className="mynavcard">
                          <div className="cart_1_img">
                            <img className="caty_1" src={cartys_61} alt="" />
                            <p className="caty_win_p">Exhaust fan repair</p>
                          </div>
                        </NavLink>
                        <NavLink to="service/cooking-range-repair" className="mynavcard">
                          <div className="cart_1_img">
                            <img className="caty_1" src={cartys_62} alt="" />
                            <p className="caty_win_p">
                              Cooking range or oven repair
                            </p>
                          </div>
                        </NavLink>
                        <NavLink to="service/extractor-hood-repair" className="mynavcard">
                          <div className="cart_1_img">
                            <img className="caty_1" src={cartys_63} alt="" />
                            <p className="caty_win_p">
                              Extractor hood or chimney repair
                            </p>
                          </div>
                        </NavLink>
                        <NavLink to="service/washing-machine-or-dryer-repair" className="mynavcard">
                          <div className="cart_1_img">
                            <img className="caty_1" src={cartys_64} alt="" />
                            <p className="caty_win_p">
                              Washing machine or dryer repair
                            </p>
                          </div>
                        </NavLink>
                        <NavLink to="service/water-purifier-repair" className="mynavcard">
                          <div className="cart_1_img">
                            <img className="caty_1" src={cartys_65} alt="" />
                            <p className="caty_win_p">
                              RO or water purifier repair
                            </p>
                          </div>
                        </NavLink>
                        <NavLink to="service/fridge-repair" className="mynavcard">
                          <div className="cart_1_img">
                            <img className="caty_1" src={cartys_66} alt="" />
                            <p className="caty_win_p">
                              Refrigerator or fridge repair
                            </p>
                          </div>
                        </NavLink>
                        <NavLink to="service/water-dispenser-repair" className="mynavcard">
                          <div className="cart_1_img">
                            <img className="caty_1" src={cartys_67} alt="" />
                            <p className="caty_win_p">Water dispenser repair</p>
                          </div>
                        </NavLink>
                        <NavLink to="service/microwave-repair" className="mynavcard">
                          <div className="cart_1_img">
                            <img className="caty_1" src={cartys_68} alt="" />
                            <p className="caty_win_p">Microwave repair</p>
                          </div>
                        </NavLink>
                        <NavLink to="service/appliance-installation" className="mynavcard">
                          <div className="cart_1_img">
                            <img className="caty_1" src={cartys_69} alt="" />
                            <p className="caty_win_p">Appliance installation</p>
                          </div>
                        </NavLink>
                        <NavLink to="service/custom-appliance-job" className="mynavcard">
                          <div className="cart_1_img">
                            <img className="caty_1" src={cartys_70} alt="" />
                            <p className="caty_win_p">
                              Other custom job - appliance cleaning, etc.
                            </p>
                          </div>
                        </NavLink>
                      </div>
                    </div>
                  </Tab.Pane>

                  <Tab.Pane eventKey="specialized">
                    <div className="primary mb-3">
                      <h1>Specialized</h1>
                    </div>
                    <div className="caty_flexi">
                      <div className="flexi_phoos">
                        <NavLink to="service/covid-sanitization" className="mynavcard">
                          <div className="cart_1_img">
                            <img className="caty_1" src={cartys_71} alt="" />
                            <p className="caty_win_p">
                              CovX long life sanitisation
                            </p>
                          </div>
                        </NavLink>
                        <NavLink to="service/wrap-innovative-renovations" className="mynavcard">
                          <div className="cart_1_img">
                            <img className="caty_1" src={cartys_72} alt="" />
                            <p className="caty_win_p">
                              Creative Wrap innovative renovations
                            </p>
                          </div>
                        </NavLink>
                        <NavLink to="service/grout-cleaning" className="mynavcard">
                          <div className="cart_1_img">
                            <img className="caty_1" src={cartys_73} alt="" />
                            <p className="caty_win_p">
                              Grout cleaning with Coustic Glo
                            </p>
                          </div>
                        </NavLink>
                        <NavLink to="service/leather-restoration" className="mynavcard">
                          <div className="cart_1_img">
                            <img className="caty_1" src={cartys_74} alt="" />
                            <p className="caty_win_p">
                              Leather doctor - Leather restoration
                            </p>
                          </div>
                        </NavLink>
                      </div>
                    </div>
                  </Tab.Pane>

                  {/* <div className="caty_flexi">
                    <div className="cart_1_img">
                      <img className="caty_1" src={caty_2} alt="" />
                      <p className="caty_win_p">AC thermostat repair</p>
                    </div>
                    <div className="cart_1_img">
                      <img className="caty_1" src={caty_2} alt="" />
                      <p className="caty_win_p">AC thermostat repair</p>
                    </div>
                    <div className="cart_1_img">
                      <img className="caty_1" src={caty_2} alt="" />
                      <p className="caty_win_p">AC thermostat repair</p>
                    </div>
                  </div>
                  <div className="caty_flexi">
                    <div className="cart_1_img">
                      <img className="caty_1" src={caty_2} alt="" />
                      <p className="caty_win_p">AC thermostat repair</p>
                    </div>
                    <div className="cart_1_img">
                      <img className="caty_1" src={caty_2} alt="" />
                      <p className="caty_win_p">AC thermostat repair</p>
                    </div>
                    <div className="cart_1_img">
                      <img className="caty_1" src={caty_2} alt="" />
                      <p className="caty_win_p">AC thermostat repair</p>
                    </div>
                  </div> */}

                  {/* <div className="caty_flexi">
                    <div className="cart_1_img">
                      <img className="caty_1" src={caty_2} alt="" />
                      <p className="caty_win_p">AC thermostat repair</p>
                    </div>
                    <div className="cart_1_img">
                      <img className="caty_1" src={caty_2} alt="" />
                      <p className="caty_win_p">AC thermostat repair</p>
                    </div>
                    <div className="cart_1_img">
                      <img className="caty_1" src={caty_2} alt="" />
                      <p className="caty_win_p">AC thermostat repair</p>
                    </div>
                  </div> */}

                  {/* <div className="caty_flexi">
                    <div className="cart_1_img">
                      <img className="caty_1" src={caty_1} alt="" />
                      <p className="caty_win_p">AC cooling cleaning</p>
                    </div>
                    <div className="cart_1_img">
                      <img className="caty_1" src={caty_1} alt="" />
                      <p className="caty_win_p">AC cooling cleaning</p>
                    </div>
                    <div className="cart_1_img">
                      <img className="caty_1" src={caty_1} alt="" />
                      <p className="caty_win_p">AC cooling cleaning</p>
                    </div>
                  </div> */}

                  {/* <div className="caty_flexi">
                    <div className="cart_1_img">
                      <img className="caty_1" src={caty_1} alt="" />
                      <p className="caty_win_p">AC cooling cleaning</p>
                    </div>
                    <div className="cart_1_img">
                      <img className="caty_1" src={caty_1} alt="" />
                      <p className="caty_win_p">AC cooling cleaning</p>
                    </div>
                    <div className="cart_1_img">
                      <img className="caty_1" src={caty_1} alt="" />
                      <p className="caty_win_p">AC cooling cleaning</p>
                    </div>
                  </div> */}
                  {/* <div className="caty_flexi">
                    <div className="cart_1_img">
                      <img className="caty_1" src={caty_1} alt="" />
                      <p className="caty_win_p">AC cooling cleaning</p>
                    </div>
                    <div className="cart_1_img">
                      <img className="caty_1" src={caty_1} alt="" />
                      <p className="caty_win_p">AC cooling cleaning</p>
                    </div>
                    <div className="cart_1_img">
                      <img className="caty_1" src={caty_1} alt="" />
                      <p className="caty_win_p">AC cooling cleaning</p>
                    </div>
                  </div> */}
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Catigaries;

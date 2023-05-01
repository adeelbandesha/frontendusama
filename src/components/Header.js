import React from "react";
// import '../assets/stylefiles/headers.css'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BiSearchAlt2 } from "react-icons/bi";
import whatsaap from "../assets/images/webi2.png";
import { BiUserCircle } from "react-icons/bi";
import main_what from "../assets/images/whatsaap.png";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { modalsError } from "../helpers/modalsErrors";
import "react-datalist-input/dist/styles.css";
import DatalistInput from "react-datalist-input";
import { CategoriesDetails } from "../js/CategoriesDetails";
import  webLogo  from "../assets/images/webLogo.png";


function Header() {
  const [logoutBtn, setLogoutBtn] = useState(false);

  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const logout = async () => {
    setLogoutBtn(true);
    await axios({
      method: "get",
      url: "https://profixing-back-production.up.railway.app/user/logout",
      data: {token},
    })
      .then((res) => {
        if (res.status == 200) {
          navigate("/login");
          toast.success("Loggedout Successfully");
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          setLogoutBtn(false);
        }
      })
      .catch((err) => {
        console.log("err>>", err);
        setLogoutBtn(false);
        modalsError(err);
      });
  };
  return (
    <>
      <Navbar expand="lg" className="bg-custom px-3">
        <Container fluid>
          <Navbar.Brand href="/">

            <img className="win_logo" src={ webLogo } />

          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link href="/" className="links-hover font-bold">
                Home
              </Nav.Link>
              <NavDropdown
                title="Services"
                id="basic-nav-dropdown"
                className="win_servics links-hover font-bold"
              >
                <div className="container">
                  <div className="row">
                    <div className="col-12 col-md-6 col-lg-4">
                      <NavDropdown.Item href="/noservice">
                        Renovation Services
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/noservice">
                        House Keeping Services
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/noservice">
                        Annual Maintainance
                      </NavDropdown.Item>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                      <NavDropdown.Item href="/noservice">
                        Pest Control Services
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/noservice">
                        Moving Services
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/noservice">
                        Customize Curtain
                      </NavDropdown.Item>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                      <NavDropdown.Item href="/noservice">
                        Wall Paper Fixing
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/noservice">
                        Wood Flooring
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/noservice">
                        Wraping Services
                      </NavDropdown.Item>
                    </div>
                  </div>
                </div>
              </NavDropdown>
              <Nav.Link href="/offers" className="links-hover font-bold">
                Offers
              </Nav.Link>
              <Nav.Link href="/about" className="links-hover font-bold">
                About
              </Nav.Link>
              <Nav.Link href="/contact" className="links-hover font-bold">
                Contact
              </Nav.Link>
            </Nav>
            <div className="search-bar">
              <DatalistInput
                placeholder="Services in Dubai"
                // label="Select ice cream flavor"
                onSelect={(CategoriesDetails) =>
                  navigate(CategoriesDetails.link)
                }
                items={CategoriesDetails}
              />
              <span className="fa-magnifying-glass">
                <BiSearchAlt2 />
              </span>
            </div>
                  <div>
                    <a href="tel:971506367091" className="links-hover">
                      <img src={whatsaap} width="45px" height="35px" />
                      <span className="num-font">+971506367091</span>
                      <span className="num-font">(8AM - 8PM,everyday)</span>
                    </a>
                    <a
                      href="https://api.whatsapp.com/send?phone=971506367091"
                      className="links-hover"
                    >
                      <img src={main_what} width="45px" height="35px" />
                    </a>
                    {token ? (
                      <button
                        type="button"
                        className="btn login-font links-hover p-0"
                        disabled={logoutBtn}
                        onClick={logout}
                      >
                        {logoutBtn? 'Logging out': 'Logout'}
                      </button>
                    ) : (
                      <>
                        <a
                          href="/login"
                          className="login-font mx-1 links-hover"
                        >
                          <BiUserCircle /> Login
                        </a>
                        <a
                          href="/signup"
                          className="login-font mx-1 links-hover"
                        >
                          SignUp
                        </a>
                      </>
                    )}
                </div>
          </Navbar.Collapse>

          {/* <div className="search-bar part_2">
            <DatalistInput
              placeholder="Services in Dubai"
              // label="Select ice cream flavor"
              onSelect={(CategoriesDetails) => navigate(CategoriesDetails.link)}
              items={CategoriesDetails}
            />
            <span className="fa-magnifying-glass">
              <BiSearchAlt2 />
            </span>
          </div> */}
        </Container>
      </Navbar>
    </>
  );
}

export default Header;

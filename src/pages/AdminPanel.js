import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { MdOutlineLocalOffer } from "react-icons/md";
import { BsChatDots } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiBars3 } from "react-icons/hi2";
import { AiOutlineUser } from "react-icons/ai";
import customerService from "../assets/images/customerService.png";
import { toast } from "react-toastify";
import OrdersTable from "../components/OrdersTable";
import OffersTab from "../components/OffersTab";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function AdminDashboard() {
  
    let token = localStorage.getItem("adminToken");
    if (!token) {
      toast.error("You must be loggedin");
      return <Navigate to={'/admin/login'} />
    } else {
      return (
        <>
          <Tab.Container id="left-tabs-example" defaultActiveKey="Order">
            <Row>
              <Col className="dash_back" sm={12} md={4}>
                <Nav variant="pills" className="flex-column custom_nav">
                  <Nav.Item className="costo_nav_item">
                    <div className="flexi_dash_logo">
                      <img className="win_logo" src={customerService} />{" "}
                      <h4>Profixingdubai</h4>
                    </div>
                  </Nav.Item>
                  <Nav.Link eventKey="Order">
                    {" "}
                    <div className="flexi_tab_content">
                      Order{" "}
                      <span>
                        <AiOutlineShoppingCart />
                      </span>
                    </div>
                  </Nav.Link>
                  <Nav.Link eventKey="Offers">
                    {" "}
                    <div className="flexi_tab_content">
                      Offers{" "}
                      <span>
                        <MdOutlineLocalOffer />
                      </span>
                    </div>
                  </Nav.Link>
                </Nav>
              </Col>
              <Col sm={12} md={8}>
                <Tab.Content>
                  <Tab.Pane eventKey="Order">
                    <OrdersTable />
                  </Tab.Pane>
                  <Tab.Pane eventKey="Offers">
                    <OffersTab />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </>
      );
    }
}

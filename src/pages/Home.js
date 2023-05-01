import React from "react";
// import "./Home.css";
import ReactPlayer from "react-player";
// import '../components/Header'
// import '../components/footer'

import Header from "../components/Header";
import Footer from "../components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import trend_img from "../assets/images/trending.png";
import trend_card_1 from "../assets/images/cream.jpg";
import trend_card_2 from "../assets/images/box.jpg";
import trend_card_3 from "../assets/images/bulb.jpg";
import trend_card_4 from "../assets/images/cleaner.jpg";
import trend_card_5 from "../assets/images/clearne.jpg";

import trend_card_6 from "../assets/images/trend_card_6.png";
import trend_card_7 from "../assets/images/trend_card_7.jpg";
import trend_card_8 from "../assets/images/trend_card_8.jpg";
import trend_card_9 from "../assets/images/trend_card_9.jpg";
import trend_card_10 from "../assets/images/trend_card_10.jpg";
import trend_card_11 from "../assets/images/tthis.jpg";
import trend_card_12 from "../assets/images/plasa.jpg";
import trend_card_17 from "../assets/images/paint.jpg";
import trend_card_18 from "../assets/images/caty_4.png";
import trend_card_19 from "../assets/images/pals.jpg";
import trend_card_20 from "../assets/images/pen.jpg";

import trend_card_21 from "../assets/images/pen.jpg";
import trend_card_22 from "../assets/images/kher.jpg";
import trend_card_23 from "../assets/images/kher2.jpg";
import trend_card_24 from "../assets/images/bye.jpg";
import trend_card_25 from "../assets/images/camera.jpg";
import trend_card_26 from "../assets/images/pest.jpg";

import trend_card_27 from "../assets/images/douter.jpg";
import trend_card_28 from "../assets/images/girl.jpg";
import trend_card_29 from "../assets/images/car.jpg";
import trend_card_30 from "../assets/images/gog.jpg";
import trend_card_31 from "../assets/images/three.jpg";
import trend_card_32 from "../assets/images/two.jpg";

// import trend_card_33 from '../assets/images/pals.jpg'
// import trend_card_34 from '../assets/images/check.jpg'
// import trend_card_35 from '../assets/images/doc.jpg'
// import trend_card_36 from '../assets/images/kicheb.jpg'

import trend_card_33 from "../assets/images/home.jpg";
import trend_card_34 from "../assets/images/favorites.jpg";
import trend_card_35 from "../assets/images/support.jpg";

import trend_card_36 from "../assets/images/card_1.png";
import trend_card_37 from "../assets/images/card_2.png";
import trend_card_38 from "../assets/images/card_3.png";

import trend_card_39 from "../assets/images/COMPANIESLOGOFORWEBSITE.jpg";
import trend_card_40 from "../assets/images/COMPANIESLOGOFORWEBSITE_1.jpg";
import trend_card_41 from "../assets/images/COMPANIESLOGOFORWEBSITE_2.jpg";
import trend_card_42 from "../assets/images/COMPANIESLOGOFORWEBSITE_3.jpg";
import trend_card_43 from "../assets/images/COMPANIESLOGOFORWEBSITE_4.jpg";
import trend_card_44 from "../assets/images/LOGOFORWEBSITE_555.jpg";
import trend_card_45 from "../assets/images/COMPANIESLOGOFORWEBSITE_6.jpg";
import trend_card_46 from "../assets/images/COMPANIESLOGOFORWEBSITE_7.jpg";
import trend_card_47 from "../assets/images/COMPANIESLOGOFORWEBSITE_88.png";
import trend_card_48 from "../assets/images/COMPANIESLOGOFORWEBSITE_9.jpg";
import trend_card_49 from "../assets/images/COMPANIESLOGOFORWEBSITE_10.jpg";
import trend_card_50 from "../assets/images/COMPANIESLOGOFORWEBSITE_11.jpg";
import playstore from "../assets/images/platstore.png";
import appstore from "../assets/images/appstore.png";
import phone from "../assets/images/phone-screenshot.png";
import main_what from "../assets/images/whatsaap.png";
import { Link } from "react-router-dom";
import Packages from "../components/Packages";

function Home() {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    ],
  };

  var Explore = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    ],
  };

  return (
    <>
      <Header />
     
        {/*  */}
      
      
      <div className="container">
        <div className="row">
          <h2 className="text-center primary my-5">Explore Our Services</h2>
          <div className="col-lg-4 col-md-6 col-sm-12 p-3 card-group">
            <div className="card">
              <Link to="/category/ac">
                <div className="card-img ac"></div>
                <div className="px-3 py-2 dotted-border primary">
                  <h5>AC Work</h5>
                </div>
                <div className="py-2 px-3 orange">
                  Explore
                </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 p-3 card-group">
            <div className="card">
              <Link to="/category/painting">
                <div className="card-img painting"></div>
                <div className="px-3 py-2 dotted-border">
                  <h5 className="primary">Painting</h5>
                </div>
                <div className="py-2 px-3 orange">
                  Explore
                </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 p-3 card-group">
            <div className="card">
              <Link to="/category/deepcleaning">
                <div className="card-img deep-cleaning"></div>
                <div className="px-3 py-2 dotted-border">
                  <h5 className="primary">Deep Cleaning</h5>
                </div>
                <div className="py-2 px-3 orange">
                  Explore
                </div>
              </Link>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-6 col-sm-12 p-3 card-group">
            <div className="card">
              <Link to="/category/electrical">
                <div className="card-img electrical"></div>
                <div className="px-3 py-2 dotted-border">
                  <h5 className="primary">Electrical</h5>
                </div>
                <div className="py-2 px-3 orange">
                  Explore
                </div>
              </Link>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-6 col-sm-12 p-3 card-group">
            <div className="card">
              <Link to="/category/plumbing">
                <div className="card-img plumbing"></div>
                <div className="px-3 py-2 dotted-border">
                  <h5 className="primary">Plumbing</h5>
                </div>
                <div className="py-2 px-3 orange">
                  Explore
                </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 p-3 card-group">
            <div className="card">
              <Link to="/category/custom/service/custom">
                <div className="card-img wood-work"></div>
                <div className="px-3 py-2 dotted-border">
                  <h5 className="primary">Wood Work</h5>
                </div>
                <div className="py-2 px-3 orange">
                  Explore
                </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 p-3 card-group">
            <div className="card">
              <Link to="/category/handyman">
                <div className="card-img handyman"></div>
                <div className="px-3 py-2 dotted-border">
                  <h5 className="primary">Handyman Services</h5>
                </div>
                <div className="py-2 px-3 orange">
                  Explore
                </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 p-3 card-group">
            <div className="card">
              <Link to="/category/custom/service/custom">
                <div className="card-img maids"></div>
                <div className="px-3 py-2 dotted-border">
                  <h5 className="primary">Part Time Maids</h5>
                </div>
                <div className="py-2 px-3 orange">
                  Explore
                </div>
              </Link>
            </div>
          </div>
        
          <div className="col-lg-4 col-md-6 col-sm-12 p-3 card-group">
            <div className="card">
              <Link to="/category/custom/service/custom">
                <div className="card-img grinding"></div>
                <div className="px-3 py-2 dotted-border ">
                  <h5 className="primary">Marble Polishing / Grinding</h5>
                </div>
                <div className="py-2 px-3 orange">
                  Explore
                </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 p-3 card-group">
            <div className="card">
              <Link to="/category/glasswork">
                <div className="card-img glass-work"></div>
                <div className="px-3 py-2 dotted-border">
                  <h5 className="primary">Glass Work</h5>
                </div>
                <div className="py-2 px-3 orange">
                  Explore
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Packages />
      <div className="win_speacil_back p-5">
        <div className="container special_heading">
          <div className="row">
            <div className="col-12">
              <p className="head_spe primary">Why Profixingdubai?</p>
              <p>
                We are the largest home services marketplace in the Middle East.
                Thousands of people trust us with their homes every month.
              </p>
            </div>
          </div>
        </div>
        <div className="container ml-0  ">
          <div className="win_card_bord">
            <div className="row">
              <div className="col-lg-4">
                <div className="win_ser_content">
                  <div className="home_img">
                    <img src={trend_card_33} alt="" />
                  </div>
                  <div className="ser_content">
                    <p className="ser_content_head">
                      Everything your home needs
                    </p>
                    <p className="ser_content_win">
                      We have made it our business to make it easy for you to
                      get any help you might need for your home in one place
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="win_ser_content">
                  <div className="home_img">
                    <img src={trend_card_34} alt="" />
                  </div>
                  <div className="ser_content">
                    <p className="ser_content_head">
                      The best professionals for your job
                    </p>
                    <p className="ser_content_win">
                      We measure and manage our service partners on their
                      service quality to make sure our service is great
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="win_ser_content">
                  <div className="home_img">
                    <img src={trend_card_35} alt="" />
                  </div>
                  <div className="ser_content">
                    <p className="ser_content_head">Great customer service</p>
                    <p className="ser_content_win">
                      We take customer service seriously. Our contact center is
                      open 7 days per week to help you out with anything you
                      need
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  */}

      <div className="container mt-5">
        <div className="win_works">
          <p className="work_head">How it work</p>
          <p className="work_win">
            {" "}
            We have partnered with Dubai's best companies to get you the service
            you deserve
          </p>
        </div>

        <div className="row mt-5">
          <div className="col-lg-4">
            <div className="win_work_card">
              <div className="work_img">
                <img src={trend_card_36} alt="" />
              </div>
              <div className="card_cont_about">
                <p className="work_card_head primary">Tell us what you need</p>
                <p className="card_content_winner">
                  Let us know what service you are looking for. We offer more
                  than 25 different home services, and we are here to help!
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="win_work_card">
              <div className="work_img">
                <img src={trend_card_37} alt="" />
              </div>
              <div className="card_cont_about">
                <p className="work_card_head primary">
                  We will find the right professional
                </p>
                <p className="card_content_winner">
                  Book your service directly with us online, or request quotes
                  from our service partners. All our partners are licensed,
                  vetted and reviewed by our users
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="win_work_card">
              <div className="work_img">
                <img src={trend_card_38} alt="" />
              </div>
              <div className="card_cont_about">
                <p className="work_card_head primary">Sit back and relax</p>
                <p className="card_content_winner">
                  Let our professionals do the work while you focus on doing
                  what you love. Our contact center is open 7 days a week to
                  help you along the way
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-custom">
        <div className="container my-5 p-3">
          <div className="row">
            <div className="col-12 win_works">
              <p className="work_head text-center">
                Look what customers say about us
              </p>
            </div>
            <div className="col-12 my-3 d-flex justify-content-center">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=S4XvL7EV9hE"
                controls={true}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="win_works">
          <p className="work_head">As featured in</p>
          <div className="row">
            <div className="col-lg-2">
              <div className="logos_img">
                <img src={trend_card_39} alt="" />
              </div>
            </div>
            <div className="col-lg-2">
              <div className="logos_img">
                <img src={trend_card_40} alt="" />
              </div>
            </div>
            <div className="col-lg-2">
              <div className="logos_img">
                <img src={trend_card_41} alt="" />
              </div>
            </div>
            <div className="col-lg-2">
              <div className="logos_img">
                <img src={trend_card_42} alt="" />
              </div>
            </div>
            <div className="col-lg-2">
              <div className="logos_img">
                <img src={trend_card_43} alt="" />
              </div>
            </div>
            <div className="col-lg-2">
              <div className="logos_img">
                <img src={trend_card_44} alt="" />
              </div>
            </div>
            <div className="col-lg-2">
              <div className="logos_img">
                <img src={trend_card_45} alt="" />
              </div>
            </div>
            <div className="col-lg-2">
              <div className="logos_img">
                <img src={trend_card_46} alt="" />
              </div>
            </div>
            <div className="col-lg-2">
              <div className="logos_img">
                <img src={trend_card_47} alt="" />
              </div>
            </div>
            <div className="col-lg-2">
              <div className="logos_img">
                <img src={trend_card_48} alt="" />
              </div>
            </div>
            <div className="col-lg-2">
              <div className="logos_img">
                <img src={trend_card_49} alt="" />
              </div>
            </div>
            <div className="col-lg-2">
              <div className="logos_img">
                <img src={trend_card_50} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 my-5 win_works">
            <p className="work_head text-center">
              Get your all in one <br /> service app now
            </p>
          </div>
          <div className="col-md-6 col-sm-12 text-center d-flex flex-column justify-content-center">
            <h4>Click here to download app</h4>
            <div>
              <img src={playstore} alt="android app link" className="my-2" />
            </div>
            <div>
              <img src={appstore} alt="appstore link" className="my-2" />
            </div>
          </div>
          <div className="col-md-6 col-sm-12 text-center">
            <img src={phone} alt="phone screenshot" width="70%" height="100%" />
          </div>
        </div>
      </div>
      <a href="https://api.whatsapp.com/send?phone=971506367091" className="links-hover whatsapp-btn">
              <img src={main_what} width="80px" height="60px" />
            </a>

      <Footer />
    </>
  );
}

export default Home;

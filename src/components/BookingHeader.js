import React from "react";
import Slider from "react-slick";
import { categaries } from "../js/CategariesNames";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import cross from "../assets/images/cross.png";


function BookingHeader({ category, subcategory }) {
  const subcategories = categaries[category]?.subcategories;

  const navigate = useNavigate()

  let sub = subcategory.split("-").join(" ");

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
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
  return (
    <div className="bg-custom">
      <div className="container">
        <div className="row">
          <div className="col-12 text-end">
            <img
              src={cross}
              alt="cross-icon"
              width="15px"
              height="15px"
              className="pointer"
              onClick={()=> navigate("/")}
            />
          </div>
          <div className="col-sm-12 col-md-4">
            <div className="p-3">
              <h3 className="text-capitalize cat-border-bottom">{category}</h3>
            </div>
          </div>
          <div className="col-sm-10 col-md-7">
            <Slider {...settings}>
              {subcategories?.map((el, i) => {
                return (
                  <div className={`border cat-names p-3 mt-2 `} key={i}>
                    <NavLink
                      className="booking-head"
                      to={`/category/${category.toLowerCase()}/service/${
                        el.link
                      }`}
                    >
                      {el.text}
                    </NavLink>
                  </div>
                );
              })}
            </Slider>
          </div>
          <div className="col-2 col-md-1"></div>
        </div>
      </div>
    </div>
  );
}

export default BookingHeader;

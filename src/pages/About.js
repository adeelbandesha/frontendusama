import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaHome } from "react-icons/fa";
import about from "../assets/images/about.jpeg";
import customerService from "../assets/images/customerService.png";

export default function About() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="win_flexi_nav">
          <FaHome />
          <a href="/" className="links-hover">Home</a>
          <a>/ About</a>
        </div>
      </div>
      <div className="container  p-4 bg-custom rounded my-2">
        <div className="about_cotent">
          <h1 className="primary">About us</h1>
          <p className="para_1">
            It is only surprising to realize that the local home services
            industry which has been existing from time immemorial still suffers
            from big process gaps, low technology adoption rates and poor
            service innovation levels. With the way, the world is changing and
            demanding more for less, a radical change in the end-to-end service
            experience across our daily service needs e.g. transportation,
            grocery delivery, banking etc. has already arrived. It is only
            obvious that the opportunity to set “new ways of working” in the
            home services industry is needed. We believe that the home services
            experience should be made simple, reliable and affordable right from
            booking a professional to paying electronically without the customer
            facing any availability issues.
            <p className="para_1">
              At Profixingdubai, we have brought together a highly experienced team
              of services, commercial, marketing (both digital and traditional)
              and technology professionals. with extensive local and global
              experience. All with a single objective of positively disrupting
              the home services industry. We are working hard to build your
              trusted one-stop home maintenance services partner within your
              city so you don’t have to look anywhere else. By continuously
              challenging the status quo and seeking new ways to push
              boundaries, we want to do our bit to take some hassle away from
              your daily life.
            </p>
            <p className="para_1">
              Book a Profixingdubai home service now and give us an opportunity to
              delight you!
            </p>
          </p>
        </div>
        <div className="about_img">
          <img src={customerService} alt="about_icon" />
        </div>
        <div className="any_time_head">
          <h1 className="primary">Anytime. Anywhere. However, you need it !</h1>
        </div>
        <div className="row my-4   ">
          <div className="col-lg-4 ">
            <div className="about_card">
              <h4 className="primary">Relentless customer service</h4>
              <img src={about} alt="" />
              <p>
                Make each customer feel important. Ensure service excellence and
                go that extra mile to delight them. Do what you say and say what
                you do. This is our mantra to win trust!
              </p>
            </div>
          </div>
          <div className="col-lg-4 ">
            <div className="about_card">
              <h4 className="primary">Trusted long-term partnerships</h4>
              <img src={about} alt="" />
              <p>
                Carefully select our delivery partners. Have fewer and make it
                count for them every single day. Don’t lose focus on the
                long-term and bigger possibilities of working as one team.
              </p>
            </div>
          </div>
          <div className="col-lg-4 ">
            <div className="about_card">
              <h4 className="primary">Value-based strategic alliances</h4>
              <img src={about} alt="" />
              <p>
                Build channel alliances to reach new customers. Ensure delivery
                of both tangible and in-tangible value while enabling growth
                within their business. Engage continuously.
              </p>
            </div>
          </div>
        </div>

        <div className="row my-4    ">
          <div className="col-lg-4 ">
            <div className="about_card">
              <h4 className="primary">Open and transparent approach</h4>
              <img src={about} alt="" />
              <p>
                Share information that is clear, precise and complete. Less is
                more. Remain transparent - a bad news is not a bad news anymore
                if it comes with real solutions. Be ready to listen!
              </p>
            </div>
          </div>
          <div className="col-lg-4 ">
            <div className="about_card">
              <h4 className="primary">Continuous innovation culture</h4>
              <img src={about} alt="" />
              <p>
                Continue to challenge the status quo and push the boundaries to
                keep making home maintenance service experience simple, reliable
                and affordable for our customers.
              </p>
            </div>
          </div>
          <div className="col-lg-4 ">
            <div className="about_card">
              <h4 className="primary">Responsibility towards society</h4>
              <img src={about} alt="" />
              <p>
                Maintain highest level of safety and security standards. Always
                care for our environment and give back to our communities - both
                within and outside Profixingdubai
                
                .
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

import React, { useEffect } from "react";
import NFT from "../../images/nft.png";
import backgroundImage from "../../images/bg-shape-1.jpg";
import { Link } from "react-router-dom";
import Animate from "../UI/Animate";

import AOS from 'aos';
import 'aos/dist/aos.css';

const Landing = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);


  return (
    <section
      id="section-hero"
      aria-label="section"
      className="no-top no-bottom vh-100"
      data-bgimage="url(images/bg-shape-1.jpg) bottom"
      style={{ background: `url(${backgroundImage}) bottom / cover` }}
    >
      <div className="v-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="spacer-single"></div>
              <Animate options={{ animation: 'fade-in' }}>
                <h6>
                  <span className="text-uppercase id-color-2">
                    Ultraverse Market
                  </span>
                </h6>
              </Animate>
              <div className="spacer-10"></div>
              <Animate options={{ animation: 'fade-up', delay: 100 }} >
                <h1 >Create, sell or collect digital items.</h1>
              </Animate>
              <Animate options={{ animation: 'fade-up', delay: 200 }} >
                <p className="lead">
                  Unit of data stored on a digital ledger, called a blockchain,
                  that certifies a digital asset to be unique and therefore not
                  interchangeable
                </p>
              </Animate>
              <div className="spacer-10"></div>
              <Animate options={{ animation: 'fade-in', delay: 700, duration: 1500 }}>
                <Link className="btn-main lead" to="/explore">
                  Explore
                </Link>
              </Animate>
              <div className="mb-sm-30"></div>
            </div>
            <div className="col-md-6 xs-hide">
              <Animate options={{ animation: 'fade-in', delay: 800, duration: 1500 }}>
                <img src={NFT} className="lazy img-fluid" alt="" />
              </Animate>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
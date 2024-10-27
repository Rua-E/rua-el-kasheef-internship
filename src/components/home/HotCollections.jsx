import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

// import Skeleton from "../UI/Skeleton";

const HotCollections = () => {

// MAPPING THE AUTHORS
const [authors, setAuthors] = useState([]);


async function fetchCollection() {

  try {
    const { data } = await axios.get(`https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections`);
    setAuthors(data);
  } catch (error) {
    console.error("Error fetching, author", error);
  }
}

useEffect(() => { 
  fetchCollection();
}, []);


// OWL-CAROUSEL options (used owl-carousel because it was simple and easy to use and has all the options needed)
const options = {
  responsiveClass:true,
  responsive: {
    480: {
      items: 1,
    },
    600: {
      items: 1,
    },
    800: {
      items: 2,
    },
    1000: {
      items: 3,
    },
    1200: {
      items: 4,
    },
  },
  loop: true,
  nav: true
}

  return (
    <section id="section-collections" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Hot Collections</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
            <OwlCarousel 
              className='owl-carousel'
              margin={10}
              {...options}
              >
              {authors?.length > 0 && 
                authors
                .slice(0,6)
                .map((author, index) => (
                <div className="item active" key={index}>
                  <div className="nft_coll">
                    <div className="nft_wrap">
                      <Link to={`/${author.title}`}>
                        <div className="skeleton-box">
                          <img src={author.nftImage} className="lazy img-fluid" alt="" />
                        </div>
                      </Link>
                    </div>
                    <div className="nft_coll_pp">
                      <Link to={`/author`}>
                        <div className="skeleton-box rounded-full">
                          <img className="lazy pp-coll" src={author.authorImage} alt="" />
                        </div>
                      </Link>
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="nft_coll_info">
                        <div className="skeleton-box">
                          <Link to={`/explore`}>
                              <h4>{author.title}</h4>
                          </Link>
                          <span>ERC-{author.code}</span>
                        </div>
                    </div>
                  </div>
                </div>
              ))}
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
};

export default HotCollections;

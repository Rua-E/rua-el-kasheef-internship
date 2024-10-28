import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import nftImage from "../../images/nftImage.jpg";
import AuthorImage from "../../images/author_thumbnail.jpg";

const HotCollections = () => {
  const [authors, setAuthors] = useState([]); // MAPPING THE AUTHORS
  const [loading, setLoading] = useState(true); // LOADING STATE

  async function fetchCollection() {
    setLoading(true);
    try {
      const { data } = await axios.get(`https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections`);
      console.log('Fetched data:', data);
      setAuthors(data);
    } catch (error) {
      console.error("Error fetching, author", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { 
    fetchCollection();
  }, []);

// OWL-CAROUSEL options (used owl-carousel because it was simple and easy to use and has all the options needed)
  const options = { 
    responsiveClass: true,
    dots: false,
    responsive: {
      0: {items: 1 },
      480: {items: 1 },
      600: { items: 1 },
      800: { items: 2 },
      1000: { items: 3 },
      1200: { items: 4 },
    },
    loop: true,
    nav: true
  };

if (loading) {
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
        <div className="d-flex ">
          <OwlCarousel 
            className='owl-theme'
            margin={10}
            {...options}
            >
            {new Array(4).fill(0).map((_,index) => (
                  <div className="item" key={index}>
                  <div className="nft_coll w-full">
                    <div className="nft_wrap">
                      <Link to="/author.title">
                        <div className="skeleton-box h-64 w-full">
                          <img src={nftImage} className="lazy img-fluid invisible" alt="" />
                        </div>
                      </Link>
                    </div>
                    <div className="nft_coll_pp ">
                      <Link to="/author">
                        <div className="skeleton-box rounded-full h-16 w-16">
                          <img className="lazy pp-coll h-16 w-16 invisible rounded-full max-w-full h-auto" src={AuthorImage} alt="" />
                        </div>
                      </Link>
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="nft_coll_info mt-3">
                          <Link to="/explore">
                            <div className="skeleton-box h-6 w-3/4 mb-2">
                              <h4 className="invisible"> author.title </h4>
                            </div>
                            <br />
                          </Link>
                          <div className="skeleton-box h-4 w-1/2">
                            <span className="invisible">ERC-code</span>
                          </div>
                    </div>
                  </div>
                </div>
            ))}
            </OwlCarousel>
            </div> 
      </div>
    </div>
    </section>
  );
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
            {authors && authors.length > 0 && (
            <OwlCarousel 
              className='owl-theme'
              margin={10}
              {...options}
              >
              {authors.map((author, index) => (
                    <div className="item" key={index}>
                    <div className="nft_coll">
                      <div className="nft_wrap">
                        <Link to={`/${author.title}`}>
                            <img src={author.nftImage} className="lazy img-fluid" alt={author.title} />
                        </Link>
                      </div>
                      <div className="nft_coll_pp">
                        <Link to={`/author`}>
                            <img className="lazy pp-coll" src={author.authorImage} alt={author.title} />
                        </Link>
                        <i className="fa fa-check"></i>
                      </div>
                      <div className="nft_coll_info">
                            <Link to={`/explore`}>
                                <h4>{author.title}</h4>
                            </Link>
                            <span>ERC-{author.code}</span>
                      </div>
                    </div>
                  </div>

              ))}
              </OwlCarousel>
            ) 
            // : ( 
            //   <div className="col-12 text-center">
            //      <p>No collections found</p> 
            //   </div>
            // )
          }
        </div>
      </div>
    </section>
    
  );
};

export default HotCollections;

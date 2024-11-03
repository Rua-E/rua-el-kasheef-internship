import React from 'react';
import { Link } from "react-router-dom";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import NewItemCounter from './NewItemCounter';

const NewItemsCarousel = ({ newItems }) => {

    const options = {
        items: 4,
        margin: 10,
        nav: true,
        loop: true,
        responsive: {
            0: { items: 1 },
            400: { items: 1 },
            600: { items: 2 },
            800: { items: 3 },
            1000: { items: 3 },
            1200: { items: 4 },
        },
    };

  return (
        <OwlCarousel {...options}>
        {newItems?.map((newItem, index) => (
            <div className="item"  key={index} >
              <div className="nft__item" >
                <div className="author_list_pp" >
                  <Link
                    to={`/author/${newItem.authorId}`}
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title={`Creator: ${newItem.authorId}`}
                  >
                        <img className="lazy" src={newItem.authorImage} alt=""  />
                        <i className="fa fa-check"></i>
                  </Link>
                </div>

                <NewItemCounter expiryDate={newItem.expiryDate} />

                <div className="nft__item_wrap"  >
                  <div className="nft__item_extra"  >
                    <div className="nft__item_buttons" >
                      <button>Buy Now</button>
                      <div className="nft__item_share" >
                        <h4>Share</h4>
                        <a href="" target="_blank" rel="noreferrer">
                          <i className="fa fa-facebook fa-lg"></i>
                        </a>
                        <a href="" target="_blank" rel="noreferrer">
                          <i className="fa fa-twitter fa-lg"></i>
                        </a>
                        <a href="">
                          <i className="fa fa-envelope fa-lg"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <Link to={`/item-details/${newItem.nftId}`} >
                    <img
                      src={newItem.nftImage}
                      className="lazy nft__item_preview"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="nft__item_info">
                  <Link to={`/item-details/${newItem.nftId}`}>
                    <h4>{newItem.title}</h4>
                  </Link>
                  <div className="nft__item_price">{newItem.price} ETH</div>
                  <div className="nft__item_like">
                    <i className="fa fa-heart"></i>
                    <span>{newItem.likes}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
          </OwlCarousel>
  );
};

export default NewItemsCarousel
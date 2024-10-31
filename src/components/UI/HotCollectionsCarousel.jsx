import React from 'react'

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import { Link } from "react-router-dom";
import AuthorImage from "../../images/author_thumbnail.jpg";
import nftImage from "../../images/nftImage.jpg";

const HotCollectionsCarousel = ({ hotCollectionsAuthors }) => {

    const options = {
        items: 4,
        margin: 10,
        nav: true,
        items: 4,
        loop: true,
        responsive: {
            0: { items: 1 },
            480: { items: 1 },
            600: { items: 2 },
            800: { items: 3 },
            1000: { items: 3 },
            1200: { items: 4 },
        },
    };

  return (
    <OwlCarousel {...options}>
        {hotCollectionsAuthors?.map((hotAuthor, index) => (
        <div className="item" key={index}>
            <div className="nft_coll">
            <div className="nft_wrap" style={{ height: '100%'}}>
                <Link to={`/item-details/${hotAuthor.nftId}`}>
                <img
                    src={hotAuthor.nftImage || nftImage}
                    className="lazy img-fluid"
                    alt={hotAuthor.title}
                />
                </Link>
            </div>
            <div className="nft_coll_pp">
                <Link to={`/author/${hotAuthor.authorId}`}>
                <img
                    className="lazy pp-coll"
                    src={hotAuthor.authorImage || AuthorImage}
                    alt={hotAuthor.title}
                />
                </Link>
                <i className="fa fa-check"></i>
            </div>
            <div className="nft_coll_info">
                <Link to={`/explore`}>
                <h4>{hotAuthor.title}</h4>
                </Link>
                <span>ERC-{hotAuthor.code}</span>
            </div>
            </div>
        </div>
        ))}
    </OwlCarousel>    
  )
}

export default HotCollectionsCarousel;
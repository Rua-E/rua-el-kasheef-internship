import React from 'react';
import Skeleton from './Skeleton';

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const HotCollectionsLoading = () => {
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
    new Array(4).fill(0).map((_, index) => (
        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={index}>
        <div className="nft_coll w-full">
            <div className="nft_wrap">
                <Skeleton height={200} width={"100%"}/>
            </div>
            <div className="nft_coll_pp">
                <Skeleton height={50} width={50} borderRadius={100}/>
            <i className="fa fa-check"></i>
            </div>
            <div className="nft_coll_info">
                <Skeleton height={20} width={100}/>
            </div>
                <Skeleton height={20} width={60}/>
            </div>
        </div>
    ))
  )
}

export default HotCollectionsLoading

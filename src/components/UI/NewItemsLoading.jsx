import React from "react";
import Skeleton from "./Skeleton";

const NewItemsLoading = () => {

    const options = {
        margin: 10,
        nav: true,
        items: 4,
        loop: true,
        slideBy: 1,
        responsive: {
            0: { items: 1 },
            400: { items: 1 },
            600: { items: 2 },
            800: { items: 3 },
            1000: { items: 3 },
            1200: { items: 4 },
        },
    };

  return (new Array(4).fill(0).map((_, index) => (
    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={index}>
      <div className="nft__item">
        <div className="author_list_pp">
          <Skeleton height={50} width={50} borderRadius={100} />
          <i className="fa fa-check"></i>
        </div>
        <div className="nft__item_wrap">
          <div className="nft__item_extra">
            <div className="nft__item_buttons">
              <button>Buy Now</button>
              <div className="nft__item_share">
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
          <Skeleton height={350} width={"100%"} />
        </div>
        <div className="nft__item_info mt-2">
          <div>
            <h4>
              <Skeleton height={30} width={200} />
            </h4>
          </div>
          <div>
            <Skeleton height={25} width={100} />
          </div>
          <div className="nft__item_like">
            <Skeleton height={20} width={40} />
          </div>
        </div>
      </div>
    </div>
  )))
  
};

export default NewItemsLoading;

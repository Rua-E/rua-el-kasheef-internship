import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import AuthorItemCard from "../author/AuthorItemCard";
import NewItemCounter from "../UI/NewItemCounter";
import NewItemsLoading from "../UI/NewItemsLoading";

const ExploreItems = ({ exploring, setExploring }) => {
  const [filter, setFilter] = useState("");
  const [changeSlice, setChangeSlice] = useState(8);
  const [isNewItemsLoading, setIsNewItemsLoading] = useState(true);

  useEffect(() => {
    async function setFetchedFilter() {
      setIsNewItemsLoading(true);
      try {
        const { data } = await axios.get(
          `https://us-central1-nft-cloud-functions.cloudfunctions.net/explore?filter=${filter}`
        );
        setExploring(data);
      } catch (error) {
        console.error("Error loading items:", error);
      } finally {
        setIsNewItemsLoading(false);
      }
    }

    setFetchedFilter();
  }, [filter]);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const handleSliceChange = () => {
    setChangeSlice(changeSlice + 4);
  };

  return (
    <>
      <div>
        <select
          id="filter-items"
          defaultValue=""
          value={filter}
          onChange={(e) => handleFilterChange(e.target.value)}
        >
          <option value="">Default</option>
          <option value="price_low_to_high">Price, Low to High</option>
          <option value="price_high_to_low">Price, High to Low</option>
          <option value="likes_high_to_low">Most liked</option>
        </select>
      </div>

      {isNewItemsLoading ? (
        <NewItemsLoading arrayNumber={8} />
      ) : (
        exploring?.slice(0, changeSlice).map((explore, index) => (
          <div
            key={index}
            className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
            style={{ display: "block", backgroundSize: "cover" }}
          >
            <div className="nft__item">
      <div className="author_list_pp">
        <Link
          to={`/author/${explore.authorId}`}
          data-bs-toggle="tooltip"
          data-bs-placement="top"
        >
          <img
            className="lazy"
            src={explore.authorImage}
            alt=""
          />
          <i className="fa fa-check"></i>
        </Link>
      </div>
      <NewItemCounter expiryDate={explore.expiryDate} />
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
        <Link to={`/item-details/${explore.nftId}`}>
          <img src={explore.nftImage} className="lazy nft__item_preview" alt="" />
        </Link>
      </div>
      <div className="nft__item_info">
        <Link to={`/item-details/${explore.nftId}`}>
          <h4>{explore.title}</h4>
        </Link>
        <div className="nft__item_price">{explore.price} ETH</div>
        <div className="nft__item_like">
          <i className="fa fa-heart"></i>
          <span>{explore.likes}</span>
        </div>
      </div>
    </div>
          </div>
        ))
      )}
      <div className="col-md-12 text-center">
        {changeSlice < exploring.length && (
          <Link
            to=""
            id="loadmore"
            className="btn-main lead"
            onClick={handleSliceChange}
          >
            Load more
          </Link>
        )}
      </div>
    </>
  );
};

export default ExploreItems;

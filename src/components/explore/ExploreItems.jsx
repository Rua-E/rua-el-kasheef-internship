import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthorItemCard from "../author/AuthorItemCard";
import axios from "axios";
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

        const { data } = await axios.get(`https://us-central1-nft-cloud-functions.cloudfunctions.net/explore?filter=${filter}`);
        setExploring(data);
      } catch (error) {
        console.error("Error loading items:", error)
      } finally {
        setIsNewItemsLoading(false);
      }
    };

    setFetchedFilter();
  }, [filter])

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter)
  };

  const handleSliceChange = () => {
      setChangeSlice(changeSlice + 4);
  }

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

      {isNewItemsLoading ? (<><NewItemsLoading/><NewItemsLoading/> </>) : 
      (exploring?.slice(0,changeSlice).map((explore, index) => (
          <div
          key={index}
          className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
          style={{ display: "block", backgroundSize: "cover" }}>
          <NewItemCounter expiryDate={explore.expiryDate}/>
          <AuthorItemCard explore={explore}/>
          </div>)) 
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

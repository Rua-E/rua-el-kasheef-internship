import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthorItemCard from "../author/AuthorItemCard";
import axios from "axios";

const ExploreItems = ({ exploring, setExploring }) => {
  const [filter, setFilter] = useState("");
  const [changeSlice, setChangeSlice] = useState(8);

  useEffect(() => {
    async function setFetchedFilter() {
      const { data } = await axios.get(`https://us-central1-nft-cloud-functions.cloudfunctions.net/explore?filter=${filter}`);
      setExploring(data);
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
    {exploring?.slice(0,changeSlice).map((explore, index) => (
        <div
          key={index}
          className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
          style={{ display: "block", backgroundSize: "cover" }}>

{/* // TODO: ADD COUNTER */}
            {/* <NewItemCounter expiryDate={explore.expiryDate}/> */}
          <AuthorItemCard explore={explore}/>

        </div>
         ))}
      <div className="col-md-12 text-center">
        {changeSlice < exploring.length && (
        <Link 
          to="" 
          id="loadmore" 
          className="btn-main lead"
          onClick={handleSliceChange}
          // invisible={setChangeSlice >= exploring.length}
          >
          Load more
        </Link>
        )}
      </div>
    </>
  );
};

export default ExploreItems;

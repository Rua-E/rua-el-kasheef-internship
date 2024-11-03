import React, { useEffect, useState } from "react";

import axios from "axios";
import NewItemsCarousel from "../UI/NewItemsCarousel";


import { Link } from "react-router-dom";
import AuthorImage from "../../images/author_thumbnail.jpg";
import nftImage from "../../images/nftImage.jpg";

import NewItemsLoading from "../UI/NewItemsLoading";

const NewItems = () => {
  const [newItems, setNewItems] = useState([]);
  const [isNewItemsLoading, setIsNewItemsLoading] = useState(true);

  async function fetchNewItems() {

    setIsNewItemsLoading(true)

    try {
      const { data } = await axios.get(`https://us-central1-nft-cloud-functions.cloudfunctions.net/newItems`);
      setNewItems(data)
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setIsNewItemsLoading(false);
    }
  }

  useEffect(() => {
    fetchNewItems()
  }, [])

  return (
    <section id="section-items" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>New Items</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          {
            isNewItemsLoading ? (<NewItemsLoading />) : (<NewItemsCarousel newItems={newItems}/>)
          }
        </div>
      </div>
    </section>
  );
};

export default NewItems;
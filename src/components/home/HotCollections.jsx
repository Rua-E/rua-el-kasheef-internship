import React, { useEffect, useState } from "react";
import axios from "axios";

import HotCollectionsCarousel from "../UI/HotCollectionsCarousel";
import HotCollectionsLoading from "../UI/HotCollectionsLoading";

const HotCollections = () => {
  const [hotCollectionsAuthors, setHotCollectionsAuthors] = useState([]);
  const [isHotCollectionsLoading, setIsHotCollectionsLoading] = useState(true);

  async function fetchCollection() {
    setIsHotCollectionsLoading(true);
    try {
      const { data } = await axios.get(
        `https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections`
      );
      setHotCollectionsAuthors(data);
    } catch (error) {
      console.error("Error fetching, author", error);
    } finally {
      setIsHotCollectionsLoading(false);
    }
  }

  useEffect(() => {
    fetchCollection();
  }, []);

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
          {
          isHotCollectionsLoading ? 
          (<HotCollectionsLoading />) : (<HotCollectionsCarousel hotCollectionsAuthors={hotCollectionsAuthors}/>)
        }
        </div>
      </div>
    </section>
  );
};

export default HotCollections;

import React, { useEffect, useState } from "react";
import axios from "axios";

import AOS from "aos";
import "aos/dist/aos.css";

import TopSeller from "../UI/TopSeller";
import TopSellersLoading from "../UI/TopSellersLoading";

const TopSellers = () => {
  const [topSellers, setTopSellers] = useState([]);
  const [isTopSellersLoading, setTopSellersLoading] = useState(true);

  async function fetchTopSellers() {
    setTopSellersLoading(true);
    try {
      const { data } = await axios.get(
        "https://us-central1-nft-cloud-functions.cloudfunctions.net/topSellers"
      );
      setTopSellers(data);
    } catch (error) {
      console.error("Error fetching, sellers:", error);
    } finally {
      setTopSellersLoading(false);
    }
  }

  useEffect(() => {
    AOS.init();
    fetchTopSellers();
  }, []);

  return (
    <section id="section-popular" className="pb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Top Sellers</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <div className="col-md-12" data-aos="fade-in" data-aos-easing="ease-in-out">
            <ol className="author_list">
              {isTopSellersLoading ? (
                <TopSellersLoading />
              ) : (
                <TopSeller topSellers={topSellers} />
              )}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSellers;

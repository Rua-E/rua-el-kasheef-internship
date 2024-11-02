import React, { useEffect, useState } from "react";
import SubHeader from "../images/subheader.jpg";
import ExploreItems from "../components/explore/ExploreItems";
import axios from "axios";

const Explore = () => {
  const [exploring, setExploring] = useState([]);
  const [isExploreLoading, setIsExploreLoading] = useState(true);

  async function fetchExplore() {
    setIsExploreLoading(true);
    try {
    const { data } = await axios.get('https://us-central1-nft-cloud-functions.cloudfunctions.net/explore');
    setExploring(data);
    } catch (error) {
      console.error("Error loading, explore:", error);
    } finally {
      setIsExploreLoading(false);
    }
  }

  useEffect(() => {
    fetchExplore()
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        <section
          id="subheader"
          className="text-light"
          style={{ background: `url("${SubHeader}") top` }}
        >
          <div className="center-y relative text-center">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h1>Explore</h1>
                </div>
                <div className="clearfix"></div>
              </div>
            </div>
          </div>
        </section>

        <section aria-label="section">
          <div className="container">
            <div className="row">
              <ExploreItems exploring={exploring} setExploring={setExploring} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Explore;

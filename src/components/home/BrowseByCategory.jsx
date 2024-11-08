import React from "react";
import BrowseByCategoryCard from "../UI/BrowseByCategoryCard";

const BrowseByCategory = () => {
  return (
    <section id="section-category" className="no-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Browse by category</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <BrowseByCategoryCard icon="fa-image" title="Art" animate="100" />
          <BrowseByCategoryCard icon="fa-music" title="Music" animate="200" />
          <BrowseByCategoryCard icon="fa-search" title="Domain Names" animate="300" />
          <BrowseByCategoryCard icon="fa-globe" title="Virtual Worlds" animate="400" />
          <BrowseByCategoryCard icon="fa-vcard" title="Trading Cards" animate="500" />
          <BrowseByCategoryCard icon="fa-th" title="Collectibles" animate="600"
          />
        </div>
      </div>
    </section>
  );
};

export default BrowseByCategory;

import React from 'react';

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import AuthorItemCard from "../author/AuthorItemCard";

const NewItemsCarousel = ({ newItems }) => {
  const options = {
    items: 4,
    margin: 10,
    nav: true,
    loop: true,
    responsive: {
      0: { items: 1 },
      400: { items: 1 },
      600: { items: 2 },
      800: { items: 3 },
      1000: { items: 3 },
      1200: { items: 4 },
    },
  };

  return (
    <OwlCarousel {...options}>
      {newItems?.map((newItem, id) => (
        <div className="item" key={id}>
         <AuthorItemCard data={newItem} />
        </div>
      ))}
    </OwlCarousel>
  );
};

export default NewItemsCarousel;

import React from "react";
import { Link } from "react-router-dom";

const TopSeller = ({ topSellers }) => {
  return (
    <div>
      {topSellers?.map((topSeller, index) => (
        <li key={index}>
          <div className="author_list_pp">
            <Link to={`/author/${topSeller.authorId}`}>
              <img
                className="lazy pp-author"
                src={topSeller.authorImage}
                alt=""
              />
              <i className="fa fa-check"></i>
            </Link>
          </div>
          <div className="author_list_info">
            <Link to={`/author/${topSeller.authorId}`}>
              {topSeller.authorName}
            </Link>
            <span>{topSeller.price} ETH</span>
          </div>
        </li>
      ))}
    </div>
  );
};

export default TopSeller;

import React from "react";
import { Link } from "react-router-dom";
import AuthorImage from "../../images/author_thumbnail.jpg";

const TopSellersLoading = ({ topSellers }) => {
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
            <Link to={`/author/${topSeller.authorName}`}>
              {topSeller.authorName}
            </Link>
            <span>{topSeller.price} ETH</span>
          </div>
        </li>
      ))}
    </div>
    // new Array(12).fill(0).map((_, index) => (
    //     <li key={index}>
    //       <div className="author_list_pp">
    //         <Link to="/author">
    //           <img
    //             className="lazy pp-author"
    //             src={AuthorImage}
    //             alt=""
    //           />
    //           <i className="fa fa-check"></i>
    //         </Link>
    //       </div>
    //       <div className="author_list_info">
    //         <Link to="/author">Monica Lucas</Link>
    //         <span>2.1 ETH</span>
    //       </div>
    //     </li>
    //   ))
  );
};

export default TopSellersLoading;

import React from "react";
import AuthorItemCard from "./AuthorItemCard";

const AuthorItems = ({ nftCollection, authors }) => {
  return (
    <div className="de_tab_content">
      <div className="tab-1">
        <div className="row">
          {nftCollection?.map((currentAuthor, index) => (
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={index}>
              <AuthorItemCard
                data={currentAuthor}
                authors={authors}
                key={index}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuthorItems;

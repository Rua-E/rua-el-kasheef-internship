import React from "react";
import AuthorItemCard from "./AuthorItemCard";

const AuthorItems = ({ nftCollections, authors }) => {
  return (
    <div className="de_tab_content">
      <div className="tab-1">
        <div className="row">
          {nftCollections?.map((nftCollection, id) => (
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={id}>
              <AuthorItemCard
                data={nftCollection}
                authorImageData={authors.authorImage}
                key={id}
              />
            </div>
          ))}
        </div>
      </div>
      </div>
  );
};

export default AuthorItems;

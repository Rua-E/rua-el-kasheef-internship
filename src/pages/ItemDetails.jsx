import React, { useEffect, useState } from "react";
import EthImage from "../images/ethereum.svg";
import { Link, useParams } from "react-router-dom";
import AuthorImage from "../images/author_thumbnail.jpg";
import nftImage from "../images/nftImage.jpg";
import Skeleton from "../components/UI/Skeleton";
import axios from "axios";

const ItemDetails = () => {
  // const[loading, setLoading] = useState(true);

  const { id } = useParams();
  const [results, setResults] = useState(null);

  async function fetchAuthorCollection() {
    try {
      const { data } = await axios.get(`https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections`);
      setResults(data);
    } catch (error) {
      console.error("Error fetching movie details", error);
    }
  }
  useEffect(() => {
     fetchAuthorCollection();
    }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetchAuthorCollection()
      .then((res) => {
        setResults(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setResults]);

  return (
    <>
    {results && results.map((result, index) => (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>
        <section aria-label="section" className="mt90 sm-mt-0">
          <div className="container">
            <div className="row">
              <div className="col-md-6 text-center">
               <div className="skeleton-box">
                <img
                  src={result.nftImage}
                  className="img-fluid img-rounded mb-sm-30 nft-image"
                  alt=""
                  />
                  </div>
              </div>
              <div className="col-md-6">
                <div className="item_info">
                  <div className="skeleton-box">
                  <h2>{result.title} #{result.code}</h2>
                  </div>
                  <div className="item_info_counts">
                    <div className="skeleton-box">
                    <div className="item_info_views">
                      <i className="fa fa-eye"></i>
                      result.views
                    </div>
                    </div>
                    <div className="skeleton-box">
                    <div className="item_info_like">
                      <i className="fa fa-heart"></i>
                      result.heart
                    </div>
                    </div>
                  </div>
                  <div className="skeleton-box">
                  <p>
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                    illo inventore veritatis et quasi architecto beatae vitae
                    dicta sunt explicabo.
                  </p>
                  </div>
                  <div className="d-flex flex-row">
                    <div className="mr40">
                      <h6>Owner</h6>
                      <div className="item_author">
                        <div className="author_list_pp">
                          <Link to="/author">
                            <div className="skeleton-box">

                            <img className="lazy" src={result.authorImage} alt="" />
                            </div>
                            <i className="fa fa-check"></i>
                          </Link>
                        </div>
                          <div className="author_list_info">
                            <div className="skeleton-box">
                              <Link to="/author">result.owner</Link>
                            </div>
                          </div>
                      </div>
                    </div>
                    <div></div>
                  </div>
                  <div className="de_tab tab_simple">
                    <div className="de_tab_content">
                      <h6>Creator</h6>
                      <div className="item_author">
                        <div className="author_list_pp">
                          <Link to="/author">
                            <div className="skeleton-box">

                              <img className="lazy" src={result.authorImage} alt="" />
                            </div>
                            <i className="fa fa-check"></i>
                          </Link>
                        </div>
                        <div className="author_list_info"> 
                          <div className="skeleton-box">
                            <Link to="/author">result.creator</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="spacer-40"></div>
                    <h6>Price</h6>
                    <div className="nft-item-price">
                        <div className="skeleton-box">
                      <img src={EthImage} alt="" />
                          <span>result.price</span>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div> ))}
    </>
  );
};

export default ItemDetails;

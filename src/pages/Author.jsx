import React, { useEffect, useState } from "react";
import AuthorBanner from "../images/author_banner.jpg";
import AuthorItems from "../components/author/AuthorItems";
import { Link, useParams } from "react-router-dom";
import AuthorImage from "../images/author_thumbnail.jpg";
import axios from "axios";
import AuthorLoading from "../components/UI/AuthorLoading";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Author = () => {
  const [authors, setAuthors] = useState([]);
  const { authorId } = useParams();
  const [isAuthorLoading, setAuthorLoading] = useState(true);
  const [isFollowing, setIsFollowing] = useState(false);
  const [followCount, setFollowCount] = useState(0);
  const [copied, setCopied] = useState(false);
  
  useEffect(() => {
    async function fetchAuthors() {
    setAuthorLoading(true);
    try {
      const { data } = await axios.get(`https://us-central1-nft-cloud-functions.cloudfunctions.net/authors?author=${authorId}`)
      setAuthors(data);
    } catch (error) {
      console.error('Error loading author:', error)
    } finally {
      setFollowCount(authors.followers);
      console.log(setFollowCount)
      setAuthorLoading(false);
    }
  }
    fetchAuthors()
  }, []);

  const handleFollowClick = () => {
    setIsFollowing(!isFollowing);
    setFollowCount(followCount => isFollowing ? (followCount - 1) : followCount + 1);
  }
  
  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500) // RESET AFTER 1.5 SECONDS
  }

  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        <section
          id="profile_banner"
          aria-label="section"
          className="text-light"
          data-bgimage="url(images/author_banner.jpg) top"
          style={{ background: `url(${AuthorBanner}) top` }}
        ></section>
        {isAuthorLoading ? 
       
      (<AuthorLoading />) :
        (<section aria-label="section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="d_profile de-flex">
                  <div className="de-flex-col">
                    <div className="profile_avatar">
                      <img src={authors.authorImage} alt="" />

                      <i className="fa fa-check"></i>
                      <div className="profile_name">
                        <h4>
                          {authors.authorName}
                          <span className="profile_username">@{authors.tag}</span>
                          <span id="wallet" className="profile_wallet">
                            {authors.address}
                          </span>
                          <CopyToClipboard 
                            onCopy={handleCopy}
                            text={authors.address}
                            >
                              <button id="btn_copy" title="Copy Text">
                                {copied ? "Copied!" : "Copy"}
                              </button>
                          </CopyToClipboard>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="profile_follow de-flex">
                    <div className="de-flex-col">
                      <div className="profile_follower">{followCount} followers</div>
                      <Link 
                        to="#" 
                        className="btn-main"
                        onClick={handleFollowClick}
                        >
                          {isFollowing ? `Unfollow` : `Follow`}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-12">
                <div className="de_tab tab_simple">
                  <AuthorItems 
                    authors={authors}
                    nftCollection={authors.nftCollection}
                    />
                </div>
              </div>
            </div>
          </div>
        </section>
         )}
      </div>
    </div>
  );
};

export default Author;

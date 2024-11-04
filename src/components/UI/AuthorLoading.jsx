import React from 'react';
import Skeleton from "./Skeleton";
import AuthorItems from '../author/AuthorItems';
import NewItemsLoading from './NewItemsLoading';

const AuthorLoading = () => {
  return (
    <div>
      <section aria-label="section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="d_profile de-flex">
                  <div className="de-flex-col">
                    <div className="profile_avatar">
                        <Skeleton height={150} width={150} borderRadius={100} />
                      <i className="fa fa-check"></i>
                      <div className="profile_name">
                        <h4>
                            <Skeleton height={25} width={200}/>
                            <br />
                          <span id="wallet" className="profile_wallet">
                            <Skeleton height={15} width={100} />
                          </span>
                          <br />
                            <Skeleton height={15} width={200}/>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="profile_follow de-flex">
                    <div className="de-flex-col">
                        <Skeleton height={40} width={150} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-12">
                <div className="de_tab tab_simple row">
                  <NewItemsLoading arrayNumber={8}/>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default AuthorLoading

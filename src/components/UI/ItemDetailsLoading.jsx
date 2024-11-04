import React from 'react'
import Skeleton from './Skeleton';

const ItemDetailsLoading = () => {
  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>
        <section aria-label="section" className="mt90 sm-mt-0">
          <div className="container">
            <div className="row">
              <div className="col-md-6 text-center">
                <Skeleton height={625} width={625} />
              </div>
              <div className="col-md-6">
                <div className="item_info">
                  <h2>
                    <Skeleton height={40} width={300} />
                  </h2>
                  <div className="item_info_counts">
                      <Skeleton height={35} width={100} />
                      <Skeleton height={35} width={100}/>
                  </div>
                  <p>
                    <Skeleton height={100} width={600} />
                  </p>
                  <div className="d-flex flex-row">
                    <div className="mr40">
                      <h6>
                        Owner
                      </h6>
                      <div className="item_author">
                        <div className="author_list_pp">
                            <Skeleton height={50} width={50} borderRadius={100} />
                            <i className="fa fa-check"></i>
                        </div>
                        <div className="author_list_info">
                            <Skeleton height={20} width={100} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="de_tab tab_simple">
                    <div className="de_tab_content">
                      <h6>
                        Creator
                      </h6>
                      <div className="item_author">
                        <div className="author_list_pp">
                            <Skeleton height={50} width={50} borderRadius={100} />
                            <i className="fa fa-check"></i>
                        </div>
                        <div className="author_list_info">
                            <Skeleton height={20} width={100} />
                        </div>
                      </div>
                    </div>
                    <div className="spacer-40"></div>
                    <h6>
                        Price
                    </h6>
                    <div className="nft-item-price">
                      <Skeleton height={30} width={100} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ItemDetailsLoading;

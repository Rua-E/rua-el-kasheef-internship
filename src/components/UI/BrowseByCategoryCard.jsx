import React from 'react';
import { Link } from 'react-router-dom';

const BrowseByCategoryCard = ({ animate, icon, title }) => {
  return (
    <div className="col-md-2 col-sm-4 col-6 mb-sm-30">
      <div data-aos="fade-left" data-aos-delay={`${animate}`}>
            <Link to="/explore" className="icon-box style-2 rounded">
              <i className={`fa ${icon}`}></i>
              <span>{title}</span>
            </Link>
      </div>
        </div>
  )
}

export default BrowseByCategoryCard;

import React from 'react'
import Animate from './Animate'

const LandingIntroCard = ({icon, title, description}) => {
  return (
       <div className="col-lg-4 col-md-6 mb-sm-30">
            <div className="feature-box f-boxed style-3">
              <Animate options={{ animation: 'fade-in', delay: 0, duration: 1000 }} >
                <i className={`bg-color-2 i-boxed ${icon}`} ></i>
              </Animate>
              <div className="text">
              <Animate options={{ animation: 'fade-in', duration: 600 }} >
                  <h4 className="" >{title}</h4>
              </Animate>
              <Animate options={{ animation: 'fade-up', delay: 25, duration: 800 }}>
                  <p>
                    {description}
                  </p>
              </Animate>
              </div>
              <i className={`wm ${icon}`}></i>
            </div>
          </div>
  )
}

export default LandingIntroCard

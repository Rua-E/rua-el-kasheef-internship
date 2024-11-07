import React from "react";
import Animate from "../UI/Animate";
import LandingIntroCard from "../UI/LandingIntroCard";

const LandingIntro = () => {
  return (
    <section id="section-intro" className="no-top no-bottom">
      <div className="container">
        <div className="row">
          <LandingIntroCard 
            icon="icon_wallet"
            title='Set up your wallet'
            description='Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem.'
          />
          <LandingIntroCard 
            icon="icon_cloud-upload_alt"
            title="Add your NFT's"
            description='Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem.'
          />
          <LandingIntroCard 
            icon="icon_tags_alt"
            title="Sell your NFT's"
            description='Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem.'
          />
        </div>
      </div>
    </section>
  );
};

export default LandingIntro;

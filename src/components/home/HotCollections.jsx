import React, { useEffect, useState } from "react";
import HotCollectionsCarousel from "../UI/HotCollectionsCarousel";
import axios from "axios";

import { Link } from "react-router-dom";
import AuthorImage from "../../images/author_thumbnail.jpg";
import nftImage from "../../images/nftImage.jpg";
import HotCollectionsLoading from "../UI/HotCollectionsLoading";
import OwlCarousel from "react-owl-carousel";

const HotCollections = () => {
  const [hotCollectionsAuthors, setHotCollectionsAuthors] = useState([]);
  const [isHotCollectionsLoading, setIsHotCollectionsLoading] = useState(true);

  async function fetchCollection() {
    setIsHotCollectionsLoading(true);
    try {
      const { data } = await axios.get(
        `https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections`
      );
      setHotCollectionsAuthors(data);
    } catch (error) {
      console.error("Error fetching, author", error);
    } finally {
      setIsHotCollectionsLoading(false);
    }
  }

  useEffect(() => {
    fetchCollection();
  }, []);

  return (
    <section id="section-collections" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Hot Collections</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          {
          isHotCollectionsLoading ? 
          (<HotCollectionsLoading />) : (<HotCollectionsCarousel hotCollectionsAuthors={hotCollectionsAuthors}/>)
        }
        </div>
      </div>
    </section>
  );
};

export default HotCollections;

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";

// import nftImage from "../../images/nftImage.jpg";
// import AuthorImage from "../../images/author_thumbnail.jpg";

// const HotCollections = () => {
//   const [authors, setAuthors] = useState([]);
//   const [loading, setLoading] = useState(true);

//   async function fetchCollection() {
//     setLoading(true);
//     try {
//       const { data } = await axios.get(
//         `https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections`
//       );
//       setAuthors(data);
//     } catch (error) {
//       console.error("Error fetching, author", error);
//     } finally {
//       setLoading(false);
//     }
//   }

//   useEffect(() => {
//     fetchCollection();
//   }, []);

//   const options = {
//     responsiveClass: true,
//     dots: false,
//     responsive: {
//       0: { items: 1 },
//       480: { items: 1 },
//       600: { items: 1 },
//       800: { items: 2 },
//       1000: { items: 3 },
//       1200: { items: 4 },
//     },
//     loop: true,
//     nav: true,
//   };

//   if (loading) {
//     return (
//       <section id="section-collections" className="no-bottom">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-12">
//               <div className="text-center">
//                 <h2>Hot Collections</h2>
//                 <div className="small-border bg-color-2"></div>
//               </div>
//             </div>
//             <div className="d-flex ">
//               <OwlCarousel className="owl-theme" margin={10} {...options}>
//                 {new Array(4).fill(0).map((_, index) => (
//                   <div className="item" key={index}>
//                     <div className="nft_coll w-full">
//                       <div className="nft_wrap">
//                         <Link to="/author.title">
//                           <div className="skeleton-box skeleton-box-img">
//                             <img
//                               src={nftImage}
//                               className="lazy img-fluid invisible"
//                               alt=""
//                             />
//                           </div>
//                         </Link>
//                       </div>
//                       <div className="nft_coll_pp">
//                         <Link to="/author">
//                           <div className="skeleton-box skeleton-round">
//                             <img
//                               className="lazy pp-coll h-16 w-16 invisible"
//                               src={AuthorImage}
//                               alt=""
//                             />
//                           </div>
//                         </Link>
//                         <i className="fa fa-check"></i>
//                       </div>
//                       <div className="nft_coll_info">
//                         <Link to="/explore">
//                           <div className="skeleton-box">
//                             <h4 className="invisible">(-placeholder-) </h4>
//                           </div>
//                           <br />
//                         </Link>
//                         <div className="skeleton-box ">
//                           <h4 className="invisible">(-ERC#)-</h4>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </OwlCarousel>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section id="section-collections" className="no-bottom">
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-12">
//             <div className="text-center">
//               <h2>Hot Collections</h2>
//               <div className="small-border bg-color-2"></div>
//             </div>
//           </div>
//           {authors && authors.length > 0 && (
//             <OwlCarousel className="owl-theme" margin={10} {...options}>
//               {authors.map((author, index) => (
//                 <div className="item" key={index}>
//                   <div className="nft_coll">
//                     <div className="nft_wrap">
//                       <Link to={`/item-details/${author.nftId}`}>
//                         <img
//                           src={author.nftImage}
//                           className="lazy img-fluid"
//                           alt={author.title}
//                         />
//                       </Link>
//                     </div>
//                     <div className="nft_coll_pp">
//                       <Link to={`/author`}>
//                         <img
//                           className="lazy pp-coll"
//                           src={author.authorImage}
//                           alt={author.title}
//                         />
//                       </Link>
//                       <i className="fa fa-check"></i>
//                     </div>
//                     <div className="nft_coll_info">
//                       <Link to={`/explore`}>
//                         <h4>{author.title}</h4>
//                       </Link>
//                       <span>ERC-{author.code}</span>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </OwlCarousel>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HotCollections;

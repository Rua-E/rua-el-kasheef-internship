import React, { useEffect } from "react";
import BrowseByCategory from "../components/home/BrowseByCategory";
import HotCollections from "../components/home/HotCollections";
import Landing from "../components/home/Landing";
import LandingIntro from "../components/home/LandingIntro";
import NewItems from "../components/home/NewItems";
import TopSellers from "../components/home/TopSellers";

const Home = () => {
  useEffect(() => { 
    // TO SAVE THE SCROLL POSITION
    const saveScrollPosition = () => {
      sessionStorage.setItem('scrollPosition', window.scrollY);
    };
    // RESTORE THE SCROLL POSITION AND SAVE
    const restoreScrollPosition = () => {
      const scrollPosition = sessionStorage.getItem('scrollPosition');
      if (scrollPosition) {
        window.scrollTo(scrollPosition, parseInt(scrollPosition, 10));
      }
    };

    restoreScrollPosition();

    window.addEventListener('beforeunload', saveScrollPosition);

    return () => {
      window.removeEventListener('beforeunload', saveScrollPosition);
    };

    // window.scrollTo(0, 0);
  }, []);

  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>
        <Landing />
        <LandingIntro />
        <HotCollections />
        <NewItems />
        <TopSellers />
        <BrowseByCategory />
      </div>
    </div>
  );
};

export default Home;


// import React, { useEffect } from "react";
// import BrowseByCategory from "../components/home/BrowseByCategory";
// import HotCollections from "../components/home/HotCollections";
// import Landing from "../components/home/Landing";
// import LandingIntro from "../components/home/LandingIntro";
// import NewItems from "../components/home/NewItems";
// import TopSellers from "../components/home/TopSellers";

// const Home = () => {
//   useEffect(() => {
//     // Function to save the scroll position
//     const saveScrollPosition = () => {
//       sessionStorage.setItem('scrollPosition', window.scrollY);
//     };

//     // Function to restore the scroll position
//     const restoreScrollPosition = () => {
//       const scrollPosition = sessionStorage.getItem('scrollPosition');
//       if (scrollPosition) {
//         window.scrollTo(scrollPosition, parseInt(scrollPosition, 10));
//       }
//     };

//     // Restore scroll position on component mount
//     restoreScrollPosition();

//     // Save scroll position on beforeunload
//     window.addEventListener('beforeunload', saveScrollPosition);

//     // Clean up event listener on component unmount
//     return () => {
//       window.removeEventListener('beforeunload', saveScrollPosition);
//     };
//   }, []);

//   return (
//     <div id="wrapper">
//       <div className="no-bottom no-top" id="content">
//         <div id="top"></div>
//         <Landing />
//         <LandingIntro />
//         <HotCollections />
//         <NewItems />
//         <TopSellers />
//         <BrowseByCategory />
//       </div>
//     </div>
//   );
// };

// export default Home;

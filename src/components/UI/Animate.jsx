import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Animate = ({ children, options }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    AOS.init({ // DEFAULT VALUES
        duration: 1000,
        easing: "ease-in-out",
        mirror: false
    });

    // TO REFRESH AND TRIGGER ANIMATION WHEN NOT ON THE SCREEN
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          AOS.refreshHard();
        }
      });
    });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      data-aos={options.animation}
      data-aos-duration={options.duration}
      data-aos-delay={options.delay}
      data-aos-easing={options.easing}
    >
      {children}
    </div>
  );
};

export default Animate;

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Animate = ({ animations, animation, duration, delay, easing, once}) => {
    useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  return (
    <div data-aos={animation} data-aos-duration={duration} data-aos-delay={delay} data-aos-easing={easing} data-aos-once={once}>
      {animations}
    </div>
  )
}

export default Animate

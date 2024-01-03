// Carousel.js
import React, { useEffect, useState } from 'react';
import './App.css';
import comp1 from './comp_1.png';
import comp2 from './comp_2.png';
import comp3 from './comp_3.png';
import comp4 from './comp_4.png';
import comp5 from './comp_5.png';
import comp6 from './comp_6.png';

const CarouselScroll = () => {
  const textArray = [comp1, comp2, comp3, comp4, comp5, comp6];
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = React.useRef(null);

  const startCarousel = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, 2000);
  };

  const handleMouseEnter = () => {
    clearInterval(intervalRef.current);
  };

  const handleMouseLeave = () => {
    startCarousel();
  };

  useEffect(() => {
    startCarousel();

    return () => clearInterval(intervalRef.current);
  }, [textArray.length]);


  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);
        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  return (
    <div className="scroller" data-speed="fast" data-animated="true">
    <ul className="tag-list scroller__inner">
      {textArray.map(each=>(
 <li>{<img src={each}/>}</li>
      ))}
     
     
    </ul>
  </div>
  );
};

export default CarouselScroll;

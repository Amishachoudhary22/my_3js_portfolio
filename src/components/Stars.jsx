// components/Stars.jsx

import React, { useEffect, useRef } from 'react';

const Stars = () => {
  const starsContainerRef = useRef(null);

  useEffect(() => {
    const createStars = (count) => {
      const starsContainer = starsContainerRef.current;

      for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;
        star.style.width = `${Math.random() * 2 + 1}px`;
        star.style.height = star.style.width;
        star.style.animationDelay = `${Math.random() * 5}s`;
        star.style.animationDuration = `${Math.random() * 10 + 5}s`;

        starsContainer.appendChild(star);
      }
    };

    createStars(100); // Adjust the number of stars as needed
  }, []);

  return <div className="stars-container" ref={starsContainerRef} />;
};

export default Stars;
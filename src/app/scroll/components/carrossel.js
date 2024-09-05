"use client"
import { useEffect, useRef, useState } from 'react';

const Carousel = () => {
  const containerRef = useRef(null);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const [centerSlideIndex, setCenterSlideIndex] = useState(0);

  const slides = Array.from({ length: 7 }, (_, i) => i + 1); // Simulating slides
  const swipeThreshold = 50;

  const getCenterSlideIndex = () => {
    const scrollLeft = containerRef.current.scrollLeft;
    const slideWidth = containerRef.current.firstChild.offsetWidth;
    return Math.round(scrollLeft / slideWidth);
  };

  const updateActiveDot = (index) => {
    setCenterSlideIndex(index);
  };

  const handlePrevClick = () => {
    containerRef.current.scrollBy({ left: -containerRef.current.firstChild.offsetWidth, behavior: 'smooth' });
    updateActiveDot(getCenterSlideIndex() - 1);
  };

  const handleNextClick = () => {
    containerRef.current.scrollBy({ left: containerRef.current.firstChild.offsetWidth, behavior: 'smooth' });
    updateActiveDot(getCenterSlideIndex() + 1);
  };

  const handleTouchStart = (event) => {
    setTouchStartX(event.touches[0].clientX);
  };

  const handleTouchMove = (event) => {
    setTouchEndX(event.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > swipeThreshold) {
      updateActiveDot(getCenterSlideIndex() + 1);
    } else if (touchStartX - touchEndX < -swipeThreshold) {
      updateActiveDot(getCenterSlideIndex() - 1);
    }
    setTouchStartX(0);
    setTouchEndX(0);
  };

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener('touchstart', handleTouchStart);
    container.addEventListener('touchmove', handleTouchMove);
    container.addEventListener('touchend', handleTouchEnd);

    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
    };
  }, [touchStartX, touchEndX]);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center">
      <div ref={containerRef} className="carousel scrollbar-hide flex w-[810px] h-[76.55px] snap-x snap-mandatory gap-4 overflow-x-scroll scroll-smooth">
        {slides.map((slide) => (
          <div key={slide} className="relative aspect-[1/1] w-[85%] shrink-0 snap-start snap-always rounded-xl bg-blue-200 md:w-[calc(33.33%-(32px/3))]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-8xl font-bold text-white">{slide}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination my-4 flex gap-2">
        {slides.map((_, index) => (
          <span key={index} className={`h-3 w-3 ease-out duration-300 rounded-full bg-black ${index === centerSlideIndex ? 'w-8' : ''}`}></span>
        ))}
      </div>

      <div>
        <button className="prev-btn bg-gray-200 p-2" onClick={handlePrevClick}>Prev</button>
        <button className="next-btn bg-gray-200 p-2" onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
};

export default Carousel;

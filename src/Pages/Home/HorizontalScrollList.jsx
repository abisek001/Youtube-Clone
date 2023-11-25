import React, { useRef } from 'react';

const HorizontalScrollList = ({ NavList }) => {
  const scrollContainerRef = useRef(null);

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 100; // Adjust the scroll distance as needed
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 100; // Adjust the scroll distance as needed
    }
  };

  return (
    <div className="navigation_List">
      <button className="scroll-button-left" onClick={handleScrollLeft}>
        <i className="bi bi-chevron-compact-left"></i>
      </button>

      <div className="nav-list-container" ref={scrollContainerRef}>
        {NavList.map((item) => (
          <p className="navList_Button" key={item}>
            {item}
          </p>
        ))}
      </div>

      <button className="scroll-button-right" onClick={handleScrollRight}>
        <i className="bi bi-chevron-compact-right"></i>
      </button>
    </div>
  );
};

export default HorizontalScrollList;

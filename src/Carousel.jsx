import React, { useState } from "react";
import "./styles.css";

export const CarouselItem = (props, { children }) => {
  return <div className={"carousel-item " + props.itemNumber}>{children}</div>;
};

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  console.log(children);
  // Updates the index and ensures the index doesn't go under 0 or above the number of items in the carousel
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = React.Children.count(children) - 1;
    }
    setActiveIndex(newIndex);
  };

  return (
    <div className="carousel">
      <div
        className="inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {/* refactor */}
        {/* {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })} */}
        {children.map((child) => {
          return child;
        })}
      </div>
      <button
        className="prev"
        onClick={() => {
          updateIndex(activeIndex - 1);
        }}
      >
        Prev
      </button>
      <button
        className="next"
        onClick={() => {
          updateIndex(activeIndex + 1);
        }}
      >
        Next
      </button>
      <div className="indicators">
        {React.Children.map(children, (child, index) => {
          return (
            <button
              className={
                `${index === activeIndex ? "active" : ""}` + " progress"
              }
              onClick={() => {
                updateIndex(index);
              }}
            >
              {/* {index+1} */}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;

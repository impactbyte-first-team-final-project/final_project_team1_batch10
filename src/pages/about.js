import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";

import "./about.css";
import gambar1 from "../assets/img/masdanu.jpg";
import gambar2 from "../assets/img/mbaksarah.jpg";
import gambar3 from "../assets/img/masmiftah.jpg";

const items = [
  {
    src: gambar1,
    caption:
      "I know feel confident enough to find high quality events and manage social responbility. Blood Donors makes all of this so much easier!. "
  },
  {
    src: gambar2,
    caption:
      "with this website I can find out and can channel humanitarian activities by knowing what events I can take for blood donations "
  },
  {
    src: gambar3,
    caption:
      "with this website I can find out about events related to social responbility and blood donation"
  }
];

const About = props => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map(item => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img
          src={item.src}
          alt={item.altText}
          width="150"
          height="150"
          style={{ borderRadius: "50%", position: "relative", left: "44%" }}
        />
        <CarouselCaption captionText={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      className="carousel-height"
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
};

export default About;

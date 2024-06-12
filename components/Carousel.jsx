import React from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { imgArray, titles } from "./Rentequipment";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464,
    },
    items: 3,
    partialVisibilityGutter: 100,
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0,
    },
    items: 3,
    partialVisibilityGutter: 30,
  },
};

const Carrousel = () => {
  return (
    <div className="carr">
      <Carousel responsive={responsive}>
        {imgArray.map((img, index) => (
          <div className="card" key={index}>
            <Image
              className="img"
              src={img}
              width={200}
              height={200}
              alt="img"
            />
            <p>{titles[index]}</p>
          </div>
        ))}
      </Carousel>

      <div
        style={{
          paddingBottom: "30px",
          position: "relative",
        }}
      ></div>
    </div>
  );
};

export default Carrousel;

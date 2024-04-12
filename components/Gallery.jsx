import { motion } from "framer-motion";
import Image from "next/image";

import instagram from "../public/instagram.svg";
import facebook from "../public/facebook.svg";
import soundcloud from "../public/soundcloud.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Gallery({  imgArray,disc }) {
  return (
    <div>
    
        <h1 className="hide">/ Gallery</h1>
      

      <div
        className="gallerySector"
        style={{
          paddingBottom: "30px",
          position: "static",
        }}
      >
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 1,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 1,
            },
          }}
          rewind={true}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {imgArray?.map((pic, index) => (
            <div key={pic}>
              <div className="titledj"> 
              {disc && disc[index] && <h1>{disc[index]}</h1>}

              </div>

              <Image
                src={pic}
                width={500}
                height={500}
                alt="Picture of the author"
                style={{
                  display: "block",
                  height: "90%",
                  margin: "auto",
                  width: "100%",
                }}
              />
            </div>
                      ))}

        </Carousel>


        
      </div>
      
    </div>


  );
}


import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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
      min: 464
    },
    items: 3,
    partialVisibilityGutter: 100
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0
    },
    items: 3,
    partialVisibilityGutter: 30
  },
};

const Carrousel = () => {
  return (
    <div className="carr">
      <Carousel responsive={responsive}>
       
      <div className="card">
            <img className="img" src="https://scontent.ftbs5-2.fna.fbcdn.net/v/t39.30808-6/369777056_348100631017386_2721602271975261732_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFKqHGc1uGR8BIqe0msT8_UzRjywSu6-oTNGPLBK7r6hLRdk0RIHo_-mTh6WjxiqZ2NdFq-V5g1Tg-3jK5f_Lm2&_nc_ohc=oMqo6Cj-nLcAb6j1Ygo&_nc_ht=scontent.ftbs5-2.fna&oh=00_AfBUrFBBev3j3p-R7bGu2k8U9HLKwzpFOqn30mRBj2zmUQ&oe=66138367" alt="" />
            <h2>Levs</h2>
            <p>ხმის ინჟინერი</p>
        </div>
        <div className="card">
            <img className="img" src="https://scontent.ftbs5-2.fna.fbcdn.net/v/t39.30808-6/369777056_348100631017386_2721602271975261732_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFKqHGc1uGR8BIqe0msT8_UzRjywSu6-oTNGPLBK7r6hLRdk0RIHo_-mTh6WjxiqZ2NdFq-V5g1Tg-3jK5f_Lm2&_nc_ohc=oMqo6Cj-nLcAb6j1Ygo&_nc_ht=scontent.ftbs5-2.fna&oh=00_AfBUrFBBev3j3p-R7bGu2k8U9HLKwzpFOqn30mRBj2zmUQ&oe=66138367" alt="" />
            <h2>Levs</h2>
            <p>ხმის ინჟინერი</p>
        </div>
        <div className="card">
            <img className="img" src="https://scontent.ftbs5-2.fna.fbcdn.net/v/t39.30808-6/369777056_348100631017386_2721602271975261732_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFKqHGc1uGR8BIqe0msT8_UzRjywSu6-oTNGPLBK7r6hLRdk0RIHo_-mTh6WjxiqZ2NdFq-V5g1Tg-3jK5f_Lm2&_nc_ohc=oMqo6Cj-nLcAb6j1Ygo&_nc_ht=scontent.ftbs5-2.fna&oh=00_AfBUrFBBev3j3p-R7bGu2k8U9HLKwzpFOqn30mRBj2zmUQ&oe=66138367" alt="" />
            <h2>Levs</h2>
            <p>ხმის ინჟინერი</p>
        </div>
        <div className="card">
            <img className="img" src="https://scontent.ftbs5-2.fna.fbcdn.net/v/t39.30808-6/369777056_348100631017386_2721602271975261732_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFKqHGc1uGR8BIqe0msT8_UzRjywSu6-oTNGPLBK7r6hLRdk0RIHo_-mTh6WjxiqZ2NdFq-V5g1Tg-3jK5f_Lm2&_nc_ohc=oMqo6Cj-nLcAb6j1Ygo&_nc_ht=scontent.ftbs5-2.fna&oh=00_AfBUrFBBev3j3p-R7bGu2k8U9HLKwzpFOqn30mRBj2zmUQ&oe=66138367" alt="" />
            <h2>Levs</h2>
            <p>ხმის ინჟინერი</p>
        </div>
        <div className="card">
            <img className="img" src="https://scontent.ftbs5-2.fna.fbcdn.net/v/t39.30808-6/369777056_348100631017386_2721602271975261732_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFKqHGc1uGR8BIqe0msT8_UzRjywSu6-oTNGPLBK7r6hLRdk0RIHo_-mTh6WjxiqZ2NdFq-V5g1Tg-3jK5f_Lm2&_nc_ohc=oMqo6Cj-nLcAb6j1Ygo&_nc_ht=scontent.ftbs5-2.fna&oh=00_AfBUrFBBev3j3p-R7bGu2k8U9HLKwzpFOqn30mRBj2zmUQ&oe=66138367" alt="" />
            <h2>Levs</h2>
            <p>ხმის ინჟინერი</p>
        </div>
      </Carousel>

      <div
  style={{
    paddingBottom: '30px',
    position: 'relative'
  }}
>
  
</div>
      
    </div>
  );
};

export default Carrousel;

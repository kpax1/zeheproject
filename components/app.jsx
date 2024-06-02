"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import Head from "./Header";
import Services from "./Services";
import Aboutus from "./Aboutus";
import Gallery from "./Gallery";
import RootLayout from "@/app/layout";
import Akk from "./Accordion";
import Link from "next/link";
import { useExampleContext } from "@/app/ExampleContext";
const imgArray = ["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg", "/6.jpg"];

function App() {
  const [services, setServices] = useState(0);
  const {aboutRef,myDivRef,galleryRef, handleClick} = useExampleContext();

 

  return (
    <>
      <div>
        <video
          className="video"
          src={require("../public/video.mp4")}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="bg-overley"> </div>
      </div>

      <Content ref={myDivRef}>
        <Services services={services} setServices={setServices} />
      </Content>

    <div ref={aboutRef}>

    <Aboutus />
    </div>
      <motion.div
        className="o"
        initial={{ opacity: 0.1 }}
        animate={{ opacity: 1, transform: "scale(1)" }}
        transition={{ type: "spring" }}
        viewport={{once:true}}
      
      >
        <div className="descr">
          <div className="descrHeader">
            <h1>Book us online</h1>
            <h6>Rent a studio, or get information about our services</h6>
            <div></div>
            <div className="orderbuttons">
              <button className="order" onClick={() => handleClick(myDivRef)}>
                Services
              </button>


            
                <button id='bookid' className="order">
                <Link href='/booking' className="linkcolor">Book now</Link>
                

                </button>
             
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="ordersection"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: -10, opacity: 1 }}
        transition={{ type: "spring" }}
      >
        <div className="galleryAndfaqTitle">
          <h1> / Gallery</h1>
          <h1> / FAQ</h1>
        </div>

        <div ref={galleryRef} className="ainiko">
          <Gallery  imgArray={imgArray} />
          <Akk />
        </div>
      </motion.div>
    </>
  );
}

export default App;

const Content = styled.div`
  background-color: rgba(255, 255, 255, 0.043);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

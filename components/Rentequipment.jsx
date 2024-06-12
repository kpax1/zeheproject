"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const imgArray = [
  "/rentitems/cdj.png",
  "/rentitems/cdj2.png",
  "/rentitems/mixing.png",
  "/rentitems/Xone-96-Top2.png",
  "/rentitems/dinamic.png",
  "/rentitems/A1mSSNDRY5L.png",
  "/rentitems/Xone92-large.png",
];
export const titles = [
  "CDJ 2000 NXS2",
  "CDJ 3000",
  "Xone -96-Top2",
  "Xone-96-Top2",
  "Yamaha",
  "KRK",
  "Xone92",
];

const Rentequipment = () => {
  return (
    <motion.div
      className="ordersection"
      initial={{ y: 15, opacity: 0 }}
      whileInView={{ y: -0, opacity: 1 }}
      transition={{ type: "spring" }}
    >
      <div>
        <div className="outerContainer">
          <div className="container1">
            <Image
              className="rentimg"
              src={imgArray[0]}
              width={300}
              height={300}
              alt="pic"
            />
            <h2>{titles[0]}</h2>
          </div>
          <div className="container2">
            <h2>{titles[1]}</h2>
            <Image
              className="rentimg2"
              src={imgArray[1]}
              width={300}
              height={300}
              alt="pic"
            />
          </div>
        </div>

        <div className="outerContainer">
          <div className="container1">
            <Image
              className="rentimg"
              src={imgArray[2]}
              width={300}
              height={300}
              alt="pic"
            />
            <h2>{titles[2]}</h2>
          </div>

          <div className="container2">
            <h2>{titles[3]}</h2>
            <Image
              className="rentimg2"
              src={imgArray[3]}
              width={300}
              height={300}
              alt="pic"
            />
          </div>
        </div>

        <div className="outerContainer">
          <div className="container1">
            <Image
              className="rentimg"
              src={imgArray[4]}
              width={300}
              height={300}
              alt="pic"
            />
            <h2>{titles[4]}</h2>
          </div>

          <div className="container2">
            <h2>{titles[5]}</h2>
            <Image
              className="rentimg2"
              src={imgArray[5]}
              width={300}
              height={300}
              alt="pic"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Rentequipment;

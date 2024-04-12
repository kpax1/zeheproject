"use client";
import React from "react";
import Head from "./Header";
import { useState, useRef } from "react";
import RightMenu from "./Menu";

import { useExampleContext } from "@/app/ExampleContext";

const Nav = () => {
  const { aboutRef, myDivRef, galleryRef, handleClick, isOpen, setOpen } =
    useExampleContext();

  return (
    <header >
      <Head />

      {isOpen && (
        <RightMenu
          myDivRef={myDivRef}
          aboutRef={aboutRef}
          handleClick={handleClick}
          galleryRef={galleryRef}
        />
      )}
    </header>
  );
};

export default Nav;

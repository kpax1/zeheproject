'use client'
import React, { createContext, useState, useContext, useRef } from 'react';

// Create the context
const ExampleContext = createContext();

// Create a custom hook to access the context
export const useExampleContext = () => useContext(ExampleContext);

// Create the context provider
export const ExampleProvider = ({ children }) => {
    const [isOpen, setOpen] = useState(false);
    const aboutRef = useRef(null);
    const myDivRef = useRef(null);
    const galleryRef = useRef(null);

  const handleClick = (ref) => {
    console.log('ref current is ', ref.current)
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }

    setOpen(false);
  };


  return (
    <ExampleContext.Provider value={{ handleClick, myDivRef, aboutRef, galleryRef,isOpen,setOpen }}>
    {children}
    </ExampleContext.Provider>
  );
};

export default ExampleContext;

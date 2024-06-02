import React from "react";
import Button from "@/components/button";
import Datadisplay from "@/components/Datadisplay";
const page = async ({searchParams}) => {
    
  console.log('searchparams.author from page' , searchParams.author);
  return (
    <>
      <Button />
      <Datadisplay author={searchParams.author}/>
      
    </>
  );
};

export default page;

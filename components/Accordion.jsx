import React from 'react';
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import styled from 'styled-components';

const Akk = () => {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <StyledAccordion
      variant='splitted'
      defaultExpandedKeys={["2"]}
    >
      <AccordionItem key="1" aria-label="how to rent studio" title="how to rent studio">
        <div className='faqtext'>
          {defaultContent}
        </div>
      </AccordionItem>
      <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
        <div className='faqtext'>
          {defaultContent}
        </div>
      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
        <div className='faqtext'>
          {defaultContent}
        </div>
      </AccordionItem>
    </StyledAccordion>
  );
}
export default Akk;

const StyledAccordion = styled(Accordion)`
  margin-bottom: 2em;
  width: 99%;
  font-family: "Orbitron", sans-serif;  
  border-radius: 8px;
  letter-spacing: 2px;
  padding-bottom: 2em;
  font-weight: 400;
  background-color: rgba(255, 0, 0, 0.077);

  @media (min-width: 700px) {
    margin-right: 2em;
    margin-left: 2em;
    background-color: red;

  }
`;
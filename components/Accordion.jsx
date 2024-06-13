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
  background-color: red;

  @media (min-width: 700px) {
    mix-width: 500px;
    margin-right: 4em;
    margin-top: 4em;
    margin-left: 2em;
    background-color: -webkit-linear-gradient(90deg, #2f6f67,#000000,#2a7942);/* Chrome 10-25, Safari 5.1-6 */                          background: linear-gradient(90deg, #2f6f67,#000000,#2a7942);/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */                                             
  }
`;
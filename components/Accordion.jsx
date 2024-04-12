import React from 'react'
import {Accordion, AccordionItem} from "@nextui-org/accordion";


const Akk = () => {
    const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    return (
        <Accordion className='accordionSector'
        variant='splitted'
        defaultExpandedKeys={["2"]}
        >
          <AccordionItem className='item' key="1" aria-label="how to rent studio" title="how to rent studio">
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
        </Accordion>
      );
    }
export default Akk
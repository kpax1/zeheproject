import React from 'react'
import { motion } from "framer-motion";
import Image from 'next/image'
import mapscreen from '@/public/rentitems/mapscreen.png'
const Footer = () => {
  return (
    <footer>

      <aside>
        <div>
        <h6>
            grosestrasse 6 am mein
          </h6>
          <h6>
            nwschool.gmail.com
          </h6>
          <h6>
            555445455
          </h6>

        </div>
    
          <Image src={mapscreen} alt='map'  width={250}
      height={200}/>
      </aside>

        



        <div
      
      >
        
        <h6 className="bottomtext">
          ©2023 All right reserved
          <span className="logonottom">𝔫𝔢𝔴𝔰𝔠𝔥𝔬𝔬𝔩</span>
          
        </h6>
        </div>
        
    </footer>
  )
}

export default Footer
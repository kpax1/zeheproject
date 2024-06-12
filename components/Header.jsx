'use client'
import { Divide as Hamburger } from "hamburger-react";
import { useExampleContext } from "@/app/ExampleContext";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from 'next/navigation'


export default function Head() {
const  {isOpen, setOpen} = useExampleContext();
const {handleClick, myDivRef,aboutRef,galleryRef} = useExampleContext()
const pathname = usePathname()


const [isMobile, setIsMobile] = useState(true);


useEffect(() => {
  // Add event listener to detect window resize
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 926); // Adjust breakpoint as needed
  };

  // Initial check on mount
  handleResize();

  // Add event listener
  window.addEventListener('resize', handleResize);

  // Remove event listener on cleanup
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);

  return (
    <div className="nav">
      <div>
        <a href="/" className="logo">
          𝔫𝔴𝔰𝔠
        </a>
      </div>
  

      {isMobile ? 
        <div className="menuicon">
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          color="#ffffff"
          easing="ease-in"
          hideOutline={true}
          size={28}
        />
      </div> :
    
    <nav>
      <ul className="headerbuttons">
        <li>
        <Link className="headerbt" id='bookbttn' href="/booking">
            Book a studio
          </Link>
        </li>

        <li>
        <Link className="headerbt"  href="/courses">
            Courses
          </Link>
        </li>

       
        <li>
        <Link className="headerbt"  href="/rent">
            Rent equipments
          </Link>
        </li>

       {pathname === '/' ? (<><li>
              <Link className="headerbt" href='#' onClick={() => handleClick(myDivRef)}>Services</Link>

            </li><li>
                <Link className="headerbt" href='#' onClick={() => handleClick(galleryRef)}>Gallery</Link>

              </li></>): null }


      </ul>


    </nav>
    
      }

      
    </div>
  );
}

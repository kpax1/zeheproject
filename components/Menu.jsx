import { styled } from 'styled-components';

import { useExampleContext } from '@/app/ExampleContext';
import Link from 'next/link';
export default function RightMenu() {
  const {handleClick, myDivRef,aboutRef,galleryRef} = useExampleContext()
  return (
    <>
        
        <Menu>
          <ul>
            <li className="menuitem wow" onClick={handleClick}>
                <Link href={'/booking'}> Book a studio</Link>
            </li>
            <li className="menuitem" onClick={handleClick}>
                <Link href={'/courses'}> Courses</Link>
            </li>

            <li className="menuitem" onClick={()=>handleClick(myDivRef)}>
            <Link href={''}> Services</Link>

            </li>

            <li className="menuitem" onClick={()=>handleClick(aboutRef)}>
                <Link href={''}> About us</Link>
            </li>

            <li className="menuitem" onClick={()=>handleClick(galleryRef)}>
            <Link href={''}> Gallery</Link>

            </li>

           

           
          </ul>   

        
        
        
        </Menu>
      
    </>
  )
}


const Menu = styled.nav`
background-color: rgba(0, 0, 0, 0.97);
position: absolute;
  top: 3.1em;
  height: 100vh;
  width: 100vw;
  right: 0;
  display: flex;
  flex-direction: column;
  z-index: 100;
  font-family: 'Orbitron', sans-serif;  border-radius: 8px;

`;
import { styled } from 'styled-components';

import { useExampleContext } from '@/app/ExampleContext';

export default function RightMenu() {
  const {handleClick, myDivRef,aboutRef,galleryRef} = useExampleContext()
  return (
    <>
        
        <Menu>
        <div className="menuitem" onClick={()=>handleClick(aboutRef)}>
            about us
          </div>
          <div className="menuitem" onClick={()=>handleClick(aboutRef)}>
            about us
          </div>
          <div className="menuitem" onClick={()=>handleClick(myDivRef)}>
            contact
          </div>
          <div className="menuitem" onClick={()=>handleClick(myDivRef)}>Book </div>
          <div className="menuitem wow" onClick={()=>handleClick(galleryRef)}>gallery</div>
        </Menu>
      
    </>
  )
}


const Menu = styled.nav`
background-color: rgba(0, 0, 0, 0.97);
position: absolute;
  top: 3.1em;
  height: 100vh;
  width: 50vw;
  right: 0;
  display: flex;
  flex-direction: column;
  z-index: 100;
  font-family: 'Orbitron', sans-serif;  border-radius: 8px;

`;
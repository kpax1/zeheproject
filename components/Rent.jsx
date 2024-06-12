
import Gallery from "./Gallery";
const Array = ["/rentitems/cdj.png", "/rentitems/cdj2.png", "/6.jpg"];
const disc = ['behringer X 32', 'CDJ 2000 NXS2', 'CDJ 3000','Xone 92','Xone 96-Top2']
import { styled } from "styled-components";

export default function Rent() {
  return (
    <RentSector>
            <Gallery imgArray={Array} disc={disc}/>

     

    </RentSector>
  );
}

const RentSector = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 2em;
`;



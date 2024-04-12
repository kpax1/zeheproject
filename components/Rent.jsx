import cdj from "../public/rentitems/cdj.png";
import cd2 from "../public/rentitems/cdj2.png";
import xone92 from "../public/rentitems/Xone92-large.png";
import xone96 from "../public/rentitems/Xone-96-Top2.png";
import yamaha from "../public/rentitems/dinamic.png";
import mix from "../public/rentitems/mixing.png";
import dinamicsome from "../public/rentitems/91bfiQf6nrL.png";
import Gallery from "./Gallery";
import krk from "../public/rentitems/A1mSSNDRY5L.png";
const Array = ["/rentitems/cdj.png", "/rentitems/cdj2.png", "/6.jpg"];
const disc = ['behringer X 32', 'CDJ 2000 NXS2', 'CDJ 3000','Xone 92','Xone 96']
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



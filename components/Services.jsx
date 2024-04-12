/* eslint-disable react/jsx-no-comment-textnodes */
import { motion, Variants } from "framer-motion";
import Image from 'next/image'
import back from "../public/back.svg";
import Rent from "./Rent";
import Carrousel from './Carousel'
export const item = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transform: "scale(1)" },
};

export default function Services({ services, setServices }) {
  return (
    <>

    <motion.section
      className="content"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transform: "scale(1)" }}
    >


  
      <div className="ordersection">
        {services === 0 && <h1>/ Our Services</h1>}
        {services === 1 && <h1>/ Rent a studio</h1>}
        {services === 2 && <h1>/ Rent equipment</h1>}
        {(services === 1 || services === 2) && (
          // eslint-disable-next-line @next/next/no-img-element
          <Image
            src={back}
            className="back"
            alt=""
            onClick={() => setServices(0)}
          />
        )}
      </div>
      <motion.div className="text" variants={item}>
        {services === 0 && (
          <>


            <p className="servicedescription">
            <span className="firsword">Newschool </span> 
            
            is now available for
            rental, if you’re a seasoned pro or just starting out in the
            world of DJing.
            <span className="hiding">so make uour space better and rent to us get a cool experience 
            </span>
            </p>
           

            
          </>


        )}

{services === 1 && (
          <>
          <p className="studiorentDecrb">

            <span className="firsword">Use </span>our space to record your next mix, practice your sets before a big gig, or even host a listening party for your friends.

            <p className="instructortext">
            <span className="firsword"> INSTRUCTOR</span> EXPLAINS TECHNICAL DETAILS AND HELPS YOU TO UNDERSTAND BASICS IN A VERY SHORT PERIOD OF TIME. SO IF YOU’RE NEW, WE RECOMMEND TO BOOK THE REPETITION ROOM WITH OUR INSTRUCTOR.

            </p>
            </p>

          </>
        )}
      </motion.div>


      {services === 0 && (
        <>
        <div className="buttons">
          <motion.div
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1, transform: "scale(1)" }}
            transition={{ type: "spring" }}
          >
            <button
              className="rentstudio blackbutton"
              onClick={() => setServices(1)}
            >
              Rehearsal Studio
            </button>
          </motion.div>

          <motion.div
            className=""
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1, transform: "scale(1)" }}
            transition={{ type: "spring" }}
          >
            <button
              className="rentstudio pink-button"
              onClick={() => setServices(2)}
            >
              Rent equipments
            </button>



          </motion.div>
         
        </div>

    
        </>
        
           
       
      )}
      {services === 1 && (
        <>
          <motion.button
            className="call"
            onClick={() => window.open("tel:+995511332212")}
            initial={{ y: 100, opacity: 0.1 }}
            whileInView={{ y: 0, opacity: 1 }}
          >
            call
          </motion.button>

          <motion.button
            className="call"
            initial={{ y: 100, opacity: 0.1 }}
            whileInView={{ y: 0, opacity: 1 }}
          >
            <a href="https://calendar.google.com/calendar/u/0/embed?src=nwscrecords@gmail.com&ctz=Asia/Tbilisi&fbclid=IwAR2jCSWxhaQq0W0aqAftsvmFCuKrt67f8XCU7pweM4zemCMn2MsgpfsK-Kw">
              Book Online
            </a>
          </motion.button>

          <motion.button
            className="call"
            onClick={() => window.open("tel:+995511332212")}
            initial={{ y: 100, opacity: 0.1 }}
            whileInView={{ y: 0, opacity: 1 }}
          >
            about us
          </motion.button>

        </>
      )}


      {services === 2 && <Rent />}
      <div>
      </div>
    </motion.section>



      <Carrousel />
    </>


  );
}

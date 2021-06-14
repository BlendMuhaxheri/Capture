import React from "react"
import home1 from "../img/home1.png"
// styled
import {About,Description,Hide,Image} from "../Style"
// framer motion
import {motion} from "framer-motion";
import {titleAnim,fade,photoAnim} from '../animation'
import Wave from "./Wave"


const AboutSection =()=>{
  
    return(
        <About>
            <Description>
                <motion.div  className='title'>
                    <Hide>
                        <motion.h2 variants={titleAnim} >We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim} >your <span>dreams</span> come </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim} >true.</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>Contact us for any photography or videography ideas that ypu have.We have professionals with amazing skills</motion.p>
                <motion.button variants={fade}>Contact Us</motion.button>
            </Description>
            <Image>
                <motion.img variants={photoAnim} src={home1} alt='guy with the camera'/>
            </Image>
            <Wave/>
        </About>
    )
}





export default AboutSection;
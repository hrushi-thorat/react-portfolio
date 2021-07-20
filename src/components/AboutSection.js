import React from "react";
import home1 from "../img/home1.JPG";
import Wave from "./Wave";
import { About, Description, Hide, Image } from "../style";
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../pages/Animation";
const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div className="title">
          <Hide>
            <motion.h2 variants={titleAnim}>Making Your Paper</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              Ball <span>Into</span> Paper
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>Plane</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          A Creative Front End Developer trying My Hands On Designing
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt="guy with a camera" />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;

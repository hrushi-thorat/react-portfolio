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
        <motion.p variants={fade}>A Creative Front End Developer.</motion.p>

        <motion.a
          href="https://github.com/hrushi-thorat"
          rel="noreferrer"
          target="_blank"
        >
          <motion.button variants={fade}>Github</motion.button>
        </motion.a>
        <motion.a
          href="https://drive.google.com/file/d/1-zbnuc8iNlTbNPmchMItSEeBnUB6KjWG/view?usp=sharing"
          rel="noreferrer"
          target="_blank"
        >
          <motion.button variants={fade}>Resume</motion.button>
        </motion.a>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt="guy with a camera" />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;

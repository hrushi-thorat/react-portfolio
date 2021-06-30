import React from "react";
import home1 from "../img/home1.png";
import Wave from "./Wave";
import styled from "styled-components";
import { About, Description, Hide, Image } from "../style";
import { motion } from "framer-motion";
import { TitleAnimation, PhotoAnimation } from "../pages/Animation";
const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <motion.h2 variants={TitleAnimation}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={TitleAnimation}>
              your <span>dreams</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={TitleAnimation}>come true</motion.h2>
          </Hide>
        </div>
        <p>
          Contact us for any photography or videography ideas that you have we
          have profectionals with amazing skills to help you achive it{" "}
        </p>
        <button>Contact us</button>
      </Description>
      <Image>
        <img src={home1} alt="guy with a camera" />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;

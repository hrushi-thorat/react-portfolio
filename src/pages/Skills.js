import React from "react";
import { motion } from "framer-motion";
import { lineAnim, pageAnimation, photoAnim, titleAnim } from "./Animation";
import styled from "styled-components";
import { Hide } from "../style";
import html from "../img/html.svg";
import css from "../img/css.svg";
import js from "../img/js.svg";
import figma from "../img/figma.svg";
import sass from "../img/sass.svg";
import react from "../img/react.svg";
import java from "../img/java-icon.svg";

const Skills = () => {
  return (
    <Skill exit="exit" variants={pageAnimation} initial="hidden" animate="show">
      <Heading>
        <Hide>
          <motion.h2 variants={titleAnim}>
            My Skills
            <motion.div variants={lineAnim} className="line"></motion.div>
          </motion.h2>
        </Hide>
        <Hide>
          <motion.h3 variants={titleAnim}>Front-end</motion.h3>
        </Hide>
      </Heading>
      <SkillSetContainer>
        <SkillSet>
          <SkillCard variants={photoAnim}>
            <motion.img variants={photoAnim} src={html} alt="html" />
          </SkillCard>
          <SkillCard variants={photoAnim}>
            <motion.img variants={photoAnim} src={css} alt="html" />
          </SkillCard>
          <SkillCard variants={photoAnim}>
            <motion.img variants={photoAnim} src={js} alt="html" />
          </SkillCard>
          <SkillCard variants={photoAnim}>
            <motion.img variants={photoAnim} src={sass} alt="html" />
          </SkillCard>
          <SkillCard variants={photoAnim}>
            <motion.img variants={photoAnim} src={react} alt="html" />
          </SkillCard>
          <SkillCard variants={photoAnim}>
            <motion.img variants={photoAnim} src={figma} alt="html" />
          </SkillCard>
        </SkillSet>
        <Hide>
          <motion.h3 variants={titleAnim}>
            Languages familar with
            <motion.div variants={lineAnim} className="line"></motion.div>
          </motion.h3>
        </Hide>
        <SkillCard variants={photoAnim}>
          <motion.img variants={photoAnim} src={java} alt="java" />
        </SkillCard>
      </SkillSetContainer>
    </Skill>
  );
};
const Skill = styled(motion.div)`
  height: 80vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 1rem;
  overflow-y: hidden;
`;
const Heading = styled(motion.div)`
  text-align: center;

  h2 {
    color: rgba(255, 255, 255, 80%);
    font-size: 2rem;
    .line {
      height: 0.3rem;
      background: #23d992;
      margin-top: 0.5rem;
      width: 100%;
      font-weight: 700;
    }
  }
  h3 {
    font-weight: lighter;
    font-size: 1.3rem;
    margin-top: 1rem;
    color: rgba(255, 255, 255, 70%);
  }
`;
const SkillSetContainer = styled(motion.div)`
  margin: 0.6rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h3 {
    .line {
      height: 0.3rem;
      background: #23d992;
      margin-top: 0.5rem;
      width: 100%;
      font-weight: 700;
    }
    font-weight: lighter;
    font-size: 1.8rem;
    margin-top: 0.6rem;
    color: rgba(255, 255, 255, 70%);
  }
`;
const SkillSet = styled(motion.div)`
  width: 50%;
  display: flex;
  flex-wrap: wrap;
`;

const SkillCard = styled(motion.div)`
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
  background: #c4c4c4;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;

  img {
    padding-top: 0.8rem;
    height: 80%;
    width: 75%;
  }
`;
export default Skills;

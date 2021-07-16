import React from "react";
//Import Icons
import html from "../img/html.svg"
import css from "../img/css.svg"
import js from "../img/js.svg"
import figma from "../img/figma.svg"
import sass from "../img/sass.svg"
import react from "../img/react.svg"
import java from "../img/java-icon.svg"


// import Styles
import styled from "styled-components";
import { motion } from "framer-motion";
import { lineAnim } from "../pages/Animation";
const ServicesSection = () => {
  return (
    <Skills>
      <Heading>
      <h2>My Skills
        <motion.div variants={lineAnim} className="line"></motion.div>
      </h2>

    <h3>Front-end</h3>
      </Heading>
      <SkillSetContainer>
      <SkillSet>
<SkillCard>
<img src={html} alt="html" />
</SkillCard>
<SkillCard>
<img src={css} alt="html" />
</SkillCard>
<SkillCard>
<img src={js} alt="html" />
</SkillCard>
<SkillCard>
<img src={sass} alt="html" />
</SkillCard>
<SkillCard>
<img src={react} alt="html" />
</SkillCard>
<SkillCard>
<img src={figma} alt="html" />
</SkillCard>
      </SkillSet>
<h3>Languages familar with
<motion.div variants={lineAnim} className="line"></motion.div>
</h3>
<SkillCard>
  <img src={java} alt="java" />
</SkillCard>
      </SkillSetContainer>

    </Skills>
  );
};
const Skills=styled(motion.div)`
height: 100vh;
display: flex;
align-items: center;
flex-direction: column;
margin-top:1rem;
`
const Heading=styled(motion.div)`
text-align:center;

h2{
  color: rgba(255,255,255,80%);
  font-size: 3rem;
  .line {
    height: 0.3rem;
    background: #23d992;
    margin-top: 0.5rem;
    width: 100%;
    font-weight: 700;
  }
}
h3{
  font-weight:lighter;
  font-size: 1.3rem;
  margin-top: 1rem;
  color: rgba(255,255,255,70%);
}
`
const SkillSetContainer=styled(motion.div)`
margin:1rem auto;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
h3{
  .line {
    height: 0.3rem;
    background: #23d992;
    margin-top: 0.5rem;
    width: 100%;
    font-weight: 700;
  }
  font-weight:lighter;
  font-size: 1.8rem;
  margin-top: 2rem;
  color: rgba(255,255,255,70%);
}
`
const SkillSet=styled(motion.div)`
width: 50%;
display: flex;
flex-wrap: wrap;

`

const SkillCard=styled(motion.div)`
height: 6.5rem;
width: 6.5rem;
border-radius: 50%;
background: #C4C4C4;
display: flex;
align-items: center;
justify-content: center;
margin: 1rem;

img{
  padding-top: 0.8rem;
  height: 80%;
  width: 75%;
}
`
export default ServicesSection;

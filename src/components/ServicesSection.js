import React from "react";
//Import Icons
import html from "../img/html.svg"
import css from "../img/css.svg"
import js from "../img/js.svg"
import figma from "../img/figma.svg"
import sass from "../img/sass.svg"
import react from "../img/react.svg"


// import Styles
import styled from "styled-components";
import { motion } from "framer-motion";
import { lineAnim } from "../pages/Animation";
const ServicesSection = () => {
  return (
    <Skills>
      <Heading>
      <h2>My Skills
        <div variants={lineAnim} className="line"></div>
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

      </SkillSetContainer>
    </Skills>
  );
};
const Skills=styled(motion.div)`
height: 100vh;
display: flex;
align-items: center;
justify-content: space-between;
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
    margin-bottom: 1rem;
    width: 100%;
  }
}
h3{
  font-size: 1.3rem;
  margin-top: 1rem;
  color: rgba(255,255,255,70%);
}
`
const SkillSetContainer=styled(motion.div)`

margin: auto;
display: flex;
align-items: center;
justify-content: center;
`
const SkillSet=styled(motion.div)`
width: 50%;
display: flex;
flex-wrap: wrap;

`

const SkillCard=styled(motion.div)`
height: 7.5rem;
width: 7.5rem;
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

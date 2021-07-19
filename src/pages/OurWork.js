import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// Images

import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";

import { motion } from "framer-motion";
import {
  sliderContainer,
  slider,
  pageAnimation,
  fade,
  photoAnim,
  lineAnim,
} from "../pages/Animation";
import { useScroll } from "../components/useScroll";
import { ProjectDetails } from "../movieState";
const OurWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  
  return (
    <Work
      style={{ background: "#fff" }}
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      {ProjectDetails.map((detail)=>(
      <Movie   >
        <Title>
        <motion.h2 variants={fade}>{detail.title}</motion.h2>
        <a href={detail.githhub}>
        <Button variants={fade}>GithHub</Button>
        </a>
        </Title>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <a href={detail.liveSite}>
          <Hide>
            <motion.img variants={photoAnim} src={detail.cover} alt="athlete" />
          </Hide>
          </a>
      </Movie>
))}
      <Movie ref={element} variants={fade} animate={controls} initial="hidden">
        <h2>The Racer</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/the-racer">
          <img src={theracer} alt="theracer" />
        </Link>
      </Movie>

      <Movie
        ref={element2}
        variants={fade}
        animate={controls2}
        initial="hidden"
      >
        <h2>Good Times</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/good-times">
          <img src={goodtimes} alt="goodtimes" />
        </Link>
      </Movie>
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 2rem 6rem;
  @media (max-width: 1300px) {
    
    padding: 2rem 2rem;
  }
  h2 {
    padding: 1rem 0rem;
  }

`;
const Movie = styled(motion.div)`
  padding: 0rem 6rem;

  .line {
    height: 0.5rem;
    background: #23d992;
    margin-bottom: 1rem;
    width: 100%;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;
const Title=styled(motion.div)`
display: flex;
align-items: center;
justify-content: space-between;
`
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: 8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;
const Button=styled(motion.button)`
color:black;
`

export default OurWork;

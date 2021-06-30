import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// Images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";

import { motion } from "framer-motion";
import { PageAnimation, LineAnim, Slider, SliderContainer } from "./Animation";
const OurWork = () => {
  return (
    <Work
      style={{ background: "#ffff" }}
      // exit="exit"
      variants={PageAnimation}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={SliderContainer}>
        <Frame1 variants={Slider}></Frame1>
        <Frame2 variants={Slider}></Frame2>
        <Frame3 variants={Slider}></Frame3>
        <Frame4 variants={Slider}></Frame4>
      </motion.div>
      <Movie>
        <h2>Athelete</h2>
        <motion.div
          className="line"
          variants={LineAnim}
          initial="hidden"
          animate="show"
        ></motion.div>
        <Link to="/work/the-athlete">
          <img src={athlete} alt="Athelete" />
        </Link>
      </Movie>
      <Movie>
        <h2>Racer</h2>
        <motion.div
          className="line"
          variants={LineAnim}
          initial="hidden"
          animate="show"
        ></motion.div>
        <Link to="/work/the-racer">
          <img src={theracer} alt="The Racer " />
        </Link>
      </Movie>
      <Movie>
        <h2>Good Times</h2>
        <motion.div
          className="line"
          variants={LineAnim}
          initial="hidden"
          animate="show"
        ></motion.div>
        <Link to="/work/good-times">
          <img src={goodtimes} alt="Good Times" />
        </Link>
      </Movie>
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 2rem 6rem;
  h2 {
    padding: 1rem 0rem;
  }
`;
const Movie = styled.div`
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

const Frame1 = styled(motion.div)`
  position: fixed;
  z-index: 2;
  top: 10%;
  background: #fffebf;
  left: 0;
  width: 100%;
  height: 100vh;
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
export default OurWork;

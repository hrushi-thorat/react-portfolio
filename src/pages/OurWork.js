import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// Images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";

import { motion } from "framer-motion";
import { PageAnimation } from "./Animation";
const OurWork = () => {
  return (
    <Work style={{background:"#ffff"}} exit="exit" variants={PageAnimation} initial="hidden" animate="show" >
      <Movie>
          <h2>Athelete</h2>
          <div className="line"></div> 
          <Link to="/work/the-athlete">
          <img src={athlete} alt="Athelete" />
          </Link>
      </Movie>
      <Movie>
          <h2>Racer</h2>
          <div className="line"></div>
          <Link to="/work/the-racer">
          <img src={theracer} alt="The Racer " />
          </Link>
      </Movie>
      <Movie>
          <h2>Good Times</h2>
          <div className="line"></div>
          <Link to="/work/good-times">
          <img src={goodtimes } alt="Good Times" />
          </Link>
      </Movie>
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 2rem 6rem;
h2{
    padding: 1rem 0rem;
}
`;
const Movie = styled.div`
  padding: 0rem 6rem;
  .line{
      height: 0.5rem;
      background: #cccccc;
      margin-bottom: 1rem;
      width: 100%;
  }
  img{
      width: 100%;
      height: 70vh;
      object-fit: cover;
  }
`;
export default OurWork;

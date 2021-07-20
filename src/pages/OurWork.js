import React from "react";
import Dropdown from "../components/Dropdown";
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
import {
  JavascriptProjectDetails,
  ReactProjectDetails,
  FrontProjectDetails,
  HtmlProjectDetails,
} from "../movieState";
import { useState } from "react";

const OurWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();

  const [javascript, SetJavascript] = useState(false);
  const [front, Setfront] = useState(true);
  const [reactp, Setreactp] = useState(false);
  const [html, Sethtml] = useState(false);

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
      <Dropdown
        javascript={javascript}
        SetJavascript={SetJavascript}
        front={front}
        Setfront={Setfront}
        reactp={reactp}
        Setreactp={Setreactp}
        html={html}
        Sethtml={Sethtml}
      />
      {javascript &&
        JavascriptProjectDetails.map((detail) => (
          <Movie key={detail.id}>
            <Title>
              <motion.h2
                variants={fade}
                initial={fade.hidden}
                animate={fade.show}
              >
                {detail.title}
              </motion.h2>
              <a href={detail.githhub}>
                <Button
                  variants={fade}
                  initial={fade.hidden}
                  animate={fade.show}
                >
                  GithHub
                </Button>
              </a>
            </Title>
            <motion.div
              variants={lineAnim}
              initial={lineAnim.hidden}
              animate={lineAnim.show}
              className="line"
            ></motion.div>
            <a href={detail.liveSite}>
              <Hide>
                <motion.img
                  variants={photoAnim}
                  initial={photoAnim.hidden}
                  animate={photoAnim.show}
                  src={detail.cover}
                  alt="athlete"
                />
              </Hide>
            </a>
          </Movie>
        ))}
      {front &&
        FrontProjectDetails.map((detail) => (
          <Movie key={detail.id}>
            <Title>
              <motion.h2
                variants={fade}
                initial={fade.hidden}
                animate={fade.show}
              >
                {detail.title}
              </motion.h2>
              <a href={detail.githhub}>
                <Button
                  variants={fade}
                  initial={fade.hidden}
                  animate={fade.show}
                >
                  GithHub
                </Button>
              </a>
            </Title>
            <motion.div
              variants={lineAnim}
              initial={lineAnim.hidden}
              animate={lineAnim.show}
              className="line"
            ></motion.div>
            <a href={detail.liveSite}>
              <Hide>
                <motion.img
                  variants={photoAnim}
                  initial={photoAnim.hidden}
                  animate={photoAnim.show}
                  src={detail.cover}
                  alt="athlete"
                />
              </Hide>
            </a>
          </Movie>
        ))}
      {html &&
        HtmlProjectDetails.map((detail) => (
          <Movie key={detail.id}>
            <Title>
              <motion.h2
                variants={fade}
                initial={fade.hidden}
                animate={fade.show}
              >
                {detail.title}
              </motion.h2>
              <a href={detail.githhub}>
                <Button
                  variants={fade}
                  initial={fade.hidden}
                  animate={fade.show}
                >
                  GithHub
                </Button>
              </a>
            </Title>
            <motion.div
              variants={lineAnim}
              initial={lineAnim.hidden}
              animate={lineAnim.show}
              className="line"
            ></motion.div>
            <a href={detail.liveSite}>
              <Hide>
                <motion.img
                  variants={photoAnim}
                  initial={photoAnim.hidden}
                  animate={photoAnim.show}
                  src={detail.cover}
                  alt="athlete"
                />
              </Hide>
            </a>
          </Movie>
        ))}
      {reactp &&
        ReactProjectDetails.map((detail) => (
          <Movie key={detail.id}>
            <Title>
              <motion.h2
                variants={fade}
                initial={fade.hidden}
                animate={fade.show}
              >
                {detail.title}
              </motion.h2>
              <a href={detail.githhub}>
                <Button
                  variants={fade}
                  initial={fade.hidden}
                  animate={fade.show}
                >
                  GithHub
                </Button>
              </a>
            </Title>
            <motion.div
              variants={lineAnim}
              initial={lineAnim.hidden}
              animate={lineAnim.show}
              className="line"
            ></motion.div>
            <a href={detail.liveSite}>
              <Hide>
                <motion.img
                  variants={photoAnim}
                  initial={photoAnim.hidden}
                  animate={photoAnim.show}
                  src={detail.cover}
                  alt="athlete"
                />
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
  @media (max-width: 990px) {
    padding: 1.8rem 1.8rem;
  }
  @media (max-width: 416px) {
    padding: 1.5rem 1.5rem;
  }
  @media (max-width: 339px) {
    padding: 1rem 1rem;
  }
  h2 {
    padding: 1rem 0rem;
  }
`;
const Movie = styled(motion.div)`
  padding: 0rem 2%;
  margin-top: 1rem;
  /* @media (max-width: 990px) {
    padding: 0rem 5rem;
  }
  @media (max-width: 416px) {
    padding: 0rem 3rem;
  }
  @media (max-width: 379px) {
    padding: 0rem 1rem;
  } */
  .line {
    height: 0.5rem;
    background: #23d992;
    margin-bottom: 1rem;
    width: 100%;
    @media (max-width: 464px) {
      height: 0.3rem;
    }
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;

    @media (max-width: 990px) {
      height: 70vh;
    }
    @media (max-width: 768px) {
      height: 45vh;
    }
    @media (max-width: 580px) {
      height: 40vh;
    }
    @media (max-width: 379px) {
      height: 30vh;
    }
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;
const Title = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h2 {
    @media (max-width: 990px) {
      font-size: 3rem;
    }
    @media (max-width: 600px) {
      font-size: 2.3rem;
    }
    @media (max-width: 464px) {
      font-size: 1.8rem;
    }
    @media (max-width: 396px) {
      font-size: 1.3rem;
    }
  }
`;
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
const Button = styled(motion.button)`
  color: black;
`;

export default OurWork;

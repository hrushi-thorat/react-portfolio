import React from "react";
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../pages/Animation";
import styled from "styled-components";
const ContactUS = () => {
  return (
    <ContactStyle
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: "#ffff" }}
    >
      <Title>
        <Hide>
          <motion.h1 style={{ color: "#353535" }} variants={titleAnim}>
            Get in Touch
          </motion.h1>
        </Hide>
      </Title>
      <Hide>
        <Social variants={titleAnim}>
          <Circle />
          <h2>Message us </h2>
        </Social>
      </Hide>
      <Hide>
        <Social variants={titleAnim}>
          <Circle />
          <h2>Social Media</h2>
        </Social>
      </Hide>
      <Hide>
        <Social variants={titleAnim}>
          <Circle />
          <h2>Get In Touch </h2>
        </Social>
      </Hide>
    </ContactStyle>
  );
};
const ContactStyle = styled(motion.div)`
  padding: 5rem 6rem;
  color: #353535;
  min-height: 90vh;
`;
const Title = styled.div`
  margin-bottom: 3rem;
  color: black;
`;
const Hide = styled.div`
  overflow: hidden;
`;
const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 1rem;
  }
`;

const Circle = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: #353535;
`;
export default ContactUS;

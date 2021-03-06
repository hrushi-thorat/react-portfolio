import styled from "styled-components";
import { motion } from "framer-motion";
export const About = styled(motion.div)`
  min-height: 90vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  padding: 3rem 6rem;

  @media (max-width: 900px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
`;
export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
  @media (max-width: 900px) {
    padding: 0;
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
  @media (max-width: 414px) {
    button {
      margin: 5rem 1rem;
    }
  }
`;
export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
    @media (max-width: 500px) {
      display: none;
    }
  }
`;

export const Hide = styled.div`
  overflow: hidden;
  @media (max-width: 360px) {
    font-size: 1rem;
  }
`;

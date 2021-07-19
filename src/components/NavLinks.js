import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router";
const NavLinks = (props) => {
  const animateFrom = { opacity: 0, y: -40 };
  const animateto = { opacity: 1, y: 0 };

  const { pathname } = useLocation();
  return (
    <ul>
      <motion.li
        initial={animateFrom}
        animate={animateto}
        transition={{ delay: 0.05 }}
        onClick={() => props.isMobile && props.CloseMobileMenu()}
      >
        <Link to="/">1.About Us</Link>
        <Line
          transition={{ duration: 0.75 }}
          initial={{ width: "0%" }}
          animate={{ width: pathname === "/" ? "50%" : "0%" }}
        />
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateto}
        transition={{ delay: 0.1 }}
        onClick={() => props.isMobile && props.CloseMobileMenu()}
      >
        <Link to="/work">2.Our Work</Link>
        <Line
          transition={{ duration: 0.75 }}
          initial={{ width: "0%" }}
          animate={{ width: pathname === "/work" ? "50%" : "0%" }}
        />
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateto}
        transition={{ delay: 0.15 }}
        onClick={() => props.isMobile && props.CloseMobileMenu()}
      >
        <Link to="/contact">3.Skills</Link>
        <Line
          transition={{ duration: 0.75 }}
          initial={{ width: "0%" }}
          animate={{ width: pathname === "/contact" ? "50%" : "0%" }}
        />
      </motion.li>
    </ul>
  );
};
const Line = styled(motion.div)`
  height: 0.3rem;
  width: 0%;
  background: #23d997;
  position: absolute;
  bottom: -80%;
  left: 60%;
  border-radius: 6rem;
  @media (max-width: 990px) {
    display: none;
  }
`;

export default NavLinks;

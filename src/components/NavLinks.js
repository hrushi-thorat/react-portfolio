import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navigation from "./Navigation";
import { useLocation } from "react-router";
const NavLinks = () => {
  const { pathname } = useLocation();
  return (
    <ul>
      <li>
        <Link to="/">1.About Us</Link>
        <Line
          transition={{ duration: 0.75 }}
          initial={{ width: "0%" }}
          animate={{ width: pathname === "/" ? "50%" : "0%" }}
        />
      </li>
      <li>
        <Link to="/work">2.Our Work</Link>
        <Line
          transition={{ duration: 0.75 }}
          initial={{ width: "0%" }}
          animate={{ width: pathname === "/work" ? "50%" : "0%" }}
        />
      </li>
      <li>
        <Link to="/contact">3.Skills</Link>
        <Line
          transition={{ duration: 0.75 }}
          initial={{ width: "0%" }}
          animate={{ width: pathname === "/contact" ? "50%" : "0%" }}
        />
      </li>
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

  @media (max-width: 1300px) {
    left: 0%;
  }
`;
export default NavLinks;

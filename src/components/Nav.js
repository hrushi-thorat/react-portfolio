import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";
import { useLocation } from "react-router";
const Nav = () => {
  const { pathname } = useLocation();
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">
          Capture
        </Link>
      </h1>
      <Navigation />
      <MobileNavigation />
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 6rem;
  background: #282828;
  a {
    text-decoration: none;
    color: white;
  }
  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
  }
  #logo {
    font-size: 1.2rem;
    font-weight: lighter;
    font-family: "Lobster", cursive;
  }
  li {
    padding-left: 8rem;
    position: relative;
  }
`;

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
export default Nav;

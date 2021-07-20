import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";

const Nav = () => {
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
  @media (max-width: 990px) {
    opacity: 1;
  }
  a {
    text-decoration: none;
    color: white;
    @media (max-width: 990px) {
      :hover {
        color: #8c1cd1;
      }
    }
  }
  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    @media (max-width: 990px) {
      flex-direction: column;
      position: absolute;
      top: 10vh;
      right: 0;
      width: 100%;
      height: 20vh;
      background: #181818;
      border-top: 2px solid #8c1cd1;
      padding: 0.8rem 0rem;
    }
  }
  #logo {
    font-size: 1.2rem;
    font-weight: lighter;
    font-family: "Lobster", cursive;
  }
  li {
    padding-left: 8rem;
    position: relative;
    @media (max-width: 990px) {
      padding-left: 10%;
    }
  }
`;

export default Nav;

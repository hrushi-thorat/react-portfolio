import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">
          Capture
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">1.About Us</Link>
        </li>
        <li>
          <Link to="/work">2.Our Work</Link>
        </li>
        <li>
          <Link to="/contact">3.Contact Us</Link>
        </li>
      </ul>
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
export default Nav;

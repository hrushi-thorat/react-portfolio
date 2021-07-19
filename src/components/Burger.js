import React from "react";
import styled from "styled-components";

const Burger = () => {
  return (
    <>
      <StyledBurger>
        <div />
        <div />
        <div />
      </StyledBurger>
    </>
  );
};

const StyledBurger = styled.div`
  position: absolute;
  pointer-events: none;
  top: 5%;
  right: 2%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: white;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }
`;

export default Burger;

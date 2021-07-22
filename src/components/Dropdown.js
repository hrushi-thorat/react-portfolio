import styled from "styled-components";
import { useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { motion } from "framer-motion";
import { NavItemsAnim, NavAnim, NavBarAnim } from "../pages/Animation";

const Dropdown = ({
  javascript,
  SetJavascript,
  front,
  Setfront,
  reactp,
  Setreactp,
}) => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
    console.log(open);
  };
  const JsSet = () => {
    SetJavascript(!javascript);
    Setfront(false);
    Setreactp(false);
  };
  const FrontSet = () => {
    Setfront(!front);
    SetJavascript(false);
    Setreactp(false);
  };
  const ReactSets = () => {
    SetJavascript(false);
    Setfront(false);
    Setreactp(!reactp);
  };

  return (
    <div>
      <Menu variants={NavAnim}>
        <BiMenuAltLeft size="40px" onClick={toggle} />
      </Menu>
      {open && (
        <Drop variants={NavBarAnim}>
          <ul>
            <motion.li variants={NavItemsAnim} onClick={JsSet}>
              Javascript
            </motion.li>
            <motion.li variants={NavItemsAnim} onClick={ReactSets}>
              React
            </motion.li>
            <motion.li variants={NavItemsAnim} onClick={FrontSet}>
              FrontEnd Mentor
            </motion.li>
          </ul>
        </Drop>
      )}
    </div>
  );
};

const Drop = styled(motion.div)`
  position: absolute;
  background: gray;
  width: 100%;
  left: 0;
  top: 10vh;
  /* justify-content: space-between; */
  padding-top: 0;
  font-weight: bolder;
  font-size: 1.3rem;
  margin-bottom: 3rem;
  @media (max-width: 990px) {
    font-size: 1rem;
  }
  @media (max-width: 488px) {
    font-size: 0.8rem;
  }
  /* display: none; */
  ul {
    color: white;
    padding: 0.6rem 6rem 0rem 6rem;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 990px) {
      padding: 0.6rem 1.5rem 0rem 6rem;
    }
    @media (max-width: 416px) {
      padding: 0.6rem 1.5rem 0rem 4rem;
    }
    @media (max-width: 360px) {
      padding: 0.6rem 0.8rem 0rem 3rem;
    }
    @media (max-width: 320px) {
      padding: 0.6rem 1.3rem 0rem 3rem;
      font-size: 0.7rem;
      font-weight: lighter;
    }
  }
  li {
    cursor: pointer;
    margin-bottom: 1rem;
  }
`;
const Menu = styled(motion.div)`
  position: absolute;
  top: 10vh;
  left: 0;
  z-index: 3;
  cursor: pointer;
`;
export default Dropdown;

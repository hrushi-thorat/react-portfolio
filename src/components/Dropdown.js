import styled from "styled-components";
import { useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { motion } from "framer-motion";

const Dropdown = ({
  javascript,
  SetJavascript,
  front,
  Setfront,
  reactp,
  Setreactp,
  html,
  Sethtml,
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
    Sethtml(false);
  };
  const FrontSet = () => {
    Setfront(!front);
    SetJavascript(false);
    Setreactp(false);
    Sethtml(false);
  };
  const ReactSets = () => {
    SetJavascript(false);
    Setfront(false);
    Setreactp(!reactp);
    Sethtml(false);
  };
  const HtmlSet = () => {
    SetJavascript(false);
    Setfront(false);
    Setreactp(false);
    Sethtml(!html);
  };

  return (
    <div>
      <Menu>
        <BiMenuAltLeft size="40px" onClick={toggle} />
      </Menu>
      {open && (
        <Drop>
          <ul>
            <li onClick={JsSet}>Javascript</li>
            <li onClick={ReactSets}>React</li>
            <li onClick={FrontSet}>FrontEnd Mentor</li>
            <li onClick={HtmlSet}>Html,Css</li>
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

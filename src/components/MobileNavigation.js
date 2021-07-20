import styled from "styled-components";
import { motion } from "framer-motion";
import NavLinks from "./NavLinks";
import { useState } from "react";
//hamberger menu icon

import { CgMenuRound } from "react-icons/cg";
import { CgCloseO } from "react-icons/cg";
const MobileNavigation = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
    console.log(open);
  };

  const hambergerIcon = (
    <BurgerMEnu>
      <CgMenuRound onClick={toggle} size="40px" color="white" />
    </BurgerMEnu>
  );

  const closeIcon = (
    <BurgerMEnu>
      <CgCloseO onClick={toggle} size="40px" color="white" />
    </BurgerMEnu>
  );

  const CloseMobileMenu = () => setOpen(false);
  return (
    <MobileNavigationDiv>
      {open ? closeIcon : hambergerIcon}

      {open && <NavLinks isMobile={true} CloseMobileMenu={CloseMobileMenu} />}
    </MobileNavigationDiv>
  );
};
const BurgerMEnu = styled(motion.div)`
  position: absolute;
  right: 5%;
`;
const MobileNavigationDiv = styled(motion.div)`
  display: none;
  @media (max-width: 990px) {
    display: flex;
    align-items: center;
  }
`;

export default MobileNavigation;

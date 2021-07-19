import NavLinks from "./NavLinks";
import styled from "styled-components";
import { motion } from "framer-motion";
const Navigation = () => {
  return (
    <NavigationDiv>
      <NavLinks />
    </NavigationDiv>
  );
};

const NavigationDiv = styled(motion.div)`
  @media (max-width: 990px) {
    display: none;
  }
`;
export default Navigation;

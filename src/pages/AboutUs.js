import React from "react";
import AboutSection from "../components/AboutSection";

import { motion } from "framer-motion";
import { pageAnimation } from "../pages/Animation";
const AboutUs = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <AboutSection />
    </motion.div>
  );
};
export default AboutUs;

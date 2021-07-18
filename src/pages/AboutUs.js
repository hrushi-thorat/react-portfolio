import React from "react";
import AboutSection from "../components/AboutSection";

import FaqSection from "../components/FaqSection";

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

      <FaqSection />
    </motion.div>
  );
};
export default AboutUs;

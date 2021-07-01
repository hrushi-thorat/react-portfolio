import React from "react";
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../pages/Animation";

const ContactUS = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <h1>Our Contact</h1>
    </motion.div>
  );
};
export default ContactUS;

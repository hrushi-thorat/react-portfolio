import React from "react";
import { motion } from "framer-motion";
import { PageAnimation } from "./Animation";

const ContactUS = () => {
  return (
    <motion.div
      exit="exit"
      variants={PageAnimation}
      initial="hidden"
      animate="show"
    >
      <h1>Our Contact</h1>
    </motion.div>
  );
};
export default ContactUS;

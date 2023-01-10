import React from "react";
import { motion } from "framer-motion";

const Button = ({ text, link }) => {
  return (
    <motion.a
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.5 },
      }}
      href={link}
      className={`dark:text-white text-md font-medium px-16 py-3 rounded-md border border-primaryMain hover:bg-primaryDark w-max hover:text-white`}
    >
      {text}
    </motion.a>
  );
};

export default Button;

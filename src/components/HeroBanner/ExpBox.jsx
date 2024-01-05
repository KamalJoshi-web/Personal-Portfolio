import React from "react";
import { slideInBottom } from "../../animations/animations";
import { motion } from "framer-motion";

const ExpBox = ({ title, detail, posTop, posLeft, delay }) => {
  return (
    <motion.div
      variants={slideInBottom}
      initial="initial"
      animate="animate"
      custom={delay}
      className={`w-max py-2 px-4  bg-LightLavender shadow-xl absolute dark:bg-LightGray ${posTop} ${posLeft} rounded-sm`}
    >
      <h1 className=" font-notoJP tracking-wider font-extrabold text-center text-RoyalBlue  ">
        {title}
      </h1>
      <p className=" font-oswald text-DarkBlueishBlack font-semibold text-center tracking-widest ">
        {detail}
      </p>
    </motion.div>
  );
};

export default ExpBox;

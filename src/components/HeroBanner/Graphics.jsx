import React from "react";
import Avatar from "../../assets/me.png";
import ExpBox from "./ExpBox";
import { slideInLeft, fadeIn } from "../../animations/animations";
import { motion } from "framer-motion";

const Graphics = () => {
  return (
    <div className="relative overflow-hidden">
      <ExpBox
        title={"Projects"}
        detail={"20+"}
        posTop="top-[25%]"
        posLeft="left-[25%]"
        delay={1.8}
      />
      <ExpBox
        title={"Experience"}
        detail={"1+ Year"}
        posTop="top-[45%]"
        posLeft="left-[5%]"
        delay={2}
      />
      <ExpBox
        title={"Expertise"}
        detail={"5+"}
        posTop="top-[65%]"
        posLeft="left-[0%]"
        delay={2.2}
      />
      <motion.img
        variants={slideInLeft}
        initial="initial"
        animate="animate"
        src={Avatar}
        alt=" My Avatar"
        className=""
      />
      <motion.div
        variants={fadeIn}
        initial="initial"
        animate="animate"
        custom={1.5}
        className="-z-10 absolute 
        bg-gradient-to-r from-BrightOrange to-Peach  dark:from-Peach dark:to-BrightOrange
        rounded-full  top-[33%] left-[5%]
        max-w-96 max-h-96 h-full  w-full
        "
      />
    </div>
  );
};

export default Graphics;

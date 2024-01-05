import React from "react";
import HelloIcon from "../../assets/hello.png";
import { Paragraphs, Heading, Button } from "../index";
import { fadeIn } from "../../animations/animations";
import { motion } from "framer-motion";

const MyInfo = () => {
  return (
    <motion.div
      variants={fadeIn}
      initial="initial"
      animate="animate"
      custom={0.7}
      className="pt-5"
    >
      <div className=" flex items-center gap-2">
        <img src={HelloIcon} alt="Waving at You" />
        <Heading>Hello there! I'm</Heading>
      </div>
      <h1
        className=" font-notoJP font-extrabold text-7xl 
        text-transparent  bg-clip-text bg-gradient-to-r from-Turquoise to-RoyalBlue
          dark:from-RoyalBlue dark:to-Turquoise max-md:text-5xl max-md:text-center"
      >
        Kamal Joshi
      </h1>
      <Paragraphs className=" my-5 max-md:text-center">
        A creative and detail-oriented frontend developer with
        <br className=" max-md:hidden" /> a knack for crafting visually stunning
        and user-friendly <br className=" max-md:hidden" /> websites and web
        applications.
      </Paragraphs>
      <div className=" flex gap-5 max-md:justify-center">
        <Button whiteBtn={true} href="#contact">
          Hire Me
        </Button>
        <Button href="#work">Work</Button>
      </div>
    </motion.div>
  );
};

export default MyInfo;

import React from "react";
import { list } from "./skillList";
import { Heading, Paragraphs } from "../index";
import { motion } from "framer-motion";
import {
  staggerAnimationVariant,
  slideInBottom,
} from "../../animations/animations";

const Skills = () => {
  return (
    <motion.div
      variants={slideInBottom}
      initial="initial"
      whileInView="animate"
      custom={0.1}
      className=" min-h-[35vh] mb-10 "
      id="skill"
    >
      <Heading className=" text-5xl my-10 text-center"> Tech Stack </Heading>
      <Paragraphs className=" text-center mb-10">
        I'm proficient in HTML, CSS, and JavaScript, the basics of web
        development. <br className=" max-md:hidden" /> I enhance styles with
        Sass, build interactive interfaces with React.js,
        <br className=" max-md:hidden" /> and create sleek designs with
        Material-UI and Tailwind CSS. <br className=" max-md:hidden" /> Let's
        collaborate to bring your digital ideas to life!
      </Paragraphs>
      <ul className="flex  gap-8 items-center justify-center  flex-wrap">
        {list.map((item, index) => (
          <motion.li
            variants={staggerAnimationVariant}
            initial="initial"
            whileInView="animate"
            custom={index}
            key={index}
            className=" flex justify-center items-center w-20 h-20 rounded-full flex-wrap  
            bg-gradient-to-tr from-LightGray via-LightLavender to-Peach dark:from-DarkBlueishBlack  dark:to-Peach"
          >
            <img src={item.icon} alt={item.name + " Icon"} className="w-12" />
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Skills;

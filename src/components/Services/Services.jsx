import React from "react";
import { Heading } from "../index";
import ExperienceVector from "../../assets/vectors/Nerd-pana.svg";
import OptimizationVector from "../../assets/vectors/Webinar-pana.svg";
import ReactVector from "../../assets/vectors/Hand coding-pana.svg";
import FrontendVector from "../../assets/vectors/Website Creator-pana.svg";
import ResponsiveVector from "../../assets/vectors/Stress-pana.svg";
import ConsultationVector from "../../assets/vectors/Thinking face-pana.svg";
import { motion } from "framer-motion";
import {
  slideInTop,
  slideInBottom,
  slideInLeft,
  slideInRight,
} from "../../animations/animations";

const Services = () => {
  const imageStyles = "w-[50%]  ml-auto my-2 ";
  const headingStyles =
    " absolute drop-shadow-xl top-[80%] left-[10px] max-md:top-[75%] text-base max-md:text-[12px]  max-md:left-[4px] ";
  const itemsStyles = "shadow-lg rounded-md ";

  return (
    <div className=" min-h-[65vh]" id="services">
      <Heading className=" text-5xl text-center my-5">What I Do</Heading>
      <div className=" grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2  gap-2 w-[85%] mx-auto min-h-[50vh] my-10 max-md:min-h-[85vh]">
        {/* 1 grid-items */}
        <motion.div
          variants={slideInRight}
          initial="initial"
          whileInView="animate"
          custom={0.3}
          className=" relative row-span-2  bg-gradient-to-br from-RoyalBlue to-Turquoise  
        max-lg:row-span-3 max-md:col-span-2 shadow-lg rounded-md "
        >
          <img src={ExperienceVector} alt="Graphics" className={imageStyles} />
          <Heading className={`${headingStyles} `}> 1+ Year Experience</Heading>
        </motion.div>

        {/* 2 grid-items */}
        <motion.div
          variants={slideInTop}
          initial="initial"
          whileInView="animate"
          custom={0.8}
          className=" relative bg-RoyalBlue shadow-lg rounded-md "
        >
          <img src={FrontendVector} alt="Graphics" className={imageStyles} />
          <Heading className={`${headingStyles}`}>Frontend Development</Heading>
        </motion.div>
        {/* 3 grid-items */}

        <motion.div
          variants={slideInTop}
          initial="initial"
          whileInView="animate"
          custom={1}
          className="  relative  bg-Turquoise shadow-lg rounded-md "
        >
          <img src={ReactVector} alt="Graphics" className={imageStyles} />
          <Heading className={`${headingStyles}`}>React.js Development</Heading>
        </motion.div>

        {/* 4 grid-items */}
        <motion.div
          variants={slideInLeft}
          initial="initial"
          whileInView="animate"
          custom={1.5}
          className="  relative  bg-BrightOrange max-lg:col-span-2 shadow-lg rounded-md "
        >
          <img src={ResponsiveVector} alt="Graphics" className={imageStyles} />
          <Heading className={`${headingStyles}`}>Responsive Design </Heading>
        </motion.div>

        {/* 5 grid-items */}
        <motion.div
          variants={slideInBottom}
          initial="initial"
          whileInView="animate"
          custom={1.2}
          className="  relative col-span-2 bg-gradient-to-tr from-BrightOrange to-Peach max-lg:col-span-1 max-md:col-span-2 shadow-lg rounded-md "
        >
          <img
            src={OptimizationVector}
            alt="Graphics"
            className={imageStyles}
          />
          <Heading className={`${headingStyles}`}>
            Performance Optimization{" "}
          </Heading>
        </motion.div>

        {/* 6 grid-items */}
        <motion.div
          variants={slideInLeft}
          initial="initial"
          whileInView="animate"
          custom={1.8}
          className="  relative  bg-Peach max-md:col-span-2 shadow-lg rounded-md "
        >
          <img
            src={ConsultationVector}
            alt="Graphics"
            className={imageStyles}
          />
          <Heading className={`${headingStyles}`}>Consultation</Heading>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;

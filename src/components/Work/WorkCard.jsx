import React from "react";
import { Paragraphs, Heading } from "../index";
import { FaCode, FaLink } from "react-icons/fa";
import { motion } from "framer-motion";
import { popUp } from "../../animations/animations";

const WorkCard = ({
  imgUrl,
  projectName,
  projectDesc,
  techUsed,
  codeLink,
  liveLink,
  delay,
}) => {
  return (
    <motion.div
      variants={popUp}
      initial="initial"
      whileInView="animate"
      custom={delay}
      className="max-w-[275px]  h-96 group flex justify-center 
      text-center relative overflow-hidden  rounded cursor-pointer duration-200 shadow-2xl max-md:h-72"
    >
      {/* Hover Image */}
      <img
        src={imgUrl}
        alt="An image"
        className=" object-cover  ease-in-out duration-500 group-hover:rotate-6 group-hover:scale-125"
      />
      {/* Hover Card */}
      <div className="absolute  invisible bg-LightGray dark:bg-DarkBlueishBlack w-full h-full opacity-10 transition-opacity duration-500 group-hover:opacity-90 group-hover:visible flex flex-col justify-center items-center gap-5">
        {/* Project Title */}
        <Heading>{projectName}</Heading>
        {/* Project Details */}
        <Paragraphs>{projectDesc}</Paragraphs>
        {/* Tech Used */}
        <div className=" flex justify-center gap-2 items-center flex-wrap py-2">
          {techUsed.map((item, index) => (
            <div
              key={index}
              className=" flex justify-center items-center w-8 h-8 rounded-full  
               "
            >
              <img src={item} alt="tech Used" />
            </div>
          ))}
        </div>
        {/* Nav Link */}
        <div className=" flex justify-center items-center gap-5">
          <a href={codeLink} target="_blank">
            <FaCode
              size={20}
              className="  text-RoyalBlue dark:text-Turquoise "
            />
          </a>
          <a href={liveLink} target="_blank">
            <FaLink
              target="_blank"
              href={liveLink}
              size={20}
              className="  text-RoyalBlue dark:text-Turquoise"
            />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkCard;

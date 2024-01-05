import React from "react";
import { Heading, WorkCard } from "../../components/index";
import { list } from "./projects";
import { motion } from "framer-motion";
import { pageUp } from "../../animations/animations";

const MyProjects = () => {
  return (
    <aside className=" min-h-screen" id="projects">
      <Heading className=" text-5xl py-10  ml-8 max-md:ml-0 max-md:text-center ">
        My Projects
      </Heading>
      <ul className=" flex gap-10 justify-center items-center flex-wrap pb-10 max-md:gap-3">
        {list.map((item, index) => (
          <li key={index}>
            <WorkCard
              imgUrl={item.image}
              projectName={item.name}
              projectDesc={item.desc}
              techUsed={item.tech}
              liveLink={item.liveLink}
              codeLink={item.codeLink}
            />
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default MyProjects;

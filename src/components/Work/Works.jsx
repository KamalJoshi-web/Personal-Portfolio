import React from "react";
import WorkCard from "./WorkCard";
import { Heading, Button } from "../index";
import { list } from "../Work/workList";
import { motion } from "framer-motion";
import { slideInBottom } from "../../animations/animations";
const Works = () => {
  return (
    <div className=" min-h-[90vh] mb-10 mt-20 px-8 " id="work">
      {/* More Work */}
      <motion.div
        variants={slideInBottom}
        initial="initial"
        whileInView="animate"
        custom={0.1}
        className=" flex justify-around  items-center py-10  "
      >
        <Heading className="text-5xl"> My Projects</Heading>
        <Button
          whiteBtn={true}
          className=" max-md:hidden"
          href={"/myprojects#projects"}
        >
          See More
        </Button>
      </motion.div>
      {/* Work Cards */}
      <ul className=" flex justify-center gap-12 flex-wrap">
        {list.map((item, index) => (
          <li key={index}>
            <WorkCard
              imgUrl={item.image}
              projectName={item.name}
              projectDesc={item.desc}
              techUsed={item.tech}
              liveLink={item.liveLink}
              codeLink={item.codeLink}
              delay={index}
            />
          </li>
        ))}
      </ul>
      {/* Button For Mobile Devices */}
      <Button
        className=" hidden max-md:block m-auto my-10"
        href={"/myprojects#projects"}
      >
        See More
      </Button>
    </div>
  );
};

export default Works;

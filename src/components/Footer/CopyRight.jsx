import React from "react";
import { AiTwotoneCopyright } from "react-icons/ai";
import { Paragraphs, Heading } from "../index";
import Fiverr from "../../assets/fiverr.png";
import Freelancer from "../../assets/freelancer.png";
import Upwork from "../../assets/upwork.png";

const CopyRight = () => {
  const freelanceLinks = [
    {
      name: "Upwork",
      icon: Upwork,
      path: "https://www.upwork.com/freelancers/~01a5b11b5fa2a5bc44",
    },
    {
      name: "Fiverr",
      icon: Fiverr,
      path: "https://www.fiverr.com/kamaljoshi305",
    },
    {
      name: "Freelancer",
      icon: Freelancer,
      path: "https://www.freelancer.com/u/kamaljoshi1511",
    },
  ];

  return (
    <div className="flex flex-col justify-around">
      {/* Freelance */}
      <ul className=" flex items-center justify-around flex-wrap">
        {freelanceLinks.map((item, index) => (
          <li key={index}>
            <a href={item.path} target="_blank">
              <img
                src={item.icon}
                alt={item.name}
                className=" invert-0 dark:invert w-12 hover:scale-110 duration-200 "
              />
            </a>
          </li>
        ))}
      </ul>
      <Heading className=" text-base">
        Copyright 2023. All Rights Reserved
      </Heading>
    </div>
  );
};

export default CopyRight;

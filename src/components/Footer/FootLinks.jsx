import React from "react";
import { Paragraphs } from "../index";
import { HashLink } from "react-router-hash-link";
const FootLinks = () => {
  const links1 = [
    { name: "Home", path: "/#home" },
    { name: "Skills", path: "/#skill" },
    { name: "Works", path: "/#work" },
  ];
  const links2 = [
    { name: "Contact", path: "/#contact" },
    { name: "Services", path: "/#services" },
    { name: "About Me", path: "/#home" },
  ];

  return (
    <div className=" flex justify-between gap-20 max-md:flex-col items-center max-md:gap-0 ">
      {/* list One */}
      <ul>
        {links1.map((item, index) => (
          <li key={index}>
            <HashLink to={item.path}>
              <Paragraphs
                className="max-md:text-center my-3 hover:text-RoyalBlue
               dark:hover:text-Turquoise hover:scale-110 duration-200"
              >
                {item.name}
              </Paragraphs>
            </HashLink>
          </li>
        ))}
      </ul>
      {/* list two */}
      <ul>
        {links2.map((item, index) => (
          <li key={index}>
            <HashLink to={item.path}>
              <Paragraphs
                className="max-md:text-center my-3 hover:text-RoyalBlue
               dark:hover:text-Turquoise hover:scale-110 duration-200"
              >
                {item.name}
              </Paragraphs>
            </HashLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FootLinks;

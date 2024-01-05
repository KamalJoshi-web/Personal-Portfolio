import React from "react";
import { HashLink } from "react-router-hash-link";

const NLinks = ({ isOpen }) => {
  const links = [
    { name: "Home", path: "/#home" },
    { name: "Skills", path: "/#skill" },
    { name: "Works", path: "/#work" },
    { name: "Contact", path: "/#contact" },
    { name: "Services", path: "/#services" },
  ];

  const responsiveStyles =
    "max-md:justify-center max-md:items-center  max-md:absolute max-md:flex-col ";

  return (
    <ul
      className={`flex gap-8  duration-200 z-10  ${responsiveStyles} ${
        !isOpen
          ? " max-md:bg-gradient-to-t max-md:from-LightLavender max-md:to-LightGray  max-md:w-full max-md:py-6 max-md:rounded-2xl max-md:shadow-3xl max-md:top-20 max-md:visible max-md:opacity-100"
          : "  max-md:w-0  max-md:py-0  max-md:top-0 max-md:invisible max-md:opacity-0"
      } `}
    >
      {links.map((item, index) => (
        <li
          key={index}
          className=" font-oswald font-normal
           text-DarkBlueishBlack dark:text-LightLavender
           hover:text-RoyalBlue dark:hover:text-Turquoise
          hover:scale-110 duration-200 max-md:dark:text-DarkBlueishBlack"
        >
          <HashLink to={item.path} className=" tracking-wide">
            {item.name}
          </HashLink>
        </li>
      ))}
    </ul>
  );
};

export default NLinks;

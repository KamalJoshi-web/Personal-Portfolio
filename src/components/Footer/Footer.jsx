import React from "react";
import { Logo, Socials, Paragraphs } from "../index";
import FootLinks from "./FootLinks";
import CopyRight from "./CopyRight";

const Footer = () => {
  return (
    <footer
      className=" bg-gradient-to-bl from-Peach  to-LightLavender 
     dark:from-black min-h-[30vh] gap-5 py-5  flex justify-around max-md:flex-col max-md:justify-center max-md:items-center"
    >
      <div className=" flex flex-col justify-around  ">
        <Logo />
        <Socials className=" max-md:hidden" />
      </div>
      <FootLinks />
      <Socials className=" hidden max-md:flex" />
      <CopyRight />
    </footer>
  );
};

export default Footer;

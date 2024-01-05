import React, { useState } from "react";
import { Logo, Socials } from "../index";
import NLinks from "./NLinks";
import Menu from "./Menu";
import { motion } from "framer-motion";
import { slideInTop } from "../../animations/animations";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <motion.nav
      variants={slideInTop}
      initial="initial"
      animate="animate"
      className=" z-10 relative flex justify-between items-center mx-0 py-3 px-8 max-md:justify-around max-md:px-0 max-md:mx-2"
    >
      <Logo theme={true} />
      <NLinks isOpen={isOpen} />
      <Socials className=" max-md:hidden" />
      <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
    </motion.nav>
  );
};

export default Navbar;

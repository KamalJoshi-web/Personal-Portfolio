import React from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Menu = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className=" duration-200 hidden max-md:flex"
      onClick={() => setIsOpen(!isOpen)}
    >
      {isOpen ? (
        <AiOutlineMenu
          size={25}
          className=" text-DarkBlueishBlack dark:text-LightLavender"
        />
      ) : (
        <AiOutlineClose
          size={25}
          className=" text-DarkBlueishBlack dark:text-LightLavender"
        />
      )}
    </div>
  );
};

export default Menu;

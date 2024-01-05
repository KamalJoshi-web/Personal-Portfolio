import React from "react";

const Paragraphs = ({ children, className = "", ...props }) => {
  return (
    <p
      className={` font-notoJP text-DarkBlueishBlack dark:text-LightLavender tracking-wider leading-7 ${className}`}
      {...props}
    >
      {children}
    </p>
  );
};

export default Paragraphs;

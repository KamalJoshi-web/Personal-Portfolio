import React from "react";

const Heading = ({ children, className = "", ...props }) => {
  return (
    <h2
      className={`font-oswald text-2xl tracking-wider text-DarkBlueishBlack dark:text-LightLavender ${className}`}
      {...props}
    >
      {children}
    </h2>
  );
};

export default Heading;

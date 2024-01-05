import React from "react";

const Container = ({ children }) => {
  return (
    <div className=" w-full  max-w-screen-2xl mx-auto overflow-hidden">
      {children}
    </div>
  );
};

export default Container;

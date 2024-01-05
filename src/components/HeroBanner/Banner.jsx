import React from "react";
import Graphics from "./Graphics";
import MyInfo from "./MyInfo";

const Banner = () => {
  return (
    <div
      className=" min-h-[90vh] flex items-center justify-around flex-wrap-reverse gap-10 mb-16 -mt-5 max-md:-mt-14"
      id="home"
    >
      <MyInfo />
      <Graphics />
    </div>
  );
};

export default Banner;

import React from "react";
import { HashLink } from "react-router-hash-link";

const Button = ({
  type = "button",
  children,
  className = "",
  whiteBtn,
  href,
  ...props
}) => {
  const whiteStyles =
    "border-DarkBlueishBlack hover:text-LightLavender hover:bg-DarkBlueishBlack dark:border-LightLavender dark:bg-LightLavender dark:text-DarkBlueishBlack dark:hover:bg-DarkBlueishBlack dark:hover:text-LightLavender ";

  const blackStyle =
    " border-DarkBlueishBlack bg-DarkBlueishBlack  text-LightLavender hover:bg-LightLavender hover:text-DarkBlueishBlack   dark:border-LightLavender dark:text-LightLavender dark:hover:text-DarkBlueishBlack dark:hover:bg-LightLavender";
  return (
    <>
      {href ? (
        <HashLink
          type={type}
          className={` py-[6px]  w-20  font-oswald font-light border duration-200 text-center cursor-pointer
    ${whiteBtn ? whiteStyles : blackStyle} ${className}`}
          to={href}
          {...props}
        >
          {children}
        </HashLink>
      ) : (
        <button
          type={type}
          className={` py-[6px]  w-20  font-oswald font-light border duration-200 text-center cursor-pointer
      ${whiteBtn ? whiteStyles : blackStyle} ${className}`}
          {...props}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;

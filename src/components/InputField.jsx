import React, { useId, forwardRef } from "react";

const InputField = forwardRef(
  ({ label, helperText, type = "text", className = "", ...props }, ref) => {
    const id = useId();

    return (
      <div className="w-full">
        {label && <label htmlFor={id}>{label}</label>}
        <input
          type={type}
          className={` text-lg  font-notoJP font-semibold py-2 pl-3 text-DarkBlueishBlack w-full ${className} ${
            helperText && "border border-red-500 outline outline-red-400"
          }`}
          ref={ref}
          {...props}
          id={id}
        />

        {helperText && (
          <h4 className=" font-notoJP italic  text-sm mt-1 text-red-500 capitalize">
            {helperText}
          </h4>
        )}
      </div>
    );
  }
);

export default InputField;

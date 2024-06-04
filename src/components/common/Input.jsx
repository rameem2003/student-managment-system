import React from "react";

const Input = ({
  htmlFor,
  label,
  onChange,
  className,
  value,
  defaultValue,
}) => {
  return (
    <div className={` relative mt-5 ${className}`}>
      <div className="relative">
        <input
          value={value}
          defaultValue={defaultValue}
          type="text"
          id={htmlFor}
          onChange={(e) => onChange(e)}
          className=" block px-2.5 pb-2.5 pt-4 w-full font-sans font-normal text-base rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
        />
        <label
          htmlFor={htmlFor}
          className="absolute font-sans font-medium text-xl text-black duration-300 transform -translate-y-4 scale-75 top-[9px] z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-[9px] peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
        >
          {label}
        </label>
      </div>
    </div>
  );
};

export default Input;

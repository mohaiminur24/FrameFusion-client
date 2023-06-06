import React from "react";
import { NavLink } from "react-router-dom";

const PrimaryButton = ({ text, direction }) => {
  return (
    <NavLink to={direction}>
      <button className="px-5 py-2 text-sm bg-primary rounded-md text-white shadow-sm hover:bg-primaryHover mt-2">{text}</button>
    </NavLink>
  );
};

export default PrimaryButton;
